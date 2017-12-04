* Afficher le nom de la liste dans laquelle se trouve la carte 3

1.  a.  SELECT l.name FROM cards as c
	    JOIN lists as l on l.id = c.list_id
	    WHERE c.id = 3

	b.  SELECT lists.name FROM cards 
	    JOIN lists ON lists.id = cards.list_id
	    WHERE cards.id = 3

* Afficher toutes les cards de la list qui a l'id 3


2.  a.  SELECT * FROM cards WHERE list_id = 3 

    b.  SELECT * FROM lists
	    JOIN cards ON lists.id = list_id
        WHERE lists.id = 3

* Afficher toutes les cards du user qui a l'id 1

 
3.  a.  SELECT name FROM users_cards
		JOIN cards ON cards.id = card_id
		WHERE user_id = 1

* Afficher toutes les users associés à la card qui a l'id 2


4.  a.  SELECT * FROM users_cards
		JOIN users ON users.id = user_id
		WHERE card_id = 2

* Afficher les lists avec leurs cards associées


5. 	a.  SELECT lists.name, cards.name FROM lists 
		JOIN cards ON lists.id = list_id 
		GROUP BY list.id
		ORDER BY lists.name

	b.  SELECT lists.name, CONCAT('["', GROUP_CONCAT(cards.name SEPARATOR '","'), '"]') as cards     FROM lists 
		JOIN cards ON lists.id = list_id 
		GROUP BY lists.id
		ORDER BY lists.name

* Afficher les lists avec pour chacune les cards et pour chaque cards les users associés

6.  a. SELECT l.name,
	   CONCAT(‘[’,
       GROUP_CONCAT(
       CONCAT(‘{“name”:“‘,c.name, ‘“, users:‘,ucr.users,‘}’)
       ),‘]’) as cards
	   FROM (
	   SELECT uc.card_id as cid,
	   CONCAT(‘[“‘, GROUP_CONCAT(CONCAT(u.lastname,’ ‘, u.firstname)
	   SEPARATOR ‘“,”‘),‘“]’)
	   as users
	   FROM users_cards as uc
	   JOIN users as u ON u.id = uc.user_id
	   GROUP BY uc.card_id
	   ) as ucr
	   JOIN cards as c ON c.list_id = ucr.cid
	   JOIN lists as l ON c.list_id = l.id
	   GROUP BY l.id
