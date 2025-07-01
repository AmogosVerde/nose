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

if(droppedElement.src.includes("E.png")){
    document.getElementById("bien").style.display = "block"
    setTimeout( function(){
        document.getElementById("we1").style.display = "none";
        document.getElementById("we2").style.display = "inline-block"
    },1000)
}
}
function allowDrop2(ev) {
    ev.preventDefault();
  }
function drag2(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop2(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var droppedElement = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));

if(droppedElement.src.includes("U.png")){
    document.getElementById("bien").style.display = "block"
    setTimeout( function(){
        document.getElementById("we1").style.display = "none";
        document.getElementById("we2").style.display = "inline-block"
    },1000)
}
}