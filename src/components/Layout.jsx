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

            <NavLink
              to="/photography"
              className={({ isActive }) => (isActive ? "nav__link isActive" : "nav__link")}
            >
              Photography
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav__link isActive" : "nav__link")}
            >
              About
            </NavLink>

          </nav>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
      <div className="footer__inner">
        <div>© {new Date().getFullYear()} All rights reserved</div>

        <div className="socials" aria-label="Social links">
          <a className="social" href="https://instagram.com/eraser.sleeves" target="_blank" rel="noreferrer" aria-label="Instagram">
           <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2.163c3.204 0 3.584.012 4.85.07c1.366.062 2.633.332 3.608 1.308c.975.975 1.245 2.242 1.308 3.608c.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608c-.975.975-2.242 1.245-3.608 1.308c-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308c-.975-.975-1.245-2.242-1.308-3.608c-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608c.975-.975 2.242-1.245 3.608-1.308c1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072C2.695.272.273 2.69.073 7.052C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948c.2 4.355 2.618 6.778 6.98 6.978C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98c.059-1.28.073-1.689.073-4.948s-.014-3.668-.072-4.947c-.2-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324a6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881a1.44 1.44 0 0 0 0-2.881z"
            />
          </svg>
          </a>

          {/* <a className="social" href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.8 1.8-1.8H18V2.1C17.4 2 15.9 2 14.2 2 10.7 2 8.4 4.1 8.4 8v2H5.7v4h2.7v8H13Z"/>
            </svg>
          </a> */}

          {/* <a className="social" href="https://youtube.com/@YOUR_CHANNEL" target="_blank" rel="noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"/>
            </svg>
          </a> */}

          <a
            className="social"
            href="https://discord.gg/J7CexQ6ype"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03Z M8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"
              />
            </svg>
          </a>


          <a className="social" href="https://x.com/EraserSleeves" target="_blank" rel="noreferrer" aria-label="X / Twitter">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23 22h-6.8l-5.3-6.6L5.2 22H2l7.3-8.4L1.8 2H8.8l4.8 6 5.3-6ZM17.7 19.8h1.7L7.9 4.1H6.1l11.6 15.7Z"/>
            </svg>
          </a>

          <a className="social" href="https://reddit.com/u/YacineHokage/" target="_blank" rel="noreferrer" aria-label="Reddit">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M22 12.1c0-1.2-1-2.2-2.2-2.2-.6 0-1.1.2-1.5.6-1.5-1-3.6-1.7-5.9-1.8l1-4.7 3.2.7a1.7 1.7 0 1 0 .2-1.1l-3.8-.8a.9.9 0 0 0-1 .7l-1.2 5.5c-2.4.1-4.6.8-6.1 1.8A2.1 2.1 0 0 0 2.2 9.9C1 9.9 0 10.9 0 12.1c0 .9.6 1.7 1.4 2 0 .2-.1.4-.1.7 0 3.1 4.8 5.6 10.7 5.6S22 17.9 22 14.8c0-.2 0-.5-.1-.7.7-.3 1.1-1.1 1.1-2Zm-6.9 3.2c.2.2.2.5 0 .7-1 .9-2.7 1.4-4.6 1.4s-3.6-.5-4.6-1.4a.5.5 0 0 1 .7-.7c.8.7 2.2 1.1 3.9 1.1s3.1-.4 3.9-1.1c.2-.2.5-.2.7 0Zm-6.5-2.7a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm6.9-1.3a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0Z"/>
            </svg>
          </a>

          <a className="social" href="https://linkedin.com/in/yacine-benmeziane-14a643227" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/>
            </svg>
          </a>

          <a className="social" href="https://github.com/erasersleeves/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.3-1.1.6-1.4-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7c-.1-.2-.4-1.3.1-2.6 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.3.2 2.4.1 2.6a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.7 5 .3.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/>
            </svg>
          </a>
          
        </div>
      </div>
    </footer>

    </div>
  );
}
