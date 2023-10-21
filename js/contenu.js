function metadonnees(article) {
    document.getElementsByTagName("head")[0].insertAdjacentHTML(
      "beforeend",
      `  <!-- HTML Meta Tags -->
  <!-- Meta Tags pour Facebook / Discord -->
  <meta property="og:title" content="${article["title"]}">
  <meta property="og:description" content="${article["description"]}">
  <meta property="og:image" content="${article["image"]}">
  <meta property="og:url" content="${article["url"]}">
  <meta property="og:site_name" content="jRPGLibrary">
  <meta property="og:type" content="article">
  <meta property="og:locale" content="fr_FR">
  <meta property="article:author" content="${article["author"]}">
  <meta property="article:published_time" content="${article["date"]}">
            
  <!-- Meta Tags pour Twitter -->
  <meta name="twitter:title" content="${article["title"]}">
  <meta name="twitter:description" content="${article["description"]}">
  <meta name="twitter:image" content="${article["image"]}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:domain" content="jRPGLibrary.com">
  <meta name="twitter:creator" content="${article["author"]}">
  <meta name="twitter:created_at" content="${article["date"]}">
          
  <!-- Autres balises méta -->
  <title>- Actus - ${article["date"].getFullYear()} / ${article["title"]}</title>
  <meta name="description" content="${article["description"]}">\n`
    );
  }

function contenu_article(contenu,infos) {
    let article="";
    for (let i=0; i<contenu.length; i++) {
        if (contenu[i][0]=="p") {
            for (let i2=0; i2<contenu[i][1].length; i2++) {
                article=article+`    <p>\n      ${contenu[i][1][i2]}\n    </p>`+"\n";
            }
        } else if (contenu[i][0]=="h1") {
            article=article+`    <h1>\n      ${contenu[i][1]}\n    </h1>`+"\n";
        } else if (contenu[i][0]=="h2") {
            article=article+`    <h2>\n      ${contenu[i][1]}\n    </h2>`+"\n";
        } else if (contenu[i][0]=="h3") {
            article=article+`    <h3>\n      ${contenu[i][1]}\n    </h3>`+"\n";
        } else if (contenu[i][0]=="br") {
            article=article+"    "+"<br>".repeat(contenu[i][1])+"\n";
        } else if (contenu[i][0]=="img") {
            article=article+`    <div class="container_image">`+"\n";
            for (let i2=0; i2<contenu[i][1].length; i2++) {
                article=article+`      <div class="image_container"><img alt="${contenu[i][1][i2][0]}" src="${contenu[i][1][i2][1]}"></div>\n`;
            }
            article=article+`    </div>`+"\n";
        } else if (contenu[i][0]=="vid") {
            article=article+`    <div class="responsive-youtube">\n      <iframe src="${contenu[i][1]}" frameborder="0" allowfullscreen></iframe>\n    </div>`+"\n";
        }
    }
    article=article+`    <blockquote>
      Chaque nouvel article du site est une quête secondaire qui enrichit notre aventure principale. Ne manquez
      pas ces missions bonus, suivez l'actualités jRPGlibrary !
    </blockquote>
    <div class="share-buttons">
      <a class="facebook" onclick="shareFacebook(url)"><i class="fab fa-facebook-f"></i></a>
      <a class="messenger" onclick="shareMessenger(url)"><i class="fab fa-facebook-messenger"></i></a>
      <a class="x" onclick="shareX(url)"><i class="fas fa-times"></i></a>
      <a class="linkedin" onclick="shareLinkedIn(url)"><i class="fab fa-linkedin-in"></i></a>
      <a class="whatsapp" onclick="shareWhatsApp(url)"><i class="fab fa-whatsapp"></i></a>
      <a class="reddit" onclick="shareReddit(url)"><i class="fab fa-reddit"></i></a>
    </div>\n    `;
    document.getElementsByClassName("Article_Infos")[0].insertAdjacentHTML("beforeend",article);
}

