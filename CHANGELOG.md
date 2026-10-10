# Changelog

Tous les changements significatifs du site GUM365 sont documentés ici.

Le changelog est basé sur les PR du dépôt `gum365/gum365.github.io`. À partir de la mise en place de cette documentation, toute PR fonctionnelle, éditoriale, visuelle, d'intégration ou de déploiement doit ajouter une entrée dans la section **Non publié** avant fusion.

## Non publié

### Prototype OnePage événement bilingue (PR de démonstration)

- Ajout d'un composant réutilisable avec navigation latérale sticky et adaptation mobile.
- Agenda fictif filtrable, détails de session, fiches conférenciers, ressources et galerie interactive.
- Routes de prototype FR_CA et EN_CA séparées de la navigation de production.
- Conservation des polices, couleurs, thème clair/sombre et en-tête Velocity existants.
- Documentation du futur branchement Mobilizon, Sessionize et billetterie.
- Contenus fictifs signalés, aucune inscription ni document réel.


### Documentation complète de l’architecture, de la maintenance et du branding

PR : [#8](https://github.com/gum365/gum365.github.io/pull/8)

Changements :

- remplacement du README par un point d’entrée complet pour comprendre et maintenir le site,
- ajout du répertoire `docs/`,
- documentation de l’architecture Astro + OKF,
- guide de maintenance des contenus FR_CA et EN_CA,
- formalisation de la stratégie de branding,
- création d’un brand kit basé sur les tokens et composants réellement utilisés,
- documentation de Mobilizon et des intégrations externes,
- documentation du build et du déploiement GitHub Pages,
- documentation du SEO technique et de la découverte par assistants IA,
- ajout de `public/llms.txt`,
- mise en place du présent changelog comme règle de gouvernance du projet.

### Gouvernance

- Toute future PR doit mettre à jour ce changelog.
- Les changements d'architecture doivent aussi mettre à jour `docs/architecture.md`.
- Les changements de contenu ou de modèle OKF doivent aussi mettre à jour `docs/content-maintenance.md`.
- Les changements de marque doivent aussi mettre à jour `docs/branding-strategy.md` ou `docs/brand-kit.md`.
- Les changements d'intégration doivent aussi mettre à jour `docs/integrations.md`.
- Les nouvelles pages structurantes doivent être ajoutées à `public/llms.txt` lorsque pertinent.

## 2026-10-10

### Remplacer Meetup par Mobilizon et afficher le prochain événement

PR : [#7](https://github.com/gum365/gum365.github.io/pull/7)  
Merge commit : `ed73b3002c524de966f6f058bd976c1c7a2fa7f2`

Changements :

- suppression des références à l'ancien groupe Meetup,
- Mobilizon devient la plateforme communautaire et événementielle de référence,
- remplacement des CTA et liens communautaires par `https://gum365.ca`,
- ajout de `NextMobilizonEvent.astro`,
- affichage dynamique du prochain événement sur les pages d'accueil FR_CA et EN_CA,
- récupération de l'image, de la date, du lieu et de l'organisateur depuis Mobilizon,
- fallback vers Mobilizon lorsque l'API n'est pas disponible.

## 2026-10-06

### Ajouter une page Partenaires basée sur les composants Velocity

PR : [#6](https://github.com/gum365/gum365.github.io/pull/6)  
Merge commit : `d780de5766c5bbbd596f71fa9c8e38d4b5c55aca`

Changements :

- ajout des pages `/partenaires/` et `/en-ca/partners/`,
- ajout du modèle de partenariat dans la couche OKF,
- définition des offres Partenaire fondateur, Or, Argent et Bronze,
- ajout d'une table comparative,
- ajout de CTA de contact,
- ajout des composants UI locaux inspirés de Velocity :
  - Button,
  - Card,
  - Badge,
  - Table,
  - CTA,
- ajout de la page Partenaires dans la navigation,
- maintien du contenu commercial dans la couche OKF plutôt que dans le composant Astro.

### Intégrer Mobilizon dans la page Événements

PR : [#5](https://github.com/gum365/gum365.github.io/pull/5)  
Merge commit : `f0b7f6c81ce987f31828e65f0d300c2acd9504d4`

Changements :

- ajout de `MobilizonEvents.astro`,
- interrogation côté navigateur de l'API GraphQL publique de Mobilizon,
- affichage dynamique des événements à venir,
- tri chronologique,
- prise en charge FR_CA et EN_CA,
- affichage conditionnel des images, lieux et organisateurs,
- liens directs vers les fiches Mobilizon,
- fallback vers `https://gum365.ca`,
- intégration conditionnelle sur `translation_key: events`,
- Mobilizon devient la source événementielle du site.

## 2026-09-30

### Renforcer le workflow GitHub Pages

PR : [#4](https://github.com/gum365/gum365.github.io/pull/4)  
Merge commit : `5d42ed559fcc071ca037acf623aa6d45931e47f3`

Changements :

- suppression de l'action tierce `pnpm/action-setup`,
- activation de pnpm avec Corepack,
- conservation d'actions GitHub officielles pour le pipeline Pages,
- amélioration de la robustesse du workflow dans un contexte de fork.

### Déclencher le workflow Astro après l'activation des Actions

PR : [#3](https://github.com/gum365/gum365.github.io/pull/3)  
Merge commit : `7804d5b0eeedd787faadc9da20e72470af95d649`

Changements :

- ajout d'une note de déploiement dans le README,
- nouveau push destiné à valider le comportement des GitHub Actions après leur activation sur le fork.

### Finaliser le workflow de déploiement du fork Velocity

PR : [#2](https://github.com/gum365/gum365.github.io/pull/2)  
Merge commit : `1507a38dd36dcc453648b74662df4d770bc3d522`

Changements :

- ajout de `workflow_dispatch`,
- mise à jour du README pour documenter le fork Velocity,
- adaptation du workflow à la branche `main`,
- préparation de GitHub Pages avec GitHub Actions.

### Migrer GUM365 sur un vrai fork Velocity

PR : [#1](https://github.com/gum365/gum365.github.io/pull/1)  
Merge commit : `1c007c822d2dddaa8321896a4ce6e3790cc7de44`

Changements :

- remplacement du contenu starter Velocity par le site GUM365,
- conservation de l'ascendance GitHub `southwellmedia/velocity`,
- migration vers Astro 6,
- mise en place de la couche OKF,
- contenus FR_CA et EN_CA,
- navigation bilingue,
- thème clair / sombre,
- logo et favicon GUM365,
- workflow GitHub Pages adapté à `main`,
- conservation de la licence MIT de Velocity.

## Convention pour les prochaines PR

Chaque PR doit ajouter son entrée sous **Non publié** pendant le développement.

Après fusion, l'entrée peut être déplacée dans une section datée contenant :

- titre de la PR,
- numéro et lien,
- merge commit,
- changements fonctionnels,
- changements d'architecture,
- changements de contenu,
- implications de maintenance ou migration.

L'objectif est de permettre à une personne qui découvre le dépôt de comprendre l'évolution du site sans devoir reconstruire l'historique à partir des commits.
