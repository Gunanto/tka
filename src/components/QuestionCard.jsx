import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

// Helper component to render text with Math and Tables
const MathTextContent = ({ text }) => {
    if (!text) return null;
    // Split by Math ($...$), Inline Image ([gambar: ...]), Bold (**...**), or Italic (_..._)
    const parts = text.split(/(\$.*?\$|\[gambar:.*?\]|\*\*.*?\*\*|_.*?_)/g);
    return (
        <span>
            {parts.map((part, i) => {
                if (part.startsWith('$') && part.endsWith('$')) {
                    const math = part.slice(1, -1);
                    return <InlineMath key={i} math={math} />;
                }
                if (part.startsWith('[gambar:') && part.endsWith(']')) {
                    const content = part.match(/\[gambar:\s*(.*?)\s*\]/)[1];
                    const [imageName, size] = content.split('|').map(s => s.trim());
                    return (
                        <img
                            key={i}
                            src={`/image/${imageName}`}
                            alt="inline"
                            className={`inline-question-img ${size === 'large' ? 'large' : size === 'medium' ? 'medium' : ''}`}
                        />
                    );
                }
                if (part.startsWith('**') && part.endsWith('**')) {
                    const content = part.slice(2, -2);
                    return <strong key={i}>{content}</strong>;
                }
                if (part.startsWith('_') && part.endsWith('_')) {
                    const content = part.slice(1, -1);
                    return <em key={i}>{content}</em>;
                }
                return <span key={i} style={{ whiteSpace: 'pre-wrap' }}>{part}</span>;
            })}
        </span>
    );
};

