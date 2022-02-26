function linkBoardScriptFiles() {
    let httpLink;
    let hostName = window.location.host;
    
    if(hostName === "johnchourp.github.io"){
        httpLink = "https://";
    }else{
        httpLink = "http://";
    }
    
    const characters = document.createElement("link");
    characters.href = httpLink + hostName + "/nxb-nv.github.io/Characters/CSS/characters.css";
    characters.rel = "stylesheet";
    characters.type = "text/css";
    document.head.appendChild(characters);
    
    const linkBoardTableCSS = document.createElement("link");
    linkBoardTableCSS.href = httpLink + hostName + "/nxb-nv.github.io/Characters/CSS/linkBoardTable.css";
    linkBoardTableCSS.rel = "stylesheet";
    linkBoardTableCSS.type = "text/css";
    document.head.appendChild(linkBoardTableCSS);
    
    const topNavCSS = document.createElement("link");
    topNavCSS.href = httpLink + hostName + "/nxb-nv.github.io/CSS/CSSFromJS/topNav.css";
    topNavCSS.rel = "stylesheet";
    topNavCSS.type = "text/css";
    document.head.appendChild(topNavCSS);
    
    const animation = document.createElement("link");
    animation.href = httpLink + hostName + "/nxb-nv.github.io/CSS/animation.css";
    animation.rel = "stylesheet";
    animation.type = "text/css";
    document.head.appendChild(animation);
    
    const customScrollbar = document.createElement("link");
    customScrollbar.href = httpLink + hostName + "/nxb-nv.github.io/CSS/customScrollbar.css";
    customScrollbar.rel = "stylesheet";
    customScrollbar.type = "text/css";
    document.head.appendChild(customScrollbar);
    
    const pointerCursor = document.createElement("link");
    pointerCursor.href = httpLink + hostName + "/nxb-nv.github.io/CSS/pointerCursor.css";
    pointerCursor.rel = "stylesheet";
    pointerCursor.type = "text/css";
    document.head.appendChild(pointerCursor);
    
    const images = document.createElement("script");
    images.src = httpLink + hostName + "/nxb-nv.github.io/JS/Images/images.js";
    images.type = "text/javascript";
    document.head.appendChild(images);
    
    const linkBoardTableJS = document.createElement("script");
    linkBoardTableJS.src = httpLink + hostName + "/nxb-nv.github.io/Characters/JS/linkBoardTable.js";
    linkBoardTableJS.type = "text/javascript";
    document.head.appendChild(linkBoardTableJS);
    
    const linkBoardImages = document.createElement("script");
    linkBoardImages.src = httpLink + hostName + "/nxb-nv.github.io/JS/Images/linkBoardImages.js";
    linkBoardImages.type = "text/javascript";
    document.head.appendChild(linkBoardImages);
    
    const topNavJS = document.createElement("script");
    topNavJS.src = httpLink + hostName + "/nxb-nv.github.io/JS/topNav.js";
    topNavJS.type = "text/javascript";
    document.head.appendChild(topNavJS);
}
linkBoardScriptFiles();