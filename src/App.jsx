import React, { useEffect, useState } from "react";

/**
 * Treble Makers — single-file React component for Vite
 * Drop this file into:  src/App.jsx  (or rename and import in src/main.jsx)
 * No Tailwind required. Fonts and styles are injected at runtime.
 *
 * Replace image URLs in IMAGES and GALLERY with your assets.
 * Keep copy free of certain event names; this uses neutral language.
 */

// -------------------- QUICK CONFIG --------------------
const SITE = {
  name: "TREBLE MAKERS",
  tagline:
    "We are a community of builders bringing live and electronic music to the Black Rock Desert.",
  soundcloudUser: "brdtreblemakers", // SoundCloud handle
  socials: [
    { label: "SoundCloud", href: "https://soundcloud.com/brdtreblemakers" },
    { label: "Instagram", href: "https://instagram.com/brdtreblemakers" },
    // { label: "YouTube", href: "https://youtube.com/@yourhandle" },
    // { label: "Email", href: "mailto:hello@example.com" },
  ],
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "SoundCloud", href: "#music" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
};

// Hero + about images
const IMAGES = {
  hero: "/images/camp_day_wide.jpg", // wide banner
  about: "/images/camp_sunset_back.jpg", // portrait or landscape works
};

// Instagram username for gallery

// Instagram feed via Behold API
const INSTAGRAM_USER = "brdtreblemakers";
const IG_FEED_URL = "https://feeds.behold.so/M0hNNC3e27XdGK7f3e0Q";
const IG_LIMIT = 9; // number of squares to show
// -------------------- STYLE INJECTION --------------------
function UseHead() {
  useEffect(() => {
    // Readex Pro font (Google Fonts)
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200..700&display=swap";
    document.head.appendChild(link);

    // Favicon (optional)
    const ico = document.createElement("link");
    ico.rel = "icon";
    ico.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='%23b8002a'/><path d='M25 62h10l6-10 6 10h10L50 38 25 62z' fill='white'/></svg>";
    document.head.appendChild(ico);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(ico);
    };
  }, []);
  return null;
}

const CSS = `
  :root{
    /* Playa-inspired palette */
    --playa:#d9cbb5;      /* warm beige */
    --playa-2:#cdbda4;    /* deeper beige */
    --ink:#111111;        /* near-black */
    --red:#b8002a;        /* deep red */
    --red-2:#7c001c;      /* darker red */
    --text:#f4efe8;       /* light text */
  }
  *{box-sizing:border-box}
  html,body,#root{height:100%}
  body{
    margin:0; background:var(--ink); color:var(--text);
    font-family:"Readex Pro", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
    line-height:1.5;
  }
  a{color:var(--playa); text-decoration:none}
  a:hover{color:var(--red); opacity:1}
  .container{width:100%; margin:0; padding:0 24px}
  .btn{display:inline-block; padding:10px 16px; border:1px solid #ffffff22; border-radius:12px; color:#fff; background:transparent}
  .btn:hover{background:#ffffff14}

  /* Header */
  header{position:fixed; inset:0 auto auto 0; height:64px; width:100%; display:flex; align-items:center; z-index:50;
    backdrop-filter:saturate(150%) blur(8px);
    background:linear-gradient(180deg, rgba(0,0,0,.6), rgba(0,0,0,.2)); border-bottom:1px solid #ffffff14}
  header .brand{font-weight:700; letter-spacing:.08em}
  nav{display:none; gap:20px}
  @media (min-width: 768px){ nav{display:flex} }
  .mobile-btn{margin-left:auto; padding:8px 10px; border:1px solid #ffffff22; border-radius:10px; display:flex; align-items:center; gap:8px}
  .mobile-panel{display:none}
  .mobile-panel.open{display:block; background:#000000d0; border-top:1px solid #ffffff14}
  .mobile-panel a{display:block; padding:12px 24px}

  /* Hero */
  .hero{position:relative; min-height:100vh; display:flex; align-items:center; width:100%;}
  .hero img{position:absolute; inset:0; width:100vw; height:100%; object-fit:cover; opacity:.85; filter:grayscale(.1) contrast(1.05)}
  .hero .scrim{position:absolute; inset:0; background:linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,.2) 40%, rgba(0,0,0,.9))}
  .hero .content{position:relative; text-align:center; padding:120px 0 56px}
  .title{font-size:clamp(42px,8vw,96px); line-height:1.05; font-weight:800; letter-spacing:.02em}
  .tag{margin-top:12px; font-size:clamp(16px,2.2vw,22px); color:#f3e9dc; opacity:.9}
  .cta{margin-top:18px; display:flex; justify-content:center; gap:12px; flex-wrap:wrap}

  /* Section shells */
  section{padding:88px 0; border-top:1px solid #ffffff14}
  h2{font-size:clamp(28px,3.2vw,40px); margin:0 0 12px 0}
  .lede{color:#e9dfd2; opacity:.9; max-width:900px}

  /* About */
  .about-grid{display:grid; gap:28px}
  @media (min-width: 980px){
    .about-grid{grid-template-columns: 1.1fr .9fr; align-items:center}
  }
  .card{position:relative; border:1px solid #ffffff14; border-radius:20px; overflow:hidden; background:linear-gradient(180deg, #1a1a1a, #0d0d0d)}
  .card img{ width: 100%;   height: 100%; object-fit: cover; display: block;      /* removes baseline gap */ }
  .card::before{content:""; position:absolute; inset:-1px; border-radius:20px; padding:1px; background:linear-gradient(135deg, #ffffff18, transparent 35%); -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:xor; mask-composite:exclude}

  /* Music */
  .player{border:1px solidrgba(70, 70, 70, 0.08); border-radius:20px; overflow:hidden}

  /* Gallery */
  .gallery-grid{display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:16px}
  .gallery-item{aspect-ratio:1; overflow:hidden; border-radius:12px; border:1px solid #ffffff14}
  .gallery-item img{width:100%; height:auto; object-fit:cover; max-width:100vw}

  /* Contact */
  .contact{display:flex; flex-direction:column; align-items:center; gap:14px}
  .badge{display:inline-flex; align-items:center; gap:10px; padding:10px 14px; border-radius:999px; border:1px solid #ffffff20; background:linear-gradient(180deg, #2a0a11, #140508); color:#fff}
  .dot{width:8px; height:8px; border-radius:999px; background:var(--red)}

  /* Footer */
  footer{border-top:1px solid #ffffff14; background:#050505}
  footer .row{display:flex; gap:16px; align-items:center; justify-content:space-between; flex-wrap:wrap; padding:22px 0}
  .muted{color:#ffffff88}
`;

