console.log("JS Externo OK!");

// Exe01
let botaoExe01;
botaoExe01 = document.getElementById("btnExe01");
botaoExe01.addEventListener("click", mostrarMensagem);

function mostrarMensagem(){
    let nomeExe01, respostaExe01;
    nomeExe01 = document.getElementById("nomeExe01").value;
    respostaExe01 = document.getElementById("pExe01");
    if (nomeExe01 != ""){
        respostaExe01.innerText = "Olá " + nomeExe01 + "! Seja muito bem-vindo(a)!!";
        console.log("Nome capturado: " + nomeExe01);
    } else{
        respostaExe01.innerHTML = "<span style='color: red; font-size: 30px;'>Digite seu nome!</span>";
        console.log("Nenhum nome capturado");
    }
}

// Exe02
let btbExe02, paragrafoExe02;
btnExe02 = document.getElementById("btnExe02");
paragrafoExe02 = document.getElementById("pExe02");
btnExe02.addEventListener("click", estiloNovo);
function estiloNovo() {
    let LabelBotao = btnExe02.innerText;
    if (LabelBotao == "Alterar Estilo") {
        paragrafoExe02.style.color = "white";
        paragrafoExe02.style.backgroundColor = "darkblue";
        paragrafoExe02.style.fontSize = "30px";
        btnExe02.innerText = "Estilo Original";
        console.log("O estilo foi alterado");
    } else {
        paragrafoExe02.style.color = "";
        paragrafoExe02.style.backgroundColor = "";
        paragrafoExe02.style.fontSize = "";
        btnExe02.innerText = "Alterar Estilo"
        console.log("O estilo voltou ao original");
    }
}

// Exe 03
let botoes = document.querySelectorAll(".cor");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", trocaCor);  
}

function trocaCor(){
    let cor = this.dataset.cor;
    document.body.style.background = cor;  
    
    if (cor === "") {
        console.log("A cor de fundo voltou para a Original.");
    }else{
    let nomeDaCor = this.dataset.nome; 
    console.log(`A cor foi alterada para: ${nomeDaCor}`);
    }
}

// Exe 04
/*
document.getElementById("btnCriar").addEventListener("click", criarParagrafo);
document.getElementById("btnRemover").addEventListener("click", removerParagrafo);

function criarParagrafo() {
    let p = document.createElement("p");
    let texto_paragrafo = prompt("Digite um texto para o Parágrafo que será criado: ");
    p.innerText = texto_paragrafo;
    document.getElementById("conteudo").appendChild(p);
}

function removerParagrafo() {
    let conteudo = document.getElementById("conteudo");
    if (conteudo.lastElementChild) {
        let resposta = confirm("Desejas realmente excluir o último parágrafo?")
            if (resposta) {
                conteudo.removeChild(conteudo.lastElementChild);
            }
        } else {
            alert("Não existe mais parágrafos a serem excluídos");
        }
    }
        Exclui os botões também 
        */

document.getElementById("btnCriar").addEventListener("click", criarParagrafo);
document.getElementById("btnRemover").addEventListener("click", removerParagrafo);

function criarParagrafo() {
    let p = document.createElement("p");
    let texto_paragrafo = prompt("Digite um texto para o Parágrafo que será criado: ");
    
    if (texto_paragrafo) {
        p.innerText = texto_paragrafo;
        document.getElementById("conteudo").appendChild(p);
        console.log("Parágrafo criado!");
        console.log("Novo Parágrafo: " + texto_paragrafo);
    }
}

function removerParagrafo() {
    let conteudo = document.getElementById("conteudo");
    let paragrafos = conteudo.querySelectorAll("p");
    
    if (paragrafos.length > 1) {
        
        let resposta = confirm("Desejas realmente excluir o último parágrafo?");
        
        if (resposta) {
            let ultimoParagrafo = paragrafos[paragrafos.length - 1];
            
            // Usamos .innerText para capturar o texto do elemento HTML
            console.log("Parágrafo removido!");
            console.log("Parágrafo removido: " + ultimoParagrafo.innerText);
            
            conteudo.removeChild(ultimoParagrafo);
        }
        
    } else {
        alert("Não existem mais parágrafos a serem excluídos!");
        console.log("Todos os parágrafos extras já foram removidos.");
    }
}

// Exe05
document.getElementById("btnExe05").addEventListener("click", trocarImagem)
function trocarImagem() {
    let imagem = document.getElementById("imgExe05");
    if (imagem.style.visibility == "hidden") {
        imagem.style.visibility = "visible";
        console.log("Imagem visivel");
    } else {
        imagem.style.visibility = "hidden";
        console.log("Imagem ocultada");
    }
}

// Exe06
let seletor = document.getElementById("selectExe06");
seletor.addEventListener("change", trocarPropaganda);

function trocarPropaganda() {
    let valorSelecionado = seletor.value;
    
    // Variável declarada como "foto"
    let foto = document.getElementById("imgExe06");

    switch (valorSelecionado) {
        case "Marcha":
            foto.src = "./img/helldiver-seaf-eagle.jpeg";
            break;
        case "They Want You":
            foto.src = "./img/democracy.jpeg";
            break;
        case "Thank You Helldiver":
            foto.src = "./img/divert-all-available-helldivers-to-solidaritet-answer-the-v0-mx8zpgbp6gkg1.jpg";
            break;
        case "Stamp Out The Bots":
            foto.src = "./img/extra-helldivers-propaganda-v0-3zcll947oulc1.jpg";
            break;
        case "We'll Beat Them Again":
            foto.src = "./img/images.jpeg";
            break;
        default:
            foto.src = "./img/helldiver-seaf-eagle.jpeg";
            break;
    }
    
    console.log(`Propaganda selecionada: "${valorSelecionado}" | Caminho da imagem: ${foto.src}`);
}
