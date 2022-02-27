// Button "To The Top" - Bouton "Retour en haut de page"
var btnToTheTop = document.getElementsByClassName("myBtn")[0];

// When the user scrolls down 300px from the top of the document, show the button - Quand l'utilisateur scroll de 300px vers le bas par rapport au début de la page, on fait apparaitre le bouton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btnToTheTop.style.display = "block";
  } else {
    btnToTheTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document - Quand l'utilisateur clic sur le bouton, il revient au début de la page
btnToTheTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/***********************************************************************/
