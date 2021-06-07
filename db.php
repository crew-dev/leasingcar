<?php

$link = mysqli_connect('localhost','root','','db');

if (mysqli_connect_errno()) {
    echo 'Ошибка в подключении к бд ('.mysqli_connect_errono.'): '. mysqli_connect_error();
    exit();
}