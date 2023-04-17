(function() {
console.log("Début du carrousel");

let carrouselOuvrir = document.querySelector(".carrousel__ouvrir");
let carrousel = document.querySelector(".carrousel");
let carrouselFond = document.querySelector(".carrousel_fond");
let carrouselX = document.querySelector(".carrousel__x");
let galerie = document.querySelector(".galerie");
let galerieImg = galerie.querySelectorAll("img");
let carrouselFigure = document.querySelector(".carrousel__figure");
let carrouselForm = document.querySelector(".carrousel__form");

console.log("Le bouton", carrouselOuvrir);
console.log("Le carrousel", carrousel);
console.log("Le carrousel_fond", carrouselFond);
console.log(carrouselForm.tagName);

/* ----------------------------------------------------  ouvrir la boîte modale */
carrouselOuvrir.addEventListener('mousedown', function(){
console.log('ouvrir la boîte')
 carrousel.classList.add('carrousel--activer');
 carrouselFond.classList.add('carrousel--activer')
 AjouterLesImagesDeLaGalerie()
})

/* ----------------------------------------------------  fermer la boîte modale */
carrouselX.addEventListener('mousedown', function(){
  console.log('fermer la boîte')
carrousel.classList.remove('carrousel--activer');
carrouselFond.classList.remove('carrousel--activer')
 })

 /* -------------------------------------------------------  ajouter des images */
function AjouterLesImagesDeLaGalerie() {

  for (const elt of galerieImg) {
    let img = document.createElement("img")
    img.classList.add("carrousel__img")
    img.src =elt.src
    console.log(img.src)
    carrouselFigure.appendChild(img)
  }

}


})()
