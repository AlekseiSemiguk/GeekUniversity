<?php
include "config.php";

$sql = "SELECT * FROM auto ORDER BY count DESC";
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
            <?php while($data = mysqli_fetch_assoc($res)):?>
            <a class="img" href="images.php?img=<?=$data['id']?>"><img width=100% src="images_small/<?=array_pop(explode('/',$data['filepath']))?>" alt=""/></a>
            <?php endwhile ?>
        </div>

        <form action="server.php" method="post" enctype="multipart/form-data">
            <p>Выберите файл в формате JPG/JPEG или GIF</p>
            <input type="file" name="photo" accept="image/jpeg,image/gif"><br><br>
            <input type="submit" value="Загрузить">
        </form>

    </body>
</html>