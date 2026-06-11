import React, { useState, useEffect } from 'react';
import './Slide13.css';

export default function Slide13() {
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

  const handlePropValueClick = (title) => {
    const details = {
      "Différenciation": "Différenciation : Mettre en avant ce qui rend votre offre unique par rapport à la concurrence directe.",
      "Émotion": "Émotion : Créer une résonance affective avec l'utilisateur pour susciter la sympathie et l'attachement.",
      "Innovation": "Innovation : Prouver que vos solutions répondent aux nouveaux enjeux de manière inédite et agile.",
      "Confiance": "Confiance : Garantir la fiabilité à travers des gages de sécurité, de transparence et de service."
    };
    addToast(details[title] || `Détail de la proposition de valeur : ${title}`, 'blue');
  };

  const handleIdentityStatClick = (statName, statVal) => {
    const details = {
      "Considération": `Consistance : ${statVal} des consommateurs attendent une marque cohérente sur tous les canaux physiques et digitaux.`,
      "Reconnaissance": `Reconnaissance : ${statVal} des utilisateurs se souviennent d'une marque qui utilise sa palette de couleurs de façon uniforme.`,
      "Engagement": `Engagement : ${statVal} de hausse d'engagement moyen généré par un ton de voix authentique et incarné.`
    };
    addToast(details[statName] || `Statistique d'identité : ${statName} à ${statVal}`, 'green');
  };

  const handleProofClick = (proofName) => {
    const details = {
      "Témoignages clients": "Preuve : Les citations de clients réels valident la valeur d'usage et la satisfaction après achat.",
      "Études de cas": "Preuve : Les analyses détaillées de projets illustrent votre méthodologie et les gains concrets (ROI).",
      "Certifications": "Preuve : Les labels officiels (Qualiopi, ISO, Google Partner) rassurent sur la qualité des processus.",
      "Chiffres clés": "Preuve : Les données chiffrées (CA généré, clients servis) mesurent objectivement votre envergure."
    };
    addToast(details[proofName] || `Preuve de marque : ${proofName}`, 'orange');
  };

  const handleEditorialClick = () => {
    addToast("Lignes éditoriales : L'évaluation de 75% représente notre score de conformité actuel sur la charte éditoriale Linkedin et Blog.", 'purple');
  };

  return (
    <div className="slide-13">
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
              <i className="fas fa-palette"></i>
            </div>
            <div>
              <h1 className="main-title">Branding Digital - Éléments clés</h1>
              <div className="subtitle">Construire une identité de marque forte et cohérente</div>
            </div>
          </div>
          <div className="badge" onClick={() => addToast("Charte de branding digital révisée pour l'année 2026.", "orange")}>
            <i className="fas fa-star" style={{ marginRight: '8px' }}></i>
            Branding
          </div>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Card 1: Proposition de valeur */}
            <div className="card animate-fade-in-up" style={{ flex: 1.4, '--delay': 1 }}>
              <div>
                <div className="card-header" onClick={() => addToast("La proposition de valeur exprime l'avantage central résolu pour le client.", "blue")}>
                  <div className="card-icon blue">
                    <i className="fas fa-gem"></i>
                  </div>
                  <div className="card-title">Proposition de valeur</div>
                </div>
                <div className="card-content">
                  Définissez ce qui rend votre marque unique et pourquoi les clients devraient vous choisir. Votre proposition de valeur doit être claire, concise et différenciante.
                </div>
              </div>

              <div className="elements-grid">
                <div className="element-item" onClick={() => handlePropValueClick("Différenciation")}>
                  <div className="element-icon blue">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <div className="element-text">
                    <div className="element-title">Différenciation</div>
                    <div className="element-desc">Votre avantage compétitif</div>
                  </div>
                </div>

                <div className="element-item" onClick={() => handlePropValueClick("Émotion")}>
                  <div className="element-icon green">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="element-text">
                    <div className="element-title">Émotion</div>
                    <div className="element-desc">Connexion émotionnelle</div>
                  </div>
                </div>

                <div className="element-item" onClick={() => handlePropValueClick("Innovation")}>
                  <div className="element-icon orange">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="element-text">
                    <div className="element-title">Innovation</div>
                    <div className="element-desc">Solutions uniques</div>
                  </div>
                </div>

                <div className="element-item" onClick={() => handlePropValueClick("Confiance")}>
                  <div className="element-icon purple">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="element-text">
                    <div className="element-title">Confiance</div>
                    <div className="element-desc">Crédibilité et fiabilité</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Identité */}
            <div className="card animate-fade-in-up" style={{ flex: 1, '--delay': 2 }}>
              <div>
                <div className="card-header" onClick={() => addToast("L'identité de marque traduit visuellement et verbalement vos valeurs.", "green")}>
                  <div className="card-icon green">
                    <i className="fas fa-paint-brush"></i>
                  </div>
                  <div className="card-title">Identité verbale &amp; visuelle</div>
                </div>
                <div className="card-content">
                  Créez une identité cohérente avec votre logo, typographie, palette de couleurs et ton de voix qui reflètent votre personnalité de marque.
                </div>
              </div>

              <div className="stats-row">
                <div className="stat-item" onClick={() => handleIdentityStatClick("Considération", "85%")}>
                  <div className="stat-number" style={{ color: '#3B82F6' }}>85%</div>
                  <div className="stat-label">Consistance</div>
                </div>
                <div className="stat-item" onClick={() => handleIdentityStatClick("Reconnaissance", "92%")}>
                  <div className="stat-number" style={{ color: '#10B981' }}>92%</div>
                  <div className="stat-label">Reconnaissance</div>
                </div>
                <div className="stat-item" onClick={() => handleIdentityStatClick("Engagement", "78%")}>
                  <div className="stat-number" style={{ color: '#F97316' }}>78%</div>
                  <div className="stat-label">Engagement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Card 3: Promesse */}
            <div className="card animate-fade-in-up" style={{ flex: 1.4, '--delay': 3 }}>
              <div>
                <div className="card-header" onClick={() => addToast("Toute promesse marketing doit être corroborée par des preuves vérifiables.", "orange")}>
                  <div className="card-icon orange">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="card-title">Promesse &amp; preuves</div>
                </div>
                <div className="card-content">
                  Établissez la confiance par des preuves concrètes de votre expertise et de la satisfaction de vos clients.
                </div>
              </div>

              <div className="checklist">
                <div className="checklist-item" onClick={() => handleProofClick("Témoignages clients")}>
                  <div className="check-icon blue">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="check-text">Témoignages clients</div>
                </div>
                <div className="checklist-item" onClick={() => handleProofClick("Études de cas")}>
                  <div className="check-icon green">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="check-text">Études de cas</div>
                </div>
                <div className="checklist-item" onClick={() => handleProofClick("Certifications")}>
                  <div className="check-icon orange">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="check-text">Certifications</div>
                </div>
                <div className="checklist-item" onClick={() => handleProofClick("Chiffres clés")}>
                  <div className="check-icon blue">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="check-text">Chiffres clés</div>
                </div>
              </div>
            </div>

            {/* Card 4: Lignes éditoriales */}
            <div className="card animate-fade-in-up" style={{ flex: 1, '--delay': 4 }} onClick={handleEditorialClick}>
              <div>
                <div className="card-header">
                  <div className="card-icon purple">
                    <i className="fas fa-edit"></i>
                  </div>
                  <div className="card-title">Lignes éditoriales</div>
                </div>
                <div className="card-content" style={{ marginBottom: '10px' }}>
                  Définissez vos thèmes de contenu, fréquence de publication et ton de communication pour créer une présence digitale cohérente.
                </div>
              </div>

              <div>
                <div className="progress-bar">
                  <div className="progress-fill green" style={{ width: '75%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>Cohérence</div>
                  <div style={{ fontSize: '13px', color: '#10B981', fontWeight: 600 }}>75%</div>
                </div>
              </div>
            </div>
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