export const MathText = ({ text }) => {
    if (!text || typeof text !== 'string') return null;

    // Check if text contains a markdown table
    if (text.includes('|') && text.includes('--')) {
        const segments = [];
        const lines = text.split('\n');
        let currentTable = null;

        lines.forEach((line, idx) => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
                if (!currentTable) {
                    currentTable = [];
                }
                currentTable.push(trimmedLine);
            } else {
                if (currentTable) {
                    segments.push({ type: 'table', rows: currentTable });
                    currentTable = null;
                }
                segments.push({ type: 'text', content: line });
            }
        });
        if (currentTable) {
            segments.push({ type: 'table', rows: currentTable });
        }

        return (
            <div className="formatted-text">
                {segments.map((seg, segIdx) => {
                    if (seg.type === 'table') {
                        // Filter out common markdown table separator lines (e.g. |---| or |:---|)
                        const tableRows = seg.rows.filter(row => !row.match(/^\|[\s\-\|:]+\|$/));
                        if (tableRows.length === 0) return null;

                        return (
                            <table key={segIdx} className="content-table">
                                <thead>
                                    <tr>
                                        {tableRows[0].split('|')
                                            .filter((cell, i, arr) => i > 0 && i < arr.length - 1)
                                            .map((cell, cellIdx) => (
                                                <th key={cellIdx}><MathTextContent text={cell.trim()} /></th>
                                            ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableRows.slice(1).map((row, rowIdx) => (
                                        <tr key={rowIdx}>
                                            {row.split('|')
                                                .filter((cell, i, arr) => i > 0 && i < arr.length - 1)
                                                .map((cell, cellIdx) => (
                                                    <td key={cellIdx}><MathTextContent text={cell.trim()} /></td>
                                                ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        );
                    }
                    return (
                        <div key={segIdx} className="text-segment">
                            {seg.content.split('\n').map((line, lIdx) => {
                                const isBullet = line.trim().startsWith('•') || line.trim().startsWith('- ') || line.trim().startsWith('* ');
                                return (
                                    <div
                                        key={lIdx}
                                        className={isBullet ? 'bullet-line' : 'content-line'}
                                        style={{ minHeight: line.trim() === '' ? '0.8em' : 'auto' }}
                                    >
                                        <MathTextContent text={line} />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }

    return <MathTextContent text={text} />;
};


const QuestionCard = ({
    question,
    fontSize = 16,
    answers = {},
    onAnswer,
    onAnswerBS,
    readOnly = false,
    showCorrectAnswer = false
}) => {
    if (!question) return null;

    return (
        <div className="question-content-wrapper-outer">
            <div className={`question-content-wrapper ${question.imagePosition === 'side' ? 'layout-side' : 'layout-stack'}`}>
                {/* Text ABOVE Image if exists */}
                {question.topText && (
                    <div className="question-top-text" style={{ fontSize: `${fontSize}px` }}>
                        <MathText text={question.topText} />
                    </div>
                )}

                {/* Image on TOP (Default) or SIDE */}
                {(question.image && (!question.imagePosition || question.imagePosition === 'top' || question.imagePosition === 'side')) && (
                    <div className="question-image-wrapper">
                        {Array.isArray(question.image) ? (
                            <div className="question-images-container">
                                {question.image.map((img, idx) => (
                                    <img key={idx} src={`/image/${img}`} alt={`Soal ${idx + 1}`} className="question-image" />
                                ))}
                            </div>
                        ) : (
                            <img src={`/image/${question.image}`} alt="Soal" className="question-image" />
                        )}
                    </div>
                )}

                <div className="question-text" style={{ fontSize: `${fontSize}px` }}>
                    <MathText text={question.question} />
                </div>

                {/* Image on BOTTOM */}
                {(question.image && question.imagePosition === 'bottom') && (
                    <div className="question-image-wrapper">
                        {Array.isArray(question.image) ? (
                            <div className="question-images-container" style={{ marginTop: '20px' }}>
                                {question.image.map((img, idx) => (
                                    <img key={idx} src={`/image/${img}`} alt={`Soal ${idx + 1}`} className="question-image" />
                                ))}
                            </div>
                        ) : (
                            <img src={`/image/${question.image}`} alt="Soal" className="question-image" style={{ marginTop: '20px' }} />
                        )}
                    </div>
                )}
            </div>

            <div className="options-list" style={{ fontSize: `${fontSize}px` }}>
                {question.type === "BS" ? (
                    <table className="bs-table">
                        <thead>
                            <tr>
                                <th>Pernyataan</th>
                                <th className="center">Benar</th>
                                <th className="center">Salah</th>
                            </tr>
                        </thead>
                        <tbody>
                            {question.statements && question.statements.map((stmt, sIdx) => {
                                const ans = answers[question.id]?.[sIdx] || (showCorrectAnswer ? question.correctAnswer?.[sIdx] : null);
                                return (
                                    <tr key={sIdx}>
                                        <td><MathText text={typeof stmt === 'string' ? stmt : stmt.text} /></td>
                                        <td className="center">
                                            <input
                                                type="radio"
                                                name={`stmt-${question.id}-${sIdx}`}
                                                className="bs-radio"
                                                checked={ans === "Benar"}
                                                onChange={() => !readOnly && onAnswerBS && onAnswerBS(sIdx, "Benar")}
                                                readOnly={readOnly}
                                            />
                                        </td>
                                        <td className="center">
                                            <input
                                                type="radio"
                                                name={`stmt-${question.id}-${sIdx}`}
                                                className="bs-radio"
                                                checked={ans === "Salah"}
                                                onChange={() => !readOnly && onAnswerBS && onAnswerBS(sIdx, "Salah")}
                                                readOnly={readOnly}
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                ) : (
                    question.options && question.options.map((option, idx) => {
                        let isSelected = false;
                        if (showCorrectAnswer) {
                            // For correct answer preview
                            if (question.type === "PG") {
                                const optionText = typeof option === 'string' ? option : option.text;
                                isSelected = question.correctAnswer === optionText;
                            } else if (question.type === "PGK") {
                                const optionText = typeof option === 'string' ? option : option.text;
                                isSelected = Array.isArray(question.correctAnswer) && question.correctAnswer.includes(optionText);
                            }
                        } else {
                            const optionText = typeof option === 'string' ? option : option.text;
                            isSelected = Array.isArray(answers[question.id])
                                ? answers[question.id].includes(optionText)
                                : answers[question.id] === optionText;
                        }

                        return (
                            <div
                                key={idx}
                                className={`option-item ${isSelected ? 'selected' : ''}`}
                                onClick={() => {
                                    if (!readOnly && onAnswer) {
                                        const text = typeof option === 'string' ? option : option.text;
                                        onAnswer(text);
                                    }
                                }}
                                style={readOnly ? { cursor: 'default' } : {}}
                            >
                                <input
                                    type={question.type === "PGK" ? "checkbox" : "radio"}
                                    checked={isSelected}
                                    readOnly
                                    style={{ marginRight: '15px', transform: 'scale(1.2)' }}
                                />
                                <MathText text={typeof option === 'string' ? option : option.text} />
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default QuestionCard;
