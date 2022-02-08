<?php if ($text) {
    echo $text;
}
?>

<form method="post">
    <label for="name">Имя:</label>
    <input type="text" name="name" required id="name">
    <label for="auth_email">E-mail:</label>
	<input type="email" name="email" required id="auth_email">
    <label for="auth_password">Пароль:</label>
	<input type="password" name="password" required id="auth_password">
    <label for="confirm-password">Подтвердите пароль:</label>
    <input type="password" name="password_confirm" required id="password_confirm">
	<input type="submit" value="Зарегистрироваться">
</form>