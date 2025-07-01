var jamon = 0;
var luna = 0;
var hoja = 0;
var panal = 0;
var majora = Math.floor((Math.random() * 100) + 1);

function var1() {
   document.getElementById("var").innerText="var ="+majora;
}

setTimeout(var1, 100)

function a1(){
   document.getElementById("a1").style.background = "rgba(0, 255, 4, 0.5)"
   luna = luna + 1
   if(luna == 4){
     document.getElementById("nose").src = "img/ta bien.png"
     setTimeout( function(){
         document.getElementById("nose").src = "img/chikorita.png"
         document.getElementById("buscar").innerText = "Hoja"
     },1000)
 }
}
function a2(){
   document.getElementById("a2").style.background = "rgba(0, 255, 4, 0.5)"
   luna = luna + 1
   if(luna == 4){
     document.getElementById("nose").src = "img/ta bien.png"
     setTimeout( function(){
         document.getElementById("nose").src = "img/chikorita.png"
         document.getElementById("buscar").innerText = "Hoja"
     },1000)
 }
}
function a3(){
   document.getElementById("a3").style.background = "rgba(0, 255, 4, 0.5)"
   luna = luna + 1
   if(luna == 4){
     document.getElementById("nose").src = "img/ta bien.png"
     setTimeout( function(){
         document.getElementById("nose").src = "img/chikorita.png"
         document.getElementById("buscar").innerText = "Hoja"
     },1000)
 }
}
function a4(){
   document.getElementById("a4").style.background = "rgba(0, 255, 4, 0.5)"
   luna = luna + 1
   if(luna == 4){
     document.getElementById("nose").src = "img/ta bien.png"
     setTimeout( function(){
         document.getElementById("nose").src = "img/chikorita.png"
         document.getElementById("buscar").innerText = "Hoja"
     },1000)
 }
}
function a5(){
   document.getElementById("a5").style.background = "rgba(255, 0, 0, 0.5)"
   setTimeout( function(){
      document.getElementById("a5").style.background = "rgba(255, 255, 255, 0.5)";
  },1000)
}

function b1(){
   document.getElementById("b1").style.background = "rgba(255, 0, 0, 0.5)"
   setTimeout( function(){
      document.getElementById("b1").style.background = "rgba(255, 255, 255, 0.5)";
  },1000)
}
function b2(){
   document.getElementById("b2").style.background = "rgba(255, 0, 0, 0.5)"
   setTimeout( function(){
      document.getElementById("b2").style.background = "rgba(255, 255, 255, 0.5)";
  },1000)
}
function b3(){
   document.getElementById("b3").style.background = "rgba(255, 0, 0, 0.5)"
   setTimeout( function(){
      document.getElementById("b3").style.background = "rgba(255, 255, 255, 0.5)";
  },1000)
}
function b4(){
   document.getElementById("b4").style.background = "rgba(0, 255, 4, 0.5)"
   hoja = hoja + 1
   if(hoja == 4){
      document.getElementById("nose").src = "img/ta bien.png"
      setTimeout( function(){
          document.getElementById("nose").src = "img/panal.png"
          document.getElementById("buscar").innerText = "Panal"
      },1000)
 }
}
function b5(){
   document.getElementById("b5").style.background = "rgba(255, 0, 0, 0.5)"
   setTimeout( function(){
      document.getElementById("b5").style.background = "rgba(255, 255, 255, 0.5)";
  },1000)
}

 function c1(){
    document.getElementById("c1").style.background = "rgba(0, 255, 4, 0.5)"
    jamon = jamon + 1
    if(jamon == 5){
      document.getElementById("nose").src = "img/ta bien.png"
      setTimeout( function(){
         if(majora == 64){
            document.getElementById("nose").src = "img/majora.png"
         }
         else{
            document.getElementById("nose").src = "img/luna.png"
         }
         document.getElementById("buscar").innerText = "Luna"
     },1000)
  }
 }
 function c2(){
    document.getElementById("c2").style.background = "rgba(0, 255, 4, 0.5)"
    jamon = jamon + 1
    if(jamon == 5){
      document.getElementById("nose").src = "img/ta bien.png"
      setTimeout( function(){
         if(majora == 64){
            document.getElementById("nose").src = "img/majora.png"
         }
         else{
            document.getElementById("nose").src = "img/luna.png"
         }
         document.getElementById("buscar").innerText = "Luna"
     },1000)
  }
 }
 function c3(){
    document.getElementById("c3").style.background = "rgba(0, 255, 4, 0.5)"
    jamon = jamon + 1
    if(jamon == 5){
      document.getElementById("nose").src = "img/ta bien.png"
      setTimeout( function(){
         if(majora == 64){
            document.getElementById("nose").src = "img/majora.png"
         }
         else{
            document.getElementById("nose").src = "img/luna.png"
         }
         document.getElementById("buscar").innerText = "Luna"
     },1000)
  }
 }
 function c4(){
    document.getElementById("c4").style.background = "rgba(0, 255, 4, 0.5)"
    jamon = jamon + 1
    hoja = hoja + 1
    if(jamon == 5){
      document.getElementById("nose").src = "img/ta bien.png"
      setTimeout( function(){
         if(majora == 64){
            document.getElementById("nose").src = "img/majora.png"
         }
         else{
            document.getElementById("nose").src = "img/luna.png"
         }
         document.getElementById("buscar").innerText = "Luna"
     },1000)
  }
  if(hoja == 4){
   document.getElementById("nose").src = "img/ta bien.png"
   setTimeout( function(){
       document.getElementById("nose").src = "img/panal.png"
       document.getElementById("buscar").innerText = "Panal"
   },1000)
}
 }
 function c5(){
    document.getElementById("c5").style.background = "rgba(0, 255, 4, 0.5)"
    jamon = jamon + 1
    if(jamon == 5){
        document.getElementById("nose").src = "img/ta bien.png"
        setTimeout( function(){
            if(majora == 64){
               document.getElementById("nose").src = "img/majora.png"
            }
            else{
               document.getElementById("nose").src = "img/luna.png"
            }
            document.getElementById("buscar").innerText = "Luna"
        },1000)
    }
 }

 function d1(){
   document.getElementById("d1").style.background = "rgba(255, 0, 0, 0.5)"
   setTimeout( function(){
      document.getElementById("d1").style.background = "rgba(255, 255, 255, 0.5)";
  },1000)
}
function d2(){
   document.getElementById("d2").style.background = "rgba(255, 0, 0, 0.5)"
   setTimeout( function(){
      document.getElementById("d2").style.background = "rgba(255, 255, 255, 0.5)";
  },1000)
}
function d3(){
   document.getElementById("d3").style.background = "rgba(255, 0, 0, 0.5)"
   setTimeout( function(){
      document.getElementById("d3").style.background = "rgba(255, 255, 255, 0.5)";
  },1000)
}
function d4(){
   document.getElementById("d4").style.background = "rgba(0, 255, 4, 0.5)"
   hoja = hoja + 1
   if(hoja == 4){
      document.getElementById("nose").src = "img/ta bien.png"
      setTimeout( function(){
          document.getElementById("nose").src = "img/panal.png"
          document.getElementById("buscar").innerText = "Panal"
      },1000)
 }
}
function d5(){
   document.getElementById("d5").style.background = "rgba(255, 0, 0, 0.5)"
   setTimeout( function(){
      document.getElementById("d5").style.background = "rgba(255, 255, 255, 0.5)";
  },1000)
}

