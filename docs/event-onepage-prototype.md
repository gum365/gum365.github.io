# Prototype OnePage événement GUM365

## Objectif

Prototype bilingue d'une page événement unique de type conférence/Community Days, basé sur l'identité du site GUM365 : Astro 6, composants visuels compatibles Velocity, Outfit, Manrope, tokens orange/gris, thèmes clair et sombre, navigation globale intacte.

- Français : \`/prototype-evenement/\`
- Anglais : \`/en-ca/event-prototype/\`
- Le prototype est isolé des pages courantes et de la navigation principale. Il n'est pas destiné à être fusionné en production sans validation éditoriale et fonctionnelle.

## Fonctionnalités du prototype

- Bandeau explicitant que les sessions, speakers, fichiers et dates sont fictifs.
- Hero avec parcours vers le programme ou l'inscription.
- Navigation gauche sticky, horizontale sur mobile, ancres et position active.
- Sections : présentation, agenda filtrable matin/après-midi, conférenciers, ressources, galerie photo, informations pratiques et inscription.
- Agenda : description détaillée dépliable, filtres accessibles.
- Galerie : images illustratives externes et agrandissement par dialogue.
- CTA réels uniquement vers Mobilizon et Sessionize ; aucune fausse billetterie, aucun faux téléchargement.
- Respect des tokens du design system, du thème global clair/sombre et de la navigation bilingue.

## Emplacement du code

- Composant partagé : \`src/components/EventOnePagePrototype.astro\`
- Routes d'essai : \`src/pages/prototype-evenement.astro\` et \`src/pages/en-ca/event-prototype.astro\`

Les données de démonstration sont incluses dans le composant. Ce n'est **pas encore une intégration Mobilizon, Sessionize, Hi.Events ou Piwigo**.

## Architecture cible à valider

Le frontend Astro doit rester l'unique expérience publique GUM365, avec un modèle de page événement normalisé, pouvant agréger :

1. Mobilizon (identifiant stable de l'événement, description, date, statut, lieu, organisateur, groupe).
2. Sessionize ou Eventyay (sessions, intervenants, horaires et présentations).
3. Hi.Events / Eventyay (types de billets, disponibilités, inscription et scan QR).
4. Piwigo ou bibliothèque médias (albums événementiels, droits et modération).

Il faut éviter la duplication d'identité et déterminer une source de vérité pour chaque donnée. Les synchronisations authentifiées se feront côté serveur (pas de clé privée dans le JavaScript statique publié via GitHub Pages).

## Plan d'intégration

1. Valider la maquette UX sur mobile et ordinateur.
2. Formaliser un type \`EventPageModel\`, partagé entre les composantes.
3. Construire une fiche événement à partir de l'UUID Mobilizon, avec lien stable \`/evenements/<slug>/\`.
4. Intégrer l'agenda via le flux public Sessionize pour un premier événement.
5. Ajouter les supports de session et une photothèque après validation des règles de publication.
6. Connecter la billetterie seulement lorsque l'outil sera choisi.

## Validation

Depuis le dépôt :

\`\`\`bash
pnpm install
pnpm build
pnpm dev
\`\`\`

Vérifier les deux routes, les filtres d'agenda, le dialogue des photos, les ancres, le clavier, le sélecteur de langue, les thèmes, les images tierces et l'affichage mobile. Une revue d'accessibilité et une décision sur les métadonnées noindex restent nécessaires avant une éventuelle fusion.
