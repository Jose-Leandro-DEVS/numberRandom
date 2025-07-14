
// Função para sortear um número entre min e max
function sortearNumero() {
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    abrirModal(result)
}

const modal = document.getElementById("modal");
const modalResultado = document.getElementById("modal-resultado");
const closeBtn = document.querySelector(".close"); 

// Função para abrir o modal
function abrirModal(numero) {
    document.getElementById("modal-resultado").textContent = numero;
    modal.style.display = "block";
}

// Fechar modal ao clicar no "X"
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fechar modal ao clicar fora dele
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
