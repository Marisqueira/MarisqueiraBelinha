console.log("Site carregado com sucesso!");

// Exemplo: botão de reserva (pode expandir depois)
document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector(".btn-reserve");
  if (botao) {
    botao.addEventListener("click", () => {
      alert("Obrigado por reservar com a Marisqueira Belinha!");
    });
  }
});