# Bad UI Challenge - Documentation

## Description
Le **Bad UI Challenge** consiste à créer une page web qui démontre les pires pratiques en matière de conception d'interface utilisateur. Le but est de réaliser une expérience utilisateur délibérément mauvaise tout en respectant les standards techniques du développement web.

Pour ce défi, j'ai créé un site web de type e-commerce en utilisant **React.js**, **CSS** et **Bootstrap**. Voici les détails de la mise en œuvre et des choix de conception qui rendent ce site à la fois fonctionnel et frustrant.

---

## Fonctionnalités mises en œuvre

### 1. Navbar
J'ai utilisé une **navbar Bootstrap** avec la classe `primary`. Cependant, l'organisation des titres est chaotique, avec des options mal alignées et des liens peu intuitifs. Cela rend la navigation difficile et peu agréable.

### 2. Carousel
Un **carousel Bootstrap** a été intégré avec les caractéristiques suivantes :
- Les images changent toutes les **0,2 secondes**, ce qui crée un effet de clignotement très inconfortable.
- Aucune indication claire sur les contrôles du carousel.

### 3. Affichage désagréable des produits
Pour la section "Best Sellers" :
- J'ai utilisé la balise `<code>` pour présenter les noms des produits, ce qui donne un style non adapté et peu lisible.
- Les éléments sont mal étayés avec des espaces irréguliers et des polices illisibles.

### 4. Boutons colorés
Les boutons utilisent des variantes telles que `primary`, `warning`, et d'autres de manière excessive et sans logique, ce qui renforce l'incohérence visuelle du site.

### 5. Interaction utilisateur
Pour interagir avec l'utilisateur, j'ai utilisé :
- Des **alert()**, **confirm()**, et **prompt()** en JavaScript pour collecter des informations de manière intrusive.
- Aucun champ de saisie personnalisé ou intuitif n'est présent, ce qui rend les interactions frustrantes.

---

## Comment exécuter le projet

### Prérequis
- Node.js installé sur votre machine.
- Un gestionnaire de paquets comme npm ou yarn.

### Installation
1. Clonez le projet :
   ```bash
   git clone [URL du répertoire]
2. Accédez au dossier du projet :
    ```bash
    cd bad-ui-challenge
3. Installez les dépendances :
    ```bash
    npm install
### Lancement du projet
1. Lancez le serveur de développement :
    ```
    npm start
2. Ouvrez http://localhost:3000 dans votre navigateur.