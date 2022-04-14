<?php

include ('createArray.php');
include ('sortFunctions.php');

$startTime = microtime(true);
$arr = quickSortArray($arr);
$endTime = microtime(true);

echo ($endTime - $startTime);

// время выполнения 1.432196855545