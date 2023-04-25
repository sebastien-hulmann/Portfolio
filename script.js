$(document).ready(function () {
  // Gérer les clics sur les liens de la navigation
  $("nav ul li a").click(function () {
    // Récupérer l'ID de la section correspondante
    var section_id = $(this).attr("href");

    // Vérifier si la section correspondante est déjà visible
    if ($(section_id).is(":visible")) {
      // Si oui, la masquer avec un effet de transition
      $(section_id).slideUp(1500);

      // Supprimer la classe "active" du lien cliqué
      $(this).removeClass("active");
    } else {
      // Sinon, masquer toutes les autres sections sauf celle correspondante avec un effet de transition
      $(".section")
        .not(section_id)
        .slideUp(1500, function () {
          $(section_id).slideDown(1500);
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
