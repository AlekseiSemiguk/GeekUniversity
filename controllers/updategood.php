<?php
session_start();

require_once '../config/connect_db.php';
include '../models/goods.php';

$good_id = $_POST['good_id'];
$title = $_POST['title'];
$description = $_POST['description'];
$price = $_POST['price'];

if (checkAdmin()){
    updateGood ($link, $good_id, $title, $description, $price);
}

$response = [
    "status" => true,
];

echo json_encode($response);