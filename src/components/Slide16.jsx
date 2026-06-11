import React, { useState, useEffect } from 'react';
import './Slide16.css';

export default function Slide16() {
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

  const handlePillarClick = (pillarName) => {
    const details = {
      "SEO Technique": "SEO Technique : Le socle indispensable. Sans structure saine ni vitesse, Google pénalise l'indexation de vos pages.",
      "Contenu & Qualité": "Contenu & Qualité : Le carburant du trafic. Votre contenu doit répondre parfaitement à l'intention de l'internaute.",
      "Popularité": "Popularité / Netlinking : Le signal de confiance majeur. Google évalue la qualité et la quantité de liens pointant vers votre site."
    };
    addToast(details[pillarName] || `Pilier SEO : ${pillarName}`, 'blue');
  };

  const handleItemClick = (pillarName, itemName) => {
    const items = {
      "SEO Technique": {
        "Crawl & Indexation": "Technique : Optimisation du fichier robots.txt, du sitemap XML et réduction des erreurs 404.",
        "Vitesse de chargement": "Technique : Compression d'images, mise en cache navigateur et minification des scripts (Core Web Vitals).",
        "Architecture": "Technique : Structure de navigation en silo, maillage interne et URL propres à niveaux réduits."
      },
      "Contenu & Qualité": {
        "Intention de recherche": "Contenu : Identifier si l'internaute veut acheter (transactionnel) ou s'informer (informationnel).",
        "Qualité du contenu": "Contenu : Rédaction d'articles complets, structurés et répondant aux questions annexes (People Also Ask).",
        "EEAT": "Contenu : Améliorer les signaux d'Expertise, d'Autorité et de Fiabilité en ajoutant des fiches auteurs qualifiées."
      },
      "Popularité": {
        "Backlinks": "Popularité : Campagnes d'articles invités et link baiting sur des sites à fort trafic et thématique connexe.",
        "Mentions": "Popularité : Citations de la marque (même sans lien hypertexte) sur les forums, annuaires et communiqués.",
        "Autorité": "Popularité : Améliorer le score global du nom de domaine via le désaveu de liens toxiques."
      }
    };
    const desc = items[pillarName]?.[itemName] || `${itemName} : Élément clé du pilier ${pillarName}.`;
    const colors = { "SEO Technique": 'blue', "Contenu & Qualité": 'green', "Popularité": 'orange' };
    addToast(desc, colors[pillarName] || 'blue');
  };

  const handleMetricClick = (label, val) => {
    const metricExpls = {
      "Crawl": `Crawl Index : ${val} des pages prioritaires sont correctement parcourues et indexées chaque semaine par Googlebot.`,
      "LCP": `LCP (Vitesse) : Temps de chargement du plus grand élément à ${val} (Bon : ≤ 2.5s).`,
      "Qualité": `Score de Qualité : Niveau d'optimisation sémantique interne à ${val} sur les pages piliers.`,
      "EEAT": `Score EEAT : Note d'évaluation interne de conformité aux directives de confiance Google à ${val}/5.0.`,
      "Backlinks": `Nombre total de domaines référents uniques pointant vers notre site : ${val}.`,
      "DA": `Domain Authority (DA) estimée à ${val}/100. Indicateur de force SEO globale.`
    };
    addToast(metricExpls[label] || `Métrique ${label} : ${val}`, 'green');
  };

  return (
    <div className="slide-16">
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
              <i className="fas fa-search"></i>
            </div>
            <div>
              <h1 className="main-title">SEO - Les 3 Piliers</h1>
              <div className="subtitle">Les fondamentaux du référencement naturel</div>
            </div>
          </div>
          <div className="badge" onClick={() => addToast("Audit des 3 piliers SEO pour la stratégie de visibilité.", "orange")}>
            <i className="fas fa-chart-line" style={{ marginRight: '8px' }}></i>
            3 Piliers
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="pillars-container">
            {/* Technical SEO Card */}
            <div className="pillar-card technical animate-fade-in-up" style={{ '--delay': 1 }} onClick={() => handlePillarClick("SEO Technique")}>
              <div className="pillar-header">
                <div className="pillar-icon blue">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="pillar-info">
                  <div className="pillar-title">SEO Technique</div>
                  <div className="pillar-subtitle">Crawl, vitesse, architecture</div>
                </div>
              </div>
              <div className="pillar-content">
                <div className="pillar-item" onClick={(e) => { e.stopPropagation(); handleItemClick("SEO Technique", "Crawl & Indexation"); }}>
                  <div className="item-icon blue">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Crawl &amp; Indexation</div>
                    <div className="item-desc">Optimiser la capacité des bots à explorer et indexer votre site</div>
                  </div>
                </div>

                <div className="pillar-item" onClick={(e) => { e.stopPropagation(); handleItemClick("SEO Technique", "Vitesse de chargement"); }}>
                  <div className="item-icon blue">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Vitesse de chargement</div>
                    <div className="item-desc">Core Web Vitals, LCP, INP, CLS optimisés</div>
                  </div>
                </div>

                <div className="pillar-item" onClick={(e) => { e.stopPropagation(); handleItemClick("SEO Technique", "Architecture"); }}>
                  <div className="item-icon blue">
                    <i className="fas fa-sitemap"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Architecture</div>
                    <div className="item-desc">Structure du site, URL, navigation interne</div>
                  </div>
                </div>

                <div className="metrics-row" onClick={(e) => e.stopPropagation()}>
                  <div className="metric-item" onClick={() => handleMetricClick("Crawl", "98%")}>
                    <div className="metric-value">98%</div>
                    <div className="metric-label">Crawl</div>
                  </div>
                  <div className="metric-item" onClick={() => handleMetricClick("LCP", "2.1s")}>
                    <div className="metric-value">2.1s</div>
                    <div className="metric-label">LCP</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content SEO Card */}
            <div className="pillar-card content animate-fade-in-up" style={{ '--delay': 2 }} onClick={() => handlePillarClick("Contenu & Qualité")}>
              <div className="pillar-header">
                <div className="pillar-icon green">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="pillar-info">
                  <div className="pillar-title">Contenu &amp; Qualité</div>
                  <div className="pillar-subtitle">Intention, qualité, EEAT</div>
                </div>
              </div>
              <div className="pillar-content">
                <div className="pillar-item" onClick={(e) => { e.stopPropagation(); handleItemClick("Contenu & Qualité", "Intention de recherche"); }}>
                  <div className="item-icon green">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Intention de recherche</div>
                    <div className="item-desc">Aligner le contenu avec l'intention utilisateur</div>
                  </div>
                </div>

                <div className="pillar-item" onClick={(e) => { e.stopPropagation(); handleItemClick("Contenu & Qualité", "Qualité du contenu"); }}>
                  <div className="item-icon green">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Qualité du contenu</div>
                    <div className="item-desc">Contenu original, pertinent, mis à jour régulièrement</div>
                  </div>
                </div>

                <div className="pillar-item" onClick={(e) => { e.stopPropagation(); handleItemClick("Contenu & Qualité", "EEAT"); }}>
                  <div className="item-icon green">
                    <i className="fas fa-user-check"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">EEAT</div>
                    <div className="item-desc">Expertise, Autorité, Confiance client</div>
                  </div>
                </div>

                <div className="metrics-row" onClick={(e) => e.stopPropagation()}>
                  <div className="metric-item" onClick={() => handleMetricClick("Qualité", "95%")}>
                    <div className="metric-value">95%</div>
                    <div className="metric-label">Qualité</div>
                  </div>
                  <div className="metric-item" onClick={() => handleMetricClick("EEAT", "4.8")}>
                    <div className="metric-value">4.8</div>
                    <div className="metric-label">EEAT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popularity Card */}
            <div className="pillar-card popularity animate-fade-in-up" style={{ '--delay': 3 }} onClick={() => handlePillarClick("Popularité")}>
              <div className="pillar-header">
                <div className="pillar-icon orange">
                  <i className="fas fa-link"></i>
                </div>
                <div className="pillar-info">
                  <div className="pillar-title">Popularité</div>
                  <div className="pillar-subtitle">Backlinks, mentions, autorité</div>
                </div>
              </div>
              <div className="pillar-content">
                <div className="pillar-item" onClick={(e) => { e.stopPropagation(); handleItemClick("Popularité", "Backlinks"); }}>
                  <div className="item-icon orange">
                    <i className="fas fa-link"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Backlinks</div>
                    <div className="item-desc">Liens entrants de qualité et pertinence thématique</div>
                  </div>
                </div>

                <div className="pillar-item" onClick={(e) => { e.stopPropagation(); handleItemClick("Popularité", "Mentions"); }}>
                  <div className="item-icon orange">
                    <i className="fas fa-share-alt"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Mentions</div>
                    <div className="item-desc">Présence sur le web et les réseaux sociaux</div>
                  </div>
                </div>

                <div className="pillar-item" onClick={(e) => { e.stopPropagation(); handleItemClick("Popularité", "Autorité"); }}>
                  <div className="item-icon orange">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="item-content">
                    <div className="item-title">Autorité</div>
                    <div className="item-desc">Domain Authority, Page Authority du site</div>
                  </div>
                </div>

                <div className="metrics-row" onClick={(e) => e.stopPropagation()}>
                  <div className="metric-item" onClick={() => handleMetricClick("Backlinks", "2.5K")}>
                    <div className="metric-value">2.5K</div>
                    <div className="metric-label">Backlinks</div>
                  </div>
                  <div className="metric-item" onClick={() => handleMetricClick("DA", "45")}>
                    <div className="metric-value">45</div>
                    <div className="metric-label">DA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section animate-fade-in-up" style={{ '--delay': 4 }}>
          <div className="progress-info">
            <div>Progression: <span style={{ color: 'white', fontWeight: 700 }}>85%</span></div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="action-buttons">
            <button className="action-btn secondary" onClick={() => addToast("Exportation du rapport complet des 3 piliers SEO...", "info")}>
              <i className="fas fa-download"></i>Exporter
            </button>
            <button className="action-btn primary" onClick={() => addToast("Lancement de l'optimisation sémantique et technique globale...", "green")}>
              <i className="fas fa-play"></i>Optimiser
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
