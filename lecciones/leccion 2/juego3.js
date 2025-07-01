
    function verificacion() {
        const input1 = document.getElementById("input1").value;
        const input2 = document.getElementById("input2").value;
        const input3 = document.getElementById("input3").value;
        const input4 = document.getElementById("input4").value;
        var cuenta = 0;
        

    if (input1.includes("A") || input1.includes("a")) {
        document.getElementById("check1").style.display = "block";
    } else{
        document.getElementById("equis1").style.display = "block";
    }
    if (input2.includes("O") || input2.includes("o")) {
        document.getElementById("check2").style.display = "block";
    } else{
        document.getElementById("equis2").style.display = "block";
    }
    if (input3.includes("A") || input3.includes("a")) {
        var cuenta = cuenta + 1
    }
    if (input4.includes("E") || input4.includes("e")) {
        var cuenta = cuenta + 1
    }
    if (cuenta == 2){
        document.getElementById("check3").style.display = "block";
    } else{
        document.getElementById("equis3").style.display = "block";
    }
};