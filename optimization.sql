EXPLAIN ANALYZE SELECT
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

"Sort  (cost=53.92..54.67 rows=300 width=103) (actual time=0.508..0.529 rows=300 loops=1)"
"  Sort Key: orders.id"
"  Sort Method: quicksort  Memory: 48kB"
"  ->  Hash Join  (cost=34.15..41.58 rows=300 width=103) (actual time=0.095..0.340 rows=300 loops=1)"
"        Hash Cond: (order_items.item_id = items.id)"
"        ->  Hash Join  (cost=29.90..36.51 rows=300 width=94) (actual time=0.047..0.224 rows=300 loops=1)"
"              Hash Cond: (orders.status_id = order_statuses.id)"
"              ->  Hash Join  (cost=3.25..9.07 rows=300 width=20) (actual time=0.040..0.153 rows=300 loops=1)"
"                    Hash Cond: (order_items.order_id = orders.id)"
"                    ->  Seq Scan on order_items  (cost=0.00..5.00 rows=300 width=12) (actual time=0.007..0.040 rows=300 loops=1)"
"                    ->  Hash  (cost=2.00..2.00 rows=100 width=12) (actual time=0.029..0.030 rows=100 loops=1)"
"                          Buckets: 1024  Batches: 1  Memory Usage: 13kB"
"                          ->  Seq Scan on orders  (cost=0.00..2.00 rows=100 width=12) (actual time=0.003..0.014 rows=100 loops=1)"
"              ->  Hash  (cost=17.40..17.40 rows=740 width=82) (actual time=0.005..0.006 rows=5 loops=1)"
"                    Buckets: 1024  Batches: 1  Memory Usage: 9kB"
"                    ->  Seq Scan on order_statuses  (cost=0.00..17.40 rows=740 width=82) (actual time=0.003..0.003 rows=5 loops=1)"
"        ->  Hash  (cost=3.00..3.00 rows=100 width=17) (actual time=0.044..0.044 rows=100 loops=1)"
"              Buckets: 1024  Batches: 1  Memory Usage: 13kB"
"              ->  Seq Scan on items  (cost=0.00..3.00 rows=100 width=17) (actual time=0.008..0.024 rows=100 loops=1)"
"Planning Time: 0.355 ms"
"Execution Time: 0.576 ms"

/*дорогостоящий запрос

"Hash Cond: (order_items.item_id = items.id)"
"        ->  Hash Join  (cost=29.90..36.51 rows=300 width=94) (actual time=0.047..0.224 rows=300 loops=1)"

добавляем индекс */

CREATE INDEX order_items_item_id_fk_idx ON order_items (item_id);

/* проверяем 
"Hash Cond: (order_items.item_id = items.id)"
"        ->  Index Scan using order_items_item_id_fk_idx on order_items  (cost=0.15..20.64 rows=300 width=12) (actual time=0.004..0.124 rows=300 loops=1)"