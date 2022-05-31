<?php
$title = "Обо мне";
require "blocks/header.php";
?>

<?php
$p = 'Приветствую Вас на моей страничке!';
?>

<?php
$name = 'Иван';
$surname = 'Александров';
$city = 'Санкт-Петербург';
$age = 30;
?>
    <div class="myImg" align="left">
        <?php  echo '<img src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="300" align="left" vspace="5" hspace="5">'; ?>
        <p> Меня зовут
            <?php echo $name, ' ', $surname . '<br>';
            echo 'город', ' ', $city; ?>
        </p>
        <p> Мне
            <?php  echo $age;   ?>
            лет </p>
    </div>

    </div> <!--- закрытие тега из хедера для подсчета высоты страницы и корректного расположения футера (всегда внизу)--->
<?php
require "blocks/footer.php";
?>