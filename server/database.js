const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite'),
    logging: false, // Set to console.log to see SQL queries
});

const Question = sequelize.define('Question', {
    type: {
        type: DataTypes.ENUM('PG', 'PGK', 'BS'),
        allowNull: false,
    },
    topText: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    question: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // Store image filenames as JSON array string or simple string
    // If multiple images, store as '["img1.png", "img2.png"]'
    image: {
        type: DataTypes.JSON, // SQLite supports JSON
        allowNull: true,
    },
    imagePosition: {
        type: DataTypes.ENUM('top', 'bottom', 'side'),
        defaultValue: 'top',
    },
    // Store correct answer directly on Question if simple, or use relations for complexity
    // For PG: String key
    // For PGK: Array of strings
    // For BS: Object {0: "Benar", 1: "Salah"}
    // Storing as JSON simplifies queries significantly for this use case
    correctAnswer: {
        type: DataTypes.JSON,
        allowNull: false,
    }
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    role: {
        type: DataTypes.ENUM('admin', 'student'),
        defaultValue: 'student',
    },
});

const Option = sequelize.define('Option', {
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // For PG/PGK options
});

const Statement = sequelize.define('Statement', {
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // For BS statements
});

// Relationships
Question.hasMany(Option, { as: 'options', foreignKey: 'questionId', onDelete: 'CASCADE' });
Option.belongsTo(Question, { foreignKey: 'questionId' });

Question.hasMany(Statement, { as: 'statements', foreignKey: 'questionId', onDelete: 'CASCADE' });
Statement.belongsTo(Question, { foreignKey: 'questionId' });

module.exports = { sequelize, Question, Option, Statement, User };
