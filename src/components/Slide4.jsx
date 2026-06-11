import React, { useState, useEffect } from 'react';
import './Slide4.css';

export default function Slide4() {
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

  const handleEcosystemClick = (channel) => {
    const info = {
      seo: "SEO (Search Engine Optimization) : Positionnez votre site gratuitement en première page de Google.",
      sea: "SEA (Search Engine Advertising) : Lancez des annonces Google payantes pour capter des leads immédiatement.",
      social: "Social Media Marketing : Utilisez LinkedIn, Facebook, Instagram et TikTok pour fédérer une communauté.",
      email: "Email Marketing : Automatisez vos newsletters, relances de paniers et séquences de lead nurturing.",
      content: "Content Marketing : Rédigez des articles de blog, cas clients et livres blancs pour asseoir votre autorité.",
      data: "Data Analytics : Configurez le tracking d'événements et analysez vos taux de rebond et KPIs.",
      cro: "CRO (Conversion Rate Optimization) : Optimisez vos call-to-actions, formulaires et tunnels d'achat.",
      mobile: "Mobile Marketing : Déployez du responsive design, des campagnes de SMS marketing et des notifications push."
    };
    addToast(info[channel], 'blue');
  };

  const handleJourneyStepClick = (stepNum) => {
    const info = {
      1: "Découverte : Le prospect prend conscience de son besoin et découvre votre site via le SEO, SEA ou les réseaux.",
      2: "Considération : Le prospect évalue les solutions. Il lit vos articles, compare vos offres et s'abonne à votre newsletter.",
      3: "Conversion : Le prospect passe à l'action. Il achète votre produit, demande une démo ou remplit un formulaire.",
      4: "Fidélisation : Le client est accompagné par email, reçoit des conseils et recommande votre marque (Ambassadeur)."
    };
    const colors = { 1: 'blue', 2: 'green', 3: 'orange', 4: 'purple' };
    addToast(info[stepNum], colors[stepNum]);
  };

  const handleChannelClick = (channelType) => {
    const info = {
      propres: "Canaux Propres (Owned Media) : Vos supports officiels (site web, blog, base email, page de profil social).",
      payants: "Canaux Payants (Paid Media) : Vos investissements publicitaires (Google Search Ads, Facebook Ads, influenceurs).",
      gagnes: "Canaux Gagnés (Earned Media) : Votre visibilité gratuite (recommandations, partages spontanés, avis clients, presse)."
    };
    const colors = { propres: 'blue', payants: 'green', gagnes: 'orange' };
    addToast(info[channelType], colors[channelType]);
  };

  const handleStatClick = (statKey) => {
    const info = {
      conv: "Taux de Conversion : 2,5% des visiteurs de votre site accomplissent l'action souhaitée (achat, formulaire).",
      rebond: "Taux de Rebond : 32% des internautes quittent votre site après avoir visité une seule page (excellent score)."
    };
    addToast(info[statKey], statKey === 'conv' ? 'blue' : 'green');
  };

  const handleBadgeClick = () => {
    addToast("Introduction aux fondamentaux du marketing digital", "info");
  };

  return (
    <div className="slide-4">
      {/* Sync background floating orbs */}
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
              <i className="fas fa-question-circle"></i>
            </div>
            <div>
              <h1 className="main-title">Qu'est-ce que le Marketing Digital ?</h1>
              <div className="subtitle">Définition, écosystème et parcours client</div>
            </div>
          </div>
          <div className="badge" onClick={handleBadgeClick}>
            <i className="fas fa-lightbulb" style={{ marginRight: '8px' }}></i>
            Fondamentaux
          </div>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Left Column: Definition & Ecosystem */}
          <div className="definition-card animate-fade-in-up" style={{ '--delay': 1 }}>
            <div className="card-header">
              <div className="card-icon blue">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="card-title">Définition du Marketing Digital</div>
            </div>
            <div className="definition-text">
              Le <span className="highlight">marketing digital</span> désigne l'ensemble des techniques et stratégies marketing utilisées sur les canaux numériques pour <span className="highlight">attirer</span>, <span className="highlight">convertir</span> et <span className="highlight">fidéliser</span> des clients. Il englobe toutes les actions menées sur Internet pour promouvoir des produits ou services, mesurer leur performance et optimiser les résultats.
            </div>
            
            {/* Ecosystem Grid */}
            <div className="ecosystem-grid">
              <div className="ecosystem-item" onClick={() => handleEcosystemClick('seo')}>
                <div className="ecosystem-icon blue"><i className="fas fa-search"></i></div>
                <div className="ecosystem-title">SEO</div>
                <div className="ecosystem-desc">Naturel</div>
              </div>
              <div className="ecosystem-item" onClick={() => handleEcosystemClick('sea')}>
                <div className="ecosystem-icon green"><i className="fas fa-ad"></i></div>
                <div className="ecosystem-title">SEA</div>
                <div className="ecosystem-desc">Payant</div>
              </div>
              <div className="ecosystem-item" onClick={() => handleEcosystemClick('social')}>
                <div className="ecosystem-icon orange"><i className="fas fa-share-alt"></i></div>
                <div className="ecosystem-title">Social</div>
                <div className="ecosystem-desc">Réseaux</div>
              </div>
              <div className="ecosystem-item" onClick={() => handleEcosystemClick('email')}>
                <div className="ecosystem-icon purple"><i className="fas fa-envelope"></i></div>
                <div className="ecosystem-title">Email</div>
                <div className="ecosystem-desc">Direct</div>
              </div>
              <div className="ecosystem-item" onClick={() => handleEcosystemClick('content')}>
                <div className="ecosystem-icon blue"><i className="fas fa-file-alt"></i></div>
                <div className="ecosystem-title">Content</div>
                <div className="ecosystem-desc">Contenu</div>
              </div>
              <div className="ecosystem-item" onClick={() => handleEcosystemClick('data')}>
                <div className="ecosystem-icon green"><i className="fas fa-chart-line"></i></div>
                <div className="ecosystem-title">Data</div>
                <div className="ecosystem-desc">Analytics</div>
              </div>
              <div className="ecosystem-item" onClick={() => handleEcosystemClick('cro')}>
                <div className="ecosystem-icon orange"><i className="fas fa-percentage"></i></div>
                <div className="ecosystem-title">CRO</div>
                <div className="ecosystem-desc">Optimisation</div>
              </div>
              <div className="ecosystem-item" onClick={() => handleEcosystemClick('mobile')}>
                <div className="ecosystem-icon purple"><i className="fas fa-mobile-alt"></i></div>
                <div className="ecosystem-title">Mobile</div>
                <div className="ecosystem-desc">Mobile</div>
              </div>
            </div>
          </div>

          {/* Right Column: Customer Journey */}
          <div className="journey-card animate-fade-in-up" style={{ '--delay': 2 }}>
            <div className="card-header">
              <div className="card-icon green">
                <i className="fas fa-route"></i>
              </div>
              <div className="card-title">Parcours Client</div>
            </div>
            
            <div className="journey-steps">
              <div className="journey-step" style={{ borderLeftColor: '#3B82F6' }} onClick={() => handleJourneyStepClick(1)}>
                <div className="step-number" style={{ background: '#3B82F6' }}>1</div>
                <div className="step-content">
                  <div className="step-title">Découverte</div>
                  <div className="step-desc">Premier contact marque</div>
                </div>
              </div>
              <div className="journey-step" style={{ borderLeftColor: '#10B981' }} onClick={() => handleJourneyStepClick(2)}>
                <div className="step-number" style={{ background: '#10B981' }}>2</div>
                <div className="step-content">
                  <div className="step-title">Considération</div>
                  <div className="step-desc">Évaluation des options</div>
                </div>
              </div>
              <div className="journey-step" style={{ borderLeftColor: '#F97316' }} onClick={() => handleJourneyStepClick(3)}>
                <div className="step-number" style={{ background: '#F97316' }}>3</div>
                <div className="step-content">
                  <div className="step-title">Conversion</div>
                  <div className="step-desc">Achat ou action</div>
                </div>
              </div>
              <div className="journey-step" style={{ borderLeftColor: '#8B5CF6' }} onClick={() => handleJourneyStepClick(4)}>
                <div className="step-number" style={{ background: '#8B5CF6' }}>4</div>
                <div className="step-content">
                  <div className="step-title">Fidélisation</div>
                  <div className="step-desc">Engagement long terme</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          {/* Channels Card */}
          <div className="bottom-card animate-fade-in-up" style={{ '--delay': 3 }}>
            <div className="card-header">
              <div className="card-icon blue">
                <i className="fas fa-users"></i>
              </div>
              <div className="card-title">Types de Canaux</div>
            </div>
            <div className="bottom-content">
              <div className="bottom-item" onClick={() => handleChannelClick('propres')}>
                <div className="bottom-icon blue"><i className="fas fa-globe"></i></div>
                <div className="bottom-text">Propres</div>
              </div>
              <div className="bottom-item" onClick={() => handleChannelClick('payants')}>
                <div className="bottom-icon green"><i className="fas fa-handshake"></i></div>
                <div className="bottom-text">Payants</div>
              </div>
              <div className="bottom-item" onClick={() => handleChannelClick('gagnes')}>
                <div className="bottom-icon orange"><i className="fas fa-user-friends"></i></div>
                <div className="bottom-text">Gagnés</div>
              </div>
            </div>
          </div>

          {/* Metrics Card */}
          <div className="bottom-card animate-fade-in-up" style={{ '--delay': 4 }}>
            <div className="card-header">
              <div className="card-icon green">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="card-title">Métriques</div>
            </div>
            <div className="stats-row">
              <div className="stat-item" onClick={() => handleStatClick('conv')}>
                <div className="stat-number" style={{ color: '#3B82F6' }}>2.5%</div>
                <div className="stat-label">Taux conv.</div>
              </div>
              <div className="stat-item" onClick={() => handleStatClick('rebond')}>
                <div className="stat-number" style={{ color: '#10B981' }}>32%</div>
                <div className="stat-label">Rebond</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notifications rendering */}
      <div className="toasts-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast-card ${toast.type}`}>
            <div className={`toast-icon ${toast.type === 'blue' ? 'blue' : toast.type === 'green' ? 'green' : toast.type === 'orange' ? 'orange' : toast.type === 'purple' ? 'purple' : 'blue'}`}>
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
