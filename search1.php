<?php

include ('createArray.php');
include ('searchFunctions.php');

$randomValue = $arr[rand(0,count($arr))];
$startTime = microtime(true);
$key = linearSearch($arr, $randomValue);

$endTime = microtime(true);

echo $randomValue."\n";

echo $arr[$key]."\n";

echo ($endTime - $startTime);

unset($arr[$key]);