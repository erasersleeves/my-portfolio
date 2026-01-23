import Tile from "../components/Tile";
import { categories } from "../data/categories";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero__title">Welcome To</h1>
        <div className="hero__headline">My 2D World</div>
        <p className="hero__text">
          You may find a personal pick of various pieces under different styles.
          <br />
          Please enjoy the highlights of my art journey.
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
