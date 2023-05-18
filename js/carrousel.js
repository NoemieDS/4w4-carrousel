(function () {
  //let carrouselOuvrir = document.querySelector(".carrousel__ouvrir");
  let carrousel = document.querySelector(".carrousel"),
    carrouselX = document.querySelector(".carrousel__x"),
    carrouselFigure = document.querySelector(".carrousel__figure"),
    carrouselForm = document.querySelector(".carrousel__form"),
    visuelFlecheGauche = document.querySelector(".carrousel__fleche_gauche"),
    visuelFlecheDroite = document.querySelector(".carrousel__fleche_droite");

  let galerie = document.querySelector(".galerie");
  let galerieImg = galerie.querySelectorAll("img");

  // Variables pour la position des boutons radios et pour faire avancer les images du carrousel
  let position = 0;
  let index = 0;
  let ancienIndex = null;

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
    document.removeEventListener("keydown", surveillerTouche);
  });

  /**********
   *************************  Pour chaque image de la galerie l'ajouter dans le carrousel */
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

      /* On met un écouteur sur les touches du clavier */
      document.addEventListener("keydown", surveillerTouche);

      index = e.target.dataset.index;
      carrouselForm.children[index].checked = true;
      afficherImageCarrousel();
      visuelFlecheGauche.addEventListener("mousedown", reculerImage);
      visuelFlecheDroite.addEventListener("mousedown", avancerImage);
    });
    ajouterUneImageDansCaroussel(elt);
    ajouterUnBoutonRadio();
  }

  /**
   * Création dynamique d'une image pour le carousel
   * @param {*} elt une image de la galerie
   */

  function ajouterUneImageDansCaroussel(elt) {
    // On enlève 12 caractères au nom de fichier pour charger la version originale
    //Et pas les 150x150.jpg
    //SI LES NOMS SONT COUPÉS, LE CARROUSEL N'AURA PAS D'IMAGES DANS LE CONTEXTE
    // D'UNE GALERIE FAITE AVEC UN WIDGET
/*
    let elImg = `<img src=${
      elt.src.substr(0, elt.src.length - 12) + ".jpg"
    } class="carrousel__img" alt="">`;*/

    let elImg = `<img src=${elt.src} class="carrousel__img" alt="">`;


    carrouselFigure.insertAdjacentHTML("beforeend", elImg);
  }

  /**
   * Afficher la nouvelle image du carrousel
   */
  function afficherImageCarrousel() {
    if (ancienIndex != null) {

  carrouselFigure.children[ancienIndex].style.opacity = "0";
  // carrouselFigure.children[ancienIndex].classList.remove('carrousel__img--activer');

      carrouselForm.children[ancienIndex].checked = false 
    }


  carrouselFigure.children[index].style.opacity = "1";
  //carrouselFigure.children[index].classList.add('carrousel__img--activer');


   carrouselForm.children[index].checked = true
    ancienIndex = index;

    //console.log(carrouselFigure.children[index].naturalWidth);
    //console.log(carrouselFigure.children[index].naturalHeight);

    let imgWidth = carrouselFigure.children[index].naturalWidth,
      imgHeight = carrouselFigure.children[index].naturalHeight,
      ratio = `${(imgWidth / imgHeight) * 100}%`;

    document.documentElement.style.setProperty("--ratio", ratio);
  }

  /**
   * Fonction pour ajouter des boutons radio
   * et avancer les images
   */

  function ajouterUnBoutonRadio() {
    let rad = document.createElement("input");
    rad.setAttribute("type", "radio");
    rad.setAttribute("name", "carrousel__rad");
    rad.classList.add("carrousel__rad");
    rad.dataset.index = position;
    rad.addEventListener("mousedown", function () {
      // console.log(this.dataset.index);
      index = this.dataset.index;
      afficherImageCarrousel();
    });

    position = position + 1;
    carrouselForm.append(rad);
  }

  /**
   * Fonctions pour faire avancer ou reculer les images avec les touches du clavier
   */

  function surveillerTouche(event) {
    // event = event || window.event;
    if (event.keyCode == 37 || event.keyCode == 65) {
      //flèche gauche ou A
      reculerImage();
    } else if (event.keyCode == 39 || event.keyCode == 68) {
      //flèche droite ou D
      avancerImage();
    }
  }

  function reculerImage() {
    index--;
    if (index < 0) {
      index = position - 1;
    }
    afficherImageCarrousel();
    carrouselForm.children[index].checked = true;
  }

  function avancerImage() {
    index++;
    if (index > position - 1) {
      index = 0;
    }
    afficherImageCarrousel();
    carrouselForm.children[index].checked = true;
  }
})();
