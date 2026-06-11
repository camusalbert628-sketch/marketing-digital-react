import React, { useState, useEffect } from 'react';
import './Slide6.css';

export default function Slide6() {
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

  const handlePointClick = (point) => {
    addToast(point.toastText, point.colorClass, point.colorHex);
  };

  const handleStatClick = (statKey) => {
    const statsInfo = {
      ecommerce: {
        text: "Croissance e-commerce (+156%) : Augmentation sans précédent des parts de marché des ventes en ligne par rapport au commerce traditionnel.",
        colorName: "blue",
        colorHex: "#3B82F6"
      },
      ga4: {
        text: "Adoption GA4 (+89%) : Standardisation de la nouvelle plateforme de tracking analytique de Google suite à l'arrêt d'Universal Analytics.",
        colorName: "green",
        colorHex: "#10B981"
      },
      ia: {
        text: "Usage de l'IA (+234%) : Intégration massive des outils d'IA générative dans les processus de rédaction, design et ciblage publicitaire.",
        colorName: "orange",
        colorHex: "#F97316"
      },
      mobile: {
        text: "Trafic Mobile (+78%) : Le mobile confirme son statut de point de contact privilégié et majoritaire des consommateurs sur le web.",
        colorName: "purple",
        colorHex: "#8B5CF6"
      }
    };

    const stat = statsInfo[statKey];
    addToast(stat.text, stat.colorName, stat.colorHex);
  };

  const handleBadgeClick = () => {
    addToast("Frise historique : Une analyse rétrospective et prospective des transformations majeures de notre secteur sur une période de 6 ans.", "orange", "#F97316");
  };

  const handleInsightClick = () => {
    addToast("Insight : L'avenir du marketing repose sur l'hyper-personnalisation en temps réel assistée par l'intelligence artificielle agentique.", "blue", "#3B82F6");
  };

  const handleTrendClick = () => {
    addToast("Tendance : Les budgets alloués au marketing digital prévoient une hausse moyenne de 45% dans les prochaines années.", "purple", "#8B5CF6");
  };

  const timelinePoints = [
    {
      markerClass: "blue",
      colorClass: "blue",
      colorHex: "#3B82F6",
      iconClass: "fas fa-shopping-cart",
      title: "2020-2021",
      period: "Boom e-commerce",
      desc: "Explosion du e-commerce, social commerce, livraison express. Adoption massive du digital.",
      tags: ["E-commerce", "Social commerce"],
      toastText: "2020-2021 : Accélération forcée par la crise sanitaire globale. Le commerce en ligne est devenu le canal d'achat principal."
    },
    {
      markerClass: "green",
      colorClass: "green",
      colorHex: "#10B981",
      iconClass: "fas fa-lock",
      title: "2022-2023",
      period: "Privacy & GA4",
      desc: "GA4, iOS ATT, RGPD renforcé. Protection des données personnelles.",
      tags: ["Privacy", "GA4"],
      toastText: "2022-2023 : Fin progressive des cookies tiers et déploiement de GA4. La protection de la vie privée redéfinit le ciblage."
    },
    {
      markerClass: "orange",
      colorClass: "orange",
      colorHex: "#F97316",
      iconClass: "fas fa-robot",
      title: "2024-2025",
      period: "IA Générative",
      desc: "IA générative, PMax, INP, search multimodal. Révolution de la recherche.",
      tags: ["IA", "PMax"],
      toastText: "2024-2025 : L'IA générative (ChatGPT, Midjourney) révolutionne la création de contenu et l'automatisation des campagnes."
    },
    {
      markerClass: "purple",
      colorClass: "purple",
      colorHex: "#8B5CF6",
      iconClass: "fas fa-brain",
      title: "2026+",
      period: "Future",
      desc: "IA avancée, voice search, AR/VR. Nouvelle ère du marketing.",
      tags: ["AI", "AR/VR"],
      toastText: "2026+ : Émergence de l'IA agentique, de la recherche vocale avancée et des expériences immersives en réalité mixte."
    }
  ];

  return (
    <div className="slide-6">
      {/* Background patterns */}
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      {/* Slide Layout Content */}
      <div className="content-wrapper">
        {/* Header */}
        <div className="header animate-fade-in-down">
          <div className="title-section">
            <div className="title-icon">
              <i className="fas fa-timeline"></i>
            </div>
            <div>
              <h1 className="main-title">Évolution 2020-2026</h1>
              <div className="subtitle">Les grandes transformations du marketing digital</div>
            </div>
          </div>
          <div className="badge" onClick={handleBadgeClick}>
            <i className="fas fa-clock" style={{ marginRight: '8px' }}></i>
            6 ans d'évolution
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-container">
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="timeline-points">
              {timelinePoints.map((point, idx) => (
                <div key={point.title} className="timeline-point">
                  <div className={`point-marker ${point.markerClass}`}></div>
                  <div 
                    className="point-content animate-fade-in-up" 
                    style={{ '--delay': idx + 1 }}
                    onClick={() => handlePointClick(point)}
                  >
                    <div className="point-header">
                      <div className={`point-icon ${point.colorClass}`}>
                        <i className={point.iconClass}></i>
                      </div>
                      <h3 className="point-title">{point.title}</h3>
                    </div>
                    <div className="point-period">{point.period}</div>
                    <p className="point-description">{point.desc}</p>
                    <div className="point-tags">
                      {point.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="stats-row animate-fade-in-up" style={{ '--delay': 5 }}>
            <div className="stat-item" onClick={() => handleStatClick('ecommerce')}>
              <div className="stat-value" style={{ color: '#3B82F6' }}>+156%</div>
              <div className="stat-label">Croissance e-commerce</div>
            </div>
            <div className="stat-item" onClick={() => handleStatClick('ga4')}>
              <div className="stat-value" style={{ color: '#10B981' }}>+89%</div>
              <div className="stat-label">Adoption GA4</div>
            </div>
            <div className="stat-item" onClick={() => handleStatClick('ia')}>
              <div className="stat-value" style={{ color: '#F97316' }}>+234%</div>
              <div className="stat-label">Usage IA</div>
            </div>
            <div className="stat-item" onClick={() => handleStatClick('mobile')}>
              <div className="stat-value" style={{ color: '#8B5CF6' }}>+78%</div>
              <div className="stat-label">Mobile traffic</div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bottom-section animate-fade-in-up" style={{ '--delay': 6 }}>
          <div className="key-insight" onClick={handleInsightClick}>
            <div className="insight-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div>Le marketing digital évolue vers l'IA et la personnalisation</div>
          </div>
          <div 
            style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}
            onClick={handleTrendClick}
          >
            <i className="fas fa-chart-line" style={{ marginRight: '8px' }}></i>
            Tendance: +45% de croissance prévue
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
