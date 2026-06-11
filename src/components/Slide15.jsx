import React, { useState, useEffect } from 'react';
import './Slide15.css';

export default function Slide15() {
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

  const handleStageClick = (stageIndex, stageName) => {
    const explanations = {
      1: "Accroche (Hook) : Interpellez votre lecteur immédiatement. Utilisez une contradiction, un chiffre surprenant ou une question ouverte.",
      2: "Conflit/Problème : Personnalisez l'obstacle. Identifiez l'antagoniste (ex: le manque de temps ou la complexité technique) pour susciter l'empathie.",
      3: "Guide/Solution : Présentez votre marque comme le mentor (guide) qui fournit l'outil ou le plan (solution) pour réussir.",
      4: "Transformation : Montrez l'avant/après. Comment le client se sent-il ou travaille-t-il mieux après avoir résolu son problème ?",
      5: "Preuves sociales : Validez la promesse avec des éléments irréfutables (témoignages clients, résultats chiffrés, labels).",
      6: "Appel à l'action (CTA) : Indiquez exactement l'étape suivante. Ne laissez pas le lecteur deviner ce qu'il doit faire."
    };
    const colors = { 1: 'blue', 2: 'green', 3: 'orange', 4: 'purple', 5: 'orange', 6: 'blue' };
    addToast(explanations[stageIndex] || `Étape ${stageIndex} : ${stageName}`, colors[stageIndex] || 'blue');
  };

  return (
    <div className="slide-15">
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
              <i className="fas fa-book-open"></i>
            </div>
            <div>
              <h1 className="main-title">Storytelling - Structure Narrative</h1>
              <div className="subtitle">Arc narratif complet pour créer des histoires engageantes</div>
            </div>
          </div>
          <div className="badge" onClick={() => addToast("Méthodologie du StoryBrand 7-part framework appliqué au digital.", "orange")}>
            <i className="fas fa-theater-masks" style={{ marginRight: '8px' }}></i>
            6 Étapes
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="narrative-container">
            {/* Left Panel */}
            <div className="left-panel animate-fade-in-up" style={{ '--delay': 1 }}>
              <div className="story-card">
                <div className="card-header">
                  <div className="card-icon blue">
                    <i className="fas fa-layer-group"></i>
                  </div>
                  <div className="card-title">Éléments clés</div>
                </div>
                <div className="story-elements">
                  {[
                    { idx: 1, text: "Hook - Accroche immédiate", cls: 'blue' },
                    { idx: 2, text: "Conflit - Problème à résoudre", cls: 'green' },
                    { idx: 3, text: "Guide - Solution apportée", cls: 'orange' },
                    { idx: 4, text: "Transformation - Changement", cls: 'purple' },
                    { idx: 5, text: "Preuves - Validation", cls: 'blue' },
                    { idx: 6, text: "CTA - Appel à l'action", cls: 'green' }
                  ].map(el => (
                    <div key={el.idx} className="element-item" onClick={() => handleStageClick(el.idx, el.text)}>
                      <div className={`element-icon ${el.cls}`}>{el.idx}</div>
                      <div className="element-text">{el.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="right-panel animate-fade-in-up" style={{ '--delay': 2 }}>
              <div className="journey-card">
                <div className="journey-header">
                  <div className="journey-title">Parcours narratif - 6 étapes</div>
                  <div className="journey-progress" onClick={() => addToast("Avancement de la rédaction de l'histoire de marque.", "info")}>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '75%' }}></div>
                    </div>
                    <span>75%</span>
                  </div>
                </div>

                <div className="journey-stages">
                  {/* Stage 1 */}
                  <div className="stage-row animate-fade-in-up" style={{ '--delay': 2.5 }} onClick={() => handleStageClick(1, "Hook")}>
                    <div className="stage-number blue">1</div>
                    <div className="stage-content">
                      <div className="stage-info">
                        <div className="stage-name">Hook (Accroche)</div>
                        <div className="stage-desc">Capturer l'attention en 3 secondes avec une phrase d'accroche puissante</div>
                      </div>
                      <div className="stage-status active">
                        <i className="fas fa-check-circle"></i>
                        <span>En cours</span>
                      </div>
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className="stage-row animate-fade-in-up" style={{ '--delay': 3 }} onClick={() => handleStageClick(2, "Conflit")}>
                    <div className="stage-number green">2</div>
                    <div className="stage-content">
                      <div className="stage-info">
                        <div className="stage-name">Conflit/Problème</div>
                        <div className="stage-desc">Présenter le problème ou la douleur que le client ressent</div>
                      </div>
                      <div className="stage-status active">
                        <i className="fas fa-check-circle"></i>
                        <span>En cours</span>
                      </div>
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className="stage-row animate-fade-in-up" style={{ '--delay': 3.5 }} onClick={() => handleStageClick(3, "Guide")}>
                    <div className="stage-number orange">3</div>
                    <div className="stage-content">
                      <div className="stage-info">
                        <div className="stage-name">Guide/Solution</div>
                        <div className="stage-desc">Introduire le guide ou la solution qui résout le problème</div>
                      </div>
                      <div className="stage-status pending">
                        <i className="fas fa-clock"></i>
                        <span>En attente</span>
                      </div>
                    </div>
                  </div>

                  {/* Stage 4 */}
                  <div className="stage-row animate-fade-in-up" style={{ '--delay': 4 }} onClick={() => handleStageClick(4, "Transformation")}>
                    <div className="stage-number purple">4</div>
                    <div className="stage-content">
                      <div className="stage-info">
                        <div className="stage-name">Transformation</div>
                        <div className="stage-desc">Montrer la transformation positive après la solution</div>
                      </div>
                      <div className="stage-status pending">
                        <i className="fas fa-clock"></i>
                        <span>En attente</span>
                      </div>
                    </div>
                  </div>

                  {/* Stage 5 */}
                  <div className="stage-row animate-fade-in-up" style={{ '--delay': 4.5 }} onClick={() => handleStageClick(5, "Preuves")}>
                    <div className="stage-number red">5</div>
                    <div className="stage-content">
                      <div className="stage-info">
                        <div className="stage-name">Preuves sociales</div>
                        <div className="stage-desc">Témoignages, études de cas, statistiques</div>
                      </div>
                      <div className="stage-status pending">
                        <i className="fas fa-clock"></i>
                        <span>En attente</span>
                      </div>
                    </div>
                  </div>

                  {/* Stage 6 */}
                  <div className="stage-row animate-fade-in-up" style={{ '--delay': 5 }} onClick={() => handleStageClick(6, "CTA")}>
                    <div className="stage-number cyan">6</div>
                    <div className="stage-content">
                      <div className="stage-info">
                        <div className="stage-name">Appel à l'action</div>
                        <div className="stage-desc">CTA clair et direct pour inciter à l'action</div>
                      </div>
                      <div className="stage-status pending">
                        <i className="fas fa-clock"></i>
                        <span>En attente</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section animate-fade-in-up" style={{ '--delay': 5.5 }}>
          <div className="progress-info">
            <div>Progression: <span style={{ color: 'white', fontWeight: 700 }}>75%</span></div>
            <div style={{ color: '#64748b', fontSize: '13px' }}>Dernière mise à jour: Aujourd'hui</div>
          </div>
          <div className="action-buttons">
            <button className="action-btn secondary" onClick={() => addToast("Exportation du squelette narratif de marque...", "info")}>
              <i className="fas fa-download"></i>Exporter
            </button>
            <button className="action-btn primary" onClick={() => addToast("Démarrage de l'éditeur de Storytelling guidé...", "green")}>
              <i className="fas fa-play"></i>Démarrer
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
