<?php

require_once '../config/connect_db.php';
include_once '../models/user.php';
include_once '../models/goods.php';

$title = $_POST['title'];
$description = $_POST['description'];
$price = $_POST['price'];

$fileName = $_FILES['photo']['name'];
$fileExtension = array_pop(explode(".",$fileName));
$imageName =  $_FILES['photo']['tmp_name'];
$path = "../img/".$_FILES['photo']['name'];
move_uploaded_file($imageName,$path);
$fileSize = filesize($path);

if (checkAdmin()){
    addGood($link, $title, $description, $price, $fileName);
}

header('Location: /admin.php');
