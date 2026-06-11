import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Slide20.css';

const tools = [
  { name: 'PageSpeed', desc: 'Analyse performance', icon: 'fa-stopwatch', colorClass: 'blue', toast: "PageSpeed Insights : Analyse les performances réelles et de laboratoire et fournit des suggestions d'optimisation." },
  { name: 'Lighthouse', desc: 'Audit complet', icon: 'fa-lightbulb', colorClass: 'green', toast: "Lighthouse : Exécute des audits automatisés de performance, accessibilité et SEO en environnement contrôlé." },
  { name: 'CrUX', desc: 'Données réelles', icon: 'fa-chart-bar', colorClass: 'orange', toast: "Chrome User Experience Report (CrUX) : Fournit des métriques de performance réelles basées sur l'expérience utilisateur de Chrome." },
  { name: 'GSC', desc: 'Search Console', icon: 'fa-search', colorClass: 'purple', toast: "Google Search Console : Fournit des rapports détaillés sur les Core Web Vitals de l'ensemble du site." }
];

const imgOptimizations = [
  { icon: 'fa-compress', colorClass: 'blue', text: 'Compression WebP/AVIF', toast: "Compression WebP/AVIF : Divise par 3 le poids des images par rapport au JPEG/PNG sans perte de qualité." },
  { icon: 'fa-expand', colorClass: 'green', text: 'Dimensions adaptées', toast: "Dimensions adaptées : Déclarer les attributs width et height empêche les décalages de mise en page (CLS)." },
  { icon: 'fa-history', colorClass: 'orange', text: 'Lazy loading', toast: "Lazy loading : Diffère le chargement des images hors écran pour économiser la bande passante et accélérer le LCP." }
];

const codeOptimizations = [
  { icon: 'fa-file-code', colorClass: 'blue', text: 'Minification CSS/JS', toast: "Minification CSS/JS : Supprime les espaces et commentaires inutiles pour accélérer le téléchargement des scripts." },
  { icon: 'fa-server', colorClass: 'green', text: 'Compression Gzip/Brotli', toast: "Compression Gzip/Brotli : Algorithme de compression côté serveur réduisant drastiquement le poids des fichiers transférés." },
  { icon: 'fa-font', colorClass: 'orange', text: 'Font-display: swap', toast: "Font-display swap : Affiche une police système temporaire pour rendre le texte immédiatement lisible pendant le chargement." }
];

