DROP FUNCTION IF EXISTS top_item_in_user_orders;

-- функция получает товар, который пользователь чаще заказывал
CREATE FUNCTION top_item_in_user_orders (user_id INTEGER) 
RETURNS INTEGER AS 
$$
  SELECT 
	items.id
	FROM orders
		JOIN order_items
			ON orders.id = order_items.order_id
		JOIN items
			ON order_items.item_id = items.id
	WHERE orders.user_id = 50
	ORDER BY quantity DESC
	LIMIT 1; 
$$ 
LANGUAGE SQL;

SELECT top_item_in_user_orders(50);