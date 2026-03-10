import './Experience.css';

const EXPS = [
  {
    role: 'FullStack Engineer',
    company: 'SONATEL SA (Consultant Synapsys)',
    period: 'Avril 2025 – Présent',
    type: 'Mission',
    color: '#00c8ff',
    desc: 'Contribution au développement du système SICO, le nouveau Système d’Information Commercial de SONATEL.',
    items: [
      'Conception et implémentation d’API REST avec Spring Boot',
      'Développement d’applications scalables avec Java, PHP et Python',
      'Création d’interfaces utilisateurs performantes avec Angular',
      'Automatisation des déploiements via pipelines CI/CD'
    ]
  },
  {
    role: 'Java Software Engineer',
    company: 'ATPS SA – Dakar',
    period: 'Mars 2024 – Avril 2025',
    type: 'CDI',
    color: '#00b4d8',
    desc: 'Développement d’APIs et d’applications backend dans un environnement CI/CD.',
    items: [
      'Conception et développement d’API REST',
      'Automatisation des cycles de build et déploiement CI/CD',
      'Développement d’applications avec Spring Boot, PHP et Python',
      'Conception d’interfaces Angular'
    ]
  },
  {
    role: 'Développeur Full Stack Java',
    company: 'Ridwan Group – Dakar',
    period: 'Mars 2023 – Février 2024',
    type: 'CDI',
    color: '#0090c0',
    desc: 'Développement d’applications web avec architecture backend Jakarta EE.',
    items: [
      'Développement d’API backend avec Jakarta EE',
      'Intégration frontend avec Angular',
      'Participation aux phases de test et déploiement'
    ]
  },
  {
    role: 'Stagiaire FullStack Developer',
    company: 'SarayaTech Sénégal – Dakar',
    period: 'Décembre 2022 – Mars 2023',
    type: 'Stage',
    color: '#0077b6',
    desc: 'Responsable technique pour le développement d’un système de gestion scolaire.',
    items: [
      'Tech Lead d’une équipe de développeurs',
      'Développement backend et frontend',
      'Mise en place des fonctionnalités principales du système'
    ]
  },
  {
    role: 'Assistant IT Developer',
    company: 'GCO Grande Côte Operations – Diogo',
    period: 'Janvier 2019 – Avril 2019',
    type: 'Stage',
    color: '#023e8a',
    desc: 'Développement d’une application interne pour le suivi des conducteurs de train.',
    items: [
      'Application de suivi et de contrôle des agents',
      'Génération de rapports d’activités',
      'Amélioration des processus de monitoring'
    ]
  }
];

const FORMATIONS = [
  {
    degree: 'Master 1 Big Data Analytics',
    school: 'Université Numérique Cheikh Hamidou Kane',
    period: '2025 – Présent',
    icon: '🎓'
  },
  {
    degree: 'Certification FullStack Java / Angular / AWS',
    school: 'SarayaTech Sénégal',
    period: '2022',
    icon: '📚'
  },
  {
    degree: 'Licence Management Informatisé des Organisations',
    school: 'Université Iba Der Thiam de Thiès',
    period: '2015 – 2018',
    icon: '🎓'
  }
];

const CERTIFS = [
  { name: 'FullStack Java Angular AWS', org: 'SarayaTech', year: '2022' },
  { name: 'Symfony PHP Development', org: 'Simplon CEDT G15', year: '2020' }
];

export default function Experience() {
  return (
    <section className="exp" id="experience">
      <div className="container exp__inner">

        <div className="exp__left">
          <div className="s-label">Parcours professionnel</div>
          <h2 className="exp__title">
            Mon <span className="g-text">expérience</span>
          </h2>

          <div className="exp__timeline">
            {EXPS.map((e, i) => (
              <div key={i} className="exp__item" style={{ '--ec': e.color }}>
                <div className="exp__dot" />

                <div className="exp__body">
                  <div className="exp__meta">
                    <span className="exp__period">{e.period}</span>
                    <span className="exp__type">{e.type}</span>
                  </div>

                  <h3 className="exp__role">{e.role}</h3>
                  <div className="exp__company">{e.company}</div>

                  <p className="exp__desc">{e.desc}</p>

                  <ul className="exp__list">
                    {e.items.map((it, j) => (
                      <li key={j}>
                        <span>→</span>{it}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="exp__right">

          <div className="s-label">Formation</div>
          <h2 className="exp__title" style={{ marginBottom: 28 }}>
            Parcours <span className="g-text">académique</span>
          </h2>

          <div className="exp__formations">
            {FORMATIONS.map((f, i) => (
              <div key={i} className="form-card">
                <span className="form-icon">{f.icon}</span>
                <div>
                  <div className="form-degree">{f.degree}</div>
                  <div className="form-school">{f.school}</div>
                  <div className="form-period">{f.period}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="s-label" style={{ marginTop: 40 }}>Certifications</div>

          <div className="exp__certifs">
            {CERTIFS.map((c, i) => (
              <div key={i} className="certif">
                <div className="certif__icon">🏅</div>
                <div>
                  <div className="certif__name">{c.name}</div>
                  <div className="certif__meta">{c.org} · {c.year}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="exp__avail">
            <div className="avail__dot" />
            <div>
              <div className="avail__title">Disponible pour opportunités</div>
              <div className="avail__sub">CDI · Freelance · Sénégal / Remote</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}