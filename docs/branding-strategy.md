# Stratégie de branding GUM365

## Rôle de la marque

GUM365 est une communauté de praticiens Microsoft 365 à Montréal.

La marque doit toujours communiquer trois idées simples :

1. **Apprendre**
2. **Partager**
3. **Se rencontrer**

La technologie est importante, mais la communauté n'est pas une vitrine produit. Le site doit donner l'impression d'un espace professionnel, crédible, vivant et accessible où les praticiens peuvent partager des expériences réelles.

## Positionnement

GUM365 se situe à l'intersection de :

- Microsoft 365,
- collaboration numérique,
- Power Platform,
- SharePoint,
- Microsoft Teams,
- Copilot et agents,
- gouvernance de l'information,
- architecture des connaissances,
- intelligence artificielle appliquée,
- communauté professionnelle.

Le positionnement doit rester plus large qu'un groupe produit tout en conservant Microsoft 365 comme terrain principal.

## Principes de marque

### Community first

Le premier bénéficiaire de toute décision doit être la communauté.

Un partenaire, une technologie ou un événement ne doit pas prendre le dessus sur l'expérience des membres.

### Pratique avant promotion

Le contenu doit privilégier :

- retours d'expérience,
- démonstrations,
- méthodes,
- architecture,
- erreurs et apprentissages,
- discussions entre pairs.

Éviter les formulations trop commerciales ou les promesses abstraites.

### Présentiel et continuité

GUM365 existe aussi par la rencontre physique.

Le site doit donner envie de participer, de proposer une session et de poursuivre les échanges entre les événements.

Mobilizon constitue la plateforme de continuité événementielle et communautaire.

### Ouverture

La communauté doit rester accueillante envers :

- les experts,
- les nouveaux conférenciers,
- les professionnels techniques,
- les gestionnaires,
- les consultants,
- les développeurs,
- les formateurs,
- les personnes qui découvrent un sujet.

Le langage ne doit pas supposer que tous les visiteurs connaissent les acronymes ou possèdent le même niveau d'expertise.

### Indépendance

Les partenaires financent la capacité à organiser des événements de qualité. Ils ne contrôlent pas la programmation éditoriale.

Cette distinction est explicitement présente sur la page Partenaires et doit rester visible.

## Personnalité

La marque doit être :

- compétente sans être prétentieuse,
- moderne sans être artificiellement futuriste,
- conviviale sans devenir informelle au point de perdre sa crédibilité,
- technique sans être froide,
- communautaire sans paraître amateur,
- bilingue sans donner l'impression que la version anglaise est secondaire.

## Ton éditorial

### Français

Le FR_CA est la source de vérité éditoriale.

Le ton doit être direct, naturel et professionnel. Les textes privilégient les phrases concrètes, les exemples et les bénéfices réels.

### Anglais

L'EN_CA est une adaptation fidèle, pas une traduction mot à mot obligatoire.

Le sens, le niveau de professionnalisme et la personnalité doivent rester identiques.

## Messages structurants

Les messages suivants constituent le noyau narratif de GUM365 :

### Apprendre. Partager. Se rencontrer.

C'est la promesse la plus concise du site. Elle peut guider les hero, les campagnes et les présentations.

### Une communauté de praticiens

GUM365 n'est pas une conférence commerciale permanente. La valeur vient des personnes qui conçoivent, administrent, déploient et utilisent réellement les outils.

### La scène est ouverte

Le partage n'est pas réservé aux MVP, auteurs ou speakers professionnels. Une expérience utile peut devenir une session.

### Soutenir une communauté, pas acheter une audience

Le partenariat doit être présenté comme un soutien à l'écosystème communautaire et non comme un achat d'influence éditoriale.

## Relation entre les propriétés numériques

### Site Astro

Le site principal présente :

- la mission,
- la communauté,
- les événements,
- les partenaires,
- les informations institutionnelles.

Il reste la couche éditoriale et de présentation.

### Mobilizon

`https://gum365.ca` est la plateforme communautaire et événementielle.

Elle fournit :

- les événements à venir,
- les fiches événements,
- les dates,
- les lieux,
- les organisateurs,
- les données utilisées dynamiquement par le site Astro.

Le site Astro ne doit pas créer une seconde source de vérité événementielle.

### Sessionize

Sessionize est utilisé pour les appels à conférenciers lorsque nécessaire.

Il n'est pas une plateforme communautaire générale.

### GitHub

GitHub héberge :

- le code,
- la documentation,
- l'historique des changements,
- les projets publics.

## Cohérence visuelle

Le langage visuel doit rester dérivé de Velocity mais adapté à GUM365.

Principes :

- grands espaces,
- hiérarchie typographique forte,
- surfaces neutres,
- orange utilisé comme accent et non comme remplissage permanent,
- effets de glow légers,
- cartes simples,
- bordures fines,
- rayon cohérent,
- ombres mesurées,
- animations courtes,
- thème clair et sombre équivalents.

Éviter :

- gradients décoratifs omniprésents,
- accumulation de couleurs concurrentes,
- skeuomorphisme,
- effets 3D gratuits,
- interfaces surchargées,
- CTA de couleur différente d'une page à l'autre,
- nouveaux styles locaux qui contournent les tokens globaux.

## Stratégie des composants

Avant de créer un nouveau motif visuel :

1. vérifier si un composant existant peut être réutilisé,
2. vérifier les composants UI adaptés de Velocity,
3. réutiliser les tokens CSS,
4. créer un nouveau composant seulement si le besoin est durable.

Les composants de la page Partenaires servent de bibliothèque locale de référence :

- Button,
- Card,
- Badge,
- Table,
- CTA.

## Images et visuels événementiels

Les images provenant de Mobilizon peuvent être utilisées telles qu'elles sont publiées pour l'événement.

Pour de futurs visuels de marque :

- privilégier des images authentiques de communauté et de conférences,
- éviter les banques d'images génériques,
- ne pas intégrer du texte critique dans les images,
- préserver une bonne lisibilité en thème clair et sombre,
- conserver des ratios cohérents, notamment 16:9 pour les cartes événementielles.

## Gouvernance

Toute PR qui modifie substantiellement :

- les couleurs,
- les typographies,
- le logo,
- le header,
- le footer,
- la navigation,
- les composants principaux,
- la voix éditoriale,

doit mettre à jour ce document ou [brand-kit.md](brand-kit.md).

La cohérence de marque est un contrat du projet, pas une préférence locale de page.
