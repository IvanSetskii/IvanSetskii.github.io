<?php
include 'users.php';
include 'function.php';
$userName = getCurrentUser();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>PHP Module 14</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col">
                    <p>
                        <?php if (null !== $userName) {
                            ?>Welcome back, <strong><?php echo $userName; ?></strong>!<?php
                        } else {
                            ?><a href="/login.php">Sign in</a> <?php
                        } ?>
                    </p>
                </div>
            </div>
        </div>
    </body>
</html>