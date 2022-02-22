function cardsToolsScriptFiles() {
    const hostName = window.location.host;
    const folderName = window.location.pathname;

    const scriptCardsTools = document.createElement("link");
    scriptCardsTools.href = "http://" + hostName + "/nxb-nv.github.io/CardsTools/CSS/CardsTools.css";
    scriptCardsTools.rel = "stylesheet";
    scriptCardsTools.type = "text/css";
    document.head.appendChild(scriptCardsTools);

    const topNavCSS = document.createElement("link");
    topNavCSS.href = "http://" + hostName + "/nxb-nv.github.io/CSS/CSSFromJS/topNav.css";
    topNavCSS.rel = "stylesheet";
    topNavCSS.type = "text/css";
    document.head.appendChild(topNavCSS);

    const animation = document.createElement("link");
    animation.href = "http://" + hostName + "/nxb-nv.github.io/CSS/animation.css";
    animation.rel = "stylesheet";
    animation.type = "text/css";
    document.head.appendChild(animation);

    const customScrollbar = document.createElement("link");
    customScrollbar.href = "http://" + hostName + "/nxb-nv.github.io/CSS/customScrollbar.css";
    customScrollbar.rel = "stylesheet";
    customScrollbar.type = "text/css";
    document.head.appendChild(customScrollbar);

    const images = document.createElement("script");
    images.src = "http://" + hostName + "/nxb-nv.github.io/JS/Images/images.js";
    images.type = "text/javascript";
    document.head.appendChild(images);

    const topNavJS = document.createElement("script");
    topNavJS.src = "http://" + hostName + "/nxb-nv.github.io/JS/topNav.js";
    topNavJS.type = "text/javascript";
    document.head.appendChild(topNavJS);

    if(folderName.charAt(43) === "N"){
        const ninjutsu = document.createElement("script");
        ninjutsu.src = "http://" + hostName + "/nxb-nv.github.io/CardsTools/JS/ninjutsu.js";
        ninjutsu.type = "text/javascript";
        document.head.appendChild(ninjutsu);
    }
    if(folderName.charAt(43) === "T"){
        const toolFactory = document.createElement("script");
        toolFactory.src = "http://" + hostName + "/nxb-nv.github.io/CardsTools/JS/toolFactory.js";
        toolFactory.type = "text/javascript";
        document.head.appendChild(toolFactory);
    }
    if(folderName.charAt(43) === "U"){
        const UltimateJutsu = document.createElement("script");
        UltimateJutsu.src = "http://" + hostName + "/nxb-nv.github.io/CardsTools/JS/ultimateJutsu.js";
        UltimateJutsu.type = "text/javascript";
        document.head.appendChild(UltimateJutsu);
    }
}
cardsToolsScriptFiles();