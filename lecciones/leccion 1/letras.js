

function chido() {
    document.getElementById("bien").play();
    document.getElementById("klasd").play();
    document.getElementById("imagen").src="chido.png";
    document.getElementById("txt").innerHTML="Bien Hecho :D";
    setTimeout(function(){
        document.getElementById("nro1").style.display = 'none';
        document.getElementById("nro2").style.display = 'block';
        document.getElementById("imagen").src="uva.png";
        document.getElementById("txt").innerHTML="";
        document.getElementById("input").style.display = 'none';
    },3000)
}
function nochido() {
    document.getElementById("mal").play();
    document.getElementById("txt").innerHTML="Vuelve a intentarlo :3";
    setTimeout(function(){
        document.getElementById("txt").innerHTML="";
        document.getElementById("imagen").src="abeja.png";
    },3000)
}
function chido2() {
    document.getElementById("bien").play();
    document.getElementById("klasd").play();
    document.getElementById("imagen").src="chido3.png";
    document.getElementById("txt").innerHTML="Excelente :D";
    setTimeout(function(){
        document.getElementById("nro2").style.display = 'none';
        document.getElementById("nro3").style.display = 'block';
        document.getElementById("imagen").src="iman.png";
        document.getElementById("txt").innerHTML="";
        document.getElementById("input").style.display = 'none';
    },3000)
}
function nochido2() {
    document.getElementById("mal").play();
    document.getElementById("txt").innerHTML="Vuelve a intentarlo :3";
    setTimeout(function(){
        document.getElementById("txt").innerHTML="";
        document.getElementById("imagen").src="uva.png";
    },3000)
}
function chido3() {
    document.getElementById("bien").play();
    document.getElementById("klasd").play();
    document.getElementById("imagen").src="kirbo.png";
    document.getElementById("txt").innerHTML="Bien Hecho :D";
    setTimeout(function(){
        document.getElementById("nro3").style.display = 'none';
        document.getElementById("nro4").style.display = 'block';
        document.getElementById("imagen").src="Teddiursa.png";
        document.getElementById("txt").innerHTML="";
        document.getElementById("input").style.display = 'none';
    },3000)
}
function nochido3() {
    document.getElementById("mal").play();
    document.getElementById("txt").innerHTML="Vuelve a intentarlo :3";
    setTimeout(function(){
        document.getElementById("txt").innerHTML="";
        document.getElementById("imagen").src="iman.png";
    },3000)
}
function chido4() {
    document.getElementById("bien").play();
    document.getElementById("klasd").play();
    document.getElementById("imagen").src="chido2.png";
    document.getElementById("txt").innerHTML="Increible :D";
    setTimeout(function(){
        document.getElementById("nro4").style.display = 'none';
        document.getElementById("nro5").style.display = 'block';
        document.getElementById("imagen").src="Phanpy.png";
        document.getElementById("txt").innerHTML="";
        document.getElementById("input").style.display = 'none';
    },3000)
}
function nochido4() {
    document.getElementById("mal").play();
    document.getElementById("txt").innerHTML="Vuelve a intentarlo :3";
    setTimeout(function(){
        document.getElementById("txt").innerHTML="";
        document.getElementById("imagen").src="Teddiursa.png";
    },3000)
}
function chido5() {
    document.getElementById("bien").play();
    document.getElementById("klasd").play();
    document.getElementById("imagen").src="chido.png";
    document.getElementById("txt").innerHTML="Increible :D";
    setTimeout(function(){
        document.getElementById("nro5").style.display = 'none';
        document.getElementById("nro6").style.display = 'block';
        document.getElementById("victory").play();
        document.getElementById("imagen").style.display = 'none';
        document.getElementById("txt").innerHTML="";
        document.getElementById("pito").innerHTML="";
        document.getElementById("input").style.display = 'none';
    },3000)
}
function nochido5() {
    document.getElementById("mal").play();
    document.getElementById("txt").innerHTML="Vuelve a intentarlo :3";
    setTimeout(function(){
        document.getElementById("txt").innerHTML="";
        document.getElementById("imagen").src="Phanpy.png";
    },3000)
}