<?require_once 'db.php';
require_once 'functions.php';
$popupTable = get_popupForm_table($link);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Данные</title>
</head>
<body>
    <script src="js/pass.js"></script>
<ul>
<?php foreach($popupTable as $item): ?>
    <li>id: <?=$item['id']?>; ФИО: <?=$item['FIO']?>; Номер: <?=$item['phoneNumber']?>; Дата: <?=$item['date']?></li>
    <?endforeach?>
</ul>
</body>
</html>

