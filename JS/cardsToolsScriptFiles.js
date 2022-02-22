function cardsToolsScriptFiles() {
    let hostName = window.location.host;

    const folderNinjutsus = window.location.pathname.search("Ninjutsus");
    alert(window.location.pathname);
    const folderTools = window.location.pathname.search("Tools");
    const folderUltimateJutsus = window.location.pathname.search("UltimateJutsus");

    const scriptCardsTools = document.createElement("link");
    scriptCardsTools.href = "https://" + hostName + "/nxb-nv.github.io/CardsTools/CSS/CardsTools.css";
    scriptCardsTools.rel = "stylesheet";
    scriptCardsTools.type = "text/css";
    document.head.appendChild(scriptCardsTools);

    const topNavCSS = document.createElement("link");
    topNavCSS.href = "https://" + hostName + "/nxb-nv.github.io/CSS/CSSFromJS/topNav.css";
    topNavCSS.rel = "stylesheet";
    topNavCSS.type = "text/css";
    document.head.appendChild(topNavCSS);

    const animation = document.createElement("link");
    animation.href = "https://" + hostName + "/nxb-nv.github.io/CSS/animation.css";
    animation.rel = "stylesheet";
    animation.type = "text/css";
    document.head.appendChild(animation);

    const customScrollbar = document.createElement("link");
    customScrollbar.href = "https://" + hostName + "/nxb-nv.github.io/CSS/customScrollbar.css";
    customScrollbar.rel = "stylesheet";
    customScrollbar.type = "text/css";
    document.head.appendChild(customScrollbar);

    const images = document.createElement("script");
    images.src = "https://" + hostName + "/nxb-nv.github.io/JS/Images/images.js";
    images.type = "text/javascript";
    document.head.appendChild(images);

    const topNavJS = document.createElement("script");
    topNavJS.src = "https://" + hostName + "/nxb-nv.github.io/JS/topNav.js";
    topNavJS.type = "text/javascript";
    document.head.appendChild(topNavJS);

    if (folderNinjutsus === 43) {
        const ninjutsu = document.createElement("script");
        ninjutsu.src = "https://" + hostName + "/nxb-nv.github.io/CardsTools/JS/ninjutsu.js";
        ninjutsu.type = "text/javascript";
        document.head.appendChild(ninjutsu);
    }
    if (folderTools === 23) {
        const toolFactory = document.createElement("script");
        toolFactory.src = "https://" + hostName + "/nxb-nv.github.io/CardsTools/JS/toolFactory.js";
        toolFactory.type = "text/javascript";
        document.head.appendChild(toolFactory);
    }
    if (folderUltimateJutsus === 43) {
        const UltimateJutsu = document.createElement("script");
        UltimateJutsu.src = "https://" + hostName + "/nxb-nv.github.io/CardsTools/JS/ultimateJutsu.js";
        UltimateJutsu.type = "text/javascript";
        document.head.appendChild(UltimateJutsu);
    }
}
cardsToolsScriptFiles();