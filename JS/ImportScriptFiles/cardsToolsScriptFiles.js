function cardsToolsScriptFiles(){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
	const scriptCardsTools = document.createElement("link");
	scriptCardsTools.href = httpLink + hostName + "/nxb-nv.github.io/CardsTools/CSS/CardsTools.css";
	scriptCardsTools.rel = "stylesheet";
	scriptCardsTools.type = "text/css";
	document.head.appendChild(scriptCardsTools);
	
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
	
	const images = document.createElement("script");
	images.src = httpLink + hostName + "/nxb-nv.github.io/JS/Images/images.js";
	images.type = "text/javascript";
	document.head.appendChild(images);
	
	const topNavJS = document.createElement("script");
	topNavJS.src = httpLink + hostName + "/nxb-nv.github.io/JS/topNav.js";
	topNavJS.type = "text/javascript";
	document.head.appendChild(topNavJS);
	
	const folderNinjutsus1Star = window.location.pathname.match("/Ninjutsus1Star/");
	const folderNinjutsus3Star = window.location.pathname.match("/Ninjutsus3Star/");
	const folderNinjutsus4Star = window.location.pathname.match("/Ninjutsus4Star/");
	const folderNinjutsus5Star = window.location.pathname.match("/Ninjutsus5Star/");
	const folderTools5Star = window.location.pathname.match("/Tools5Star/");
	const folderTools4Star = window.location.pathname.match("/Tools4Star/");
	const folderToolsFactory5Star = window.location.pathname.match("/ToolsFactory5Star/");
	const folderToolsFactory4Star = window.location.pathname.match("/ToolsFactory4Star/");
	const folderUltimateJutsus5Star = window.location.pathname.match("/UltimateJutsus5Star/");
	const folderUltimateJutsus6Star = window.location.pathname.match("/UltimateJutsus6Star/");
	
	if((folderNinjutsus1Star !== null) || (folderNinjutsus3Star !== null) || (folderNinjutsus4Star !== null) || (folderNinjutsus5Star !== null)){
		const ninjutsu = document.createElement("script");
		ninjutsu.src = httpLink + hostName + "/nxb-nv.github.io/CardsTools/JS/ninjutsu.js";
		ninjutsu.type = "text/javascript";
		document.head.appendChild(ninjutsu);
	}

	if((folderTools5Star !== null) || (folderTools4Star !== null)){
		const toolFactory = document.createElement("script");
		toolFactory.src = httpLink + hostName + "/nxb-nv.github.io/CardsTools/JS/tool.js";
		toolFactory.type = "text/javascript";
		document.head.appendChild(toolFactory);
	}
	
	if((folderToolsFactory5Star !== null) || (folderToolsFactory4Star !== null)){
		let toolFactory = document.createElement("script");
		toolFactory.src = httpLink + hostName + "/nxb-nv.github.io/CardsTools/JS/tool.js";
		toolFactory.type = "text/javascript";
		document.head.appendChild(toolFactory);
		
		toolFactory = document.createElement("script");
		toolFactory.src = httpLink + hostName + "/nxb-nv.github.io/CardsTools/JS/toolFactory.js";
		toolFactory.type = "text/javascript";
		document.head.appendChild(toolFactory);
	}
	
	if((folderUltimateJutsus5Star !== null) || (folderUltimateJutsus6Star !== null)){
		const UltimateJutsu = document.createElement("script");
		UltimateJutsu.src = httpLink + hostName + "/nxb-nv.github.io/CardsTools/JS/ultimateJutsu.js";
		UltimateJutsu.type = "text/javascript";
		document.head.appendChild(UltimateJutsu);
	}
}

cardsToolsScriptFiles();