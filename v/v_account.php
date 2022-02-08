<?php if ($text) {
    echo 'Добро пожаловать, '.$text.'<br><br>';
}

$lastpages = unserialize($_COOKIE['LastPages']);
if (is_array($lastpages)) {
?>

Вы недавно смотрели:
<br>
<?php
    {
        foreach ($lastpages as $page) {
            echo $page."<br>";
        }
    }
}
?>

<a href="index.php?c=User&act=logout">
    <button>Выйти из личного кабинета</button>
</a>