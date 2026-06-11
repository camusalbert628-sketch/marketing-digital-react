import React, { useState, useEffect } from 'react';
import './Slide1.css';

// Details for the features drawer
const featureDetails = {
  seo: {
    tag: "SEO Complet",
    colorClass: "blue",
    title: "Syllabus Référencement Naturel",
    subtitle: "Devenez visible sur les moteurs de recherche",
    syllabus: [
      "SEO Technique : optimisation du crawl, indexation, sitemaps, et structure.",
      "SEO On-Page : recherche sémantique avancée, structure des balises, maillage.",
      "SEO Off-Page : stratégies de netlinking, partenariats, et e-réputation.",
      "Recherche de mots-clés : analyse des opportunités et intentions de recherche."
    ],
    tools: ["SEMrush", "Ahrefs", "Google Search Console", "Screaming Frog"]
  },
  ads: {
    tag: "Publicité",
    colorClass: "orange",
    title: "Campagnes Publicitaires (SEA/SMA)",
    subtitle: "Générez du trafic ultra-qualifié rapidement",
    syllabus: [
      "Google Ads : maîtriser les réseaux Search, Display, et Performance Max.",
      "Meta Ads : ciblage avancé sur Facebook/Instagram et pixel tracking.",
      "Copywriting publicitaire : rédiger des accroches et des visuels convertissants.",
      "Optimisation du ROI : gestion budgétaire et stratégies d'enchères intelligentes."
    ],
    tools: ["Google Ads Manager", "Meta Business Suite", "TikTok Ads", "Canva"]
  },
  analytics: {
    tag: "Analytics",
    colorClass: "green",
    title: "Data & Analyse d'Audience",
    subtitle: "Prenez des décisions basées sur les données",
    syllabus: [
      "Google Analytics 4 : configuration avancée et suivi des événements de conversion.",
      "Google Tag Manager : implémentation de balises marketing sans développeur.",
      "Looker Studio : création de dashboards automatisés pour vos clients.",
      "A/B Testing & CRO : techniques d'optimisation du taux de conversion."
    ],
    tools: ["GA4", "Google Tag Manager", "Looker Studio", "Hotjar"]
  },
  automation: {
    tag: "Automation",
    colorClass: "purple",
    title: "Automation & IA Générative",
    subtitle: "Multipliez votre productivité par 10",
    syllabus: [
      "Workflows No-Code : connecter vos outils avec Zapier et Make (Integromat).",
      "IA Générative : intégration de ChatGPT/Claude pour la création de contenu.",
      "Lead Nurturing : automatiser vos campagnes email et segmentation CRM.",
      "Scraping & Data : récolter des bases de données de prospects ciblés."
    ],
    tools: ["Zapier", "Make", "OpenAI / Claude", "Brevo / ActiveCampaign"]
  }
};

// Details for the stats popovers
const statDetails = {
  modules: {
    title: "Contenu de formation structuré",
    desc: "40 modules de cours progressifs, allant des bases du marketing digital jusqu'aux stratégies d'automatisation IA avancées."
  },
  hours: {
    title: "Apprentissage à votre rythme",
    desc: "Plus de 200 heures de vidéos haute définition, exercices guidés, cas pratiques, et sessions de questions-réponses mensuelles."
  },
  tools: {
    title: "Maîtrisez les outils leaders",
    desc: "Apprenez à utiliser concrètement plus de 50 outils professionnels du marché (SEMrush, Google Ads, GA4, Make, etc.)."
  },
  practice: {
    title: "Pédagogie par l'action",
    desc: "Zéro théorie inutile. Chaque module se termine par un projet réel ou une étude de cas à implémenter immédiatement."
  }
};

