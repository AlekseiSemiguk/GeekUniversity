<?php

session_start();

function checkAuthentication()
{
    if (!$_SESSION['user_email']) {
        header('Location: index.php');
    }
}

function checkAuthorization($db_connect)
{
    checkAuthentication();

    $user_email = $_SESSION['user_email'];

    $user = mysqli_query($db_connect, "SELECT * FROM `users` WHERE `email` = '$user_email'");

    if (mysqli_num_rows($user) > 0) {
        $user = mysqli_fetch_assoc($user);
        return $user;
    } else {
        echo 'непредвиденная ошибка';
        if ($_SESSION['user_email']) {
            unset($_SESSION['user_email']);
        }
        die();
    }
}

function checkAdmin()
{
    checkAuthentication();

    $user_email = $_SESSION['user_email'];
    if ($user_email == "admin@admin.ru") {
        return true;
    }
    return false;

}