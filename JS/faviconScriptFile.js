function faviconScriptFile() {
    const favicon = document.createElement("link");
    favicon.href = "/../favicon.ico";
    favicon.rel = "shortcut icon";
    favicon.type = "image/x-icon";
    document.head.appendChild(favicon);
}
faviconScriptFile();