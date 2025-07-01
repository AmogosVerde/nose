<!DOCTYPE html>
<html>
<head>
    <meta name="viewport"content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="juego5.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="juego5.js"></script>
<title>Leccion 02</title>
</head>
<body>
    <h1 class="titulo"> <a href="/login/home.php"><i class="fas fa-backward"></i></a><img src="img/lingure-logo.jpg" alt="" class="logo">Lingure </h1>
    <section class="actividad">
        <h1 class="instruccion">Encuentra las palabras en sopa de letras</h1>
        <div class="soap">
            <p id="a1" onclick="a1()">L</p> <p id="a2" onclick="a2()">U</p> <p id="a3" onclick="a3()">N</p> <p id="a4" onclick="a4()">A</p> <p id="a5" onclick="a5()">K</p>
            <p id="b1" onclick="b1()">T</p> <p id="b2" onclick="b2()">S</p> <p id="b3" onclick="b3()">J</p> <p id="b4" onclick="b4()">H</p> <p id="b5" onclick="b5()">Y</p>
            <p id="c1" onclick="c1()">J</p> <p id="c2" onclick="c2()">A</p> <p id="c3" onclick="c3()">M</p> <p id="c4" onclick="c4()">O</p> <p id="c5" onclick="c5()">N</p>
            <p id="d1" onclick="d1()">O</p> <p id="d2" onclick="d2()">B</p> <p id="d3" onclick="d3()">E</p> <p id="d4" onclick="d4()">J</p> <p id="d5" onclick="d5()">O</p>
            <p id="e1" onclick="e1()">P</p> <p id="e2" onclick="e2()">A</p> <p id="e3" onclick="e3()">N</p> <p id="e4" onclick="e4()">A</p> <p id="e5" onclick="e5()">L</p>
        </div>
        <div class="palabra">
            <h1 id="buscar">Jamon</h1>
            <img src="img/pato.png" id="nose">
        </div>
    </section>
    <p id="var"></p>
    <audio id="audio1"><source src="sonidos/wwd (mp3cut.net).mp3" type="audio/mp3"></audio>
</body>
</html>