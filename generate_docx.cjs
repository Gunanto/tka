const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = require("docx");

const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    text: "TEMPLATE PENULISAN SOAL TO TKA MATEMATIKA",
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Gunakan template ini untuk menuliskan soal. Setelah selesai, silakan copy-paste isinya ke jendela chat AI.",
                            italics: true,
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                }),
                new Paragraph({ text: "" }),

                // PENJELASAN STIMULUS
                new Paragraph({
                    text: "CONTOH FORMAT STIMULUS (Untuk Beberapa Nomor)",
                    heading: HeadingLevel.HEADING_2,
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Gunakan format ini jika satu gambar/teks digunakan untuk menjawab beberapa soal sekaligus.",
                            italics: true,
                            color: "666666"
                        }),
                    ],
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "STIMULUS UNTUK SOAL NOMOR 22-25", bold: true, underline: {} }),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Gambar: ", bold: true }),
                        new TextRun("stimulus_grafik_ekonomi.png"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Teks Stimulus: ", bold: true }),
                        new TextRun("Perhatikan grafik pertumbuhan ekonomi berikut ini untuk menjawab soal nomor 22 sampai dengan nomor 25."),
                    ],
                }),
                new Paragraph({ text: "" }),

                // SOAL 22
                new Paragraph({
                    children: [
                        new TextRun({ text: "Nomor: ", bold: true }),
                        new TextRun("22"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Tipe: ", bold: true }),
                        new TextRun("PG"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Soal: ", bold: true }),
                        new TextRun("(Berdasarkan grafik di atas) Manakah tahun dengan pertumbuhan tertinggi?"),
                    ],
                }),
                new Paragraph({ text: "A. 2020" }),
                new Paragraph({ text: "B. 2021" }),
                new Paragraph({ text: "C. 2022" }),
                new Paragraph({ text: "D. 2023" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Kunci Jawaban: ", bold: true }),
                        new TextRun("C"),
                    ],
                }),
                new Paragraph({ text: "--------------------------------------------------" }),

                // SOAL 23
                new Paragraph({
                    children: [
                        new TextRun({ text: "Nomor: ", bold: true }),
                        new TextRun("23"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Tipe: ", bold: true }),
                        new TextRun("BS"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Soal: ", bold: true }),
                        new TextRun("Tentukan benar atau salah pernyataan berikut berdasarkan grafik ekonomi di atas:"),
                    ],
                }),
                new Paragraph({ text: "1. Pertumbuhan tahun 2021 lebih rendah dari 2020 -> Salah" }),
                new Paragraph({ text: "2. Rata-rata pertumbuhan adalah 5% -> Benar" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Kunci Jawaban: ", bold: true }),
                        new TextRun("Salah, Benar"),
                    ],
                }),
                new Paragraph({ text: "" }),

                // SEPARATOR
                new Paragraph({ text: "==================================================", alignment: AlignmentType.CENTER }),
                new Paragraph({ text: "" }),

                // FORMAT DASAR (REMINDER)
                new Paragraph({
                    text: "A. PILIHAN GANDA (PG) - 1 Jawaban Benar",
                    heading: HeadingLevel.HEADING_2,
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Nomor: ", bold: true }),
                        new TextRun("[Isi Nomor]"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Tipe: ", bold: true }),
                        new TextRun("PG"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Gambar: ", bold: true }),
                        new TextRun("nama_file.png (Jika ada)"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Soal: ", bold: true }),
                        new TextRun("[Tulis Pertanyaan]"),
                    ],
                }),
                new Paragraph({ text: "A. [Opsi A]" }),
                new Paragraph({ text: "B. [Opsi B]" }),
                new Paragraph({ text: "C. [Opsi C]" }),
                new Paragraph({ text: "D. [Opsi D]" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Kunci Jawaban: ", bold: true }),
                        new TextRun("[A/B/C/D]"),
                    ],
                }),
                new Paragraph({ text: "" }),

                new Paragraph({
                    text: "B. PILIHAN GANDA KOMPLEKS (PGK)",
                    heading: HeadingLevel.HEADING_2,
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Nomor: ", bold: true }),
                        new TextRun("[Isi Nomor]"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Tipe: ", bold: true }),
                        new TextRun("PGK"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Gambar: ", bold: true }),
                        new TextRun("nama_file.png (Jika ada)"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Soal: ", bold: true }),
                        new TextRun("[Tulis Pertanyaan]"),
                    ],
                }),
                new Paragraph({ text: "A. [Opsi A]" }),
                new Paragraph({ text: "B. [Opsi B]" }),
                new Paragraph({ text: "C. [Opsi C]" }),
                new Paragraph({ text: "D. [Opsi D]" }),
                new Paragraph({ text: "E. [Opsi E]" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Kunci Jawaban: ", bold: true }),
                        new TextRun("[Contoh: A, C]"),
                    ],
                }),
                new Paragraph({ text: "" }),

                new Paragraph({
                    text: "C. BENAR / SALAH (BS) - Daftar Pernyataan",
                    heading: HeadingLevel.HEADING_2,
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Nomor: ", bold: true }),
                        new TextRun("[Isi Nomor]"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Tipe: ", bold: true }),
                        new TextRun("BS"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Gambar: ", bold: true }),
                        new TextRun("nama_file.png (Jika ada)"),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Soal: ", bold: true }),
                        new TextRun("[Tulis Instruksi, contoh: Tentukan benar/salah pernyataan berikut!]"),
                    ],
                }),
                new Paragraph({ text: "1. [Pernyataan 1] -> [Benar/Salah]" }),
                new Paragraph({ text: "2. [Pernyataan 2] -> [Benar/Salah]" }),
                new Paragraph({ text: "3. [Pernyataan 3] -> [Benar/Salah]" }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "Kunci Jawaban: ", bold: true }),
                        new TextRun("[Contoh: Benar, Salah, Benar]"),
                    ],
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Template_Soal_TKA.docx", buffer);
    console.log("File Template_Soal_TKA.docx berhasil diperbarui!");
});
