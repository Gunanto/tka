const express = require('express');
const cors = require('cors');
const { sequelize, Question, Option, Statement } = require('./database');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// GET all questions
app.get('/api/questions', async (req, res) => {
    try {
        const questions = await Question.findAll({
            include: [
                { model: Option, as: 'options' },
                { model: Statement, as: 'statements' }
            ],
            order: [['id', 'ASC']]
        });

        // Transform data to match the frontend structure
        const formattedQuestions = questions.map(q => {
            const qData = q.toJSON();

            // Parse image JSON if needed
            let image = qData.image;
            if (typeof image === 'string') {
                try {
                    image = JSON.parse(image);
                } catch (e) {
                    // keep as string if not valid JSON
                }
            }

            // Format options into array of strings
            const options = qData.options ? qData.options.map(o => o.text) : [];

            // Format statements into array of strings
            const statements = qData.statements ? qData.statements.map(s => s.text) : [];

            return {
                id: qData.id,
                type: qData.type,
                topText: qData.topText,
                question: qData.question,
                image: image,
                imagePosition: qData.imagePosition,
                correctAnswer: qData.correctAnswer, // Already parsed by Sequelize if defined as JSON type
                options: options.length > 0 ? options : undefined,
                statements: statements.length > 0 ? statements : undefined
            };
        });

        res.json(formattedQuestions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
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
