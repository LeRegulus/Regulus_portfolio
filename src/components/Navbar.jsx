import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV = [
  { label: 'À propos',     id: 'apropos' },
  { label: 'Projets',      id: 'projets' },
  { label: 'Compétences',  id: 'competences' },
  { label: 'Expérience',   id: 'experience' },
  { label: 'Contact',      id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState('');
  const [open,     setOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        {/* Logo */}
        <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav__logo-bracket">&lt;</span>
          <span className="nav__logo-text">LeRegulus</span>
          <span className="nav__logo-bracket">/&gt;</span>
          <span className="nav__logo-dot" />
        </button>

        {/* Links desktop */}
        <ul className="nav__links">
          {NAV.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`nav__link ${active === id ? 'nav__link--active' : ''}`}
                onClick={() => go(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="/cv.pdf" download className="btn btn-outline nav__cta">
          Télécharger CV
        </a>

        {/* Burger */}
        <button className={`nav__burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav__mobile">
          {NAV.map(({ label, id }) => (
            <button key={id} className="nav__mobile-link" onClick={() => go(id)}>
              {label}
            </button>
          ))}
          <a href="/cv.pdf" download className="btn btn-cyan" style={{ marginTop: 8, justifyContent: 'center' }}>
            Télécharger CV
          </a>
        </div>
      )}
    </nav>
  );
}
