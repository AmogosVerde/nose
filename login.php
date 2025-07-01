<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
    <link rel="stylesheet" href="login.css">
    <meta charset="utf-8">
    <title>Lingure</title>
</head>
<body>
    <form method="post" class="login">
        <h1>Lingure</h1>
        <?php
        include "conexion.php";
        include "controlador_login.php";
        ?>
        <input class="ko" type="text" name="Usuario" value="" placeholder="Usuario">
        <input class="ko" type="email" name="Correo" value="" placeholder="Correo Electronico">
        <input class="ko" type="password" name="Contrasena" value="" placeholder="Contraseña">
        <input class="kp" type="submit" value="Ingresar" name="ingresar">
        <p class="registrar"> ¿No se ha registrado? <br> <a href="registro.php"> Registrese aqui </a></p>
</form>

</body>
</html>