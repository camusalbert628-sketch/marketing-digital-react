import React, { useState, useEffect } from 'react';
import './Slide18.css';

const tableRows = [
  {
    keyword: 'marketing digital 2026',
    volume: 'Vol: 2.4K | KD: 42',
    intent: { label: 'Informationnel', type: 'info', icon: 'fa-info-circle' },
    h1: 'Guide complet du marketing digital 2026 : Le Futur',
    angle: 'Analyse prédictive et IA',
    sections: 'H2: 05 | H3: 12',
    paa: 8,
    media: ['fa-image', 'fa-video', 'fa-chart-pie'],
    status: { label: 'Terminé', type: 'optimized', icon: 'fa-check-double' },
  },
  {
    keyword: 'SEO on-page technique',
    volume: 'Vol: 1.8K | KD: 58',
    intent: { label: 'Commercial', type: 'commercial', icon: 'fa-shopping-bag' },
    h1: 'SEO on-page : Checklist Technique 2026',
    angle: "Optimisation de l'expérience",
    sections: 'H2: 04 | H3: 10',
    paa: 6,
    media: ['fa-image', 'fa-terminal'],
    status: { label: 'Rédaction', type: 'pending', icon: 'fa-pen-nib' },
  },
  {
    keyword: 'formation SEO expert',
    volume: 'Vol: 3.2K | KD: 65',
    intent: { label: 'Transaction', type: 'transactional', icon: 'fa-wallet' },
    h1: 'Formation SEO Masterclass 2026',
    angle: 'Pratique et études de cas',
    sections: 'H2: 06 | H3: 15',
    paa: 10,
    media: ['fa-play-circle', 'fa-file-code', 'fa-tasks'],
    status: { label: 'Review', type: 'review', icon: 'fa-clipboard-list' },
  },
  {
    keyword: 'Google Analytics 4',
    volume: 'Vol: 1.5K | KD: 35',
    intent: { label: 'Informationnel', type: 'info', icon: 'fa-info-circle' },
    h1: "GA4 : Maîtriser l'analyse prédictive",
    angle: 'Data-driven marketing',
    sections: 'H2: 03 | H3: 08',
    paa: 5,
    media: ['fa-chart-line', 'fa-table'],
    status: { label: 'Terminé', type: 'optimized', icon: 'fa-check-double' },
  },
  {
    keyword: 'marketing automation',
    volume: 'Vol: 2.1K | KD: 50',
    intent: { label: 'Commercial', type: 'commercial', icon: 'fa-shopping-bag' },
    h1: 'Automation 2026 : Workflows IA',
    angle: 'Gain de productivité',
    sections: 'H2: 05 | H3: 11',
    paa: 7,
    media: ['fa-project-diagram', 'fa-robot'],
    status: { label: 'Rédaction', type: 'pending', icon: 'fa-pen-nib' },
  },
];

const rowToasts = {
  'marketing digital 2026': "Guide Marketing Digital 2026 : Contenu pilier de 3 500 mots ciblant une intention informationnelle. IA et prédictif en angle éditorial.",
  'SEO on-page technique': "SEO On-Page Technique : Article commercial de 2 200 mots. Focus sur l'optimisation de l'expérience utilisateur et les Core Web Vitals.",
  'formation SEO expert': "Formation SEO Masterclass : Page de vente longue avec études de cas réels. Intention transactionnelle forte (3.2K recherches).",
  'Google Analytics 4': "Google Analytics 4 : Guide complet GA4 en approche data-driven. Contenus visuels (dashboards, tableaux) prioritaires.",
  'marketing automation': "Marketing Automation : Article comparatif des outils de workflow IA. ROI et gain de temps comme angle principal.",
};