function Style() {
  return <style dangerouslySetInnerHTML={{ __html: CSS }} />;
}

// -------------------- PAGE --------------------
export default function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(IG_FEED_URL);
        if (!res.ok) return;
        const data = await res.json();
        const grid = document.getElementById("ig-grid");
        if (!grid) return;
        grid.innerHTML = "";
        
        // Take the first IG_LIMIT posts
        const posts = (data.posts || []).slice(0, IG_LIMIT);
        
        posts.forEach((post) => {
          const a = document.createElement("a");
          a.href = post.permalink || `https://instagram.com/${INSTAGRAM_USER}`;
          a.target = "_blank";
          a.rel = "noreferrer";
          a.className = "gallery-item";
          
          const img = document.createElement("img");
          // Use the medium size for better quality
          img.src = post.sizes?.medium?.mediaUrl || post.mediaUrl || post.thumbnailUrl;
          img.alt = post.caption || "Instagram";
          img.loading = "lazy";
          img.style.width = "100%";
          img.style.height = "100%";
          img.style.objectFit = "cover";
          
          a.appendChild(img);
          grid.appendChild(a);
        });
      } catch (error) {
        console.error("Failed to fetch Instagram feed:", error);
      }
    })();
  }, []);
  return (
    <div>
      <UseHead />
      <Style />

      {/* Header */}
      <header>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a href="#home" className="brand">{SITE.name}</a>
          <nav aria-label="Primary navigation">
            {SITE.nav.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div id="mobile-nav" className={`mobile-panel ${open ? "open" : ""}`}>
          <div className="container">
            {SITE.nav.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <img src={IMAGES.hero} alt="Treble Makers hero" />
        <div className="scrim" />
        <div className="container content">
          <h1 className="title" style={{ color: "var(--playa)" }}>{SITE.name}</h1>
          <p className="tag">{SITE.tagline}</p>
          <div className="cta">
            {SITE.socials.map((s) => (
              <a key={s.href} className="btn" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container about-grid">
          <div>
            <h2 style={{ color: "var(--playa)" }}>About</h2>
            <p className="lede">
              Treble Makers is a community of builders, artists, and friends who build intimate stages and curate long‑form musical journeys across the Black Rock Desert. We host live players alongside selectors—strings, synths, voices—woven into deep, melodic grooves.
            </p>
            <p style={{ marginTop: 12, color: "#f0e8db" }}>
              The wilder the weather, the harder we party. White-outs and dust storms just mean the bass hits different.
            </p>
          </div>
          <div className="card" style={{ minHeight: 320 }}>
            <img src={IMAGES.about} alt="About Treble Makers" />
          </div>
        </div>
      </section>

      {/* Music / SoundCloud */}
      <section id="music" style={{ background: "linear-gradient(180deg, #0e0e0e, #090909)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <h2 style={{ color: "var(--playa)" }}>SoundCloud</h2>
            <a href={`https://soundcloud.com/${SITE.soundcloudUser}`} target="_blank" rel="noreferrer">View all on SoundCloud →</a>
          </div>
          <p className="lede" style={{ marginTop: 10 }}>Recent mixes and live recordings from the dust. Follow for the full archive.</p>
          <div className="player" style={{ marginTop: 16 }}>
            <iframe
              title="SoundCloud Player"
              width="100%"
              height="420"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${SITE.soundcloudUser}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true`}
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery">
      <div className="container">
        <h2 style={{ color: "var(--playa)" }}>Instagram</h2>
        <div className="gallery-grid" id="ig-grid">{/* filled by /api/ig */}</div>
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <a href={`https://instagram.com/${INSTAGRAM_USER}`} target="_blank" rel="noreferrer">
            @{INSTAGRAM_USER}
          </a>
        </div>
      </div>
    </section>

      {/* Contact */}
      <section id="contact" style={{ background: "linear-gradient(180deg, #0a0a0a, #050505)" }}>
        <div className="container contact">
          <h2 style={{ color: "var(--playa)" }}>Contact</h2>
          <div className="badge"><span className="dot" /> Open to live collaborations, sunset sessions & instrument-forward sets.</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            {SITE.socials.map((s) => (
              <a key={s.href} className="btn" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container row">
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          </div>
        </div>
      </footer>
    </div>
  );
}

