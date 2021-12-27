<?php
function getEnding($a){
    if ($a > 10) {
        if ($a >= 11 && $a <= 19) {
            return 2;                
        }
    }

    $a = substr($a, -1);
    if ($a == 1) {
        return 0;
    }
    if ($a >= 2 && $a <= 4) {
        return 1;
    }
    if (($a >= 5 && $a <= 9) || $a == 0) {
        return 2;
    }
}

function getWord($i)
{
    $words = array (
        'count' => array ('раз', 'раза', 'раз'),
    );

    return $words['count'][getEnding($i)];
}