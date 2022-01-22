<?php

function getAllGoods($db)
{
    $query = "SELECT * FROM `goods`";
    return mysqli_query($db, $query);
}

function getAllGoodsInCart($db, $user_id)
{
    $query = "SELECT `cart`.`good_id`, `cart`.`quantity`, `goods`.`name`, `goods`.`description`, `goods`.`price`, `goods`.`imgfile` FROM `cart` LEFT JOIN `goods` ON `cart`.`good_id` = `goods`.`id` WHERE `cart`.`user_id` = '$user_id'";
    return mysqli_query($db, $query);
}

function getGoodById($db, $good_id)
{
    $query = "SELECT * FROM `goods` WHERE `id` = '$good_id'";
    return mysqli_query($db, $query);
}

function updateGood ($link, $good_id, $title, $description, $price)
{
    $title = mysqli_real_escape_string($link, $title);
    $description = mysqli_real_escape_string($link, $description);

    $query = sprintf("UPDATE `goods` SET `name` = '%s', `description` = '%s', `price` = '$price' WHERE `id` = '{$good_id}'", $title, $description);
    
    return mysqli_query($link, $query);
}

function addGood($link, $title, $description, $price, $imgfile)
{
    $query = "INSERT INTO `goods` (`name`, `description`, `price`, `imgfile`) VALUES ('$title', '$description', '$price', '$imgfile')";
    mysqli_query($link, $query);
}