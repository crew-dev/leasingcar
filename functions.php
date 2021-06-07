<?
require_once 'db.php';

function get_popupForm_table($link) {
    $sql = "SELECT * FROM popupform";
    
    $result = mysqli_query($link,$sql);
   
    $popupTable = mysqli_fetch_all($result, MYSQLI_ASSOC);
   
    return $popupTable;
   }
 
?>