#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Génère les slides 25-40 en JSX + CSS de manière propre.
Reprend exactement la structure CSS/JSX des slides 1-20 (width: 1280px, height: 720px).
"""
import os, json

BASE = r"c:\Users\HACKER SUR MESURE\Downloads\marketing digital React\src\components"

# ─────────────────────────────── DATA ────────────────────────────────────────
SLIDES = [
  {
    "num": 25,
    "css_icon_bg": "linear-gradient(135deg, #FF642B, #e05521)",
    "fa_icon": "fas fa-search-dollar",
    "title": "SEMrush \u2014 Guide d'utilisation",
    "subtitle": "Fonctionnalit\u00e9s principales et cas d'usage SEO",
    "badge_text": "8 Outils cl\u00e9s",
    "badge_fa": "fa-star",
    "prog": 85,
    "cards": [
      {"color":"blue",  "icon":"fa-magic",      "label":"Keyword Magic Tool","val":"2.5M+",   "unit":"mots-cl\u00e9s"},
      {"color":"green", "icon":"fa-globe",       "label":"Domain Overview",   "val":"78",      "unit":"autorit\u00e9 domaine"},
      {"color":"orange","icon":"fa-crosshairs",  "label":"Position Tracking", "val":"1 234",   "unit":"positions suivies"},
      {"color":"purple","icon":"fa-stethoscope", "label":"Site Audit Score",  "val":"92/100",  "unit":"sant\u00e9 technique"},
      {"color":"pink",  "icon":"fa-link",        "label":"Backlink Analytics","val":"2.5K",    "unit":"liens entrants"},
      {"color":"cyan",  "icon":"fa-file-alt",    "label":"Content Template",  "val":"88/100",  "unit":"score contenu"},
    ],
    "toasts": [
      {"text":"Keyword Magic Tool : La plus grande base de donn\u00e9es (24 Mds de mots-cl\u00e9s). Filtrez par KD < 40, Volume > 500, exportez en CSV pour votre keyword mapping.","type":"blue"},
      {"text":"Domain Overview : Analysez vos concurrents en 1 clic. Trafic organique estim\u00e9, top pages, backlinks les plus puissants et \u00e9volution historique.","type":"orange"},
      {"text":"Position Tracking : Suivez vos positions 24/7 sur mobile et desktop. Alertes email d\u00e8s qu'une position change. Comparaison concurrents en temps r\u00e9el.","type":"green"},
    ],
  },
  {
    "num": 26,
    "css_icon_bg": "linear-gradient(135deg, #6366F1, #4f46e5)",
    "fa_icon": "fas fa-layer-group",
    "title": "Stack Technologique Marketing",
    "subtitle": "Outils et technologies essentiels pour le marketing digital",
    "badge_text": "5 Cat\u00e9gories",
    "badge_fa": "fa-tools",
    "prog": 80,
    "cards": [
      {"color":"blue",  "icon":"fa-database",    "label":"CRM HubSpot",        "val":"Free",          "unit":"+ Pro 45\u20ac/mois"},
      {"color":"green", "icon":"fa-envelope",    "label":"Email Mailchimp",     "val":"0\u20ac",            "unit":"jusqu'\u00e0 500 contacts"},
      {"color":"orange","icon":"fa-search",      "label":"SEO SEMrush",         "val":"120\u20ac/mois",     "unit":"Essentials"},
      {"color":"purple","icon":"fa-robot",       "label":"Automation Make.com", "val":"9\u20ac/mois",       "unit":"1000 ops/mois"},
      {"color":"pink",  "icon":"fa-chart-bar",   "label":"Analytics GA4",       "val":"Gratuit",       "unit":"100% Google"},
      {"color":"cyan",  "icon":"fa-calendar-alt","label":"Planning Notion",      "val":"Free",          "unit":"+ Pro 8\u20ac/mois"},
    ],
    "toasts": [
      {"text":"Stack Tech : Commencez simple ! HubSpot CRM gratuit + GA4 + SEMrush Essentials + Mailchimp. Budget starter : 150\u20ac/mois pour un stack complet et professionnel.","type":"blue"},
      {"text":"Int\u00e9grations : Connectez vos outils via Make.com pour automatiser vos flux. Ex: nouveau lead Typeform \u2192 CRM HubSpot \u2192 Email Mailchimp en automatique.","type":"orange"},
      {"text":"ROI des outils : Un bon stack se rembourse en 2-3 mois. Calculez : (temps \u00e9conomis\u00e9 x TJM) + (leads suppl\u00e9mentaires x LTV) pour mesurer le ROI r\u00e9el.","type":"green"},
    ],
  },
  {
    "num": 27,
    "css_icon_bg": "linear-gradient(135deg, #10B981, #059669)",
    "fa_icon": "fas fa-calendar-alt",
    "title": "Marketing de Contenu \u2014 Framework",
    "subtitle": "Strat\u00e9gie compl\u00e8te et calendrier \u00e9ditorial 2026",
    "badge_text": "6 \u00c9tapes",
    "badge_fa": "fa-chart-line",
    "prog": 78,
    "cards": [
      {"color":"blue",  "icon":"fa-lightbulb",     "label":"Strat\u00e9gie & ICP",         "val":"4-6 sem.",  "unit":"dur\u00e9e pr\u00e9pa"},
      {"color":"green", "icon":"fa-calendar-check","label":"Calendrier \u00e9ditorial",      "val":"24/mois",   "unit":"contenus planifi\u00e9s"},
      {"color":"orange","icon":"fa-pen-fancy",      "label":"Production contenu",         "val":"8/mois",    "unit":"articles piliers"},
      {"color":"purple","icon":"fa-share-alt",      "label":"Diffusion & Promos",         "val":"3x/sem",    "unit":"fr\u00e9quence pub."},
      {"color":"pink",  "icon":"fa-recycle",        "label":"Repurposing",                "val":"x10",       "unit":"amplification"},
      {"color":"cyan",  "icon":"fa-chart-bar",      "label":"Mesure & Rapports",          "val":"6.8%",      "unit":"engagement rate"},
    ],
    "toasts": [
      {"text":"Framework Contenu : Avant de cr\u00e9er, d\u00e9finissez votre ICP (Ideal Customer Profile). Chaque contenu r\u00e9pond \u00e0 UNE douleur pr\u00e9cise. Topic Cluster = 1 pillar page + 8-12 pages satellites.","type":"blue"},
      {"text":"Calendrier \u00e9ditorial : Planifiez 4 semaines en avance. R\u00e8gle 80/20 : 80% contenu de valeur, 20% promotionnel. Publiez 3x/semaine avec constance plut\u00f4t que 10x puis silence.","type":"green"},
      {"text":"Repurposing : Chaque contenu pilier = 1 article long + 3 posts LinkedIn + 5 tweets + 1 newsletter + 1 Reel. Multipliez votre contenu x10 sans cr\u00e9er davantage.","type":"orange"},
    ],
  },
  {
    "num": 28,
    "css_icon_bg": "linear-gradient(135deg, #1877F2, #0d5ebc)",
    "fa_icon": "fas fa-share-alt",
    "title": "R\u00e9seaux Sociaux \u2014 Par Plateforme",
    "subtitle": "Strat\u00e9gie et objectifs par r\u00e9seau social en 2026",
    "badge_text": "6 Plateformes",
    "badge_fa": "fa-chart-line",
    "prog": 75,
    "cards": [
      {"color":"blue",  "icon":"fab fa-linkedin",   "label":"LinkedIn",      "val":"3-5x/sem",   "unit":"B2B focus"},
      {"color":"blue",  "icon":"fab fa-facebook-f", "label":"Facebook",      "val":"2-3x/sem",   "unit":"Community"},
      {"color":"purple","icon":"fab fa-instagram",  "label":"Instagram",     "val":"1x/jour",    "unit":"Reels priorit\u00e9"},
      {"color":"red",   "icon":"fab fa-youtube",    "label":"YouTube",       "val":"2x/mois",    "unit":"Long + Shorts"},
      {"color":"pink",  "icon":"fab fa-tiktok",     "label":"TikTok",        "val":"1-3x/jour",  "unit":"Gen Z reach"},
      {"color":"cyan",  "icon":"fab fa-twitter",    "label":"X (Twitter)",   "val":"2-5x/jour",  "unit":"Thought lead."},
    ],
    "toasts": [
      {"text":"LinkedIn 2026 : Taux d'engagement 6x sup\u00e9rieur aux autres r\u00e9seaux pour le B2B. Publiez 3-5x/semaine, mardis et jeudis 8h-10h. Posts texte longs (1300+ caract\u00e8res) = meilleure port\u00e9e organique.","type":"blue"},
      {"text":"Instagram Reels : 50% Reels + 30% Carrousels + 20% Stories. Utilisez 3-5 hashtags cibl\u00e9s. Hooks percutants dans les 3 premi\u00e8res secondes pour \u00e9viter le swipe.","type":"purple"},
      {"text":"TikTok Marketing : R\u00e8gle des 3 secondes. Son trending + sous-titres = +30% de compl\u00e9tion. Publiez 1-3x/jour les premiers mois pour tester les formats qui fonctionnent avec votre audience.","type":"pink"},
    ],
  },
  {
    "num": 29,
    "css_icon_bg": "linear-gradient(135deg, #EC4899, #db2777)",
    "fa_icon": "fas fa-heart",
    "title": "Engagement & Community Management",
    "subtitle": "Strat\u00e9gies pour construire une communaut\u00e9 engag\u00e9e et fid\u00e8le",
    "badge_text": "5 Strat\u00e9gies",
    "badge_fa": "fa-users",
    "prog": 72,
    "cards": [
      {"color":"blue",  "icon":"fa-comments",   "label":"R\u00e9ponse rapide",      "val":"< 2h",   "unit":"d\u00e9lai maximum"},
      {"color":"green", "icon":"fa-chart-line",  "label":"Engagement rate",       "val":"6.8%",   "unit":"average"},
      {"color":"purple","icon":"fa-users",       "label":"Communaut\u00e9 active",    "val":"12.4K",  "unit":"membres engag\u00e9s"},
      {"color":"orange","icon":"fa-bell",        "label":"Social Listening",       "val":"24/7",   "unit":"monitoring brand"},
      {"color":"pink",  "icon":"fa-trophy",      "label":"UGC (User Content)",     "val":"+35%",   "unit":"reach organique"},
      {"color":"cyan",  "icon":"fa-calendar",    "label":"Contenu planifi\u00e9",     "val":"80%",    "unit":"pr\u00e9par\u00e9 en avance"},
    ],
    "toasts": [
      {"text":"Community Management : R\u00e9pondez \u00e0 TOUS les commentaires dans les 2h suivant la publication. L'algorithme booste les posts avec beaucoup d'interactions rapides dans la premi\u00e8re heure.","type":"blue"},
      {"text":"Social Listening : Utilisez Mention, Brandwatch ou Google Alerts pour monitorer votre marque 24/7. Transformez chaque mention en opportunit\u00e9 de conversation et d'amplification.","type":"orange"},
      {"text":"Engagement Rate : ER = (likes+comments+shares) / followers x 100. Un ER > 3% = excellent. Analysez vos posts \u00e0 +5% et reproduisez les formats, sujets et styles qui performent.","type":"green"},
    ],
  },
  {
    "num": 30,
    "css_icon_bg": "linear-gradient(135deg, #1877F2, #0d5ebc)",
    "fa_icon": "fab fa-facebook-f",
    "title": "Facebook Ads \u2014 Structure de Campagne",
    "subtitle": "Architecture compl\u00e8te et optimisation des campagnes Facebook",
    "badge_text": "6 Niveaux",
    "badge_fa": "fa-bullseye",
    "prog": 85,
    "cards": [
      {"color":"blue",  "icon":"fa-bullseye",    "label":"Objectif Campagne",  "val":"Conversions", "unit":"CBO activ\u00e9"},
      {"color":"green", "icon":"fa-dollar-sign", "label":"Budget journalier",  "val":"500\u20ac",        "unit":"par campagne"},
      {"color":"orange","icon":"fa-users",       "label":"Audiences cibl\u00e9es", "val":"3 types",     "unit":"Cold/Warm/Hot"},
      {"color":"purple","icon":"fa-image",       "label":"Formats cr\u00e9atifs",  "val":"5 formats",   "unit":"image+vid\u00e9o"},
      {"color":"pink",  "icon":"fa-chart-line",  "label":"ROAS moyen",         "val":"3.2x",         "unit":"return on ad spend"},
      {"color":"cyan",  "icon":"fa-percentage",  "label":"CPA moyen",          "val":"12.50\u20ac",       "unit":"cost per action"},
    ],
    "toasts": [
      {"text":"Structure Facebook Ads : 3 niveaux \u2014 Campagne (objectif+budget CBO), Ensemble pub (audience+placements), Annonces (cr\u00e9as+copies). Testez 3-5 cr\u00e9as par ensemble d'annonces.","type":"blue"},
      {"text":"Audiences Facebook : 3 types \u2014 Int\u00e9r\u00eats (cold), Lookalike 1-3% (warm), Retargeting (hot). Budget id\u00e9al : 20% cold / 30% warm / 50% retargeting pour maximiser le ROAS.","type":"orange"},
      {"text":"Pixel Facebook : Installez le Pixel + Conversions API (CAPI) pour contrer iOS 14+. Le CAPI am\u00e9liore la remont\u00e9e des \u00e9v\u00e9nements de 15-30% et r\u00e9duit le co\u00fbt par conversion.","type":"green"},
    ],
  },
  {
    "num": 31,
    "css_icon_bg": "linear-gradient(135deg, #4285F4, #1a73e8)",
    "fa_icon": "fab fa-google",
    "title": "Google Ads \u2014 Types et Optimisation",
    "subtitle": "Ma\u00eetrise des campagnes Search, Display, Shopping et Performance Max",
    "badge_text": "5 Types",
    "badge_fa": "fa-search",
    "prog": 82,
    "cards": [
      {"color":"blue",  "icon":"fa-search",        "label":"Search Ads",         "val":"ROAS 4.2x",  "unit":"intent-based"},
      {"color":"green", "icon":"fa-image",          "label":"Display Network",    "val":"CPM 2.5\u20ac",   "unit":"brand awareness"},
      {"color":"orange","icon":"fa-shopping-cart",  "label":"Shopping Ads",       "val":"ROAS 5.8x",  "unit":"e-commerce"},
      {"color":"purple","icon":"fa-bolt",           "label":"Performance Max",    "val":"Auto",       "unit":"tous canaux Google"},
      {"color":"pink",  "icon":"fa-video",          "label":"YouTube Ads",        "val":"CPV 0.04\u20ac",  "unit":"skippable"},
      {"color":"cyan",  "icon":"fa-star",           "label":"Quality Score",      "val":"8.2/10",     "unit":"pertinence"},
    ],
    "toasts": [
      {"text":"Google Search Ads : Structure id\u00e9ale \u2014 Campagne (march\u00e9), Groupe (th\u00e9matique), Annonces (RSA min. 3). Utilisez 10-15 mots-cl\u00e9s par groupe. Correspondance exacte pour d\u00e9buter.","type":"blue"},
      {"text":"Quality Score : QS = Pertinence annonce + CTR attendu + Exp\u00e9rience page. Un QS 8-10 r\u00e9duit votre CPC de 50%. Alignez toujours le message de l'annonce avec la landing page.","type":"orange"},
      {"text":"Performance Max : Campagne automatis\u00e9e utilisant tous les canaux Google (Search, Display, YouTube, Gmail, Maps). Donnez-lui 2-4 semaines d'apprentissage avant d'optimiser.","type":"green"},
    ],
  },
  {
    "num": 32,
    "css_icon_bg": "linear-gradient(135deg, #F97316, #ea580c)",
    "fa_icon": "fas fa-calculator",
    "title": "Budget Publicitaire \u2014 R\u00e9partition",
    "subtitle": "Strat\u00e9gie Test/Scale (70-20-10) et optimisation des canaux",
    "badge_text": "6 Canaux",
    "badge_fa": "fa-chart-pie",
    "prog": 78,
    "cards": [
      {"color":"green", "icon":"fab fa-google",      "label":"Google Ads Search", "val":"35%",      "unit":"budget \u2014 ROAS 4.2x"},
      {"color":"blue",  "icon":"fab fa-facebook-f",  "label":"Facebook Ads",      "val":"25%",      "unit":"budget \u2014 ROAS 3.8x"},
      {"color":"purple","icon":"fab fa-linkedin",    "label":"LinkedIn Ads",      "val":"20%",      "unit":"budget \u2014 CPL 38\u20ac"},
      {"color":"red",   "icon":"fab fa-youtube",     "label":"YouTube Ads",       "val":"15%",      "unit":"budget \u2014 CPV 0.04\u20ac"},
      {"color":"pink",  "icon":"fab fa-tiktok",      "label":"TikTok Ads",        "val":"5%",       "unit":"budget \u2014 CPM 5\u20ac"},
      {"color":"cyan",  "icon":"fa-chart-bar",       "label":"Budget total/mois", "val":"15 000\u20ac",  "unit":"ROAS moy. 4.1x"},
    ],
    "toasts": [
      {"text":"R\u00e8gle 70-20-10 : 70% budget sur ce qui marche (canaux prouv\u00e9s), 20% sur des tests prometteurs (nouveaux formats/audiences), 10% sur l'exp\u00e9rimentation pure. R\u00e9allouez chaque mois.","type":"blue"},
      {"text":"CAC et LTV : CAC = budget total / nouveaux clients. LTV = revenu moyen x dur\u00e9e vie client. Le ratio LTV/CAC doit \u00eatre > 3 pour un business viable. En dessous : r\u00e9duisez CAC ou augmentez LTV.","type":"orange"},
      {"text":"Budget minimum par canal : Google Search = 30\u20ac/jour min. Facebook = 20\u20ac/jour min. En dessous, l'algorithme n'a pas assez de donn\u00e9es pour optimiser. Concentrez les budgets.","type":"green"},
    ],
  },
  {
    "num": 33,
    "css_icon_bg": "linear-gradient(135deg, #10B981, #059669)",
    "fa_icon": "fas fa-envelope",
    "title": "Email Marketing \u2014 S\u00e9quences & Segments",
    "subtitle": "Automatisation des campagnes email et segmentation avanc\u00e9e",
    "badge_text": "5 S\u00e9quences",
    "badge_fa": "fa-chart-line",
    "prog": 80,
    "cards": [
      {"color":"blue",  "icon":"fa-handshake",    "label":"Welcome Sequence",   "val":"45%",   "unit":"open rate \u2014 J0 \u00e0 J7"},
      {"color":"green", "icon":"fa-heart",         "label":"Nurture Flow",       "val":"38%",   "unit":"open rate \u2014 5 emails"},
      {"color":"orange","icon":"fa-shopping-cart", "label":"Abandon Panier",     "val":"52%",   "unit":"open rate \u2014 r\u00e9cup\u00e8re 20%"},
      {"color":"purple","icon":"fa-box",           "label":"Post-achat",         "val":"41%",   "unit":"open rate \u2014 upsell"},
      {"color":"pink",  "icon":"fa-redo",          "label":"R\u00e9activation",      "val":"35%",   "unit":"open rate \u2014 inactifs 60j"},
      {"color":"cyan",  "icon":"fa-chart-line",    "label":"D\u00e9livrabilit\u00e9",     "val":"98%",   "unit":"inbox rate"},
    ],
    "toasts": [
      {"text":"Welcome Sequence : La s\u00e9quence la plus rentable. Email 1 (J0): Bienvenue + valeur imm\u00e9diate. Email 2 (J3): Votre histoire. Email 3 (J7): Offre douce. Taux d'ouverture moyen : 45-60%.","type":"blue"},
      {"text":"Abandon de panier : 3 emails : J0+1h (rappel), J1 (b\u00e9n\u00e9fices), J3 (urgence + r\u00e9duction). R\u00e9cup\u00e8re en moyenne 15-25% des paniers abandonn\u00e9s. ROI parmi les plus \u00e9lev\u00e9s en email.","type":"orange"},
      {"text":"Segmentation RFM : Recency (derni\u00e8re commande), Frequency (fr\u00e9quence), Monetary (montant). Segmentez vos clients en Champions, Fid\u00e8les, \u00c0 risque, Dormants. Messages personnalis\u00e9s par segment.","type":"green"},
    ],
  },
  {
    "num": 34,
    "css_icon_bg": "linear-gradient(135deg, #8B5CF6, #6d28d9)",
    "fa_icon": "fas fa-cogs",
    "title": "Marketing Automation \u2014 Workflows",
    "subtitle": "Automatisation des processus marketing et scoring des leads",
    "badge_text": "6 Workflows",
    "badge_fa": "fa-robot",
    "prog": 75,
    "cards": [
      {"color":"blue",  "icon":"fa-user-plus",   "label":"Lead Nurturing",       "val":"451%",      "unit":"plus de MQLs"},
      {"color":"green", "icon":"fa-star",         "label":"Lead Scoring",         "val":"100 pts",   "unit":"= MQL transmis"},
      {"color":"orange","icon":"fa-envelope",     "label":"Email Automation",     "val":"5 flows",   "unit":"actifs en parall\u00e8le"},
      {"color":"purple","icon":"fa-bell",         "label":"Alertes Commerciaux",  "val":"Real-time", "unit":"\u00e0 100+ points"},
      {"color":"pink",  "icon":"fa-chart-line",   "label":"Taux de conversion",   "val":"+23%",      "unit":"vs non-nurtur\u00e9s"},
      {"color":"cyan",  "icon":"fa-dollar-sign",  "label":"ROI moyen",            "val":"4.2x",      "unit":"sur l'automation"},
    ],
    "toasts": [
      {"text":"Lead Scoring : Attribuez des points aux actions (email ouvert = 5pts, page pricing visit\u00e9e = 20pts, d\u00e9mo demand\u00e9e = 50pts). Lead qualifi\u00e9 (MQL) d\u00e8s 100 points \u2192 transmission au commercial.","type":"blue"},
      {"text":"Workflow de nurturing : Segmentez les leads par int\u00e9r\u00eat et maturit\u00e9. Contenu TOFU (awareness), MOFU (consideration), BOFU (decision). Chaque stade = messages et offres diff\u00e9rents.","type":"orange"},
      {"text":"ROI Automation : Les workflows automatis\u00e9s g\u00e9n\u00e8rent en moyenne 451% plus de leads qualifi\u00e9s. Commencez par automatiser le Welcome, puis le Panier abandonn\u00e9.","type":"green"},
    ],
  },
  {
    "num": 35,
    "css_icon_bg": "linear-gradient(135deg, #F97316, #ea580c)",
    "fa_icon": "fas fa-filter",
    "title": "Tunnel de Vente \u2014 Sch\u00e9ma Complet",
    "subtitle": "Optimisation du parcours client et conversion maximale",
    "badge_text": "5 \u00c9tapes",
    "badge_fa": "fa-chart-line",
    "prog": 82,
    "cards": [
      {"color":"blue",  "icon":"fa-eye",            "label":"TOFU \u2014 Awareness",  "val":"10 000",    "unit":"visiteurs/mois"},
      {"color":"green", "icon":"fa-mouse-pointer",  "label":"MOFU \u2014 Leads",      "val":"450",       "unit":"leads/mois (4.5%)"},
      {"color":"orange","icon":"fa-shopping-cart",  "label":"BOFU \u2014 Prospects",  "val":"90",        "unit":"prospects (20%)"},
      {"color":"purple","icon":"fa-handshake",      "label":"Closing \u2014 Clients", "val":"27",        "unit":"clients (30%)"},
      {"color":"pink",  "icon":"fa-redo",           "label":"R\u00e9tention \u2014 Upsell","val":"65%",      "unit":"taux de r\u00e9tention"},
      {"color":"cyan",  "icon":"fa-chart-line",     "label":"LTV moyen client",     "val":"2 400\u20ac",   "unit":"sur 12 mois"},
    ],
    "toasts": [
      {"text":"TOFU (Top of Funnel) : Attirer le trafic froid. Contenu \u00e9ducatif, SEO, Social Media, Ads de notori\u00e9t\u00e9. Objectif : g\u00e9n\u00e9rer du trafic qualifi\u00e9. KPI : sessions, taux de rebond, CPM.","type":"blue"},
      {"text":"MOFU (Middle of Funnel) : Convertir les visiteurs en leads. Lead magnet (ebook, webinar, audit gratuit), landing page optimis\u00e9e, formulaire simple. KPI : taux de conversion lead, CPL.","type":"orange"},
      {"text":"BOFU (Bottom of Funnel) : Transformer les leads en clients. Demo, essai gratuit, t\u00e9moignages, garantie. Retargeting fort. KPI : taux de closing, CPA, ROAS, LTV.","type":"green"},
    ],
  },
  {
    "num": 36,
    "css_icon_bg": "linear-gradient(135deg, #6366F1, #4f46e5)",
    "fa_icon": "fas fa-robot",
    "title": "IA pour le Marketing \u2014 Applications 2026",
    "subtitle": "Cas d'usage concrets et bonnes pratiques de l'IA en marketing",
    "badge_text": "8 Applications",
    "badge_fa": "fa-magic",
    "prog": 88,
    "cards": [
      {"color":"blue",  "icon":"fa-lightbulb",  "label":"Id\u00e9ation & Briefs",    "val":"2.5x",  "unit":"plus rapide"},
      {"color":"green", "icon":"fa-pen",         "label":"R\u00e9daction Assist\u00e9e", "val":"3x",    "unit":"productivit\u00e9"},
      {"color":"orange","icon":"fa-image",       "label":"G\u00e9n\u00e9ration M\u00e9dias",  "val":"5x",    "unit":"vitesse cr\u00e9ation"},
      {"color":"purple","icon":"fa-comments",   "label":"Chatbots & FAQ",      "val":"24/7",  "unit":"disponible auto"},
      {"color":"pink",  "icon":"fa-chart-line",  "label":"Scoring Pr\u00e9dictif",   "val":"+23%",  "unit":"taux de conversion"},
      {"color":"cyan",  "icon":"fa-user",        "label":"Personnalisation",    "val":"+35%",  "unit":"engagement"},
    ],
    "toasts": [
      {"text":"IA R\u00e9daction : ChatGPT, Claude, Gemini = 3x plus productif pour cr\u00e9er des contenus. Utilisez toujours l'IA comme co-pilote, pas comme pilote. V\u00e9rifiez, personnalisez, humanisez.","type":"blue"},
      {"text":"IA M\u00e9dias : Midjourney, DALL-E, Sora = cr\u00e9ation visuelle 5x plus rapide. Id\u00e9al pour les variantes A/B de cr\u00e9atifs publicitaires. Toujours v\u00e9rifier les droits d'auteur.","type":"orange"},
      {"text":"IA Lead Scoring : Les algorithmes ML pr\u00e9dictifs analysent 200+ signaux comportementaux pour scorer les leads avec 89% de pr\u00e9cision. R\u00e9sultat : +23% de taux de conversion commerciale.","type":"green"},
    ],
  },
  {
    "num": 37,
    "css_icon_bg": "linear-gradient(135deg, #3B82F6, #1d4ed8)",
    "fa_icon": "fas fa-chart-bar",
    "title": "Analyse de Donn\u00e9es \u2014 KPIs & Dashboards",
    "subtitle": "Mesure de la performance et prise de d\u00e9cision data-driven",
    "badge_text": "5 Dashboards",
    "badge_fa": "fa-chart-bar",
    "prog": 80,
    "cards": [
      {"color":"blue",  "icon":"fa-chart-pie",     "label":"Trafic Organique",     "val":"+45%",     "unit":"MoM croissance"},
      {"color":"green", "icon":"fa-mouse-pointer",  "label":"Taux de conversion",   "val":"4.2%",     "unit":"site global"},
      {"color":"orange","icon":"fa-dollar-sign",    "label":"CAC global",           "val":"22\u20ac",     "unit":"co\u00fbt acquisition client"},
      {"color":"purple","icon":"fa-redo",           "label":"LTV Client",           "val":"2 400\u20ac",  "unit":"valeur sur 12 mois"},
      {"color":"pink",  "icon":"fa-chart-line",     "label":"ROAS global",          "val":"4.1x",     "unit":"multi-canaux"},
      {"color":"cyan",  "icon":"fa-users",          "label":"NPS Score",            "val":"72/100",   "unit":"satisfaction client"},
    ],
    "toasts": [
      {"text":"KPIs prioritaires : Choisissez 5-7 KPIs maximum par domaine. En SEO : trafic organique, positions, CTR. En Ads : CPA, ROAS, CVR. En Email : OR, CTR, revenu par email.","type":"blue"},
      {"text":"Dashboard Looker Studio : Connectez GA4 + GSC + Google Ads + Facebook Ads dans un seul tableau de bord gratuit. Partagez en lecture seule avec vos clients.","type":"orange"},
      {"text":"Culture Data : Chaque d\u00e9cision marketing doit \u00eatre bas\u00e9e sur des donn\u00e9es, pas des intuitions. A/B testez toujours avec une hypoth\u00e8se claire et un \u00e9chantillon suffisant (min. 100 conversions).","type":"green"},
    ],
  },
  {
    "num": 38,
    "css_icon_bg": "linear-gradient(135deg, #EC4899, #db2777)",
    "fa_icon": "fas fa-briefcase",
    "title": "Freelancing vs Agence \u2014 Comparatif",
    "subtitle": "Comparaison des mod\u00e8les business et strat\u00e9gies d'acquisition clients",
    "badge_text": "2 Mod\u00e8les",
    "badge_fa": "fa-balance-scale",
    "prog": 78,
    "cards": [
      {"color":"blue",  "icon":"fa-user",       "label":"TJ Freelance",     "val":"400-800\u20ac",    "unit":"par jour"},
      {"color":"green", "icon":"fa-building",   "label":"TJ Agence",        "val":"800-1500\u20ac",   "unit":"par jour"},
      {"color":"orange","icon":"fa-percentage", "label":"Marge Freelance",  "val":"70%",           "unit":"net en moyenne"},
      {"color":"purple","icon":"fa-percentage", "label":"Marge Agence",     "val":"45%",           "unit":"net en moyenne"},
      {"color":"pink",  "icon":"fa-inbox",      "label":"Leads Inbound",    "val":"65%",           "unit":"des acquisitions"},
      {"color":"cyan",  "icon":"fa-chart-line", "label":"Revenu 12 mois",   "val":"60-120K\u20ac",    "unit":"objectif senior"},
    ],
    "toasts": [
      {"text":"Freelance : Avantages = flexibilit\u00e9, marges \u00e9lev\u00e9es (60-75%), autonomie totale. Limites = charge mentale, acquisition continue de clients, plafond de revenus li\u00e9 \u00e0 votre temps disponible.","type":"blue"},
      {"text":"Agence : Avantages = scalabilit\u00e9, d\u00e9l\u00e9gation, revenus r\u00e9currents (retainers). Limites = charges fixes \u00e9lev\u00e9es, management d'\u00e9quipe, marges r\u00e9duites (35-45%). Id\u00e9al \u00e0 partir de 3+ clients r\u00e9guliers.","type":"green"},
      {"text":"Strat\u00e9gie d'acquisition : Inbound (SEO, LinkedIn, bouche-\u00e0-oreille) = 65% des leads freelance. Outbound (cold email) = 25%. Partenariats agences = 10%. Misez sur le personal branding.","type":"orange"},
    ],
  },
  {
    "num": 39,
    "css_icon_bg": "linear-gradient(135deg, #F97316, #ea580c)",
    "fa_icon": "fas fa-road",
    "title": "Plan de Carri\u00e8re \u2014 Feuille de Route 12 Mois",
    "subtitle": "Progression structur\u00e9e de d\u00e9butant \u00e0 expert en marketing digital",
    "badge_text": "2026",
    "badge_fa": "fa-calendar-alt",
    "prog": 45,
    "cards": [
      {"color":"blue",  "icon":"fa-rocket",        "label":"Q1 \u2014 Fondations",     "val":"M1-3",       "unit":"Bases + Portfolio"},
      {"color":"green", "icon":"fa-chart-line",    "label":"Q2 \u2014 Sp\u00e9cialisation","val":"M4-6",       "unit":"Ads + Certifications"},
      {"color":"orange","icon":"fa-graduation-cap","label":"Q3 \u2014 Certification",   "val":"M7-9",       "unit":"Networking + Side proj."},
      {"color":"purple","icon":"fa-star",          "label":"Q4 \u2014 Expertise",       "val":"M10-12",     "unit":"Niche + Client phare"},
      {"color":"pink",  "icon":"fa-trophy",        "label":"Objectif revenu",         "val":"8-10K\u20ac",    "unit":"par mois (M12)"},
      {"color":"cyan",  "icon":"fa-users",         "label":"Clients fid\u00e8les",       "val":"5-8",        "unit":"portefeuille cible"},
    ],
    "toasts": [
      {"text":"Q1 Fondations (M1-3) : Formation SEO on/off-page + GA4 + cr\u00e9ation portfolio avec 2 \u00e9tudes de cas r\u00e9els. Objectif : d\u00e9crocher vos 2 premiers clients et atteindre 1 000\u20ac/mois.","type":"blue"},
      {"text":"Q2 Sp\u00e9cialisation (M4-6) : Ma\u00eetrisez Google Ads + Facebook Ads + certification Google. Objectif : 5 clients r\u00e9guliers, TJM 400\u20ac, portfolio 5 projets. D\u00e9veloppez votre personal branding LinkedIn.","type":"green"},
      {"text":"Q3-Q4 Expertise (M7-12) : Niche premium, client phare, automatisation des process. Objectif : 8 000-10 000\u20ac/mois, 1-2 clients en retainer, d\u00e9l\u00e9gation des t\u00e2ches r\u00e9p\u00e9titives.","type":"orange"},
    ],
  },
  {
    "num": 40,
    "css_icon_bg": "linear-gradient(135deg, #10B981, #059669)",
    "fa_icon": "fas fa-graduation-cap",
    "title": "Synth\u00e8se \u2014 Votre Plan d'Action Marketing Digital",
    "subtitle": "R\u00e9capitulatif complet et prochaines \u00e9tapes pour r\u00e9ussir",
    "badge_text": "Formation Compl\u00e8te",
    "badge_fa": "fa-flag-checkered",
    "prog": 100,
    "cards": [
      {"color":"green", "icon":"fa-check-circle","label":"SEO On/Off-Page",      "val":"\u2713 Ma\u00eetris\u00e9", "unit":"complet"},
      {"color":"blue",  "icon":"fa-check-circle","label":"Google & Facebook Ads","val":"\u2713 Ma\u00eetris\u00e9", "unit":"complet"},
      {"color":"purple","icon":"fa-check-circle","label":"Social Media",          "val":"\u2713 Ma\u00eetris\u00e9", "unit":"complet"},
      {"color":"orange","icon":"fa-check-circle","label":"Email Marketing",       "val":"\u2713 Ma\u00eetris\u00e9", "unit":"complet"},
      {"color":"pink",  "icon":"fa-check-circle","label":"Marketing Automation",  "val":"\u2713 Ma\u00eetris\u00e9", "unit":"complet"},
      {"color":"cyan",  "icon":"fa-rocket",      "label":"Pr\u00eat \u00e0 lancer !",      "val":"100%",         "unit":"formation compl\u00e8te"},
    ],
    "toasts": [
      {"text":"F\u00e9licitations ! Vous avez parcouru 40 slides sur le marketing digital complet. De la strat\u00e9gie SEO aux campagnes payantes, du content marketing \u00e0 l'automation, vous avez toutes les cl\u00e9s.","type":"green"},
      {"text":"Vos 3 priorit\u00e9s imm\u00e9diates : (1) Choisissez votre niche et ICP, (2) Cr\u00e9ez votre portfolio avec 2-3 \u00e9tudes de cas, (3) Lancez votre pr\u00e9sence LinkedIn. Actions = r\u00e9sultats.","type":"blue"},
      {"text":"Prochaine \u00e9tape : Passez \u00e0 l'action dans les 48 prochaines heures. Inscrivez-vous sur Malt ou Upwork, cr\u00e9ez votre premier post LinkedIn, contactez 5 prospects. C'est maintenant !","type":"orange"},
    ],
  },
]

# ─────────────────────────────── JSX TEMPLATE ────────────────────────────────
def make_jsx(s):
    n = s["num"]
    cards_json = json.dumps(s["cards"], ensure_ascii=False, indent=2)
    toasts_json = json.dumps(s["toasts"], ensure_ascii=False, indent=2)

    return f"""import React, {{ useState, useEffect }} from 'react';
