<?php

$mathString = "2 + 5 * (15 * 23 - 23 * (16 - 8) + 3) / 2  - 1";
$mathString = str_replace(" ","", $mathString);
$mathArray = str_split($mathString);

function createTree ($mathArray)
{
    $node = "";
    $startBracket = 0;
    foreach ($mathArray as $symbol) {

        if (!$startBracket && $symbol != "(" && $symbol != ")") {
            if ($symbol != "+" && $symbol != "*" && $symbol != "/" && $symbol != "-")
            $node .= $symbol;
            else {
                $arrayNodes[] = $node;
                $node = "";
                $arrayNodes[] = $symbol;
            }
        } else {
            $node .= $symbol;
            if ($symbol == "(") {
                $startBracket++;
            } else if ($symbol == ")") {
                $startBracket--;
            }
        }
    }
    $arrayNodes[] = $node;
    foreach ($arrayNodes as &$nodeIn) {
        if ($nodeIn[0] == "(") {
            $nodeIn = substr($nodeIn, 1, -1);
            $nodeIn = createTree(str_split($nodeIn));
        } 
    }

    return ($arrayNodes);
}

function createObjectTree ($array, $lastId = 0, $parent = 0, $depth = 1) {
    $prevkey = 0;
    $tempKey = 0;
    $firstOperation = 1;
    foreach ($array as $key => &$value) {
        if (is_numeric($value)) {
            $value = array ("value" => $value, "parent" => $lastId, "id" => ++$lastId, "depth" => $depth);
        } else if ($value == "+" || $value == "-" || $firstOperation) {
            $value = array ("value" => $value, "parent" => "", "id" => ++$lastId, "depth" => $depth);
        
            $array[$tempKey]['parent'] = $lastId;
            $tempKey = $key;
            $firstOperation=0;
        } else if ($value == "*" || $value == "/") {
            $value = array ("value" => $value, "parent" => ($lastId - 1), "id" => ++$lastId, "depth" => $depth);
            $array[$prevkey]['parent'] = $lastId;
            $firstOperation=0;
        } else if (is_array($value)) {
            $child = createObjectTree($value, $lastId, $lastId, $depth + 1);
            $value = $child['value'];
            $lastId = $child['lastId'];
        }  

        $prevkey = $key;
    }
    if ($parent) {
        $array['parent'] = $parent;  
     }
    return array('value' => $array, 'lastId' => $lastId);
}


$tree = createTree($mathArray);
$objectTree = createObjectTree($tree)['value'];
?>

<pre>
    <?print_r($tree)?>
<!-- 
Array
(
    [0] => 2
    [1] => +
    [2] => 5
    [3] => *
    [4] => Array
        (
            [0] => 15
            [1] => *
            [2] => 23
            [3] => -
            [4] => 23
            [5] => *
            [6] => Array
                (
                    [0] => 16
                    [1] => -
                    [2] => 8
                )

            [7] => +
            [8] => 3
        )

    [5] => /
    [6] => 2
    [7] => -
    [8] => 1
)
-->

    <?print_r($objectTree)?>

<!-- 

Array
(
    [0] => Array
        (
            [value] => 2
            [parent] => 2
            [id] => 1
            [depth] => 1
        )

    [1] => Array
        (
            [value] => +
            [parent] => 18
            [id] => 2
            [depth] => 1
        )

    [2] => Array
        (
            [value] => 5
            [parent] => 4
            [id] => 3
            [depth] => 1
        )

    [3] => Array
        (
            [value] => *
            [parent] => 2
            [id] => 4
            [depth] => 1
        )

    [4] => Array
        (
            [0] => Array
                (
                    [value] => 15
                    [parent] => 6
                    [id] => 5
                    [depth] => 2
                )

            [1] => Array
                (
                    [value] => *
                    [parent] => 8
                    [id] => 6
                    [depth] => 2
                )

            [2] => Array
                (
                    [value] => 23
                    [parent] => 6
                    [id] => 7
                    [depth] => 2
                )

            [3] => Array
                (
                    [value] => -
                    [parent] => 14
                    [id] => 8
                    [depth] => 2
                )

            [4] => Array
                (
                    [value] => 23
                    [parent] => 10
                    [id] => 9
                    [depth] => 2
                )

            [5] => Array
                (
                    [value] => *
                    [parent] => 8
                    [id] => 10
                    [depth] => 2
                )

            [6] => Array
                (
                    [0] => Array
                        (
                            [value] => 16
                            [parent] => 12
                            [id] => 11
                            [depth] => 3
                        )

                    [1] => Array
                        (
                            [value] => -
                            [parent] => 
                            [id] => 12
                            [depth] => 3
                        )

                    [2] => Array
                        (
                            [value] => 8
                            [parent] => 12
                            [id] => 13
                            [depth] => 3
                        )

                    [parent] => 10
                )

            [7] => Array
                (
                    [value] => +
                    [parent] => 
                    [id] => 14
                    [depth] => 2
                )

            [8] => Array
                (
                    [value] => 3
                    [parent] => 14
                    [id] => 15
                    [depth] => 2
                )

            [parent] => 16
        )

    [5] => Array
        (
            [value] => /
            [parent] => 14
            [id] => 16
            [depth] => 1
        )

    [6] => Array
        (
            [value] => 2
            [parent] => 16
            [id] => 17
            [depth] => 1
        )

    [7] => Array
        (
            [value] => -
            [parent] => 
            [id] => 18
            [depth] => 1
        )

    [8] => Array
        (
            [value] => 1
            [parent] => 18
            [id] => 19
            [depth] => 1
        )

)
-->
</pre>