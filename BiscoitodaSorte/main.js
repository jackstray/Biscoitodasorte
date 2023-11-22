const tela1 = document.querySelector(".tela1");
const tela2 = document.querySelector(".tela2");
const img = tela1.querySelector("img");
const btnReset = document.querySelector("#btnReset");
const paragrafos = document.querySelectorAll(".textos p");

img.addEventListener("click", function () {
  tela1.classList.add("hide");
  tela2.classList.remove("hide");
  mostrarParagrafoAleatorio();
});

btnReset.addEventListener("click", function () {
  tela2.classList.add("hide");
  tela1.classList.remove("hide");
});

function mostrarParagrafoAleatorio() {
  //coloca o hide em todos paragrafos
  paragrafos.forEach((paragrafo) => paragrafo.classList.add("hide"));

  //gera um numero aleatorio para desse indice tirar o hide
  const indexAleatorio = Math.floor(Math.random() * paragrafos.length);
  const paragrafoAleatorio = paragrafos[indexAleatorio];
  //desse indice tiramos o hide de um dos paragrafos
  paragrafoAleatorio.classList.remove("hide");
}
