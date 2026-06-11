import React, { useState, useEffect } from 'react';
import './Slide8.css';

export default function Slide8() {
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
    setToasts((prev) => [...prev, { id, text, colorName, colorHex }]);
  };

  const handleCardClick = (skill) => {
    addToast(skill.toastText, skill.colorClass, skill.fillColor);
  };

  const handleBadgeClick = () => {
    addToast("Compétences clés : Les 9 expertises essentielles validées pour concevoir et manager des projets digitaux.", "orange", "#F97316");
  };

  const handleProgressClick = () => {
    addToast("Progression : Niveau global d'acquisition des compétences évalué à 75% pour ce parcours.", "blue", "#3B82F6");
  };

  const handleStatSkillsClick = () => {
    addToast("Compétences : 8 compétences sur 9 sont d'ores et déjà acquises ou en cours de validation finale.", "green", "#10B981");
  };

  const handleStatTimeClick = () => {
    addToast("Volume horaire : 45 heures de formation théorique et de cas pratiques complétées.", "blue", "#3B82F6");
  };

  const skillsData = [
    {
      title: "Analyse et KPIs",
      level: "Débutant",
      levelClass: "beginner",
      colorClass: "blue",
      fillColor: "#3B82F6",
      iconClass: "fas fa-chart-line",
      desc: "Maîtriser les métriques clés et l'analyse de données pour mesurer la performance des campagnes.",
      checklist: ["GA4", "Dashboards", "KPIs"],
      progressWidth: "75%",
      toastText: "Analyse & KPIs : Paramétrage du tracking GA4, création de rapports Looker Studio et suivi régulier des indicateurs clés."
    },
    {
      title: "Recherche mots-clés",
      level: "Intermédiaire",
      levelClass: "intermediate",
      colorClass: "green",
      fillColor: "#10B981",
      iconClass: "fas fa-search",
      desc: "Identifier les mots-clés pertinents pour optimiser le référencement naturel.",
      checklist: ["SEMrush", "Ahrefs", "Ubersuggest"],
      progressWidth: "65%",
      toastText: "Recherche mots-clés : Études sémantiques approfondies, analyse de l'intention de recherche et étude de la concurrence."
    },
    {
      title: "Rédaction SEO",
      level: "Intermédiaire",
      levelClass: "intermediate",
      colorClass: "orange",
      fillColor: "#F97316",
      iconClass: "fas fa-pen",
      desc: "Rédiger du contenu optimisé pour les moteurs de recherche et les utilisateurs.",
      checklist: ["Meta tags", "Structure", "Contenu"],
      progressWidth: "70%",
      toastText: "Rédaction SEO : Rédaction de contenus engageants respectant les balises sémantiques (H1-H6) et optimisés pour le SEO."
    },
    {
      title: "Outils Google",
      level: "Avancé",
      levelClass: "advanced",
      colorClass: "purple",
      fillColor: "#8B5CF6",
      iconClass: "fab fa-google",
      desc: "Maîtriser l'écosystème Google pour le marketing digital.",
      checklist: ["GSC", "GA4", "Ads"],
      progressWidth: "85%",
      toastText: "Outils Google : Utilisation experte de Google Search Console, Google Ads et Google Tag Manager."
    },
    {
      title: "Ads basics",
      level: "Intermédiaire",
      levelClass: "intermediate",
      colorClass: "red",
      fillColor: "#EF4444",
      iconClass: "fas fa-ad",
      desc: "Créer et gérer des campagnes publicitaires payantes efficaces.",
      checklist: ["Facebook", "Google", "LinkedIn"],
      progressWidth: "60%",
      toastText: "Ads Basics : Configuration d'audiences, A/B testing sur les visuels et gestion des enchères sur Meta et Google."
    },
    {
      title: "Automation",
      level: "Débutant",
      levelClass: "beginner",
      colorClass: "cyan",
      fillColor: "#06B6D4",
      iconClass: "fas fa-robot",
      desc: "Automatiser les tâches répétitives et les workflows marketing.",
      checklist: ["Zapier", "Make", "HubSpot"],
      progressWidth: "55%",
      toastText: "Automation : Mise en place de déclencheurs et d'actions automatiques pour le nurturing de leads et la synchronisation CRM."
    },
    {
      title: "UX/CRO",
      level: "Intermédiaire",
      levelClass: "intermediate",
      colorClass: "blue",
      fillColor: "#3B82F6",
      iconClass: "fas fa-user-cog",
      desc: "Optimiser l'expérience utilisateur et les taux de conversion.",
      checklist: ["A/B testing", "Heatmaps", "Funnels"],
      progressWidth: "72%",
      toastText: "UX & CRO : Analyse des cartes de chaleur, optimisation des tunnels d'achat et lancement de tests A/B pour augmenter les ventes."
    },
    {
      title: "Gestion de projet",
      level: "Avancé",
      levelClass: "advanced",
      colorClass: "green",
      fillColor: "#10B981",
      iconClass: "fas fa-tasks",
      desc: "Gérer efficacement les projets marketing et les équipes.",
      checklist: ["Agile", "Scrum", "Trello"],
      progressWidth: "80%",
      toastText: "Gestion de projet : Planification de sprints, management d'équipes créatives et respect des budgets alloués."
    },
    {
      title: "Éthique & RGPD",
      level: "Intermédiaire",
      levelClass: "intermediate",
      colorClass: "orange",
      fillColor: "#F97316",
      iconClass: "fas fa-shield-alt",
      desc: "Respecter les réglementations et l'éthique du marketing digital.",
      checklist: ["RGPD", "Cookies", "Consent"],
      progressWidth: "68%",
      toastText: "Éthique & RGPD : Mise en conformité des formulaires, gestion des politiques de cookies et recueil du consentement."
    }
  ];

  return (
    <div className="slide-8">
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
              <i className="fas fa-check-circle"></i>
            </div>
            <div>
              <h1 className="main-title">Compétences essentielles</h1>
              <div className="subtitle">Les 9 compétences clés pour réussir en marketing digital</div>
            </div>
          </div>
          <div className="badge" onClick={handleBadgeClick}>
            <i className="fas fa-star" style={{ marginRight: '8px' }}></i>
            9 compétences
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((skill, idx) => (
            <div 
              key={skill.title} 
              className="skill-card animate-fade-in-up" 
              style={{ '--delay': idx + 1 }}
              onClick={() => handleCardClick(skill)}
            >
              <div className="skill-header">
                <div className={`skill-icon ${skill.colorClass}`}>
                  <i className={skill.iconClass}></i>
                </div>
                <div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <div className="skill-level">
                    <span className={`level-badge ${skill.levelClass}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>

              <p className="skill-description">{skill.desc}</p>

              <div className="skill-checklist">
                {skill.checklist.map((item) => (
                  <div key={item} className="check-item">
                    <i className="fas fa-check check-icon"></i>
                    {item}
                  </div>
                ))}
              </div>

              <div className="progress-bar">
                <div 
                  className={`progress-fill ${skill.colorClass}`} 
                  style={{ width: skill.progressWidth }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bottom-section animate-fade-in-up" style={{ '--delay': 10 }}>
          <div className="progress-text" onClick={handleProgressClick}>
            Progression globale: <span style={{ color: 'white', fontWeight: 700 }}>75%</span>
          </div>

          <div className="stats">
            <div className="stat-item" onClick={handleStatSkillsClick}>
              <i className="fas fa-check-circle" style={{ color: '#10B981' }}></i>
              <span className="stat-value">8/9</span>
              <span>compétences</span>
            </div>

            <div className="stat-item" onClick={handleStatTimeClick}>
              <i className="fas fa-clock" style={{ color: '#3B82F6' }}></i>
              <span className="stat-value">45h</span>
              <span>de formation</span>
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
