# Brand kit GUM365

Ce document décrit les éléments visuels actuellement implémentés dans le site et les règles à respecter pour garder l'identité cohérente.

## Logo

### Fichier de référence

```text
public/gum365-icon-v2.png
```

Caractéristiques :

- PNG 92 x 92,
- identité visuelle GUM365,
- utilisé comme logo de header,
- utilisé comme favicon,
- utilisé dans certains CTA,
- même fichier pour les thèmes clair et sombre.

### Règles

Ne pas :

- recolorer le logo,
- appliquer un filtre CSS,
- changer ses proportions,
- reconstruire le logo avec une police,
- générer une version SVG approximative,
- créer une variante sombre distincte sans décision de marque explicite.

Si une version SVG est produite un jour, elle doit être visuellement fidèle à la source et validée avant remplacement.

### Tailles actuelles

| Usage | Taille |
| --- | ---: |
| Fichier source | 92 x 92 |
| Header | 42 x 42 |
| CTA Partenaires | 72 x 72 |

## Typographies

Le site charge les fontes via Fontsource.

### Titres

```css
--theme-font-display: 'Outfit Variable', 'Outfit', var(--theme-font-sans);
```

Outfit est utilisé pour :

- H1,
- H2,
- H3 importants,
- nom de marque,
- chiffres ou prix mis en avant.

### Texte courant

```css
--theme-font-sans: 'Manrope Variable', 'Manrope', ui-sans-serif, system-ui, sans-serif;
```

Manrope est utilisé pour :

- paragraphes,
- navigation,
- formulaires,
- labels,
- boutons,
- tableaux.

### Règle

Ne pas introduire une troisième police sans besoin de marque explicite.

## Palette de marque

La source de vérité se trouve dans `src/styles/global.css`.

### Orange GUM365

| Token | Valeur |
| --- | --- |
| `--brand-50` | `oklch(97.5% 0.02 45)` |
| `--brand-200` | `oklch(87.5% 0.08 45)` |
| `--brand-400` | `oklch(68.5% 0.19 40)` |
| `--brand-500` | `oklch(62.5% 0.22 38)` |
| `--brand-600` | `oklch(53.2% 0.19 38)` |
| `--brand-800` | `oklch(37.2% 0.13 38)` |
| `--brand-900` | `oklch(26.5% 0.09 38)` |

Le token principal est :

```css
--accent: var(--brand-500);
```

Le navigateur utilise également :

```html
<meta name="theme-color" content="#f94c10" />
```

Le `theme-color` ne remplace pas les tokens CSS comme source de vérité visuelle.

## Neutres

Le site utilise une échelle de gris OKLCH :

```css
--gray-0
--gray-50
--gray-100
--gray-200
--gray-300
--gray-400
--gray-600
--gray-700
--gray-800
--gray-900
--gray-950
```

Les composants doivent préférer les tokens sémantiques plutôt que les gris directs.

## Tokens sémantiques

### Thème clair

```css
--background: var(--gray-0);
--background-secondary: var(--gray-50);
--background-tertiary: var(--gray-100);
--foreground: var(--gray-900);
--foreground-secondary: var(--gray-700);
--foreground-muted: var(--gray-600);
--border: var(--gray-200);
--border-strong: var(--gray-300);
--primary: var(--gray-900);
--primary-hover: var(--gray-800);
--primary-foreground: var(--gray-0);
--accent: var(--brand-500);
--accent-hover: var(--brand-600);
--card: var(--gray-0);
```

### Thème sombre

```css
--background: var(--gray-950);
--background-secondary: var(--gray-900);
--background-tertiary: var(--gray-800);
--foreground: var(--gray-50);
--foreground-secondary: var(--gray-300);
--foreground-muted: var(--gray-400);
--border: var(--gray-800);
--border-strong: var(--gray-700);
--primary: var(--gray-0);
--primary-hover: var(--gray-200);
--primary-foreground: var(--gray-900);
--card: var(--gray-900);
```

## Usage de la couleur

L'orange sert principalement à :

- eyebrows,
- liens actifs ou importants,
- accents,
- indicateurs,
- glows,
- checks et détails,
- badges de marque.

Éviter de transformer de grandes surfaces en orange saturé. L'identité actuelle repose sur le contraste entre surfaces neutres et accent orange.

## Rayons

