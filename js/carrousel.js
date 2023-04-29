(function() {

let carrouselOuvrir = document.querySelector(".carrousel__ouvrir");
let carrousel = document.querySelector(".carrousel");
let carrouselX = document.querySelector(".carrousel__x");
let carrouselFigure = document.querySelector(".carrousel__figure");
let carrouselForm = document.querySelector(".carrousel__form");

let galerie = document.querySelector(".galerie");
let galerieImg = galerie.querySelectorAll("img");

/* ----------------------------------------------------  ouvrir la boîte modale */
carrouselOuvrir.addEventListener('mousedown', function(){
index=0;
carrousel.classList.add('carrousel--activer');
AfficherImageCarrousel();
})

/* ----------------------------------------------------  fermer la boîte modale */
carrouselX.addEventListener('mousedown', function(){
  console.log('fermer la boîte')
carrousel.classList.remove('carrousel--activer');
 })


 /**********
 *************************  Pour chaque image de la galerie l'ajouter dans le carrousel */

  // Variables pour la position des boutons radios et pour faire avancer les images du carrousel
  let position = 0;
  let index = 0;
  let ancienIndex = null;
 
/* -- boucle qui permet construire le carrousel */
  for (const elt of galerieImg) {
    elt.dataset.index = position;
    /* en cliquant sur une image de la galerie */
    elt.addEventListener('mousedown', function(e) {
        /*
         avant d'ouvrir la boîte modale il faut vérifier si elle n'est pas déjà ouverte
         https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/

         la fonction contains() vous permettra de faire cette vérification
         */
      index=e.target.dataset.index;
      AfficherImageCarrousel();
    })
    AjouterUneImageDansCaroussel(elt);
    AjouterUnRBoutonRadio();
  }


/**
 * Création dynamique d'une image pour le carousel
 * @param {*} elt une image de la galerie
 */

function AjouterUneImageDansCaroussel(elt) {

  let img = document.createElement("img")
    img.classList.add("carrousel__img")
    img.src =elt.src
    //console.log(img.src)
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
    AfficherImageCarrousel();
  })

  position = position+1;
  carrouselForm.append(rad);
}
/** 
* Afficher la nouvelle image du carrousel
*/

function AfficherImageCarrousel() {
  if (ancienIndex != null) {
    carrouselFigure.children[ancienIndex].style.opacity="0";
  //  carrouselFigure.children[ancienIndex].classList.remove('carrousel__img--active')
  }
  carrouselFigure.children[index].style.opacity="1";
  //  carrouselFigure.children[index].classList.add('carrousel__img--active')

  ancienIndex = index;
}

})()
