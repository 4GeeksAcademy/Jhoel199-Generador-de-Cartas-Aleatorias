import "bootstrap";
import "./style.css";

window.onload = function() {
  generarCarta();
  setInterval(generarCarta, 10000);

  document.getElementById("btnGenerar").addEventListener("click", generarCarta);

  document
    .getElementById("widthInput")
    .addEventListener("input", cambiarTamanho);
  document
    .getElementById("heightInput")
    .addEventListener("input", cambiarTamanho);
};

function generarCarta() {
  const palo = ["spade", "club", "heart", "diamond"];
  const paloIndex = palo[Math.floor(Math.random() * palo.length)];

  document.getElementById("card").className = `card ${paloIndex}`;
  document.getElementById("card").innerHTML = `
      <div class="d-flex flex-row h-100">
        <div class="col-3 d-flex align-items-start justify-content-center">
          <span class="display-2">${generarPalo(paloIndex)}</span>
        </div>
        <div class="col-6 d-flex align-items-center justify-content-center">
          <span class="display-1">${generarNumero()}</span>
        </div>
        <div class="col-3 d-flex align-items-end justify-content-center">
          <span class="display-2">${generarPalo(paloIndex)}</span>
        </div>
      </div>

  `;
}

const generarNumero = () => {
  const numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const numeroIndex = Math.floor(Math.random() * numero.length);
  return numero[numeroIndex];
};

function generarPalo(icono) {
  switch (icono) {
    case "spade":
      return "♠";
    case "club":
      return "♣";
    case "heart":
      return "♥";
    case "diamond":
      return "♦";
  }
}

function cambiarTamanho() {
  const card = document.getElementById("card");
  const width = document.getElementById("widthInput").value;
  const height = document.getElementById("heightInput").value;

  card.style.width = width ? `${width}px` : "";
  card.style.height = height ? `${height}px` : "";
}
