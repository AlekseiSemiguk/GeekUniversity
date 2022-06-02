-- выбрать все заказы с определенным статусом
SELECT
	orders.id
	FROM orders
	WHERE
	orders.status_id = (SELECT id FROM order_statuses WHERE name = 'justo');

-- выбрать все заказы последних 10 зарегистрированных пользователей
SELECT items.id as item_id, items.name, users.id as user_id
  FROM orders
	JOIN order_items
		ON orders.id = order_items.order_id
	JOIN items
		ON order_items.item_id = items.id
	JOIN users
		ON orders.user_id = users.id
  	WHERE users.id IN (SELECT users.id
					  	FROM users
					 		JOIN profiles
					 		ON profiles.user_id = users.id
						ORDER BY profiles.created_at DESC
						LIMIT 10);
	
