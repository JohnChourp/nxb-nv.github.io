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

function loadingScriptFile(){
	window.addEventListener('load',function(){
		let container = document.getElementsByClassName("container").item(0);
		container.style.display = "block";
	});
}
loadingScriptFile();