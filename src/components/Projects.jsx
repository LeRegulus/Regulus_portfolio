import { useState } from 'react';
import './Projects.css';

const CATS = ['Tous', 'Angular', 'Spring Boot', 'API', 'DevOps'];

const PROJECTS = [
  {
    id: 1,
    title: 'Microservices E-commerce Platform',
    desc: 'Architecture microservices avec Spring Boot pour gérer utilisateurs, commandes et paiements avec communication REST.',
    tags: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'PostgreSQL'],
    cat: 'Spring Boot',
    emoji: '🧩',
    color: '#00c8ff',
    featured: true,
    github: 'https://github.com/LeRegulus',
  },
  {
    id: 2,
    title: 'Spring Boot JWT Authentication',
    desc: 'Système complet d’authentification avec Spring Security et JWT pour sécuriser les APIs REST.',
    tags: ['Java', 'Spring Security', 'JWT', 'MySQL'],
    cat: 'Spring Boot',
    emoji: '🔐',
    color: '#00c8ff',
    featured: false,
    github: 'https://github.com/LeRegulus',
  },
  {
    id: 3,
    title: 'Financial Transactions API',
    desc: 'API REST sécurisée pour gérer les transactions financières avec authentification JWT et pagination.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    cat: 'API',
    emoji: '💳',
    color: '#00b4d8',
    featured: true,
    github: 'https://github.com/LeRegulus',
  },
  {
    id: 4,
    title: 'Dockerized Microservices Deployment',
    desc: 'Déploiement d’une architecture microservices avec Docker et pipelines CI/CD.',
    tags: ['Docker', 'CI/CD', 'Jenkins', 'AWS'],
    cat: 'DevOps',
    emoji: '🐳',
    color: '#00e5ff',
    featured: false,
    github: 'https://github.com/LeRegulus',
  },
  {
    id: 5,
    title: 'Angular Transaction Dashboard',
    desc: 'Application Angular permettant aux utilisateurs de visualiser et gérer leurs transactions financières avec NgRx.',
    tags: ['Angular', 'NgRx', 'TypeScript', 'REST API'],
    cat: 'Angular',
    emoji: '📊',
    color: '#0077b6',
    featured: true,
    github: 'https://github.com/LeRegulus',
  },
  {
    id: 6,
    title: 'User & Order Microservices',
    desc: 'Deux microservices Spring Boot communiquant entre eux pour gérer les utilisateurs et les commandes.',
    tags: ['Spring Boot', 'REST', 'PostgreSQL'],
    cat: 'Spring Boot',
    emoji: '⚙️',
    color: '#0077b6',
    featured: false,
    github: 'https://github.com/LeRegulus'
  },
];

export default function Projects() {
  const [cat, setCat] = useState('Tous');
  const filtered = cat === 'Tous' ? PROJECTS : PROJECTS.filter(p => p.cat === cat);

  return (
    <section className="projects" id="projets">
      <div className="container">
        <div className="s-label">Mes réalisations</div>
        <div className="projects__head">
          <h2 className="projects__title">
            Ce que j'ai <span className="g-text">construit</span>
          </h2>
          <div className="projects__filters">
            {CATS.map(c => (
              <button key={c} className={`pf-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filtered.map((p, i) => <ProjCard key={p.id} p={p} i={i} />)}
        </div>

        <div className="projects__more">
          <a href="https://github.com/LeRegulus" className="btn btn-outline" target="_blank" rel="noreferrer">
            Voir tous les projets sur GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjCard({ p }) {
  return (
    <div className={`pcard ${p.featured ? 'pcard--featured' : ''}`} style={{ '--c': p.color }}>
      {p.featured && <div className="pcard__badge">★ Featured</div>}
      <div className="pcard__top">
        <span className="pcard__emoji">{p.emoji}</span>
        <div className="pcard__links">
          <a href={p.github} target="_blank" rel="noreferrer" className="pcard__icon-link" title="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href={p.live} target="_blank" rel="noreferrer" className="pcard__icon-link" title="Live demo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
      <h3 className="pcard__title">{p.title}</h3>
      <p className="pcard__desc">{p.desc}</p>
      <div className="pcard__tags">
        {p.tags.map(t => <span key={t} className="pcard__tag">{t}</span>)}
      </div>
      <div className="pcard__glow" />
    </div>
  );
}
