<?php
  $title = "Главная";
   require "blocks/header.php";
?>
<h1>Главная страница </h1>
<?php 
	echo date('d-M-Y', strtotime("now"));


	require "blocks/footer.php";
?>
