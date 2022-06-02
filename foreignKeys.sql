ALTER TABLE profiles
  ADD CONSTRAINT profiles_user_id_fk 
  FOREIGN KEY (user_id) 
  REFERENCES users (id);

ALTER TABLE items 
  ADD CONSTRAINT items_category_id_fk 
  FOREIGN KEY (category_id) 
  REFERENCES categories (id);

ALTER TABLE items 
  ADD CONSTRAINT items_brand_id_fk 
  FOREIGN KEY (brand_id) 
  REFERENCES brands (id);

ALTER TABLE categories 
  ADD CONSTRAINT categories_parent_category_id_fk 
  FOREIGN KEY (parent_category_id) 
  REFERENCES categories (id);

ALTER TABLE categories_properties 
  ADD CONSTRAINT categories_properties_category_id_fk 
  FOREIGN KEY (category_id) 
  REFERENCES categories (id);

ALTER TABLE categories_properties 
  ADD CONSTRAINT categories_properties_property_id_fk 
  FOREIGN KEY (property_id) 
  REFERENCES properties (id);

ALTER TABLE property_string_values 
  ADD CONSTRAINT property_string_values_item_id_fk 
  FOREIGN KEY (item_id) 
  REFERENCES items (id);

ALTER TABLE property_string_values 
  ADD CONSTRAINT property_string_values_property_id_fk 
  FOREIGN KEY (property_id) 
  REFERENCES properties (id);

ALTER TABLE property_numeric_values 
  ADD CONSTRAINT property_numeric_values_item_id_fk 
  FOREIGN KEY (item_id) 
  REFERENCES items (id);

ALTER TABLE property_numeric_values 
  ADD CONSTRAINT property_numeric_values_property_id_fk 
  FOREIGN KEY (property_id) 
  REFERENCES properties (id);

ALTER TABLE property_range_values 
  ADD CONSTRAINT property_range_values_item_id_fk 
  FOREIGN KEY (item_id) 
  REFERENCES items (id);

ALTER TABLE property_range_values 
  ADD CONSTRAINT property_range_values_property_id_fk 
  FOREIGN KEY (property_id) 
  REFERENCES properties (id);

ALTER TABLE orders 
  ADD CONSTRAINT orders_status_id_fk 
  FOREIGN KEY (status_id) 
  REFERENCES order_statuses (id);

ALTER TABLE orders 
  ADD CONSTRAINT orders_user_id_fk 
  FOREIGN KEY (user_id) 
  REFERENCES users (id);

ALTER TABLE order_items 
  ADD CONSTRAINT order_items_order_id_fk 
  FOREIGN KEY (order_id) 
  REFERENCES orders (id);

ALTER TABLE order_items 
  ADD CONSTRAINT order_items_item_id_fk 
  FOREIGN KEY (item_id) 
  REFERENCES items (id);