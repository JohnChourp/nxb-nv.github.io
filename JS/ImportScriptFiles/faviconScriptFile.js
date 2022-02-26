function faviconScriptFile(){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
	const favicon = document.createElement("link");
	favicon.href = httpLink + hostName + "/nxb-nv.github.io/favicon.ico";
	favicon.rel = "shortcut icon";
	favicon.type = "image/x-icon";
	document.head.appendChild(favicon);
}

faviconScriptFile();