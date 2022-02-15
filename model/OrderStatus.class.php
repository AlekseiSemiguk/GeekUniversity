<?php

class OrderStatus extends Status
{
    const Payed = 3;
    const Delivered = 4;

    public static function getList()
    {
        $rows = db::getInstance()->Select(
            'SELECT * FROM `order_status`');
        $statusList = array();
        foreach ($rows as $row) {
            $statusList[$row['id']] = $row['title'];
        }

        return $statusList;
    }
}