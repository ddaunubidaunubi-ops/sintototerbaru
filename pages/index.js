import Head from 'next/head';
import { useState } from 'react';

const D = {
  brand: 'SINTOTO',
  domain: 'sintototerbaru.com',
  logo: 'https://i.imgur.com/PrbuJXD.png',
  linkLogin: 'https://loginwap.gelapsekali.com/sin',
  linkDaftar: 'https://daftarwap.gelapsekali.com/sin',
  amphtml: 'sintototerbaru.com',
};

const features = [
  { icon: '⚡', title: 'Akses Super Cepat', desc: 'Server berperforma tinggi memastikan loading dalam hitungan detik.' },
  { icon: '🔒', title: 'Keamanan Berlapis', desc: 'Enkripsi SSL 256-bit dan proteksi DDoS tingkat enterprise.' },
  { icon: '📱', title: 'Mobile Responsive', desc: 'Tampilan otomatis menyesuaikan di semua perangkat.' },
  { icon: '🔗', title: 'Link Alternatif', desc: 'Banyak link alternatif resmi yang selalu diperbarui.' },
  { icon: '🎯', title: 'Tampilan Modern', desc: 'Desain antarmuka clean dan intuitif untuk kemudahan navigasi.' },
  { icon: '💬', title: 'Layanan 24 Jam', desc: 'Tim customer service siap membantu kapan saja.' },
];

const steps = [
  { num: '1', title: 'Buka Situs', desc: 'Kunjungi halaman utama melalui browser.' },
  { num: '2', title: 'Klik Daftar', desc: 'Pilih tombol Daftar di halaman utama.' },
  { num: '3', title: 'Isi Formulir', desc: 'Lengkapi data pribadi dengan informasi valid.' },
  { num: '4', title: 'Login & Mulai', desc: 'Gunakan akun baru untuk menjelajah.' },
];

