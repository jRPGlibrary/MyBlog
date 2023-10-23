const url =
  "https://jrpglibrary.github.io/MyBlog/pages/2023/Actus/Eiyuden-Chronicle-Date-Sortie.html";

// Fonction pour partager sur Facebook
function shareFacebook() {
  window.open(
    "http://www.facebook.com/sharer/sharer.php?u=" +
      url +
      "&title=Eiyuden Chronicle: Rising sort le 23 mai 2023&description=Le JRPG Eiyuden Chronicle: Rising sortira le 23 mai 2023 sur PC, PlayStation 4, PlayStation 5, Xbox One et Xbox Series X/S.",
    "_blank"
  );
}

// Fonction pour partager sur Messenger
function shareMessenger() {
  window.open(
    "http://www.facebook.com/dialog/send?link=" + url + "&app_id=123456789",
    "_blank"
  );
}

// Fonction pour partager sur Twitter
function shareTwitter() {
  window.open("http://twitter.com/intent/tweet?url=" + url, "_blank");
}

// Fonction pour partager sur LinkedIn
function shareLinkedIn() {
  window.open(
    "http://www.linkedin.com/shareArticle?mini=true&url=" + url,
    "_blank"
  );
}

// Fonction pour partager sur WhatsApp
function shareWhatsApp() {
  window.open("http://api.whatsapp.com/send?text=" + url, "_blank");
}

// Fonction pour partager sur Reddit
function shareReddit() {
  window.open("http://www.reddit.com/submit?url=" + url, "_blank");
}
