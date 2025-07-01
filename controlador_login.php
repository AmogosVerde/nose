<?php
session_start();
    if(!empty($_POST["ingresar"])) {
        if (empty($_POST["Usuario"]) and empty($_POST["Correo"]) and empty($_POST["Contrasena"])) {
            echo 'escribe algo subnormal';
        } else {
            $usuario=$_POST["Usuario"];
            $correo=$_POST["Correo"];
            $contrasena=$_POST["Contrasena"];
            $sql=$conexion->query("SELECT * FROM datos_usuarios WHERE nombre = '$usuario' AND gmail = '$correo' AND contrasena = '$contrasena'");
            if ($datos=$sql->fetch_object()) {
                $_SESSION["id"]=$datos->id;
                $_SESSION["nombre"]=$datos->nombre;
                header("location: inicio.php");
            } else {
                echo '<div class=falinks> Usuario no encontrado </div>';
            }   
        }
    }
?>