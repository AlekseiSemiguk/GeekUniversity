<?php

function bubbleSortArray(array $data) 
{
    $count_elements = count($data); 
    $iterations = $count_elements - 1;
    
    $step = 0;
    for ($i=0; $i < $count_elements; $i++) {
        $changes = false;
        for ($j=0; $j < $iterations; $j++) {
            $step++;
            if ($data[$j] > $data[($j + 1)]) {
                $changes = true;
                list($data[$j], $data[($j + 1)]) = array($data[($j + 1)], $data[$j]);
            }
        }
        $iterations--;
        if (!$changes) {
            echo "Total steps: $step \n";
            return $data;
        }
    }
    echo "Total steps: $step \n";        
    return $data;
}

function quickSortArray($arr, $low = false, $high = false, &$step = 0, $recursive = 0) {
    if (!$low) {
        $low = array_key_first($arr);                
    }
    if (!$high) {
        $high = array_key_last($arr);
    }
    $i = $low;
    $j = $high;
    $middle = $arr[ ( $low + $high ) / 2 ];
    do {
        $step++;
        while($arr[$i] < $middle) ++$i;
        while($arr[$j] > $middle) --$j;
        if($i <= $j){           
            
            $temp = $arr[$i];
            $arr[$i] = $arr[$j];
            $arr[$j] = $temp;
            
            $i++; $j--;
        }
    } 
    while($i < $j);
    
    if($low < $j){
        $arr = quickSortArray($arr, $low, $j, $step, 1);
    } 

    if($i < $high){
        $arr = quickSortArray($arr, $i, $high, $step, 1);
    }

    if ($recursive == 0) {
        echo "Total steps: $step \n";
    }
    return $arr;
}

function heapSortArray(&$arr)
{
    $step = 0;
    $n = count($arr);

    for ($i = $n / 2 - 1; $i >= 0; $i--)
        heapify($arr, $n, $i, $step);

    for ($i = $n-1; $i >= 0; $i--)
    {
        $temp = $arr[0];
            $arr[0] = $arr[$i];
            $arr[$i] = $temp;

        heapify($arr, $i, 0, $step);
    }
    echo "Total steps: $step \n";
}

function heapify(&$arr, $n, $i, &$step)
{
    $step++;
    $largest = $i;
    $l = 2*$i + 1;
    $r = 2*$i + 2;

    if ($l < $n && $arr[$l] > $arr[$largest])
        $largest = $l;

    if ($r < $n && $arr[$r] > $arr[$largest])
        $largest = $r;

    if ($largest != $i)
    {
        $swap = $arr[$i];
        $arr[$i] = $arr[$largest];
        $arr[$largest] = $swap;

        heapify($arr, $n, $largest, $step);
    }
}