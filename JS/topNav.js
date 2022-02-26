function createTopNav() {
    let hostName = window.location.host;

    let topNavDiv = document.createElement("div");
    topNavDiv.classList.add("topnav");
    document.body.insertAdjacentElement('afterbegin', topNavDiv);

    let charactersLink = document.createElement("a");
    charactersLink.href = "http://" + hostName + "/nxb-nv.github.io/index.html";
    charactersLink.innerHTML = "Characters";
    topNavDiv.appendChild(charactersLink);

    let ninjutsuCardsLink = document.createElement("a");
    ninjutsuCardsLink.href = "http://" + hostName + "/nxb-nv.github.io/ninjutsu-cards.html";
    ninjutsuCardsLink.innerHTML = "Ninjutsu Cards";
    topNavDiv.appendChild(ninjutsuCardsLink);
}