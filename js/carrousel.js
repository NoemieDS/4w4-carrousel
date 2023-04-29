(function () {
  //let carrouselOuvrir = document.querySelector(".carrousel__ouvrir");
  let carrousel = document.querySelector(".carrousel");
  let carrouselX = document.querySelector(".carrousel__x");
  let carrouselFigure = document.querySelector(".carrousel__figure");
  let carrouselForm = document.querySelector(".carrousel__form");

  let galerie = document.querySelector(".galerie");
  let galerieImg = galerie.querySelectorAll("img");

  let compteur = 0;

  /* ----------------------------------------------------  ouvrir la boîte modale 
-------- Avec le bouton / pour tester -----------------------------------------
carrouselOuvrir.addEventListener('mousedown', function(){
index=0;
carrousel.classList.add('carrousel--activer');
AfficherImageCarrousel();
})
*/


  /* ----------------------------------------------------  fermer la boîte modale */
  carrouselX.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--activer");
    compteur = 0;
  });

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
    elt.addEventListener("mousedown", function (e) {
      /*
      si le carrousel n'est pas déjà ouvert, il faut lui ajouter
      la classe "carrousel--activer"
      */
     
     if (!elt.classList.contains("carrousel--activer")) {
       carrousel.classList.add("carrousel--activer");
      }
      
      index = e.target.dataset.index;
      carrouselForm.children[index].checked = true;
      AfficherImageCarrousel();
      AjouterFlecheGauche();
      AjouterFlecheDroite();
    });
    AjouterUneImageDansCaroussel(elt);
    AjouterUnRBoutonRadio();
  }


  /**
   * Création dynamique d'une image pour le carousel
   * @param {*} elt une image de la galerie
   */

  function AjouterUneImageDansCaroussel(elt) {
    let img = document.createElement("img");
    img.classList.add("carrousel__img");
    img.src = elt.src;
    //console.log(img.src)
    carrouselFigure.appendChild(img);
    compteur++;
  }

  /**
   * Fonction pour ajouter des boutons radio
   * et avancer les images
   */
  function AjouterUnRBoutonRadio() {
    let rad = document.createElement("input");
    rad.setAttribute("type", "radio");
    rad.setAttribute("name", "carrousel__rad");
    rad.classList.add("carrousel__rad");
    rad.dataset.index = position;
    rad.addEventListener("mousedown", function () {
      // console.log(this.dataset.index);
      index = this.dataset.index;
      AfficherImageCarrousel();
    });

    position = position + 1;
    carrouselForm.append(rad);
  }

   /**
   * Fonction pour ajouter une flèche à droite
   * et reculer les images
   */
   function AjouterFlecheDroite() {
    let flecheDroite = document.createElement("div");
    flecheDroite.setAttribute("name", "carrousel__fleche_droite");
    flecheDroite.classList.add("carrousel__fleche_droite");
    flecheDroite.classList.add("fleche");
    flecheDroite.dataset.index = position;
    flecheDroite.addEventListener("mousedown", function () {
    index = this.dataset.index;
    console.log(this.dataset.index);
    AfficherImageCarrousel();
    });
    position = position + 1;
    carrouselForm.append(flecheDroite);
  /*  if ((index = compteur)) {
      position = compteur;
    }*/

  }

  /**
   * Fonction pour ajouter une flèche à gauche
   * et reculer les images
   */
  function AjouterFlecheGauche() {
    let flecheGauche = document.createElement("div");
    flecheGauche.setAttribute("name", "carrousel__fleche_gauche");
    flecheGauche.classList.add("carrousel__fleche_gauche");
    flecheGauche.classList.add("fleche");
    flecheGauche.dataset.index = position;
    flecheGauche.addEventListener("mousedown", function () {
    index = this.dataset.index;
    AfficherImageCarrousel();
    });
    position = position - 1;
    carrouselForm.append(flecheGauche);
   if ((index = -1)) {
      position = compteur;
    }

  }

 
  /**
   * Afficher la nouvelle image du carrousel
   */

  function AfficherImageCarrousel() {

    if (ancienIndex != null) {
      carrouselFigure.children[ancienIndex].style.opacity = "0";
    }
    carrouselFigure.children[index].style.opacity = "1";
    ancienIndex = index;
  }
})();
