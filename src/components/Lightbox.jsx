import { useEffect } from "react";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden"; // prevent background scrolling

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        ✕
      </button>

      <button
        className="lightbox__nav lightbox__nav--left"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <img className="lightbox__img" src={item.src} alt={item.alt || ""} />
        {item.alt ? <div className="lightbox__caption">{item.alt}</div> : null}
      </div>

      <button
        className="lightbox__nav lightbox__nav--right"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}