Token principal :

```css
--radius: .55rem;
```

Les grands blocs peuvent utiliser des multiples :

```css
border-radius: calc(var(--radius) * 1.5);
border-radius: calc(var(--radius) * 2);
```

Ne pas introduire arbitrairement de nombreux rayons différents.

## Ombres

Les ombres utilisent des mélanges avec la couleur de premier plan afin de rester compatibles clair / sombre.

Exemple :

```css
box-shadow: 0 20px 55px color-mix(in oklab, var(--foreground) 7%, transparent);
```

Les ombres doivent rester discrètes.

## Hero

Le hero global possède :

- fond secondaire,
- grille subtile,
- glow orange,
- grand H1 Outfit,
- eyebrow orange,
- lead Manrope,
- CTA principaux et secondaires.

Le hero est un motif de marque stable. Éviter de créer un hero radicalement différent page par page.

## Boutons

### Primaire

- surface `--primary`,
- texte `--primary-foreground`,
- contraste fort.

### Secondaire

- surface proche du background,
- bordure `--border-strong`,
- comportement discret au hover.

### Bibliothèque Velocity locale

La page partenaires utilise également :

```text
src/components/ui/form/Button/Button.astro
```

Les nouveaux CTA complexes devraient réutiliser ce composant plutôt que créer une nouvelle API.

## Cards

Les cartes utilisent :

- `--card`,
- `--border`,
- rayon dérivé de `--radius`,
- ombre légère selon le niveau de mise en avant,
- mouvement vertical très court au hover.

Les variantes actuelles sont :

- default,
- solid,
- outline,
- ghost,
- elevated.

## Badges

Les badges servent à catégoriser, pas à remplacer les titres.

Variantes actuelles :

- default,
- success,
- warning,
- error,
- info,
- brand.

Le badge `brand` est privilégié pour les éléments de langage GUM365.

## Tableaux

Les tableaux doivent rester :

- lisibles,
- scrollables horizontalement sur petit écran,
- contrastés en clair et sombre,
- sobres.

Le composant de référence est :

```text
src/components/ui/data-display/Table/Table.astro
```

## CTA marketing

Le composant :

```text
src/components/ui/marketing/CTA/CTA.astro
```

permet des sections de conversion plus fortes.

La variante `invert` est utilisée pour la page Partenaires.

Un CTA doit avoir :

- un message clair,
- une action principale,
- au maximum une action secondaire forte.

## Navigation

Le header est sticky et utilise un fond translucide avec blur.

Principes :

- logo à gauche,
- navigation principale,
- langue,
- thème,
- labels courts,
- état actif visible.

Éviter d'ajouter de multiples CTA ou icônes dans le header sans revoir la hiérarchie globale.

## Thème clair / sombre

Toute nouvelle fonctionnalité visuelle doit être testée dans les deux thèmes.

Ne pas utiliser de couleurs codées en dur sauf lorsqu'elles ont un rôle sémantique clairement documenté.

Préférer :

```css
var(--background)
var(--foreground)
var(--foreground-muted)
var(--border)
var(--accent)
var(--card)
```

## Responsive

Les principaux breakpoints actuels se situent autour de :

- 860 px pour le header et les grilles,
- 760 px pour certains composants événementiels,
- 680 px pour les listes Mobilizon,
- 560 px pour certains détails de la page Partenaires.

Les nouveaux composants doivent fonctionner sans scroll horizontal, sauf les tableaux explicitement scrollables.

## Accessibilité

Conserver :

- HTML sémantique,
- labels de navigation,
- texte alternatif adapté,
- focus visible,
- contraste suffisant,
- boutons et liens distincts,
- textes cachés avec `.sr-only` lorsque nécessaire.

Pour une image purement décorative, utiliser `alt=""`.

## Checklist avant modification visuelle

Avant de fusionner une modification de marque, vérifier :

1. La modification réutilise-t-elle les tokens existants?
2. Le logo reste-t-il intact?
3. Outfit et Manrope restent-elles les seules typographies?
4. L'orange reste-t-il un accent?
5. Le rendu est-il cohérent en clair et sombre?
6. Le composant est-il utilisable sur mobile?
7. Un composant Velocity local existe-t-il déjà pour ce besoin?
8. La modification doit-elle être documentée dans ce fichier ou dans `branding-strategy.md`?
