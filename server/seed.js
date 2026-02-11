const fs = require('fs');
const path = require('path');
const { sequelize, Question, Option, Statement } = require('./database');

async function seed() {
    try {
        // Read the questions.js file content
        const questionFilePath = path.join(__dirname, '../src/data/questions.js');
        let fileContent = fs.readFileSync(questionFilePath, 'utf8');

        // Hacky way to parse the ESM export in CJS without using 'esm' package or dynamic import
        // Replace 'export const questions =' with 'module.exports =' and save to temp file
        const tempFilePath = path.join(__dirname, 'temp_questions.js');
        const cjsContent = fileContent.replace('export const questions =', 'module.exports =');
        fs.writeFileSync(tempFilePath, cjsContent);

        const questionsData = require(tempFilePath);

        // Sync database (force: true drops tables if they exist)
        await sequelize.sync({ force: true });
        console.log('Database synced!');

        for (const q of questionsData) {
            // Create Question
            const question = await Question.create({
                type: q.type,
                topText: q.topText || null,
                question: q.question,
                image: q.image ? JSON.stringify(q.image) : null,
                imagePosition: q.imagePosition || 'top',
                correctAnswer: q.correctAnswer // Sequelize handles JSON/Object automatically for JSON columns? No, SQLite JSON is just text usually, but Sequelize might abstract it. Let's start with raw JSON object
            });

            // Create Options (for PG, PGK)
            if (q.options && Array.isArray(q.options)) {
                for (const optText of q.options) {
                    await Option.create({
                        text: optText,
                        questionId: question.id
                    });
                }
            }

            // Create Statements (for BS)
            if (q.statements && Array.isArray(q.statements)) {
                for (const stmtText of q.statements) {
                    await Statement.create({
                        text: stmtText,
                        questionId: question.id
                    });
                }
            }

            console.log(`Seeded question ID: ${q.id}`);
        }

        // Cleanup temp file
        fs.unlinkSync(tempFilePath);

        console.log('Seeding completed successfully!');
        process.exit(0);

    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
}

seed();
