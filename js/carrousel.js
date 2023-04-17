(function() {
//console.log("Début du carrousel");

let carrouselOuvrir = document.querySelector(".carrousel__ouvrir");
let carrousel = document.querySelector(".carrousel");
let carrouselFond = document.querySelector(".carrousel_fond");
let carrouselX = document.querySelector(".carrousel__x");
let galerie = document.querySelector(".galerie");
let galerieImg = galerie.querySelectorAll("img");
let carrouselFigure = document.querySelector(".carrousel__figure");
let carrouselForm = document.querySelector(".carrousel__form");

 // Variables pour la position des boutons radios et pour faire avancer les images du carrousel
 let position = 0;
 let index = 0;
 let ancienIndex = null;

//console.log("Le bouton", carrouselOuvrir);
//console.log("Le carrousel", carrousel);
//console.log("Le carrousel_fond", carrouselFond);
//console.log(carrouselForm.tagName); //conteneur de radio-boutons

/* ----------------------------------------------------  ouvrir la boîte modale */
carrouselOuvrir.addEventListener('mousedown', function(){
//console.log('ouvrir la boîte')
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


 /**********
 *************************  Pour chaque image de la galerie, on ajoute une image */

function AjouterLesImagesDeLaGalerie() {

  for (const elt of galerieImg) {
    AjouterUneImageDansCaroussel(elt);
    AjouterUnRBoutonRadio();
  }
}

/**
 * Création dynamique d'une image pour le carousel
 * @param {*} elt une image de la galerie
 */

function AjouterUneImageDansCaroussel(elt) {

  let img = document.createElement("img")
    img.classList.add("carrousel__img")
    img.src =elt.src
    console.log(img.src)
    carrouselFigure.appendChild(img)
}

function AjouterUnRBoutonRadio() {
  let rad = document.createElement('input');
  rad.setAttribute('type', 'radio');
  rad.setAttribute('name', 'carrousel__rad');
  rad.classList.add('carrousel__rad');
  rad.dataset.index = position;
  rad.addEventListener('mousedown', function() {
    console.log(this.dataset.index);
    index = this.dataset.index;
    if (ancienIndex != null) {
      carrouselFigure.children[ancienIndex].style.opacity="0";
    }
    carrouselFigure.children[index].style.opacity="1";
    ancienIndex = index;

  })

  position = position+1;
  carrouselForm.appendChild(rad);
}

})()
