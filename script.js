$(document).ready(function () {
  // Gérer les clics sur les liens de la navigation
  $("nav ul li a").click(function () {
    // Récupérer l'ID de la section correspondante
    var section_id = $(this).attr("href");

    // Vérifier si la section correspondante est déjà visible
    if ($(section_id).is(":visible")) {
      // Si oui, la masquer avec un effet de transition
      $(section_id).slideUp(1800);

      // Supprimer la classe "active" du lien cliqué
      $(this).removeClass("active");
    } else {
      // Sinon, masquer toutes les autres sections sauf celle correspondante avec un effet de transition
      $(".section")
        .not(section_id)
        .slideUp(1800, function () {
          $(section_id).slideDown(1800);
        });

      // Ajouter la classe "active" au lien cliqué et la supprimer des autres liens
      $("nav ul li a").removeClass("active");
      $(this).addClass("active");
    }

    // Empêcher la navigation vers la section correspondante
    return false;
  });

  // Masquer toutes les sections sauf la première au chargement de la page
  $(".section").not(":first").hide();
});


// // Ce code est une fonction JavaScript qui est déclenchée lorsqu'une page HTML est complètement chargée (c'est-à-dire lorsque le document est prêt).
//  La méthode "ready" du document permet d'attendre que le DOM soit chargé avant d'exécuter le code qui suit.

// // Le code gère les clics sur les liens de la navigation d'une page. Il utilise jQuery pour sélectionner les éléments du DOM et manipuler le HTML et le CSS.

// // Voici ce que fait le code :
// j'ai utilisé la méthode is() pour vérifier si la section est visible. Si la section est visible, la méthode renvoie true, sinon elle renvoie false.
// // Sélectionne tous les liens dans la liste de navigation (qui est un élément de l'HTML représenté par "nav ul li a").

// // Lorsqu'un lien est cliqué, il récupère l'ID de la section correspondante (représenté par "var section_id = $(this).attr("href");"). 
// Cela permet d'identifier quelle section de la page doit être affichée.

// // Il cache toutes les sections sauf celle correspondante avec un effet de transition. Cela est fait en utilisant la méthode "slideUp" de jQuery pour masquer 
// toutes les sections qui ne correspondent pas à l'ID récupéré, puis la méthode "slideDown" pour afficher la section correspondante.

// // Il ajoute la classe "active" au lien cliqué et supprime la classe "active" des autres liens. Cela permet de mettre en évidence le lien actuellement sélectionné dans la navigation.

// // Il empêche la navigation vers la section correspondante. Cela est fait en retournant la valeur "false" dans la fonction de rappel, 
// ce qui empêche le navigateur de suivre le lien et de naviguer vers une autre page.

// // En résumé, ce code permet de créer une navigation à onglets qui affiche les différentes sections d'une page avec des transitions d'animation fluides lorsqu'on clique
//  sur les différents onglets.