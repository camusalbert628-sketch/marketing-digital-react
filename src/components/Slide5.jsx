import React, { useState, useEffect } from 'react';
import './Slide5.css';

export default function Slide5() {
  const [toasts, setToasts] = useState([]);

  // Auto-dismiss toasts after 3 seconds
  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = (text, colorName = 'blue', colorHex = '#3B82F6') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, text, colorName, colorHex }]);
  };

  const handlePillarClick = (pillar) => {
    addToast(pillar.toastText, pillar.colorClass, pillar.fillColor);
  };

  const handleBadgeClick = () => {
    addToast("Les 7 Piliers Fondamentaux : Une architecture stratégique complète pour orchestrer l'ensemble de vos leviers de marketing digital.", "orange", "#F97316");
  };

  const handleIntegrationClick = () => {
    addToast("Intégration Complète : La synergie et l'interconnexion de ces 7 piliers permettent de maximiser l'efficacité globale.", "blue", "#3B82F6");
  };

  const handleSummaryClick = (item) => {
    const info = {
      efficacite: "Efficacité globale de 98% constatée lors de l'alignement stratégique des 7 piliers.",
      roi: "Retour sur investissement de 2.5x en moyenne pour les campagnes multicanales orchestrées.",
      croissance: "Taux de croissance annuel moyen de 45% enregistré par nos partenaires."
    };
    const colors = {
      efficacite: { name: 'blue', hex: '#3B82F6' },
      roi: { name: 'green', hex: '#10B981' },
      croissance: { name: 'orange', hex: '#F97316' }
    };
    addToast(info[item], colors[item].name, colors[item].hex);
  };

  const pillars = [
    {
      number: "01",
      iconClass: "fas fa-chess",
      colorClass: "blue",
      title: "Stratégie",
      desc: "Planification et objectifs",
      statLabel: "Planification",
      statValue: "100%",
      fillWidth: "100%",
      fillColor: "#3B82F6",
      toastText: "Stratégie (01) : Planification et objectifs. Indispensable pour fixer les KPIs et orienter l'ensemble des actions."
    },
    {
      number: "02",
      iconClass: "fas fa-file-alt",
      colorClass: "green",
      title: "Contenu",
      desc: "Création et publication",
      statLabel: "Qualité",
      statValue: "95%",
      fillWidth: "95%",
      fillColor: "#10B981",
      toastText: "Contenu (02) : Création et publication. Production de valeur (articles, vidéos, infographies) pour attirer et engager votre audience."
    },
    {
      number: "03",
      iconClass: "fas fa-search",
      colorClass: "orange",
      title: "SEO",
      desc: "Référencement naturel",
      statLabel: "Visibilité",
      statValue: "90%",
      fillWidth: "90%",
      fillColor: "#F97316",
      toastText: "SEO (03) : Référencement naturel. Optimisation technique, sémantique et netlinking pour obtenir un trafic organique qualifié."
    },
    {
      number: "04",
      iconClass: "fas fa-ad",
      colorClass: "purple",
      title: "Publicité",
      desc: "Campagnes payantes",
      statLabel: "ROI",
      statValue: "85%",
      fillWidth: "85%",
      fillColor: "#8B5CF6",
      toastText: "Publicité (04) : Campagnes payantes. Acquisition rapide de visibilité et de leads via Google Ads, Facebook Ads et LinkedIn Ads."
    },
    {
      number: "05",
      iconClass: "fas fa-share-alt",
      colorClass: "red",
      title: "Social",
      desc: "Réseaux sociaux",
      statLabel: "Engagement",
      statValue: "80%",
      fillWidth: "80%",
      fillColor: "#EF4444",
      toastText: "Social (05) : Réseaux sociaux. Animation de communauté, branding et interaction directe avec les prospects et clients."
    },
    {
      number: "06",
      iconClass: "fas fa-envelope",
      colorClass: "cyan",
      title: "Email",
      desc: "Marketing automation",
      statLabel: "Ouverture",
      statValue: "75%",
      fillWidth: "75%",
      fillColor: "#06B6D4",
      toastText: "Email (06) : Marketing automation. Scénarios de lead nurturing, newsletters ciblées et fidélisation automatisée."
    },
    {
      number: "07",
      iconClass: "fas fa-chart-pie",
      colorClass: "pink",
      title: "Data/CRO",
      desc: "Analytics et optimisation",
      statLabel: "Conversion",
      statValue: "70%",
      fillWidth: "70%",
      fillColor: "#EC4899",
      toastText: "Data/CRO (07) : Analytics et optimisation. Analyse du comportement utilisateur et tests A/B pour maximiser le taux de conversion."
    }
  ];

  return (
    <div className="slide-5">
      {/* Background elements */}
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      {/* Slide Content */}
      <div className="content-wrapper">
        <div className="header animate-fade-in-down">
          <div className="title-section">
            <div className="title-icon">
              <i className="fas fa-columns"></i>
            </div>
            <div>
              <h1 className="main-title">Les 7 piliers du Marketing Digital</h1>
              <div className="subtitle">Architecture complète d'une stratégie marketing efficace</div>
            </div>
          </div>
          <div className="badge" onClick={handleBadgeClick}>
            <i className="fas fa-layer-group" style={{ marginRight: '8px' }}></i>
            Fondamentaux
          </div>
        </div>

        {/* Pillars Cards */}
        <div className="pillars-container">
          {pillars.map((pillar, idx) => (
            <div 
              key={pillar.number} 
              className="pillar animate-fade-in-up" 
              style={{ '--delay': idx + 1 }}
              onClick={() => handlePillarClick(pillar)}
            >
              <div className="pillar-number">{pillar.number}</div>
              <div className={`pillar-icon ${pillar.colorClass}`}>
                <i className={pillar.iconClass}></i>
              </div>
              <div className="pillar-title">{pillar.title}</div>
              <div className="pillar-desc">{pillar.desc}</div>
              <div className="pillar-stats">
                <div className="stat-row">
                  <span className="stat-label">{pillar.statLabel}</span>
                  <span className="stat-value">{pillar.statValue}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: pillar.fillWidth, backgroundColor: pillar.fillColor }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bottom-section animate-fade-in-up" style={{ '--delay': 8 }}>
          <div className="integration-info" onClick={handleIntegrationClick} style={{ cursor: 'pointer' }}>
            <div className="integration-icon">
              <i className="fas fa-link"></i>
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 600, marginBottom: '2px' }}>Intégration complète</div>
              <div style={{ fontSize: '13px' }}>Les 7 piliers travaillent ensemble pour maximiser vos résultats</div>
            </div>
          </div>

          <div className="stats-summary">
            <div className="summary-item" onClick={() => handleSummaryClick('efficacite')}>
              <div className="summary-value" style={{ color: '#3B82F6' }}>98%</div>
              <div className="summary-label">Efficacité</div>
            </div>
            <div className="summary-item" onClick={() => handleSummaryClick('roi')}>
              <div className="summary-value" style={{ color: '#10B981' }}>2.5x</div>
              <div className="summary-label">ROI moyen</div>
            </div>
            <div className="summary-item" onClick={() => handleSummaryClick('croissance')}>
              <div className="summary-value" style={{ color: '#F97316' }}>45%</div>
              <div className="summary-label">Croissance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notifications */}
      <div className="toasts-container">
        {toasts.map((toast) => (
          <div 
            key={toast.id} 
            className="toast-card" 
            style={{ borderLeftColor: toast.colorHex }}
          >
            <div className={`toast-icon ${toast.colorName}`}>
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
