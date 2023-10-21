function affiche_date(date) {
  const mois = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const zero = ["0", ""];
  const heure = date.getHours();
  const minute = date.getMinutes();
  return (
    date.getDate() +
    " " +
    mois[date.getMonth()] +
    " " +
    date.getFullYear() +
    " à " +
    zero[heure.toString().length - 1] +
    heure +
    ":" +
    zero[minute.toString().length - 1] +
    minute
  );
}

function read_time() {
  const text = document.getElementsByTagName("p");
  let nb_mots = 0;
  for (let i = 0; i < text.length; i++) {
    nb_mots = nb_mots + text[i].innerHTML.split(" ").length;
  }
  const temps_lecture = nb_mots / 250;
  if (temps_lecture < 0.8) {
    return "environ 1 mn";
  } else {
    return Math.round(temps_lecture) + " mn";
  }
}

function article_infos(actus_liste) {
  const index = parseInt(
    document.getElementsByClassName("Article_Container")[0].dataset.index
  );
  const Main_Image = document.getElementById("main_image");
  Main_Image.innerHTML = `<img alt="${actus_liste[index]["name"]}" src="${actus_liste[index]["image"]}">`;
  const Infos_Plateformes = 
    document.getElementsByClassName("Infos_Plateformes")[0];
  Infos_Plateformes.innerHTML = plateformes(actus_liste[index]["plateformes"]);
  const Infos_Date = document.getElementsByClassName("Infos_Date")[0];
  Infos_Date.innerHTML =
    '<img class="Info_Icon" alt="Date" src="../../../images/calendar.png"> ' +
    " Publié le " +
    affiche_date(actus_liste[index]["date"]);
  const Infos_Temps = document.getElementsByClassName("Infos_Temps")[0];
  Infos_Temps.innerHTML =
    '<img class="Info_Icon" alt="Durée" src="../../../images/clock.png"> ' +
    " Lecture " +
    read_time();
  const Infos_Auteur = document.getElementsByClassName("Infos_Auteur")[0];
  Infos_Auteur.innerHTML =
    '<img class="Info_Icon" alt="Auteur" src="../../../images/author.png">' +
    " Par " +
    actus_liste[index]["author"];
  const Title = document.getElementsByClassName("Title_Game")[0];
  Title.innerHTML = actus_liste[index]["title"];
}