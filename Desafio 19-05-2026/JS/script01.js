console.log("JS externo 01 OK!");

// EXE01
function mostrarMSG(){
    let nomeExe01, paragrafoExe01;
    nomeExe01 = document.getElementById("txtExe01");
    paragrafoExe1 = document.getElementById("pExe01");
    if (nomeExe01 != "") {
        pExe01.innerText = "Olá, " + nomeExe01.value + ". Seja bem vindo(a)!";
    } else{
        pExe01.innerHTML = "< style = 'color:red'>Digite seu nome!!</span>";
    }
    console.log("Nome capturado: "+ nomeExe01.value);
}

// EXE02
function trocaEstilo(){
    let btnExe02, paragrafoExe02;
    btnExe02 = document.getElementById("btnExe02");
    paragrafoExe02 = document.getElementById("pExe02");
    if (btnExe02.innerText == "Troca Estilo"){
        paragrafoExe02.style.color = 'blue';
        paragrafoExe02.style.fontSize = '30px';
        paragrafoExe02.style.background = 'yellow';
        btnExe02.innerText = "Retorna Estilo;"
    }else {
        paragrafoExe02.style.color = '';
        paragrafoExe02.style.fontSize = '';
        paragrafoExe02.style.background = '';
        btnExe02.innerText = "Troca Estilo";
        }

// 1. Achamos o botão no HTML através do ID dele
const botao = document.getElementById("btnExe02");

// 2. Adicionamos um "ouvinte de evento" para escutar o 'click'
botao.addEventListener("click", function() {
    console.log("O estilo foi alterado!");
});
}

// EXE03
function trocaCor(novaCor){
    document.body.style.background = novaCor;

// 1. Seleciona TODOS os elementos que possuem a classe 'botao-clique'
const botoes = document.querySelectorAll('.botao-clique');

// 2. Passa por cada botão da lista usando o forEach
botoes.forEach(function(botao) {
    
    // 3. Adiciona o evento de clique individual para o botão da vez
    botao.addEventListener('click', function(evento) {
        // O 'evento.target' se refere exatamente ao botão que foi clicado
        const botaoClicado = evento.target;
        
        // Pegando o texto de dentro do botão
        const texto = botaoClicado.innerText;
        
        // Pegando o atributo customizado 'data-id'
        const id = botaoClicado.getAttribute('data-id');

        // Mostra no console qual deles foi o responsável pelo clique
        console.log(`Você clicou no ${texto} (ID: ${id})`);
    });
    
});
}

// EXE04
function addParagrafo(texto){
    let div, novoParagrafo;
    div = document.getElementById("conteudo");
    novoParagrafo = document.createElement("p");
    novoParagrafo.innerText="Parágrafo Adicionado via JS";
    div.appendChild(novoParagrafo);
    console.log("Um parágrafo foi adicionado");
}
function removeParagrafo(){
    let div, ultimoParagrafo;
    div = document.getElementById("conteudo");
    ultimoParagrafo = div.lastElementChild;
    if (ultimoParagrafo) {
        div.removeChild(ultimoParagrafo);
        console.log("Um parágrafo foi removido");
    } else{
        alert("Não há mais parágrafos para serem removidos!");
        console.log("Não há parágrafos para serem removidos");
    }
}

//EXE05
function mostrarImg(){
    let img;
    img = document.getElementById("imgExe05");
    img.style.display = 'block';
    console.log("A imagem está à vista");
}
function escondeImg(){
    let img;
    img = document.getElementById("imgExe05");
    img.style.display = 'none';
    console.log("A imagem está escondida");
}

// EXE06
function trocaImg(tipo){
    let img = document.getElementById("imgExe06"); // Boa prática usar 'let' antes de 'img'
    
    switch (tipo) {
        case "Marcha":
            img.src = "./img/helldiver-seaf-eagle.jpeg";
            break;
        case "They Want You":
            img.src = "./img/democracy.jpeg";
            break;
        case "Thank You Helldiver":
            img.src = "./img/divert-all-available-helldivers-to-solidaritet-answer-the-v0-mx8zpgbp6gkg1.jpg";
            break;
        case "Stamp Out The Bots":
            img.src = "./img/extra-helldivers-propaganda-v0-3zcll947oulc1.jpg";
            break;
        case "We'll Beat Them Again":
            img.src = "./img/images.jpeg";
            break;
        default:
            img.src = "./img/helldiver-seaf-eagle.jpeg";
            break;
    }
    console.log(`Propaganda selecionada: "${tipo}" | Caminho da imagem: ${img.src}`);
}
