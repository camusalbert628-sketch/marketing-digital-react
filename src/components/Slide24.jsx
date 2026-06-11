import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Slide24.css';

export default function Slide24() {
  const eventsRef = useRef(null);
  const sourcesRef = useRef(null);

  useEffect(() => {
    let eventsChart = null;
    let sourcesChart = null;
    let timerId = null;

    timerId = setTimeout(() => {
      if (eventsRef.current) {
        const eventsCtx = eventsRef.current.getContext('2d');
        eventsChart = new Chart(eventsCtx, {
          type: 'line',
          data: {
            labels: ['J-6', 'J-5', 'J-4', 'J-3', 'J-2', 'J-1', 'J'],
            datasets: [
              {
                label: 'Événements',
                data: [42000, 43500, 44000, 44500, 45000, 45200, 45234],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#3B82F6'
              },
              {
                label: 'Conversions',
                data: [1600, 1650, 1700, 1750, 1800, 1840, 1847],
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
                display: true,
                labels: {
                  color: '#94a3b8',
                  boxWidth: 12,
                  padding: 15
                }
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
                  color: '#94a3b8',
                  font: {
                    size: 11
                  },
                  callback: function(value) {
                    if (value >= 1000) return (value / 1000).toFixed(0) + 'k';
                    return value;
                  }
                }
              }
            }
          }
        });
      }

      if (sourcesRef.current) {
        const sourcesCtx = sourcesRef.current.getContext('2d');
        sourcesChart = new Chart(sourcesCtx, {
          type: 'doughnut',
          data: {
            labels: ['Organic', 'Direct', 'Social', 'Referral', 'Email'],
            datasets: [
              {
                data: [45, 25, 18, 8, 4],
                backgroundColor: ['#3B82F6', '#10B981', '#F97316', '#8B5CF6', '#EF4444'],
                borderWidth: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  color: '#94a3b8',
                  font: {
                    size: 11
                  },
                  padding: 15,
                  usePointStyle: true
                }
              }
            }
          }
        });
      }
    }, 100);

    return () => {
      if (timerId) clearTimeout(timerId);
      if (eventsChart) eventsChart.destroy();
      if (sourcesChart) sourcesChart.destroy();
    };
  }, []);

  return (
    <div className="slide-24"><div className="bg-pattern"></div><div className="grid-lines"></div><div className="content-wrapper"><div className="header"><div className="title-section"><div className="title-icon"><i className="fab fa-google"></i></div><div><div className="main-title">Google Analytics 4 - Métriques</div><div className="subtitle">Tableau de bord des KPIs essentiels GA4</div></div></div><div className="badge"><i className="fas fa-chart-line" style={{marginRight: '8px'}}></i>8 Fonctionnalités </div></div><div className="main-content"><div className="dashboard-grid"><div className="left-panel"><div className="card" style={{flex: 2}}><div className="card-header"><div className="card-title"><div className="card-icon blue"><i className="fas fa-chart-line"></i></div>Événements &amp;
Conversions </div><div className="status-badge active">Actif</div></div><div className="metrics-row"><div className="metric-item"><div className="metric-label">Événements</div><div className="metric-value">45,
234</div><div className="metric-change positive"><i className="fas fa-arrow-up"></i>+12.3% </div></div><div className="metric-item"><div className="metric-label">Conversions</div><div className="metric-value">1,
847</div><div className="metric-change positive"><i className="fas fa-arrow-up"></i>+8.7% </div></div><div className="metric-item"><div className="metric-label">Taux conversion</div><div className="metric-value">4.08%</div><div className="metric-change positive"><i className="fas fa-arrow-up"></i>+0.5% </div></div><div className="metric-item"><div className="metric-label">Revenu</div><div className="metric-value">€12.4k</div><div className="metric-change positive"><i className="fas fa-arrow-up"></i>+15.2% </div></div></div><div className="chart-container"><canvas ref={eventsRef}></canvas></div></div><div className="ga4-features"><div className="ga4-feature"><div className="ga4-feature-icon blue"><i className="fas fa-users"></i></div><div className="ga4-feature-title">Acquisition</div><div className="ga4-feature-value">2,
847</div><div className="ga4-feature-label">utilisateurs</div></div><div className="ga4-feature"><div className="ga4-feature-icon green"><i className="fas fa-clock"></i></div><div className="ga4-feature-title">Engagement</div><div className="ga4-feature-value">3m 24s</div><div className="ga4-feature-label">temps moyen</div></div><div className="ga4-feature"><div className="ga4-feature-icon orange"><i className="fas fa-filter"></i></div><div className="ga4-feature-title">Entonnoirs</div><div className="ga4-feature-value">68%</div><div className="ga4-feature-label">conversion</div></div><div className="ga4-feature"><div className="ga4-feature-icon purple"><i className="fas fa-map-marker-alt"></i></div><div className="ga4-feature-title">Attribution</div><div className="ga4-feature-value">1.2</div><div className="ga4-feature-label">touchpoints</div></div></div></div><div className="right-panel"><div className="card" style={{flex: 2.2}}><div className="card-header"><div className="card-title"><div className="card-icon green"><i className="fas fa-search"></i></div>Sources de trafic </div></div><div className="chart-container" style={{margin: '10px 0'}}><canvas ref={sourcesRef}></canvas></div><div className="utm-grid"><div className="utm-item"><div className="utm-dot blue"></div><span>Organic: 45%</span></div><div className="utm-item"><div className="utm-dot green"></div><span>Direct: 25%</span></div><div className="utm-item"><div className="utm-dot orange"></div><span>Social: 18%</span></div></div></div><div className="card" style={{flex: 0.8}}><div className="card-header"><div className="card-title"><div className="card-icon orange"><i className="fas fa-bug"></i></div>Issues &amp;
Warnings </div></div><div className="metrics-row" style={{marginBottom: 0}}><div className="metric-item"><div className="metric-label">Errors</div><div className="metric-value" style={{color: '#EF4444'}}>2</div></div><div className="metric-item"><div className="metric-label">Warnings</div><div className="metric-value" style={{color: '#F97316'}}>5</div></div></div></div></div></div></div><div className="bottom-section"><div className="progress-info"><div>Progression: <span style={{color: 'white', fontWeight: 700}}>92%</span></div><div className="progress-bar"><div className="progress-fill" style={{width: '92%'}}></div></div><div style={{color: '#64748b', fontSize: '13px'}}>Dernière mise à jour: Aujourd'hui</div>
 </div><div className="action-buttons"><button className="action-btn secondary"><i className="fas fa-download"></i>Exporter</button><button className="action-btn primary"><i className="fas fa-sync"></i>Actualiser</button></div></div></div></div>
  );
}
