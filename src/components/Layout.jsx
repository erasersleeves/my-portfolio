import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="page">
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="brand">
            <div className="brand__name">Yacine Benmeziane</div>
          </Link>

          <nav className="nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav__link isActive" : "nav__link")}>
              Portfolio
            </NavLink>
            <NavLink
              to="/manga"
              className={({ isActive }) => (isActive ? "nav__link isActive" : "nav__link")}
            >
              Manga
            </NavLink>

            <a className="nav__link" href="#" onClick={(e) => e.preventDefault()}>
              Photography
            </a>
            <a className="nav__link" href="#" onClick={(e) => e.preventDefault()}>
              Links
            </a>
          </nav>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} all rights reserved</div>
      </footer>
    </div>
  );
}
