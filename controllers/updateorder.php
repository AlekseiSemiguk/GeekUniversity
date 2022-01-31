<?php
session_start();

require_once '../config/connect_db.php';
include '../models/orders.php';
include_once '../models/user.php';

$orderNumber = $_POST['order'];
$status = $_POST['status'];

if (checkAdmin()){
    $userId = "admin";
}

else {
    if (!($email = $_SESSION['user_email'])) {
        $response = [
            "status" => false,
            "message" => 'операция не доступна для неавторизованного пользователя',
        ];

        echo json_encode($response);
        die();
    };

    $query = sprintf("SELECT * FROM `users` WHERE `email` = '%s'",
        $email);
    $user = mysqli_query($link, $query);
    $user = mysqli_fetch_assoc($user);
    $userId = $user['id'];
}
updateOrder ($link, $userId, $orderNumber, $status);

$response = [
    "status" => true,
];
echo json_encode($response);