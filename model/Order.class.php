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

    public static function updateUserStatus($status_id, $order_number, $user_id = '')
    {
        $res = db::getInstance()->Query(
            'UPDATE `orders` SET `status_id` = :status_id WHERE `order_number` = :order_number AND `user_id` = :user_id',
        ['status_id' => $status_id, 'order_number' => $order_number, 'user_id' => $user_id]);

        return $res;
    }

    public static function newOrder($user_id)
    {
        $goodsInCartDB = db::getInstance()->Select(
            'SELECT `cart`.`good_id`, `cart`.`quantity` FROM `cart` LEFT JOIN `goods` ON `cart`.`good_id` = `goods`.`id` WHERE `cart`.`user_id` = :user_id',
        ['user_id' => $user_id]);
    
        $maxOrderNumber = array_shift(db::getInstance()->Select('SELECT MAX(`order_number`) as `max` FROM `orders`'));
        $orderNumber = $maxOrderNumber['max'] + 1;

        $goodsInCart = array();
        foreach ($goodsInCartDB as $good) {
            $goodsInCart[] = "($orderNumber, {$user_id}, {$good['good_id']}, {$good['quantity']}, 1)";
        }
            
        $goodsInCart = implode(", ", $goodsInCart);
    

        db::getInstance()->beginTransaction();
        $res = db::getInstance()->Query(
            "INSERT INTO `orders` (`order_number`, `user_id`, `good_id`, `quantity`, `status_id`) VALUES $goodsInCart"
        );
   
        $res1 = db::getInstance()->Query(
            'DELETE FROM `cart` WHERE `user_id` = :user_id',
        ['user_id' => $user_id]);

        if (($res->rowCount() > 0) && ($res1->rowCount() > 0)) {
            db::getInstance()->commit();
            $result = true;
        } else {
            db::getInstance()->rollBack();
            $result = false;
        }

        return $result;
    }

    public static function getUserOrders($userId) {

        $rows = db::getInstance()->Select(
            'SELECT `orders`.`order_number`, `orders`.`quantity`, `orders`.`good_id`, `orders`.`status_id`,`goods`.`name`, `goods`.`description`, `goods`.`price`, `goods`.`imgfile`, `order_status`.`title` FROM `orders` LEFT JOIN `goods` ON `orders`.`good_id` = `goods`.`id` LEFT JOIN `order_status` ON `orders`.`status_id` = `order_status`.`id` WHERE `orders`.`user_id` = :user_id ORDER BY `orders`.`time_create` DESC', ["user_id" => $userId]);
        $orders = array();
        foreach ($rows as $row) {
            $order_number = $row['order_number'];
            unset ($row['order_number']);
            $status = $row['title'];
            unset ($row['title']);
            $orders[$order_number]['positions'][] = $row;
            $orders[$order_number]['status'] = $status;
        }
        return $orders;
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