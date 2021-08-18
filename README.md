# Projet 7 : Créez un réseau social d'entreprise
Parcours Developpeur Web par OpenClassrooms

## Compétences évaluées
  <ul>Personnaliser le contenu envoyé à un clien web</ul>
  <ul>Authentifier un utilisateur et maintenir sa session</ul>
  <ul>Gérer un stockage de données à l'aide de SQL</ul>
  <ul>Implémenter un stockage de données sécurisé en utilisant SQL</ul>
 
## Scénario
<p>Vous êtes développeur depuis plus d'un an chez CONNECT-E, une petite agence web regroupant une douzaine d'employés.<br />
Votre directrice, Stéphanie, invite toute l'agence à prendre un verre pour célébrer une bonne nouvelle ! Elle vient de signer un contrat pour un nouveau projet ambitieux ! 🥂. <br />
Le client en question est Groupomania, un groupe spécialisé dans la grande distribution et l'un des plus fidèles clients de l'agence.<br />
Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues.<br />
Stéphanie vous envoie un message via l’outil de messagerie instantanée de l’entreprise.</p>

<blockquote>
Stéphanie : Hello, comme tu le sais, nous démarrons un très beau projet avec Groupomania et j'aimerais que ce soit toi qui gères la partie développement.<br />
Groupomania a déjà régléchi aux fonctionnalités à intégrer dans le réseau social. Il s'agit en fait de produits déjà existants: 9GAG - ils veulent que les employés partagent et commentent les gifs avec d'autres collègues; Reddit - ils veulent que les employés écrivent et/ou partagent des articles avec leurs collègues sur des sujets qui les intéressent.<br /><br />
Vous : Super, je prends note. Est-ce qu'ils t'ont fourni les spécifications fonctionnelles ?<br /><br />
Sophie : Oui, je te les envoie par mail tout de suite.</blockquote>

<p>Quelques minutes plus tard, vous recevez un mail de Stéphanie.</p>
<blockquote>Bonjour,<br />
Comme convenu, voici les <a href='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P7/Groupomania_Specs_FR_DWJ_VF.pdf'>spécifications fonctionnelles</a>. Tu trouveras également les <a href='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P7/Groupomania_Logos+(3).zip'>logos</a> de l’organisation pour l’habillage du site.<br /><br />
Par ailleurs, Groupomania et moi avons convenu que l’un des employés du groupe testera un MVP du produit, avec une seule des deux fonctionnalités proposées.<br /><br />
Cela nous permettra de nous assurer que nous répondons à leurs attentes.<br /><br />
Après plusieurs réunions avec Groupomania, il semble que les paramètres du projet changent régulièrement, je pense qu’une organisation “agile” serait plus adaptée pour s’adapter aux besoins du client au fur et à mesure des commentaires et affiner l’application au fil de l’eau.<br /><br />
Je suis à ta disposition pour toute question.<br />
Stéphanie</blockquote>

<blockquote>Merci Stéphanie pour toutes ces informations !<br />
Si je comprends bien, je dois fournir une première version d’une des fonctionnalités proposées par Groupomania et j’ai carte blanche concernant la forme que cela va prendre ?<br />
Merci pour ces précisions.</blockquote>

<blockquote>Oui, c’est ça !<br />
La seule contrainte est que le client utilise une base de données relationnelles qui se manipule avec le langage SQL pour le stockage de données. Il faudra donc en tenir compte lorsque tu construiras ton application. Tu devras t’assurer que l’utilisateur puisse requêter les données requises depuis SQL et puisse soumettre ces changements à la base de données SQL. Les données de connexion doivent également être sécurisées.<br />
Merci. </blockquote>

<blockquote>Ah oui, je vois ! Peux-tu me préciser quelles tâches entrent dans le périmètre de ma mission ?<br />
Merci</blockquote>
<blockquote>Bien sûr. Tu vas devoir :<br />

<ul>choisir la fonctionnalité que tu vas développer,</ul>
<ul>estimer le temps que tu passeras sur le développement de chaque fonctionnalité,</ul>
<ul>développer la première version de l'application.</ul>
Deux dernières choses, tu devras faire en sorte que la web app puisse se connecter et se déconnecter à l’application et que la session de l’utilisateur persiste pendant qu’il est connecté.<br /><br />
Tu peux utiliser le framework Front-End de ton choix (React, Vue, Angular, Ember, Meteor, Aurelia...). Par contre, le projet doit être codé en Javascript, donc n'utilise pas le framework Symfony. Enfin, tes pages devront respecter les standards WCAG.<br /><br />
Bon courage et à dispo si besoin :)<br />
Stéphanie</blockquote>

### L'affichage nécessite diverses manipulations :
Modifier les informations contenues dans le fichier .env_ex et le renommer en .env<br />
Effectuer les commandes <code>npm install -g @angular/cli</code> et <code>ng serve</code> dans le dossier front/groupomania.<br />
Effectuer la commande <code>nodemon server</code> dans le dossier back.<br />

Rendez vous sur http://localhost:4200 pour accéder au projet.

### Packages utilisés :
<code>npm install --save dotenv</code><br />
<code>npm install --save bcrypt</code><br />
<code>npm install --save jsonwebtoken</code><br />
<code>npm install --save multer</code><br />
<code>npm install --save helmet</code><br />
<code>npm install --save express-rate-limit</code><br />
<code>npm install --save password-validator</code><br />
<code>npm install --save crypto-js</code><br />
<code>npm install --save body-parser</code><br />
