<?php
    $title = "Обратная связь";
    require "blocks/header.php";
?>
    <div class="sendcontact">
        <form method="post" action="#" id="contact">
            <input type="text" name="contact_name" placeholder="Ваше имя">
            <input type="text" name="contact_email" placeholder="Ваш e-mail">
            <textarea name="contact_text" placeholder="Напиши красивое сообщение"></textarea>
            <br>
            <input type="submit" class="btn" value="Отправить">
        </form>
    </div>

</div> <!--- закрытие тега из хедера для подсчета высоты страницы и корректного расположения футера (всегда внизу)--->
<?php
    require "blocks/footer.php";
?>