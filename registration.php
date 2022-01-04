<?php
session_start();

require_once 'connect_db.php';

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

$name = mysqli_real_escape_string($link, $name);
$email = mysqli_real_escape_string($link, $email);

$query = sprintf("SELECT * FROM `users` WHERE `email` = '%s'", $email);

$check_email = mysqli_query($link, $query);

if (mysqli_num_rows($check_email) > 0) {
    $response = [
        "status" => false,
        "message" => "пользователь с таким e-mail уже зарегистрирован",
    ];

    echo json_encode($response);
    die();
}

$salt = '';
$saltLength = 8;
for($i=0; $i<$saltLength; $i++) {
$salt .= chr(mt_rand(97,122));
}

$password = md5($password.$salt);
$role = 'user';
$query = sprintf("INSERT INTO `users` (`name`, `email`, `password`, `salt`, `role`) VALUES ('%s', '%s', '%s', '%s', '%s')",
    $name, $email, $password, $salt, $role);

mysqli_query($link, $query);

$_SESSION['user_email'] = $email;

$response = [
    "status" => true,
];
echo json_encode($response);

?>
