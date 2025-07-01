<?php
if (!empty($_POST["registro"])) {
    if (empty($_POST["Usuario"]) || empty($_POST["Correo"]) || empty($_POST["Contrasena"])) {
        echo '<div class="falinks">Por favor, completa todos los campos.</div>';
    } else {
        $usuario = $_POST["Usuario"];
        $contrasena = $_POST["Contrasena"];
        $correo = $_POST["Correo"];
        $hashed_password = password_hash($contrasena, PASSWORD_DEFAULT);
        $sql = $conexion->query("INSERT INTO datos_usuarios(nombre, gmail, contrasena) VALUES ('$usuario', '$correo', '$contrasena')");

        if ($sql) {
            echo '<div class="falinks">Te has registrado :D</div>';
        } else {
            echo '<div class="tinkatunka">Error al registrar: ' . mysqli_error($conexion) . '</div>';
        }
    }
}
?>