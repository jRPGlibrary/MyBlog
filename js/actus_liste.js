/*Les dates doivent être exprimés sous la forme "new Date(annee, mois (de 0 à 11 !), jour, heure, minute)"*/

const actus_liste = [
  {
    "id": "Born-Of-Bread-Demo",
    "name": "Born Of Bread Demo",
    "author": "jRPGlibrary",
    "date": new Date(2023, 7, 17, 22, 25),
    "plateformes": ["Switch", "PS5","PC", "Xbox Series"],
    "title": "Born Of Bread - La Démo sort du four sur NextGen",
    "image":"https://i.ibb.co/J2g3JCT/18a083aee6234-screenshot-Url.jpg",
    "description":'Notre petit lapin de farine débarque sur nos console avec ça demo.',
    "page":"pages/2023/Actus/Born-Of-Bread-Demo-Releasd.html",
    "url": "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/Born-Of-Bread-Demo-Release" 
  },
  {
    "id": "6",
    "name": "Atlas Fallen",
    "author": "jRPGlibrary",
    "date": new Date(2023, 7, 10, 19, 50),
    "plateformes": ["PS5", "Xbox Series","PC"],
    "title": "ATLAS FALLEN :  Day-One , L'héritage de Deck13",
    "infos":
      "Développé par les maestros de Focus Entertainment et Deck 13, Atlas Fallen nous plonge dans un monde fantastique où des créatures légendaires nous...",
    "image":
      "https://static1.millenium.org/articles/6/40/57/36/@/1712560-news-def-2-24-amp_main_media_schema-1.png",
    "description": `Atlas Fallen, le nouvel aRPG de Deck13 : glissez, sautez, équipez-vous de vos plus belles armes et affrontez les ombres les plus coriaces c'est sur NextGen`,
    "page": "pages/2023/Actus/6_Atlas_Fallen.html",
    "url": "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/6_Atlas_Fallen.html"
  },
  {
    "id": 5,
    "name": "Lost Soul Aside",
    "author": "jRPGlibrary",
    "date": new Date(2023, 6, 31, 16, 0),
    "plateformes": ["PS4", "PS5"],
    "title": "LOST SOUL ASIDE : Une pépite sortie de chine, le rival de FFXVI ?!?",
    "infos":
      "Le projet Lost Soul Aside a été lancé par Bing Yang, qui a commencé à travailler sur le jeu en solo. Depuis, le projet a évolué pour inclure une équipe complète de...",
    "image":
      "https://www.jvfrance.com/wp-content/uploads/2018/03/lost-soul-aside.jpg",
    "description": `Tu as joué à Final Fantasy XVI de chez SquareEnix, comme beaucoup tu as été déçus? 
    Alors, viens explorer ce jeu qui fait partie d'un vaste projet et qui pourrait probablement rivaliser avec Final Fantasy XVI, initié par une seule personne.`,
    "page": "pages/2023/Actus/5_Lost_Soul_Aside.html",
    "url": "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/5_Lost_Soul_Aside.html"
  },
  {
    "id": 4,
    "name": "Sea Of Stars",
    "author": "jRPGlibrary",
    "date": new Date(2023, 6, 26, 22, 30),
    "plateformes": ["Switch", "PS5", "PC", "Xbox Series"],
    "title": "SEA OF STARS : Un voyage nostalgique dans l'âge d'or des RPG",
    "infos":
      "Sea of Stars nous plonge dans un univers riche et détaillé, où deux Enfants du Solstice, Valere et Zale, se lancent dans une quête épique....",
    "image":
      "https://jeuxvideo.rds.ca/wp-content/uploads/sites/2/2020/03/sea-of-stars-keyart-w-logo.jpg",
    "description": `Blablabla`,
    "page": "pages/2023/Actus/4_Sea_Of_Stars.html",
    "url": "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/4_Sea_Of_Stars.html"
  },
  {
    "id": 3,
    "name": "Born of Bread",
    "author": "jRPGlibrary",
    "date": new Date(2023, 6, 16, 22, 30),
    "plateformes": ["Switch", "PS5", "PC", "Xbox Series"],
    "title":
      "BORN OF BREAD - Un voyage culinaire dans un monde rempli de saveur inspiré de MARIO RPG? !",
    "infos":
      "Préparez-vous à entrer dans un monde où le pain règne en maître ! Born Of Bread, un nouveau RPG développé par WildArts, est prêt à faire son entrée sur la scène du jeu vidéo....",
    "image":
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1555140/header.jpg?t=1689001755",
    "description": `Blablabla`,
    "page": "#",
    "url": "#"
  },
  {
    "id": 2,
    "name": "Dragon Quest Treasures",
    "author": "jRPGlibrary",
    "date": new Date(2023, 6, 14, 20, 0),
    "plateformes": ["Switch", "PC"],
    "title": "DRAGON QUEST TREASURES sort de vos console pour rejoindre STEAM !",
    "infos":
      "Dragon Quest Treasures, un action-RPG sorti précédemment sur Nintendo Switch en 2022, est un nouveau joyau qui s'ajoute au palmares de l'exellente saga qui est Dragon Quest. Pour rappel, cette série enchanteresse existe depuis 1986, et depuis lors, elle brille de tout son éclat du côté du Soleil Levant",
    "image":
      "https://fyre.cdn.sewest.net/dq-treasures/63078c3a750476a5d87ff78f/bitmap-2x-prqmv3dOQ.jpg",
    "description": `Blablabla`,
    "page": "#",
    "url": "#"
  },
  {
    "id": 1,
    "name": "STAR OCEAN : THE SECOND STORY R",
    "author": "jRPGlibrary",
    "date": new Date(2023, 6, 13, 20, 0),
    "plateformes": ["Switch", "PS5", "PS4", "PC"],
    "title":
      "STAR OCEAN: THE SECOND STORY R - Le retour d'un classique du RPG en 2.5D, de retour sur NEXTGEN",
    "infos":
      "L'histoire suit les aventures de Claude C. Kenny, un officier de la Fédération Pangalactique, et Rena Lanford, une jeune femme de la planète Expel...",
    "image":
      "http://res.cloudinary.com/dfy0zd3p6/image/upload/c_scale,w_3840/photo_42795009",
    "description": `Blablabla`,
    "page": "pages/2023/Actus/1_Star_Ocean_Second_Story_R.html",
    "url": "#"
  },
];
