import React, { useState, useEffect } from 'react';
import './Slide19.css';

const sections = [
  {
    id: 'architecture',
    cardClass: 'architecture',
    iconClass: 'blue',
    icon: 'fa-sitemap',
    title: 'Architecture',
    subtitle: 'Structure & crawl',
    color: 'blue',
    items: [
      { icon: 'fa-robot', title: 'Crawl Budget', desc: 'Optimisation du budget de crawl', status: 'OK', type: 'active' },
      { icon: 'fa-map', title: 'Sitemap / robots.txt', desc: 'Configuration correcte', status: 'OK', type: 'active' },
      { icon: 'fa-link', title: 'Canonical', desc: 'URLs canoniques', status: 'OK', type: 'active' },
      { icon: 'fa-pager', title: 'Pagination', desc: 'Gestion de la pagination', status: 'En cours', type: 'pending' },
    ],
    metrics: [{ value: '98%', label: 'Crawl' }, { value: '2.1s', label: 'LCP' }],
    toasts: {
      'Crawl Budget': "Crawl Budget : Nombre de pages que Googlebot parcourt par jour. Optimisez en supprimant les pages orphelines et les duplicats.",
      'Sitemap / robots.txt': "Sitemap XML : Soumis à Google Search Console. Robots.txt configuré pour bloquer les pages admin et à faible valeur.",
      'Canonical': "URLs Canoniques : Évitent le contenu dupliqué. Chaque page doit pointer vers son URL de référence via la balise rel='canonical'.",
      'Pagination': "Pagination : Utilisez rel='next' / rel='prev' pour guider Google dans les séries de pages. En cours de vérification.",
    },
  },
  {
    id: 'performance',
    cardClass: 'performance',
    iconClass: 'green',
    icon: 'fa-tachometer-alt',
    title: 'Performance',
    subtitle: 'Vitesse & Core Web Vitals',
    color: 'green',
    items: [
      { icon: 'fa-bolt', title: 'INP', desc: 'Interaction to Next Paint', status: '200ms', type: 'active' },
      { icon: 'fa-clock', title: 'LCP', desc: 'Largest Contentful Paint', status: '2.1s', type: 'active' },
      { icon: 'fa-arrows-alt', title: 'CLS', desc: 'Cumulative Layout Shift', status: '0.05', type: 'active' },
      { icon: 'fa-image', title: 'Lazyload', desc: 'Chargement différé', status: 'OK', type: 'active' },
    ],
    metrics: [{ value: '95', label: 'Score' }, { value: '1.2s', label: 'FID' }],
    toasts: {
      'INP': "INP (Interaction to Next Paint) : Nouveau Core Web Vital depuis 2024. Mesure la réactivité de la page. Cible : < 200ms.",
      'LCP': "LCP (Largest Contentful Paint) : Vitesse de chargement du plus grand élément visible. Cible Google : ≤ 2.5s. Vous êtes à 2.1s ✓",
      'CLS': "CLS (Cumulative Layout Shift) : Mesure la stabilité visuelle. Score de 0.05 excellent (Cible : < 0.1). Images avec dimensions déclarées.",
      'Lazyload': "Lazy Loading : Les images hors écran se chargent à la demande. Réduit le poids initial de la page et améliore le score Lighthouse.",
    },
  },
  {
    id: 'rendering',
    cardClass: 'rendering',
    iconClass: 'orange',
    icon: 'fa-code',
    title: 'Rendu',
    subtitle: 'JS & CSS',
    color: 'orange',
    items: [
      { icon: 'fa-globe', title: 'Hreflang', desc: 'Tags de langue', status: 'OK', type: 'active' },
      { icon: 'fa-lock', title: 'HTTPS', desc: 'Sécurité SSL', status: 'OK', type: 'active' },
      { icon: 'fa-exchange-alt', title: 'Redirections', desc: '301, 302, 404', status: 'OK', type: 'active' },
      { icon: 'fa-code', title: 'JS & Rendu', desc: 'Optimisation JS', status: 'En cours', type: 'pending' },
    ],
    metrics: [{ value: '99%', label: 'HTTPS' }, { value: '0', label: '404' }],
    toasts: {
      'Hreflang': "Hreflang : Balises indiquant à Google la langue et le pays cible d'une page. Indispensable pour les sites multilingues.",
      'HTTPS': "HTTPS : Certificat SSL actif sur 99% des pages. Le protocole sécurisé est un signal de classement direct depuis 2014.",
      'Redirections': "Redirections : 0 erreur 404 détectée. Les redirections 301 sont correctement configurées pour préserver le PageRank.",
      'JS & Rendu': "Rendu JavaScript : Certains scripts bloquants ralentissent le rendu. Passage en async/defer en cours pour améliorer le TTFB.",
    },
  },
];

