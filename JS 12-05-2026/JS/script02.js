console.log("JS 2 externo OK");

function calcularMedia() {
    let soma = 0;
    let media = 0;

    let valores = document.getElementById("valores").value;
    console.log(valores);

    let array_numeros = valores.split("/");
    console.log("O número de valores no array são: ", array_numeros.length)
    let qtdeNum = array_numeros.length;

    for (let i = 0; i < array_numeros.length; i++){
        soma = soma + Number(array_numeros[i]);
    }
    console.log("Soma de todos os valores: ",soma);
    media = soma/qtdeNum;
    console.log("Média dos valores: ", media);

    let p = document.getElementById("media");
    p.innerText = "A média é: "+media;
}
