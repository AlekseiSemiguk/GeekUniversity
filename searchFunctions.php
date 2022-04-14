<?php

function linearSearch(array $array, $needle) 
{
    $step = 0;
    $searchKey = false;
    foreach ($array as $key => $value){
        $step++;
        if ($value == $needle) {
            $searchKey = $key; 
            break;
        }
    }        
    echo "Total steps: $step \n";
    return $searchKey;
}

function binarySearch(array $array, $needle)
{
    $step = 0;
    $begin = 0;
    $end = count($array) - 1;
    $prev_begin = $begin;
    $prev_end = $end;
    while (true) {
        $step++;
        $position = round(($begin + $end) / 2);
        
        if (isset($array[$position])) {
            if ($array[$position] == $needle) {
                echo "Total steps: $step \n";
                return $position;
            }
            if ($array[$position] > $needle) {
                $end = floor(($begin + $end) / 2);
            } elseif ($array[$position] < $needle) {
                $begin = ceil(($begin + $end) / 2);
            }
        }
        if ($prev_begin == $begin && $prev_end == $end) {
            echo "Total steps: $step \n";
            return false;
        }
        $prev_begin = $begin;
        $prev_end = $end;
    }
}