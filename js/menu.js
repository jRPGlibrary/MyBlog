// Récupérer la section du menu
const socialMenu = document.getElementById("social_menu");

// Fonction pour afficher le menu
function showMenu() {
  socialMenu.style.right = "10px"; // Déplace le menu vers l'intérieur de la page
}

// Fonction pour masquer le menu
function hideMenu() {
  socialMenu.style.right = "-100px"; // Remet le menu à l'extérieur du bord droit de la page
}

// Ajouter des écouteurs d'événements pour surveiller le mouvement de la souris
document.addEventListener("mousemove", (e) => {
  // Récupérer la position de la souris par rapport à la largeur de la fenêtre
  const mouseX = e.clientX;
  const windowWidth = window.innerWidth;

  // Vérifier si la souris est proche du bord droit de la fenêtre
  if (mouseX >= windowWidth - 50) {
    showMenu(); // Afficher le menu lorsque la souris est proche du bord droit
  } else {
    hideMenu(); // Masquer le menu lorsque la souris n'est pas proche du bord droit
  }
});

document.querySelector(".menu-burger").addEventListener("click", function () {
  document.querySelector("#Header_Nav ul").classList.toggle("show");
});
