import React, { useState, useEffect } from 'react';
import './Slide2.css';

export default function Slide2() {
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

  const handleObjectiveClick = (index) => {
    const info = [
      "Apprenez à concevoir une stratégie globale, piloter des budgets publicitaires et coordonner les canaux.",
      "Maîtrisez les algorithmes de Google : audit technique, sémantique avancée, netlinking et réputation.",
      "Prenez le contrôle de GA4, configurez Google Tag Manager et concevez des rapports décisionnels Looker Studio."
    ];
    addToast(info[index], 'blue');
  };

  const handleTargetClick = (target) => {
    const info = {
      debutants: "Reconversion ou entrepreneurs : Aucun prérequis nécessaire. Nous reprenons les bases de zéro.",
      intermediaires: "Marketeurs en poste : Structurez vos acquis, montez en compétences techniques et devenez autonomes.",
      pros: "Experts & Consultants : Boostez vos process grâce à l'automatisation avancée et l'intégration de l'IA."
    };
    addToast(info[target], 'green');
  };

  const handleBenefitClick = (benefit) => {
    const info = {
      modules: "Accédez à un programme ultra-complet découpé en modules courts et assimilables.",
      heures: "Contenu vidéo de haute qualité avec ateliers pratiques de mise en œuvre immédiate.",
      outils: "Manipulez les outils indispensables du secteur (SEMrush, Ads Manager, GTM, Zapier...).",
      certification: "Validez vos compétences par un certificat de réussite valorisable sur LinkedIn."
    };
    addToast(info[benefit], 'orange');
  };

  const handleDeliverableClick = (deliverable) => {
    const info = {
      templates: "Checklists SEO, cahiers des charges d'audits, modèles de rapports Looker Studio prêts à l'emploi.",
      videos: "Accès à vie 24h/24 et 7j/7, incluant toutes les futures mises à jour gratuites de la formation."
    };
    addToast(info[deliverable], 'purple');
  };

  const handleBadgeClick = () => {
    addToast("Formation certifiée et éligible au CPF/OPCO", "info");
  };

  return (
    <div className="slide-2">
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
              <i className="fas fa-info-circle"></i>
            </div>
            <div>
              <h1 className="main-title">À propos de cette formation</h1>
              <div className="subtitle">Maîtrisez le marketing digital de A à Z</div>
            </div>
          </div>
          <div className="badge" onClick={handleBadgeClick}>
            <i className="fas fa-star" style={{ marginRight: '8px' }}></i>
            Formation Complète 2026
          </div>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Card 1: Objectifs */}
            <div className="card animate-fade-in-up" style={{ '--delay': 1 }}>
              <div className="card-header">
                <div className="card-icon blue">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="card-title">Objectifs principaux</div>
              </div>
              <div className="card-content">
                <div className="item-row" onClick={() => handleObjectiveClick(0)}>
                  <div className="item-icon blue">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Maîtriser les stratégies marketing</div>
                    <div className="item-desc">Apprenez à créer et exécuter des campagnes marketing efficaces sur tous les canaux</div>
                  </div>
                </div>
                <div className="item-row" onClick={() => handleObjectiveClick(1)}>
                  <div className="item-icon blue">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Optimiser le SEO</div>
                    <div className="item-desc">Techniques avancées de référencement naturel et payant</div>
                  </div>
                </div>
                <div className="item-row" onClick={() => handleObjectiveClick(2)}>
                  <div className="item-icon blue">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Analyser les données</div>
                    <div className="item-desc">Utilisation des outils analytics pour mesurer les performances</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Public cible */}
            <div className="card animate-fade-in-up" style={{ '--delay': 2 }}>
              <div className="card-header">
                <div className="card-icon green">
                  <i className="fas fa-users"></i>
                </div>
                <div className="card-title">Public cible</div>
              </div>
              <div className="card-content">
                <div className="stats-row">
                  <div className="stat-item" onClick={() => handleTargetClick('debutants')}>
                    <div className="stat-number" style={{ color: '#3B82F6' }}>Débutants</div>
                    <div className="stat-label">0-2 ans d'exp</div>
                  </div>
                  <div className="stat-item" onClick={() => handleTargetClick('intermediaires')}>
                    <div className="stat-number" style={{ color: '#10B981' }}>Intermédiaires</div>
                    <div className="stat-label">2-5 ans d'exp</div>
                  </div>
                  <div className="stat-item" onClick={() => handleTargetClick('pros')}>
                    <div className="stat-number" style={{ color: '#F97316' }}>Pros</div>
                    <div className="stat-label">5+ ans d'exp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Card 3: Bénéfices */}
            <div className="card animate-fade-in-up" style={{ '--delay': 3 }}>
              <div className="card-header">
                <div className="card-icon orange">
                  <i className="fas fa-gift"></i>
                </div>
                <div className="card-title">Bénéfices clés</div>
              </div>
              <div className="card-content">
                <div className="checklist">
                  <div className="check-item" onClick={() => handleBenefitClick('modules')}>
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="check-text">40+ modules de formation complets</div>
                  </div>
                  <div className="check-item" onClick={() => handleBenefitClick('heures')}>
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="check-text">200+ heures de contenu pratique</div>
                  </div>
                  <div className="check-item" onClick={() => handleBenefitClick('outils')}>
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="check-text">50+ outils couverts en détail</div>
                  </div>
                  <div className="check-item" onClick={() => handleBenefitClick('certification')}>
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="check-text">Certification reconnue</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Livrables */}
            <div className="card animate-fade-in-up" style={{ '--delay': 4 }}>
              <div className="card-header">
                <div className="card-icon purple">
                  <i className="fas fa-box"></i>
                </div>
                <div className="card-title">Livrables</div>
              </div>
              <div className="card-content">
                <div className="item-row" onClick={() => handleDeliverableClick('templates')}>
                  <div className="item-icon blue">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Templates et checklists</div>
                    <div className="item-desc">Documents prêts à l'emploi pour vos projets</div>
                  </div>
                </div>
                <div className="item-row" onClick={() => handleDeliverableClick('videos')}>
                  <div className="item-icon green">
                    <i className="fas fa-video"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Vidéos tutorielles</div>
                    <div className="item-desc">Accès illimité aux formations</div>
                  </div>
                </div>
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
