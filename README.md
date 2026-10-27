
# ⚽ TACHKILA — Composition d'équipe 4-4-2

Application web interactive permettant à l'entraîneur du club amateur **Atlas FC** de gérer son effectif et de composer son équipe sur un terrain schématisé en **4-4-2**.

🔗 **Démo (Vercel) :** [`TACHKILA APP`](https://tachkila-eta.vercel.app/)<br>
🔗 **Dépôt GitHub :** [github.com/usefexe/TACHKILA](https://github.com/usefexe/TACHKILA)<br>
🔗 **Planification (Jira) :** [Board SCRUM](https://youssefaitsalh545.atlassian.net/jira/software/projects/SCRUM/boards/1?filter=&groupBy=none&atlOrigin=eyJpIjoiNTE0YzAyODM5YTk0NGUwYTkzNTczNDlhYjkwNWUwZWEiLCJwIjoiaiJ9)<br>
🔗 **Presntation (canva) :** [Dmonstration](https://canva.link/9t7pgmxa0frhw0e)<br>

---

## 📌 Contexte

Le club Atlas FC souhaite digitaliser la préparation de ses compositions d'équipe. L'objectif est de concevoir une interface **fluide, claire et intuitive**, responsive, permettant de :

- Gérer l'effectif : ajouter, modifier et supprimer un joueur (nom, poste, numéro).
- Visualiser le terrain sous forme de grille avec les 11 positions du 4-4-2.
- Assigner un joueur à une position compatible avec son poste (un gardien ne peut pas jouer en attaque).
- Distinguer par un code couleur les postes (GB, DEF, MIL, ATT) et l'état des positions (Libre / Occupée).

Ce projet consolide la manipulation du **DOM**, la **gestion des événements** (propagation, délégation), la **validation de formulaires avec regex** et l'**intégration responsive** avec Tailwind CSS et CSS Grid.

---

## ✨ Fonctionnalités

### Gestion de l'effectif
- Ajout d'un joueur via une **modale** (nom complet, poste, numéro) — il arrive sur le banc.
- Modification d'un joueur dans la modale **préremplie**. Si son poste change alors qu'il est sur le terrain, il retourne sur le banc.
- Suppression avec **confirmation** ; sa position redevient *Libre*.
- Fermeture de la modale avec **×**, **Annuler**, **Échap** ou **clic sur le fond** (un clic dans la fenêtre ne la ferme pas grâce à `stopPropagation()`).

### Validation du formulaire (regex, temps réel)
| Champ | Règle |
|-------|-------|
| Nom | Obligatoire, lettres uniquement, 3 à 30 caractères |
| Poste | Obligatoire |
| Numéro | Obligatoire, de 1 à 99, **unique** |

Les erreurs s'affichent **sous le champ concerné**.

### Terrain et assignation
- Terrain en **CSS Grid natif** : grille de **12 colonnes × 9 lignes**, positions placées avec `grid-column` / `grid-row` (2 cases par position, gardien : 2 colonnes × 3 lignes).
- Assignation par un **select** sur la carte du joueur, acceptée uniquement si la position correspond à son poste **et** qu'elle est libre.
- Case *Occupée* : affiche le numéro et le nom du joueur ; la carte du joueur devient **pâle**.
- Option **« Sur le banc »** pour libérer la position.

### Code couleur des postes
| Poste | Couleur |
|-------|---------|
| GB (Gardien) | 🟡 Jaune / orange |
| DEF (Défenseur) | 🔵 Bleu |
| MIL (Milieu) | 🟢 Vert |
| ATT (Attaquant) | 🔴 Rouge |

### Autres
- Messages de **succès / erreur** qui disparaissent après **3 secondes**.
- Compteurs automatiques : nombre de joueurs et **« Joueurs placés : x / 11 »**.
- **Sauvegarde automatique** de l'effectif et de la composition (`localStorage`).
- **Responsive** : desktop, tablette, mobile.

### 🎁 Bonus
- **Drag & Drop** d'une carte de l'aside vers une position du terrain (règle des postes respectée).
- **Placement automatique** : le joueur va sur la première position libre de son poste.

---

## 🛠️ Technologies

- **HTML5** (balises sémantiques)
- **Tailwind CSS** (interface) + **CSS Grid natif** (terrain)
- **JavaScript** (DOM, événements, regex, `localStorage`) — `const` et `let` uniquement
- **Git / GitHub** (contrôle de version)
- **Vercel** (déploiement)

---

## 📁 Structure du projet

```
TACHKILA/
├── index.html     # Structure de la page (header, aside, terrain, modale)
├── index.css      # Styles complémentaires
├── index.js       # Logique : données, DOM, événements, localStorage
├── logo.png
├── gk.png / def.png / mid.png / att.png   # Icônes des postes
├── terain.png     # Image du terrain
└── README.md
```

---

## 🧠 Choix techniques

- **Données** : tableau d'objets joueurs `{ id, nom, numero, poste, position }`, synchronisé avec `localStorage` (`JSON.stringify` / `JSON.parse`).
- **Terrain** : entièrement écrit en HTML + CSS Grid ; JavaScript ne met à jour que les cases retrouvées via `data-position`.
- **Cartes et options des select** : créées en JavaScript (`createElement`, `appendChild`, `textContent`, `classList`).
- **Délégation d'événements** : un seul écouteur `change` sur la liste pour le choix de position.
- **Suppression** : parcours du DOM avec `closest()` puis `remove()`.
- **Erreurs du formulaire** : retrouvées avec `nextElementSibling`.
- **Formulaire** : événement `submit` avec `preventDefault()` + validation en temps réel avec `input`.

---

## 📱 Responsive

| Appareil | Largeur |
|----------|---------|
| Grand écran | ≥ 1280px |
| Petit écran | 1024px – 1279px |
| Tablette | 768px – 1023px |
| Mobile | ≤ 767px |

---

## 🚀 Installation et lancement

```bash
# 1. Cloner le dépôt
git clone https://github.com/usefexe/TACHKILA.git

# 2. Entrer dans le dossier
cd TACHKILA

# 3. Ouvrir index.html dans le navigateur
#    (ou utiliser l'extension Live Server de VS Code)
```

Aucune installation de dépendances n'est nécessaire (Tailwind et Font Awesome sont chargés via CDN).

---

## 📅 Planification

Projet réalisé en **7 jours** (19/10/2026 → 27/10/2026) avec suivi des tâches sur Jira :

| Jour | Objectif |
|------|----------|
| 1 | Dépôt Git, planification, structure HTML / Tailwind |
| 2 | Terrain CSS Grid (12 × 9), modale |
| 3 | Validation regex, ajout de joueur, liste colorée, 1er déploiement |
| 4 | Assignation, case occupée, carte pâle, banc, compteurs |
| 5 | Suppression et modification |
| 6 | Messages 3 s, localStorage, responsive, tests |
| 7 | Bonus, README, livraison finale |

---

## 👤 Auteur

**Youssef** — Développeur web full-stack
Projet réalisé dans le cadre de la formation *Développeur web youcode*.
