# Intégrations externes

## Mobilizon

Mobilizon est la plateforme communautaire et événementielle de GUM365.

Instance :

```text
https://gum365.ca
```

API GraphQL :

```text
https://gum365.ca/api
```

Le site principal Astro ne duplique pas les événements. Il interroge l'API Mobilizon directement dans le navigateur.

## Composants concernés

### Liste des événements

```text
src/components/MobilizonEvents.astro
```

Responsabilités :

- récupérer les événements publics à venir,
- trier par date,
- afficher jusqu'à 9 éléments,
- afficher l'image si elle existe,
- afficher date, lieu et organisateur,
- lier chaque carte à Mobilizon,
- gérer FR_CA et EN_CA,
- basculer vers un fallback si l'API échoue.

### Prochain événement

```text
src/components/NextMobilizonEvent.astro
```

Responsabilités :

- récupérer les événements futurs,
- les trier,
- sélectionner le premier,
- l'afficher sur les pages d'accueil FR_CA et EN_CA,
- proposer un fallback vers Mobilizon.

## Requête GraphQL

Les deux composants utilisent `searchEvents` avec une borne `beginsOn` égale à l'heure courante.

Les champs consommés sont notamment :

```graphql
id
title
uuid
beginsOn
status
picture { url }
physicalAddress {
  description
  locality
  region
}
organizerActor {
  name
  preferredUsername
}
```

## Statuts

Les événements dont le statut est `CANCELLED` sont filtrés.

La liste est triée côté client avec `beginsOn`.

## Fuseau horaire

L'affichage utilise :

```text
America/Toronto
```

Cela correspond à l'heure locale utilisée par la communauté de Montréal.

## Fallback

L'intégration doit rester tolérante aux erreurs.

Les cas suivants ne doivent jamais casser la page :

- API indisponible,
- erreur réseau,
- CORS,
- réponse GraphQL invalide,
- absence d'événement.

Dans ces cas, un état de fallback propose d'ouvrir :

```text
https://gum365.ca
```

## CORS

Comme la requête est exécutée côté navigateur, l'instance Mobilizon doit autoriser les requêtes cross-origin du site principal.

Si l'intégration cesse de fonctionner alors que le build Astro est vert, vérifier en priorité :

1. la console du navigateur,
2. l'onglet Network,
3. les en-têtes CORS de `https://gum365.ca/api`,
4. la disponibilité de l'instance.

## Source de vérité

Les informations suivantes appartiennent à Mobilizon :

- titre de l'événement,
- date,
- heure,
- lieu,
- image,
- organisateur,
- statut,
- fiche détaillée.

Ne pas recopier ces informations dans `knowledge/okf`.

Les fichiers OKF servent uniquement à décrire les formats d'événements et le rôle de la communauté de façon pérenne.

## Sessionize

Sessionize reste utilisé pour les appels à conférenciers.

Lorsqu'un lien Sessionize est présent dans le contenu, il doit correspondre à l'appel actif.

Sessionize ne remplace pas Mobilizon comme plateforme communautaire ou événementielle.

## GitHub

GitHub remplit trois rôles :

- gestion du code et de la documentation,
- validation par PR et GitHub Actions,
- publication GitHub Pages.

Le site doit être configuré avec :

```text
Settings -> Pages -> Source -> GitHub Actions
```

## Ajout d'une future intégration

Toute nouvelle intégration doit respecter les règles suivantes :

1. documenter la source de vérité,
2. éviter la duplication de données,
3. prévoir un état d'erreur,
4. ne pas bloquer le build statique sauf nécessité explicite,
5. isoler la logique dans un composant ou un module dédié,
6. documenter les dépendances opérationnelles,
7. mettre à jour `CHANGELOG.md`.
