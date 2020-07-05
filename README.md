# Athletics Tournament REACT NATIVE

- Année : **M1 WEB HITEMA**
- Matière: *InfoWeb*
- Projet : *REACT Native*

## Auteur(s)

|Nom|Prénom|
|--|--|
*EL ASSOURI* | *Mohammed*|
*TAHIR* | *Shahzaib*|

### Backend NodeJS - athleticsapi

Le projet athleticsapi est une API permettant de recuperer des evennements sportif et d'y participer.
Cette api offre la possibilité à des athlètes de s'inscire et de gérer leur profile. Les routes de l'api sont sécuriser par un token.


### Frontend ReactJS - athleticsnative
  
Le projet athleticsnative est une interface react native permettant la visualisation des evennements sportif et d'y participer.  
Cette interface offre la possibilité à des athlète de s'inscire et de gérer leur profile par le biais d'un formualire.
Et permet également à un administrateur de gerer l'ensemble du tournoi.

**Les données permettant de manipuler l'application se trouvent dans le dossier JSON.**
**Créer une base MONGODB athletics**


### Difficulté rencontré

On ne maîtrise pas encore à 100 % le react native. 
Le cycle de vie est difficile a gérer en fonction de comment on instancie la vue.
Le state du react components est également encore un peu flou.
La création de formulaire ainsi que le store est plus compliqué que sur d'autre framework.
Le passage de parametres d'un écran à l'autre a aussi été un probleme.
Je ne maîtrise pas encore les BDD NoSql qui sont totalements differentes des bases SQL que j'ai l'habitude de manipuler.

### Manque

Je n'ai pris en compte le delete en cascade.
Notemment si l'admin supprime un user qui participe a des épreuves.
La saisie des resultat à une épreuve n'est pas possible: dans la page particiation les cases médaille et résultat devraient être éditable.  
Barre recherche dans les events.
Préremplissage des formulaires.
Lorque on participe le refresh des données dans participation de s'effectue pas.
