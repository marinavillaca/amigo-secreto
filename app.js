let listaAmigos = [];

function adicionarAmigo() {
  let nomeEscolhido = document.querySelector("input").value;

  if (nomeEscolhido === "") {
    alert("Por favor, insira um nome.");
  } else {
    listaAmigos.push(nomeEscolhido);
    limparCampo();
    atualizaListaAmigos();
  }
}

function limparCampo() {
  let nomeEscolhido = document.querySelector("input");
  nomeEscolhido.value = "";
}

function atualizaListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < listaAmigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = listaAmigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (listaAmigos.length > 0) {
    let indiceEscolhido = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceEscolhido];
    exibirTextoNaTela(
      "#resultado",
      `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`
    );
  } else {
    console.log("A lista de amigos está vazia!");
  }
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
