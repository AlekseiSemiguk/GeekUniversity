<?php
include "config.php";
include "functions.php";

$id = $_GET['img'];
$sql = "UPDATE auto SET count = count + 1 where id=$id";
$res = mysqli_query($connect,$sql);
$sql = "SELECT * FROM auto WHERE id=$id";
$res = mysqli_query($connect,$sql);
$image = mysqli_fetch_assoc($res);
if ($image) {
    $image['count'] = $image['count']." ".getWord($image['count']);
}

include 'Twig/Autoloader.php';
Twig_Autoloader::register();

try {
    $loader = new Twig_Loader_Filesystem('templates');

    $twig = new Twig_Environment($loader);

    $template = $twig->loadTemplate('images.tmpl');

    echo $template->render(array (
        'title' => 'Просмотр фото',
        'image' => $image
    ));

} catch (Exception $e) {
    die ('ERROR: ' . $e->getMessage());
}
