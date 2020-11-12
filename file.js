console.log('ciao');

const display=document.getElementById("display");
const azzera=document.getElementById("azzera");
const divisione=document.getElementById("divisione");
const moltiplicazione=document.getElementById("moltiplicazione");
const sottrazione=document.getElementById("sottrazione");
const addizione=document.getElementById("addizione");
const uguale=document.getElementById("uguale");
const virgola=document.getElementById("virgola");
const zero=document.getElementById("zero");
const uno=document.getElementById("uno");
const due=document.getElementById("due");
const tre=document.getElementById("tre");
const quattro=document.getElementById("quattro");
const cinque=document.getElementById("cinque");
const sei=document.getElementById("sei");
const sette=document.getElementById("sette");
const otto=document.getElementById("otto");
const nove=document.getElementById("nove");
let accumulatore="0";
let risultato=0;
let operazione="addizione";

azzera.addEventListener("click",()=>{
    accumulatore = "0";
    risultato=0;
    operazione="addizione";
    display.textContent=accumulatore;
})

zero.addEventListener("click",()=>{
    if(accumulatore!="0"){
        accumulatore += "0";
        display.textContent= +accumulatore;
    }
    console.log("accumulatore =" + accumulatore);
})

uno.addEventListener("click",()=>{
    accumulatore += "1";
    display.textContent= +accumulatore;
    console.log(accumulatore);
})

due.addEventListener("click",()=>{
    accumulatore += "2";
    display.textContent= +accumulatore;
})

tre.addEventListener("click",()=>{
    accumulatore += "3";
    display.textContent= +accumulatore;
})

quattro.addEventListener("click",()=>{
    accumulatore += "4";
    display.textContent= +accumulatore;
})

cinque.addEventListener("click",()=>{
    accumulatore += "5";
    display.textContent= +accumulatore;
})

sei.addEventListener("click",()=>{
    accumulatore += "6";
    display.textContent= +accumulatore;
})

sette.addEventListener("click",()=>{
    accumulatore += "7";
    display.textContent= +accumulatore;
})

otto.addEventListener("click",()=>{
    accumulatore += "8";
    display.textContent= +accumulatore;
})

nove.addEventListener("click",()=>{
    accumulatore += "9";
    display.textContent= +accumulatore;
})

virgola.addEventListener("click",()=>{
    if(accumulatore.indexOf(".")==-1){
        accumulatore += ".";
        display.textContent= +accumulatore + ".";
        console.log(accumulatore);
    }
})
uguale.addEventListener("click",()=>{
    if(operazione=="addizione"){
        risultato+= +accumulatore;
        accumulatore="0";
        display.textContent= risultato;
    }
    if(operazione=="sottrazione"){
        risultato-= +accumulatore;
        accumulatore="0";
        display.textContent= risultato;
    }
    if(operazione=="moltiplicazione"){
        risultato*= +accumulatore;
        accumulatore="0";
        display.textContent= risultato;
    }
    if(operazione=="divisione"){
        risultato/= +accumulatore;
        accumulatore="0";
        display.textContent= risultato;
    }
})
addizione.addEventListener("click",()=>{
    if(operazione=="addizione"){
        risultato+= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "+";
    }
    if(operazione=="sottrazione"){
        risultato-= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "+";
    }
    if(operazione=="moltiplicazione"){
        risultato*= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "+";
    }
    if(operazione=="divisione"){
        risultato/= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "+";
    }
    operazione="addizione";
})
sottrazione.addEventListener("click",()=>{
    if(operazione=="addizione"){
        risultato+= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "-";
    }
    if(operazione=="sottrazione"){
        risultato-= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "-";
    }
    if(operazione=="moltiplicazione"){
        risultato*= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "-";
    }
    if(operazione=="divisione"){
        risultato/= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "-";
    }
    operazione="sottrazione";
})
moltiplicazione.addEventListener("click",()=>{
    if(operazione=="addizione"){
        risultato+= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "*";
    }
    if(operazione=="sottrazione"){
        risultato-= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "*";
    }
    if(operazione=="moltiplicazione"){
        risultato*= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "*";
    }
    if(operazione=="divisione"){
        risultato/= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "*";
    }
    operazione="moltiplicazione";
})
divisione.addEventListener("click",()=>{
    if(operazione=="addizione"){
        risultato+= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "/";
    }
    if(operazione=="sottrazione"){
        risultato-= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "/";
    }
    if(operazione=="moltiplicazione"){
        risultato*= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "/";
    }
    if(operazione=="divisione"){
        risultato/= +accumulatore;
        accumulatore="0";
        display.textContent= risultato + "/";
    }
    operazione="divisione";
})




