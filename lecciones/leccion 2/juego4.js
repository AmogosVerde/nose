var cuenta = 0;

function allowDrop(ev) {
    ev.preventDefault();
  }
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));
}
function drop1(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement1 = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));

    if(droppedElement1.src.includes("am.png")){
        cuenta = cuenta + 1
    }
}
function drop2(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement2 = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));

    if(droppedElement2.src.includes("em.png")){
        cuenta = cuenta + 1
    }
}
function drop3(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement3 = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));

    if(droppedElement3.src.includes("om.png")){
        cuenta = cuenta + 1
    }
}
function drop4(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement4 = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));

    if(droppedElement4.src.includes("im.png")){
        cuenta = cuenta + 1
    }
}
function drop5(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement5 = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));

    if(droppedElement5.src.includes("om.png")){
        cuenta = cuenta + 1
    }
}
function drop6(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement6 = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));

    if(droppedElement6.src.includes("em.png")){
        cuenta = cuenta + 1
    }
}
function drop7(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement7 = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));

    if(droppedElement7.src.includes("um.png")){
        cuenta = cuenta + 1
    }
}
function drop8(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement8 = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));

    if(droppedElement8.src.includes("im.png")){
        cuenta = cuenta + 1
    }
}
function drop9(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement9 = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));

    if(droppedElement9.src.includes("am.png")){
        
    }
}
function drop10(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement10 = document.getElementById(data); 
    ev.target.appendChild(document.getElementById(data));
    if(droppedElement10.src.includes("um.png")){
        cuenta = cuenta + 1 
    }
}

function verificar(){
    if(cuenta == 10){
        
    }
}

function sonido1(){
    document.getElementById("audio1").play();
}
function sonido2(){
    document.getElementById("audio2").play();
}
function sonido3(){
    document.getElementById("audio3").play();
}
function sonido4(){
    document.getElementById("audio4").play();
}
function sonido5(){
    document.getElementById("audio5").play();
}
function sonido6(){
    document.getElementById("audio6").play();
}
function sonido7(){
    document.getElementById("audio7").play();
}
function sonido8(){
    document.getElementById("audio8").play();
}
function sonido9(){
    document.getElementById("audio9").play();
}
function sonido10(){
    document.getElementById("audio10").play();
}