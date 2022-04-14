<?php

include ('createArray.php');
include ('sortFunctions.php');

$startTime = microtime(true);
$arr = bubbleSortArray($arr);
$endTime = microtime(true);

echo ($endTime - $startTime);

// время выполнения 9.5791838169098