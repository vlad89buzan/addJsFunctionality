<?php
$_POST = json_decode(file_get_contents("php://input"), true);//robota z json php
echo var_dump($_POST);