// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const btn = document.getElementById("btn-orcamento");
const modal = document.getElementById("modal-orcamento");
const closeBtn = document.querySelector(
  ".close-button[data-close='modal-orcamento']"
);

btn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// MODAL SUPORTE
document
  .getElementById("form-orcamento")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
    modal.classList.add("hidden");
    this.reset();
  });

function abrirModal(id) {
  document.getElementById(id).style.display = "block";
}

function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}

// Fecha ao clicar fora do conteúdo
window.addEventListener("click", function (event) {
  const modal = document.getElementById("modalSuporte");
  if (event.target === modal) {
    fecharModal("modalSuporte");
  }
});
