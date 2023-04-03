<?php
/*
  * Plugin name: Carrousel Noémie da Silva
  * Description: cette extension carrousel permettra d'afficher dans une boîte modale animée les images d'une galerie
  * Version: 1.0
  * Author: Noémie da Silva, d'après Eddy Martin
  * Author URI: https://github.com/NoemieDS/4w4-carrousel
  */

  
  function mon_enqueue_css_js() {
        
    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(   'nds_plugin_carrousel_css',
    plugin_dir_url(__FILE__) . "style.css",
    array(),
    $version_css);

   wp_enqueue_script(  'nds_plugin_carrousel_js',
   plugin_dir_url(__FILE__) ."js/carrousel.js",
   array(),
   $version_js,
   true); //permet d'ajouter le JS à la fin de la page

  }

  add_action('wp_enqueue_scripts', 'mon_enqueue_css_js');

  function creation_carrousel() {
    return ('<button id="carrousel__ouvrir">Ouvrir le carrousel</button>
    <div class="carrousel">
    <button class="carrousel__x"> X </button>
    <figure class="carrousel__figure"></figure>
    <form class="carrousel__form"></form>
    </div> <!-- Fin du carrousel -->'
  );
  }
  add_shortcode('nds_carrousel', 'creation_carrousel');
  ?>
