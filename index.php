<?php
$files = scandir("images_small");
$files = array_slice($files, 2);
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
        <script type="text/javascript" src="/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
        <link rel="stylesheet" href="/fancybox/jquery.fancybox-1.3.4.css" type="text/css" media="screen" /> 
        <link rel="stylesheet" href="style.css">
        <title>Галерея</title>
    </head>

    <body>
        <div class="img-container">
            <?php foreach ($files as $file): ?>
            <a class="img" id="single_image" href="images/<?=$file?>"><img width=100% src="images_small/<?=$file?>" alt=""/></a>
            <?php endforeach ?>
        </div>

        <form action="server.php" method="post" enctype="multipart/form-data">
            <p>Выберите файл в формате JPG/JPEG или GIF</p>
            <input type="file" name="photo" accept="image/jpeg,image/gif"><br><br>
            <input type="submit" value="Загрузить">
        </form>

        <script>
            $(document).ready(function() {

                $("a#single_image").fancybox();

            });
        </script>
    </body>
</html>