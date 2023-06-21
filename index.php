<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de ton site</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="shortcut icon" href="/Logo.png" type="image/x-icon">
</head>

<body>

    <header id="Header_Container">

<?php include 'social.php'; ?>

<?php include 'navbar.php'; ?>


    </header>

    <main>
        <!-- Contenu principal du site -->
        <section id="NewsHeader_Container">

            <div class="NewsHeaderCards" id="NewsHeader_Border1">
                <img src="https://i.ytimg.com/vi/CowH_zi694w/maxresdefault.jpg" alt="">

                <div class="caption">
                    <div class="text">
                        <h2>Cat Quest III: La Fureur des Griffes - Une Épopée Féline dans un Monde Renouvelé</h2>
                        <span id="daysSincePost1">                            
                        </span>
                        <span class="authorName">
                            Author Name 1
                        </span>
                    </div>
                </div>

            </div>

            <div class="NewsHeaderCards" id="NewsHeader_Border2">
                <img src="https://imgr.gameblog.fr/img/news/428351_648c284cd5b50.jpg?imgeng=/cmpr_10/w_1320/m_letterbox&ver=1"
                    alt="">
                <div class="caption">
                    <div class="text">
                        <h2>Final Fantasy XVI <br>La Démo : un avant goût qui me laisse sans voix </h2>
                        <span id="daysSincePost2"></span>
                        <span class="authorName">Author Name 2</span>
                    </div>
                </div>
            </div>

            <div class="NewsHeaderCards" id="NewsHeader_Border3">
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202303/0921/500cf443c7a7e8a36a882c393ecb1d4a20b9c04bfef9ad57.png"
                    alt="">
                <div class="caption">
                    <div class="text">
                        <h2>SEA OF STARS: <br> Une aventure 2D/Pixel jRPG comme nous les aimons </h2>
                        <span id="daysSincePost3"></span>
                        <span class="authorName">Author Name 3</span>
                    </div>
                </div>
            </div>

            <div class="NewsHeaderCards" id="NewsHeader_Border4">
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/2091620/capsule_616x353.jpg?t=1685638539"
                    alt="">
                <div class="caption">
                    <div class="text">
                        <h2>SEPTOROAD VOYAGER: <br> Un jeu Indé 2D inspiré de Final Fantasy XII </h2>
                        <span id="daysSincePost4"></span>
                        <span class="authorName">Author Name 4</span>
                    </div>
                </div>
            </div>
        </section>


        <section class="Container_Border">
            <div id="LastNews_Title">
                <h2>Dernières Actus</h2>
            </div>
        </section>


        <section>
            <div id="LastNews_Content">
                <!-- Place your news content here -->
                <img src="https://sm.ign.com/t/ign_fr/game/default/keyart_5928.600.jpg" alt="">
                <p>Article crée par: <span class="authorName"></span><br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non voluptates culpa, impedit
                    illum
                    quae expedita nobis iusto. Ea asperiores corrupti repudiandae minus iusto tenetur quas recusandae
                    architecto soluta! Voluptatibus.</p>
                <a class="readMoreLink" href="#">Lire la suite</a>

            </div>
            <span class="LastNews_Border">p</span>

            <div id="LastNews_Content">
                <!-- Place your news content here -->
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1586990/ss_75bbb947530ccc2b1d108ec916b7ecb0cd24dbbb.1920x1080.jpg?t=1686802163"
                    alt="">
                <p>Article crée par: <span class="authorName"></span><br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non voluptates culpa, impedit
                    illum
                    quae expedita nobis iusto. Ea asperiores corrupti repudiandae minus iusto tenetur quas recusandae
                    architecto soluta! Voluptatibus.</p>
                <a class="readMoreLink" href="#">Lire la suite</a>

            </div>
            <span class="LastNews_Border">p</span>

            <div id="LastNews_Content">
                <!-- Place your news content here -->
                <img src="https://cdn.gamekult.com/images/gallery/34/349965/sea-of-stars-pc-3237e16b.png" alt="">
                <p>Article crée par: <span class="authorName"></span><br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non voluptates culpa, impedit
                    illum
                    quae expedita nobis iusto. Ea asperiores corrupti repudiandae minus iusto tenetur quas recusandae
                    architecto soluta! Voluptatibus.</p>
                <a class="readMoreLink" href="#">Lire la suite</a>

            </div>
            <span class="LastNews_Border">p</span>


            <div id="LastNews_Content">
                <!-- Place your news content here -->
                <img src="https://i0.wp.com/jrpgfr.net/wp-content/uploads/2023/03/atlas-fallen.jpg?w=1280&ssl=1" alt="">
                <p>Article crée par: <span class="authorName"></span><br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non voluptates culpa, impedit
                    illum
                    quae expedita nobis iusto. Ea asperiores corrupti repudiandae minus iusto tenetur quas recusandae
                    architecto soluta! Voluptatibus.</p>
                <a class="readMoreLink" href="#">Lire la suite</a>

            </div>
            <span class="LastNews_Border">p</span>

            <div id="LastNews_Content">
                <!-- Place your news content here -->
                <img src="https://jrpgfr.net/wp-content/uploads/2022/07/Final-Fantasy-7-Remake.jpg" alt="">
                <p>Article crée par: <span class="authorName"></span><br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non voluptates culpa, impedit
                    illum
                    quae expedita nobis iusto. Ea asperiores corrupti repudiandae minus iusto tenetur quas recusandae
                    architecto soluta! Voluptatibus.</p>
                <a class="readMoreLink" href="#">Lire la suite</a>

            </div>
            <span class="LastNews_Border">p</span>

            <div id="LastNews_Content">
                <!-- Place your news content here -->
                <img src="https://cdn-uploads.gameblog.fr/img/news/426004_646b33d34f449.jpg" alt="">
                <p>Article crée par: <span class="authorName"></span><br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non voluptates culpa, impedit
                    illum
                    quae expedita nobis iusto. Ea asperiores corrupti repudiandae minus iusto tenetur quas recusandae
                    architecto soluta! Voluptatibus.</p>
                <a class="readMoreLink" href="#">Lire la suite</a>

            </div>
            <span class="LastNews_Border">p</span>

            <div id="LastNews_Content">
                <!-- Place your news content here -->
                <img src="https://s2.dmcdn.net/v/V0Gqt1aXcFWI6S4WZ" alt="">
                <p>Article crée par: <span class="authorName"></span><br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non voluptates culpa, impedit
                    illum
                    quae expedita nobis iusto. Ea asperiores corrupti repudiandae minus iusto tenetur quas recusandae
                    architecto soluta! Voluptatibus.</p>
                <a class="readMoreLink" href="#">Lire la suite</a>

            </div>
        </section>


        <section class="Container_Border">
            <div id="LastPreviews_Title">
                <h2>Avant-Premières</h2>
            </div>
        </section>


        <section>
    </main>

<?php include 'footer.php'; ?>

    <script src="script.js"></script>
</body>

</html>