# Développement et déploiement

## Prérequis

Le projet utilise :

- Node.js 22 ou plus récent,
- pnpm 10.15.1,
- Corepack,
- Astro 6.

Le `packageManager` est défini dans `package.json`.

## Installation locale

```bash
corepack enable
corepack prepare pnpm@10.15.1 --activate
pnpm install
```

## Développement

```bash
pnpm dev
```

Astro démarre alors un serveur de développement local.

## Validation

```bash
pnpm check
```

exécute :

```text
astro check
```

Le build complet :

```bash
pnpm build
```

exécute :

```text
astro check && astro build
```

Le répertoire de sortie est :

```text
dist/
```

## Preview

Après un build local :

```bash
pnpm preview
```

## Branches et PR

Workflow recommandé :

1. partir de `main`,
2. créer une branche descriptive,
3. effectuer les changements,
4. mettre à jour la documentation concernée,
5. mettre à jour `CHANGELOG.md`,
6. exécuter `pnpm build`,
7. ouvrir un PR vers `main`,
8. attendre le workflow GitHub Actions,
9. merger lorsque le build est vert.

Exemples de noms de branches :

```text
feature/...
fix/...
docs/...
chore/...
```

## GitHub Actions

Workflow :

```text
.github/workflows/deploy.yml
```

Nom :

```text
Build and deploy Astro site
```

### Déclencheurs

Le workflow écoute :

```yaml
workflow_dispatch:
pull_request:
  branches:
    - main
push:
  branches:
    - main
```

### PR

Sur un PR, le workflow :

- checkout,
- configure Node,
- active pnpm,
- installe les dépendances,
- exécute `pnpm build`.

Les étapes GitHub Pages sont volontairement ignorées.

### Push sur main

Sur un push vers `main`, le workflow :

- construit le site,
- configure Pages,
- téléverse `dist/`,
- déploie vers l'environnement `github-pages`.

### Workflow manuel

`workflow_dispatch` est disponible.

Dans l'implémentation actuelle, les étapes de déploiement portent la condition :

```text
github.event_name == 'push' && github.ref == 'refs/heads/main'
```

Un lancement manuel sert donc actuellement à valider le build, pas à publier le site.

Si un vrai déploiement manuel est souhaité plus tard, modifier explicitement cette condition dans une PR documentée.

## Permissions GitHub Actions

Le workflow demande :

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

Ces permissions sont nécessaires pour GitHub Pages avec OIDC.

## Concurrence

Le workflow utilise :

```yaml
concurrency:
  group: pages
  cancel-in-progress: false
```

Cela évite d'annuler un déploiement Pages déjà en cours.

## Configuration GitHub Pages

La configuration attendue est :

```text
Settings
  -> Pages
  -> Build and deployment
  -> Source
  -> GitHub Actions
```

Ne pas sélectionner **Deploy from a branch**.

Sinon GitHub peut lancer un build Jekyll sur les fichiers Astro.

## Domaine et canonical

`astro.config.mjs` définit actuellement :

```js
site: 'https://gum365.github.io'
```

Cette valeur est utilisée notamment pour :

- les canonical,
- le sitemap,
- les URLs absolues générées par Astro.

Si le site principal est déplacé vers un domaine personnalisé, mettre à jour cette valeur dans la même PR que la configuration du domaine.

## Diagnostic des erreurs

### Le PR ne build pas

Vérifier :

```bash
pnpm install
pnpm build
```

Puis inspecter :

- erreurs Zod dans les fichiers OKF,
- imports Astro,
- TypeScript,
- frontmatter YAML.

### Le build est vert mais les événements ne chargent pas

Le problème est probablement runtime.

Vérifier :

- Mobilizon,
- CORS,
- console navigateur,
- Network,
- `https://gum365.ca/api`.

### GitHub exécute Jekyll

Vérifier que la source Pages est **GitHub Actions**.

### La navigation bilingue pointe mal

Vérifier :

- `translation_key`,
- `slug`,
- `language`,
- présence des deux fichiers.

## Avant merge

Checklist minimale :

- `pnpm build` vert,
- rendu FR_CA vérifié,
- rendu EN_CA vérifié,
- clair / sombre,
- mobile,
- liens externes,
- changelog,
- documentation,
- pas de retour d'une référence Meetup,
- événements toujours issus de Mobilizon.
