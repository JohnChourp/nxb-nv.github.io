function darkModeOptions(){
	localStorage.setItem("bgColorBody" , "#404040");
	localStorage.setItem("textColorBody" , "white");
	
	localStorage.setItem("myInputBgColor" , "#404040");
	localStorage.setItem("myInputTextColor" , "white");
	
	localStorage.setItem("paginationTextColor" , "white");
	localStorage.setItem("bgColorPaginator" , "#404040");
	localStorage.setItem("borderPaginatorA" , "1px solid #DDD");
	localStorage.setItem("bgColorPaginatorAHoverNotActive" , "#7C7A7A");
	
	localStorage.setItem("bgColorWebkitScrollbarTrack" , "#323232");
	localStorage.setItem("bgColorWebkitScrollbarThumb" , "#888");
	localStorage.setItem("bgColorWebkitScrollbarThumbHover" , "#696868");
}

function lightModeOptions(){
	localStorage.setItem("bgColorBody" , "white");
	localStorage.setItem("textColorBody" , "black");
	
	localStorage.removeItem("myInputBgColor");
	localStorage.removeItem("myInputTextColor");
	
	localStorage.setItem("paginationTextColor" , "black");
	localStorage.setItem("bgColorPaginator" , "white");
	localStorage.setItem("borderPaginatorA" , "1px solid black");
	localStorage.setItem("bgColorPaginatorAHoverNotActive" , "#989696");
	
	localStorage.setItem("bgColorWebkitScrollbarTrack" , "#F0F0F0");
	localStorage.setItem("bgColorWebkitScrollbarThumb" , "#CECECE");
	localStorage.setItem("bgColorWebkitScrollbarThumbHover" , "#A7A7A7");
}

function setModeValues(){
	const root = document.querySelector(':root');
	
	root.style.setProperty('--bg-color-body' , localStorage.getItem("bgColorBody"));
	root.style.setProperty('--text-color-body' , localStorage.getItem("textColorBody"));
	
	root.style.setProperty('--bg-color-myInput' , localStorage.getItem("myInputBgColor"));
	root.style.setProperty('--text-color-myInput' , localStorage.getItem("myInputTextColor"));
	
	
	root.style.setProperty('--text-color-paginator' , localStorage.getItem("paginationTextColor"));
	root.style.setProperty('--bg-color-paginator' , localStorage.getItem("bgColorPaginator"));
	root.style.setProperty('--border-paginator-a' , localStorage.getItem("borderPaginatorA"));
	root.style.setProperty('--bg-color-paginator-a-hover-not-active' , localStorage.getItem("bgColorPaginatorAHoverNotActive"));
	
	root.style.setProperty('--background-webkit-scrollbar-track' , localStorage.getItem("bgColorWebkitScrollbarTrack"));
	root.style.setProperty('--background-webkit-scrollbar-thumb' , localStorage.getItem("bgColorWebkitScrollbarThumb"));
	root.style.setProperty('--background-webkit-scrollbar-thumb-hover' , localStorage.getItem("bgColorWebkitScrollbarThumbHover"));
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
