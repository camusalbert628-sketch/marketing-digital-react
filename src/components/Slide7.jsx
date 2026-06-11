import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Slide7.css';

export default function Slide7() {
  const [toasts, setToasts] = useState([]);
  const chartRef = useRef(null);

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
    setToasts((prev) => [...prev, { id, text, colorName, colorHex }]);
  };

  // Instantiate Chart.js
  useEffect(() => {
    let chartInstance = null;
    let timerId = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      // Delay initialization slightly to let the parent layout finalize its size
      timerId = setTimeout(() => {
        chartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
            datasets: [
              {
                label: 'Adoption GA4 (%)',
                data: [5, 12, 18, 25, 28, 30, 33.65],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.06)',
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointBackgroundColor: '#3B82F6',
                borderWidth: 2,
              },
              {
                label: 'Mobile Users (%)',
                data: [45, 52, 58, 62, 63, 64, 64],
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.06)',
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointBackgroundColor: '#10B981',
                borderWidth: 2,
              },
              {
                label: 'Social Media (Mrd)',
                data: [4.2, 4.5, 4.8, 5.1, 5.3, 5.5, 5.66],
                borderColor: '#F97316',
                backgroundColor: 'rgba(249, 115, 22, 0.06)',
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointBackgroundColor: '#F97316',
                borderWidth: 2,
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  color: '#475569',
                  padding: 15,
                  font: { size: 11, weight: '500', family: 'Poppins' },
                  usePointStyle: true,
                  pointStyle: 'circle'
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: 'rgba(15, 23, 42, 0.06)' },
                ticks: { color: '#475569', font: { size: 10, family: 'Poppins' } }
              },
              x: {
                grid: { display: false },
                ticks: { color: '#475569', font: { size: 10, family: 'Poppins' } }
              }
            }
          }
        });
      }, 100);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const handleStatClick = (statKey) => {
    const statsInfo = {
      mobile: {
        text: "Population mobile (64%) : Plus de 5,1 milliards d'utilisateurs uniques de smartphones enregistrés dans le monde en 2026.",
        colorName: "blue",
        colorHex: "#3B82F6"
      },
      ga4: {
        text: "Adoption GA4 (33.65%) : Analyse de l'adoption de GA4 sur le top 1 million des sites web à fort trafic mondial.",
        colorName: "green",
        colorHex: "#10B981"
      },
      ads: {
        text: "Dépenses publicitaires ($786.2B) : Montant global investi dans les formats publicitaires numériques (moteurs de recherche, réseaux sociaux, display).",
        colorName: "orange",
        colorHex: "#F97316"
      },
      social: {
        text: "Utilisateurs réseaux (5.66B) : Nombre d'utilisateurs actifs mensuels sur les plateformes de médias sociaux (LinkedIn, Meta, TikTok, etc.).",
        colorName: "purple",
        colorHex: "#8B5CF6"
      }
    };

    const stat = statsInfo[statKey];
    addToast(stat.text, stat.colorName, stat.colorHex);
  };

  const handleChartCardClick = () => {
    addToast("Évolution 2020-2026 : Le graphique montre la croissance constante de l'usage mobile, des réseaux sociaux et de la migration vers GA4.", "blue", "#3B82F6");
  };

  const handleEcommerceClick = () => {
    addToast("E-commerce : Le taux de conversion moyen mondial oscille entre 2,5% et 3% pour le commerce électronique en 2026.", "green", "#10B981");
  };

  const handleRoiClick = () => {
    addToast("ROI moyen (4.2x) : Le marketing digital génère en moyenne 4,2€ pour chaque euro investi dans les campagnes d'acquisition.", "orange", "#F97316");
  };

  const handleBadgeClick = () => {
    addToast("Statistiques 2026 : Analyse synthétique des données clés issues des rapports annuels de référence du marketing numérique.", "orange", "#F97316");
  };

  return (
    <div className="slide-7">
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
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <h1 className="main-title">Statistiques clés 2026</h1>
              <div className="subtitle">Données actualisées du marketing digital mondial</div>
            </div>
          </div>
          <div className="badge" onClick={handleBadgeClick}>
            <i className="fas fa-chart-bar" style={{ marginRight: '8px' }}></i>
            Analytics 2026
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div 
            className="stat-card animate-fade-in-up" 
            style={{ '--delay': 1 }} 
            onClick={() => handleStatClick('mobile')}
          >
            <div className="stat-icon blue">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="stat-value">64%</div>
            <div className="stat-label">Population mondiale sur mobile</div>
            <div className="stat-change positive">+12% vs 2025</div>
          </div>

          <div 
            className="stat-card animate-fade-in-up" 
            style={{ '--delay': 2 }} 
            onClick={() => handleStatClick('ga4')}
          >
            <div className="stat-icon green">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="stat-value">33.65%</div>
            <div className="stat-label">Adoption GA4 (top 1M sites)</div>
            <div className="stat-change positive">+8% vs 2025</div>
          </div>

          <div 
            className="stat-card animate-fade-in-up" 
            style={{ '--delay': 3 }} 
            onClick={() => handleStatClick('ads')}
          >
            <div className="stat-icon orange">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="stat-value">$786.2B</div>
            <div className="stat-label">Dépenses publicitaires digitales</div>
            <div className="stat-change positive">+15% vs 2025</div>
          </div>

          <div 
            className="stat-card animate-fade-in-up" 
            style={{ '--delay': 4 }} 
            onClick={() => handleStatClick('social')}
          >
            <div className="stat-icon purple">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-value">5.66B</div>
            <div className="stat-label">Utilisateurs social media</div>
            <div className="stat-change positive">+5% vs 2025</div>
          </div>
        </div>

        {/* Charts & Right Info Columns */}
        <div className="charts-container">
          {/* Main Chart */}
          <div 
            className="chart-card animate-fade-in-up" 
            style={{ '--delay': 5 }}
            onClick={handleChartCardClick}
          >
            <div className="chart-header">
              <div className="chart-title">Évolution des métriques clés 2020-2026</div>
              <div className="chart-icon blue">
                <i className="fas fa-chart-area"></i>
              </div>
            </div>
            <div className="chart-wrapper">
              <canvas ref={chartRef} style={{ width: '100%', height: '100%' }}></canvas>
            </div>
          </div>

          {/* Right Info Cards Column */}
          <div className="right-column">
            {/* Ecommerce card */}
            <div 
              className="info-card animate-fade-in-up" 
              style={{ '--delay': 6 }}
              onClick={handleEcommerceClick}
            >
              <div className="info-header">
                <div className="info-icon green">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="info-title">E-commerce</div>
              </div>
              <div className="info-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Taux de conversion</span>
                  <span style={{ color: '#10B981', fontWeight: 600 }}>2.5-3%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill green" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            {/* ROI card */}
            <div 
              className="info-card animate-fade-in-up" 
              style={{ '--delay': 7 }}
              onClick={handleRoiClick}
            >
              <div className="info-header">
                <div className="info-icon orange">
                  <i className="fas fa-percentage"></i>
                </div>
                <div className="info-title">ROI moyen</div>
              </div>
              <div className="info-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Marketing digital</span>
                  <span style={{ color: '#F97316', fontWeight: 600 }}>4.2x</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill orange" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
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
