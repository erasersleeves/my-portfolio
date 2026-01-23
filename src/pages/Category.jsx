import { useParams, Link } from "react-router-dom";
import { categories } from "../data/categories";

export default function Category() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="container">
        <p>Category not found.</p>
        <Link to="/" className="backlink">← Back home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="backlink">← Back home</Link>

      <div className="categoryHeader">
        <h2 className="categoryTitle">{category.title}</h2>
        <p className="categoryHint">
          Next step: we’ll show all pieces in this category (thumbnails grid).
        </p>
      </div>

      {/* Placeholder for artworks grid */}
      <div className="emptyState">
        Add your artworks data later and render them here.
      </div>
    </div>
  );
}
