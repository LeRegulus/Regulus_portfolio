import './Footer.css';

const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/LeRegulus', icon: '🐙' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/papa-alassane-seck-21a7712ab/', icon: '💼' },
  { name: 'Twitter', href: 'https://x.com/regulus_Alou', icon: '🐦' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave" />
      <div className="container footer__inner">
        <div className="footer__logo">
          <span className="flb">&lt;</span>
          <span className="fln">LeRegulus</span>
          <span className="flb">/&gt;</span>
        </div>
        <p className="footer__copy">
          Conçu & développé avec <span className="heart">♥</span> · {new Date().getFullYear()}
        </p>
        <div className="footer__socials">
          {SOCIALS.map(s => (
            <a key={s.name} href={s.href} className="footer__social" target="_blank" rel="noreferrer" title={s.name}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