const eiyuden= [
      ["p",[`À l'occasion du Nintendo Direct du 14 septembre 2023, Eiyuden Chronicle: Hundred Heroes dévoile enfin 
      sa date de sortie, plus tardive qu'initialement prévue. Le successeur spirituel de la célèbre série Suikoden
      arrivera sur nos écrans le 23 avril 2024. Un léger délai alors que le jeu était prévu pour 2023 mais qui
      ne diminue pas l'attente des fans de JRPG.`]],
      ["br",1],
      ["h3",`Ce que nous savons du jeu:`],
      ["p",[`Annoncé en 2020, le projet Eiyuden Chronicle est porté par une campagne de financement participatif sur 
      Kickstarter et devient le plus gros succès de la plateforme de l'année. Eiyuden Chronicle est en fait une 
      série de 2 jeux avec Eiyuden Chronicle: Rising, une préquelle sous forme d'Action-RPG à Eiyuden Chronicle: 
      Hundred Heroes, le jeu principal. Cette préquelle présenté comme une introduction à l'univers est sortie 
      en mai 2022, il donc est encore temps de le découvrir avant la sortie d'Hundred Heroes.`,
      `Le succès du Kickstarter d'Eiyuden Chronicle: Hundred Heroes auprès des fans de JRPG s'explique par 
      l'héritage qu'il revendique : Suikoden. Cette série de RPG culte de Konami, réputé en particulier pour 
      ses deux premiers épisodes sur la première Playstation, librement adapté du roman chinois du XIVe siècle
      "Au bord de l'eau", se démarque par sa mécanique de recrutement de personnages et de quartier général. 
      Dans chaque jeu de la série, il possible de rassembler jusqu'à 108 personnages, qui feront évoluer le 
      quartier général en offrant de nouvelles fonctionnalités (des mini-jeux, des boutiques...), et qui pour
      la plupart sont jouables en combat.`,
      `Eiyuden Chronicle: Hundred Heroes revendique cet héritage en reprenant cette mécanique unique, à laquelle 
      le titre fait directement écho, ainsi qu'un système de combat au tour par tour similaire avec 6 personnages
      sur le terrain répartis sur deux niveaux, une direction artistique évoquant les opus PS1 et un scénario avec
      une structure proche et des thématiques communes comme la politique, la corruption ou la révolution. Effectivement,
      une histoire de guerres et d'alliances façonnent les terres d'Allraan où deux amis, Seign Kesling, un jeune 
      et talentueux officier impérial, et Nowa, un garçon d’un village isolé, vont être confronté à la guerre et 
      remettre en question ceux en quoi ils croyaient.`,
      `En plus de cette parenté de gameplay, d'histoire et de visuels, le studio de développement à l'origine du titre, 
      Rabbit and Bear Studios, est constitué d'anciens membres de l'équipe des Suikoden notamment la game designer 
      Junko Kawano et le réalisateur Yoshitaka Murayama. À la musique on retrouve en collaboration Michiko Naruke 
      (Super Smash Bros, Wild Arms...) et Motoi Sakuraba (Tales of, Golden Sun, Star Ocean, Valkyrie Profile, 
      Dark Souls...). L'éditeur, 505 Games, se déclare honoré de travailler avec ce nouveau studio. Une équipe 
      de rêve pour ce vibrant hommage aux JRPG de l'ère 32 bits.`]],
      ["br",1],
      ["h3",`Voici le trailer du Nintendo Direct :`]
      ["br",2],
      ["vid","https://www.youtube.com/embed/uOb8B1c-BcI?si=WXoAekViKsImPxrW"],
      ["br",1],
      ["p",[`Ce n'est pas le seul JRPG qui aura fait l'objet d'une annonce lors de ce Nintendo Direct, puisqu'on
      y retrouve le Tactical-RPG Unicorn Overlord et surtout le remaster de Paper Mario: La porte millénaire
      qui accompagne le remake de Super Mario RPG. Par ailleurs les fans de Suikoden devront également prendre
      leur mal en patience pour la compilation remasterisé de Suikoden 1 et 2 initialemement prévu pour fin août 
      de cette année qui a été repoussée à l'année prochaine. `]]
];

const atlas= [
      ["p",[`Salut à tous, mes chers gamers ! Le jour tant attendu est enfin arrivé ! "Atlas Fallen" débarque sur nos
      consoles NextGen et PC.`]],
      ["br",1],
      ["h3",`Ce que nous savons du jeu:`],
      ["p",[`Développé par les maestros de Focus Entertainment et Deck 13, "Atlas Fallen" nous plonge dans un monde
      fantastique où des créatures ( les ombres ) nous mettent au défi.`,
      `Un monde open world, avec beaucoup d'exploration, de combats tactiques contre des monstres avec possibilité de
      briser certaines parties de leur corps.`,
      `Une personnalisation de personnage prometteuse et complète : armures, armes, pierres d'essences, idoles etc
      ...
      Une multitude de compétences à utiliser en passant d'une simple attaque à une tornade qui suit l'ennemi.`,
      `Les mécaniques de jeu sont particulièrement intéressantes : que ce soit surfer sur les dunes pour explorer
      notre vaste carte ou bien réaliser un double saut, chaque compétence contribue à une expérience de jeu riche
      et complète qui font du level design quelque chose d'appreciable.`,
      `En matière de graphisme, "Atlas Fallen" ne déçoit pas. Deck13 et Focus Entertainment nous ont éblouis avec
      des bandes-annonces visuellement époustouflantes.`]],
      ["br",1],
      ["h3",`Voici le dernier trailer en date :`]
      ["br",2],
      ["vid","https://www.youtube.com/embed/MHVTQbptAgA"],
];