import './Slide{n}.css';

const cards = {cards_json};

const toastData = {toasts_json};

export default function Slide{n}() {{
  const [toasts, setToasts] = useState([]);

  useEffect(() => {{
    if (toasts.length > 0) {{
      const timer = setTimeout(() => setToasts(prev => prev.slice(1)), 3200);
      return () => clearTimeout(timer);
    }}
  }}, [toasts]);

  const addToast = (text, type = 'blue') => {{
    setToasts(prev => [...prev, {{ id: Date.now(), text, type }}]);
  }};

  return (
    <div className="slide-{n}">
      <div className="bg-pattern"></div>
      <div className="grid-lines"></div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      <div className="content-wrapper">
        {{/* Header */}}
        <div className="header animate{n}-fade-in-down">
          <div className="title-section">
            <div className="title-icon">
              <i className="{s['fa_icon']}"></i>
            </div>
            <div>
              <h1 className="main-title">{s['title']}</h1>
              <div className="subtitle">{s['subtitle']}</div>
            </div>
          </div>
          <div className="badge" onClick={{() => addToast(toastData[0].text, toastData[0].type)}}>
            <i className="fas {s['badge_fa']}" style={{{{ marginRight: '8px' }}}}></i>
            {s['badge_text']}
          </div>
        </div>

        {{/* Main Content */}}
        <div className="main-content">
          {{/* Cards Grid */}}
          <div className="cards-grid animate{n}-fade-in-up" style={{{{ '--delay': 1 }}}}>
            {{cards.map((c, i) => (
              <div
                key={{i}}
                className={{`card-item ${{c.color}}`}}
                onClick={{() => addToast(c.label + ' : ' + c.val + ' ' + c.unit, c.color)}}
              >
                <div className={{`card-icon ${{c.color}}`}}>
                  <i className={{`fas ${{c.icon}}`}}></i>
                </div>
                <div className="card-info">
                  <div className="card-label">{{c.label}}</div>
                  <div className="card-val">
                    {{c.val}} <span className="card-unit">{{c.unit}}</span>
                  </div>
                </div>
              </div>
            ))}}
          </div>

          {{/* Tips Row */}}
          <div className="tips-section animate{n}-fade-in-up" style={{{{ '--delay': 4 }}}}>
            {{toastData.map((t, i) => (
              <div key={{i}} className={{`tip-card ${{t.type}}`}} onClick={{() => addToast(t.text, t.type)}}>
                <div className={{`tip-icon ${{t.type}}`}}>
                  <i className={{i === 0 ? 'fas fa-lightbulb' : i === 1 ? 'fas fa-star' : 'fas fa-rocket'}}></i>
                </div>
                <div className="tip-text">{{t.text.substring(0, 120)}}...</div>
              </div>
            ))}}
          </div>
        </div>

        {{/* Bottom */}}
        <div className="bottom-section animate{n}-fade-in-up" style={{{{ '--delay': 7 }}}}>
          <div className="progress-info" onClick={{() => addToast('Avancement : {s['prog']}% complet\u00e9.', 'green')}}>
            <div>Progression : <span style={{{{ color: 'white', fontWeight: 700 }}}}>{s['prog']}%</span></div>
            <div className="progress-bar">
              <div className="progress-fill" style={{{{ width: '{s['prog']}%' }}}}></div>
            </div>
            <div className="slide-counter">Slide {n} / 40</div>
          </div>
          <div className="action-buttons">
            <button className="action-btn secondary" onClick={{() => addToast('Export en cours...', 'info')}}>
              <i className="fas fa-download"></i>Exporter
            </button>
            <button className="action-btn primary" onClick={{() => addToast('Analyse lanc\u00e9e...', 'blue')}}>
              <i className="fas fa-play"></i>Analyser
            </button>
          </div>
        </div>
      </div>

      {{/* Toasts */}}
      <div className="toasts-container">
        {{toasts.map(toast => (
          <div key={{toast.id}} className={{`toast-card ${{toast.type}}`}}>
            <div className={{`toast-icon ${{toast.type}}`}}>
              <i className="fas fa-info-circle"></i>
            </div>
            <div className="toast-content">
              <span className="toast-text">{{toast.text}}</span>
            </div>
          </div>
        ))}}
      </div>
    </div>
  );
}}
"""

# ─────────────────────────────── CSS TEMPLATE ────────────────────────────────
def make_css(s):
    n = s["num"]
    return f"""/* Slide {n} — Marketing Digital React */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.slide-{n} {{
  width: 1280px;
  height: 720px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  font-family: 'Poppins', sans-serif;
  color: white;
}}

