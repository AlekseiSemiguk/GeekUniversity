<?php

/*1. Объявить две целочисленные переменные $a и $b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если $a и $b положительные, вывести их разность;
если $а и $b отрицательные, вывести их произведение;
если $а и $b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.*/

function first($a, $b)
{
    if ($a >= 0 && $b >= 0) {
        return $a - $b;
    } else if ($a * $b < 0) {
        return $a + $b;
    } else {
        return $a * $b;
    }
}

/*2. Присвоить переменной $а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от $a до 15. Задание по желанию - доработайте решение и используйте рекурсивную функцию*/

function printRow ()
{
    $a = rand(0, 15);
    switch ($a) {
        case 0:
            echo "0\n";
        case 1:
            echo "1\n";
        case 2:
            echo "2\n";
        case 3:
            echo "3\n";
        case 4:
            echo "4\n";
        case 5:
            echo "5\n";
        case 6:
            echo "6\n";
        case 7:
            echo "7\n";
        case 8:
            echo "8\n";
        case 9:
            echo "9\n";
        case 10:
            echo "10\n";
        case 11:
            echo "11\n";
        case 12:
            echo "12\n";
        case 13:
            echo "13\n";
        case 14:
            echo "14\n";
        case 15:
            echo "15\n";
    }

}

function printRowRecursive($a = 0)
{
    if ($a == 0) {
        $a = rand(0, 15);
    }
    echo "$a\n";
    $a++;
    if ($a <= 15) {
        printRowRecursive($a);
    }
}

/*3. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/

function add($a, $b)
{
    return $a + $b;
}

function sub($a, $b)
{
    return $a - $b;
}

function multiple($a, $b)
{
    return $a * $b;
}

function div($a, $b)
{
    if ($b != 0) {
        return $a / $b;
    } else {
        return false;
    }
}

/*4. Реализовать функцию с тремя параметрами: function mathOperation($arg1, $arg2, $operation), где $arg1, $arg2 – значения аргументов, $operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/

function mathFunc($a, $b, $func)
{
    switch ($func) {
        case "add":
            return add($a, $b);
        case "sub":
            return sub($a, $b);
        case "multiple":
            return multiple($a, $b);
        case "div":
            return div($a, $b);
    }
}

/*5. Посмотреть на встроенные функции PHP. Используя имеющийся HTML-шаблон, вывести текущий год в подвале при помощи встроенных функций PHP. Делать не нужно. Сделано в первом ДЗ!*/
/*6. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power($val, $pow), где $val – заданное число, $pow – степень. Степень int и >0*/

function power($val, $pow)
{
    if ($pow == 1) {
        return $val;
    } else {
        return $val * power($val, $pow - 1);
    }
}

function power2($val, $pow)
{
    while ($pow > 1)
    {
        $val *= $val;
        $pow--;
        power2($val, $pow);
    }
    return $val;
}

/*7. *Написать функцию, которая вычисляет текущее время и возвращает его в формате с правильными склонениями, например:
22 часа 15 минут
21 час 43 минуты*/

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

function getTextTimeNow()
{
    $hours = date('H');
    $minutes = date('i');
    $words = array (
        'hours' => array ('час', 'часа', 'часов'),
        'minutes' => array ('минута', 'минуты', 'минут'),
    );

    return $hours." ".$words['hours'][getEnding($hours)]." ".$minutes." ".$words['minutes'][getEnding($minutes)];
}