-- пользователи
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(120) NOT NULL UNIQUE,
  phone VARCHAR(15) UNIQUE
);

-- профили пользователей
CREATE TABLE profiles (
  user_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  patronymic_name VARCHAR(50),
  city VARCHAR(50),
  address VARCHAR(150),
  created_at TIMESTAMP
);

-- товары
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  vendor_code VARCHAR(15) UNIQUE,
  name VARCHAR(50) UNIQUE,
  category_id INT
  brand_id INT 
);

-- категории (если parent_category = NULL) и подкатегории товаров
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  parent_category_id INT
);

-- бренды товаров
CREATE TABLE brand (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
);

CREATE TYPE property_type AS ENUM ('string', 'numeric', 'range');

-- свойства товаров. in_use_in_filter - участвует ли свойство в фильтрации товаров в каталоге
CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  property_type_id property_type,
  is_use_in_filter BOOLEAN
);

-- для каждой категории товаров свой набор свойств
CREATE TABLE categories_properties (
  category_id INT NOT NULL,
  property_id INT NOT NULL,
  PRIMARY KEY (category_id, property_id)
);

-- значения свойств товаров со строковым значением 
CREATE TABLE property_string_values (
  id SERIAL PRIMARY KEY,
  item_id INT NOT NULL,
  property_id INT NOT NULL,
  value VARCHAR(50) NOT NULL
);

-- значения свойств товаров с числовым значением
CREATE TABLE property_numeric_values (
  id SERIAL PRIMARY KEY,
  item_id INT NOT NULL,
  property_id INT NOT NULL,
  value INT NOT NULL
);

-- значения свойств товаров со значением в виде числового диапазона
CREATE TABLE property_range_values (
  id SERIAL PRIMARY KEY,
  item_id INT NOT NULL,
  property_id INT NOT NULL,
  min_value INT,
  max_value INT
);

-- заказы
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  status_id INT NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP
);

-- статусы заказов
CREATE TABLE order_statuses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE
);

-- товары в заказе
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL
);

-- пропустил столбец цены товара
ALTER TABLE items ADD COLUMN price REAL;