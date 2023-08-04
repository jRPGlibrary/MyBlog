const nb_actus_page = 10;
const max_index_page = Math.ceil(actus_liste.length / nb_actus_page)-1;

function getPageIndexFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('page')) || 0;
}

function duree(date) {
  const now = new Date();
  const difference = now.getTime() - date.getTime();
  const minutes = Math.floor(difference / (1000 * 60));
  const heures = Math.floor(minutes / 60);
  const jours = Math.floor(heures / 24);
  const semaines = Math.floor(jours / 7);
  const mois = Math.floor(jours / 30);
  const annees = Math.floor(jours / 365);
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

function marque_plateforme(plateforme) {
	const nintendo_plateformes=["NES","GB","SNES","GBC","N64","GBA","GC","DS","Wii","3DS","Wii U","Switch"];
	const sony_plateformes=["PS1","PS2","PS3","PS4","PS5","PSP","PS Vita"];
	const microsoft_plateformes=["Xbox","Xbox 360","Xbox One","Xbox Series"];
	const sega_plateformes=["MS","Mega Drive","Game Gear","Saturn","Dreamcast"];
	if (plateforme=="PC") {return "PC"}
	else if (nintendo_plateformes.includes(plateforme)) {return "Nintendo"}
	else if (sony_plateformes.includes(plateforme)) {return "Sony"}
	else if (microsoft_plateformes.includes(plateforme)) {return "Microsoft"}
	else if (sega_plateformes.includes(plateforme)) {return "Sega"}
	else {return "Divers"}
}

function plateformes(liste_plateformes) {
	let html_plateformes="";
	for (i=0;i<liste_plateformes.length;i++) {
		html_plateformes=html_plateformes+'<li class="Cadre_'+marque_plateforme(liste_plateformes[i])+'">'+liste_plateformes[i]+'</li>';
	}
	return html_plateformes;
}

function add_actu(actu) {
    document.getElementById("Actus_Container").insertAdjacentHTML(
      "beforeend",
      `<div class="Infos_Container">
            <div class="Infos_ActusImage">
                <!-- Ici l'image de l'actu -->
                <a href=${actu["page"]}><img src=${actu["image"]} alt="Image ${actu["name"]}"></a>
            </div><br>
            <!-- Ici l'ensemble du bloc Actus -->
			<ul class="Infos_Plateformes">${plateformes(actu["plateformes"])}</ul>
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
  const debut = index_page*nb_actus_page;
  for (let i = debut; (i <= (debut + nb_actus_page - 1) & i <= actus_liste.length-1); i++) {
    add_actu(actus_liste[i]);
  }
  pagination(Math.ceil(actus_liste.length / nb_actus_page)-1);
}

function change_page (index_page,max_index_page,nb_actus_page,actus_liste) {
	if (index_page>max_index_page) {
		index_page=max_index_page;
	}
	document.getElementById("Actus_Container").innerHTML="";
	document.getElementById("Pagination_Container").innerHTML="";
	document.getElementById("Actus_Container").dataset.indexPage=index_page;
	page_actu(actus_liste,nb_actus_page,index_page);
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function pagination (max_index_page) {
	const index_page = parseInt(document.getElementById("Actus_Container").dataset.indexPage);
	const max_index_gap = 3;
	const pagination_container = document.getElementById("Pagination_Container");
	if (index_page>0) {
		pagination_container.insertAdjacentHTML("beforeend",
		`<a href="?page=0" id='bgnBtn'>&lt;&lt;</a>
		<a href="?page=${index_page-1}" id='prevBtn'>&lt;</a>`);
		if (index_page-max_index_gap>0) {
			pagination_container.insertAdjacentHTML("beforeend",
			"<a id='ellipsisPrevBtn'>...</a>");
		}
		for (let i=max_index_gap; i>0; i--) {
			if (index_page-i>=0) {
				pagination_container.insertAdjacentHTML("beforeend",
				'<a href="?page='+(index_page-i).toString()+'" id="i-'+i+'Btn">'+(index_page+1-i).toString()+'</a>');
			}
		}
	}
	if (max_index_page>0) {
		pagination_container.insertAdjacentHTML("beforeend",
		'<a href="?page='+index_page+'" id="iBtn">'+(index_page+1).toString()+'</a>');
	}
	if (index_page<max_index_page) {
		for (let i = 1; (i<=max_index_gap & max_index_page>=(index_page+i)); i++) {
			pagination_container.insertAdjacentHTML("beforeend",
			'<a href="?page='+(index_page+i).toString()+'" id="i+'+i+'Btn">'+(index_page+1+i).toString()+'</a>');
		}
		if (index_page+max_index_gap<max_index_page) {
			pagination_container.insertAdjacentHTML("beforeend",
			"<a id='ellipsisNextBtn'>...</a>");
		}
		pagination_container.insertAdjacentHTML("beforeend",
		`<a href="?page=${index_page+1}" id='nextBtn'>&gt;</a>
		<a href="?page=${max_index_page}" id='endBtn'>&gt;&gt;</a>`);
	}
}

window.addEventListener('popstate', function () {
  change_page(getPageIndexFromURL(),max_index_page,nb_actus_page,actus_liste);
});