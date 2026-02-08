# Panduan Pengelolaan Soal TO TKA Matematika SMP

File ini berisi panduan untuk mengedit, menambah, dan mengelola soal pada aplikasi simulasi TO TKA.

## Lokasi File Penting
- **Data Soal:** `src/data/questions.js` (Tempat menuliskan teks soal dan kunci jawaban)
- **Folder Gambar:** `public/image/` (Tempat menyimpan file gambar soal seperti .jpg, .png, atau .webp)

---

## 1. Menyiapkan Gambar dari File Word
Karena aplikasi tidak bisa membaca gambar langsung dr file Word, ikuti langkah ini:
1. Buka file Word soal Anda.
2. Klik kanan pada gambar soal -> pilih **Save as Picture** (Simpan sebagai Gambar).
3. Simpan di folder `/home/aantriono/Code/tka/public/image/`.
4. Beri nama file yang sederhana (contoh: `soal_nomor_5.png`).
5. Catat nama file tersebut untuk dimasukkan ke dalam kode soal.

---

## 2. Format Penulisan Soal (di src/data/questions.js)

Buka file `src/data/questions.js` dan ikuti format berikut untuk setiap tipe soal:

### A. Pilihan Ganda (Satu Jawaban Benar)
```javascript
{
  id: 1,
  type: "PG",
  question: "Pertanyaan soal Anda di sini...",
  options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
  correctAnswer: "Pilihan A", // Harus sama persis dengan salah satu di options
  image: "nama_file_gambar.png", // Isi null jika tidak ada, atau gunakan kurung siku jika ada 2 gambar: ["gambar1.png", "gambar2.png"]
  imagePosition: "top" // Opsi: "top" (atas teks), "bottom" (bawah teks), atau "side" (samping teks)
},
```

### Tips Penempatan Gambar:
- **`"top"` (Default):** Gambar muncul di atas teks soal. Cocok untuk gambar yang lebar.
- **`"bottom"`:** Gambar muncul di bawah teks soal (setelah teks pertanyaan).
- **`"side"`:** Gambar muncul di samping kiri teks soal (tampilan terbagi dua). Cocok untuk gambar yang ramping atau kecil.

### B. Pilihan Ganda Kompleks (Banyak Jawaban Benar / Checkbox)
```javascript
{
  id: 2,
  type: "PGK",
  question: "Pertanyaan yang meminta siswa memilih lebih dari satu...",
  options: ["Opsi 1", "Opsi 2", "Opsi 3", "Opsi 4"],
  correctAnswer: ["Opsi 1", "Opsi 3"], // Daftar jawaban benar dalam kurung siku
  image: null
},
```

### C. Benar / Salah (Format Tabel)
```javascript
{
  id: 3,
  type: "BS",
  question: "Tentukan kebenaran dari pernyataan berikut berdasarkan teks di atas:",
  statements: [
    "Pernyataan 1",
    "Pernyataan 2",
    "Pernyataan 3"
  ],
  correctAnswer: { 0: "Benar", 1: "Salah", 2: "Benar" }, // 0 untuk baris pertama, dst.
  image: null
},
```

---

## 3. Penulisan Notasi Matematika (Equation)
Aplikasi ini mendukung penulisan rumus matematika menggunakan format **LaTeX**. Untuk menuliskan rumus, apit rumus tersebut dengan tanda dolar `$ ... $`.

Contoh penulisan:
- **Akar kuadrat:** `$\sqrt{b^2 - 4ac}$`
- **Pecahan:** `$\frac{a}{b}$`
- **Pangkat:** `$x^2 + y^2 = r^2$`
- **Persamaan Kompleks:** `$\int_{a}^{b} f(x) \,dx$`

**Cara Menggunakan:**
Masukkan simbol tersebut langsung di dalam teks `question`, `options`, atau `statements`.
- *Contoh:* `"Berapakah hasil dari $\sqrt{144}$?"`
- Aplikasi akan otomatis mengubahnya menjadi tampilan rumus matematika yang rapi seperti di buku cetak.

---

## 4. Ketentuan Umum
1. **Urutan ID:** Pastikan `id` soal berurutan (1, 2, 3, ... sampai 30).
2. **Kunci Jawaban:** 
   - Untuk PG/PGK, teks di `correctAnswer` harus **SAMA PERSIS** (huruf besar/kecil) dengan yang ada di `options`.
   - Untuk BS, gunakan kata `"Benar"` atau `"Salah"`.
3. **Refresh Aplikasi:** Setelah mengedit file `questions.js`, aplikasi di browser akan otomatis terupdate jika server `npm run dev` masih berjalan.

---

## Tips Cepat (Copy-Paste dari Word)
Karena naskah Anda ada di dalam Word, langkah tercepat bagi saya untuk memprosesnya adalah sebagai berikut:

1. **Untuk Teks Soal**  
Silakan salin (copy) seluruh teks soal dari file Word tersebut, lalu tempel (paste) di jendela chat ini. Saya akan otomatis mengonversi teks tersebut menjadi kode yang dibutuhkan aplikasi Anda.

2. **Untuk Gambar Soal**  
Karena saya tidak bisa mengambil gambar langsung dari dalam file Word di komputer Anda, Anda perlu melakukan ini:
- Buka file Word Anda.
- Klik kanan pada gambar soal, pilih **"Save as Picture"** (Simpan sebagai Gambar).
- Simpan gambar tersebut di folder: `/home/aantriono/Code/tka/public/image/`.
- Beri nama yang simpel, misalnya: `soal1.png`, `soal2.jpg`, dst.
- Beri tahu saya nama file gambar tersebut untuk setiap nomor soal saat Anda menempelkan teksnya nanti.
- **Jika ada 2 gambar dalam 1 soal:** Beri nama yang berurutan, contoh: `soal5_1.png` dan `soal5_2.png`. Masukkan dalam kode sebagai `["soal5_1.png", "soal5_2.png"]`.

**Contoh cara menempelkan soal di sini:**  
> "Nomor 5: Jika x + 2 = 5, berapakah nilai x? (A) 1 (B) 2 (C) 3 (D) 4. Gambar: soal5.png. Jawaban: C"

Silakan tempelkan soal Anda (boleh langsung banyak sekaligus), dan saya akan segera memperbarui aplikasinya!
