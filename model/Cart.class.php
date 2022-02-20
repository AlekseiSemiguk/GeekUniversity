<?php

class Cart extends Model {
    protected static $table = 'goods';

    public static function getGoodInCart($userId)
    {
        return db::getInstance()->Select('SELECT `cart`.`good_id`, `cart`.`quantity`, `goods`.`name`, `goods`.`description`, `goods`.`price`, `goods`.`imgfile` FROM `cart` LEFT JOIN `goods` ON `cart`.`good_id` = `goods`.`id` WHERE `cart`.`user_id` = :user_id', ['user_id' => $userId]);
    }

    public static function addToCart($userId, $goodId) {
        $res = db::getInstance()->Select('SELECT * FROM `cart` WHERE `user_id` = :user_id AND `good_id` = :good_id', ['user_id' => $userId, 'good_id' => $goodId]);

        if (is_array($res) && count($res) > 0) {
            db::getInstance()->Query('UPDATE `cart` SET `quantity` = `quantity` + 1 WHERE `user_id` = :user_id AND `good_id` = :good_id', ['user_id' => $userId, 'good_id' => $goodId]);
        } else {
            db::getInstance()->Query('INSERT INTO `cart` (`user_id`, `good_id`, `quantity`) VALUES (:user_id, :good_id, :quantity)', ['user_id' => $userId, 'good_id' => $goodId, 'quantity' => '1']);
        }
    }

    public static function deleteFromCart($userId, $goodId) {
        
        db::getInstance()->Query('DELETE FROM `cart` WHERE `user_id` = :user_id AND `good_id` = :good_id', ['user_id' => $userId, 'good_id' => $goodId]);
        
    }
}