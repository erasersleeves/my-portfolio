export default function Manga() {
  return (
    <div className="container">
      <div className="categoryHeader">
        <h2 className="categoryTitle">Vision Prologue</h2>
        <p className="categoryHint">Read my first manga: "Vision (Prologue)" below.
        <br /> Hint: Click the three dots at the bottom right corner to open in full screen for better experience.
        </p>
      </div>

      <div className="embed">
        <iframe
          src="https://online.anyflip.com/vyudf/jlis/index.html"
          title="Manga Flipbook"
          className="embed__iframe"
          scrolling="no"
          frameBorder="0"
          allow="fullscreen"
          allowFullScreen
        />
      </div>

      <p><b>Art:</b> Yacine Benmeziane <a href="https://instagram.com/eraser.sleeves">@eraser.sleeves</a>
        <br /><b>Shading:</b> Yacine Benmeziane and Daho <a href="https://instagram.com/daho_sen">@daho_sen</a>
        <br /><b>Story:</b> B.A.
        <br /><b>Date of release:</b> February 2024
      </p>
    </div>
  );
}
