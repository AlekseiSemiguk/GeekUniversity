<?php

class Good extends Model {
    protected static $table = 'goods';

    public static function getAllGoods()
    {
        return db::getInstance()->Select('SELECT * FROM `goods`');
    }

    public static function getGood($goodId)
    {
        return db::getInstance()->Select('SELECT * FROM `goods` WHERE `id` = :good_id', ['good_id' => $goodId]);
    }

    public static function update($good_id, $title, $description, $price) {
        $res = db::getInstance()->Query(
            'UPDATE `goods` SET `name` = :name, `description` = :description, `price` = :price WHERE `id` = :good_id',
        ['name' => $title, 'description' => $description, 'price' => $price, 'good_id' => $good_id]);

        return $res;
    }

    public static function addGood($title, $description, $price, $imgfile)
    {
        $res = db::getInstance()->Query(
            'INSERT INTO `goods` (`name`, `description`, `price`, `imgfile`) VALUES (:title, :description, :price, :imgfile)',
        ['title' => $title, 'description' => $description, 'price' => $price, 'imgfile' => $imgfile]);
    }
}