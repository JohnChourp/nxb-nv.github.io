function cardsToolsScriptFiles() {
    const folderNinjutsus = window.location.pathname.search("Ninjutsus");
    const folderTools = window.location.pathname.search("Tools");
    const folderUltimateJutsus = window.location.pathname.search("UltimateJutsus");

    const scriptCardsTools = document.createElement("link");
    scriptCardsTools.href = "/../CardsTools/CSS/CardsTools.css";
    scriptCardsTools.rel = "stylesheet";
    scriptCardsTools.type = "text/css";
    document.head.appendChild(scriptCardsTools);

    const topNavCSS = document.createElement("link");
    topNavCSS.href = "/../CSS/CSSFromJS/topNav.css";
    topNavCSS.rel = "stylesheet";
    topNavCSS.type = "text/css";
    document.head.appendChild(topNavCSS);

    const animation = document.createElement("link");
    animation.href = "/../CSS/animation.css";
    animation.rel = "stylesheet";
    animation.type = "text/css";
    document.head.appendChild(animation);

    const customScrollbar = document.createElement("link");
    customScrollbar.href = "/../CSS/customScrollbar.css";
    customScrollbar.rel = "stylesheet";
    customScrollbar.type = "text/css";
    document.head.appendChild(customScrollbar);

    const images = document.createElement("script");
    images.src = "/../JS/Images/images.js";
    images.type = "text/javascript";
    document.head.appendChild(images);

    const topNavJS = document.createElement("script");
    topNavJS.src = "/../JS/topNav.js";
    topNavJS.type = "text/javascript";
    document.head.appendChild(topNavJS);

    if(folderNinjutsus === 43){
        const ninjutsu = document.createElement("script");
        ninjutsu.src = "/../CardsTools/JS/ninjutsu.js";
        ninjutsu.type = "text/javascript";
        document.head.appendChild(ninjutsu);
    }
    if(folderTools === 23){
        const toolFactory = document.createElement("script");
        toolFactory.src = "/../CardsTools/JS/toolFactory.js";
        toolFactory.type = "text/javascript";
        document.head.appendChild(toolFactory);
    }
    if(folderUltimateJutsus === 43){
        const UltimateJutsu = document.createElement("script");
        UltimateJutsu.src = "/../CardsTools/JS/ultimateJutsu.js";
        UltimateJutsu.type = "text/javascript";
        document.head.appendChild(UltimateJutsu);
    }
}
cardsToolsScriptFiles();