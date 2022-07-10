<?php
include 'function.php';

if (null != getCurrentUser()) {
    header('Location: ' . '/02/');
    exit();
}

if (isset($_POST['login'], $_POST['password'])) {
    $userName = $_POST['login'];
    $userPassword = $_POST['password'];

    if (checkPassword($userName, $userPassword)) {
        $_SESSION['user'] = $userName;
        header('Location: ' . '/');
        exit();
    } else {
        $info = 'Имя пользователя и пароль неверные';
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Module 14</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
</head>
<body>
<p></p>
<div class="container">
    <?php
    if (isset($info)) {
        ?>
        <div class="row mt-1">
            <div class="col-auto">
                <p class="alert-danger"><?php echo $info; ?></p>
            </div>
        </div>
        <?php
    }
    ?>
    <div class="row">
        <div class="col">
            <form action="/login.php" method="post">
                <label>Login: </label><input type="text" name="login"><br>
                <label>Password: </label><input type="password" name="password"><br>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</div>
</body>
</html>
