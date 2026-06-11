import React, { useState, useEffect } from 'react';
import './Slide12.css';

export default function Slide12() {
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

  const handleObjectiveClick = (objectiveTitle) => {
    const details = {
      "Augmenter le trafic organique": "Plan d'action : Audit sémantique, création de 12 cocons sémantiques et optimisation de la vitesse mobile pour passer le score PageSpeed au-dessus de 90.",
      "Réduire le CPL": "Plan d'action : A/B testing sur les audiences LinkedIn Ads, exclusion des zones non performantes et refonte graphique des landing pages à fort trafic.",
      "Augmenter le taux d'activation": "Plan d'action : Intégration d'un guide interactif pas-à-pas à la première connexion, envoi de séquences email personnalisées en cas d'inactivité.",
      "Augmenter le taux de conversion": "Plan d'action : Simplification du formulaire de contact (3 champs au lieu de 7), ajout d'avis clients Trustpilot et de garanties de sécurité."
    };
    addToast(details[objectiveTitle] || `Détails pour l'objectif : ${objectiveTitle}`, 'blue');
  };

  const handleKpiClick = (kpiText) => {
    addToast(`Indicateur Clé de Performance ciblé : ${kpiText}. Mesuré mensuellement par rapport à la période précédente.`, 'green');
  };

  const handleStatusClick = (statusText) => {
    const statusInfos = {
      "En cours": "Statut - En cours : Des tâches de ce projet sont activement traitées par l'équipe marketing.",
      "En attente": "Statut - En attente : Ce projet débutera dès validation de la phase technique précédente.",
      "Terminé": "Statut - Terminé : Objectif atteint avec succès dans les délais impartis. Suivi des performances en cours."
    };
    addToast(statusInfos[statusText] || `Statut actuel de la tâche.`, 'purple');
  };

  return (
    <div className="slide-12">
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
              <i className="fas fa-bullseye"></i>
            </div>
            <div>
              <h1 className="main-title">Objectifs SMART - Exemples</h1>
              <div className="subtitle">Tableau d'objectifs mesurables et traçables</div>
            </div>
          </div>
          <div className="badge" onClick={() => addToast("Plan marketing 2026 : alignement stratégique sur 8 objectifs SMART.", "orange")}>
            <i className="fas fa-chart-line" style={{ marginRight: '8px' }}></i>
            8 objectifs
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="table-container animate-fade-in-up" style={{ '--delay': 1 }}>
            <div className="table-header">
              <div className="table-title">Liste des objectifs SMART</div>
              <div className="table-actions">
                <button className="action-btn secondary" onClick={() => addToast("Filtrage des objectifs (Optionnel)", "info")}>
                  <i className="fas fa-filter"></i>Filtrer
                </button>
                <button className="action-btn primary" onClick={() => addToast("Ajouter un nouvel objectif SMART personnalisé", "green")}>
                  <i className="fas fa-plus"></i>Ajouter
                </button>
              </div>
            </div>

            <div className="smart-table">
              <div className="table-row header">
                <div className="table-cell header-cell">Objectif</div>
                <div className="table-cell header-cell">KPI</div>
                <div className="table-cell header-cell">Cible</div>
                <div className="table-cell header-cell">Échéance</div>
                <div className="table-cell header-cell">État</div>
              </div>

              {/* Row 1 */}
              <div className="table-row" onClick={() => handleObjectiveClick("Augmenter le trafic organique")}>
                <div className="table-cell">
                  <div className="objective-cell">
                    <div className="objective-title">Augmenter le trafic organique</div>
                    <div className="objective-desc">Optimisation SEO et contenu</div>
                  </div>
                </div>
                <div className="table-cell">
                  <div className="kpi-badge green" onClick={(e) => { e.stopPropagation(); handleKpiClick("+30%"); }}>
                    <i className="fas fa-chart-line"></i>+30%
                  </div>
                </div>
                <div className="table-cell">
                  <div className="target-value">+30%</div>
                  <div className="progress-bar">
                    <div className="progress-fill green" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="table-cell">
                  <div className="deadline">
                    <i className="fas fa-calendar"></i>6 mois
                  </div>
                </div>
                <div className="table-cell">
                  <div className="status-badge active" onClick={(e) => { e.stopPropagation(); handleStatusClick("En cours"); }}>
                    <i className="fas fa-check-circle"></i>En cours
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="table-row" onClick={() => handleObjectiveClick("Réduire le CPL")}>
                <div className="table-cell">
                  <div className="objective-cell">
                    <div className="objective-title">Réduire le CPL</div>
                    <div className="objective-desc">Optimisation des campagnes ads</div>
                  </div>
                </div>
                <div className="table-cell">
                  <div className="kpi-badge blue" onClick={(e) => { e.stopPropagation(); handleKpiClick("< 8€"); }}>
                    <i className="fas fa-euro-sign"></i>&lt; 8€
                  </div>
                </div>
                <div className="table-cell">
                  <div className="target-value">&lt; 8€</div>
                  <div className="progress-bar">
                    <div className="progress-fill blue" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="table-cell">
                  <div className="deadline">
                    <i className="fas fa-calendar"></i>90 jours
                  </div>
                </div>
                <div className="table-cell">
                  <div className="status-badge pending" onClick={(e) => { e.stopPropagation(); handleStatusClick("En attente"); }}>
                    <i className="fas fa-clock"></i>En attente
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="table-row" onClick={() => handleObjectiveClick("Augmenter le taux d'activation")}>
                <div className="table-cell">
                  <div className="objective-cell">
                    <div className="objective-title">Augmenter le taux d'activation</div>
                    <div className="objective-desc">Amélioration onboarding</div>
                  </div>
                </div>
                <div className="table-cell">
                  <div className="kpi-badge orange" onClick={(e) => { e.stopPropagation(); handleKpiClick("+15%"); }}>
                    <i className="fas fa-percentage"></i>+15%
                  </div>
                </div>
                <div className="table-cell">
                  <div className="target-value">+15%</div>
                  <div className="progress-bar">
                    <div className="progress-fill orange" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="table-cell">
                  <div className="deadline">
                    <i className="fas fa-calendar"></i>Q3 2026
                  </div>
                </div>
                <div className="table-cell">
                  <div className="status-badge active" onClick={(e) => { e.stopPropagation(); handleStatusClick("En cours"); }}>
                    <i className="fas fa-check-circle"></i>En cours
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="table-row" style={{ borderBottom: 'none' }} onClick={() => handleObjectiveClick("Augmenter le taux de conversion")}>
                <div className="table-cell">
                  <div className="objective-cell">
                    <div className="objective-title">Augmenter le taux de conversion</div>
                    <div className="objective-desc">Optimisation landing pages</div>
                  </div>
                </div>
                <div className="table-cell">
                  <div className="kpi-badge purple" onClick={(e) => { e.stopPropagation(); handleKpiClick("+25%"); }}>
                    <i className="fas fa-shopping-cart"></i>+25%
                  </div>
                </div>
                <div className="table-cell">
                  <div className="target-value">+25%</div>
                  <div className="progress-bar">
                    <div className="progress-fill green" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="table-cell">
                  <div className="deadline">
                    <i className="fas fa-calendar"></i>3 mois
                  </div>
                </div>
                <div className="table-cell">
                  <div className="status-badge completed" onClick={(e) => { e.stopPropagation(); handleStatusClick("Terminé"); }}>
                    <i className="fas fa-check-circle"></i>Terminé
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom section */}
          <div className="bottom-section animate-fade-in-up" style={{ '--delay': 2 }}>
            <div className="progress-info">
              <div style={{ cursor: 'pointer' }} onClick={() => addToast("Moyenne pondérée d'avancement des objectifs marketing.", "info")}>
                Progression globale: <span style={{ color: 'white', fontWeight: 700 }}>68%</span>
              </div>
              <div className="stats-grid">
                <div className="stat-item" style={{ cursor: 'pointer' }} onClick={() => addToast("6 objectifs sur les 8 définis sont actuellement validés ou actifs.", "green")}>
                  <i className="fas fa-check-circle" style={{ color: '#10B981' }}></i>
                  <span className="stat-value">6/8</span>
                  <span>complétés</span>
                </div>
                <div className="stat-item" style={{ cursor: 'pointer' }} onClick={() => addToast("Nombre de jours restants avant la prochaine revue trimestrielle.", "orange")}>
                  <i className="fas fa-clock" style={{ color: '#3B82F6' }}></i>
                  <span className="stat-value">45</span>
                  <span>jours restants</span>
                </div>
              </div>
            </div>
            <div style={{ color: '#64748b', fontSize: '13px' }}>Dernière mise à jour: Aujourd'hui</div>
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
