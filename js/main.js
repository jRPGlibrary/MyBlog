window.onload = function() {
  // Obtention de la date actuelle
  var currentDate = new Date();

  // Dates de publication des articles (dans l'ordre chronologique)
  var postDates = [
    new Date("2023-06-24"),
    new Date("2023-06-22"),
    new Date("2023-06-22"),
    new Date("2023-06-10")
  ];

  // Calcul du nombre de jours écoulés depuis la publication de chaque article
  var daysSincePosts = postDates.map(function(postDate) {
    var timeDiff = Math.abs(currentDate.getTime() - postDate.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  });

  // Mettre à jour les éléments HTML avec les nombres de jours
  for (var i = 0; i < daysSincePosts.length; i++) {
    var postId = "daysSincePost" + (i + 1);
    document.getElementById(postId).innerHTML =
      daysSincePosts[i] + " jours";
  }
  
  // Mettre à jour les noms des auteurs
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