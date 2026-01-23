import { Link } from "react-router-dom";

export default function Tile({ title, to, cover }) {
  return (
    <Link to={to} className="tile" aria-label={title}>
      <div
        className="tile__bg"
        style={{ backgroundImage: `url(${cover})` }}
        role="img"
        aria-label={`${title} cover`}
      />
      <div className="tile__overlay">
        <div className="tile__title">{title}</div>
      </div>
    </Link>
  );
}
