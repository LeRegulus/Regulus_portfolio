import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200)); // Remplacer par vraie API (Formspree, EmailJS)
    setLoading(false);
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Header */}
        <div className="contact__head">
          <div className="s-label">Contact</div>
          <h2 className="contact__title">Travaillons <span className="g-text">ensemble</span></h2>
          <p className="contact__sub">
            Un projet, une mission, une question ? Je réponds sous 24h.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info">
            {[
              { icon: '📧', label: 'Email', val: 'regulus1946@gmail.com', href: 'mailto:regulus1946@gmail.com' },
              { icon: '💼', label: 'LinkedIn', val: 'https://www.linkedin.com/in/papa-alassane-seck-21a7712ab/', href: 'https://www.linkedin.com/in/papa-alassane-seck-21a7712ab/' },
              { icon: '🐙', label: 'GitHub', val: 'https://github.com/LeRegulus', href: 'https://github.com/LeRegulus' },
              { icon: '📍', label: 'Localisation', val: 'Dakar, Sénégal', href: null },
            ].map((item, i) => (
              item.href
                ? <a key={i} href={item.href} className="cinfo-card" target={!item.href.startsWith('mailto') ? '_blank' : undefined} rel="noreferrer">
                    <span className="cinfo-icon">{item.icon}</span>
                    <div><div className="cinfo-label">{item.label}</div><div className="cinfo-val">{item.val}</div></div>
                    <span className="cinfo-arrow">→</span>
                  </a>
                : <div key={i} className="cinfo-card cinfo-card--static">
                    <span className="cinfo-icon">{item.icon}</span>
                    <div><div className="cinfo-label">{item.label}</div><div className="cinfo-val">{item.val}</div></div>
                  </div>
            ))}

            {/* Ocean deco */}
            <div className="contact__deco">
              <div className="deco-wave" />
              <div className="deco-wave deco-wave--2" />
              <span className="deco-text">Let's build something great 🌊</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <div className="success-circle">✅</div>
                <h3>Message envoyé !</h3>
                <p>Merci ! Je vous reviens dans les 24h.</p>
                <button className="btn btn-outline" onClick={() => setSent(false)} style={{ marginTop: 16 }}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={submit}>
                <div className="cform-row">
                  <div className="cform-field">
                    <label>Nom complet</label>
                    <input name="name" value={form.name} onChange={change} placeholder="Moussa Ndiaye" required />
                  </div>
                  <div className="cform-field">
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={change} placeholder="moussa@ndiaye.com" required />
                  </div>
                </div>
                <div className="cform-field">
                  <label>Sujet</label>
                  <input name="subject" value={form.subject} onChange={change} placeholder="Votre projet, une question..." required />
                </div>
                <div className="cform-field">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={change} placeholder="Décrivez votre projet en quelques mots..." rows={6} required />
                </div>
                <button type="submit" className="btn btn-cyan" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                  {loading ? (
                    <><span className="btn-spinner" /> Envoi en cours...</>
                  ) : (
                    <>Envoyer le message <span>🚀</span></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
