<?
require_once 'db.php';
// $popup = $_POST;
$fullname = $_POST['fullname'];
$tel = $_POST['tel'];
// echo $fullname;
$date = (date("d.m.y H:i"));
$submit = "INSERT INTO `popupform`(`FIO`, `phoneNumber`, `date`) VALUES ('$fullname','$tel','$date')";
$link->query($submit);
header('Location: index.php')
?>