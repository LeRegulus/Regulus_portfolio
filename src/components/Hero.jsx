import { useState, useEffect } from 'react';
import './Hero.css';

const ROLES = [
  'Développeur Full Stack',
  'Java / Spring Boot Expert',
  'Angular & React Developer',
  'Architecte Microservices',
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState('');
  const [del, setDel] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  useEffect(() => {
    const cur = ROLES[idx];
    let t;

    if (!del && txt.length < cur.length)
      t = setTimeout(() => setTxt(cur.slice(0, txt.length + 1)), 75);
    else if (!del && txt.length === cur.length)
      t = setTimeout(() => setDel(true), 2000);
    else if (del && txt.length > 0)
      t = setTimeout(() => setTxt(txt.slice(0, -1)), 40);
    else {
      setDel(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(t);
  }, [txt, del, idx]);

  return (
    <section className="hero" id="accueil">

      <div className="container hero__inner">

        {/* LEFT */}
        <div className="hero__left">

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Open to opportunities
          </div>

          <h1 className="hero__title">
            Bonjour, je suis <br />
            <span className="g-text hero__name">
              Papa Alassane SECK
            </span>
          </h1>

          <div className="hero__role">
            <span className="hero__role-prefix">~/</span>
            <span className="hero__role-txt">{txt}</span>
            <span className="hero__cursor">▋</span>
          </div>

          <p className="hero__desc">
            Développeur Full Stack spécialisé en Java Spring Boot et
            architectures microservices. Je développe des applications
            web scalables avec Angular, React et des APIs performantes.
          </p>

          <div className="hero__ctas">

            <a href="#projets" className="btn btn-cyan">
              Voir mes projets
            </a>

            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>

          </div>

          <div className="hero__stats">

            <div className="hero__stat">
              <span className="hero__stat-n">6+</span>
              <span className="hero__stat-l">Ans d'expérience</span>
            </div>

            <div className="hero__stat">
              <span className="hero__stat-n">30+</span>
              <span className="hero__stat-l">Projets réalisés</span>
            </div>

            <div className="hero__stat">
              <span className="hero__stat-n">10+</span>
              <span className="hero__stat-l">Technologies</span>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero__right">

          <div className="hero__photo-frame">

            {imgErr ? (
              <div className="hero__photo-fallback">
                <span>PS</span>
              </div>
            ) : (
              <img
                src="/profile.jpg"
                alt="Papa Alassane SECK"
                className="hero__photo"
                onError={() => setImgErr(true)}
              />
            )}

          </div>

          {/* Floating cards */}

          <div className="hero__card card-tl">
            <span>☕</span>
            <div>
              <div className="card-title">Spring Boot</div>
              <div className="card-sub">Microservices</div>
            </div>
          </div>

          <div className="hero__card card-br">
            <span>⚛️</span>
            <div>
              <div className="card-title">Angular / React</div>
              <div className="card-sub">Frontend</div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}