import './Skills.css';

const GROUPS = [
  {
    cat: 'Frontend',
    icon: '🎨',
    color: '#00c8ff',
    skills: [
      { n: 'Angular', v: 90 },
      { n: 'React', v: 80 },
      { n: 'HTML / CSS', v: 88 }
    ]
  },
  {
    cat: 'Backend',
    icon: '⚙️',
    color: '#00b4d8',
    skills: [
      { n: 'Java / Spring Boot', v: 92 },
      { n: 'Node.js / Express', v: 80 },
      { n: 'PHP / Laravel', v: 85 },
      { n: 'REST APIs', v: 95 },
      { n: 'Microservices', v: 90 }
    ]
  },
  {
    cat: 'Base de données',
    icon: '🗄️',
    color: '#0090c0',
    skills: [
      { n: 'PostgreSQL', v: 85 },
      { n: 'MongoDB', v: 80 },
      { n: 'MySQL', v: 82 },
    ]
  },
  {
    cat: 'DevOps & Cloud',
    icon: '☁️',
    color: '#00c8ff',
    skills: [
      { n: 'Docker', v: 85 },
      { n: 'AWS (ECS, ECR, EC2)', v: 80 },
      { n: 'Jenkins CI/CD', v: 82 },
      { n: 'Git / GitHub / GitLab', v: 95 }
    ]
  },
  {
    cat: 'Security & Integration',
    icon: '🔐',
    color: '#00b4d8',
    skills: [
      { n: 'JWT Authentication', v: 90 },
      { n: 'Keycloak', v: 85 },
    ]
  }
];

const TECHS = [
  'Java',
  'Spring Boot',
  'Angular',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'AWS',
  'Jenkins',
  'Openshift',
  'RabbitMQ',
  'Keycloak',
  'Git',
  'Php'
];

export default function Skills() {
  return (
    <section className="skills" id="competences">
      <div className="container">
        <div className="s-label">Stack technique</div>
        <h2 className="skills__title">
          Mes <span className="g-text">compétences</span>
        </h2>

        <div className="skills__marquee">
          <div className="skills__track">
            {[...TECHS, ...TECHS].map((t, i) => (
              <div key={i} className="skills__chip">
                <span className="chip-dot" />{t}
              </div>
            ))}
          </div>
        </div>

        <div className="skills__grid">
          {GROUPS.map((g, gi) => (
            <div key={gi} className="skill-card" style={{ '--gc': g.color }}>
              <div className="skill-card__head">
                <span className="skill-card__icon">{g.icon}</span>
                <h3 className="skill-card__cat">{g.cat}</h3>
              </div>

              {g.skills.map((s, si) => (
                <div key={si} className="skill-bar">
                  <div className="skill-bar__meta">
                    <span className="skill-bar__name">{s.n}</span>
                    <span className="skill-bar__pct">{s.v}%</span>
                  </div>

                  <div className="skill-bar__track">
                    <div
                      className="skill-bar__fill"
                      style={{
                        width: `${s.v}%`,
                        background: g.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}