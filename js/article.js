function metadonnees (actu) {
    document.getElementsByTagName("head")[0].insertAdjacentHTML(
        "beforeend",
        `<!-- HTML Meta Tags -->
        <title>- Actus - ${actu["date"].getFullYear()} / ${actu["title"]}</title>
        <meta name="description"
            content="${actu["description"]}">
        <!-- Open Graph Meta Tags ( Facebook / Discord ) -->
        <meta property="og:url" content="${actu["url"]}">
        <meta property="og:site_name" content="jRPGLibrary">
        <meta property="og:type" content="article">
        <meta property="og:title"
            content="${actu["title"]}">
        <meta property="og:description"
            content="${actu["description"]}">
        <meta property="og:image"
            content="${actu["image"]}">
        <meta property="og:image:alt 
            content="Image de ${actu["name"]}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="675">
        <meta property="og:locale" content="fr_FR">
    
        <!-- Twitter Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="jRPGLibrary.com">
        <meta name="twitter:title"
            content="${actu["title"]}">
        <meta name="twitter:description"
            content="${actu["description"]}">
        <meta name="twitter:image" content="${actu["image"]}">
        <meta property="twitter:url" content="${actu["url"]}">
        
        <!-- Meta Tags Generated via https://www.opengraph.xyz -->`
    )
}

function affiche_date(date) {
    const mois=["janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const zero=["0",""];
    const heure=date.getHours();
    const minute=date.getMinutes();
    return ("Posté le "+date.getDate()+" "+mois[date.getMonth()]+" "+date.getFullYear()+" à "+zero[heure.toString().length-1]+heure+":"+zero[minute.toString().length-1]+minute);
}

function read_time() {
    const text=document.getElementsByTagName("p");
    let nb_mots=0;
    for (let i=0;i<text.length;i++) {
        nb_mots=nb_mots+text[i].innerHTML.split(" ").length;
    }
    const temps_lecture=nb_mots/250;
    if (temps_lecture<1) {
        return "Moins d'une minute";
    }
    else if (Math.round(temps_lecture)==1) {
        return "Une minute";
    }
    else {
        return Math.round(temps_lecture)+" minutes";
    }
}

console.log(read_time())

function article_widget () {
    const index = parseInt(document.getElementsByClassName("Article_Container")[0].dataset.index)
    const Infos_Plateformes = document.getElementsByClassName("Infos_Plateformes")[0];
    Infos_Plateformes.innerHTML = plateformes(actus_liste[index]["plateformes"]);
    const Infos_Date = document.getElementsByClassName("Infos_Date")[0];
    Infos_Date.innerHTML = affiche_date(actus_liste[index]["date"]);
    const Infos_Temps = document.getElementsByClassName("Infos_Temps")[0];
    Infos_Temps.innerHTML = "Temps de lecture : "+read_time();
}