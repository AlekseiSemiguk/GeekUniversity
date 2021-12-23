<?php
$fileName = $_FILES['photo']['name'];
$fileExtension = array_pop(explode(".",$fileName));
$imageName =  $_FILES['photo']['tmp_name'];
$path = "images/".$_FILES['photo']['name'];
if ($fileExtension == "jpg" || $fileExtension == "jpeg") {
    $image = imagecreatefromjpeg($imageName);
    $imgResized = imagescale($image , 250, 250);
    imagejpeg($imgResized, "images_small/".$fileName);
    move_uploaded_file($imageName,$path);
} else if ($fileExtension == "gif") {
    $image = imagecreatefromgif($imageName);
    $imgResized = imagescale($image , 250, 250);
    imagepng($imgResized, "images_small/".$fileName);  
    move_uploaded_file($imageName,$path);
}
header("Location: ".$_SERVER['HTTP_REFERER']);



