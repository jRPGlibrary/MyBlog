window.onload = function () {
  var post1Date = new Date("2023-06-15"); // Date de publication du premier article (remplacez avec votre propre date)
  var post2Date = new Date("2023-06-15"); // Date de publication du deuxième article (remplacez avec votre propre date)
  var post3Date = new Date("2023-06-15"); // Date de publication du troisième article (remplacez avec votre propre date)
  var post4Date = new Date("2023-06-15"); // Date de publication du quatrième article (remplacez avec votre propre date)

  var currentDate = new Date();
  var timeDiff1 = Math.abs(currentDate.getTime() - post1Date.getTime());
  var timeDiff2 = Math.abs(currentDate.getTime() - post2Date.getTime());
  var timeDiff3 = Math.abs(currentDate.getTime() - post3Date.getTime());
  var timeDiff4 = Math.abs(currentDate.getTime() - post4Date.getTime());

  var daysSincePost1 = Math.ceil(timeDiff1 / (1000 * 3600 * 24));
  var daysSincePost2 = Math.ceil(timeDiff2 / (1000 * 3600 * 24));
  var daysSincePost3 = Math.ceil(timeDiff3 / (1000 * 3600 * 24));
  var daysSincePost4 = Math.ceil(timeDiff4 / (1000 * 3600 * 24));

  document.getElementById("daysSincePost1").innerHTML =
    daysSincePost1 + " jours";
  document.getElementById("daysSincePost2").innerHTML =
    daysSincePost2 + " jours";
  document.getElementById("daysSincePost3").innerHTML =
    daysSincePost3 + " jours";
  document.getElementById("daysSincePost4").innerHTML =
    daysSincePost4 + " jours";

  // Update the author names
  document.querySelector("#NewsHeader_Border1 .authorName").innerHTML =
    "jRPG_Library";
  document.querySelector("#NewsHeader_Border2 .authorName").innerHTML =
    "jRPG_Library";
  document.querySelector("#NewsHeader_Border3 .authorName").innerHTML =
    "jRPG_Library";
  document.querySelector("#NewsHeader_Border4 .authorName").innerHTML =
    "jRPG_Library";
  document.querySelector("#LastNews_Content .authorName").innerHTML =
    "jRPG_Library";
};

// Récupérez la section du menu
const socialMenu = document.getElementById("social_menu");

// Définissez la fonction pour afficher le menu
function showMenu() {
  socialMenu.style.right = "10px"; // Déplacez le menu à l'intérieur de la page
}

// Définissez la fonction pour masquer le menu
function hideMenu() {
  socialMenu.style.right = "-100px"; // Remettez le menu à l'extérieur du bord droit de la page
}

// Ajoutez des écouteurs d'événements pour surveiller le mouvement de la souris
document.addEventListener("mousemove", (e) => {
  // Récupérez la position de la souris par rapport à la largeur de la fenêtre
  const mouseX = e.clientX;
  const windowWidth = window.innerWidth;

  // Vérifiez si la souris est proche du bord droit de la fenêtre
  if (mouseX >= windowWidth - 10) {
    showMenu(); // Affichez le menu lorsque la souris est proche du bord droit
  } else {
    hideMenu(); // Masquez le menu lorsque la souris n'est pas proche du bord droit
  }
});

document.querySelector(".menu-burger").addEventListener("click", function () {
  document.querySelector("#Header_Nav ul").classList.toggle("show");
});


new Twitch.Embed("Twitch_Embed", {
  width: 1100,
  height: 480,
  channel: "jRPG_Library",
});


$(document).ready(function () {
  $(".NewsHeaderCards").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});