function e1(){
   document.getElementById("e1").style.background = "rgba(0, 255, 4, 0.5)"
   panal = panal + 1
   if(panal == 5){
     document.getElementById("nose").src = "img/ta bien.png";
     document.getElementById("audio1").play()
     setTimeout( function(){
         document.getElementById("nose").src = "img/mariano64.gif"
     },1000)
 }
}
function e2(){
   document.getElementById("e2").style.background = "rgba(0, 255, 4, 0.5)"
   panal = panal + 1
   if(panal == 5){
     document.getElementById("nose").src = "img/ta bien.png";
     document.getElementById("audio1").play()
     setTimeout( function(){
         document.getElementById("nose").src = "img/mariano64.gif"
     },1000)
 }
}
function e3(){
   document.getElementById("e3").style.background = "rgba(0, 255, 4, 0.5)"
   panal = panal + 1
   if(panal == 5){
     document.getElementById("nose").src = "img/ta bien.png";
     document.getElementById("audio1").play()
     setTimeout( function(){
         document.getElementById("nose").src = "img/mariano64.gif"
     },1000)
 }
}
function e4(){
   document.getElementById("e4").style.background = "rgba(0, 255, 4, 0.5)"
   panal = panal + 1
   hoja = hoja + 1
   if(panal == 5){
     document.getElementById("nose").src = "img/ta bien.png";
     document.getElementById("audio1").play()
     setTimeout( function(){
         document.getElementById("nose").src = "img/mariano64.gif"
     },1000)
 }
 if(hoja == 4){
   document.getElementById("nose").src = "img/ta bien.png"
   setTimeout( function(){
       document.getElementById("nose").src = "img/panal.png"
       document.getElementById("buscar").innerText = "Panal"
   },1000)
}
}
function e5(){
   document.getElementById("e5").style.background = "rgba(0, 255, 4, 0.5)"
   panal = panal + 1
   if(panal == 5){
     document.getElementById("nose").src = "img/ta bien.png";
     document.getElementById("audio1").play()
     setTimeout( function(){
         document.getElementById("nose").src = "img/mariano64.gif";
     },1000)
 }
}