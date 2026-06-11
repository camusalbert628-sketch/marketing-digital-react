import React, { useState, useEffect } from 'react';
import './Slide10.css';

export default function Slide10() {
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
    // Keep maximum 3 toasts visible at a time to prevent overflow
    setToasts((prev) => {
      const updated = [...prev, { id, text, colorName, colorHex }];
      if (updated.length > 3) {
        return updated.slice(updated.length - 3);
      }
      return updated;
    });
  };

  const handleBadgeClick = () => {
    addToast("Analyse : Étude approfondie du marché, des comportements de recherche et de l'audience pour cibler efficacement.", "orange", "#F97316");
  };

  const handleMethodCardClick = () => {
    addToast("Méthodologie : Approche mixte combinant des données primaires et secondaires pour une analyse fiable.", "blue", "#3B82F6");
  };

  const handleMethodItemClick = (num, title, desc) => {
    const details = {
      1: "Desk Research : Analyse approfondie des études sectorielles existantes, rapports d'analyse et publications institutionnelles.",
      2: "Social Listening : Veille active sur les réseaux sociaux et forums pour repérer les tendances émergentes et avis clients.",
      3: "Analyse SERP : Identification des leaders SEO sur les mots-clés stratégiques pour repérer les failles concurrentielles.",
      4: "Sondages & Enquêtes : Administration de questionnaires quantitatifs et qualitatifs auprès de panels ciblés."
    };
    addToast(details[num] || `${title} : ${desc}`, num === 1 ? 'blue' : num === 2 ? 'green' : num === 3 ? 'orange' : 'purple', num === 1 ? '#3B82F6' : num === 2 ? '#10B981' : num === 3 ? '#F97316' : '#8B5CF6');
  };

  const handleToolsCardClick = () => {
    addToast("Outils d'analyse : Sélection de plateformes spécialisées pour auditer la visibilité, le SEO et le trafic.", "green", "#10B981");
  };

  const handleToolItemClick = (name, desc, status) => {
    const details = {
      "Google Trends": "Google Trends (Actif) : Permet de surveiller la popularité des recherches et la saisonnalité des termes dans le temps.",
      "GSC": "Google Search Console (Actif) : Fournit des données précises sur les clics, impressions et mots-clés organiques réels.",
      "SEMrush": "SEMrush (En test) : Suite d'outils SEO/SEA pour analyser les stratégies de mots-clés et les backlinks des concurrents.",
      "Similarweb": "Similarweb (Actif) : Outil d'analyse d'audience pour estimer le trafic global et les sources d'acquisition des concurrents.",
      "SparkToro": "SparkToro (En test) : Outil d'intelligence d'audience qui dévoile ce que vos clients cibles lisent, écoutent et regardent."
    };
    const toastText = details[name] || `${name} (${status}) : ${desc}`;
    const colorHex = status === 'Actif' ? '#10B981' : '#F97316';
    const colorName = status === 'Actif' ? 'green' : 'orange';
    addToast(toastText, colorName, colorHex);
  };

  const handleProgressClick = () => {
    addToast("Progression : 65% des jalons de l'étude de marché digitale ont été validés.", "blue", "#3B82F6");
  };

  const handleExportClick = () => {
    addToast("Exportation : Génération du livrable d'étude de marché en PDF. Téléchargement imminent...", "blue", "#3B82F6");
  };

  const handleStartClick = () => {
    addToast("Lancement : Activation de la phase opérationnelle de collecte et d'analyse.", "green", "#10B981");
  };

  return (
    <div className="slide-10">
      {/* Background patterns */}
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      {/* Content wrapper */}
      <div className="content-wrapper">
        {/* Header */}
        <div className="header animate-fade-in-down">
          <div className="title-section">
            <div className="title-icon">
              <i className="fas fa-search"></i>
            </div>
            <div>
              <h1 className="main-title">Étude de marché digitale</h1>
              <div className="subtitle">Méthodologie et outils pour analyser le marché digital</div>
            </div>
          </div>
          <div className="badge" onClick={handleBadgeClick}>
            <i className="fas fa-chart-bar" style={{ marginRight: '8px' }}></i>
            Analyse
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="main-content">
          {/* Left Column - Methodology */}
          <div className="left-column">
            <div 
              className="section-card animate-fade-in-up" 
              style={{ '--delay': 1 }}
              onClick={handleMethodCardClick}
            >
              <div className="section-header">
                <div className="section-icon blue">
                  <i className="fas fa-clipboard-list"></i>
                </div>
                <h2 className="section-title">Méthodologie</h2>
              </div>

              <div className="method-list">
                <div 
                  className="method-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMethodItemClick(1, "Desk Research", "Analyse des sources existantes...");
                  }}
                >
                  <div className="method-number blue">1</div>
                  <div className="method-content">
                    <h3 className="method-title">Desk Research</h3>
                    <p className="method-desc">Analyse des sources existantes, rapports d'étude, données statistiques et publications sectorielles</p>
                  </div>
                </div>

                <div 
                  className="method-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMethodItemClick(2, "Social Listening", "Surveillance des conversations...");
                  }}
                >
                  <div className="method-number green">2</div>
                  <div className="method-content">
                    <h3 className="method-title">Social Listening</h3>
                    <p className="method-desc">Surveillance des conversations sur les réseaux sociaux et forums pour comprendre les tendances</p>
                  </div>
                </div>

                <div 
                  className="method-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMethodItemClick(3, "Analyse SERP", "Étude des résultats de recherche...");
                  }}
                >
                  <div className="method-number orange">3</div>
                  <div className="method-content">
                    <h3 className="method-title">Analyse SERP</h3>
                    <p className="method-desc">Étude des résultats de recherche pour identifier les opportunités SEO et les concurrents</p>
                  </div>
                </div>

                <div 
                  className="method-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMethodItemClick(4, "Sondages & Enquêtes", "Collecte de données...");
                  }}
                >
                  <div className="method-number purple">4</div>
                  <div className="method-content">
                    <h3 className="method-title">Sondages &amp; Enquêtes</h3>
                    <p className="method-desc">Collecte de données qualitatives et quantitatives auprès des cibles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Analysis Tools */}
          <div className="right-column">
            <div 
              className="section-card animate-fade-in-up" 
              style={{ '--delay': 2 }}
              onClick={handleToolsCardClick}
            >
              <div className="section-header">
                <div className="section-icon green">
                  <i className="fas fa-tools"></i>
                </div>
                <h2 className="section-title">Outils d'analyse</h2>
              </div>

              <div className="tools-grid">
                <div 
                  className="tool-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToolItemClick("Google Trends", "Tendances de recherche", "Actif");
                  }}
                >
                  <div className="tool-icon blue">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="tool-info">
                    <div className="tool-name">Google Trends</div>
                    <div className="tool-desc">Tendances de recherche</div>
                  </div>
                  <span className="status-badge active">Actif</span>
                </div>

                <div 
                  className="tool-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToolItemClick("GSC", "Console de recherche", "Actif");
                  }}
                >
                  <div className="tool-icon green">
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="tool-info">
                    <div className="tool-name">GSC</div>
                    <div className="tool-desc">Console de recherche</div>
                  </div>
                  <span className="status-badge active">Actif</span>
                </div>

                <div 
                  className="tool-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToolItemClick("SEMrush", "Analyse SEO/SEA", "En test");
                  }}
                >
                  <div className="tool-icon orange">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div className="tool-info">
                    <div className="tool-name">SEMrush</div>
                    <div className="tool-desc">Analyse SEO/SEA</div>
                  </div>
                  <span className="status-badge pending">En test</span>
                </div>

                <div 
                  className="tool-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToolItemClick("Similarweb", "Analyse trafic web", "Actif");
                  }}
                >
                  <div className="tool-icon purple">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div className="tool-info">
                    <div className="tool-name">Similarweb</div>
                    <div className="tool-desc">Analyse trafic web</div>
                  </div>
                  <span className="status-badge active">Actif</span>
                </div>

                <div 
                  className="tool-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToolItemClick("SparkToro", "Analyse audience", "En test");
                  }}
                >
                  <div className="tool-icon blue">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="tool-info">
                    <div className="tool-name">SparkToro</div>
                    <div className="tool-desc">Analyse audience</div>
                  </div>
                  <span className="status-badge pending">En test</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section animate-fade-in-up" style={{ '--delay': 3 }}>
          <div className="progress-info" onClick={handleProgressClick} style={{ cursor: 'pointer' }}>
            <div>Progression: <span style={{ color: 'white', fontWeight: 700 }}>65%</span></div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="action-btn secondary" onClick={handleExportClick}>
              <i className="fas fa-download" style={{ marginRight: '10px' }}></i> Exporter
            </button>
            <button className="action-btn primary" onClick={handleStartClick}>
              <i className="fas fa-play" style={{ marginRight: '10px' }}></i> Démarrer
            </button>
          </div>
        </div>
      </div>

      {/* Toast notifications rendering */}
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
