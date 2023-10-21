const url = document.location.href;

function shareFacebook(url) {
    // Code pour partager sur Facebook
    // Remplacez "URL_de_votre_page" 
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u="+url,
      "_blank"
    );
  }
  
  function shareMessenger(url) {
    // Code pour partager sur Messenger
    window.open(
      "https://www.facebook.com/dialog/send?link="+url+"&app_id=123456789",
      "_blank"
    );
  }
  
  function shareTwitter(url) {
    // Code pour partager sur Twitter
    window.open(
      "https://twitter.com/intent/tweet?url="+url,
      "_blank"
    );
  }
  
  function shareLinkedIn(url) {
    // Code pour partager sur LinkedIn
    window.open(
      "https://www.linkedin.com/shareArticle?url="+url,
      "_blank"
    );
  }
  
  function shareWhatsApp(url) {
    // Code pour partager sur WhatsApp
    window.open(
      "https://api.whatsapp.com/send?text="+url,
      "_blank"
    );
  }
  
  function shareReddit(url) {
    // Code pour partager sur Reddit
    window.open(
      "https://www.reddit.com/submit?url="+url,
      "_blank"
    );
  }