const star_ocean = [
      ["p",[`Le <span class="Article_Span">2 novembre 2023</span> marquera le retour d'un classique du <span
      class="Article_Span">RPG japonais</span>, <span class="Article_Span">Star Ocean: The Second
      Story</span>, sous une nouvelle forme : <span class="Article_Span">Star Ocean: The Second Story R</span>. 
      Développé par <span class="Article_Span">tri-Ace</span> et édité par <span class="Article_Span">Square 
      Enix</span>, ce <span class="Article_Span">remake</span> promet de raviver les souvenirs des 
      <span class="Article_Span">fans</span> de la première heure tout en attirant une
      nouvelle génération de joueurs.`,
      `<span class="Article_Span">Star Ocean</span> est une série de jeux de rôle d'action qui a commencé en
      <span class="Article_Span">1996</span>. La série est connue pour son mélange unique de science-fiction 
      et de fantasy, ainsi que pour son système de <span class="Article_Span">combat en temps réel</span>. 
      <span class="Article_Span">Star Ocean: The Second Story</span>, le <span class="Article_Span">deuxième 
      opus</span> de la série, a été particulièrement bien reçu lors de sa sortie en <span class="Article_Span">
      1998</span>. Il a introduit de nombreux éléments qui sont devenus des piliers de la série, comme le 
      système de création d'objets et les événements privés entre les personnages.`,
      `L'impact de <span class="Article_Span">Star Ocean: The Second Story</span> sur le genre du RPG ne peut
      être sous-estimé. Il a introduit des mécaniques de jeu innovantes (craft, choix du héros, possibilité 
      en fonction de vos actions d'avoir d'autres personnages pour un total d'une dizaine de personnages 
      jouables, un système de private action et plus encore...) et une histoire bien ficelée qui lui est 
      propre. Ces éléments de RPG ont permis d'influencer de nombreux jeux par la suite. Avec ce
      <span class="Article_Span">remake</span>, une nouvelle génération de joueurs aura l'occasion de
      découvrir pourquoi ce jeu est si spécial et pourquoi beaucoup de fans de RPG ont catégorisé cet opus 
      comme l'un des meilleurs jeux du genre de l'époque.`]],
      ["img",[["Image de la lune","https://starocean2r.square-enix-games.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fplanet.6ff9ef82.png&w=3840&q=75"]]],
      ["p",[`L'histoire suit les aventures de <span class="Article_Span">Claude C. Kenny</span>, un officier 
      de la <span class="Article_Span">Fédération Pangalactique</span>, et <span class="Article_Span">Rena
      Lanford</span>, une jeune femme de la planète <span class="Article_Span">Expel</span>. Ensemble, ils se 
      lancent dans une quête pour découvrir la vérité sur le <span class="Article_Span">Sorcery Globe</span>, 
      un objet mystérieux qui a causé de nombreux désastres sur <span class="Article_Span">Expel</span>.`]],
      ["img",[["Artwork de Claude et Rena","https://starocean2r.square-enix-games.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcharacters.bb559667.png&w=3840&q=100"]]],
      ["p",[`Le jeu offre une expérience de <span class="Article_Span">combat en temps réel</span>, avec de 
      <span class="Article_Span">nouvelles mécaniques</span> pour vaincre vos ennemis en utilisant vos talents 
      et compétences à bon escient. Les effets de combat et les mouvements ont été encore plus affinés, rendant 
      l'action encore plus fluide et plus spectaculaire que dans l'opus d'origine.`,
      `Pour avoir un aperçu du jeu, voici le trailer officiel : `]],
      ["br",2],
      ["vid","https://www.youtube.com/embed/T9j7mP9Nr9g"],
      ["br",1],
      ["p",[`<span class="Article_Span">Star Ocean: The Second Story R</span> est sans aucun doute un titre à
      surveiller pour tous les <span class="Article_Span">fans</span> de <span class="Article_Span">RPG</span> 
      et de jeux vidéo en général. Préparez-vous à embarquer dans une aventure épique à travers les étoiles !`]],
      ["br",1],
      ["h2","Galerie de captures d'écran"],
      ["img",[["Screen Combat","https://img.playstationtrophies.org/images/monthly_2023_06/screenshots/22632/med_star_ocean_the_second_story_r_vvol1.9_2d5997ff-d2a0-4f04-bfad-233e08b3fe8b.jpg"],
      ["Screen Ville","https://img.playstationtrophies.org/images/monthly_2023_06/screenshots/22632/med_star_ocean_the_second_story_r_vol1_1b75883c-781d-47e2-b6b2-8805df301930.jpg"],
      ["Screen Ville","https://img.playstationtrophies.org/images/monthly_2023_06/screenshots/22632/med_star_ocean_the_second_story_r_vol1.2_ccab05d9-b0db-413c-a78c-4d582869d2b8.jpg"],
      ["Screen Ville","https://gh.cdn.sewest.net/assets/ident/news/23a6ae4d/Vol1_p17_%E8%A1%972-mxky7lbxw.jpg?quality=65"],
      ["Screen Combat","https://www.techpowerup.com/img/DRW6M4RKzVAE5tvj.jpg"]]]
];

