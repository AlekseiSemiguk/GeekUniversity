<?php
$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$arLast = unserialize($_COOKIE['LastPages']);
$arLast[] = $url; 
if (count($arLast) > 5) {
    array_shift($arLast);
}
setcookie("LastPages", serialize($arLast), time()+3600*24);
