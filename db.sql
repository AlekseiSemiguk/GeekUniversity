CREATE TABLE `auto` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `filesize` int(11) NOT NULL,
 `filepath` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 `count` int(11) NOT NULL DEFAULT '0',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
