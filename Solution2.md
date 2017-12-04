## Afficher toutes les cards du user 1

SELECT cards.name FROM users_cards_lists 
JOIN cards ON card_id = cards.id
WHERE user_id = 1

## Afficher tous les users qui ont des cards en lists 3

SELECT DISTINCT list_id as listId, users.id, CONCAT(users.firstname, ' ' , users.lastname) as usersName
FROM users_cards_lists 
JOIN users ON user_id = users.id
WHERE list_id = 3


## Pour plus de détail, ajouter, pour chaque utilisateur, le nom des cards qu’ils ont en liste 1

select DISTINCT users.id, 
CONCAT(users.firstname, ' ',users.lastname) as userName,
GROUP_CONCAT( 
CONCAT('{"id":"', cards.id, '","name":"',cards.name,'"}')
 ) as cards 
FROM users_cards_lists
JOIN users ON user_id = users.id
JOIN cards ON card_id = cards.id
WHERE list_id = 3
GROUP BY user_id

## Solution 2 for mysql 8

select DISTINCT users.id, 
CONCAT(users.firstname, ' ',users.lastname) as userName,
JSON_ARRAYAGG(JSON_OBJECT('id',cards.id, 'name', cards.name)) as cards 
FROM users_cards_lists
JOIN users ON user_id = users.id
JOIN cards ON card_id = cards.id
WHERE list_id = 3
GROUP BY user_id


## Afficher les cards avec les lists associés




## Afficher les listes avec leurs tâches associées et avec pour chaque tâches, la liste des utilisateurs associés