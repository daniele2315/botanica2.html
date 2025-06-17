
function mostrarAba(id) {
  const secoes = document.querySelectorAll("main section");
  secoes.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

const texto = "Botânica é o ramo da Biologia que estuda as plantas! 🌿 Ela investiga como elas crescem, respiram, se reproduzem e até como se comunicam. É graças à botânica que sabemos como cultivar alimentos, preservar florestas e entender a natureza.";

let i = 0;
function typeWriter() {
  if (i < texto.length) {
    document.getElementById("intro").innerHTML += texto.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

const curiosidades = [
  "🌻 O girassol gira para acompanhar o sol durante o dia!",
  "🌵 Algumas plantas conseguem viver anos sem água, como os cactos!",
  "🌿 As árvores se comunicam por sinais químicos através do solo!",
  "🍌 O pé de banana é uma erva gigante, não uma árvore!",
  "🌼 Existem plantas carnívoras que comem insetos!",
  "🍄 Cogumelos fazem parte do Reino Fungi, não são plantas!"
];

function mostrarCuriosidade() {
  const random = Math.floor(Math.random() * curiosidades.length);
  document.getElementById("curiosidade").innerText = curiosidades[random];
}

window.onload = typeWriter;
