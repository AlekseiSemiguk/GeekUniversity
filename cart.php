<?php
session_start();

require_once 'connect_db.php';

$goodId = $_POST['id'];
$action = $_POST['action'];
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


$goodId = mysqli_real_escape_string($link, $goodId);
$query = sprintf("SELECT * FROM `cart` WHERE `user_id` = '%s' AND `good_id` = '%s'", $userId, $goodId);
$good = mysqli_query($link, $query);

if (mysqli_num_rows($good) < 1) {
    if ($action == 'add') {
        $query = sprintf("INSERT INTO `cart` (`user_id`, `good_id`, `quantity`) VALUES ('%s', '%s', '%s')", $userId, $goodId, '1');
    }
} else {
    if ($action == 'add') {
        $query = sprintf("UPDATE `cart` SET `quantity` = `quantity` + 1 WHERE `user_id` = '%s' AND `good_id` = '%s'", $userId, $goodId);
    }
    if ($action == 'delete') {
        $query = sprintf("DELETE FROM `cart` WHERE `user_id` = '%s' AND `good_id` = '%s'", $userId, $goodId);
    }
}

mysqli_query($link, $query);

$response = [
    "status" => true,
];
echo json_encode($response);