export default function Slide20() {
  const [toasts, setToasts] = useState([]);
  const lcpRef = useRef(null);
  const inpRef = useRef(null);
  const clsRef = useRef(null);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = (text, type = 'blue') => {
    setToasts((prev) => [...prev, { id: Date.now(), text, type }]);
  };

  useEffect(() => {
    let lcpChart = null;
    let inpChart = null;
    let clsChart = null;
    let timerId = null;

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { display: false },
        y: { display: false }
      }
    };

    // Delay initialization slightly to let the parent layout finalize its size
    timerId = setTimeout(() => {
      if (lcpRef.current) {
        lcpChart = new Chart(lcpRef.current, {
          type: 'line',
          data: {
            labels: ['J-6', 'J-5', 'J-4', 'J-3', 'J-2', 'J-1', 'J'],
            datasets: [{
              data: [2.8, 2.5, 2.3, 2.1, 2.0, 2.1, 2.1],
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 0
            }]
          },
          options: chartOptions
        });
      }

      if (inpRef.current) {
        inpChart = new Chart(inpRef.current, {
          type: 'line',
          data: {
            labels: ['J-6', 'J-5', 'J-4', 'J-3', 'J-2', 'J-1', 'J'],
            datasets: [{
              data: [220, 200, 190, 185, 180, 182, 180],
              borderColor: '#10B981',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 0
            }]
          },
          options: chartOptions
        });
      }

      if (clsRef.current) {
        clsChart = new Chart(clsRef.current, {
          type: 'line',
          data: {
            labels: ['J-6', 'J-5', 'J-4', 'J-3', 'J-2', 'J-1', 'J'],
            datasets: [{
              data: [0.15, 0.12, 0.08, 0.06, 0.05, 0.05, 0.05],
              borderColor: '#F97316',
              backgroundColor: 'rgba(249, 115, 22, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 0
            }]
          },
          options: chartOptions
        });
      }
    }, 100);

    return () => {
      if (timerId) clearTimeout(timerId);
      if (lcpChart) lcpChart.destroy();
      if (inpChart) inpChart.destroy();
      if (clsChart) clsChart.destroy();
    };
  }, []);

  return (
    <div className="slide-20">
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="header animate20-fade-in-down">
          <div className="title-section">
            <div className="title-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <div>
              <h1 className="main-title">Core Web Vitals - Métriques &amp; Outils</h1>
              <div className="subtitle">Optimisation des performances web et mesures clés pour le SEO</div>
            </div>
          </div>
          <div className="badge" onClick={() => addToast("Les 3 métriques clés de performance mesurées sur le terrain par Google.", "orange")}>
            <i className="fas fa-chart-line" style={{ marginRight: '8px' }}></i>
            3 Métriques
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Metrics Grid */}
          <div className="metrics-grid">
            {/* LCP */}
            <div
              className="metric-card lcp animate20-fade-in-up"
              style={{ '--delay': 1 }}
              onClick={() => addToast("LCP (Largest Contentful Paint) : 2.1s. Temps requis pour afficher le plus grand bloc de contenu visible (cible: ≤ 2.5s).", "blue")}
            >
              <div className="metric-header">
                <div className="metric-icon blue">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="metric-info">
                  <div className="metric-title">LCP</div>
                  <div className="metric-subtitle">Largest Contentful Paint</div>
                </div>
              </div>
              <div className="metric-value">
                <span className="value-number">2.1</span>
                <span className="value-unit">s</span>
              </div>
              <div className="metric-status">
                <div className="status-badge good">
                  <i className="fas fa-check-circle" style={{ marginRight: '4px' }}></i>Bon
                </div>
                <span className="threshold-label">Seuil: ≤ 2.5s</span>
              </div>
              <div className="metric-chart">
                <canvas ref={lcpRef}></canvas>
              </div>
            </div>

            {/* INP */}
            <div
              className="metric-card inp animate20-fade-in-up"
              style={{ '--delay': 2 }}
              onClick={() => addToast("INP (Interaction to Next Paint) : 180ms. Mesure la réactivité aux clics et interactions utilisateur (cible: ≤ 200ms).", "green")}
            >
              <div className="metric-header">
                <div className="metric-icon green">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="metric-info">
                  <div className="metric-title">INP</div>
                  <div className="metric-subtitle">Interaction to Next Paint</div>
                </div>
              </div>
              <div className="metric-value">
                <span className="value-number">180</span>
                <span className="value-unit">ms</span>
              </div>
              <div className="metric-status">
                <div className="status-badge good">
                  <i className="fas fa-check-circle" style={{ marginRight: '4px' }}></i>Bon
                </div>
                <span className="threshold-label">Seuil: ≤ 200ms</span>
              </div>
              <div className="metric-chart">
                <canvas ref={inpRef}></canvas>
              </div>
            </div>

            {/* CLS */}
            <div
              className="metric-card cls animate20-fade-in-up"
              style={{ '--delay': 3 }}
              onClick={() => addToast("CLS (Cumulative Layout Shift) : 0.05. Mesure les décalages inattendus de mise en page pendant le chargement (cible: ≤ 0.1).", "orange")}
            >
              <div className="metric-header">
                <div className="metric-icon orange">
                  <i className="fas fa-arrows-alt"></i>
                </div>
                <div className="metric-info">
                  <div className="metric-title">CLS</div>
                  <div className="metric-subtitle">Cumulative Layout Shift</div>
                </div>
              </div>
              <div className="metric-value">
                <span className="value-number">0.05</span>
                <span className="value-unit"></span>
              </div>
              <div className="metric-status">
                <div className="status-badge good">
                  <i className="fas fa-check-circle" style={{ marginRight: '4px' }}></i>Bon
                </div>
                <span className="threshold-label">Seuil: ≤ 0.1</span>
              </div>
              <div className="metric-chart">
                <canvas ref={clsRef}></canvas>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="tools-grid animate20-fade-in-up" style={{ '--delay': 4 }}>
            {tools.map((t, idx) => (
              <div
                key={t.name}
                className="tool-card"
                onClick={() => addToast(t.toast, t.colorClass)}
              >
                <div className={`tool-icon ${t.colorClass}`}>
                  <i className={`fas ${t.icon}`}></i>
                </div>
                <div className="tool-info">
                  <div className="tool-name">{t.name}</div>
                  <div className="tool-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Optimization columns */}
          <div className="optimization-section">
            <div className="optimization-card animate20-fade-in-up" style={{ '--delay': 5 }}>
              <div className="optimization-header" onClick={() => addToast("Les optimisations d'images améliorent directement le LCP et préviennent le CLS.", "blue")}>
                <i className="fas fa-image" style={{ color: '#3B82F6', fontSize: '20px' }}></i>
                <div className="optimization-title">Optimisations Images</div>
              </div>
              <div className="optimization-list">
                {imgOptimizations.map((item, idx) => (
                  <div
                    key={idx}
                    className="optimization-item"
                    onClick={() => addToast(item.toast, item.colorClass)}
                  >
                    <div className={`optimization-icon ${item.colorClass}`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className="optimization-text">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="optimization-card animate20-fade-in-up" style={{ '--delay': 6 }}>
              <div className="optimization-header" onClick={() => addToast("Les optimisations de code réduisent le temps de blocage et améliorent l'INP.", "green")}>
                <i className="fas fa-code" style={{ color: '#10B981', fontSize: '20px' }}></i>
                <div className="optimization-title">Optimisations Code</div>
              </div>
              <div className="optimization-list">
                {codeOptimizations.map((item, idx) => (
                  <div
                    key={idx}
                    className="optimization-item"
                    onClick={() => addToast(item.toast, item.colorClass)}
                  >
                    <div className={`optimization-icon ${item.colorClass}`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className="optimization-text">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom-section animate20-fade-in-up" style={{ '--delay': 7 }}>
            <div className="progress-info" onClick={() => addToast("Avancement des chantiers d'optimisation technique : 92% complété.", "green")}>
              <div>Progression: <span style={{ color: 'white', fontWeight: 700 }}>92%</span></div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '92%' }}></div>
              </div>
              <div className="last-update">Dernière mise à jour: Aujourd'hui</div>
            </div>
            <div className="action-buttons">
              <button className="action-btn secondary" onClick={() => addToast("Génération du rapport d'audit Core Web Vitals en PDF en cours...", "info")}>
                <i className="fas fa-download"></i>Exporter
              </button>
              <button className="action-btn primary" onClick={() => addToast("Analyse en temps réel de la page en cours via l'API PageSpeed...", "green")}>
                <i className="fas fa-play"></i>Analyser
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toasts */}
      <div className="toasts-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast-card ${toast.type}`}>
            <div className={`toast-icon ${toast.type}`}>
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
