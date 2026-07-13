import React from "react";

/**
 * Treble Makers — 2026 redesign ("Dust at Dusk")
 * Drop into: src/App.jsx (replaces the old one)
 * Uses existing /public/images/*. Gallery images are served from johmathe.github.io.
 * Design system: red #B8002A (#E8434F on dark), playa beige #D9CBB5, ink #0F0C0A, Readex Pro.
 */

const SITE = {
  soundcloudUser: "brdtreblemakers",
  instagram: "brdtreblemakers",
  email: "hello@treblemakers.org",
};

function UseHead() {
  React.useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200..700&display=swap";
    document.head.appendChild(link);

    const ico = document.createElement("link");
    ico.rel = "icon";
    ico.href =
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230F0C0A'/><text x='50' y='68' font-family='sans-serif' font-weight='700' font-size='52' fill='%23E8434F' text-anchor='middle' transform='scale(-1,1) rotate(7 50 50)' transform-origin='50 50'>E</text></svg>";
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
    --ink:#0F0C0A;
    --panel:#171310;
    --red:#B8002A;
    --red-glow:#E8434F;
    --beige:#D9CBB5;
    --text:#EDE2CF;
    --body:#C9BCA4;
    --muted:#9C8E78;
    --hairline:rgba(237,226,207,.14);
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;background:var(--ink);color:var(--text);
    font-family:"Readex Pro",system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    line-height:1.5}
  a{color:var(--beige);text-decoration:none}
  a:hover{color:var(--red-glow)}

  .flipped-e{display:inline-block;transform:scaleX(-1) rotate(7deg);color:var(--red-glow)}

  /* hero */
  .hero{position:relative;height:92vh;min-height:560px;overflow:hidden}
  .hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
  .hero .scrim{position:absolute;inset:0;
    background:linear-gradient(180deg,rgba(15,12,10,.75),rgba(15,12,10,.15) 42%,rgba(15,12,10,.92))}
  .hero nav{position:relative;display:flex;align-items:center;justify-content:space-between;padding:22px 5vw}
  .hero nav .brand{font-weight:700;font-size:13px;letter-spacing:.2em;color:var(--text)}
  .hero nav .links{display:flex;gap:30px;font-size:11px;letter-spacing:.24em;font-weight:500}
  .hero .content{position:absolute;left:0;right:0;bottom:64px;text-align:center;
    display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 4vw}
  .hero h1{margin:0;font-size:clamp(48px,7.5vw,104px);line-height:.95;font-weight:700;
    letter-spacing:.02em;text-shadow:0 4px 40px rgba(0,0,0,.5)}
  .hero .meta{font-size:clamp(10px,1vw,12px);letter-spacing:.42em;color:var(--beige);font-weight:500}

  /* sections */
  .container{max-width:1200px;margin:0 auto;padding:64px 5vw;border-bottom:1px solid var(--hairline)}
  h2{margin:0;font-size:clamp(26px,3vw,38px);font-weight:600;line-height:1.15}
  .section-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:24px;flex-wrap:wrap;gap:12px}
  .section-link{font-size:11.5px;letter-spacing:.2em;font-weight:600;color:var(--red-glow)}
  .text-link{align-self:flex-start;font-size:11.5px;letter-spacing:.2em;font-weight:600;
    color:var(--beige);border-bottom:1px solid var(--red-glow);padding-bottom:4px}

  /* 2026 */
  .year{display:flex;flex-wrap:wrap;gap:48px;align-items:center}
  .year .num{font-size:clamp(90px,11vw,150px);font-weight:700;line-height:.9;color:var(--red-glow);
    text-shadow:0 0 60px rgba(232,67,79,.35)}
  .year .what{display:flex;flex-direction:column;gap:16px;flex:1;min-width:300px}
  .year .what .headline{font-size:clamp(22px,2.4vw,30px);font-weight:500;line-height:1.3}

  /* about */
  .about{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--hairline)}
  .about img{width:100%;height:100%;min-height:380px;object-fit:cover;display:block;filter:saturate(.9)}
  .about .copy{padding:56px 5vw;display:flex;flex-direction:column;justify-content:center;gap:18px}
  .about p{margin:0;font-size:15px;line-height:1.7;font-weight:300;color:var(--body);max-width:440px}

  /* gallery */
  .gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}
  .gallery-grid figure{margin:0;display:flex;flex-direction:column;gap:10px}
  .gallery-grid img{width:100%;height:220px;object-fit:cover;display:block;border-radius:3px}
  .gallery-grid figcaption{font-size:11px;letter-spacing:.24em;color:var(--muted);font-weight:600}

  /* music */
  .player{border:1px solid rgba(237,226,207,.2);border-radius:4px;overflow:hidden;background:var(--panel)}
  .player iframe{display:block;border:0}

  /* join + support */
  .cards{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--hairline);
    border-bottom:1px solid var(--hairline)}
  .photo-card{position:relative;height:420px;overflow:hidden;background:var(--ink)}
  .photo-card>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.55;display:block}
  .photo-card .scrim{position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,rgba(15,12,10,.95))}
  .photo-card .copy{position:absolute;left:5vw;right:5vw;bottom:32px;display:flex;flex-direction:column;gap:12px}
  .photo-card .title{font-size:clamp(24px,2.4vw,30px);font-weight:600;line-height:1.2}

  /* footer */
  footer{padding:26px 5vw;display:flex;justify-content:space-between;align-items:center;
    font-size:11.5px;letter-spacing:.18em;color:var(--muted);flex-wrap:wrap;gap:14px}
  footer .brand{font-weight:700;color:var(--text)}
  footer .links{display:flex;gap:24px}

  @media (max-width:820px){
    .about,.cards{grid-template-columns:1fr}
    .hero nav .links{gap:18px}
  }
