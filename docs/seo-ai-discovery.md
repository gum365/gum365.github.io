# SEO et découverte par les assistants IA

## Objectif

Le site doit être facile à comprendre pour :

- les moteurs de recherche,
- les réseaux sociaux,
- les navigateurs,
- les outils d'indexation,
- les assistants IA capables d'explorer le Web.

Les mécanismes SEO classiques restent prioritaires. Les fichiers destinés aux assistants IA sont complémentaires.

## Métadonnées HTML

`src/layouts/BaseLayout.astro` génère notamment :

- `<title>`,
- `meta description`,
- canonical,
- `hreflang`,
- Open Graph title,
- Open Graph description,
- Open Graph URL,
- `theme-color`,
- favicon.

Chaque page doit donc fournir un `title` et une `description` utiles dans son frontmatter OKF.

## Canonical

Le canonical est construit avec :

```ts
new URL(currentHref, Astro.site)
```

La valeur `Astro.site` provient de `astro.config.mjs`.

Configuration actuelle :

```text
https://gum365.github.io
```

Si le domaine public principal change, mettre à jour `astro.config.mjs`.

## Hreflang

Les versions FR_CA et EN_CA sont associées grâce à `translation_key`.

Le layout publie les variantes linguistiques afin d'aider les moteurs à comprendre qu'il s'agit de traductions de la même page.

La qualité de cette mécanique dépend donc directement de la cohérence des `translation_key`.

## Sitemap

Astro utilise :

```text
@astrojs/sitemap
```

Le sitemap est généré au build.

`robots.txt` référence :

```text
https://gum365.github.io/sitemap-index.xml
```

Si le domaine canonique change, mettre à jour à la fois :

- `astro.config.mjs`,
- `public/robots.txt`,
- `public/llms.txt`.

## robots.txt

Fichier :

```text
public/robots.txt
```

Politique actuelle :

```text
User-agent: *
Allow: /
```

Le site est donc ouvert à l'exploration publique.

## llms.txt

Fichier :

```text
public/llms.txt
```

Il est publié à la racine du site :

```text
/llms.txt
```

Son rôle est de fournir une description concise et structurée du site aux outils et assistants IA qui choisissent de consulter cette convention.

Il contient :

- l'identité GUM365,
- la langue,
- les pages principales,
- la plateforme Mobilizon,
- les ressources utiles,
- les règles de compréhension importantes.

### Important

`llms.txt` n'est pas un remplacement pour :

- sitemap,
- robots.txt,
- données structurées,
- title,
- description,
- canonical,
- contenu HTML de qualité.

Il ne faut pas le présenter comme une garantie de meilleur classement SEO. Son bénéfice principal est la **découvrabilité et la compréhension par des outils IA compatibles**.

## Contenu dynamique Mobilizon

Les événements sont chargés côté navigateur.

Cela signifie que le HTML statique initial de la page Événements ne contient pas toutes les données événementielles.

Pour le référencement des événements eux-mêmes, Mobilizon reste la source de vérité et fournit les fiches événementielles dédiées.

Le site Astro sert de portail de découverte et de présentation.

## Descriptions de pages

Une bonne description doit :

- décrire précisément la page,
- inclure GUM365 lorsque pertinent,
- éviter le bourrage de mots-clés,
- rester lisible,
- différencier les pages.

## Titres

Format recommandé :

```text
Sujet - GUM365
```

La page d'accueil peut utiliser un titre de marque plus descriptif.

## Liens internes

Favoriser les liens vers les pages locales :

- Communauté,
- Événements,
- Partenaires,
- À propos.

Pour un événement spécifique, lier directement vers Mobilizon.

## Open Graph

Le layout publie les métadonnées Open Graph de base.

Une future amélioration possible serait d'ajouter une image Open Graph dédiée au site et éventuellement des images spécifiques par page. Une telle évolution doit respecter le brand kit.

## Checklist SEO d'une nouvelle page

Avant merge :

1. `title` unique.
2. `description` utile.
3. `slug` stable.
4. Traduction liée par `translation_key`.
5. H1 unique via `hero_title`.
6. Hiérarchie H2 / H3 correcte.
7. Liens internes pertinents.
8. Aucun contenu dupliqué inutilement.
9. Build et sitemap valides.
10. `llms.txt` mis à jour si la nouvelle page est structurante.
