# Exercice 2

## Brief

Après une première itération, nous apercevons que le premier brief ne satisfait pas exactement les besoins de nos utilisateurs.

Alors nous avons remis l'ouvrage sur le métier et nous avons pondu de nouvelles user stories aditionnelles et correctives.

Nous avons défini 2 rôles distinct :

* *F = formateur*
* *A = apprenant*

# User stories

## Gestion des roles, des autorisations et des invitations

Les actions définies dans les **user stories de 1 à 6** (creation / supression / modification des listes et des cartes) ne seront réalisable que par le formateur.

L'action definie dans la **user story 7** sera remplacer par un système d'invitation.

L'actions définie dans la **user story 8** (supression d'un utilisateur) sera aussi réservé au formateur.

### *La gestion des roles, des autorisations et des invitations n'est pas attendu pour le sprint à venir*

## Gestion des déplacements de carte personnalisé par apprenant

Afin de pouvoir gérer plus finement l'avancement de la promo et de permettre une auto-évaluation par les apprenants, nous souhaiterions qu'un apprenant puisse déplacer ses cartes individuellement.

Néanmoins nous aimerions toujours avoir une vue condensée de l'état de l'évolution de la promo. Ainsi, dans la vue générale du board, une carte pourra être dupliquée sur les listes pour lesquels on trouve des apprenants associés à cette carte.

Ce qui nous ammène à modifier les user stories 10, 11, 12 et à ajouter une story 14

10. en tant qu'Apprenant, je veux déplacer **mes** cartes d'une liste à une autre afin de montrer l'évolution de **mon** travail.

11. en tant qu'U, je veux **m'**ajouter à une carte afin de lui attribuer l'exercice ou la compétence

12. en tant qu'U, je veux **me** supprimer d'une carte afin de corriger une erreur d'attribution

13. (aucune modification)

14. en tant qu'U, je veux voir mon board personnel afin d'avoir un vision condensée de l'évolution de mon travail

# Nouveau use case

![](UseCase2.svg)

# Modelisation des données

De par l'ajout d'une gestion personnelle des déplacements de carte par les apprenants, nous devons modifier le modèle de données.

**Pouvez-vous nous fournir un nouveau diagramme UML représentant le nouveau modèle de données ?**

A vous de jouer !!!



















