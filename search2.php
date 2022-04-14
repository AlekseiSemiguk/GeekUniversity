<?php

include ('createArray.php');
include ('sortFunctions.php');
include ('searchFunctions.php');
heapSortArray($arr);

$randomValue = $arr[rand(0,count($arr))];
$startTime = microtime(true);
$key = binarySearch($arr, $randomValue);

$endTime = microtime(true);

echo $randomValue."\n";

echo $arr[$key]."\n";

echo ($endTime - $startTime);

unset($arr[$key]);