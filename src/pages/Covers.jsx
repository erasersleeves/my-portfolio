export default function Covers() {
  // Minimal UI (YouTube still may show title/channel/watermark sometimes)
  const params =
    "autoplay=0&controls=0&modestbranding=1&rel=0&playsinline=1&fs=1&iv_load_policy=3";

  const v1 = { id: "e1Sd32yEwWM", title: "Cover 1" }; // landscape
  const v2 = { id: "Lt32UIt8hSs", title: "Cover 2" }; // portrait
  const v3 = { id: "vIc4FOjtLOg", title: "Cover 3" }; // landscape

  const src = (id) => `https://www.youtube-nocookie.com/embed/${id}?${params}`;

  return (
    <div className="container">
      <div className="categoryHeader">
        <h2 className="categoryTitle">(Beginner) Covers</h2>
        <p className="categoryHint"><i>"Play like no one is Listening, practice like the world will hear you someday..."</i></p>
      </div>

      <div className="coversLayout">
        {/* Left column: two landscape */}
        <div className="coversCol">
          <div className="coverCard coverCard--landscape">
            <iframe
              className="coverIframe"
              src={src(v1.id)}
              title={v1.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="coverCard coverCard--landscape">
            <iframe
              className="coverIframe"
              src={src(v3.id)}
              title={v3.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Right column: portrait */}
        <div className="coversCol">
          <div className="coverCard coverCard--portrait">
            <iframe
              className="coverIframe"
              src={src(v2.id)}
              title={v2.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
