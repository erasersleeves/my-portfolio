import { useEffect, useMemo, useState, useCallback } from "react";
import { photos } from "../data/photography";
import Lightbox from "../components/Lightbox";

function getColCount(width) {
  if (width >= 900) return 3;
  if (width >= 560) return 2;
  return 1;
}

export default function Photography() {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  const [colCount, setColCount] = useState(getColCount(window.innerWidth));

  useEffect(() => {
    const onResize = () => setColCount(getColCount(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const columns = useMemo(() => {
    const cols = Array.from({ length: colCount }, () => []);
    photos.forEach((p, idx) => cols[idx % colCount].push({ ...p, idx }));
    return cols;
  }, [colCount]);

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
        <div className="masonryCols">
          {columns.map((col, c) => (
            <div className="masonryCol" key={c}>
              {col.map((p) => (
                <button
                  key={p.src}
                  className="masonryItem"
                  onClick={() => setOpenIndex(p.idx)}
                  aria-label={`Open photo ${p.idx + 1}`}
                >
                  <img
                    className="masonryImg"
                    src={p.src}
                    alt={p.alt || ""}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          ))}
        </div>
      )}

      {isOpen ? (
        <Lightbox items={photos} index={openIndex} onClose={close} onPrev={prev} onNext={next} />
      ) : null}
    </div>
  );
}
