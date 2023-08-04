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