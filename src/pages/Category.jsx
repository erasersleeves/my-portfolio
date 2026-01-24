import { useMemo, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "../data/categories";
import { artworksByCategory } from "../data/artworks";
import Lightbox from "../components/Lightbox";

export default function Category() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  const items = useMemo(() => artworksByCategory[slug] ?? [], [slug]);

  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));
  }, [items.length]);

  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? 0 : (i + 1) % items.length));
  }, [items.length]);

  if (!category) {
    return (
      <div className="container">
        <p>Category not found.</p>
        <Link to="/" className="backlink">← Back</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="backlink">← Back</Link>

      <div className="categoryHeader">
        <h2 className="categoryTitle">{category.title}</h2>
        <p className="categoryHint">
          Click an image to expand. Use ← → keys to navigate. Esc closes.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="emptyState">
          No artworks yet. Add image paths in <b>src/data/artworks.js</b>.
        </div>
      ) : (
        <div className="gallery">
          {items.map((it, idx) => (
            <button
              key={it.src}
              className="thumb"
              onClick={() => setOpenIndex(idx)}
              aria-label={`Open image ${idx + 1}`}
            >
              <img className="thumb__img" src={it.src} alt={it.alt || ""} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {isOpen && items.length > 0 ? (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      ) : null}
    </div>
  );
}
