import React, { useState, useEffect } from 'react';
import './Slide14.css';

export default function Slide14() {
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

  const handleFormulaClick = (formulaName) => {
    const details = {
      "AIDA": "Formule AIDA : La plus classique. Idéale pour les pages de vente longues, les emails de prospection et les posts publicitaires.",
      "PAS": "Formule PAS : La plus efficace pour résoudre des problèmes. Elle appuie sur la douleur du client avant d'amener la solution.",
      "4U": "Formule 4U : Parfaite pour les titres, les objets d'emails et les réseaux sociaux. Elle mise sur la clarté et l'immédiateté.",
      "FAB": "Formule FAB : Idéale pour les fiches produits. Elle traduit chaque caractéristique technique en gain concret pour le client."
    };
    addToast(details[formulaName] || `Détails de la formule : ${formulaName}`, 'blue');
  };

  const handleStepClick = (formulaName, stepLetter, stepTitle) => {
    const steps = {
      "AIDA": {
        "A": "Attention : Utilisez une question provocante, une statistique choc ou un problème urgent pour arrêter le défilement.",
        "I": "Intérêt : Donnez des chiffres précis, racontez une anecdote rapide ou montrez que vous comprenez la situation.",
        "D": "Désir : Faites visualiser la situation idéale après résolution du problème ou utilisation du produit.",
        "A2": "Action : Le CTA doit être direct et unique. Exemple : 'Télécharger le guide' ou 'Réserver un créneau'."
      },
      "PAS": {
        "P": "Problème : Formulez précisément la frustration que ressent votre cible au quotidien pour capter son attention.",
        "A": "Agitation : Montrez ce qui se passe si le problème n'est pas résolu (perte financière, stress accru, opportunités manquées).",
        "S": "Solution : Introduisez votre offre de manière naturelle comme la suite logique pour en finir avec cette frustration."
      },
      "4U": {
        "U1": "Utile : Le contenu doit immédiatement montrer ce qu'il va apporter au lecteur pour capter son intérêt.",
        "U2": "Urgent : Donnez une raison de lire ou d'agir maintenant (ex: édition limitée, temps restant).",
        "U3": "Unique : Qu'est-ce qui différencie cette offre ou cette information de tout ce qui existe déjà ?",
        "U4": "Ultra-spécifique : Utilisez des chiffres concrets (ex: '+15.4% de conversion' plutôt que 'augmentez vos conversions')."
      },
      "FAB": {
        "F": "Features (Caractéristiques) : Ce que le produit fait ou contient (technique). Exemple : Batterie 5000 mAh.",
        "A": "Advantages (Avantages) : Ce que cette caractéristique permet de faire. Exemple : Dure plus longtemps.",
        "B": "Benefits (Bénéfices) : Ce que cela change dans la vie du client. Exemple : Plus besoin de charger en journée."
      }
    };
    const key = stepLetter === 'A' && stepTitle === 'Action' ? 'A2' : stepLetter;
    const desc = steps[formulaName]?.[key] || `${stepTitle} (${stepLetter}) : Étape essentielle de la formule.`;
    const colorMap = { AIDA: 'blue', PAS: 'green', '4U': 'orange', FAB: 'purple' };
    addToast(desc, colorMap[formulaName] || 'blue');
  };

  return (
    <div className="slide-14">
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
              <i className="fas fa-pen-fancy"></i>
            </div>
            <div>
              <h1 className="main-title">Copywriting Persuasif</h1>
              <div className="subtitle">Formules et techniques pour écrire des textes qui convertissent</div>
            </div>
          </div>
          <div className="badge" onClick={() => addToast("Frameworks d'écriture persuasive testés pour la conversion digitale.", "purple")}>
            <i className="fas fa-magic" style={{ marginRight: '8px' }}></i>
            4 Formules
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Card AIDA */}
          <div className="formula-card aida animate-fade-in-up" style={{ '--delay': 1 }} onClick={() => handleFormulaClick("AIDA")}>
            <div className="formula-header">
              <div className="formula-icon blue">
                <i className="fas fa-bullseye"></i>
              </div>
              <div>
                <div className="formula-title">AIDA</div>
                <div className="formula-subtitle">Attention - Intérêt - Désir - Action</div>
              </div>
            </div>
            <div className="formula-content">
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("AIDA", "A", "Attention"); }}>
                <div className="step-letter blue">A</div>
                <div className="step-content">
                  <div className="step-title">Attention</div>
                  <div className="step-desc">Accrochez immédiatement avec un titre accrocheur</div>
                </div>
              </div>
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("AIDA", "I", "Intérêt"); }}>
                <div className="step-letter blue">I</div>
                <div className="step-content">
                  <div className="step-title">Intérêt</div>
                  <div className="step-desc">Créez de l'engagement avec du contenu pertinent</div>
                </div>
              </div>
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("AIDA", "D", "Désir"); }}>
                <div className="step-letter blue">D</div>
                <div className="step-content">
                  <div className="step-title">Désir</div>
                  <div className="step-desc">Générez l'envie avec des bénéfices concrets</div>
                </div>
              </div>
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("AIDA", "A", "Action"); }}>
                <div className="step-letter blue">A</div>
                <div className="step-content">
                  <div className="step-title">Action</div>
                  <div className="step-desc">Incitez à l'action avec un CTA clair</div>
                </div>
              </div>
            </div>
            <div className="example-box" onClick={(e) => e.stopPropagation()}>
              <div className="example-label">
                <i className="fas fa-lightbulb"></i>
                <span>Exemple</span>
              </div>
              <div className="example-text">
                "Découvrez le secret des entrepreneurs à succès [Attention]. Apprenez comment ils ont augmenté leurs revenus de 300% [Intérêt]. Imaginez votre vie sans stress financier [Désir]. Téléchargez notre guide gratuit maintenant [Action]."
              </div>
            </div>
          </div>

          {/* Card PAS */}
          <div className="formula-card pas animate-fade-in-up" style={{ '--delay': 2 }} onClick={() => handleFormulaClick("PAS")}>
            <div className="formula-header">
              <div className="formula-icon green">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div>
                <div className="formula-title">PAS</div>
                <div className="formula-subtitle">Problème - Agitation - Solution</div>
              </div>
            </div>
            <div className="formula-content">
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("PAS", "P", "Problème"); }}>
                <div className="step-letter green">P</div>
                <div className="step-content">
                  <div className="step-title">Problème</div>
                  <div className="step-desc">Identifiez le problème ou la douleur</div>
                </div>
              </div>
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("PAS", "A", "Agitation"); }}>
                <div className="step-letter green">A</div>
                <div className="step-content">
                  <div className="step-title">Agitation</div>
                  <div className="step-desc">Amplifiez la douleur et les conséquences</div>
                </div>
              </div>
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("PAS", "S", "Solution"); }}>
                <div className="step-letter green">S</div>
                <div className="step-content">
                  <div className="step-title">Solution</div>
                  <div className="step-desc">Présentez votre solution comme le remède</div>
                </div>
              </div>
            </div>
            <div className="example-box" onClick={(e) => e.stopPropagation()}>
              <div className="example-label">
                <i className="fas fa-lightbulb"></i>
                <span>Exemple</span>
              </div>
              <div className="example-text">
                "Vous avez du mal à générer des leads ? [Problème] Chaque jour sans stratégie, vous perdez des clients [Agitation]. Notre méthode éprouvée vous permet de générer 50 leads qualifiés par mois [Solution]."
              </div>
            </div>
          </div>

          {/* Card 4U */}
          <div className="formula-card fouru animate-fade-in-up" style={{ '--delay': 3 }} onClick={() => handleFormulaClick("4U")}>
            <div className="formula-header">
              <div className="formula-icon orange">
                <i className="fas fa-bolt"></i>
              </div>
              <div>
                <div className="formula-title">4U</div>
                <div className="formula-subtitle">Utile - Urgent - Unique - Ultra-spécifique</div>
              </div>
            </div>
            <div className="formula-content">
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("4U", "U1", "Utile"); }}>
                <div className="step-letter orange">U1</div>
                <div className="step-content">
                  <div className="step-title">Utile</div>
                  <div className="step-desc">Apporte une valeur réelle au lecteur</div>
                </div>
              </div>
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("4U", "U2", "Urgent"); }}>
                <div className="step-letter orange">U2</div>
                <div className="step-content">
                  <div className="step-title">Urgent</div>
                  <div className="step-desc">Créez un sentiment d'urgence</div>
                </div>
              </div>
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("4U", "U3", "Unique"); }}>
                <div className="step-letter orange">U3</div>
                <div className="step-content">
                  <div className="step-title">Unique</div>
                  <div className="step-desc">Offrez quelque chose d'exclusif</div>
                </div>
              </div>
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("4U", "U4", "Ultra-spécifique"); }}>
                <div className="step-letter orange">U4</div>
                <div className="step-content">
                  <div className="step-title">Ultra-spécifique</div>
                  <div className="step-desc">Soyez précis et concret</div>
                </div>
              </div>
            </div>
            <div className="example-box fouru" onClick={(e) => e.stopPropagation()}>
              <div className="example-label fouru-label">
                <i className="fas fa-lightbulb"></i>
                <span>Exemple</span>
              </div>
              <div className="example-text">
                "5 techniques pour doubler vos ventes ce mois-ci [Utile]. Offre valable jusqu'à ce soir minuit [Urgent]. La méthode que 97% des marketeurs ignorent [Unique]. Augmentez votre taux de conversion de 34% en 7 jours [Ultra-spécifique]."
              </div>
            </div>
          </div>

          {/* Card FAB */}
          <div className="formula-card fab animate-fade-in-up" style={{ '--delay': 4 }} onClick={() => handleFormulaClick("FAB")}>
            <div className="formula-header">
              <div className="formula-icon purple">
                <i className="fas fa-gem"></i>
              </div>
              <div>
                <div className="formula-title">FAB</div>
                <div className="formula-subtitle">Features - Advantages - Benefits</div>
              </div>
            </div>
            <div className="formula-content">
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("FAB", "F", "Features"); }}>
                <div className="step-letter purple">F</div>
                <div className="step-content">
                  <div className="step-title">Features</div>
                  <div className="step-desc">Caractéristiques techniques du produit</div>
                </div>
              </div>
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("FAB", "A", "Advantages"); }}>
                <div className="step-letter purple">A</div>
                <div className="step-content">
                  <div className="step-title">Advantages</div>
                  <div className="step-desc">Avantages par rapport aux concurrents</div>
                </div>
              </div>
              <div className="formula-step" onClick={(e) => { e.stopPropagation(); handleStepClick("FAB", "B", "Benefits"); }}>
                <div className="step-letter purple">B</div>
                <div className="step-content">
                  <div className="step-title">Benefits</div>
                  <div className="step-desc">Bénéfices pour le client</div>
                </div>
              </div>
            </div>
            <div className="example-box" style={{ marginTop: '5px', padding: '6px 14px' }} onClick={(e) => e.stopPropagation()}>
              <div className="example-label">
                <i className="fas fa-lightbulb"></i>
                <span>Exemple</span>
              </div>
              <div className="example-text">
                "Notre logiciel intègre l'IA [Feature]. Cela vous permet d'automatiser 80% des tâches [Advantage]. Vous gagnez 10h par semaine [Benefit]."
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section animate-fade-in-up" style={{ '--delay': 5 }}>
          <div className="progress-info">
            <div>Progression: <span style={{ color: 'white', fontWeight: 700 }}>75%</span></div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="action-buttons">
            <button className="action-btn secondary" onClick={() => addToast("Exportation des structures et des exemples de formules de rédaction...", "info")}>
              <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Exporter
            </button>
            <button className="action-btn primary" onClick={() => addToast("Application de la formule sélectionnée sur votre éditeur...", "green")}>
              <i className="fas fa-play" style={{ marginRight: '8px' }}></i>Appliquer
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
