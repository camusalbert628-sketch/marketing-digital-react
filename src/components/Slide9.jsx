import React, { useState, useEffect } from 'react';
import './Slide9.css';

export default function Slide9() {
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
    // Keep at most 3 toasts visible to prevent clutter
    setToasts((prev) => {
      const updated = [...prev, { id, text, colorName, colorHex }];
      if (updated.length > 3) {
        return updated.slice(updated.length - 3);
      }
      return updated;
    });
  };

  const handleBadgeClick = () => {
    addToast("Stratégie : Framework global structuré pour aligner vision marché et exécution tactique.", "orange", "#F97316");
  };

  const handleDiagnosticClick = () => {
    addToast("Diagnostic : Évaluation complète de l'écosystème digital, de la concurrence et du marché pour poser les bases.", "blue", "#3B82F6");
  };

  const handleCiblageClick = () => {
    addToast("Ciblage : Segmentation du marché et définition de profils d'acheteurs types (personas) pour personnaliser l'approche.", "green", "#10B981");
  };

  const handleFlowHeaderClick = () => {
    addToast("Planification : Un accompagnement structuré de 12 semaines pour passer de la théorie à l'implémentation opérationnelle.", "blue", "#3B82F6");
  };

  const handleStageClick = (stageName, status) => {
    const details = {
      "Diagnostic": "Diagnostic : Analyse initiale des forces, faiblesses, opportunités et menaces (SWOT) ainsi que de l'existant digital.",
      "Ciblage": "Ciblage : Identification des personas prioritaires et formalisation de la proposition de valeur.",
      "Objectifs": "Objectifs : Alignement des indicateurs SMART sur le modèle RACE (Reach-Act-Convert-Engage).",
      "Tactiques": "Tactiques : Choix des canaux d'acquisition payants, organiques et de la stratégie de contenu.",
      "Plan": "Plan : Établissement de la feuille de route opérationnelle, planning éditorial et budgets associés.",
      "Mesure": "Mesure : Mise en place des tableaux de bord Analytics et définition des KPI de performance."
    };
    const toastText = `${details[stageName] || stageName} [Statut : ${status}]`;
    const colorHex = status === 'En cours' ? '#10B981' : '#94a3b8';
    const colorName = status === 'En cours' ? 'green' : 'pending';
    addToast(toastText, colorName, colorHex);
  };

  const handleMetricClick = (label, value, colorName, colorHex) => {
    const details = {
      "Complétion": `Avancement global des préparatifs stratégiques estimé à ${value}.`,
      "Semaines": `Durée totale programmée pour le déploiement du framework (${value} semaines).`,
      "Tâches": `${value} livrables et jalons stratégiques identifiés pour ce projet.`,
      "Équipes": `Coordination transversale entre ${value} départements : Marketing, Sales et Product.`
    };
    addToast(details[label] || `${label} : ${value}`, colorName, colorHex);
  };

  const handleProgressClick = () => {
    addToast("Progression : 45% du framework stratégique a été validé et mis en œuvre à ce jour.", "blue", "#3B82F6");
  };

  const handleExportClick = () => {
    addToast("Exportation : Génération du document PDF stratégique en cours... Votre téléchargement démarrera sous peu.", "blue", "#3B82F6");
  };

  const handleStartClick = () => {
    addToast("Initialisation : Démarrage officiel de la phase d'exécution tactique et ouverture des sprints.", "green", "#10B981");
  };

  return (
    <div className="slide-9">
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
              <i className="fas fa-chess"></i>
            </div>
            <div>
              <h1 className="main-title">Stratégie Digitale - Framework</h1>
              <div className="subtitle">Framework complet pour planifier et exécuter votre stratégie marketing</div>
            </div>
          </div>
          <div className="badge" onClick={handleBadgeClick}>
            <i className="fas fa-chart-line" style={{ marginRight: '8px' }}></i>
            Stratégie
          </div>
        </div>

        {/* Framework Grid */}
        <div className="framework-container">
          {/* Left Panel */}
          <div className="left-panel">
            <div 
              className="strategy-card animate-fade-in-up" 
              style={{ '--delay': 1 }}
              onClick={handleDiagnosticClick}
            >
              <div className="card-header">
                <div className="card-icon blue">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="card-title">Diagnostic</h3>
              </div>
              <div className="step-list">
                <div className="step-item">
                  <div className="step-number blue">1</div>
                  <span className="step-text">Analyse du marché</span>
                </div>
                <div className="step-item">
                  <div className="step-number green">2</div>
                  <span className="step-text">Étude de la concurrence</span>
                </div>
                <div className="step-item">
                  <div className="step-number orange">3</div>
                  <span className="step-text">Audit digital complet</span>
                </div>
              </div>
            </div>

            <div 
              className="strategy-card animate-fade-in-up" 
              style={{ '--delay': 2 }}
              onClick={handleCiblageClick}
            >
              <div className="card-header">
                <div className="card-icon green">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="card-title">Ciblage</h3>
              </div>
              <div className="step-list">
                <div className="step-item">
                  <div className="step-number blue">1</div>
                  <span className="step-text">Définition des personas</span>
                </div>
                <div className="step-item">
                  <div className="step-number green">2</div>
                  <span className="step-text">Segmentation du marché</span>
                </div>
                <div className="step-item">
                  <div className="step-number purple">3</div>
                  <span className="step-text">Positionnement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="right-panel">
            <div 
              className="process-flow animate-fade-in-up" 
              style={{ '--delay': 3 }}
            >
              <div className="flow-header" onClick={handleFlowHeaderClick}>
                <h3 className="flow-title">Processus stratégique - 6 étapes</h3>
                <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>
                  <i className="fas fa-clock" style={{ marginRight: '5px' }}></i> 12 semaines
                </div>
              </div>

              <div className="flow-stages">
                <div className="flow-connector"></div>

                <div className="flow-stage" onClick={() => handleStageClick("Diagnostic", "En cours")}>
                  <div className="stage-icon blue"><i className="fas fa-search"></i></div>
                  <h4 className="stage-title">Diagnostic</h4>
                  <p className="stage-desc">Analyse du marché</p>
                  <span className="stage-status active">En cours</span>
                </div>

                <div className="flow-stage" onClick={() => handleStageClick("Ciblage", "En cours")}>
                  <div className="stage-icon green"><i className="fas fa-users"></i></div>
                  <h4 className="stage-title">Ciblage</h4>
                  <p className="stage-desc">Segmentation</p>
                  <span className="stage-status active">En cours</span>
                </div>

                <div className="flow-stage" onClick={() => handleStageClick("Objectifs", "Planifié")}>
                  <div className="stage-icon orange"><i className="fas fa-bullseye"></i></div>
                  <h4 className="stage-title">Objectifs</h4>
                  <p className="stage-desc">SMART/RACE</p>
                  <span className="stage-status pending">Planifié</span>
                </div>

                <div className="flow-stage" onClick={() => handleStageClick("Tactiques", "Planifié")}>
                  <div className="stage-icon purple"><i className="fas fa-tasks"></i></div>
                  <h4 className="stage-title">Tactiques</h4>
                  <p className="stage-desc">Canaux d'action</p>
                  <span className="stage-status pending">Planifié</span>
                </div>

                <div className="flow-stage" onClick={() => handleStageClick("Plan", "Planifié")}>
                  <div className="stage-icon red"><i className="fas fa-calendar-alt"></i></div>
                  <h4 className="stage-title">Plan</h4>
                  <p className="stage-desc">Plan d'action</p>
                  <span className="stage-status pending">Planifié</span>
                </div>

                <div className="flow-stage" onClick={() => handleStageClick("Mesure", "Planifié")}>
                  <div className="stage-icon cyan"><i className="fas fa-chart-line"></i></div>
                  <h4 className="stage-title">Mesure</h4>
                  <p className="stage-desc">KPIs & Analytics</p>
                  <span className="stage-status pending">Planifié</span>
                </div>
              </div>

              {/* Metrics Grid inside process flow panel */}
              <div className="metrics-grid">
                <div 
                  className="metric-card" 
                  onClick={() => handleMetricClick("Complétion", "85%", "blue", "#3B82F6")}
                >
                  <div className="metric-value blue">85%</div>
                  <div className="metric-label">Complétion</div>
                </div>
                <div 
                  className="metric-card" 
                  onClick={() => handleMetricClick("Semaines", "12", "green", "#10B981")}
                >
                  <div className="metric-value green">12</div>
                  <div className="metric-label">Semaines</div>
                </div>
                <div 
                  className="metric-card" 
                  onClick={() => handleMetricClick("Tâches", "24", "orange", "#F97316")}
                >
                  <div className="metric-value orange">24</div>
                  <div className="metric-label">Tâches</div>
                </div>
                <div 
                  className="metric-card" 
                  onClick={() => handleMetricClick("Équipes", "3", "purple", "#8B5CF6")}
                >
                  <div className="metric-value purple">3</div>
                  <div className="metric-label">Équipes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section animate-fade-in-up" style={{ '--delay': 4 }}>
          <div className="progress-info" onClick={handleProgressClick} style={{ cursor: 'pointer' }}>
            <div>Progression: <span style={{ color: 'white', fontWeight: 700 }}>45%</span></div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '45%' }}></div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="action-btn secondary" onClick={handleExportClick}>
              <i className="fas fa-download" style={{ marginRight: '8px' }}></i> Exporter
            </button>
            <button className="action-btn primary" onClick={handleStartClick}>
              <i className="fas fa-play" style={{ marginRight: '8px' }}></i> Démarrer
            </button>
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
