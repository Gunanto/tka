import React, { useState, useEffect } from 'react';
import './index.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Helper component to render text with Math and Tables
const MathText = ({ text }) => {
  if (!text) return null;

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

// Helper for Certificate Predicate
const getPredicate = (score) => {
  if (score <= 50) return 'Kurang';
  if (score <= 70) return 'Cukup';
  if (score <= 90) return 'Baik';
  return 'Sangat Baik';
};

// Certificate Component
const Certificate = ({ userData, score }) => {
  const predicate = getPredicate(score);
  const dateStr = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date());

  return (
    <div className="certificate-wrapper" id="certificate-print">
      <div className="certificate-ref-border">
        {/* Decorative Corners */}
        <div className="corner-decor top-left"></div>
        <div className="corner-decor top-right"></div>
        <div className="corner-decor bottom-left"></div>
        <div className="corner-decor bottom-right"></div>

        <div className="certificate-inner-content">
          <div className="cert-header">
            <div className="cert-logo-left">
              <div className="diamond-logo"></div>
            </div>
            <div className="cert-header-text">
              <h2 className="header-main-title">PANITIA TRY OUT TKA</h2>
              <p className="header-sub-title">MGMP MATEMATIKA SMP LAMPUNG TENGAH</p>
            </div>
            <div className="cert-logo-right">
              <div className="trophy-icon">🏆</div>
            </div>
          </div>

          <div className="cert-title-section">
            <div className="cert-ornament-line">
              <span></span>
              <div className="diamond-small"></div>
              <span></span>
            </div>
            <h1 className="main-cert-title">SERTIFIKAT</h1>
            <p className="sub-cert-title">HASIL TRY OUT TKA</p>
          </div>

          <div className="cert-main-body">
            <p className="cert-intro-text">Sertifikat ini diberikan kepada:</p>
            <h2 className="recipient-full-name">{userData.name.toUpperCase()}</h2>

            <p className="cert-participation-text">
              Atas partisipasinya dalam kegiatan <strong>Try Out Tes Kemampuan Akademik (TKA)</strong> <br />
              Mata Pelajaran Matematika yang diselenggarakan pada tanggal {dateStr}.
            </p>

            <div className="cert-student-info">
              <span>Kelas: <strong>{userData.class}</strong></span>
              <span className="dot-separator">•</span>
              <span>Sekolah: <strong>{userData.school}</strong></span>
            </div>

            <div className="cert-score-grid">
              <div className="score-box">
                <span className="score-label">NILAI TO TKA</span>
                <span className="score-value-text">{score}</span>
              </div>
              <div className="score-box">
                <span className="score-label">PREDIKAT</span>
                <span className="score-value-text">{predicate.toUpperCase()}</span>
              </div>
            </div>
          </div>

          <div className="cert-footer-sig">
            <div className="sig-wrap">
              <div className="sig-field">
                <div className="sig-space"></div>
                <p className="sig-name">( ................................ )</p>
                <div className="sig-line-decor"></div>
                <p className="sig-title-text">Ketua MGMP Matematika</p>
              </div>

              <div className="cert-gold-circular-seal">
                <div className="seal-center-text">TKA</div>
                <div className="seal-ribbon left"></div>
                <div className="seal-ribbon right"></div>
              </div>

              <div className="sig-field">
                <div className="sig-space"></div>
                <p className="sig-name">( ................................ )</p>
                <div className="sig-line-decor"></div>
                <p className="sig-title-text">Ketua Penyelenggara</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [view, setView] = useState('login'); // login, exam, result
  const [userData, setUserData] = useState({ name: '', class: '', school: '' });
  const [questions, setQuestions] = useState([]); // Questions state
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [raguState, setRaguState] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600);
  const [fontSize, setFontSize] = useState(16);
  const [score, setScore] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showIncompleteModal, setShowIncompleteModal] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  // Fetch questions from API
  useEffect(() => {
    fetch('http://localhost:3001/api/questions')
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching questions:', err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    let timer;
    if (view === 'exam' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && view === 'exam') {
      calculateResult();
    }
    return () => clearInterval(timer);
  }, [view, timeLeft]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userData.name && userData.class && userData.school) {
      setView('exam');
    } else {
      alert('Silakan lengkapi semua data!');
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (option) => {
    const q = questions[currentIndex];
    if (q.type === "PGK") {
      const currentArr = answers[q.id] || [];
      if (currentArr.includes(option)) {
        setAnswers({ ...answers, [q.id]: currentArr.filter(a => a !== option) });
      } else {
        setAnswers({ ...answers, [q.id]: [...currentArr, option] });
      }
    } else {
      setAnswers({ ...answers, [q.id]: option });
    }
  };

  const handleAnswerBS = (stmtIdx, value) => {
    const currentAns = answers[questions[currentIndex].id] || {};
    setAnswers({
      ...answers,
      [questions[currentIndex].id]: { ...currentAns, [stmtIdx]: value }
    });
  };

  const isAnswered = (id) => {
    const ans = answers[id];
    const q = questions.find(item => item.id === id);
    if (!ans) return false;
    if (q.type === "BS") return Object.keys(ans).length === q.statements.length;
    if (Array.isArray(ans)) return ans.length > 0;
    return ans !== undefined && ans !== null;
  };

  const calculateResult = () => {
    let correctCount = 0;
    let wrongIds = [];

    const normalize = (str) => {
      if (typeof str !== 'string') return str;
      return str.trim().toLowerCase().replace(/\s+/g, ' ');
    };

    questions.forEach(q => {
      const userAns = answers[q.id];
      let isCorrect = false;

      if (!userAns) {
        wrongIds.push(q.id);
        return;
      }

      if (q.type === "PG") {
        isCorrect = normalize(userAns) === normalize(q.correctAnswer);
      } else if (q.type === "PGK") {
        const normalizedUserAns = Array.isArray(userAns) ? userAns.map(normalize) : [];
        const normalizedCorrectAns = Array.isArray(q.correctAnswer) ? q.correctAnswer.map(normalize) : [];

        isCorrect = normalizedUserAns.length === normalizedCorrectAns.length &&
          normalizedUserAns.every(val => normalizedCorrectAns.includes(val));
      } else if (q.type === "BS") {
        isCorrect = Object.keys(q.correctAnswer).every(idx =>
          normalize(userAns[idx]) === normalize(q.correctAnswer[idx])
        );
      }

      if (isCorrect) {
        correctCount++;
      } else {
        wrongIds.push(q.id);
      }
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);
    setScore(finalScore);
    setWrongQuestions(wrongIds); // We need to add this state
    setView('result');
    setShowConfirmModal(false);
    setShowIncompleteModal(false);
    setIsAgreed(false);
  };

  const handleFinishAttempt = () => {
    const unanswered = questions.filter(q => !isAnswered(q.id));
    if (unanswered.length > 0) {
      setShowIncompleteModal(true);
    } else {
      setShowConfirmModal(true);
    }
  };

  const resetExam = () => {
    setAnswers({});
    setRaguState({});
    setCurrentIndex(0);
    setTimeLeft(3600);
    setView('login');
  };

  if (isLoading) {
    return (
      <div className="loading-screen" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <div className="loader"></div>
        <p style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>Memuat Soal...</p>
      </div>
    );
  }

  if (view === 'login') {
    return (
      <div className="login-screen">
        <div className="login-card">
          <h2>LOGIN PESERTA</h2>
          <p style={{ marginBottom: '25px', fontSize: '1rem', color: '#000000', fontWeight: '600' }}>
            Try Out TKA Matematika SMP Kabupaten Lampung Tengah
          </p>

          <button
            className="btn btn-secondary btn-block"
            style={{ marginBottom: '20px', backgroundColor: '#34495e' }}
            onClick={() => setShowInstructions(true)}
          >
            BACA PETUNJUK
          </button>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input
                type="text"
                value={userData.name}
                onChange={e => setUserData({ ...userData, name: e.target.value })}
                placeholder="Masukkan nama..."
              />
            </div>
            <div className="form-group">
              <label>Kelas</label>
              <input
                type="text"
                value={userData.class}
                onChange={e => setUserData({ ...userData, class: e.target.value })}
                placeholder="Contoh: 9A"
              />
            </div>
            <div className="form-group">
              <label>Sekolah</label>
              <input
                type="text"
                value={userData.school}
                onChange={e => setUserData({ ...userData, school: e.target.value })}
                placeholder="Nama sekolah..."
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">MULAI UJIAN</button>
          </form>



          <div className="login-footer" style={{ marginTop: '30px', fontSize: '0.85rem', color: '#333', lineHeight: '1.6', fontWeight: '500' }}>
            <div>&copy; 2026 All Right Reserved</div>
            <div>Dibuat dengan<span style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle', margin: '0 3px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#e74c3c">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>oleh Tim MGMP Matematika</div>
            <div className="social-share">
              <a href="https://wa.me/?text=*Try%20Out%20TKA%20Matematika%20SMP%20Kabupaten%20Lampung%20Tengah*%0A%0ADikembangkan%20oleh:%20*Aan%20Triono*%0A(Ketua%20MGMP%20Matematika%20SMP%20Lampung%20Tengah)%0A%0ASilakan%20akses%20link%20berikut:%0Ahttps://tka.aantriono.com" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" title="WhatsApp">
                <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.33.015 7.05.073 5.77.132 4.9.337 4.14.63c-.784.306-1.45.713-2.115 1.378-.665.665-1.072 1.33-1.378 2.115-.293.76-.498 1.63-.557 2.91C.015 8.33 0 8.74 0 12s.015 3.67.073 4.95c.059 1.28.264 2.15.557 2.91.306.784.713 1.45 1.378 2.115s1.331 1.072 2.115 1.378c.76.293 1.63.498 2.91.557 1.28.058 1.69.073 4.95.073s3.67-.015 4.95-.073c1.28-.059 2.15-.264 2.91-.557.784-.306 1.45-.713 2.115-1.378s1.072-1.331 1.378-2.115c.293-.76.498-1.63.557-2.91.058-1.28.073-1.69.073-4.95s-.015-3.67-.073-4.95c-.059-1.28-.264-2.15-.557-2.91-.306-.784-.713-1.45-1.378-2.115s-1.331-1.072-2.115-1.378c-.76-.293-1.63-.498-2.91-.557C15.67.015 15.26 0 12 0zm0 2.16c3.203 0 3.584.016 4.85.071 1.17.054 1.805.249 2.227.412.558.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.055 1.266.07 1.646.07 4.85s-.015 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.558-.474.96-.894 1.38s-.82.678-1.38.894c-.422.163-1.057.358-2.227.412-1.266.055-1.646.07-4.85.07s-3.584-.015-4.85-.07" /></svg>
              </a>
              <a href="https://twitter.com/intent/tweet?text=Ayo%20ikut%20Try%20Out%20TKA%20Matematika%20SMP%20Kabupaten%20Lampung%20Tengah!&url=https://tka.aantriono.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter" title="X (Twitter)">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://t.me/share/url?url=https://tka.aantriono.com&text=Ayo%20ikut%20Try%20Out%20TKA%20Matematika%20SMP%20Kabupaten%20Lampung%20Tengah!" target="_blank" rel="noopener noreferrer" className="social-icon telegram" title="Telegram">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.52-.46-.01-1.33-.26-1.98-.48-.8-.27-1.43-.42-1.37-.89.03-.25.38-.51 1.05-.78 4.1-1.78 6.83-2.95 8.2-3.5 3.9-1.58 4.7.15 4.65.15z" /></svg>
              </a>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link disalin ke clipboard!'); }} className="social-icon link" title="Salin Link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Petunjuk */}
        {showInstructions && (
          <div className="modal-overlay">
            <div className="modal-content instructions-modal">
              <h2 style={{ color: 'var(--primary-blue)', borderBottom: '2px solid var(--accent-yellow)', paddingBottom: '10px' }}>
                PETUNJUK PENGERJAAN TO TKA
              </h2>
              <div className="instructions-body" style={{ textAlign: 'left', margin: '20px 0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                <ol>
                  <li>Pastikan koneksi internet Anda stabil selama pengerjaan berlangsung.</li>
                  <li>Lengkapi data diri (Nama, Kelas, dan Sekolah) sebelum memulai ujian.</li>
                  <li>Waktu pengerjaan adalah <strong>60 menit</strong>. Sisa waktu dapat dilihat di bagian pojok kanan atas layar.</li>
                  <li>Tes terdiri dari 30 soal matematika dengan berbagai tipe (Pilihan Ganda, Pilihan Ganda Kompleks, dan Benar/Salah).</li>
                  <li>Anda dapat beralih antar soal menggunakan panel nomor soal di sisi kanan atau tombol Navigasi di bawah soal.</li>
                  <li>Jika ragu-ragu dengan jawaban Anda, centang kotak <strong>"RAGU-RAGU"</strong> agar nomor soal berubah menjadi kuning.</li>
                  <li>Setelah selesai mengerjakan, tekan tombol <strong>"SELESAI"</strong> pada soal terakhir.</li>
                  <li><strong>Sertifikat Hasil:</strong> Segera setelah mengirimkan jawaban, Anda akan mendapatkan sertifikat resmi hasil Try Out yang mencantumkan Nilai dan Predikat. Sertifikat dapat langsung diunduh dalam format PDF.</li>
                </ol>
                <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--primary-blue)', marginTop: '20px' }}>
                  <strong>Penting:</strong> Jangan menutup tab browser atau melakukan <i>refresh</i> halaman saat ujian sedang berlangsung karena dapat menyebabkan jawaban Anda hilang.
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => setShowInstructions(false)}
                style={{ width: '200px' }}
              >
                MENGERTI & TUTUP
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  const downloadCertificate = () => {
    const certificate = document.getElementById('certificate-print');
    if (!certificate) return;

    // Show loading hint or change button text
    const btn = document.querySelector('.btn-download');
    const originalText = btn.innerText;
    btn.innerText = "SEDANG MEMPROSES...";
    btn.disabled = true;

    // Use html2canvas to capture the certificate
    // scale: 2 for better resolution
    window.html2canvas(certificate, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    }).then(canvas => {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.download = `Sertifikat TKA - ${userData.name}.png`;
      link.href = image;
      link.click();

      // Restore button
      btn.innerText = originalText;
      btn.disabled = false;
    }).catch(err => {
      console.error("Download failed:", err);
      alert("Maaf, terjadi kesalahan saat mengunduh. Silakan coba Screenshot layar Anda.");
      btn.innerText = originalText;
      btn.disabled = false;
    });
  };

  if (view === 'result') {
    return (
      <div className="result-screen">
        <div className="result-container">
          <div className="result-header">
            <h2>Ujian Selesai!</h2>
            <p>Klik tombol di bawah untuk mengunduh sertifikat hasil Anda.</p>
          </div>

          {/* Certificate Preview */}
          <div className="certificate-preview-container">
            <Certificate userData={userData} score={score} />
          </div>

          <div className="result-actions">
            <button
              className="btn btn-primary btn-lg btn-download"
              onClick={downloadCertificate}
              style={{ padding: '15px 40px', fontSize: '1.2rem' }}
            >
              UNDUH SERTIFIKAT (PNG)
            </button>
            <button className="btn btn-success" onClick={resetExam} style={{ marginTop: '20px' }}>
              KEMBALI KE BERANDA
            </button>
            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '15px', maxWidth: '300px', marginInline: 'auto' }}>
              *Jika tombol unduh tidak merespons, gunakan menu "Cetak" di browser Anda atau ambil tangkapan layar (Screenshot) sertifikat Anda.
            </p>
            {wrongQuestions.length > 0 && (
              <div style={{ fontSize: '8px', color: '#f5f5f5', marginTop: '10px' }}>
                ID: {wrongQuestions.join(', ')}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="app-container">
      <header>
        <div className="logo-section">
          <h1>TO TKA MTK SMP LAMPUNG TENGAH</h1>
        </div>
        <div className="user-section">
          <div style={{ textAlign: 'right', marginRight: '15px' }}>
            <div className="username" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{userData.name.toUpperCase()}</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{userData.school} - {userData.class}</div>
          </div>
          <div className="timer">
            SISA WAKTU: {formatTime(timeLeft)}
          </div>
        </div>
      </header>

      <main>
        <div className="question-area">
          <div className="question-header">
            <span className="question-num">SOAL NOMOR: {currentIndex + 1}</span>
            <div className="font-controls">
              Ukuran Font:
              <button onClick={() => setFontSize(14)} className={`font-btn ${fontSize === 14 ? 'active' : ''}`} style={{ fontSize: '12px' }}>A</button>
              <button onClick={() => setFontSize(18)} className={`font-btn ${fontSize === 18 ? 'active' : ''}`} style={{ fontSize: '16px' }}>A</button>
              <button onClick={() => setFontSize(24)} className={`font-btn ${fontSize === 24 ? 'active' : ''}`} style={{ fontSize: '20px' }}>A</button>
            </div>
          </div>

          <div className={`question-content-wrapper ${currentQuestion.imagePosition === 'side' ? 'layout-side' : 'layout-stack'}`}>
            {/* Text ABOVE Image if exists */}
            {currentQuestion.topText && (
              <div className="question-top-text" style={{ fontSize: `${fontSize}px` }}>
                <MathText text={currentQuestion.topText} />
              </div>
            )}

            {/* Image on TOP (Default) or SIDE */}
            {(currentQuestion.image && (!currentQuestion.imagePosition || currentQuestion.imagePosition === 'top' || currentQuestion.imagePosition === 'side')) && (
              <div className="question-image-wrapper">
                {Array.isArray(currentQuestion.image) ? (
                  <div className="question-images-container">
                    {currentQuestion.image.map((img, idx) => (
                      <img key={idx} src={`/image/${img}`} alt={`Soal ${idx + 1}`} className="question-image" />
                    ))}
                  </div>
                ) : (
                  <img src={`/image/${currentQuestion.image}`} alt="Soal" className="question-image" />
                )}
              </div>
            )}

            <div className="question-text" style={{ fontSize: `${fontSize}px` }}>
              <MathText text={currentQuestion.question} />
            </div>

            {/* Image on BOTTOM */}
            {(currentQuestion.image && currentQuestion.imagePosition === 'bottom') && (
              <div className="question-image-wrapper">
                {Array.isArray(currentQuestion.image) ? (
                  <div className="question-images-container" style={{ marginTop: '20px' }}>
                    {currentQuestion.image.map((img, idx) => (
                      <img key={idx} src={`/image/${img}`} alt={`Soal ${idx + 1}`} className="question-image" />
                    ))}
                  </div>
                ) : (
                  <img src={`/image/${currentQuestion.image}`} alt="Soal" className="question-image" style={{ marginTop: '20px' }} />
                )}
              </div>
            )}
          </div>

          <div className="options-list" style={{ fontSize: `${fontSize}px` }}>
            {currentQuestion.type === "BS" ? (
              <table className="bs-table">
                <thead>
                  <tr>
                    <th>Pernyataan</th>
                    <th className="center">Benar</th>
                    <th className="center">Salah</th>
                  </tr>
                </thead>
                <tbody>
                  {currentQuestion.statements.map((stmt, sIdx) => (
                    <tr key={sIdx}>
                      <td><MathText text={stmt} /></td>
                      <td className="center">
                        <input
                          type="radio"
                          name={`stmt-${currentQuestion.id}-${sIdx}`}
                          className="bs-radio"
                          checked={answers[currentQuestion.id]?.[sIdx] === "Benar"}
                          onChange={() => handleAnswerBS(sIdx, "Benar")}
                        />
                      </td>
                      <td className="center">
                        <input
                          type="radio"
                          name={`stmt-${currentQuestion.id}-${sIdx}`}
                          className="bs-radio"
                          checked={answers[currentQuestion.id]?.[sIdx] === "Salah"}
                          onChange={() => handleAnswerBS(sIdx, "Salah")}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              currentQuestion.options.map((option, idx) => {
                const isSelected = Array.isArray(answers[currentQuestion.id])
                  ? answers[currentQuestion.id].includes(option)
                  : answers[currentQuestion.id] === option;

                return (
                  <div
                    key={idx}
                    className={`option-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleAnswer(option)}
                  >
                    <input
                      type={currentQuestion.type === "PGK" ? "checkbox" : "radio"}
                      checked={isSelected}
                      readOnly
                      style={{ marginRight: '15px', transform: 'scale(1.2)' }}
                    />
                    <MathText text={option} />
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="navigation-panel">
          <h3 style={{ marginTop: 0, fontSize: '1rem', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            DAFTAR SOAL
          </h3>
          <div className="nav-grid">
            {questions.map((q, idx) => (
              <div
                key={q.id}
                className={`nav-item ${currentIndex === idx ? 'current' : ''} ${isAnswered(q.id) ? (raguState[q.id] ? 'ragu' : 'answered') : ''}`}
                onClick={() => setCurrentIndex(idx)}
              >
                {idx + 1}
              </div>
            ))}
          </div>

          <div className="nav-legend">
            <div className="legend-item"><div className="legend-color" style={{ backgroundColor: 'var(--green-answered)', borderColor: 'var(--green-answered)' }}></div><span>Sudah</span></div>
            <div className="legend-item"><div className="legend-color" style={{ backgroundColor: 'var(--yellow-ragu)', borderColor: 'var(--yellow-ragu)' }}></div><span>Ragu</span></div>
            <div className="legend-item"><div className="legend-color" style={{ border: '2px solid var(--primary-blue)' }}></div><span>Dibuka</span></div>
            <div className="legend-item"><div className="legend-color" style={{ backgroundColor: 'white' }}></div><span>Belum</span></div>
          </div>
        </div>
      </main>

      <footer>
        <button className="btn btn-red" disabled={currentIndex === 0} onClick={() => setCurrentIndex(currentIndex - 1)}>SOAL SEBELUMNYA</button>
        <div className="ragu-container" onClick={() => setRaguState({ ...raguState, [currentQuestion.id]: !raguState[currentQuestion.id] })}>
          <input type="checkbox" checked={!!raguState[currentQuestion.id]} readOnly />
          <span>RAGU-RAGU</span>
        </div>
        {currentIndex === questions.length - 1 ? (
          <button className="btn btn-success" onClick={handleFinishAttempt}>SELESAI</button>
        ) : (
          <button className="btn btn-primary" onClick={() => setCurrentIndex(currentIndex + 1)}>SOAL BERIKUTNYA</button>
        )}
      </footer>

      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Konfirmasi Selesai Ujian</h3>
            <p>Apakah Anda yakin ingin mengakhiri TO TKA Matematika ini? Pastikan semua soal telah diperiksa kembali.</p>

            <div className="confirm-container" onClick={() => setIsAgreed(!isAgreed)}>
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={() => setIsAgreed(!isAgreed)}
              />
              <label style={{ cursor: 'pointer', fontSize: '0.9rem' }}>
                Saya menyatakan bahwa saya telah selesai mengerjakan TO TKA ini dengan jujur dan ingin mengirimkan jawaban saya.
              </label>
            </div>

            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                style={{ backgroundColor: '#7f8c8d' }}
                onClick={() => { setShowConfirmModal(false); setIsAgreed(false); }}
              >
                BATAL
              </button>
              <button
                className="btn btn-success"
                disabled={!isAgreed}
                onClick={calculateResult}
              >
                SELESAI & KIRIM
              </button>
            </div>
          </div>
        </div>
      )}

      {showIncompleteModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ borderTop: '5px solid #e74c3c', textAlign: 'center' }}>
            <div style={{ marginBottom: '15px' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="#e74c3c" style={{ display: 'block', margin: '0 auto' }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <h3 style={{ color: '#e74c3c', marginBottom: '10px' }}>BELUM SELESAI!</h3>
            <p style={{ margin: '15px 0', lineHeight: '1.6', fontSize: '1.05rem' }}>
              Maaf <strong>{userData.name}</strong>, Anda belum menyelesaikan semua nomor soal.
              Silakan periksa kembali jawaban Anda sebelum mengakhiri ujian.
            </p>
            <div style={{ backgroundColor: '#fff3cd', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ffc107', marginBottom: '20px', fontSize: '0.9rem', textAlign: 'left' }}>
              <strong>Petunjuk:</strong> Perhatikan panel daftar soal, nomor yang masih berwarna putih berarti belum dijawab.
            </div>
            <div className="modal-actions" style={{ justifyContent: 'center' }}>
              <button
                className="btn btn-primary"
                onClick={() => setShowIncompleteModal(false)}
                style={{ width: '100%', padding: '12px' }}
              >
                KEMBALI MENGERJAKAN
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
