//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

pos = 0;

function addAmigos(){

    add = document.getElementById('amigo').value; 
    amigos.push(add);

    if (add == ""){
     alert('Insira um nome, por favor.')
     amigos.pop("")
    }

    console.log(amigos);
    colocarNaLista();
    limparCampo();


}


function colocarNaLista() {
    const listaAmigos = document.getElementById("listaAmigos");

  // Limpa o conteúdo atual
    listaAmigos.innerHTML = "";

  // Percorre a lista e cria um <li> para cada amigo
    amigos.forEach(nome => {
        const item = document.createElement("li");
        item.innerText = nome;
        listaAmigos.appendChild(item);
        // O "appendChild(item)" funciona colocando o item na lista.
    });



}

function resultadoSorteio(){
    
    const resultado = document.createElement("li");
    resultado.innerText = amigos[númeroDoAmigo];

}


function sortearAmigo(){

    númeroDoAmigo = parseInt(Math.random()*amigos.length);
    console.log(númeroDoAmigo); 
    console.log(amigos[númeroDoAmigo]);
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpa o resultado anterior

    const item = document.createElement("li");
    item.innerText = amigos[númeroDoAmigo];
    resultado.appendChild(item);

}

// Função para limpar o campo de preenchimento dos nomes
function limparCampo() {
    amg = document.querySelector('input');
    amg.value = '';
}

// Função para limpar o array dos amigos 
function limpaLista(){
    amigos.length = 0;
    amigos == "";   

    listaAmigos.innerHTML = "";
    resultado.innerText = "";


}

function Excluirnome(){
    let nomeExcluir = prompt("Qual nome deseja excluir?");

    if (amigos.includes(nomeExcluir) == true) {
        amigos.pop(nomeExcluir);
        console.log(amigos);
        colocarNaLista();
        return;
    }
    
    
}