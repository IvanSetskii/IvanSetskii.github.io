<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>PHP Module 12</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <?php
        include 'array.php';
        include 'function.php';
        ?>
        <div class="flex-container">
        <p>
        <?php
            echo getGenderDescription($example_persons_array);
        ?>
        </p>
        <h4> Введите Ф.И.О.:</h4>
        <form method="post" action="main.php">
            <input name="surname" type="text" placeholder="Фамилия (Иванов)" autofocus /><br><br>
            <input name="name" type="text"  placeholder="Имя (Иван)" /><br><br>
            <input name="patronomyc" type="text"  placeholder="Отчество (Иванович)" /><br><br>
            <input type=submit value="Ввести">
        </form>
        <?php
            if (!empty($_POST["surname"])) {
            $surname = $_POST["surname"];
            } else {
            $surname = 'Иванов';
            }
            if (!empty($_POST["name"])) {
            $name = $_POST["name"];
            } else {
            $name = 'Иван';
            }
            if (!empty($_POST["patronomyc"])) {
            $patronomyc = $_POST["patronomyc"];
            } else {
            $patronomyc = 'Иванович';
            }
        ?>
        <h4> Идеальная пара: </h4>
        <p>
        <?php
            echo getPerfectPartner ($surname, $name, $patronomyc, $example_persons_array);
        ?>
        </p>
        </div>
    </body>
</html>