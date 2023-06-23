window.onload = function () {
  // Dates de publication des articles
  var post1Date = new Date("2023-06-15"); // Remplacez avec votre propre date
  var post2Date = new Date("2023-06-15"); // Remplacez avec votre propre date
  var post3Date = new Date("2023-06-15"); // Remplacez avec votre propre date
  var post4Date = new Date("2023-06-15"); // Remplacez avec votre propre date

  // Calcul du nombre de jours écoulés depuis la publication de chaque article
  var currentDate = new Date();
  var timeDiff1 = Math.abs(currentDate.getTime() - post1Date.getTime());
  var timeDiff2 = Math.abs(currentDate.getTime() - post2Date.getTime());
  var timeDiff3 = Math.abs(currentDate.getTime() - post3Date.getTime());
  var timeDiff4 = Math.abs(currentDate.getTime() - post4Date.getTime());

  var daysSincePost1 = Math.ceil(timeDiff1 / (1000 * 3600 * 24));
  var daysSincePost2 = Math.ceil(timeDiff2 / (1000 * 3600 * 24));
  var daysSincePost3 = Math.ceil(timeDiff3 / (1000 * 3600 * 24));
  var daysSincePost4 = Math.ceil(timeDiff4 / (1000 * 3600 * 24));

  // Mettre à jour les éléments HTML avec les nombres de jours
  document.getElementById("daysSincePost1").innerHTML =
    daysSincePost1 + " jours";
  document.getElementById("daysSincePost2").innerHTML =
    daysSincePost2 + " jours";
  document.getElementById("daysSincePost3").innerHTML =
    daysSincePost3 + " jours";
  document.getElementById("daysSincePost4").innerHTML =
    daysSincePost4 + " jours";

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
