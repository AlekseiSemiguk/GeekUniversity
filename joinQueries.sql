-- выбрать все заказы со статусами, с товарами, ценой, количеством
SELECT
	orders.id,
	order_statuses.name as status,
	orders.user_id,
	items.name,
    items.price,
	order_items.quantity
	FROM orders
		JOIN order_statuses
			ON orders.status_id = order_statuses.id
		JOIN order_items
			ON orders.id = order_items.order_id
		JOIN items
			ON order_items.item_id = items.id
	ORDER BY orders.id ASC;

-- выбрать все категории со свойствами для каждой категории
SELECT
	categories.name as category,
	properties.name as property
	FROM categories
		JOIN categories_properties
			ON categories.id = categories_properties.category_id
		JOIN properties
			ON properties.id = categories_properties.property_id