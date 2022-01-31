<?php
function addOrder($link, $user_id)
{
    $query = "SELECT `cart`.`good_id`, `cart`.`quantity` FROM `cart` LEFT JOIN `goods` ON `cart`.`good_id` = `goods`.`id` WHERE `cart`.`user_id` = '{$user_id}'";

    $goodsInCartDb = mysqli_query($link, $query);
    
    $goodsInCart = [];

    $query = "SELECT MAX(`order_number`) as `max` FROM `orders`";
    $maxdb =  mysqli_query($link, $query);
    $maxOrderNumber = mysqli_fetch_assoc($maxdb);
    $orderNumber = $maxOrderNumber ['max'] + 1;
    
    while($data = mysqli_fetch_assoc($goodsInCartDb)) {
        
        $goodsInCart[] = "($orderNumber, {$user_id}, {$data['good_id']}, {$data['quantity']}, 1)";
    }

    $goodsInCart = implode(", ", $goodsInCart);

    mysqli_autocommit($link, false);

    $query = "INSERT INTO `orders` (`order_number`, `user_id`, `good_id`, `quantity`, `status_id`) VALUES $goodsInCart";
    $res = mysqli_query($link, $query);

    $query = "DELETE FROM `cart` WHERE `user_id` = '{$user_id}'";

    $res1 = mysqli_query($link, $query);

    if ($res && $res1) {
        mysqli_commit($link);
    }
    mysqli_autocommit($link, true);
}

function getUserOrders($link, $user_id)
{
    $query = "SELECT `orders`.`order_number`, `orders`.`quantity`, `orders`.`good_id`, `orders`.`status_id`,`goods`.`name`, `goods`.`description`, `goods`.`price`, `goods`.`imgfile`, `order_status`.`title` FROM `orders` LEFT JOIN `goods` ON `orders`.`good_id` = `goods`.`id` LEFT JOIN `order_status` ON `orders`.`status_id` = `order_status`.`id` WHERE `orders`.`user_id` = '{$user_id}'";

    $ordersDb = mysqli_query($link, $query);

    $orders = [];

    while($data = mysqli_fetch_assoc($ordersDb)) {
        $order_number = $data['order_number'];
        unset ($data['order_number']);
        $status = $data['title'];
        unset ($data['title']);
        $orders[$order_number]['positions'][] = $data;
        $orders[$order_number]['status'] = $status;
    }

    return $orders;
}

function updateOrder($link, $user_id, $order_number, $newStatus) {
    if ($user_id == "admin") {
        $query = "UPDATE `orders` SET `status_id` = '$newStatus' WHERE `order_number` = '{$order_number}'";
    } else {
        $query = "UPDATE `orders` SET `status_id` = '$newStatus' WHERE `user_id` = '{$user_id}' AND `order_number` = '{$order_number}'";
    }
    mysqli_query($link, $query);
}