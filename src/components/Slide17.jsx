import React, { useState, useEffect } from 'react';
import './Slide17.css';

const checklistData = [
  {
    id: 'balises',
    icon: 'fa-code',
    color: 'blue',
    title: 'Balises HTML',
    items: [
      { title: 'Title Tag', desc: 'Mot-clé principal dans les 60 premiers caractères', priority: 'high', checked: true },
      { title: 'Meta Description', desc: 'Accroche clé entre 140 et 160 caractères', priority: 'high', checked: true },
      { title: 'Balises Hn', desc: 'Hiérarchie H1 → H2 → H3 cohérente', priority: 'high', checked: true },
    ],
  },
  {
    id: 'contenu',
    icon: 'fa-file-alt',
    color: 'green',
    title: 'Contenu & Sémantique',
    items: [
      { title: 'Intention de recherche', desc: "Contenu aligné sur l'intention utilisateur", priority: 'high', checked: true },
      { title: 'Densité de mots-clés', desc: 'Fréquence naturelle sans sur-optimisation', priority: 'medium', checked: false },
      { title: 'Champ lexical', desc: 'Variantes sémantiques et synonymes enrichis', priority: 'medium', checked: true },
    ],
  },
  {
    id: 'media',
    icon: 'fa-image',
    color: 'orange',
    title: 'Médias & Accessibilité',
    items: [
      { title: 'Attributs Alt', desc: 'Description précise de chaque image', priority: 'high', checked: true },
      { title: 'Compression images', desc: 'WebP < 100kb, impact Core Web Vitals', priority: 'high', checked: false },
      { title: 'Lazy Loading', desc: 'Chargement différé des ressources non critiques', priority: 'medium', checked: true },
    ],
  },
  {
    id: 'liens',
    icon: 'fa-link',
    color: 'purple',
    title: 'Maillage & Liens',
    items: [
      { title: 'Liens internes', desc: '3 à 5 liens vers pages thématiques connexes', priority: 'high', checked: true },
      { title: 'Ancres optimisées', desc: "Texte d'ancre descriptif et varié", priority: 'medium', checked: false },
      { title: 'Liens sortants', desc: "Sources d'autorité et de référence", priority: 'low', checked: true },
    ],
  },
];

const toastDetails = {
  'Title Tag': "Title Tag : Élément HTML le plus important. Doit contenir le mot-clé principal dès les 60 premiers caractères pour un affichage optimal dans les SERPs.",
  'Meta Description': "Meta Description : N'influence pas directement le classement mais impacte fortement le taux de clic (CTR). Rédigez une accroche persuasive.",
  'Balises Hn': "Balises Hn : Un seul H1 par page. Les H2/H3 organisent la lecture et permettent à Google de comprendre la structure du contenu.",
  'Intention de recherche': "Intention de recherche : Clé du SEO moderne. Google évalue si votre contenu correspond à ce que l'utilisateur recherche réellement.",
  'Densité de mots-clés': "Densité de mots-clés : Visez 1 à 2% de fréquence naturelle. Évitez le keyword stuffing qui pénalise votre référencement.",
  'Champ lexical': "Champ lexical : Utilisez des synonymes et termes connexes (LSI keywords) pour enrichir la sémantique et couvrir plus de requêtes.",
  'Attributs Alt': "Attributs Alt : Indispensable pour l'accessibilité et le référencement image. Décrivez précisément le contenu de chaque visuel.",
  'Compression images': "Compression images : Les images non optimisées pénalisent le LCP (Largest Contentful Paint), un facteur Core Web Vitals critique.",
  'Lazy Loading': "Lazy Loading : Technique de chargement différé qui améliore la vitesse perçue et réduit le poids initial de la page.",
  'Liens internes': "Liens internes : Distribuent le PageRank entre vos pages et guident les bots de crawl vers votre contenu prioritaire.",
  'Ancres optimisées': "Ancres optimisées : Le texte d'ancre donne un signal thématique fort à Google. Variez les formulations pour paraître naturel.",
  'Liens sortants': "Liens sortants : Citer des sources faisant autorité améliore la crédibilité EEAT de votre page aux yeux de Google.",
};

export default function Slide17() {
  const [toasts, setToasts] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const initial = {};
    checklistData.forEach(col => {
      col.items.forEach(item => {
        initial[item.title] = item.checked;
      });
    });
    setCheckedItems(initial);
  }, []);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts(prev => prev.slice(1));
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = (text, type = 'blue') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, text, type }]);
  };

  const toggleCheck = (e, title) => {
    e.stopPropagation();
    setCheckedItems(prev => ({ ...prev, [title]: !prev[title] }));
    addToast(toastDetails[title] || `Élément SEO : ${title}`, 'blue');
  };

  const totalItems = Object.keys(checkedItems).length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  const priorityColor = { high: 'high', medium: 'medium', low: 'low' };

  return (
    <div className="slide-17">
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="header animate17-fade-in-down">
          <div className="title-section">
            <div className="title-icon">
              <i className="fas fa-check-square"></i>
            </div>
            <div>
              <h1 className="main-title">SEO On-Page — Checklist</h1>
              <div className="subtitle">Optimisation on-page complète pour le référencement</div>
            </div>
          </div>
          <div className="badge" onClick={() => addToast("Checklist SEO On-Page : 12 éléments essentiels pour optimiser chaque page de votre site.", "orange")}>
            <i className="fas fa-clipboard-check" style={{ marginRight: '8px' }}></i>
            12 éléments
          </div>
        </div>

        {/* Main Grid */}
        <div className="main-content">
          {checklistData.map((col, ci) => (
            <div key={col.id} className={`checklist-card animate17-fade-in-up`} style={{ '--delay': ci + 1 }}>
              <div className="card-header">
                <div className={`card-icon ${col.color}`}>
                  <i className={`fas ${col.icon}`}></i>
                </div>
                <div className="card-title">{col.title}</div>
              </div>
              <div className="checklist-items">
                {col.items.map(item => (
                  <div
                    key={item.title}
                    className="checklist-item"
                    onClick={(e) => toggleCheck(e, item.title)}
                  >
                    <div className={`checkbox ${checkedItems[item.title] ? 'checked' : ''}`}>
                      {checkedItems[item.title] && <i className="fas fa-check"></i>}
                    </div>
                    <div className="item-content">
                      <div className="item-title">{item.title}</div>
                      <div className="item-desc">{item.desc}</div>
                    </div>
                    <div className={`priority-badge ${priorityColor[item.priority]}`}>
                      {item.priority === 'high' ? 'Haute' : item.priority === 'medium' ? 'Moyenne' : 'Faible'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="progress-section animate17-fade-in-up" style={{ '--delay': 5 }}>
          <div className="progress-info">
            <span>Progression: <strong style={{ color: 'white' }}>{checkedCount}/{totalItems}</strong></span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span style={{ color: '#10B981', fontWeight: 700 }}>{progress}%</span>
          </div>
          <div className="action-buttons">
            <button className="action-btn secondary" onClick={() => addToast("Rapport d'audit SEO on-page exporté avec succès.", "info")}>
              <i className="fas fa-download"></i>Exporter
            </button>
            <button className="action-btn primary" onClick={() => addToast("Optimisation automatique des balises et métadonnées en cours...", "green")}>
              <i className="fas fa-play"></i>Optimiser
            </button>
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
