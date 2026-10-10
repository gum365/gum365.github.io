# Maintenance du contenu

## Principe éditorial

Le site suit une règle simple :

- **FR_CA est la source de vérité**.
- **EN_CA est une traduction liée**.
- Les deux versions partagent le même `translation_key`.
- Le contenu se trouve dans `knowledge/okf`.

Avant toute modification, commencer par la version française, puis reporter le changement dans la version anglaise.

## Modifier une page

Exemple : modifier la page Communauté.

1. Éditer `knowledge/okf/fr-CA/communaute.md`.
2. Mettre à jour `updated`.
3. Adapter `knowledge/okf/en-CA/community.md`.
4. Vérifier que les deux fichiers ont `translation_key: community`.
5. Exécuter `pnpm build`.
6. Ouvrir un PR.
7. Mettre à jour `CHANGELOG.md`.

## Ajouter une page standard

Créer deux fichiers.

Exemple :

```text
knowledge/okf/fr-CA/ressources.md
knowledge/okf/en-CA/resources.md
```

Frontmatter FR_CA :

```yaml
---
type: page
id: resources
title: "Ressources - GUM365"
description: "Ressources de la communauté GUM365."
slug: "ressources"
language: fr-CA
source_of_truth: true
translation_key: resources
translation_status: source
updated: "2026-10-10"
nav_label: "Ressources"
nav_order: 5
hero_eyebrow: "GUM365"
hero_title: "Ressources"
hero_lead: "Les ressources utiles pour la communauté."
---
```

Frontmatter EN_CA :

```yaml
---
type: page
id: resources
title: "Resources - GUM365"
description: "Resources for the GUM365 community."
slug: "en-ca/resources"
language: en-CA
source_of_truth: false
translation_key: resources
translation_of: "../fr-CA/ressources.md"
translation_status: validated
updated: "2026-10-10"
nav_label: "Resources"
nav_order: 5
hero_eyebrow: "GUM365"
hero_title: "Resources"
hero_lead: "Useful resources for the community."
---
```

Aucun fichier Astro supplémentaire n'est requis pour une page standard.

## Contrat de traduction

Le sélecteur de langue fonctionne grâce à `translation_key`.

Pour chaque paire de pages :

```text
FR_CA translation_key == EN_CA translation_key
```

Le slug peut être différent.

Exemple :

```text
FR_CA : /communaute/
EN_CA : /en-ca/community/
translation_key : community
```

Ne pas utiliser le slug pour établir la correspondance entre les langues.

## Navigation

La navigation est construite automatiquement avec `nav_order`.

Valeurs actuelles :

| Ordre | FR_CA | EN_CA |
| ---: | --- | --- |
| 0 | Accueil | Home |
| 1 | Communauté | Community |
| 2 | Événements | Events |
| 3 | Partenaires | Partners |
| 4 | À propos | About |

Lorsqu'une page ne doit pas apparaître dans la navigation, le modèle actuel doit être étendu avec un champ explicite plutôt que de détourner `nav_order`.

## Hero et CTA

Chaque page peut définir :

```yaml
hero_eyebrow: "..."
hero_title: "..."
hero_lead: "..."
primary_label: "..."
primary_url: "..."
secondary_label: "..."
secondary_url: "..."
```

Les CTA externes peuvent pointer vers Mobilizon, Sessionize, GitHub ou une adresse `mailto:`.

## Markdown de page

Sous le frontmatter, utiliser du Markdown classique.

Les styles `.prose` prennent en charge :

- titres H2 et H3,
- paragraphes,
- listes,
- emphase,
- liens,
- séparateurs.

Éviter d'introduire du HTML complexe dans les fichiers OKF. Si une page nécessite une expérience riche, créer un composant Astro spécialisé.

## Page Événements

Les événements à venir sont chargés depuis Mobilizon.

Ne pas inscrire manuellement les prochains événements dans les fichiers OKF.

La page peut contenir :

- une description du format des rencontres,
- des explications pérennes,
- des liens vers Sessionize,
- des informations qui ne changent pas à chaque événement.

Les dates, lieux, images, organisateurs et statuts doivent venir de Mobilizon.

## Page d'accueil

La page d'accueil affiche le prochain événement via `NextMobilizonEvent.astro`.

Ne pas créer un encart statique pour le prochain événement dans `index.md`.

## Page Partenaires

La page partenaires utilise `partner_program` dans le frontmatter.

Cette structure est validée par `src/content.config.ts`.

Toute modification des offres doit être faite :

1. dans FR_CA,
2. dans EN_CA,
3. en conservant les clés `founder`, `gold`, `silver`, `bronze`,
4. en vérifiant la table de comparaison,
5. avec un build local.

Si une nouvelle catégorie est ajoutée, mettre à jour le schéma Zod et `PartnersPage.astro`.

## Liens communautaires

La plateforme communautaire et événementielle officielle est :

```text
https://gum365.ca
```

Ne pas réintroduire de lien vers l'ancien groupe Meetup.

Sessionize reste utilisé pour les appels à conférenciers lorsqu'un appel est actif.

## Règles de rédaction

Le ton GUM365 doit rester :

- communautaire,
- concret,
- accessible aux praticiens,
- technique sans être élitiste,
- indépendant des discours commerciaux,
- bilingue lorsqu'une page existe dans les deux langues.

Les formulations doivent valoriser le partage d'expérience, les échanges entre pairs et les usages réels.

## Validation avant PR

Vérifier au minimum :

```bash
pnpm build
```

Puis contrôler :

- liens FR_CA / EN_CA,
- ordre de navigation,
- thème clair,
- thème sombre,
- mobile,
- CTA,
- traduction,
- absence de contenu événementiel dupliqué,
- `CHANGELOG.md`.
