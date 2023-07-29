/*Les dates doivent être exprimés sous la forme "new Date(annee, mois (de 0 à 11 !), jour, heure, minute)"*/

const actus_liste = [
  {
    id: 4,
    name: "Sea Of Stars",
    author: "jRPGlibrary",
    date: new Date(2023, 7, 26, 22, 30),
    plateformes: ["Switch", "PS5", "PC", "Xbox Series"],
    title: "SEA OF STARS : Un voyage nostalgique dans l'âge d'or des RPG",
    infos:
      "Sea of Stars nous plonge dans un univers riche et détaillé, où deux Enfants du Solstice, Valere et Zale, se lancent dans une quête épique....",
    image:
      "https://jeuxvideo.rds.ca/wp-content/uploads/sites/2/2020/03/sea-of-stars-keyart-w-logo.jpg",
    page: "pages/2023/Actus/2_Sea_Of_Stars.html",
  },
  {
    id: 3,
    name: "Born of Bread",
    author: "jRPGlibrary",
    date: new Date(2023, 6, 16, 22, 30),
    plateformes: ["Switch", "PS5", "PC", "Xbox Series"],
    title:
      "BORN OF BREAD - Un voyage culinaire dans un monde rempli de saveur inspiré de MARIO RPG? !",
    infos:
      "Préparez-vous à entrer dans un monde où le pain règne en maître ! Born Of Bread, un nouveau RPG développé par WildArts, est prêt à faire son entrée sur la scène du jeu vidéo....",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1555140/header.jpg?t=1689001755",
    page: "#",
  },
  {
    id: 2,
    name: "Dragon Quest Treasures",
    author: "jRPGlibrary",
    date: new Date(2023, 6, 14, 20, 0),
    plateformes: ["Switch", "PC"],
    title: "DRAGON QUEST TREASURES sort de vos console pour rejoindre STEAM !",
    infos:
      "Dragon Quest Treasures, un action-RPG sorti précédemment sur Nintendo Switch en 2022, est un nouveau joyau qui s'ajoute au palmares de l'exellente saga qui est Dragon Quest. Pour rappel, cette série enchanteresse existe depuis 1986, et depuis lors, elle brille de tout son éclat du côté du Soleil Levant",
    image:
      "https://fyre.cdn.sewest.net/dq-treasures/63078c3a750476a5d87ff78f/bitmap-2x-prqmv3dOQ.jpg",
    page: "#",
  },
  {
    id: 1,
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
    page: "pages/2023/Actus/1_Star_Ocean_Second_Story_R.html",
  },
];