export default function Slide1({ onStart }) {
  // Navigation & details states
  const [activeStat, setActiveStat] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);
  
  // Registration Form States
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', level: 'beginner', goal: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Toast notifications
  const [toasts, setToasts] = useState([]);

  // Auto-dismiss toasts
  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = (text, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, text, type }]);
  };

  // Close elements on clicking outside or ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveFeature(null);
        setShowModal(false);
        setActiveStat(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Le nom complet est requis.";
    
    if (!form.email.trim()) {
      newErrors.email = "L'adresse email est requise.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "L'adresse email n'est pas valide.";
    }

    if (!form.goal.trim()) newErrors.goal = "Veuillez préciser votre objectif principal.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      addToast("Inscription réussie ! Bienvenue dans la formation.", "success");
    }
  };

  const resetForm = () => {
    setForm({ name: '', email: '', level: 'beginner', goal: '' });
    setErrors({});
    setIsSubmitted(false);
    setShowModal(false);
  };

  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    addToast(`Redirection simulée vers notre page ${platform}...`, 'info');
  };

  const handleBadgeClick = () => {
    addToast("Formation certifiée et éligible au financement CPF/OPCO", "info");
  };

  const handleStatClick = (statKey) => {
    setActiveStat(activeStat === statKey ? null : statKey);
  };

  return (
    <div className="slide-1" onClick={() => setActiveStat(null)}>
      {/* Animated Glowing Background Orbs */}
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      
      {/* Slide Layout Content */}
      <div className="content-wrapper">
        <div className="header animate-fade-in-down">
          <div className="logo-area">
            <div className="logo-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="logo-text">Marketing Digital Pro</div>
          </div>
          <div className="badge" onClick={(e) => { e.stopPropagation(); handleBadgeClick(); }}>
            <i className="fas fa-star" style={{ marginRight: '5px' }}></i>
            Formation Complète 2026
          </div>
        </div>
        
        <div className="title-section animate-fade-in-up" style={{ '--delay': 1 }}>
          <h1 className="main-title">
            Marketing Digital &amp; SEO<br />
            <span className="title-highlight">De Zéro à Héros</span>
          </h1>
          <p className="subtitle">
            Maîtrisez les stratégies, outils et techniques pour devenir un expert du marketing digital et du
            référencement
          </p>
          
          {/* Interactive Stats Bar */}
          <div className="stats-bar animate-fade-in-up" style={{ '--delay': 2 }}>
            {Object.entries(statDetails).map(([key, value]) => {
              const labelMap = {
                modules: { val: "40+", text: "Modules", color: "#2563EB" },
                hours: { val: "200+", text: "Heures de contenu", color: "#F97316" },
                tools: { val: "50+", text: "Outils couverts", color: "#10B981" },
                practice: { val: "100%", text: "Pratique", color: "#8B5CF6" }
              };
              
              const activeLabel = labelMap[key];
              
              return (
                <div 
                  key={key}
                  className="stat-item"
                  onClick={(e) => { e.stopPropagation(); handleStatClick(key); }}
                >
                  <div className="stat-number" style={{ color: activeLabel.color }}>
                    {activeLabel.val}
                  </div>
                  <div className="stat-label">{activeLabel.text}</div>
                  
                  {activeStat === key && (
                    <div className="stat-popover" onClick={(e) => e.stopPropagation()}>
                      <div className="stat-popover-title">
                        <i className="fas fa-info-circle" style={{ color: activeLabel.color }}></i>
                        {value.title}
                      </div>
                      <div className="stat-popover-desc">{value.desc}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="features-grid">
          <div className="feature-card animate-fade-in-up" style={{ '--delay': 3 }} onClick={() => setActiveFeature(featureDetails.seo)}>
            <div className="feature-icon blue">
              <i className="fas fa-search animate-pulse-subtle"></i>
            </div>
            <div className="feature-title">SEO Complet</div>
            <div className="feature-desc">On-page, technique, off-page</div>
          </div>
          <div className="feature-card animate-fade-in-up" style={{ '--delay': 4 }} onClick={() => setActiveFeature(featureDetails.ads)}>
            <div className="feature-icon orange">
              <i className="fas fa-ad animate-pulse-subtle"></i>
            </div>
            <div className="feature-title">Publicité</div>
            <div className="feature-desc">Google Ads, Facebook Ads</div>
          </div>
          <div className="feature-card animate-fade-in-up" style={{ '--delay': 5 }} onClick={() => setActiveFeature(featureDetails.analytics)}>
            <div className="feature-icon green">
              <i className="fas fa-chart-pie animate-pulse-subtle"></i>
            </div>
            <div className="feature-title">Analytics</div>
            <div className="feature-desc">GA4, GSC, SEMrush</div>
          </div>
          <div className="feature-card animate-fade-in-up" style={{ '--delay': 6 }} onClick={() => setActiveFeature(featureDetails.automation)}>
            <div className="feature-icon purple">
              <i className="fas fa-robot animate-pulse-subtle"></i>
            </div>
            <div className="feature-title">Automation</div>
            <div className="feature-desc">Workflows &amp; IA</div>
          </div>
        </div>

        {/* Main CTA Section (triggers Modal) */}
        <div className="cta-section animate-fade-in-up" style={{ '--delay': 7 }}>
          <button className="cta-button" onClick={() => setShowModal(true)}>
            <i className="fas fa-play-circle animate-pulse-subtle"></i>
            Commencer la formation
          </button>
        </div>

        <div className="bottom-bar animate-fade-in-up" style={{ '--delay': 8 }}>
          <div className="social-links">
            <a className="social-link" href="#" onClick={(e) => handleSocialClick(e, 'LinkedIn')}><i className="fab fa-linkedin-in"></i></a>
            <a className="social-link" href="#" onClick={(e) => handleSocialClick(e, 'Twitter/X')}><i className="fab fa-twitter"></i></a>
            <a className="social-link" href="#" onClick={(e) => handleSocialClick(e, 'YouTube')}><i className="fab fa-youtube"></i></a>
          </div>
          <div className="author-info">
            Présenté par l'équipe Marketing Digital Pro
          </div>
        </div>
      </div>

      <div className="decoration-line"></div>
      <div className="decoration-line right"></div>

      {/* --- DRAWERS AND MODALS OVERLAYS --- */}

      {/* Feature Syllabus Drawer */}
      {activeFeature && (
        <>
          <div className="drawer-overlay" onClick={() => setActiveFeature(null)}></div>
          <div className={`feature-drawer ${activeFeature ? 'active' : ''}`}>
            <button className="drawer-close" onClick={() => setActiveFeature(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="drawer-header">
              <span className={`drawer-tag ${activeFeature.colorClass}`}>{activeFeature.tag}</span>
              <h2 className="drawer-title">{activeFeature.title}</h2>
              <p className="drawer-subtitle">{activeFeature.subtitle}</p>
            </div>

            <div className="drawer-section">
              <h3 className={`drawer-section-title ${activeFeature.colorClass}`}>Au programme</h3>
              <ul className="syllabus-list">
                {activeFeature.syllabus.map((item, idx) => (
                  <li key={idx} className="syllabus-item">
                    <i className={`fas fa-check-circle ${activeFeature.colorClass}`}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="drawer-section">
              <h3 className={`drawer-section-title ${activeFeature.colorClass}`}>Outils maîtrisés</h3>
              <div className="tool-tags-container">
                {activeFeature.tools.map((tool, idx) => (
                  <span key={idx} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
            
            <button className="form-submit-btn" style={{ marginTop: 'auto' }} onClick={() => { setActiveFeature(null); setShowModal(true); }}>
              S'inscrire à ce module
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </>
      )}

      {/* Enrollment Form Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <i className="fas fa-times"></i>
            </button>
            
            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <h2 className="modal-title">Rejoindre la formation</h2>
                <p className="modal-subtitle">Remplissez ces informations pour recevoir votre accès immédiat.</p>
                
                <div className="form-group">
                  <label className="form-label">Nom complet</label>
                  <input 
                    type="text" 
                    name="name"
                    value={form.name} 
                    onChange={handleInputChange} 
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Ex: Jean Dupont"
                  />
                  {errors.name && <div className="form-error"><i className="fas fa-exclamation-circle"></i>{errors.name}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Adresse email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={form.email} 
                    onChange={handleInputChange} 
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Ex: jean.dupont@gmail.com"
                  />
                  {errors.email && <div className="form-error"><i className="fas fa-exclamation-circle"></i>{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Niveau d'expérience</label>
                  <select 
                    name="level"
                    value={form.level} 
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="beginner">Débutant (Zéro connaissances)</option>
                    <option value="intermediate">Intermédiaire (Quelques bases)</option>
                    <option value="advanced">Avancé (Professionnel en marketing)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Votre objectif principal</label>
                  <textarea 
                    name="goal"
                    value={form.goal} 
                    onChange={handleInputChange}
                    rows="3"
                    className={`form-input ${errors.goal ? 'error' : ''}`}
                    placeholder="Ex: Reconversion pro, booster les ventes de ma boîte, devenir freelance..."
                    style={{ resize: 'none' }}
                  ></textarea>
                  {errors.goal && <div className="form-error"><i className="fas fa-exclamation-circle"></i>{errors.goal}</div>}
                </div>

                <button type="submit" className="form-submit-btn">
                  Valider l'inscription
                  <i className="fas fa-chevron-right"></i>
                </button>
              </form>
            ) : (
              <div className="success-view">
                <div className="success-icon">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="success-title">Félicitations, {form.name} !</h3>
                <p className="success-desc">
                  Votre demande d'inscription pour le niveau <strong>{form.level === 'beginner' ? 'Débutant' : form.level === 'intermediate' ? 'Intermédiaire' : 'Avancé'}</strong> a été enregistrée.<br />
                  Un mail de confirmation avec vos identifiants d'accès a été envoyé à <strong>{form.email}</strong>.
                </p>
                <button className="form-submit-btn" onClick={resetForm}>
                  Fermer
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toast notifications rendering */}
      <div className="toasts-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast-card ${toast.type}`}>
            <div className={`toast-icon ${toast.type === 'success' ? 'green' : toast.type === 'info' ? 'purple' : 'blue'}`}>
              <i className={toast.type === 'success' ? 'fas fa-check-circle' : 'fas fa-info-circle'}></i>
            </div>
            <div className="toast-content">
              <span className="toast-text">{toast.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
