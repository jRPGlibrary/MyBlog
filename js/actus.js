var nb_actus_page = 10;
var index_page = 0;
var max_index_page = Math.floor(actus_liste.length / nb_actus_page);

function duree(date) {
  var now = new Date();
  var difference = now.getTime() - date.getTime();
  var minutes = Math.floor(difference / (1000 * 60));
  var heures = Math.floor(minutes / 60);
  var jours = Math.floor(heures / 24);
  var semaines = Math.floor(jours / 7);
  var mois = Math.floor(jours / 30);
  var annees = Math.floor(jours / 365);
  if (annees == 1) {
    return "Il y a 1 an";
  } else if (annees > 1) {
    return "Il y a " + annees + " ans";
  } else if (mois > 0) {
    return "Il y a " + mois + " mois";
  } else if (semaines == 1) {
    return "Il y a 1 semaine";
  } else if (semaines > 1) {
    return "Il y a " + semaines + " semaines";
  } else if (jours == 1) {
    return "Hier";
  } else if (jours > 1) {
    return "Il y a " + jours + " jours";
  } else if (heures == 1) {
    return "Il y a 1 heure";
  } else if (heures > 1) {
    return "Il y a " + heures + " heures";
  } else if (minutes > 1) {
    return "Il y a " + minutes + " minutes";
  } else {
    return "Maintenant";
  }
}

function add_actu(actu) {
  document.getElementById("Actus_Container").insertAdjacentHTML(
    "afterbegin",
    `<div class="Infos_Container">
            <div class="Infos_ActusImage">
                <!-- Ici l'image de l'actu -->
                <img src=${actu["image"]} alt="Image ${actu["name"]}">
            </div>

            <!-- Ici l'ensemble du bloc Actus -->
            <div class="Infos_ActusTexte">
                <div class="Infos_Author">Nom de l'autheur: ${actu["author"]}</div>
                <a href=${actu["page"]}>
                    <div class="Infos_Title">${actu["title"]}</div>
                </a>
                <div class="Infos_Description">${actu["infos"]}</div>

                <div class="Infos_ReadMore">
                    <a href=${actu["page"]}>Lire la suite</a>
                </div>
            </div>
        </div>
        <div class="Infos_Border"></div>`
  );
}

function page_actu(actus_liste) {
  var debut = actus_liste.length - 1 - nb_actus_page * index_page;
  if (debut + 1 < nb_actus_page) {
    for (var i = debut; i >= 0; i--) {
      add_actu(actus_liste[i]);
    }
  } else if (debut + 1 >= nb_actus_page) {
    for (var i = debut; i >= debut - nb_actus_page; i--) {
      add_actu(actus_liste[i]);
    }
  } else {
    return;
  }
}

page_actu(actus_liste);
console.log(duree(actus_liste[0]["date"]));
console.log(duree(actus_liste[1]["date"]));
