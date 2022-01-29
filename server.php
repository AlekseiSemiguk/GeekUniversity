<?php
include "config.php";
$fileName = $_FILES['photo']['name'];
$fileExtension = array_pop(explode(".",$fileName));
$imageName =  $_FILES['photo']['tmp_name'];
$path = "images/".$_FILES['photo']['name'];
if ($fileExtension == "jpg" || $fileExtension == "jpeg") {
    $image = imagecreatefromjpeg($imageName);
    $imgResized = imagescale($image , 490, 350);
    imagejpeg($imgResized, "images_small/".$fileName);
    move_uploaded_file($imageName,$path);
} else if ($fileExtension == "gif") {
    $image = imagecreatefromgif($imageName);
    $imgResized = imagescale($image , 490, 350);
    imagepng($imgResized, "images_small/".$fileName);  
    move_uploaded_file($imageName,$path);
}
$fileSize = filesize($path);

$sql = "INSERT INTO auto (filename, filesize, filepath) VALUES ('$fileName', '$fileSize', '$path')";
$res = mysqli_query($connect,$sql);

header("Location: ".$_SERVER['HTTP_REFERER']);



