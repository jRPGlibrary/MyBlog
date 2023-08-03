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

function applyDarkMode() {
	document.documentElement.style.setProperty("--current-mode", "dark");
	document.documentElement.style.setProperty("--background", "#18191a");
	document.documentElement.style.setProperty("--header-color", "#242526");
	document.documentElement.style.setProperty("--footer-color", "#242526");
	document.documentElement.style.setProperty("--text-color", "white");
	document.documentElement.style.setProperty("--header-footer-border", "0");
  document.documentElement.style.setProperty("--opposite-mode", "light");
	document.documentElement.style.setProperty("--opposite-background", "#f0f0f0");
	document.documentElement.style.setProperty("--opposite-header-color", "#f0f0f0");
	document.documentElement.style.setProperty("--opposite-footer-color", "#f0f0f0");
	document.documentElement.style.setProperty("--opposite-text-color", "black");
	document.documentElement.style.setProperty("--opposite-header-footer-border", "3px");
}

function applyLightMode() {
	document.documentElement.style.setProperty("--current-mode", "light");
	document.documentElement.style.setProperty("--background", "#f0f0f0");
	document.documentElement.style.setProperty("--header-color", "#f0f0f0");
	document.documentElement.style.setProperty("--footer-color", "#f0f0f0");
	document.documentElement.style.setProperty("--text-color", "black");
	document.documentElement.style.setProperty("--header-footer-border", "3px");
  document.documentElement.style.setProperty("--opposite-mode", "dark");
	document.documentElement.style.setProperty("--opposite-background", "#18191a");
	document.documentElement.style.setProperty("--opposite-header-color", "#242526");
	document.documentElement.style.setProperty("--opposite-footer-color", "#242526");
	document.documentElement.style.setProperty("--opposite-text-color", "white");
	document.documentElement.style.setProperty("--opposite-header-footer-border", "0");
}

const mode_toggle=document.getElementById("mode_toggle")
mode_toggle.addEventListener("change", () => {
  if (mode_toggle.checked) {
    applyLightMode();
  } else {
    applyDarkMode();
  }
});