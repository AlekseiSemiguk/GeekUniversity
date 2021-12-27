<?php
include "config.php";
include_once "functions.php";
$id = $_GET['img'];
$sql = "UPDATE auto SET count = count + 1 where id=$id";
$res = mysqli_query($connect,$sql);
$sql = "SELECT * FROM auto WHERE id=$id";
$res = mysqli_query($connect,$sql);
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Галерея</title>
    </head>

    <body>
        <div class="img-container">
            <?php if($data = mysqli_fetch_assoc($res)):?>
            <img width=100% src="<?=$data['filepath']?>" alt=""/>
            Просмотрено <?=$data['count']." ".getWord($data['count'])?> 
            <?php endif ?>
        </div>
    </body>
</html>