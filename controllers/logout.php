<?php
session_start();

if ($_SESSION['user_email']) {
    unset($_SESSION['user_email']);
}

header('Location: /index.php');