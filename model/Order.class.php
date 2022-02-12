<?php

class Order extends Model {
    protected static $table = 'orders';

    public static function getOrders()
    {
        $rows = db::getInstance()->Select(
            'SELECT `orders`.`order_number`, `orders`.`user_id`, `orders`.`quantity`, `orders`.`good_id`, `orders`.`status_id`,`goods`.`name`, `goods`.`description`, `goods`.`price`, `goods`.`imgfile`, `order_status`.`title` FROM `orders` LEFT JOIN `goods` ON `orders`.`good_id` = `goods`.`id` LEFT JOIN `order_status` ON `orders`.`status_id` = `order_status`.`id` ORDER BY `orders`.`time_create` DESC');
        $orders = array();
        foreach ($rows as $row) {
            $order_number = $row['order_number'];
            unset ($row['order_number']);
            $status = $row['status_id'];
            unset ($row['status_id']);
            $user = $row['user_id'];
            unset ($row['user_id']);
            $orders[$user][$order_number]['positions'][] = $row;
            $orders[$user][$order_number]['status'] = $status;
        }
        return $orders;
    }
    
    public static function updateStatus($status_id, $order_number)
    {
        $res = db::getInstance()->Query(
            'UPDATE `orders` SET `status_id` = :status_id WHERE `order_number` = :order_number',
        ['status_id' => $status_id, 'order_number' => $order_number]);

        return $res;
    }

    protected static function setProperties()
    {
        self::$properties['phone'] = [
            'type' => 'varchar',
            'size' => 512
        ];

        self::$properties['address'] = [
            'type' => 'varchar',
            'size' => 512
        ];

        self::$properties['email'] = [
            'type' => 'float'
        ];
    }
}