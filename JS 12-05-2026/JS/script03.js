console.log("JS 3 externo OK");

function verificar() {

    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let num3 = parseFloat(document.getElementById("n3").value);
    
    let resposta = document.getElementById("respostaExe03");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resposta.innerHTML = "Por favor, digite os três números antes de verificar.";
        resposta.style.color = "red";
        return;
    }

    let maior = Math.max(num1, num2, num3);

    resposta.style.color = "black";
    resposta.innerHTML = `O maior número digitado é: <strong>${maior}</strong>`;

    console.log("\nO maior número é: ", maior);
}
