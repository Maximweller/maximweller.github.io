<?php

$recepient = "max.ricardo@mail.ru";
$sitename = "maxplanck.io";

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$skype = trim($_POST["skype"]);
$comment = trim($_POST["comment"]);
$message = "Name: $name \nMail: $mail \nSkype: $skype \nComment: $comment";

$pagetitle = "New application from site \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\" \nFrom: $recepient");