.slide-{n} * {{ box-sizing: border-box; font-family: 'Poppins', sans-serif; }}

.slide-{n} .bg-pattern {{
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(37,99,235,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(249,115,22,0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(16,185,129,0.05) 0%, transparent 50%);
  z-index: 1;
}}

.slide-{n} .grid-lines {{
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
}}

.slide-{n} .floating-shape {{
  position: absolute; border-radius: 50%; z-index: 2;
  animation: float{n} 9s ease-in-out infinite;
}}
.slide-{n} .shape-1 {{
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%);
  top: -80px; right: -80px;
}}
.slide-{n} .shape-2 {{
  width: 220px; height: 220px;
  background: radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%);
  bottom: -60px; left: -60px; animation-delay: -4s;
}}
@keyframes float{n} {{
  0%, 100% {{ transform: translateY(0) scale(1); }}
  50% {{ transform: translateY(-12px) scale(1.04); }}
}}

.slide-{n} .content-wrapper {{
  position: relative; z-index: 10;
  height: 100%; width: 100%;
  display: flex; flex-direction: column;
  padding: 30px 40px 24px;
}}

/* Header */
.slide-{n} .header {{
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 18px;
}}
.slide-{n} .title-section {{ display: flex; align-items: center; gap: 16px; }}
.slide-{n} .title-icon {{
  width: 52px; height: 52px;
  background: {s['css_icon_bg']};
  border-radius: 14px; display: flex; align-items: center; justify-content: center;
  color: white; font-size: 22px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.3);
  flex-shrink: 0;
}}
.slide-{n} .main-title {{ font-size: 25px; font-weight: 800; color: white; line-height: 1.1; margin: 0 0 3px; }}
.slide-{n} .subtitle {{ font-size: 13px; color: #94a3b8; }}
.slide-{n} .badge {{
  background: rgba(249,115,22,0.15); color: #F97316;
  padding: 7px 18px; border-radius: 20px;
  font-size: 13px; font-weight: 600;
  border: 1px solid rgba(249,115,22,0.3);
  cursor: pointer; transition: all 0.3s;
  display: flex; align-items: center;
}}
.slide-{n} .badge:hover {{ background: rgba(249,115,22,0.25); transform: scale(1.03); }}

/* Main content */
.slide-{n} .main-content {{
  display: flex; flex-direction: column;
  flex: 1; gap: 14px; min-height: 0;
}}

/* Cards Grid */
.slide-{n} .cards-grid {{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}}
.slide-{n} .card-item {{
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px; padding: 14px 16px;
  display: flex; align-items: center; gap: 14px;
  cursor: pointer; transition: all 0.3s;
}}
.slide-{n} .card-item:hover {{
  background: rgba(255,255,255,0.07);
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.15);
}}
.slide-{n} .card-icon {{
  width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; font-size: 17px;
}}
.slide-{n} .card-icon.blue   {{ background: rgba(59,130,246,0.2);  color: #3B82F6; }}
.slide-{n} .card-icon.green  {{ background: rgba(16,185,129,0.2);  color: #10B981; }}
.slide-{n} .card-icon.orange {{ background: rgba(249,115,22,0.2);  color: #F97316; }}
.slide-{n} .card-icon.purple {{ background: rgba(139,92,246,0.2);  color: #8B5CF6; }}
.slide-{n} .card-icon.pink   {{ background: rgba(236,72,153,0.2);  color: #EC4899; }}
.slide-{n} .card-icon.cyan   {{ background: rgba(6,182,212,0.2);   color: #06B6D4; }}
.slide-{n} .card-icon.red    {{ background: rgba(239,68,68,0.2);   color: #EF4444; }}
.slide-{n} .card-item.blue:hover   {{ border-color: rgba(59,130,246,0.4);  box-shadow: 0 4px 16px rgba(59,130,246,0.15); }}
.slide-{n} .card-item.green:hover  {{ border-color: rgba(16,185,129,0.4);  box-shadow: 0 4px 16px rgba(16,185,129,0.15); }}
.slide-{n} .card-item.orange:hover {{ border-color: rgba(249,115,22,0.4);  box-shadow: 0 4px 16px rgba(249,115,22,0.15); }}
.slide-{n} .card-item.purple:hover {{ border-color: rgba(139,92,246,0.4);  box-shadow: 0 4px 16px rgba(139,92,246,0.15); }}
.slide-{n} .card-item.pink:hover   {{ border-color: rgba(236,72,153,0.4);  box-shadow: 0 4px 16px rgba(236,72,153,0.15); }}
.slide-{n} .card-item.cyan:hover   {{ border-color: rgba(6,182,212,0.4);   box-shadow: 0 4px 16px rgba(6,182,212,0.15); }}
.slide-{n} .card-item.red:hover    {{ border-color: rgba(239,68,68,0.4);   box-shadow: 0 4px 16px rgba(239,68,68,0.15); }}
.slide-{n} .card-info {{ display: flex; flex-direction: column; gap: 1px; flex: 1; min-width: 0; }}
.slide-{n} .card-label {{ font-size: 11.5px; color: #94a3b8; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }}
.slide-{n} .card-val {{ font-size: 15px; font-weight: 700; color: white; line-height: 1.2; }}
.slide-{n} .card-unit {{ font-size: 10px; color: #64748b; font-weight: 400; }}

/* Tips section */
.slide-{n} .tips-section {{
  display: flex; gap: 12px; flex: 1; min-height: 0;
}}
.slide-{n} .tip-card {{
  flex: 1; background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 13px; padding: 13px 15px;
  display: flex; align-items: flex-start; gap: 11px;
  cursor: pointer; transition: all 0.3s;
  overflow: hidden;
}}
.slide-{n} .tip-card:hover {{ background: rgba(255,255,255,0.07); transform: translateY(-2px); }}
.slide-{n} .tip-card.blue   {{ border-left: 3px solid #3B82F6; }}
.slide-{n} .tip-card.green  {{ border-left: 3px solid #10B981; }}
.slide-{n} .tip-card.orange {{ border-left: 3px solid #F97316; }}
.slide-{n} .tip-card.purple {{ border-left: 3px solid #8B5CF6; }}
.slide-{n} .tip-card.pink   {{ border-left: 3px solid #EC4899; }}
.slide-{n} .tip-icon {{
  width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; font-size: 13px;
}}
.slide-{n} .tip-icon.blue   {{ background: rgba(59,130,246,0.2);  color: #3B82F6; }}
.slide-{n} .tip-icon.green  {{ background: rgba(16,185,129,0.2);  color: #10B981; }}
.slide-{n} .tip-icon.orange {{ background: rgba(249,115,22,0.2);  color: #F97316; }}
.slide-{n} .tip-icon.purple {{ background: rgba(139,92,246,0.2);  color: #8B5CF6; }}
.slide-{n} .tip-icon.pink   {{ background: rgba(236,72,153,0.2);  color: #EC4899; }}
.slide-{n} .tip-text {{ font-size: 11.5px; color: #cbd5e1; line-height: 1.45; flex: 1; }}

/* Bottom */
.slide-{n} .bottom-section {{
  display: flex; justify-content: space-between; align-items: center;
  margin-top: 12px; padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.07);
}}
.slide-{n} .progress-info {{
  display: flex; align-items: center; gap: 12px;
  color: #94a3b8; font-size: 13px; cursor: pointer;
}}
.slide-{n} .progress-bar {{
  height: 7px; background: rgba(255,255,255,0.08);
  border-radius: 4px; overflow: hidden; width: 180px;
}}
.slide-{n} .progress-fill {{
  height: 100%;
  background: linear-gradient(90deg, #3B82F6, #10B981);
  border-radius: 4px;
}}
.slide-{n} .slide-counter {{ color: #475569; font-size: 12px; }}
.slide-{n} .action-buttons {{ display: flex; gap: 10px; }}
.slide-{n} .action-btn {{
  padding: 9px 18px; border-radius: 9px;
  font-size: 12.5px; font-weight: 700;
  font-family: 'Poppins', sans-serif;
  border: none; cursor: pointer;
  display: flex; align-items: center; gap: 7px;
  transition: all 0.25s;
}}
.slide-{n} .action-btn.primary {{ background: linear-gradient(135deg,#3B82F6,#1d4ed8); color: white; }}
.slide-{n} .action-btn.primary:hover {{ transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,99,235,0.35); }}
.slide-{n} .action-btn.secondary {{ background: rgba(255,255,255,0.07); color: white; border: 1px solid rgba(255,255,255,0.1); }}
.slide-{n} .action-btn.secondary:hover {{ background: rgba(255,255,255,0.12); transform: translateY(-2px); }}

/* Toasts */
.slide-{n} .toasts-container {{
  position: absolute; bottom: 28px; right: 28px;
  z-index: 100;
  display: flex; flex-direction: column; gap: 10px;
  max-width: 400px;
}}
.slide-{n} .toast-card {{
  display: flex; align-items: flex-start; gap: 12px;
  padding: 13px 16px; border-radius: 12px;
  backdrop-filter: blur(12px);
  background: rgba(30,41,59,0.95);
  border: 1px solid rgba(255,255,255,0.12);
  animation: toastIn{n} 0.4s ease;
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
}}
@keyframes toastIn{n} {{
  from {{ opacity: 0; transform: translateX(40px); }}
  to {{ opacity: 1; transform: translateX(0); }}
}}
.slide-{n} .toast-icon {{
  width: 30px; height: 30px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; flex-shrink: 0;
}}
.slide-{n} .toast-icon.blue   {{ background: rgba(37,99,235,0.25);   color: #3B82F6; }}
.slide-{n} .toast-icon.green  {{ background: rgba(16,185,129,0.25);  color: #10B981; }}
.slide-{n} .toast-icon.orange {{ background: rgba(249,115,22,0.25);  color: #F97316; }}
.slide-{n} .toast-icon.purple {{ background: rgba(139,92,246,0.25);  color: #8B5CF6; }}
.slide-{n} .toast-icon.pink   {{ background: rgba(236,72,153,0.25);  color: #EC4899; }}
.slide-{n} .toast-icon.cyan   {{ background: rgba(6,182,212,0.25);   color: #06B6D4; }}
.slide-{n} .toast-icon.red    {{ background: rgba(239,68,68,0.25);   color: #EF4444; }}
.slide-{n} .toast-icon.info   {{ background: rgba(100,116,139,0.25); color: #94a3b8; }}
.slide-{n} .toast-content {{ flex: 1; }}
.slide-{n} .toast-text {{ color: #e2e8f0; font-size: 12px; line-height: 1.4; }}

/* Animations */
.slide-{n} .animate{n}-fade-in-down {{
  animation: fadeInDown{n} 0.5s ease forwards;
}}
@keyframes fadeInDown{n} {{
  from {{ opacity: 0; transform: translateY(-20px); }}
  to {{ opacity: 1; transform: translateY(0); }}
}}
.slide-{n} .animate{n}-fade-in-up {{
  opacity: 0;
  animation: fadeInUp{n} 0.5s ease forwards;
  animation-delay: calc(var(--delay, 1) * 0.1s);
}}
@keyframes fadeInUp{n} {{
  from {{ opacity: 0; transform: translateY(20px); }}
  to {{ opacity: 1; transform: translateY(0); }}
}}
"""

# ─────────────────────────────── GENERATION ──────────────────────────────────
for s in SLIDES:
    n = s["num"]

    jsx_path = os.path.join(BASE, f"Slide{n}.jsx")
    with open(jsx_path, "w", encoding="utf-8") as f:
        f.write(make_jsx(s))
    print(f"JSX  Slide{n}.jsx OK")

    css_path = os.path.join(BASE, f"Slide{n}.css")
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(make_css(s))
    print(f"CSS  Slide{n}.css OK")

print("\nDone! All slides 25-40 regenerated cleanly.")