const sea_stars = [
      ["p",[`Sea Of Stars, un nouveau RPG au tour par tour , par Sabotage Studio, vera le jour le
      29 Aout 2023 soit un jour aprés mon anniversaire ( oui , je ne rigole pas ).`,
      `Inspiré des classiques du genre, ce jeu promet une expérience de jeu classic avec un système
      de combat dynamique, une narration qui vous plonge dans l'univers du jeu et une exploration agréable.
      Le jeu emprunte des éléments de gameplay et de narration à des classiques tels que "Chrono Trigger", 
      "Final Fantasy", "Illusion Time" et "Super Mario RPG".`]],
      ["img",[["Artwork du jeu","https://h7j8r4f2.stackpathcdn.com/wp-content/uploads/2022/05/sea-of-stars-GI-cover-gold-1966x1285.jpg.webp"]]],
      ["p",[`Sea of Stars nous plonge dans un univers riche et détaillé, où deux Enfants du Solstice, Valere
      et Zale, se lancent dans une quête épique. Leur mission est d'arrêter le "FleshMancers", un sorcier
      maléfiques qui veut éclipser les lumières du soleil et de la lune. Valere, la mage lunaire, et Zale, le 
      guerrier solaire, peuvent utiliser leurs pouvoirs uniques pour effectuer des attaques synchronisées, des 
      combos et des boosts.`,]],
      ["img",[["Artwork des personnages","https://h8d9s2y4.stackpathcdn.com/wp-content/uploads/2020/04/img-characters-art-2@2x.png"]]],
      ["p",[`Leur dualité est au cœur du système de combat, offrant une profondeur stratégique et une variété 
      de tactiques supplémentaires en combat.`,
      `Six personnages seront jouables et leur progression se fera naturellement au fil de l’histoire, sachant 
      qu’il n’y aura pas de combats aléatoires ni de coupure entre l’exploration et les combats.`,
      `Le tout sera rythmé par les compositions d’Eric W. Brown (The Messenger), avec la participation
      du légendaire Yasunori Mitsuda (Chrono Trigger, Xenogears, Shadow Hearts…).`]],
      ["img",[["Photo d'Eric W.Brow","https://f4.bcbits.com/img/0018719815_25.jpg"],
      ["Photo de Mitsuda","https://upload.wikimedia.org/wikipedia/commons/b/b1/Yasunori_Mitsuda_%282019%29.jpg"]]],
      ["p",[`Le jeu est une préquelle de "The Messenger", un autre titre populaire de Sabotage Studio.`,
      `Il est prévu pour une sortie sur plusieurs plateformes, dont Windows, Nintendo Switch, PlayStation 4, 
      PlayStation 5, Xbox One et Xbox Series X/S.`]],
      ["br",2],
      ["vid","https://www.youtube.com/embed/AhU_K3DVIN4"],
      ["p",[`Il est à noter que Sabotage Studio a réussi à récolter près de 1,000,000€ sur Kickstarter en
      avril 2020 pour le développement de Sea of Stars.`,
      `Sea of Stars est sans aucun doute un titre à surveiller pour tous les fans de RPG et de jeux
      vidéo en général.
      Préparez-vous à embarquer dans une aventure épique à travers les étoiles !`]],
      ["img",[["image world map","https://h7j8r4f2.stackpathcdn.com/wp-content/uploads/2022/03/World-2-1070x602.png.webp"],
      ["image combat","https://h7j8r4f2.stackpathcdn.com/wp-content/uploads/2023/04/Screenshot-2023-03-31-13-59-25-1070x602.png.webp"]]]
];

