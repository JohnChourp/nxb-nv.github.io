function darkModeOptions(){
	localStorage.setItem("bg-color-body" , "#404040");
	localStorage.setItem("text-color-body" , "white");
	
	localStorage.setItem("bg-color-myInput" , "#404040");
	localStorage.setItem("text-color-myInput" , "white");
	
	localStorage.setItem("text-color-paginator" , "white");
	localStorage.setItem("bg-color-paginator" , "#404040");
	localStorage.setItem("border-a-paginator" , "1px solid #DDD");
	localStorage.setItem("bg-color-a-hover-not-active-paginator" , "#7C7A7A");
	
	localStorage.setItem("bg-color-webkit-scrollbar-track" , "#323232");
	localStorage.setItem("bg-webkit-scrollbar-thumb" , "#888");
	localStorage.setItem("bg-webkit-scrollbar-thumb-hover" , "#696868");
}

function lightModeOptions(){
	localStorage.setItem("bg-color-body" , "white");
	localStorage.setItem("text-color-body" , "black");
	
	localStorage.removeItem("bg-color-myInput");
	localStorage.removeItem("text-color-myInput");
	
	localStorage.setItem("text-color-paginator" , "black");
	localStorage.setItem("bg-color-paginator" , "white");
	localStorage.setItem("border-a-paginator" , "1px solid black");
	localStorage.setItem("bg-color-a-hover-not-active-paginator" , "#989696");
	
	localStorage.setItem("bg-color-webkit-scrollbar-track" , "#F0F0F0");
	localStorage.setItem("bg-webkit-scrollbar-thumb" , "#CECECE");
	localStorage.setItem("bg-webkit-scrollbar-thumb-hover" , "#A7A7A7");
}

function setModeValues(){
	const root = document.querySelector(':root');
	
	root.style.setProperty('--bg-color-body' , localStorage.getItem("bg-color-body"));
	root.style.setProperty('--text-color-body' , localStorage.getItem("text-color-body"));
	
	root.style.setProperty('--bg-color-myInput' , localStorage.getItem("bg-color-myInput"));
	root.style.setProperty('--text-color-myInput' , localStorage.getItem("text-color-myInput"));
	
	root.style.setProperty('--text-color-paginator' , localStorage.getItem("text-color-paginator"));
	root.style.setProperty('--bg-color-paginator' , localStorage.getItem("bg-color-paginator"));
	root.style.setProperty('--border-a-paginator' , localStorage.getItem("border-a-paginator"));
	root.style.setProperty('--bg-color-a-hover-not-active-paginator' , localStorage.getItem("bg-color-paginator-a-hover-not-active"));
	
	root.style.setProperty('--bg-color-webkit-scrollbar-track' , localStorage.getItem("bg-color-webkit-scrollbar-track"));
	root.style.setProperty('--bg-webkit-scrollbar-thumb' , localStorage.getItem("bg-webkit-scrollbar-thumb"));
	root.style.setProperty('--bg-webkit-scrollbar-thumb-hover' , localStorage.getItem("bg-webkit-scrollbar-thumb-hover"));
}

function changeDarkMode(){
	let changeJquery = $(".change");
	let bodyJquery = $("body");
	
	if(localStorage.getItem("switchedTheme") === "yes"){
		bodyJquery.addClass("dark");
		changeJquery.text("ON");
		darkModeOptions();
	}
	
	changeJquery.on("click" , function(){
		if(bodyJquery.hasClass("dark")){
			bodyJquery.removeClass("dark");
			changeJquery.text("OFF");
			localStorage.setItem("switchedTheme" , "no");
			lightModeOptions();
		}else{
			bodyJquery.addClass("dark");
			changeJquery.text("ON");
			localStorage.setItem("switchedTheme" , "yes");
			darkModeOptions();
		}
		setModeValues();
	});
	setModeValues();
}
