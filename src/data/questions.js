export const questions = [
    {
        id: 1,
        type: "BS",
        topText: "Perhatikan Infografis berikut!",
        question: "Berdasarkan infografis tersebut, nyatakan benar atau salah pernyataan berikut:",
        statements: [
            "Selisih jumlah penduduk antara India dan China pada tahun 2025 diproyeksikan lebih dari 50 juta jiwa",
            "Jumlah penduduk Indonesia di peringkat-4 setara dengan kurang dari seperlima total penduduk India",
            "Jika penduduk Pakistan dan Nigeria digabungkan, jumlahnya masih lebih sedikit dibandingkan jumlah penduduk Amerika Serikat"
        ],
        correctAnswer: { 0: "Salah", 1: "Benar", 2: "Salah" },
        image: "soal1.png",
        imagePosition: "top"
    },
    {
        id: 2,
        type: "PGK",
        question: "Dalam sebuah kompetensi sains, panitia menetapkan aturan penilaian sebagai berikut:\n• Jawaban Benar diberi skor 4.\n• Jawaban Salah diberi skor -2.\n• Soal Tidak Dijawab diberi skor -1.\n\nJumlah soal yang diberikan adalah 50 soal.\n\nBerikut adalah hasil rincian jawaban dari tiga peserta terbaik:\n\n| Nama Peserta | Jawaban Benar | Jawaban Salah |\n| :--- | :--- | :--- |\n| Arif | 42 | 5 |\n| Bela | 40 | 2 |\n| Citra | 45 | 5 |\n\nBerdasarkan informasi tersebut, berilah tanda centang (√) untuk semua pernyataan yang benar.",
        options: [
            "Skor total yang diperoleh Arif 155 poin",
            "Selisih skor antara Arif dan Bela adalah tepat 7 poin.",
            "Bela menempati urutan kedua dalam perolehan skor tertinggi di antara ketiga peserta tersebut.",
            "Skor tertinggi diantara ketiga peserta adalah skor yang diperoleh oleh Citra."
        ],
        correctAnswer: ["Skor total yang diperoleh Arif 155 poin", "Selisih skor antara Arif dan Bela adalah tepat 7 poin.", "Skor tertinggi diantara ketiga peserta adalah skor yang diperoleh oleh Citra."],
        image: null,
        imagePosition: "top"
    },
    {
        id: 3,
        type: "PG",
        question: "Terdapat 4 kartu bilangan [gambar: soal3.png] Jika bilangan tersebut akan dioperasikan sebagai berikut [gambar: soal3_1.png], maka nilai terbesar yang bisa dibuat adalah….",
        options: ["13", "18", "21", "25"],
        correctAnswer: "13",
        image: null,
        imagePosition: "top"
    },
    {
        id: 4,
        type: "BS",
        topText: "TIMNAS INDONESIA",
        question: "Perhatikan foto kesebelasan tim nasional Indonesia yang sedang berfoto bersama sebelum pertandingan dimulai. Dalam foto tersebut, terlihat para pemain inti yang terdiri dari pemain yang berdiri di baris belakang dan pemain yang berjongkok di baris depan. Selain itu, terdapat satu orang penjaga gawang (kiper) yang mengenakan kostum berbeda (warna kuning) di antara rekan-rekannya yang mengenakan kostum merah. Berdasarkan komposisi pemain pada foto tersebut, nyatakan benar atau salah pernyataan berikut :",
        statements: [
            "Rasio antara jumlah penjaga gawang terhadap seluruh pemain yang ada di dalam foto tersebut adalah 1 : 11",
            "Rasio jumlah pemain yang berdiri di baris belakang terhadap pemain yang berjongkok di baris depan adalah 6 : 5",
            "Jika dua pemain cadangan masuk menggantikan dua pemain yang berjongkok, maka rasio total pemain di dalam foto tersebut akan berubah menjadi 1 : 13"
        ],
        correctAnswer: { 0: "Benar", 1: "Benar", 2: "Salah" },
        image: "soal4.png",
        imagePosition: "top"
    },
    {
        id: 5,
        type: "PG",
        question: "Pak Jarwo merencanakan akan membangun sebuah toko dengan memperkerjakan 30 pekerja dan akan selesai selama 90 hari. Jika pada saat mulai membangun ditambah 15 pekerja, pembangunan toko tersebut akan selesai dalam waktu…..",
        options: ["45 hari", "60 hari", "135 hari", "180 hari"],
        correctAnswer: "60 hari",
        image: "soal5.png",
        imagePosition: "top"
    },
    {
        id: 6,
        type: "PG",
        question: "Sebuah perusahaan pengembang olahraga ingin membangun stadion baru sebagai markas Tim Nasional. Sebelum pembangunan dimulai, seorang arsitek membuat maket (model miniatur) stadion tersebut dengan skala 1 : 500. Dalam rencana pembangunan, lapangan sepak bola di dalam stadion tersebut dirancang memiliki ukuran standar internasional, yaitu panjang 105 meter dan lebar 68 meter. Berdasarkan skala yang digunakan arsitek tersebut, berapakah ukuran luas lapangan sepak bola pada maket tersebut?",
        options: ["142,8 cm²", "285,6 cm²", "1.428 cm²", "2.856 cm²"],
        correctAnswer: "285,6 cm²",
        image: null,
        imagePosition: "top"
    },
    {
        id: 7,
        type: "PG",
        question: "Syafira pergi ke sebuah toko baju bersama teman-temannya. Ia kemudian tertarik membeli sebuah kemeja seharga Rp180.000 yang bertuliskan diskon sesuai gambar [gambar: soal7.png]. Jika Syafira akan membeli kemeja tersebut, maka harga yang harus dibayarkan oleh Syafira adalah…",
        options: ["Rp170.000", "Rp165.000", "Rp162.000", "Rp153.000"],
        correctAnswer: "Rp162.000",
        image: null,
        imagePosition: "top"
    },
    {
        id: 8,
        type: "PGK",
        question: "Sebuah UMKM di Lampung Tengah memproduksi jus sari kunyit organik. Berdasarkan resep standar perusahaan, untuk membuat 5 liter jus sari kunyit, diperlukan 2 kg kunyit segar. Jus tersebut kemudian dikemas ke dalam botol-botol kecil berukuran 250 ml untuk dijual ke pasar. Berdasarkan data produksi di atas, berilah tanda centang (√) untuk semua pernyataan yang benar.",
        options: [
            "Dari 2 kg kunyit segar, UMKM tersebut dapat menghasilkan sebanyak 20 botol jus sari kunyit ukuran 250 ml.",
            "Jika pesanan pasar meningkat dan UMKM harus memproduksi 15 liter jus, maka kunyit segar yang dibutuhkan adalah sebanyak 6 kg.",
            "Rasio atau perbandingan antara berat kunyit (kg) terhadap volume jus yang dihasilkan (liter) adalah 2 : 5.",
            "Jika UMKM hanya memiliki 1 kg kunyit segar, maka volume jus yang dapat diproduksi hanya cukup untuk mengisi 8 botol ukuran 250 ml."
        ],
        correctAnswer: ["Dari 2 kg kunyit segar, UMKM tersebut dapat menghasilkan sebanyak 20 botol jus sari kunyit ukuran 250 ml.", "Jika pesanan pasar meningkat dan UMKM harus memproduksi 15 liter jus, maka kunyit segar yang dibutuhkan adalah sebanyak 6 kg.", "Rasio atau perbandingan antara berat kunyit (kg) terhadap volume jus yang dihasilkan (liter) adalah 2 : 5."],
        image: null,
        imagePosition: "top"
    },
    {
        id: 9,
        type: "PG",
        question: "Bu Diah memberikan uang bekal sekolah kepada tiga anaknya. Reza mendapat $x$ rupiah, Indra mendapat lima ribu rupiah dan tiga kali uang bekal Reza, sedangkan Diva mendapat sepuluh ribu kurangnya dari uang bekal Indra. Jika uang yang dikeluarkan Bu Diah untuk bekal ketiga anaknya sebesar Rp70.000 maka pernyataan yang sesuai adalah …",
        options: [
            "Besar uang yang diperoleh Indra $(5000+3x)$ rupiah",
            "Besar uang yang diperoleh Diva $(5000+3x)$ rupiah",
            "Besar uang yang diperoleh Indra $(5000-3x)$ rupiah",
            "Besar uang yang diperoleh Diva $(10.000-3x)$ rupiah"
        ],
        correctAnswer: "Besar uang yang diperoleh Indra $(5000+3x)$ rupiah",
        image: null,
        imagePosition: "top"
    },
    {
        id: 10,
        type: "PG",
        question: "Diberikan persamaan linier satu variabel sebagai berikut:\n$2(3x-4)-3(x+2)=x+6$\nNilai $x-2$ adalah ....",
        options: ["6", "8", "10", "12"],
        correctAnswer: "8",
        image: null,
        imagePosition: "top"
    },
    {
        id: 11,
        type: "BS",
        question: "Sebuah persegi panjang memiliki panjang 12 cm kurang dari 3 kali lebarnya. Diketahui lebarnya $x$ cm dan keliling persegi panjang tersebut minimal 72 cm. Berdasarkan keterangan tersebut, nyatakan benar atau salah pernyataan berikut.",
        statements: [
            "Bentuk matematika dari panjang adalah $3x - 12$.",
            "Bentuk matematika dari lebar adalah $x$.",
            "Keliling persegi panjang adalah $x ≤ 12$.",
            "Lebar persegi panjang adalah $x ≥ 12$"
        ],
        correctAnswer: { 0: "Benar", 1: "Benar", 2: "Salah", 3: "Benar" },
        image: null,
        imagePosition: "top"
    },
    {
        id: 12,
        type: "PGK",
        topText: "Perhatikan gambar berikut!",
        question: "Juna dan Hendra ke sebuah toko membeli minuman, Juna membeli empat botol susu kedelai dan dua kotak jus buah, Hendra membeli dua botol susu kedelai dan tiga kotak jus buah.\n\nBerdasarkan informasi di atas, berilah tanda centang (√) untuk semua pernyataan yang benar.",
        options: [
            "Harga sebotol susu kedelai adalah Rp5.600",
            "Harga sekotak jus buah adalah Rp4.400",
            "Selisih harga susu kedelai dan jus buah adalah Rp2.400",
            "Harga sebotol susu kedelai dan sekotak jus buah adalah Rp9.500"
        ],
        correctAnswer: ["Harga sebotol susu kedelai adalah Rp5.600", "Harga sekotak jus buah adalah Rp4.400"],
        image: "soal12.jpeg",
        imagePosition: "top"
    },
    {
        id: 13,
        type: "BS",
        question: "Misalkan $m$ dan $n$ merupakan dua bilangan real sehingga sistem persamaan linear \n$mx + 3y = -1$\n$-x + ny = 14$\nmempunyai penyelesaian $(x, y) = (-4, 5)$. Berdasarkan keterangan tersebut, nyatakan benar atau salah pernyataan berikut terkait dengan nilai $m$ dan $n$.",
        statements: [
            "$m$ merupakan bilangan genap.",
            "$n$ merupakan bilangan prima.",
            "$2m + n = 0$"
        ],
        correctAnswer: { 0: "Benar", 1: "Benar", 2: "Salah" },
        image: null,
        imagePosition: "top"
    },
    {
        id: 14,
        type: "PGK",
        question: "Perhatikan pola bilangan berikut: 1, 3, 6, 10, 15, ... \nBerdasarkan informasi di atas, berilah tanda centang (√) untuk semua pernyataan yang benar.",
        options: [
            "Suku ke-6 dari barisan tersebut adalah 21.",
            "Selisih antara suku-suku membentuk barisan aritmetika.",
            "Rumus untuk mencari suku ke $-n$ adalah $\\frac{n(n+1)}{2}$",
            "Pola ini adalah contoh barisan aritmetika."
        ],
        correctAnswer: ["Suku ke-6 dari barisan tersebut adalah 21.", "Selisih antara suku-suku membentuk barisan aritmetika.", "Rumus untuk mencari suku ke $-n$ adalah $\\frac{n(n+1)}{2}$"],
        image: null,
        imagePosition: "top"
    },
    {
        id: 15,
        type: "PGK",
        question: "Banyak kursi pada baris pertama sebuah gedung pertunjukkan adalah 20 kursi. Jumlah kursi pada baris paling belakang adalah 80 kursi. Jumlah seluruh kursi adalah 1.050 kursi dan penambahan jumlah kursi setiap baris mengikuti deret hitung. Berdasarkan informasi di atas, berilah tanda centang (√) untuk semua pernyataan yang benar.",
        options: [
            "Jumlah kursi yang berada pada baris bagian tengah (baris ke-11) adalah 50 kursi.",
            "Banyak baris kursi dalam gedung pertunjukkan adalah 21 baris.",
            "Selisih jumlah kursi pada setiap baris adalah 3 kursi.",
            "Jumlah kursi yang berada pada baris ke-10 adalah 47 kursi."
        ],
        correctAnswer: ["Jumlah kursi yang berada pada baris bagian tengah (baris ke-11) adalah 50 kursi.", "Banyak baris kursi dalam gedung pertunjukkan adalah 21 baris.", "Selisih jumlah kursi pada setiap baris adalah 3 kursi.", "Jumlah kursi yang berada pada baris ke-10 adalah 47 kursi."],
        image: null,
        imagePosition: "top"
    },
    {
        id: 16,
        type: "PGK",
        topText: "Perhatikan gambar berikut!",
        question: "Pak Riski akan membuat sebuah kolam ikan di rumahnya berbentuk seperti pada gambar dengan ukuran-ukuran sebagai berikut: Pak Riski akan melapisi bagian dalam kolam (samping kanan, kiri, dan bawah) dengan sejenis keramik berwarna hitam berukuran dengan harga satuan keramik Rp15.000. \nBerdasarkan wacana di atas, berilah tanda centang (√) untuk semua pernyataan yang benar!",
        options: [
            "Luas untuk 1 buah keramik adalah 160 $cm^2$.",
            "Luas seluruh bagian kolam yang akan dipasang keramik adalah 101.500 $cm^2$.",
            "Jumlah keramik minimal yang dibutuhkan adalah 63 keramik.",
            "Dengan modal Rp1.000.000 akan cukup untuk melapisi bagian dalam kolam tersebut menggunakan keramik."
        ],
        correctAnswer: ["Luas seluruh bagian kolam yang akan dipasang keramik adalah 101.500 $cm^2$.", "Jumlah keramik minimal yang dibutuhkan adalah 63 keramik.", "Dengan modal Rp1.000.000 akan cukup untuk melapisi bagian dalam kolam tersebut menggunakan keramik."],
        image: "soal16.png",
        imagePosition: "top"
    },
    {
        id: 17,
        type: "PG",
        topText: "[gambar: soal17.png | large]",
        question: "Ada pepatah yang mengatakan rumahku adalah surgaku yang mempunyai arti bahwa sebuah rumah dapat menjadikan penghuninya merasa nyaman di rumah. Untuk dapat menciptakan hal tersebut, maka rumah bagian dalam dan luar dapat ditata seindah mungkin. \nSebelum masuk ke tahap konstruksi, gambar arsitektur rumah diperlukan untuk memenuhi kebutuhan konsep impian dan memastikan struktur bangunan sesuai dengan rencana. Dalam hal ini Pak Kamal menyewa seorang arsitek untuk mendesainkan sebuah rumah impiannya. \nBerikut desain rumah pak Kamal dengan ukuran 1.200 cm $\\times$ 800 cm. \n[gambar: soal17_1.png | large] \nJika area taman akan ditanami rumput sintetis dengan harga material dan jasa pemasangan Rp50.000 / m², maka biaya yang harus dikeluarkan oleh Pak Kamal adalah . . .",
        options: ["Rp1.500.500", "Rp1.527.500", "Rp1.572.500", "Rp1.575.500"],
        correctAnswer: "Rp1.572.500",
        image: null,
        imagePosition: "top"
    },
    {
        id: 18,
        type: "BS",
        question: "Berdasarkan gambar denah rumah Pak Kamal, nyatakan benar atau salah pernyataan berikut:",
        statements: [
            "Luas area carport adalah 112.500 cm².",
            "Keliling R. tamu adalah 1.100 cm.",
            "Perbandingan luas teras dengan area carport adalah 1 : 4.",
            "Perbandingan keliling area kamar 1 dengan kamar 2 adalah 1 : 1."
        ],
        correctAnswer: { 0: "Benar", 1: "Benar", 2: "Salah", 3: "Salah" },
        image: null,
        imagePosition: "top"
    },
    {
        id: 19,
        type: "PGK",
        topText: "Perhatikan gambar berikut!\n\n[gambar: soal19.png | large]",
        question: "Pilihlah pernyataan – pernyataan yang sesuai dengan memberi tanda centang pada jawaban yang tepat!",
        options: [
            "Jika segitiga $ABC$ ditranslasikan oleh Translasi T$(5, -3)$, maka koordinat bayangan titik $C$ adalah $(2, -3)$",
            "Jika segitiga $ABC$ direfleksikan terhadap sumbu $X$, maka bayangan titik $C$ adalah $(-3, -6)$",
            "Jika titik $A$ didilatasi terhadap titik pusat $(0,0)$ dengan skala 2 maka bayangan titik A menjadi $(-6, 0)$",
            "Jika koordinat titik $B$ dengan pusat rotasi $(0,0)$ dirotasi sebesar $60^0$ berlawanan arah jarum jam maka $B'(0, -5)$"
        ],
        correctAnswer: [
            "Jika segitiga $ABC$ direfleksikan terhadap sumbu $X$, maka bayangan titik $C$ adalah $(-3, -6)$",
            "Jika titik $A$ didilatasi terhadap titik pusat $(0,0)$ dengan skala 2 maka bayangan titik A menjadi $(-6, 0)$"
        ],
        image: null,
        imagePosition: "top"
    },
    {
        id: 20,
        type: "PG",
        topText: "Perhatikan gambar berikut!",
        question: "Nizam yang memiliki tinggi badan 165 cm ingin mengetahui tinggi bagian atas pohon. Nizam berjalan sepanjang bayangan pohon hingga ujung bayangannya bertumpukkan tepat pada ujung bayangan pohon. Nizam berjarak 440 cm dari pohon dan 200 cm dari ujung bayangannya. Tinggi pohon tersebut adalah . . .",
        options: ["363 cm", "450 cm", "500 cm", "528 cm"],
        correctAnswer: "528 cm",
        image: "soal20.png",
        imagePosition: "top"
    },
    {
        id: 21,
        type: "PG",
        topText: "Perhatikan gambar berikut!",
        question: "Dalam pembangunan infrastruktur modern, seperti jembatan rangka baja (truss bridge), konsep garis dan sudut bukan sekadar elemen visual, melainkan kunci kekuatan struktur. Para insinyur merancang gelagar-gelagar baja yang diletakkan secara sejajar untuk mendistribusikan beban secara merata ke seluruh pondasi. \nDi sisi lain, batang-batang penguat dipasang saling berpotongan membentuk pola segitiga guna memastikan jembatan tetap kaku dan stabil terhadap tekanan angin maupun beban kendaraan. Ketelitian dalam menentukan sudut elevasi dan sudut-sudut yang terbentuk pada titik pertemuan antar rangka (seperti sudut sepihak atau berseberangan) sangat menentukan apakah sambungan tersebut mampu menahan gaya tarik dan tekan yang terjadi. Kesalahan kecil dalam pengukuran sudut dapat berakibat fatal pada integritas seluruh bangunan. Gambar berikut mengilustrasikan bagian jembatan. \n[gambar: soal21_1.png | large] \nJika diketahui besar $∠ACB=95^0$. Maka besar $∠CAB$ adalah . . .",
        options: ["$20^0$", "$30^0$", "$55^0$", "$65^0$"],
        correctAnswer: "$55^0$",
        image: "soal21.png",
        imagePosition: "top"
    },
    {
        id: 22,
        type: "BS",
        question: "Dalam rangka memperingati Hari Kemerdekaan, panitia upacara memastikan tiang bendera setinggi 10 meter berdiri dengan stabil. Untuk mengantisipasi tiang miring akibat tiupan angin kencang, dipasanglah kawat penyangga yang menghubungkan bagian atas tiang dengan pasak di permukaan tanah. Penempatan pasak ini harus diperhitungkan dengan cermat agar gaya tarik kawat seimbang dan tidak memakan terlalu banyak lahan di sekitar lapangan upacara. Perhatikan gambar berikut! \n[gambar: soal22.png] \nGambar tersebut mengilustrasikan sebuah tiang bendera yang disangga oleh tiga kawat agar tidak mudah roboh. Setiap kawat diikat setinggi 6 meter pada tiang bendera dan diikatkan pada tiga pasak A, B, dan C sejauh 1,1 meter dari tiang. \nBila diketahui harga kawat Rp12.000 per meter, maka nyatakan benar atau salah pernyataan berikut:",
        statements: [
            "Panjang masing-masing tali adalah 6,2 meter.",
            "Panjang total tali yang diperlukan adalah 18,3 meter.",
            "Biaya yang dikeluarkan untuk membeli keseluruhan tali tersebut adalah Rp219.600.",
            "Biaya yang dikeluarkan untuk membeli keseluruhan tali tersebut adalah Rp223.200."
        ],
        correctAnswer: { 0: "Salah", 1: "Benar", 2: "Benar", 3: "Salah" },
        image: null,
        imagePosition: "top"
    },
    {
        id: 23,
        type: "BS",
        topText: "Perhatikan gambar berikut!",
        question: "Dalam industri farmasi, kapsul merupakan sediaan padat yang paling umum digunakan karena kemampuannya menutupi rasa pahit obat dan kemudahan saat ditelan. Secara geometris, penampang sebuah kapsul standar dirancang sebagai gabungan dari sebuah tabung dengan dua belahan bola di kedua ujungnya.\nKetelitian ukuran cangkang sangat krusial. Selain aspek volume, luas permukaan cangkang juga diperhitungkan agar proses pelarutan (disolusi) dalam lambung terjadi pada waktu yang tepat, sehingga bahan aktif obat dapat diserap optimal oleh tubuh.\nBerdasarkan wacana di atas, nyatakan benar atau salah pernyataan berikut :",
        statements: [
            "Luas bahan gelatin untuk membuat satu cangkang kapsul adalah 374 $mm^2$.",
            "Jika industri memiliki persediaan gelatin sebanyak 10.000 $mm^2$, maka banyak kapsul minimum adalah 27.",
            "Jika terdapat 3.000 $mm^3$ serbuk obat yang akan dimasukkan ke dalam cangkang tersebut secara penuh, maka banyak cangkang kapsul yang diperlukan adalah 6.",
            "Volume obat total yang dapat ditampung adalah 564 $\\frac{2}{3}$ $mm^3$"
        ],
        correctAnswer: { 0: "Benar", 1: "Salah", 2: "Salah", 3: "Benar" },
        image: "soal23.png",
        imagePosition: "top"
    },
    {
        id: 24,
        type: "BS",
        topText: "Perhatikan infografis bencana banjir Sumatera berikut.",
        question: "Berdasarkan infografis di atas, nyatakan benar atau salah pernyataan berikut:",
        statements: [
            "Dari 1.059 korban meninggal dunia di 3 provinsi, Aceh merupakan provinsi dengan jumlah korban meninggal dunia paling banyak dibandingkan provinsi lain yang terdampak banjir Sumatera.",
            "Sebesar 34 % korban meninggal dunia berasal dari provinsi Sumatera Utara.",
            "Di privinsi Aceh terdapat 31 % korban belum ditemukan.",
            "Fasilitas pendidikan merupakan infrastruktur yang paling banyak terdampak bencana banjir Sumatera."
        ],
        correctAnswer: { 0: "Benar", 1: "Benar", 2: "Salah", 3: "Salah" },
        image: "soal24.png",
        imagePosition: "top"
    },
    {
        id: 25,
        type: "PG",
        topText: "**Asesmen Sumatif Materi Statistika.**",
        question: "**Stimulus untuk soal nomor 25-27.**\n\nBu Fitri baru saja mengadakan Asesmen Sumatif Materi Statistika. Siswa yang mengikuti kegiatan asesmen berjumlah 28 orang. Adapun 4 orang yang tidak hadir karena sakit akan mengikuti asesmen susulan. Nilai hasil asesmen tersebut adalah sebagai berikut:\n\n| No | Nama | Nilai | No | Nama | Nilai | No | Nama | Nilai |\n| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |\n| 1 | Adi Irawan | 70 | 11 | Gilang Ramadhan | 100 | 21 | Rindu Permadani | 80 |\n| 2 | Ananda Rehan | 80 | 12 | Julia Nurul P | 70 | 22 | Riri Urbaningrum | 70 |\n| 3 | Albertus Rudi P| 80 | 13 | Marsya Angelica | 75 | 23 | Royan A F | 75 |\n| 4 | Balqis Qonitah | 70 | 14 | Mandala Putra R | 90 | 24 | Shendy Putra P | 60 |\n| 5 | Bumi Ismara | 60 | 15 | M. Irsyad | 85 | 25 | Shella SPR | 65 |\n| 6 | Cyntia Bela S | 75 | 16 | M. Khoirul Anam | 80 | 26 | Sintya Bella | 60 |\n| 7 | Dinda Yuniar | 60 | 17 | M. Zanky AlFaruq| 60 | 27 | Windu Al Ghazali| 80 |\n| 8 | Farid Fadila | 80 | 18 | Nenty Indah A | 70 | 28 | Zaky Ferdiansyah| 65 |\n| 9 | Farid Ubaidilah| 90 | 19 | Putri Liana Sari| 80 | | | |\n| 10 | Faris Rahman H | 80 | 20 | Rasya Ramadhani | 75 | | | |\n\nUntuk siswa yang nilainya di atas rata – rata dinyatakan lulus dan tidak mengikuti perbaikan atau remidial. Remedial akan dilaksanakan bersamaan dengan asesmen susulan 4 siswa yang sakit. Setelah dilaksanakan remidial dan asesmen susulan, diperoleh data nilai sebagai berikut:\n\n| Nilai | Frekwensi |\n| :--- | :--- |\n| 75 | 8 |\n| 80 | 3 |\n| 85 | 2 |\n| 90 | 2 |\n| 95 | 1 |\n\nDengan demikian lengkaplah nilai asesmen sumatif materi statistika dari 32 siswa. Nilai rata – rata dari 32 siswa tersebut adalah … .",
        options: ["75,56", "76,46", "79,92", "80,94"],
        correctAnswer: "80,94",
        image: null,
        imagePosition: "top"
    },
    {
        id: 26,
        type: "PGK",
        question: "**Petunjuk**: Gunakan tabel data pada nomor 25\n\nBerdasarkan wacana pada nomor 25, berilah tanda centang (√) untuk semua pernyataan yang benar.",
        options: [
            "Mean dari asesmen tersebut adalah 79,92.",
            "Median dari asesmen tersebut adalah 80.",
            "Modus dari asesmen tersebut adalah 75.",
            "Banyak siswa yang mendapat nilai di atas 80 adalah 10 orang."
        ],
        correctAnswer: ["Median dari asesmen tersebut adalah 80.", "Modus dari asesmen tersebut adalah 75."],
        image: null,
        imagePosition: "top"
    },
    {
        id: 27,
        type: "BS",
        question: "**Petunjuk**: Gunakan tabel data pada nomor 25\n\nBerdasarkan wacana pada nomor 25, nyatakan benar atau salah untuk semua pernyataan berikut.",
        statements: [
            "Nilai rata – rata dari 32 siswa adalah 80,94.",
            "Terdapat 9 siswa yang nilainya di atas rata - rata.",
            "Terdapat 9 siswa yang nilainya di atas mediannya.",
            "Kuartil atas dari data tersebut adalah 90."
        ],
        correctAnswer: { 0: "Benar", 1: "Benar", 2: "Benar", 3: "Salah" },
        image: null,
        imagePosition: "top"
    },
    {
        id: 28,
        type: "PG",
        topText: "**LINTAS REL TERPADU (LRT)**",
        question: "_Light Rail Transit_ (LRT) atau dalam bahasa Indonesia diterjemahkan Lintas Rel Terpadu adalah salah satu moda transportasi massal yang dimiliki Provinsi DKI Jakarta. _Light Rail Transit_ (LRT) berbentuk seperti kereta api, namun hal yang membedakan LRT dengan kereta api adalah letak relnya.  Letak rel RLT berada di atas tanah (rel layang).  LRT di Jakarta diujicobakan pertama kali di Jakarta pada tanggal 11 Juni 2019.  Satu rangkaian LRT Jabodetabek terdiri atas 6 gerbong.  Kapasitas setiap gerbong adalah 118 penumpang.  Pada pertengahan tahun 2019, jumlah penumpang rata – rata perhari adalah 4.000 orang.  Hal ini belum memenuhi target, yaitu rata – rata 7.000 orang penumpang per hari. \n\nBerdasarkan wacana tersebut, pernyataan berikut yang benar adalah … .",
        options: [
            "Kapasitas LRT sekali angkut adalah 718 orang",
            "Jumlah penumpang pada pertengahan tahun 2019 dalam satu bulan (30 hari) adalah 120.000 orang",
            "Kekurangan jumlah penumpang dalam satu  bulan (30 hari) agar mencapai target adalah 100.000 orang",
            "Jika akhir tahun 2019 ditargetkan jumlah penumpang mengalami kenaikan sebesar $\\frac{4}{5}$ kali, maka jumlah penumpang dalam satu bulan (30 hari) adalah 210.000 orang."
        ],
        correctAnswer: "Jumlah penumpang pada pertengahan tahun 2019 dalam satu bulan (30 hari) adalah 120.000 orang",
        image: "stimulus_28 sampai_30.png",
        imagePosition: "top"
    },
    {
        id: 29,
        type: "PGK",
        question: "Perhatikan wacana Lintas Rel Terpadu (LRT) di soal sebelumnya.  Gerbong 1 dan 2 telah terisi penuh.  Adapun gerbong 3 dan 4 khusus untuk penumpang wanita.  Jika Abidzar akan menaiki LRT, manakah pernyataan berikut yang benar? Berilah tanda centang (√) untuk semua pernyataan yang benar.",
        options: [
            "Peluang Abidzar menaiki gerbong 6 adalah 0,5.",
            "Jika gerbong 5 terisi 90 penumpang, dan ada 25 orang masuk ke gerbong 5 termasuk Abidzar, Abidzar pasti mendapatkan tempat duduk di dalam gerbong 5.",
            "Abidzar bersama 40 penumpang lainnya ingin menaiki gerbong 5 atau 6. Jika gerbong 5 dan 6 telah terisi 196 penumpang, Abidzar pasti mendapatkan tempat duduk di gerbang 5 atau 6.",
            "Peluang Abidzar mendapatkan tempat duduk di gerbong 1 adalah $\\frac{1}{118}$."
        ],
        correctAnswer: ["Peluang Abidzar menaiki gerbong 6 adalah 0,5.", "Jika gerbong 5 terisi 90 penumpang, dan ada 25 orang masuk ke gerbong 5 termasuk Abidzar, Abidzar pasti mendapatkan tempat duduk di dalam gerbong 5."],
        image: null,
        imagePosition: "top"
    },
    {
        id: 30,
        type: "BS",
        question: "**Perhatikan wacana Lintas Rel Terpadu (LRT) di soal nomor 28.**  Gerbong 1 dan 2 telah terisi penuh.  Adapun gerbong 3 dan 4 khusus untuk penumpang wanita.  Di stasiun pemberhentian LRT, Shafira Bersama wanita lainnya naik digerbong khusus wanita sehingga kedua gerbong penuh terisi penumpang.  Setiap penumpang selalu mendapatkan kursi tempat duduk jika gerbong belum terisi penuh. \nNyatakan benar atau salah pernyataan berikut :",
        statements: [
            "Jika gerbong 3 telah terisi 101 penumpang, dan ada 38 penumpang yang naik termasuk Shafira, maka gerbong 4 telah terisi penumpang sebanyak 97 orang.",
            "Jika shafira merupakan penumpang yang naik pada urutan ke-20, maka Shafira akan mendapat tempat duduk di gerbong 3.",
            "Peluang Shafira mendapatkan tempat duduk di gerbong 4 adalah $\\frac{1}{118}$.",
            "Peluang Shafira menempati kursi di gerbong 2 adalah 0."
        ],
        correctAnswer: { 0: "Salah", 1: "Benar", 2: "Benar", 3: "Benar" },
        image: null,
        imagePosition: "top"
    }
];
