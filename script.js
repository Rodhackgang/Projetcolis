//nOus allons creer une fonction qui detecte le chargement de la page et faire cacher le texte chargement ok d'accord je te laisse essayer
// Je ne saurai pas bro tU hummm 
var variablechargement= document.getElementById("chargementpage");
var formulaire= window.document.getElementById("formulaire");
formulaire.style.display="none";
document.addEventListener('DOMContentLoaded', ()=>{
         setTimeout(() => {
             variablechargement.style.display="none";
             formulaire.style.display="block";
         }, 3000);
      
});







const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
