/*Les dates doivent être exprimés sous la forme "new Date(annee, mois (de 0 à 11 !), jour, heure, minute)"*/

const actus_liste = [
  {
    id: "star-ocean",
    name: "STAR OCEAN : THE SECOND STORY R",
    author: "jRPGlibrary",
    date: new Date(2023, 6, 13, 20, 0),
    plateformes: ["Switch", "PS5", "PS4", "PC"],
    title:
      "STAR OCEAN: THE SECOND STORY R - Le retour d'un classique du RPG en 2.5D, de retour sur NEXTGEN",
    infos:
      "L'histoire suit les aventures de Claude C. Kenny, un officier de la Fédération Pangalactique, et Rena Lanford, une jeune femme de la planète Expel...",
    image:
      "http://res.cloudinary.com/dfy0zd3p6/image/upload/c_scale,w_3840/photo_42795009",
    description: `L'histoire suit les aventures de Claude C. Kenny, un officier de la Fédération Pangalactique, et Rena Lanford, une jeune femme de la planète Expel...`,
    page: "pages/2023/Actus/Star_Ocean_Second_Story_R.html",
    url: "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/Star_Ocean_Second_Story_R.html",
  },
  {
    id: "sea-of-stars",
    name: "Sea Of Stars",
    author: "jRPGlibrary",
    date: new Date(2023, 6, 26, 22, 30),
    plateformes: ["Switch", "PS5", "PC", "Xbox Series"],
    title: "SEA OF STARS : Un voyage nostalgique dans l'âge d'or des RPG",
    infos:
      "Sea of Stars nous plonge dans un univers riche et détaillé, où deux Enfants du Solstice, Valere et Zale, se lancent dans une quête épique...",
    image:
      "https://jeuxvideo.rds.ca/wp-content/uploads/sites/2/2020/03/sea-of-stars-keyart-w-logo.jpg",
    description: `Sea of Stars nous plonge dans un univers riche et détaillé, où deux Enfants du Solstice, Valere et Zale, se lancent dans une quête épique...`,
    page: "pages/2023/Actus/Sea_Of_Stars.html",
    url: "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/Sea_Of_Stars.html",
  },
  {
    id: "lost-soul-aside",
    name: "Lost Soul Aside",
    author: "jRPGlibrary",
    date: new Date(2023, 6, 31, 16, 0),
    plateformes: ["PS4", "PS5"],
    title:
      "LOST SOUL ASIDE : Une pépite sortie de chine, le rival de FFXVI ?!?",
    infos:
      "Le projet Lost Soul Aside a été lancé par Bing Yang, qui a commencé à travailler sur le jeu en solo. Depuis, le projet a évolué pour inclure une équipe complète de...",
    image:
      "https://www.jvfrance.com/wp-content/uploads/2018/03/lost-soul-aside.jpg",
    description: `Tu as joué à Final Fantasy XVI de chez SquareEnix, comme beaucoup tu as été déçus? 
    Alors, viens explorer ce jeu qui fait partie d'un vaste projet et qui pourrait probablement rivaliser avec Final Fantasy XVI, initié par une seule personne.`,
    page: "pages/2023/Actus/Lost_Soul_Aside.html",
    url: "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/Lost_Soul_Aside.html",
  },
  {
    id: "atlas-fallen",
    name: "Atlas Fallen",
    author: "jRPGlibrary",
    date: new Date(2023, 7, 10, 19, 50),
    plateformes: ["PS5", "Xbox Series", "PC"],
    title: "ATLAS FALLEN :  Day-One , L'héritage de Deck13",
    infos:
      "Développé par les maestros de Focus Entertainment et Deck 13, Atlas Fallen nous plonge dans un monde fantastique où des créatures légendaires nous...",
    image:
      "https://static1.millenium.org/articles/6/40/57/36/@/1712560-news-def-2-24-amp_main_media_schema-1.png",
    description: `Atlas Fallen, le nouvel aRPG de Deck13 : glissez, sautez, équipez-vous de vos plus belles armes et affrontez les ombres les plus coriaces c'est sur NextGen`,
    page: "pages/2023/Actus/Atlas_Fallen.html",
    url: "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/Atlas_Fallen.html",
  },
  {
    id: "eiyuden-chronicle-date-sortie",
    name: "Eiyuden Chronicle: Hundred Heroes",
    author: "Patfine",
    date: new Date(2023, 8, 17, 15, 0),
    plateformes: ["Switch", "PS4", "PS5", "PC", "Xbox One", "Xbox Series"],
    title: "Eiyuden Chronicle: Hundred Heroes dévoile sa date de sortie",
    infos:
      "À l'occasion du Nintendo Direct du 14 septembre 2023, le successeur spirituel de Suikoden fait parler de lui avec une...",
    image:
      "https://nintendoeverything.com/wp-content/uploads/Eiyuden-Chronicle-Hundred-Heroes-delayed.jpg",
    description:
      "Le successeur de Suikoden annonce son date de sortie lors du Nintendo Direct. Faisons le point.",
    page: "pages/2023/Actus/Eiyuden_Chronicle_Date_Sortie.html",
    url: "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/Eiyuden_Chronicle_Date_Sortie.html",
  },
  {
    id: "star-ocean-retour-aux-sources",
    name: "Star Ocean : The Second Story ( un rpg innoubliable dont il faut avoir connaissance ) :",
    author: "jRPGlibrary",
    date: new Date(2023, 10, 26, 18, 0),
    plateformes: ["Switch", "PS4", "PS5", "PC", "Xbox One", "Xbox Series"],
    title:
      "Star Ocean: The Second Story Petit, retour dans les années 90' naissance d'une licence",
    infos:
      "La sortie de la version R (une version bien amélioré) arrive bientôt (le 2 Novembre), voici donc aujourdhui pour vous un petit ...",
    image:
      "https://img.guildedcdn.com/ContentMediaGenericFiles/1e1e2d77db8b63db5d27cbcdf0cceab5-Full.webp?w=1280&h=720",
    description: "#",
    page: "pages/2023/Actus/Star_Ocean_The_Second_Story_Retour_Aux_Sources.html",
    url: "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/Star_Ocean_The_Second_Story_Retour_Aux_Sources",
  },
];
