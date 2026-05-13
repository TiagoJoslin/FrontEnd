console.log("JS 1 externo OK");

//Exe01
let n1, n2;

function capturaValor(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    console.log(`Valores capturados:\n${n1}\n${n2}`);
    console.table({ Numero_1: n1, Numero_2: n2 });
}
    
function mostraResult(R){
    let result = document.getElementById("result");
    result.value = R;
    console.table({ Resultado: R});
    console.log("Resultado: ",R);
}

function soma(){
    capturaValor();
    let num3 = Number(n1) + Number(n2);
    mostraResult(num3);
}

function sub(){
    capturaValor();
    let num3 = Number(n1) - Number(n2);
    mostraResult(num3);
}

function mult(){
    capturaValor();
    let num3 = Number(n1) * Number(n2);
    mostraResult(num3);
}

function divi(){
    capturaValor();
    let num3 = (Number(n1) / Number(n2)).toFixed(2);
    mostraResult(num3);
}