export default function Slide19() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => setToasts(p => p.slice(1)), 3300);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = (text, type = 'blue') => {
    setToasts(prev => [...prev, { id: Date.now(), text, type }]);
  };

  return (
    <div className="slide-19">
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="header animate19-fade-in-down">
          <div className="title-section">
            <div className="title-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <div>
              <h1 className="main-title">SEO Technique — Architecture &amp; Performance</h1>
              <div className="subtitle">Optimisation technique complète du site web</div>
            </div>
          </div>
          <div className="badge" onClick={() => addToast("Audit technique SEO : 10 éléments analysés. Score global : 85% de conformité.", "orange")}>
            <i className="fas fa-chart-line" style={{ marginRight: '8px' }}></i>
            10 éléments
          </div>
        </div>

        {/* Sections grid */}
        <div className="main-content">
          <div className="sections-grid">
            {sections.map((sec, si) => (
              <div
                key={sec.id}
                className={`section-card ${sec.cardClass} animate19-fade-in-up`}
                style={{ '--delay': si + 1 }}
                onClick={() => addToast(`Pilier ${sec.title} : ${sec.items.filter(i => i.type === 'active').length}/${sec.items.length} éléments validés.`, sec.color)}
              >
                <div className="section-header">
                  <div className={`section-icon ${sec.iconClass}`}>
                    <i className={`fas ${sec.icon}`}></i>
                  </div>
                  <div>
                    <div className="section-title">{sec.title}</div>
                    <div className="section-subtitle">{sec.subtitle}</div>
                  </div>
                </div>

                <div className="items-list">
                  {sec.items.map(item => (
                    <div
                      key={item.title}
                      className="item-row"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToast(sec.toasts[item.title] || `${item.title} : ${item.desc}`, sec.color);
                      }}
                    >
                      <div className={`item-icon ${sec.iconClass}`}>
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div className="item-content">
                        <div className="item-title">{item.title}</div>
                        <div className="item-desc">{item.desc}</div>
                      </div>
                      <div className={`status-badge ${item.type}`}>{item.status}</div>
                    </div>
                  ))}
                </div>

                <div className="metrics-row" onClick={(e) => e.stopPropagation()}>
                  {sec.metrics.map(m => (
                    <div
                      key={m.label}
                      className="metric-item"
                      onClick={() => addToast(`${m.label} : ${m.value} — Métrique Core Web Vitals ou indicateur de qualité SEO technique.`, sec.color)}
                    >
                      <div className="metric-value">{m.value}</div>
                      <div className="metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="bottom-section animate19-fade-in-up" style={{ '--delay': 4 }}>
            <div className="progress-info">
              <div>Progression: <span style={{ color: 'white', fontWeight: 700 }}>85%</span></div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
              <div style={{ color: '#64748b', fontSize: '13px' }}>Dernière mise à jour: Aujourd'hui</div>
            </div>
            <div className="action-buttons">
              <button className="action-btn secondary" onClick={() => addToast("Rapport d'audit technique SEO exporté en PDF.", "info")}>
                <i className="fas fa-download"></i>Exporter
              </button>
              <button className="action-btn primary" onClick={() => addToast("Optimisation technique lancée : minification JS, compression images, cache activé.", "green")}>
                <i className="fas fa-play"></i>Optimiser
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