export default function Slide18() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => setToasts(p => p.slice(1)), 3200);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = (text, type = 'green') => {
    setToasts(prev => [...prev, { id: Date.now(), text, type }]);
  };

  const handleRowClick = (kw) => {
    addToast(rowToasts[kw] || `Contenu SEO : ${kw}`, 'green');
  };

  return (
    <div className="slide-18">
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="header animate18-fade-in-down">
          <div className="title-section">
            <div className="title-icon">
              <i className="fas fa-file-invoice"></i>
            </div>
            <div>
              <h1 className="main-title">Optimisation du contenu</h1>
              <div className="subtitle">Tableau de planification SEO stratégique 2026</div>
            </div>
          </div>
          <div className="badge" onClick={() => addToast("8 contenus planifiés en production pour la stratégie SEO 2026.", "green")}>
            <i className="fas fa-chart-line" style={{ marginRight: '10px' }}></i>
            8 contenus planifiés
          </div>
        </div>

        {/* Table */}
        <div className="main-content">
          <div className="table-container animate18-fade-in-up" style={{ '--delay': 1 }}>
            <div className="table-header">
              <div className="table-title">Calendrier de Production</div>
              <div className="table-actions">
                <button className="action-btn secondary" onClick={() => addToast("Panneau de paramètres de contenu SEO ouvert.", "info")}>
                  <i className="fas fa-sliders-h"></i>Paramètres
                </button>
                <button className="action-btn primary" onClick={() => addToast("Nouvel article SEO ajouté au calendrier de production.", "green")}>
                  <i className="fas fa-plus-circle"></i>Nouveau Contenu
                </button>
              </div>
            </div>

            <div className="seo-table">
              {/* Table header row */}
              <div className="table-row header-row">
                <div className="table-cell header-cell">Cible &amp; Intention</div>
                <div className="table-cell header-cell">Structure H1</div>
                <div className="table-cell header-cell">Angle Éditorial</div>
                <div className="table-cell header-cell">Balises</div>
                <div className="table-cell header-cell">PAA</div>
                <div className="table-cell header-cell">Assets</div>
                <div className="table-cell header-cell">État</div>
              </div>

              {tableRows.map((row, i) => (
                <div
                  key={row.keyword}
                  className="table-row data-row animate18-fade-in-up"
                  style={{ '--delay': i + 2 }}
                  onClick={() => handleRowClick(row.keyword)}
                >
                  <div className="table-cell">
                    <div className="keyword-cell">
                      <div className="keyword-text">{row.keyword}</div>
                      <div className="keyword-type">{row.volume}</div>
                    </div>
                    <div className={`intent-badge ${row.intent.type}`}>
                      <i className={`fas ${row.intent.icon}`}></i>
                      {row.intent.label}
                    </div>
                  </div>
                  <div className="table-cell">
                    <div className="h1-preview">{row.h1}</div>
                  </div>
                  <div className="table-cell">
                    <div className="angle-text">{row.angle}</div>
                  </div>
                  <div className="table-cell">
                    <div className="sections-preview">{row.sections}</div>
                  </div>
                  <div className="table-cell">
                    <div className="paa-count">
                      <i className="fas fa-lightbulb"></i>{row.paa} Qs
                    </div>
                  </div>
                  <div className="table-cell">
                    <div className="media-icons">
                      {row.media.map((ic, j) => (
                        <div key={j} className="media-icon">
                          <i className={`fas ${ic}`}></i>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="table-cell">
                    <div className={`status-badge ${row.status.type}`}>
                      <i className={`fas ${row.status.icon}`}></i>
                      {row.status.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="bottom-section animate18-fade-in-up" style={{ '--delay': 8 }}>
            <div className="progress-info">
              <div>Complétion globale: <span style={{ color: '#10B981', fontWeight: 800 }}>75%</span></div>
              <div className="stats-grid">
                <div className="stat-item">
                  <i className="fas fa-check-circle" style={{ color: '#10B981' }}></i>
                  <span className="stat-value">6 / 8</span>
                  <span>Contenus validés</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-history" style={{ color: '#3B82F6' }}></i>
                  <span className="stat-value">12</span>
                  <span>Tâches en attente</span>
                </div>
              </div>
            </div>
            <div className="last-update">Dernière synchronisation : Aujourd'hui à 14:30</div>
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