`;

const FlippedE = () => <span className="flipped-e">E</span>;

const GALLERY = [
  { year: "2024", src: "/images/gallery_2024.jpg", alt: "Tower light-up" },
  { year: "2023", src: "/images/gallery_2023.jpg", alt: "Rain at sunset" },
  { year: "2022", src: "/images/gallery_2022.jpg", alt: "Stage at night" },
  { year: "2021", src: "/images/gallery_2021.jpg", alt: "Art car at night" },
];

export default function App() {
  return (
    <div>
      <UseHead />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* Hero */}
      <section id="home" className="hero">
        <img src="/images/camp_sunset_back.jpg" alt="Sunset over camp" />
        <div className="scrim" />
        <nav aria-label="Primary navigation">
          <a href="#home" className="brand">TM<FlippedE /></a>
          <div className="links">
            <a href="#year">2026</a>
            <a href="#music">MUSIC</a>
            <a href="#join">JOIN</a>
            <a href="#support">SUPPORT</a>
          </div>
        </nav>
        <div className="content">
          <h1>TREBLE MAK<FlippedE />RS</h1>
          <div className="meta">BLACK ROCK DESERT — AUG 30 → SEP 7, 2026</div>
        </div>
      </section>

      {/* 2026 */}
      <section id="year" className="container year">
        <div className="num">'26</div>
        <div className="what">
          <div className="headline">New stage. More live instruments.<br />Applications open.</div>
          <a className="text-link" href="#join">APPLY →</a>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <img src="/images/dust_dance.jpg" alt="White-out dance floor" />
        <div className="copy">
          <h2>The wilder the weather,<br />the louder we play.</h2>
          <p>Builders, artists and friends hauling live and electronic music into the Black Rock Desert.</p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="container">
        <div className="section-head">
          <h2>Five years in the dust.</h2>
          <a className="section-link" href="https://johmathe.github.io/camp.html" target="_blank" rel="noreferrer">FULL GALLERY ↗</a>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((g) => (
            <figure key={g.year}>
              <img src={g.src} alt={`${g.alt} ${g.year}`} loading="lazy" />
              <figcaption>{g.year}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Music */}
      <section id="music" className="container">
        <div className="section-head">
          <h2>Recorded in the dust.</h2>
          <a className="section-link" href={`https://soundcloud.com/${SITE.soundcloudUser}`} target="_blank" rel="noreferrer">SOUNDCLOUD ↗</a>
        </div>
        <div className="player">
          <iframe
            title="SoundCloud Player"
            width="100%"
            height="420"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${SITE.soundcloudUser}&auto_play=false&show_artwork=false&hide_related=true&show_comments=false&show_user=false&color=%23b8002a&show_reposts=false&visual=false`}
          />
        </div>
      </section>

      {/* Join + Support */}
      <section className="cards">
        <div id="join" className="photo-card">
          <img src="/images/crane.jpg" alt="Stage build with crane" />
          <div className="scrim" />
          <div className="copy">
            <div className="title">Join the camp.</div>
            <a className="text-link" href={`mailto:${SITE.email}?subject=Joining%20for%202026`}>APPLY →</a>
          </div>
        </div>
        <div id="support" className="photo-card">
          <img src="/images/creme_brulee.jpg" alt="Crème brûlée night" />
          <div className="scrim" />
          <div className="copy">
            <div className="title">Support the camp.</div>
            <a className="text-link" href={`mailto:${SITE.email}?subject=Supporting%20the%20camp`}>CONTRIBUTE →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span className="brand">TREBLE MAK<span className="flipped-e" style={{ color: "inherit" }}>E</span>RS</span>
        <div className="links">
          <a href={`https://soundcloud.com/${SITE.soundcloudUser}`} target="_blank" rel="noreferrer">SOUNDCLOUD</a>
          <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer">INSTAGRAM</a>
          <a href={`mailto:${SITE.email}`}>EMAIL</a>
        </div>
        <span>BLACK ROCK DESERT · EST. MMXXI</span>
      </footer>
    </div>
  );
}
