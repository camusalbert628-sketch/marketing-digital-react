import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Slide23.css';

export default function Slide23() {
  const performanceRef = useRef(null);
  const queriesRef = useRef(null);

  useEffect(() => {
    let performanceChart = null;
    let queriesChart = null;
    let timerId = null;

    timerId = setTimeout(() => {
      if (performanceRef.current) {
        const performanceCtx = performanceRef.current.getContext('2d');
        performanceChart = new Chart(performanceCtx, {
          type: 'line',
          data: {
            labels: ['J-6', 'J-5', 'J-4', 'J-3', 'J-2', 'J-1', 'J'],
            datasets: [
              {
                label: 'Clics',
                data: [10800, 11200, 11500, 11800, 12200, 12500, 12847],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#3B82F6'
              },
              {
                label: 'Impressions',
                data: [1000000, 1050000, 1100000, 1150000, 1180000, 1200000, 1200000],
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#10B981'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: '#94a3b8'
                }
              },
              y: {
                grid: {
                  color: 'rgba(255,255,255,0.05)'
                },
                ticks: {
                  color: '#94a3b8',
                  callback: function(value) {
                    if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
                    if (value >= 1000) return (value / 1000).toFixed(0) + 'k';
                    return value;
                  }
                }
              }
            }
          }
        });
      }

      if (queriesRef.current) {
        const queriesCtx = queriesRef.current.getContext('2d');
        queriesChart = new Chart(queriesCtx, {
          type: 'bar',
          data: {
            labels: ['seo', 'marketing', 'digital', 'formation', 'cours'],
            datasets: [
              {
                label: 'Recherches',
                data: [450, 380, 320, 280, 250],
                backgroundColor: [
                  'rgba(59, 130, 246, 0.8)',
                  'rgba(16, 185, 129, 0.8)',
                  'rgba(249, 115, 22, 0.8)',
                  'rgba(139, 92, 246, 0.8)',
                  'rgba(236, 72, 153, 0.8)'
                ],
                borderRadius: 6
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: '#94a3b8',
                  font: {
                    size: 11
                  }
                }
              },
              y: {
                grid: {
                  color: 'rgba(255,255,255,0.05)'
                },
                ticks: {
                  color: '#94a3b8'
                }
              }
            }
          }
        });
      }
    }, 100);

    return () => {
      if (timerId) clearTimeout(timerId);
      if (performanceChart) performanceChart.destroy();
      if (queriesChart) queriesChart.destroy();
    };
  }, []);

  return (
    <div className="slide-23"><div className="bg-pattern"></div><div className="grid-lines"></div><div className="content-wrapper"><div className="header"><div className="title-section"><div className="title-icon"><i className="fab fa-google"></i></div><div><div className="main-title">Google Search Console - Clés</div><div className="subtitle">Tableau de bord complet des fonctionnalités et métriques</div></div></div><div className="badge"><i className="fas fa-chart-line" style={{marginRight: '8px'}}></i>6 Fonctionnalités </div></div><div className="main-content"><div className="dashboard-grid"><div className="left-panel"><div className="card" style={{flex: 2}}><div className="card-header"><div className="card-title"><div className="card-icon blue"><i className="fas fa-chart-line"></i></div>Rapport Performance </div><div className="status-badge active">En ligne</div></div><div className="metrics-row"><div className="metric-item"><div className="metric-label">Clics</div><div className="metric-value">12,
847</div><div className="metric-change positive"><i className="fas fa-arrow-up"></i>+15.3% </div></div><div className="metric-item"><div className="metric-label">Impressions</div><div className="metric-value">1.2M</div><div className="metric-change positive"><i className="fas fa-arrow-up"></i>+8.7% </div></div><div className="metric-item"><div className="metric-label">CTR</div><div className="metric-value">1.07%</div><div className="metric-change negative"><i className="fas fa-arrow-down"></i>-0.2% </div></div><div className="metric-item"><div className="metric-label">Position moyenne</div><div className="metric-value">12.4</div><div className="metric-change positive"><i className="fas fa-arrow-up"></i>+1.2% </div></div></div><div className="chart-container"><canvas ref={performanceRef}></canvas></div></div><div className="features-grid"><div className="feature-card"><div className="feature-icon blue"><i className="fas fa-sitemap"></i></div><div className="feature-content"><div className="feature-title">Sitemaps</div><div className="feature-desc">Soumission et suivi</div></div><div className="status-badge active">OK</div></div><div className="feature-card"><div className="feature-icon green"><i className="fas fa-file-alt"></i></div><div className="feature-content"><div className="feature-title">Pages indexées</div><div className="feature-desc">1,
234 pages</div></div><div className="status-badge active">OK</div></div><div className="feature-card"><div className="feature-icon orange"><i className="fas fa-mobile-alt"></i></div><div className="feature-content"><div className="feature-title">Mobile</div><div className="feature-desc">Optimisation CWV</div></div><div className="status-badge pending">En cours</div></div><div className="feature-card"><div className="feature-icon purple"><i className="fas fa-link"></i></div><div className="feature-content"><div className="feature-title">Liens internes</div><div className="feature-desc">2,
456 liens</div></div><div className="status-badge active">OK</div></div></div></div><div className="right-panel"><div className="card" style={{flex: 1.5}}><div className="card-header"><div className="card-title"><div className="card-icon green"><i className="fas fa-search"></i></div>Requêtes populaires </div></div><div className="metrics-row"><div className="metric-item"><div className="metric-label">Top requête</div><div className="metric-value">"seo france" </div><div className="metric-change positive">+45%</div></div></div><div className="chart-container" style={{minHeight: '220px'}}><canvas ref={queriesRef}></canvas></div></div><div className="card" style={{flex: 1}}><div className="card-header"><div className="card-title"><div className="card-icon orange"><i className="fas fa-bug"></i></div>Issues </div></div><div className="metrics-row" style={{marginBottom: 0}}><div className="metric-item"><div className="metric-label">Errors</div><div className="metric-value" style={{color: '#EF4444'}}>3</div></div><div className="metric-item"><div className="metric-label">Warnings</div><div className="metric-value" style={{color: '#F97316'}}>12</div></div></div></div></div></div></div><div className="bottom-section"><div className="progress-info"><div>Progression: <span style={{color: 'white', fontWeight: 700}}>85%</span></div><div className="progress-bar"><div className="progress-fill" style={{width: '85%'}}></div></div><div style={{color: '#64748b', fontSize: '13px'}}>Dernière mise à jour: Aujourd'hui</div>
 </div><div className="action-buttons"><button className="action-btn secondary"><i className="fas fa-download"></i>Exporter</button><button className="action-btn primary"><i className="fas fa-sync"></i>Actualiser</button></div></div></div></div>
  );
}
