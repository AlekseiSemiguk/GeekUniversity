<?php
include "config.php";
include 'Twig/Autoloader.php';
Twig_Autoloader::register();

$sql = "SELECT * FROM auto ORDER BY count DESC";
$res = mysqli_query($connect,$sql);

$images = [];
while ($data = mysqli_fetch_assoc($res)) {
    $data['filename'] = array_pop(explode('/',$data['filepath']));
    $images[] = $data;
}

try {
    $loader = new Twig_Loader_Filesystem('templates');

    $twig = new Twig_Environment($loader);

    $template = $twig->loadTemplate('index.tmpl');

    echo $template->render(array (
        'title' => 'Галерея',
        'images' => $images
    ));

} catch (Exception $e) {
    die ('ERROR: ' . $e->getMessage());
}