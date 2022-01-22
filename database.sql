CREATE TABLE `cart` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `user_id` int(11) NOT NULL,
 `good_id` int(11) NOT NULL,
 `quantity` int(11) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

CREATE TABLE `feedback` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `user_id` int(11) NOT NULL,
 `date` datetime NOT NULL,
 `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

CREATE TABLE `goods` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
 `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
 `price` int(11) NOT NULL,
 `imgfile` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
 `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
 `salt` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
 `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
 `role` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

CREATE TABLE `orders` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `order_number` int(11) NOT NULL,
 `user_id` int(11) NOT NULL,
 `good_id` int(11) NOT NULL,
 `quantity` int(11) NOT NULL,
 `status_id` int(11) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

CREATE TABLE `order_status` (
 `id` int(11) NOT NULL,
 `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
 UNIQUE KEY `UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci