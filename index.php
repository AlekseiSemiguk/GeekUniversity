<?php

/*1. С помощью цикла while вывести все числа в промежутке от 0 до 100, которые делятся на 3 без остатка.*/

function rowNumberWhile()
{
    $i = 0;
    while ($i<=100) {
        if ($i >= 3 && $i % 3 == 0) {
            echo "$i\n";
        }
        $i++;
    }
}

/*2. С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:
0 – ноль.
1 – нечетное число.
2 – четное число.
3 – нечетное число.
…
10 – четное число.*/

function rowNumberDoWhile()
{
$i = 0;
    do {
        if ($i % 2 == 0) {
            $text = " - четное число.\n";
        } else {
        $text = " - нечетное число.\n";
        };
        echo $i.$text;
        $i++;
    } while ($i <= 10);
}

/*3. Объявить массив, в котором в качестве ключей будут использоваться названия областей, а в качестве значений – массивы с названиями городов из соответствующей области. Вывести в цикле значения массива, чтобы результат был таким:
Московская область:
Москва, Зеленоград, Клин
Ленинградская область:
Санкт-Петербург, Всеволожск, Павловск, Кронштадт
Рязанская область … (названия городов можно найти на maps.yandex.ru)*/

$cities = array(
    "Томская область" => array ('Томск', 'Стрежевой', 'Колпашево'),
    "Новосибирская область" => array ('Новосибирск', 'Бердск', 'Искитим'),
    "Кемеровская область" => array ('Кемерово', 'Новокузнецк', 'Междуреченск'),
);

function getCities($array)
{
    foreach ($array as $region => $cities) {
        echo $region.":<br>";
        echo implode(", ", $cities)."<br>";
    }
}

/*4. Объявить массив, индексами которого являются буквы русского языка, а значениями – соответствующие латинские буквосочетания (‘а’=> ’a’, ‘б’ => ‘b’, ‘в’ => ‘v’, ‘г’ => ‘g’, …, ‘э’ => ‘e’, ‘ю’ => ‘yu’, ‘я’ => ‘ya’).
Написать функцию транслитерации строк.*/

/*5. Написать функцию, которая заменяет в строке пробелы на подчеркивания и возвращает видоизмененную строчку.*/

/*9. *Объединить две ранее написанные функции в одну, которая получает строку на русском языке, производит транслитерацию и замену пробелов на подчеркивания (аналогичная задача решается при конструировании url-адресов на основе названия статьи в блогах).*/

$lang = array(
    "а" => "a",
    "б" => "b",
    "в" => "v",
    "г" => "g",
    "д" => "d",
    "е" => "e",
    "ё" => "yo",
    "ж" => "j",
    "з" => "z",
    "и" => "i",
    "й" => "y",
    "к" => "k",
    "л" => "l",
    "м" => "m",
    "н" => "n",
    "о" => "o",
    "п" => "p",
    "р" => "r",
    "с" => "s",
    "т" => "t",
    "у" => "u",
    "ф" => "f",
    "х" => "h",
    "ц" => "c",
    "ч" => "ch",
    "ш" => "sch",
    "щ" => "scsh",
    "ъ" => "'",
    "ы" => "yi",
    "ь" => "'",
    "э" => "ye",
    "ю" => "yu",
    "я" => "ya",
    " " => "_",
);

function translit ($string, $lang) {
    $newString = "";
    $len = mb_strlen($string);
    for($i = 0; $i < $len; $i++)
		{
			$chr = mb_substr($string, $i, 1);
            if (array_key_exists(mb_strtolower($chr), $lang)) {
                $newString .= $lang[mb_strtolower($chr)];
            } else {
                $newString .= $chr;
            }
        }
    return $newString;
}

echo translit('это четвертое и пятое задание', $lang);

/*6. В имеющемся шаблоне сайта заменить статичное меню (ul – li) на генерируемое через PHP. Необходимо представить пункты меню как элементы массива и вывести их циклом. Подумать, как можно реализовать меню с вложенными подменю? Попробовать его реализовать.*/

$array = array (
    'О компании' => array ('Центральный офис', 'Регионы присутствия'),
    'Наши услуги' => array ('Металлопрокат', 'Металлообработка', 'Покраска'),
    'Пресс-центр' => array ('Наши новости', 'Медиа' => array ('Видео', 'Фото'))
);

function getHtml($array)
{
    $html = "<ul>";
    foreach ($array as $key => $menu) {
        if (is_array($menu)) {
            $html .= "<li>" . $key . getHtml($menu) . "</li>";
        } else {
            $html .= "<li>".$menu."</li>";
        }
    }
    $html .= "</ul>";
    return $html;
}


echo getHtml($array);

/*7. *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть должно так:
for (…){ // здесь пусто}*/

for($i = 0; $i < 10; print ($i++." ")) {};

/*8. *Повторить третье задание, но вывести на экран только города, начинающиеся с буквы «К».*/

function onlyK($city) {
    if (mb_substr($city, 0, 1) == "К") {
        return true;
    }
}

function getCitiesOnlyK($array)
{
    foreach ($array as $region => $cities) {
        $cities = implode(", ", array_filter($cities, "onlyK"));
        if ($cities) {
            echo $region.":<br>";
            echo $cities."<br>";
        }
    }
}

echo getCitiesOnlyK ($cities);

