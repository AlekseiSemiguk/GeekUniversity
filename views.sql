-- товары, заказанные в последний месяц
DROP VIEW IF EXISTS items_bought_last_month;
CREATE VIEW items_bought_last_month AS
SELECT items.id, items.name
  FROM orders
	JOIN order_items
		ON orders.id = order_items.order_id
	JOIN items
		ON order_items.item_id = items.id
  	WHERE orders.created_at > (current_timestamp - interval '1 month');
	
SELECT * FROM items_bought_last_month;

-- товары, которые пользователи покупают в течение 10 дней после регистрации (первые товары после регистрации)
DROP VIEW IF EXISTS items_bought_users_after_register;
CREATE VIEW items_bought_users_after_register AS
SELECT items.id as item_id, items.name, users.id as user_id
  FROM orders
	JOIN order_items
		ON orders.id = order_items.order_id
	JOIN items
		ON order_items.item_id = items.id
	JOIN users
		ON orders.user_id = users.id
	JOIN profiles
		ON profiles.user_id = users.id
  	WHERE orders.created_at < (profiles.created_at + interval '10 day');
	
SELECT * FROM items_bought_users_after_register;