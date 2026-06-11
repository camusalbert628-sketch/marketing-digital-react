import React, { useState, useEffect } from 'react';
import './Slide3.css';

export default function Slide3() {
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

  const handleSectionClick = (sectionNum, title) => {
    const info = {
      "01": "Section 1 : Découvrez l'histoire du web, l'écosystème digital et les grands leviers d'acquisition (SEO, SEA, SMM).",
      "02": "Section 2 : Apprenez à concevoir des Buyer Personas, rédiger un plan marketing et définir des objectifs SMART.",
      "03": "Section 3 : Maîtrisez l'art du storytelling, concevez des chartes graphiques et apprenez le copywriting d'action.",
      "04": "Section 4 : Positionnez-vous sur Google. Structure on-page, netlinking, recherche sémantique et cocons sémantiques.",
      "05": "Section 5 : Configurez GA4 pour suivre vos conversions, créez des tags via GTM et analysez vos concurrents sur SEMrush.",
      "06": "Section 6 : Concevez un calendrier éditorial efficace, gérez les réseaux sociaux et engagez votre communauté.",
      "07": "Section 7 : Lancez des campagnes publicitaires rentables sur Google Search, Meta (Facebook/Insta) et suivez le Pixel.",
      "08": "Section 8 : Connectez vos applications avec Zapier/Make et mettez en place des campagnes d'email marketing automatisées.",
      "09": "Section 9 : Améliorez le CRO (taux de conversion), gérez des paniers e-commerce et analysez vos funnels de vente.",
      "10": "Section 10 : Établissez votre offre de freelance, trouvez vos premiers clients et structurez votre propre agence."
    };
    addToast(info[sectionNum], sectionNum === "01" || sectionNum === "06" ? 'blue' : sectionNum === "02" || sectionNum === "07" ? 'green' : sectionNum === "03" || sectionNum === "08" ? 'orange' : sectionNum === "04" || sectionNum === "09" ? 'purple' : 'red');
  };

  const handleBadgeClick = () => {
    addToast("40 modules pratiques avec ateliers pas à pas", "info");
  };

  const handleStatClick = (stat) => {
    const info = {
      heures: "200+ heures de cours vidéos, d'exercices pratiques et de cas réels corrigés.",
      certifs: "10 certifications de section à valider tout au long de votre parcours d'apprentissage."
    };
    addToast(info[stat], 'info');
  };

  return (
    <div className="slide-3">
      {/* Background patterns */}
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      {/* Slide Layout Content */}
      <div className="content-wrapper">
        <div className="header animate-fade-in-down">
          <div className="title-section">
            <div className="title-icon">
              <i className="fas fa-list-alt"></i>
            </div>
            <div>
              <h1 className="main-title">Table des matières</h1>
              <div className="subtitle">10 sections principales pour maîtriser le marketing digital</div>
            </div>
          </div>
          <div className="badge" onClick={handleBadgeClick}>
            <i className="fas fa-book" style={{ marginRight: '8px' }}></i>
            40 modules
          </div>
        </div>

        {/* Sections Grid */}
        <div className="sections-grid">
          {/* Card 01 */}
          <div className="section-card animate-fade-in-up" style={{ '--delay': 1 }} onClick={() => handleSectionClick('01', 'Fondamentaux')}>
            <div className="section-number">01</div>
            <div className="section-icon blue">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="section-title">Fondamentaux</div>
            <div className="section-desc">Bases du marketing digital et écosystème</div>
            <div className="section-topics">
              <span className="topic-tag">Définitions</span>
              <span className="topic-tag">Piliers</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill blue" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="section-card animate-fade-in-up" style={{ '--delay': 2 }} onClick={() => handleSectionClick('02', 'Stratégie')}>
            <div className="section-number">02</div>
            <div className="section-icon green">
              <i className="fas fa-chess"></i>
            </div>
            <div className="section-title">Stratégie</div>
            <div className="section-desc">Planification et objectifs SMART</div>
            <div className="section-topics">
              <span className="topic-tag">Framework</span>
              <span className="topic-tag">KPIs</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill green" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Card 03 */}
          <div className="section-card animate-fade-in-up" style={{ '--delay': 3 }} onClick={() => handleSectionClick('03', 'Branding & Contenu')}>
            <div className="section-number">03</div>
            <div className="section-icon orange">
              <i className="fas fa-palette"></i>
            </div>
            <div className="section-title">Branding &amp; Contenu</div>
            <div className="section-desc">Identité et storytelling</div>
            <div className="section-topics">
              <span className="topic-tag">Copywriting</span>
              <span className="topic-tag">Design</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill orange" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Card 04 */}
          <div className="section-card animate-fade-in-up" style={{ '--delay': 4 }} onClick={() => handleSectionClick('04', 'SEO Complet')}>
            <div className="section-number">04</div>
            <div className="section-icon purple">
              <i className="fas fa-search"></i>
            </div>
            <div className="section-title">SEO Complet</div>
            <div className="section-desc">Référencement on-page, off-page</div>
            <div className="section-topics">
              <span className="topic-tag">Technique</span>
              <span className="topic-tag">Content</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill purple" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Card 05 */}
          <div className="section-card animate-fade-in-up" style={{ '--delay': 5 }} onClick={() => handleSectionClick('05', 'Outils')}>
            <div className="section-number">05</div>
            <div className="section-icon red">
              <i className="fas fa-tools"></i>
            </div>
            <div className="section-title">Outils</div>
            <div className="section-desc">GA4, GSC, SEMrush</div>
            <div className="section-topics">
              <span className="topic-tag">Analytics</span>
              <span className="topic-tag">SEO</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill red" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Card 06 */}
          <div className="section-card animate-fade-in-up" style={{ '--delay': 6 }} onClick={() => handleSectionClick('06', 'Contenu & Social')}>
            <div className="section-number">06</div>
            <div className="section-icon blue">
              <i className="fas fa-share-alt"></i>
            </div>
            <div className="section-title">Contenu &amp; Social</div>
            <div className="section-desc">Marketing de contenu et réseaux</div>
            <div className="section-topics">
              <span className="topic-tag">Social</span>
              <span className="topic-tag">Content</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill blue" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Card 07 */}
          <div className="section-card animate-fade-in-up" style={{ '--delay': 7 }} onClick={() => handleSectionClick('07', 'Publicité')}>
            <div className="section-number">07</div>
            <div className="section-icon green">
              <i className="fas fa-ad"></i>
            </div>
            <div className="section-title">Publicité</div>
            <div className="section-desc">Facebook Ads, Google Ads</div>
            <div className="section-topics">
              <span className="topic-tag">PPC</span>
              <span className="topic-tag">Display</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill green" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Card 08 */}
          <div className="section-card animate-fade-in-up" style={{ '--delay': 8 }} onClick={() => handleSectionClick('08', 'Automatisation')}>
            <div className="section-number">08</div>
            <div className="section-icon orange">
              <i className="fas fa-robot"></i>
            </div>
            <div className="section-title">Automatisation</div>
            <div className="section-desc">Workflows et tunnels de vente</div>
            <div className="section-topics">
              <span className="topic-tag">Email</span>
              <span className="topic-tag">Funnel</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill orange" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Card 09 */}
          <div className="section-card animate-fade-in-up" style={{ '--delay': 9 }} onClick={() => handleSectionClick('09', 'Business')}>
            <div className="section-number">09</div>
            <div className="section-icon purple">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="section-title">Business</div>
            <div className="section-desc">E-commerce et analyse</div>
            <div className="section-topics">
              <span className="topic-tag">CRO</span>
              <span className="topic-tag">Data</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill purple" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Card 10 */}
          <div className="section-card animate-fade-in-up" style={{ '--delay': 10 }} onClick={() => handleSectionClick('10', 'Carrière')}>
            <div className="section-number">10</div>
            <div className="section-icon red">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="section-title">Carrière</div>
            <div className="section-desc">Freelancing et agence</div>
            <div className="section-topics">
              <span className="topic-tag">Plan</span>
              <span className="topic-tag">12 mois</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill red" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar animate-fade-in-up" style={{ '--delay': 11 }}>
          <div className="progress-text">Progression: <span style={{ color: 'white', fontWeight: 700 }}>100%</span> (40 modules)</div>
          <div className="stats">
            <div className="stat-item" onClick={() => handleStatClick('heures')}>
              <i className="fas fa-clock"></i>
              <span className="stat-value">200+</span>
              <span>heures</span>
            </div>
            <div className="stat-item" onClick={() => handleStatClick('certifs')}>
              <i className="fas fa-certificate"></i>
              <span className="stat-value">10</span>
              <span>certifications</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notifications rendering */}
      <div className="toasts-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast-card ${toast.type}`}>
            <div className={`toast-icon ${toast.type === 'blue' ? 'blue' : toast.type === 'green' ? 'green' : toast.type === 'orange' ? 'orange' : toast.type === 'purple' ? 'purple' : toast.type === 'red' ? 'red' : 'blue'}`}>
              <i className="fas fa-info-circle"></i>
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
