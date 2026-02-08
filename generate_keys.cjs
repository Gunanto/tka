const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle } = require("docx");

// Since the project uses ESM, but we are running a .cjs script, we need a way to read the data.
// We can't directly require questions.js if it's ESM. 
// I'll read the file content and parse it or use dynamic import if possible.
// Actually, I can just read the file and extract the export using a simple regex or similar if it's static.
// Or I can create a temporary .js file that is CJS.

const questionsContent = fs.readFileSync("./src/data/questions.js", "utf8");
// Simple hack to convert ESM to CJS for this script
const cjsContent = questionsContent.replace("export const questions =", "module.exports =");
fs.writeFileSync("./questions_temp.cjs", cjsContent);

const questions = require("./questions_temp.cjs");

const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    text: "KUNCI JAWABAN TRY OUT TKA MATEMATIKA",
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                }),
                new Paragraph({
                    text: "MGMP MATEMATIKA SMP KABUPATEN LAMPUNG TENGAH",
                    alignment: AlignmentType.CENTER,
                }),
                new Paragraph({ text: "" }),

                ...questions.flatMap((q) => {
                    let answerText = "";
                    const questionElements = [
                        new Paragraph({
                            children: [
                                new TextRun({ text: `SOAL NOMOR ${q.id} (${q.type})`, bold: true, size: 24 }),
                            ],
                            spacing: { before: 400 },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({ text: "Pertanyaan: ", bold: true }),
                                new TextRun(q.question.replace(/\*\*/g, "").replace(/\$/g, "").replace(/\[gambar:.*?\]/g, "[Gambar]")),
                            ],
                        }),
                    ];

                    if (q.type === "PG") {
                        questionElements.push(new Paragraph({
                            children: [
                                new TextRun({ text: "Kunci Jawaban: ", bold: true, color: "2E7D32" }),
                                new TextRun({ text: q.correctAnswer, bold: true, color: "2E7D32" }),
                            ],
                        }));
                    } else if (q.type === "PGK") {
                        questionElements.push(new Paragraph({
                            children: [
                                new TextRun({ text: "Kunci Jawaban (Centang semua):", bold: true, color: "2E7D32" }),
                            ],
                        }));
                        q.correctAnswer.forEach(ans => {
                            questionElements.push(new Paragraph({
                                children: [
                                    new TextRun({ text: "• ", color: "2E7D32" }),
                                    new TextRun({ text: ans, color: "2E7D32" }),
                                ],
                                indent: { left: 720 },
                            }));
                        });
                    } else if (q.type === "BS") {
                        questionElements.push(new Paragraph({
                            children: [
                                new TextRun({ text: "Kunci Jawaban (Benar/Salah):", bold: true, color: "2E7D32" }),
                            ],
                        }));
                        q.statements.forEach((stmt, idx) => {
                            questionElements.push(new Paragraph({
                                children: [
                                    new TextRun({ text: `${idx + 1}. `, color: "2E7D32" }),
                                    new TextRun({ text: stmt.replace(/\$/g, ""), color: "666666" }),
                                    new TextRun({ text: " -> ", color: "2E7D32" }),
                                    new TextRun({ text: q.correctAnswer[idx], bold: true, color: "2E7D32" }),
                                ],
                                indent: { left: 720 },
                            }));
                        });
                    }

                    questionElements.push(new Paragraph({
                        text: "________________________________________________________________________________",
                        color: "E0E0E0"
                    }));

                    return questionElements;
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("public/Kunci_Jawaban_TKA.docx", buffer);
    fs.unlinkSync("./questions_temp.cjs");
    console.log("File Kunci_Jawaban_TKA.docx berhasil dibuat di folder public!");
});
