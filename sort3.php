<?php

include ('createArray.php');
include ('sortFunctions.php');

$startTime = microtime(true);
heapSortArray($arr);
$endTime = microtime(true);

echo ($endTime - $startTime);

// время выполнения 0.066439151763916