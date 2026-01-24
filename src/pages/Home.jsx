import Tile from "../components/Tile";
import { categories } from "../data/categories";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero__title">Wanderers seeking death,</h1>
        <div className="hero__headline">Welcome!</div>
        <p className="hero__text">
          May you find a swift end upon our claws.
          <br />
          <i>Mantis Village - Hollow Knight</i>
        </p>
      </section>

      <section className="grid">
        {categories.map((c) => (
          <Tile
            key={c.slug}
            title={c.title}
            to={`/art/${c.slug}`}
            cover={c.cover}
          />
        ))}
      </section>
    </div>
  );
}
