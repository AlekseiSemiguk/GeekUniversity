<?php if ($text) {
    echo $text;
}
?>

<form method="post">
    <label for="auth_email">E-mail:</label>
	<input type="email" name="email" required id="auth_email">
    <label for="auth_password">Пароль:</label>
	<input type="password" name="password" required id="auth_password">
	<input type="submit" value="Войти">
</form>
