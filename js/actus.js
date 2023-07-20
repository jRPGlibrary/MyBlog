var nb_actus_page = 10;
var index_page = 0;
var max_index_page = Math.ceil(actus_liste.length / nb_actus_page)-1;
var liste_class_plateformes=["Switch"]

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
    return "Depuis 1 an";
  } else if (annees > 1) {
    return "Depuis " + annees + " ans";
  } else if (mois > 0) {
    return "Depuis " + mois + " mois";
  } else if (semaines == 1) {
    return "Depuis 1 semaine";
  } else if (semaines > 1) {
    return "Depuis " + semaines + " semaines";
  } else if (jours == 1) {
    return "Hier";
  } else if (jours > 1) {
    return "Depuis " + jours + " jours";
  } else if (heures == 1) {
    return "Depuis 1 heure";
  } else if (heures > 1) {
    return "Depuis " + heures + " heures";
  } else if (minutes > 1) {
    return "Depuis " + minutes + " minutes";
  } else {
    return "Maintenant";
  }
}

function plateformes(liste_plateformes,liste_class_plateformes) {
	var html_plateformes="";
	for (i=0;i<liste_plateformes.length;i++) {
		if (liste_plateformes[i] in liste_class_plateformes) {
			var html_plateformes=html_plateformes+'<div class="Cadre_'+liste_plateformes[i].replace(" ","_")+'">'+liste_plateformes[i]+'</div>';
		}
		else {
			var html_plateformes=html_plateformes+'<div class="Cadre_Divers">'+liste_plateformes[i]+'</div>';
		}
	}
	return html_plateformes
}

function add_actu(actu) {
    document.getElementById("Actus_Container").insertAdjacentHTML(
      "beforeend",
      `<div class="Infos_Container">
            <div class="Infos_ActusImage">
                <!-- Ici l'image de l'actu -->
                <img src=${actu["image"]} alt="Image ${actu["name"]}">
            </div>
            <!-- Ici l'ensemble du bloc Actus -->
			<div class="Infos_Plateformes">${plateformes(actu["plateformes"],liste_class_plateformes)}</div>
            <div class="Infos_ActusTexte">
                <div class="Infos_Author">Posté par : ${actu["author"]}
                <div class="Infos_Date">${duree(actu["date"])}</div>
                </div>
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

function page_actu(actus_liste,nb_actus_pages,index_page) {
  var debut = index_page*nb_actus_page;
  if (debut + nb_actus_page < actus_liste.length) {
    for (var i = debut; i <= (debut + nb_actus_page - 1) ; i++) {
      add_actu(actus_liste[i]);
    }
  } else if (debut + nb_actus_page >= actus_liste.length) {
    for (var i = debut; i <= actus_liste.length-1; i++) {
      add_actu(actus_liste[i]);
    }
  } else {
    return;
  }
}

function change_page (index_page,max_index_page,nb_actus_page) {
	if (index_page>max_index_page) {
		var index_page=max_index_page;
	}
	document.getElementById("Actus_Container").innerHTML="";
	page_actu(actus_liste,nb_actus_page,index_page);
}

page_actu(actus_liste,nb_actus_page,index_page);
