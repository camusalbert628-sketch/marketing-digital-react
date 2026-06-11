import React, { useState, useEffect } from 'react';
import './Slide11.css';

export default function Slide11() {
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

  const handleTagClick = (tagCategory, tagName) => {
    const descriptions = {
      besoins: {
        "ROI mesurable": "Priorité : Justifier chaque euro dépensé avec des indicateurs de performance clairs.",
        "Automatisation": "Objectif : Gagner du temps en automatisant les tâches répétitives de prospection.",
        "Analytics": "Besoin : Centraliser les données de trafic et de conversion pour de meilleures décisions."
      },
      freins: {
        "Budget limité": "Obstacle : Allouer efficacement les ressources sur les canaux les plus rentables.",
        "Temps": "Contrainte : Manque de bande passante pour gérer des campagnes complexes au quotidien.",
        "Expertise": "Besoin : Monter en compétences ou recruter des profils spécialisés en SEO/Ads."
      },
      jobs: {
        "Augmenter leads": "Mission : Générer un flux continu de prospects qualifiés pour l'équipe commerciale.",
        "Réduire CAC": "Mission : Optimiser le coût d'acquisition client par une meilleure conversion."
      },
      canaux: {
        "LinkedIn": "B2B : Canal privilégié pour le social selling et la prospection directe.",
        "Email": "Nurturing : Scénarios automatisés pour engager et convertir les leads dans le temps.",
        "SEO": "Long terme : Construire une visibilité organique durable pour réduire la dépendance aux ads."
      }
    };

    const text = descriptions[tagCategory]?.[tagName] || `${tagName} : Élément clé du profil de Jean Dupont.`;
    const colorMap = { besoins: 'blue', freins: 'orange', jobs: 'green', canaux: 'purple' };
    addToast(text, colorMap[tagCategory] || 'blue');
  };

  const handleStageClick = (stageName) => {
    const stages = {
      "Découverte": "Étape 1 : Le prospect prend conscience de son besoin via nos articles de blog ou posts LinkedIn.",
      "Considération": "Étape 2 : Il compare les solutions en téléchargeant un livre blanc ou en s'inscrivant à un webinar.",
      "Décision": "Étape 3 : Il demande une démonstration ou un devis personnalisé après avoir validé notre expertise.",
      "Fidélisation": "Étape 4 : Il devient client actif et nous l'accompagnons pour maximiser sa satisfaction (upsell/recommandation)."
    };
    addToast(stages[stageName], 'blue');
  };

  const handleTouchpointClick = (category) => {
    const info = {
      "Découverte": "Touchpoints Découverte : SEO organique pour capter la recherche, Réseaux sociaux pour l'audience, Ads display pour la notoriété.",
      "Considération": "Touchpoints Considération : Landing pages ciblées, Email nurturing automatisé, Webinars thématiques d'expertise.",
      "Décision": "Touchpoints Décision : Devis personnalisé détaillé, Démonstration interactive du produit, Support live pour lever les doutes.",
      "Fidélisation": "Touchpoints Fidélisation : Support client réactif, Programme de fidélité exclusif, Offres d'upsell ciblées."
    };
    addToast(info[category], 'green');
  };

  return (
    <div className="slide-11">
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="header animate-fade-in-down">
          <div className="title-section">
            <div className="title-icon">
              <i className="fas fa-user-friends"></i>
            </div>
            <div>
              <h1 className="main-title">Personas &amp; Customer Journey</h1>
              <div className="subtitle">Comprendre votre cible et optimiser le parcours client</div>
            </div>
          </div>
          <div className="badge" onClick={() => addToast("Méthodologie de cartographie orientée conversion client", "info")}>
            <i className="fas fa-route" style={{ marginRight: '8px' }}></i>
            Journey Mapping
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="main-content">
          {/* Left: Persona */}
          <div className="left-column animate-fade-in-up" style={{ '--delay': 1 }}>
            <div className="persona-card">
              <div>
                <div className="persona-header" onClick={() => addToast("Jean Dupont représente le profil type du décideur marketing B2B.", "blue")}>
                  <div className="persona-avatar">JD</div>
                  <div className="persona-info">
                    <div className="persona-name">Jean Dupont</div>
                    <div className="persona-role">Directeur Marketing</div>
                  </div>
                </div>

                <div className="persona-section">
                  <div className="section-title">
                    <i className="fas fa-heart"></i>Besoins
                  </div>
                  <div className="tags-grid">
                    {["ROI mesurable", "Automatisation", "Analytics"].map(tag => (
                      <div key={tag} className="tag" onClick={() => handleTagClick('besoins', tag)}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="persona-section">
                  <div className="section-title">
                    <i className="fas fa-exclamation-triangle"></i>Freins
                  </div>
                  <div className="tags-grid">
                    {["Budget limité", "Temps", "Expertise"].map(tag => (
                      <div key={tag} className="tag" onClick={() => handleTagClick('freins', tag)}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="persona-section">
                  <div className="section-title">
                    <i className="fas fa-briefcase"></i>Jobs-to-be-done
                  </div>
                  <div className="tags-grid">
                    {["Augmenter leads", "Réduire CAC"].map(tag => (
                      <div key={tag} className="tag" onClick={() => handleTagClick('jobs', tag)}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="persona-section" style={{ marginBottom: 0 }}>
                <div className="section-title">
                  <i className="fas fa-bullseye"></i>Canaux
                </div>
                <div className="tags-grid">
                  {["LinkedIn", "Email", "SEO"].map(tag => (
                    <div key={tag} className="tag" onClick={() => handleTagClick('canaux', tag)}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Journey */}
          <div className="right-column animate-fade-in-up" style={{ '--delay': 2 }}>
            <div className="journey-card">
              <div className="journey-header">
                <div className="journey-title">Parcours client - 4 étapes</div>
                <div style={{ color: '#94a3b8', fontSize: '15px', cursor: 'pointer' }} onClick={() => addToast("Durée moyenne observée pour un cycle de vente complet.", "info")}>
                  <i className="fas fa-clock" style={{ marginRight: '8px' }}></i>
                  45 jours
                </div>
              </div>

              <div className="journey-stages">
                <div className="journey-connector"></div>
                <div className="journey-stage" onClick={() => handleStageClick("Découverte")}>
                  <div className="stage-marker blue">
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="stage-name">Découverte</div>
                  <div className="stage-desc">Premier contact</div>
                </div>
                <div className="journey-stage" onClick={() => handleStageClick("Considération")}>
                  <div className="stage-marker green">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="stage-name">Considération</div>
                  <div className="stage-desc">Évaluation</div>
                </div>
                <div className="journey-stage" onClick={() => handleStageClick("Décision")}>
                  <div className="stage-marker orange">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="stage-name">Décision</div>
                  <div className="stage-desc">Achat</div>
                </div>
                <div className="journey-stage" onClick={() => handleStageClick("Fidélisation")}>
                  <div className="stage-marker purple">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="stage-name">Fidélisation</div>
                  <div className="stage-desc">Rétention</div>
                </div>
              </div>

              <div className="touchpoints-grid">
                <div className="touchpoint-card" onClick={() => handleTouchpointClick("Découverte")}>
                  <div className="touchpoint-header">
                    <div className="touchpoint-icon blue">
                      <i className="fas fa-search"></i>
                    </div>
                    <div className="touchpoint-title">Découverte</div>
                  </div>
                  <div className="touchpoint-content">
                    <div className="touchpoint-item"><i className="fas fa-check"></i>SEO organique</div>
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Réseaux sociaux</div>
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Ads display</div>
                  </div>
                </div>

                <div className="touchpoint-card" onClick={() => handleTouchpointClick("Considération")}>
                  <div className="touchpoint-header">
                    <div className="touchpoint-icon green">
                      <i className="fas fa-eye"></i>
                    </div>
                    <div className="touchpoint-title">Considération</div>
                  </div>
                  <div className="touchpoint-content">
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Landing pages</div>
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Email nurturing</div>
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Webinars</div>
                  </div>
                </div>

                <div className="touchpoint-card" onClick={() => handleTouchpointClick("Décision")}>
                  <div className="touchpoint-header">
                    <div className="touchpoint-icon orange">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="touchpoint-title">Décision</div>
                  </div>
                  <div className="touchpoint-content">
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Devis personnalisé</div>
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Démonstration</div>
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Support live</div>
                  </div>
                </div>

                <div className="touchpoint-card" onClick={() => handleTouchpointClick("Fidélisation")}>
                  <div className="touchpoint-header">
                    <div className="touchpoint-icon purple">
                      <i className="fas fa-heart"></i>
                    </div>
                    <div className="touchpoint-title">Fidélisation</div>
                  </div>
                  <div className="touchpoint-content">
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Support client</div>
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Programme fidélité</div>
                    <div className="touchpoint-item"><i className="fas fa-check"></i>Upsell</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="bottom-section animate-fade-in-up" style={{ '--delay': 3 }}>
          <div className="progress-info">
            <div>Progression: <span style={{ color: 'white', fontWeight: 700 }}>75%</span></div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="action-buttons">
            <button className="action-btn secondary" onClick={() => addToast("Exportation des données personas et parcours client...", "info")}>
              <i className="fas fa-download" style={{ marginRight: '10px' }}></i>Exporter
            </button>
            <button className="action-btn primary" onClick={() => addToast("Initialisation du plan d'action commercial...", "green")}>
              <i className="fas fa-play" style={{ marginRight: '10px' }}></i>Démarrer
            </button>
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
