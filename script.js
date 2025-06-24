// Edita o nome, profissão e bio
function editarPerfil() {
  const nome = prompt("Digite seu nome:");
  const profissao = prompt("Digite sua profissão:");
  const bio = prompt("Escreva uma pequena bio:");

  if (nome) document.getElementById("nome").innerText = nome;
  if (profissao) document.getElementById("profissao").innerText = profissao;
  if (bio) document.getElementById("bio").innerText = bio;
}

// Adiciona uma qualificação escolhida no select
function adicionarQualificacaoSelecionada() {
  const select = document.getElementById("selecaoQualificacao");
  const valor = select.value;

  if (valor && !qualificacoes.includes(valor)) {
    qualificacoes.push(valor);
    salvarQualificacoes();
    renderizarQualificacoes();
    select.selectedIndex = 0;
  } else if (qualificacoes.includes(valor)) {
    alert("Essa qualificação já foi adicionada!");
  }
}

// Remove uma qualificação ao clicar nela
function removerQualificacao(tag) {
  if (confirm(`Remover a qualificação "${tag}"?`)) {
    qualificacoes = qualificacoes.filter(q => q !== tag);
    salvarQualificacoes();
    renderizarQualificacoes();
  }
}

// Salva no localStorage
function salvarQualificacoes() {
  localStorage.setItem("qualificacoes", JSON.stringify(qualificacoes));
}

// Carrega do localStorage
function carregarQualificacoes() {
  const dados = localStorage.getItem("qualificacoes");
  if (dados) {
    qualificacoes = JSON.parse(dados);
  } else {
    qualificacoes = ["HTML", "CSS", "JavaScript"];
  }
}

// Mostra na tela
function renderizarQualificacoes() {
  const container = document.getElementById("qualificacoes");
  container.innerHTML = "";

  qualificacoes.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    span.onclick = () => removerQualificacao(tag);
    container.appendChild(span);
  });
}

// Lista inicial
let qualificacoes = [];

window.onload = () => {
  carregarQualificacoes();
  renderizarQualificacoes();
};