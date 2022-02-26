function charactersScriptFiles(){
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
	
	const characterTable = document.createElement("link");
	characterTable.href = httpLink + hostName + "/nxb-nv.github.io/Characters/CSS/characterTable.css";
	characterTable.rel = "stylesheet";
	characterTable.type = "text/css";
	document.head.appendChild(characterTable);
	
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
	
	const topNavJS = document.createElement("script");
	topNavJS.src = httpLink + hostName + "/nxb-nv.github.io/JS/topNav.js";
	topNavJS.type = "text/javascript";
	document.head.appendChild(topNavJS);
}

charactersScriptFiles();