const lost_soul = [
      ["p",[`<span class="Article_Span">Lost Soul Aside</span> est un jeu vidéo d'action et de rôle en
      développement par <span class="Article_Span">Ultizero Games</span>, qui a captivé l'attention
      des joueurs du monde entier grâce à son style artistique fantastique et son gameplay dynamique.
      Inspiré par la célèbre série <span class="Article_Span">Final Fantasy</span>, ce jeu promet une
      expérience ludique à la hauteur du dernier opus de <span class="Article_Span">Square Enix</span>. 
      (Et pourquoi pas mieux ? Nous le verrons très prochainement).`]],
      ["img",[["Image de Lost Soul Aside","https://i.ytimg.com/vi/z5El-yYNUwU/maxresdefault.jpg"]]],
      ["h2",`Un projet qui nous bombarde avec du lourd`],
      ["p",[`Le projet <span class="Article_Span">Lost Soul Aside</span> a été initié par <span
      class="Article_Span">Bing Yang</span>, qui a commencé à travailler sur le jeu en solo.
      Depuis, le projet a évolué pour inclure une équipe complète de développeurs talentueux chez
      <span class="Article_Span">Ultizero Games</span>. Le compte <span class="Article_Span">Twitter</span> 
      officiel du jeu, créé en <span class="Article_Span">novembre 2016</span>, constitue une source précieuse 
      d'informations et de mises à jour sur son développement.`]],
      ["br",1],
      ["h2",`Des mises à jours qui font rêver`],
      ["p",[`Selon les dernières informations partagées sur <span class="Article_Span"><a 
      href="https://twitter.com/Lost_Soul_Aside">Twitter</a></span>, <span class="Article_Span">Lost Soul 
      Aside</span> est également prévu pour la <span class="Article_Span">PlayStation 5</span>. Les 
      développeurs ont partagé une <span class="Article_Span">démo</span> de gameplay de plus de 
      <span class="Article_Span">18 minutes</span> en <span class="Article_Span">avril 2021</span>, montrant 
      les progrès impressionnants réalisés dans le développement du jeu.`,
      `Plus récemment, en <span class="Article_Span">juillet 2023</span>, <span class="Article_Span">
      Lost Soul Aside</span> a été présenté à la <span class="Article_Span">ChinaJoy 2023</span>, où une 
      <span class="Article_Span">démo jouable</span> du jeu a été mise à disposition sur le stand <span
      class="Article_Span">PlayStation</span>, permettant aux joueurs de parcourir un niveau du jeu. Et une 
      chose est certaine, nous avons devant nous un jeu au potentiel énorme.`]],
      ["br",1],
      ["vid","https://www.youtube.com/embed/9leAroRp1dw"],
      ["br",2],
      ["h2",`Mais pour quand du coup?`],
      ["p",[`Bien que la date de sortie exacte ne soit pas encore connue, l'anticipation pour <span
      class="Article_Span">Lost Soul Aside</span> continue de croître. Avec plus de <span
      class="Article_Span">24 000 followers</span> sur <span class="Article_Span"><a 
      href="https://twitter.com/Lost_Soul_Aside">Twitter</a></span> et une présence croissante sur d'autres 
      plateformes de médias sociaux, il est clair que <span class="Article_Span">Lost Soul Aside</span> est un 
      jeu à surveiller.`]],
      ["br",1],
      ["h2",`Une galerie rien que pour vous`],
      ["img",[["Image de Lost Soul Aside","https://image.jeuxvideo.com/images/videos/news-images/l/o/lost-soul-aside-18-minutes-de-gameplau-1356705-1619513216-high.jpg"],
      ["Image de Lost Soul Aside","https://d3kjluh73b9h9o.cloudfront.net/original/3X/a/d/ad718032bb100cb9fcea68918407b0cfabf9c0cb.jpeg"],
      ["Image de Lost Soul Aside","https://www.destructoid.com/wp-content/uploads/2021/05/627343-LostSoulAside_Lead_042721.jpg"],
      ["Image de Lost Soul Aside","https://www.gaming.net/wp-content/uploads/2023/04/Lost-Soul-Aside_2021_04-26-21_003.jpg"]]]
];

function download () {
    const page = document.documentElement.outerHTML;
    const blob = new Blob([page], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const lienTelechargement = document.createElement('a');
    lienTelechargement.href = url;
    lienTelechargement.download = "page.html";
    lienTelechargement.click();
}