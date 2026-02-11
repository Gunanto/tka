const express = require('express');
const cors = require('cors');
const { sequelize, Question, Option, Statement } = require('./database');

const app = express();
const PORT = 3001;

app.use(cors({
    exposedHeaders: ['Content-Range', 'X-Total-Count']
}));
app.use(express.json());

// Helper to handle React Admin's sort/range/filter
const getPagination = (req) => {
    let { range, sort, filter } = req.query;

    let offset = 0;
    let limit = 10;
    let order = [['id', 'ASC']];
    let where = {};

    if (range) {
        const [start, end] = JSON.parse(range);
        offset = start;
        limit = end - start + 1;
    }

    if (sort) {
        const [field, direction] = JSON.parse(sort);
        order = [[field, direction]];
    }

    if (filter) {
        const filterObj = JSON.parse(filter);
        // Simple exact match filtering, expand for 'q' search if needed
        if (filterObj.q) {
            // Implement search logic here if needed
            delete filterObj.q;
        }
        where = { ...filterObj };
    }

    return { offset, limit, order, where };
};



// --- QUESTIONS ---

// GET List
app.get('/api/questions', async (req, res) => {
    try {
        const { offset, limit, order, where } = getPagination(req);

        const { count, rows } = await Question.findAndCountAll({
            where,
            offset,
            limit,
            order,
            include: [{ model: Option, as: 'options' }, { model: Statement, as: 'statements' }]
        });

        res.header('Content-Range', `questions ${offset}-${offset + rows.length - 1}/${count}`);
        res.header('X-Total-Count', count);

        // Quick transform for list view (maybe don't need full details)
        const formatted = rows.map(q => {
            const d = q.toJSON();
            // Parse image if string
            if (typeof d.image === 'string') {
                try { d.image = JSON.parse(d.image) } catch (e) { }
            }
            return d;
        });

        res.json(formatted);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// GET One
app.get('/api/questions/:id', async (req, res) => {
    try {
        const q = await Question.findByPk(req.params.id, {
            include: [
                { model: Option, as: 'options' },
                { model: Statement, as: 'statements' }
            ]
        });
        if (!q) return res.status(404).json({ error: 'Not found' });

        const data = q.toJSON();
        if (typeof data.image === 'string') {
            try { data.image = JSON.parse(data.image) } catch (e) { }
        }

        // Flatten options/statements for simpler editing in React Admin if desired,
        // OR keep them structured and write a custom input. 
        // For simplicity in React Admin, we might separate them or use specific components.
        // Let's return standard JSON.

        res.json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// CREATE
app.post('/api/questions', async (req, res) => {
    try {
        const { options, statements, ...body } = req.body;
        // Handle Image: if body.image is array/object, stringify it
        if (body.image) {
            body.image = JSON.stringify(body.image);
        }

        const q = await Question.create(body);

        // Handle Options creation
        if (options && Array.isArray(options)) {
            for (const opt of options) {
                const text = typeof opt === 'string' ? opt : opt.text;
                if (text) await Option.create({ text, questionId: q.id });
            }
        }

        // Handle Statements creation
        if (statements && Array.isArray(statements)) {
            for (const stmt of statements) {
                const text = typeof stmt === 'string' ? stmt : stmt.text;
                if (text) await Statement.create({ text, questionId: q.id });
            }
        }

        const fullQ = await Question.findByPk(q.id, {
            include: [{ model: Option, as: 'options' }, { model: Statement, as: 'statements' }]
        });

        const data = fullQ.toJSON();
        if (data.options) data.options = data.options.map(o => o.text);
        if (data.statements) data.statements = data.statements.map(s => s.text);
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// UPDATE
app.put('/api/questions/:id', async (req, res) => {
    try {
        const q = await Question.findByPk(req.params.id);
        if (!q) return res.status(404).json({ error: 'Not found' });

        const { options, statements, ...body } = req.body;
        if (body.image && typeof body.image !== 'string') {
            body.image = JSON.stringify(body.image);
        }

        await q.update(body);

        // Update Options: simpler to delete and recreate for this scale
        if (options && Array.isArray(options)) {
            await Option.destroy({ where: { questionId: q.id } });
            for (const opt of options) {
                const text = typeof opt === 'string' ? opt : opt.text;
                if (text) await Option.create({ text, questionId: q.id });
            }
        }

        // Update Statements
        if (statements && Array.isArray(statements)) {
            await Statement.destroy({ where: { questionId: q.id } });
            for (const stmt of statements) {
                const text = typeof stmt === 'string' ? stmt : stmt.text;
                if (text) await Statement.create({ text, questionId: q.id });
            }
        }

        const fullQ = await Question.findByPk(q.id, {
            include: [{ model: Option, as: 'options' }, { model: Statement, as: 'statements' }]
        });

        const data = fullQ.toJSON();
        if (data.options) data.options = data.options.map(o => o.text);
        if (data.statements) data.statements = data.statements.map(s => s.text);
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// DELETE
app.delete('/api/questions/:id', async (req, res) => {
    try {
        const q = await Question.findByPk(req.params.id);
        if (q) await q.destroy();
        res.json({ id: req.params.id });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


// --- USERS ---
const { User } = require('./database');

app.get('/api/users', async (req, res) => {
    try {
        const { offset, limit, order, where } = getPagination(req);
        const { count, rows } = await User.findAndCountAll({ where, offset, limit, order });

        res.header('Content-Range', `users ${offset}-${offset + rows.length - 1}/${count}`);
        res.header('X-Total-Count', count);
        res.json(rows);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/api/users/:id', async (req, res) => {
    const u = await User.findByPk(req.params.id);
    if (!u) return res.status(404).json({ error: 'Not found' });
    res.json(u);
});

app.post('/api/users', async (req, res) => {
    try {
        const u = await User.create(req.body);
        res.json(u);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.put('/api/users/:id', async (req, res) => {
    try {
        const u = await User.findByPk(req.params.id);
        if (!u) return res.status(404).json({ error: 'Not found' });
        await u.update(req.body);
        res.json(u);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.delete('/api/users/:id', async (req, res) => {
    try {
        const u = await User.findByPk(req.params.id);
        if (u) await u.destroy();
        res.json({ id: req.params.id });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


// Start server
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Database connected.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
