import { useState, useCallback } from "react";
import { photos } from "../data/photography";
import Lightbox from "../components/Lightbox";

export default function Photography() {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
  }, []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? 0 : (i + 1) % photos.length));
  }, []);

  return (
    <div className="container">
      <div className="categoryHeader">
        <h2 className="categoryTitle">Photography</h2>
        <p className="categoryHint">
          “Sometimes when you lose your way, you find YOURSELF.”
          <br /> Shot with an Android :) 
        </p>
      </div>

      {photos.length === 0 ? (
        <div className="emptyState">
          Add images in <b>public/photography/</b> and list them in <b>src/data/photography.js</b>.
        </div>
      ) : (
        <div className="masonry">
          {photos.map((p, idx) => (
            <button
              key={p.src}
              className="masonryItem"
              onClick={() => setOpenIndex(idx)}
              aria-label={`Open photo ${idx + 1}`}
            >
              <img className="masonryImg" src={p.src} alt={p.alt || ""} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {isOpen ? (
        <Lightbox items={photos} index={openIndex} onClose={close} onPrev={prev} onNext={next} />
      ) : null}
    </div>
  );
}
