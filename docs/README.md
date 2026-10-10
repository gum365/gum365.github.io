# Documentation GUM365

Ce répertoire contient la documentation de référence du site Astro GUM365. Le README racine explique le fonctionnement général. Les documents ici servent de référence durable pour l'architecture, la maintenance, la marque, les intégrations et le déploiement.

## Documents

| Document | Rôle |
| --- | --- |
| [architecture.md](architecture.md) | Architecture technique, flux de rendu, routage et responsabilités |
| [content-maintenance.md](content-maintenance.md) | Modifier, traduire ou ajouter des pages OKF |
| [branding-strategy.md](branding-strategy.md) | Stratégie de marque, principes éditoriaux et cohérence d'expérience |
| [brand-kit.md](brand-kit.md) | Logo, couleurs, typographies, tokens, composants et règles visuelles |
| [integrations.md](integrations.md) | Mobilizon et dépendances externes |
| [deployment.md](deployment.md) | Développement local, validation, PR et GitHub Pages |
| [seo-ai-discovery.md](seo-ai-discovery.md) | SEO technique, sitemap, robots.txt et llms.txt |

## Documents de gouvernance à la racine

- [README.md](../README.md) : point d'entrée pour comprendre et maintenir le site.
- [CHANGELOG.md](../CHANGELOG.md) : historique des changements issus des PR et règle de mise à jour future.
- [LICENSE](../LICENSE) : licence MIT héritée de Velocity.

## Principes de gouvernance

La documentation fait partie du produit. Une PR qui modifie l'architecture, le modèle de contenu, la stratégie de marque, une intégration ou le déploiement doit mettre à jour le document correspondant.

Le code reste la source de vérité opérationnelle. En cas d'écart entre la documentation et le comportement réel du site, corriger la documentation dans la même PR que le correctif.
