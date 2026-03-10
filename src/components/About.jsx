import './About.css';

const FACTS = [
  { icon: '🌊', text: 'Passionné par la clean architecture' },
  { icon: '⚡', text: 'Obsédé par les performances web' },
  { icon: '🎯', text: 'Adepte du TDD & code review' },
  { icon: '🌍', text: 'Contributeur open source' },
  { icon: '📖', text: 'Veille technologique quotidienne' },
  { icon: '🤝', text: 'Esprit d\'équipe & communication' },
];

export default function About() {
  return (
    <section className="about" id="apropos">
      <div className="container about__inner">
        {/* Left: photo + deco */}
        <div className="about__visual">
          <div className="about__img-wrap">
            <div className="about__img-deco deco-tl" />
            <div className="about__img-deco deco-br" />
            <div className="about__img-box">
              <img
                src="/profile.jpg"
                alt="À propos"
                className="about__img"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="about__img-fallback" style={{ display: 'none' }}>
                <span>VN</span>
              </div>
            </div>
            {/* Experience badge */}
            <div className="about__exp-badge">
              <div className="exp-badge-num">4+</div>
              <div className="exp-badge-txt">ans<br/>d'expérience</div>
            </div>
          </div>

          {/* Terminal block */}
          <div className="about__terminal">
            <div className="term-bar">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="term-title">whoami.sh</span>
            </div>
            <div className="term-body">
              <div className="term-line"><span className="term-prompt">$</span> cat dev.json</div>
              <div className="term-line term-out">{'{'}</div>
              <div className="term-line term-out">&nbsp;&nbsp;<span className="term-key">"nom"</span>: <span className="term-val">"Papa Alassane SECK"</span>,</div>
              <div className="term-line term-out">&nbsp;&nbsp;<span className="term-key">"role"</span>: <span className="term-val">"Full Stack Dev"</span>,</div>
              <div className="term-line term-out">&nbsp;&nbsp;<span className="term-key">"dispo"</span>: <span className="term-bool">true</span>,</div>
              <div className="term-line term-out">&nbsp;&nbsp;<span className="term-key">"café"</span>: <span className="term-num">∞</span></div>
              <div className="term-line term-out">{'}'}</div>
              <div className="term-line"><span className="term-prompt">$</span> <span className="term-cursor">▋</span></div>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="about__content">
          <div className="s-label">À propos de moi</div>
          <h2 className="about__title">
            Développeur passionné,<br />
            <span className="g-text">créateur par nature</span>
          </h2>
          <p className="about__text">
            Développeur full stack avec plus de 4 ans d'expérience, je me spécialise dans
            la création d'applications React performantes et d'APIs Node.js robustes. Je crois
            que le meilleur code est celui qui est à la fois lisible, maintenable et élégant.
          </p>
          <p className="about__text">
            Mon approche : comprendre le besoin métier avant d'écrire la moindre ligne de code,
            puis construire des solutions pérennes avec les meilleures pratiques du secteur.
          </p>

          <div className="about__facts">
            {FACTS.map(({ icon, text }, i) => (
              <div key={i} className="about__fact">
                <span className="fact-icon">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="about__socials">
            {[
              { href: 'https://github.com/LeRegulus', label: 'GitHub', icon: '🐙' },
              { href: 'https://www.linkedin.com/in/papa-alassane-seck-21a7712ab/', label: 'LinkedIn', icon: '💼' },
              { href: 'mailto:regulus1946@gmail.com', label: 'Email', icon: '📧' },
            ].map(s => (
              <a key={s.label} href={s.href} className="about__social" target="_blank" rel="noreferrer">
                <span>{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
