# CharlesC - Guide d'Installation en Local

## Table des Matières

- [Prérequis](#prérequis)
- [Étapes d'Installation](#étapes-dinstallation)
  - [Cloner le dépôt](#cloner-le-dépôt)
  - [Installer les dépendances](#installer-les-dépendances)
  - [Configuration de WordPress](#configuration-de-wordpress)
  - [Démarrer l'application](#démarrer-lapplication)
- [Points à considérer](#points-à-considérer)

## Prérequis

Pour installer ce projet en local, vous aurez besoin des éléments suivants :

- Node.js
- PHP
- Serveur Web (Apache, Nginx)
- WordPress en mode Headless CMS

## Étapes d'Installation

Suivez ces étapes pour installer le projet en local.

### Cloner le dépôt

Ouvrez un terminal et exécutez la commande suivante :

```bash
git clone git@github.com:Ben0813/CharlesC.git
```

### Installer les dépendances

#### Front-end

Naviguez vers le dossier `front` et installez les dépendances :

```bash
cd CharlesC/front
npm install
```

#### Back-end

Installer un WordPress que vous allez utiliser comme Headless CMS.

### Configuration de WordPress

1. Installez le plugin WP Login-Limit en placant le fichier corrspondant dans ../wp-content/plugins/
2. Installez le plugin Advanced Custom Fields via le tableau de bord WordPress.
3. Activez les plugins et configurez ACF pour ajouter catégories dans les Taxonimies, ce qui vous permettra d'ajouter des catégories aux médias.

### Configuration de Front-end

Ajoutez le dossier .env à la racine du projet et ajouter en valeur l'URL de votre API WordPress à votre variable d'environement "VITE_REACT_APP_API_URL="

### Démarrer l'application

#### Front-end

Pour démarrer l'application front-end, exécutez :

```bash
npm run ndev
```

#### Back-end

Démarrez votre serveur web et assurez-vous que WordPress est accessible.

---