const faqs = [
  { q: 'Bagaimana cara login SINTOTO?', a: 'Kunjungi halaman login resmi di situs resmi SINTOTO, masukkan username dan password, lalu klik Login.' },
  { q: 'Apakah SINTOTO aman?', a: 'Ya, kami menggunakan enkripsi SSL 256-bit dan proteksi keamanan berlapis tingkat enterprise.' },
  { q: 'Bisa akses dari smartphone?', a: 'Tentu, SINTOTO dioptimalkan untuk semua perangkat mobile dengan tampilan responsif.' },
  { q: 'Berapa lama proses daftar?', a: 'Proses pendaftaran kurang dari 2 menit, sangat cepat dan mudah.' },
  { q: 'Ada link alternatif?', a: 'Ya, tersedia beberapa link alternatif resmi yang selalu aktif dan diperbarui.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>SINTOTO » Link Alternatif Tercepat | Akses Kilat Menuju Dimensi Cuan</title>
        <meta name="description" content="SINTOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={D.logo} />
        <link rel="canonical" href={'https://' + D.domain + '/'} />
        <link rel="amphtml" href={'https://' + D.domain + '/amp/'} />
        <meta property="og:title" content="SINTOTO » Link Alternatif Tercepat | Akses Kilat Menuju Dimensi Cuan" />
        <meta property="og:description" content="SINTOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <meta property="og:image" content={D.logo} />
        <meta property="og:url" content={'https://' + D.domain} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SINTOTO » Link Alternatif Tercepat | Akses Kilat Menuju Dimensi Cuan" />
        <meta name="twitter:description" content="SINTOTO adalah situs resmi terpercaya dengan akses login cepat, keamanan SSL 256-bit, dan dukungan 24/7. Daftar gratis sekarang." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"} rel="stylesheet" />
      </Head>

      <style jsx global>{`
        :root{--bg:#fff;--bg2:#f8f9fa;--card:#fff;--primary:#6c5ce7;--primary2:#5a4bd1;--accent:#a29bfe;--text:#2d3436;--muted:#636e72;--border:rgba(108,92,231,.08);--r:16px}
        *{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
        body{font-family:'Poppins',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;overflow-x:hidden}
        a{color:inherit;text-decoration:none}img{max-width:100%;display:block}
        .C{max-width:1140px;margin:0 auto;padding:0 20px}
        header{position:sticky;top:0;z-index:50;background:#ffff0;backdrop-filter:blur(14px);border-bottom:1px solid var(--border)}
        .N{display:flex;align-items:center;justify-content:space-between;padding:14px 0}
        .lo{display:flex;align-items:center;gap:10px;font-weight:700;font-size:20px;color:var(--primary)}
        .lo img{width:36px;height:36px;border-radius:var(--r)}
        .nb{display:flex;gap:8px}
        .b{display:inline-flex;align-items:center;gap:6px;padding:10px 22px;border-radius:var(--r);font-weight:700;font-size:13px;transition:.25s;border:none;cursor:pointer;font-family:inherit}
        .bp{background:var(--primary);color:#fff;box-shadow:0 4px 16px #6c5ce735}
        .bp:hover{background:var(--primary2);transform:translateY(-2px);box-shadow:0 6px 24px #6c5ce750}
        .bo{border:1px solid var(--border);color:var(--text);background:transparent}
        .bo:hover{border-color:var(--primary);color:var(--primary)}
        .bl{padding:14px 28px;font-size:15px}
        .hero{padding:80px 0 60px;text-align:center;position:relative;overflow:hidden}
        .badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border:1px solid var(--border);border-radius:99px;font-size:12px;color:var(--primary);background:#6c5ce710;margin-bottom:20px;font-weight:600}
        .badge .dt{width:8px;height:8px;border-radius:50%;background:var(--primary);animation:pulse 1.5s infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
        .hero h1{font-size:clamp(28px,5vw,52px);font-weight:800;line-height:1.1;margin-bottom:16px}
        .hero h1 em{font-style:normal;color:var(--primary)}
        .hero .ld{color:var(--muted);font-size:16px;max-width:620px;margin:0 auto 28px}
        .hb{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-bottom:22px}
        .tr{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;font-size:13px;color:var(--muted)}
        .tr .ck{color:var(--primary);font-weight:700}
        .bnr{padding:24px 0}
        .bnr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .bnr-card{border-radius:var(--r);overflow:hidden;border:1px solid var(--border);transition:.3s}
        .bnr-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px #6c5ce720}
        .bnr-card img{width:100%;height:auto}
        .sg{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:30px 0}
        .sc{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:22px;text-align:center}
        .sc .v{font-size:26px;font-weight:800;color:var(--primary);display:block}
        .sc .l{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px}
        .sec{padding:60px 0}.sec-a{background:var(--bg2)}
        .sh{text-align:center;margin-bottom:40px}
        .sh .tg{display:inline-block;padding:5px 14px;border:1px solid var(--border);border-radius:var(--r);font-size:11px;color:var(--primary);background:#6c5ce708;margin-bottom:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px}
        .sh h2{font-size:clamp(22px,3vw,36px);font-weight:800;margin-bottom:6px}
        .sh p{color:var(--muted);max-width:520px;margin:0 auto}
        .fg{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .fc{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:24px;transition:.3s}
        .fc:hover{transform:translateY(-4px);border-color:var(--primary);box-shadow:0 10px 30px #6c5ce715}
        .fc .ic{width:48px;height:48px;border-radius:var(--r);background:#6c5ce712;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:12px}
        .fc h3{font-size:15px;font-weight:700;margin-bottom:4px}
        .fc p{color:var(--muted);font-size:13px;margin:0}
        .stg{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
        .step{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:24px;text-align:center;transition:.3s}
        .step:hover{transform:translateY(-3px)}
        .step .nm{width:46px;height:46px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;margin:0 auto 10px}
        .step h4{font-size:14px;font-weight:700;margin-bottom:3px}
        .step p{color:var(--muted);font-size:12px;margin:0}
        .art{max-width:800px;margin:0 auto}
        .art p{color:var(--muted);font-size:14px;line-height:1.9;margin-bottom:16px;text-align:justify}
        .cta{background:var(--primary);border-radius:var(--r);padding:48px 28px;text-align:center;color:#fff}
        .cta h2{font-size:clamp(20px,3vw,32px);font-weight:800;margin-bottom:8px}
        .cta p{opacity:.85;margin-bottom:20px}
        .cta .b{background:#fff;color:var(--primary)}
        .fl{max-width:720px;margin:0 auto}
        .fi{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:16px 20px;margin-bottom:8px;cursor:pointer;transition:.2s}
        .fi:hover{border-color:var(--primary)}
        .fq{font-weight:600;display:flex;justify-content:space-between;align-items:center;font-size:14px}
        .fq span{color:var(--primary);font-size:18px}
        .fa{margin-top:8px;color:var(--muted);font-size:13px}
        footer{border-top:1px solid var(--border);padding:28px 0;text-align:center;color:var(--muted);font-size:12px}
        footer .fk{display:flex;justify-content:center;gap:16px;margin-bottom:8px;flex-wrap:wrap}
        footer .fk a:hover{color:var(--primary)}
        @media(max-width:960px){.fg{grid-template-columns:1fr 1fr}.stg,.sg{grid-template-columns:1fr 1fr}.bnr-grid{grid-template-columns:1fr}}
        @media(max-width:560px){.fg,.stg{grid-template-columns:1fr}}
        .hero{background:linear-gradient(135deg,#f8f9fa,#e8e4ff)}.fc{box-shadow:0 2px 20px rgba(0,0,0,.04)}.bp{border-radius:99px}.bo{border-radius:99px}.badge{border-radius:99px;background:linear-gradient(90deg,#6c5ce7,#a29bfe);color:#fff;border:none}
      `}</style>

      <header><div className="C N">
        <a href="#" className="lo"><img src={D.logo} alt={D.brand} />{D.brand}</a>
        <div className="nb">
          <a href={D.linkLogin} className="b bo">Login</a>
          <a href={D.linkDaftar} className="b bp">Daftar</a>
        </div>
      </div></header>

      <main>
        <section className="hero"><div className="C">
          <span className="badge"><span className="dt"></span> {D.brand} &bull; Situs Resmi 2026</span>
          <h1>SINTOTO » Link Alternatif Tercepat | Akses Kilat Menuju Dimensi Cuan</h1>
          <p className="ld">SINTOTO adalah platform terpercaya dengan akses super cepat, keamanan tingkat tinggi, dan link alternatif yang selalu aktif 24 jam. Daftar gratis sekarang.</p>
          <div className="hb">
            <a href={D.linkDaftar} className="b bp bl">Daftar Sekarang &rarr;</a>
            <a href={D.linkLogin} className="b bo bl">Login Akun</a>
          </div>
          <div className="tr">
            <span><span className="ck">✓</span> SSL 256-bit</span>
            <span><span className="ck">✓</span> Uptime 99.9%</span>
            <span><span className="ck">✓</span> Support 24/7</span>
          </div>
        </div></section>
        <section className="bnr"><div className="C">
          <div className="bnr-grid">
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=720&h=280&fit=crop" alt="SINTOTO - Promo 1" loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=720&h=280&fit=crop" alt="SINTOTO - Promo 2" loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=720&h=280&fit=crop" alt="SINTOTO - Promo 3" loading="lazy" /></a>
          </div>
        </div></section>
        <section className="sec" id="panduan"><div className="C">
          <div className="sh">
            <span className="tg">Panduan Mudah</span>
            <h2>Cara Bergabung di {D.brand}</h2>
            <p>Empat langkah mudah untuk memulai.</p>
          </div>
          <div className="stg">
            {steps.map((s, i) => (
              <div className="step" key={i}>
                <div className="nm">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div></section>
        <section className="sec"><div className="C">
          <div className="cta">
            <h2>Bergabung dengan {D.brand} Sekarang!</h2>
            <p>Daftar gratis dan rasakan layanan premium tanpa batas.</p>
            <a href={D.linkDaftar} className="b bl">Daftar Gratis &rarr;</a>
          </div>
        </div></section>
        <section className="sec" id="tentang"><div className="C">
          <div className="sh">
            <span className="tg">Tentang Kami</span>
            <h2>Mengenal Lebih Dekat {D.brand}</h2>
          </div>
          <div className="art">
            <p>SINTOTO melalui situs resmi SINTOTO menghadirkan pengalaman akses digital yang modern dan menyenangkan. Seperti toko online terpercaya yang memprioritaskan kepuasan pelanggan, SINTOTO menyediakan proses login dan pendaftaran yang mudah, cepat, dan aman. Tampilan responsif yang otomatis menyesuaikan di semua perangkat memastikan kenyamanan akses baik dari desktop maupun smartphone.</p>
            <p>Keamanan transaksi di SINTOTO dijamin dengan enkripsi SSL 256-bit dan proteksi DDoS tingkat enterprise. Di situs resmi SINTOTO, setiap pengguna mendapatkan akses ke berbagai fitur premium tanpa biaya tambahan. Sistem link alternatif resmi yang selalu aktif memastikan Anda tidak pernah kehilangan akses, sementara tim customer service yang responsif siap membantu 24 jam penuh setiap hari.</p>
          </div>
        </div></section>
        <section className="sec sec-a" id="fitur"><div className="C">
          <div className="sh">
            <span className="tg">Fitur Unggulan</span>
            <h2>Kenapa Memilih {D.brand}?</h2>
            <p>Nikmati berbagai fitur modern yang kami tawarkan.</p>
          </div>
          <div className="fg">
            {features.map((f, i) => (
              <div className="fc" key={i}>
                <div className="ic">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div></section>
        <section className="sec"><div className="C">
          <div className="sg">
            <div className="sc"><span className="v">99.9%</span><span className="l">Uptime</span></div>
            <div className="sc"><span className="v">24/7</span><span className="l">Support</span></div>
            <div className="sc"><span className="v">1M+</span><span className="l">Users</span></div>
            <div className="sc"><span className="v">5★</span><span className="l">Rating</span></div>
          </div>
        </div></section>
        <section className="sec sec-a" id="faq"><div className="C">
          <div className="sh">
            <span className="tg">FAQ</span>
            <h2>Pertanyaan Yang Sering Diajukan</h2>
            <p>Temukan jawaban seputar {D.brand}.</p>
          </div>
          <div className="fl">
            {faqs.map((f, i) => (
              <div className="fi" key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="fq">{f.q}<span>{openFaq === i ? '−' : '+'}</span></div>
                {openFaq === i && <div className="fa">{f.a}</div>}
              </div>
            ))}
          </div>
        </div></section>
      </main>

      <footer><div className="C">
        <div className="fk">
          <a href="#fitur">Fitur</a><a href="#panduan">Panduan</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a>
          <a href={D.linkLogin}>Login</a><a href={D.linkDaftar}>Daftar</a>
        </div>
        <p>&copy; 2026 {D.brand} &mdash; {D.domain}</p>
      </div></footer>
    </>
  );
}
