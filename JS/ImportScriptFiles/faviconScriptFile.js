function faviconScriptFile() {
    let hostName = window.location.host;

    const favicon = document.createElement("link");
    favicon.href = "http://" + hostName + "/nxb-nv.github.io/favicon.ico";
    favicon.rel = "shortcut icon";
    favicon.type = "image/x-icon";
    document.head.appendChild(favicon);
}
faviconScriptFile();