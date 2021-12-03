/*paginator*/
function paginatorDarkModeOptions(){
	localStorage.setItem("paginationTextColor" , "white");
	localStorage.setItem("bgColorPaginator" , "#404040");
	localStorage.setItem("borderPaginationA" , "1px solid #DDD");
	localStorage.setItem("bgColorPaginatorAHoverNotActive" , "#7C7A7A");
}

function paginatorLightModeOptions(){
	localStorage.removeItem("paginationTextColor");
	localStorage.setItem("bgColorPaginator" , "white");
	localStorage.setItem("borderPaginationA" , "1px solid black");
	localStorage.setItem("bgColorPaginatorAHoverNotActive" , "#989696");
}

function paginatorSetModeValues(){
	const root = document.querySelector(':root');
	let paginatorLength;
	
	let table = document.getElementById("sortTable");
	let tRowsLength = table.rows.length;
	paginatorLength = Math.ceil(tRowsLength / 10);
	
	for(let i = 0; i < paginatorLength + 3; i ++){
		document.getElementById("pagination").children.item(i).style.color = localStorage.getItem("paginationTextColor");
	}
	
	root.style.setProperty('--bg-color-paginator' , localStorage.getItem("bgColorPaginator"));
	root.style.setProperty('--border-pagination-a' , localStorage.getItem("borderPaginationA"));
	root.style.setProperty('--bg-color-paginator-a-hover-not-active' , localStorage.getItem("bgColorPaginatorAHoverNotActive"));
}
/*paginator*/

/*body*/
function bodyDarkModeOptions(){
	localStorage.setItem("bgColorBody" , "#404040");
	localStorage.setItem("textColorBody" , "white");
}

function bodyLightModeOptions(){
	localStorage.setItem("bgColorBody" , "white");
	localStorage.setItem("textColorBody" , "black");
}

function bodySetModeValues(){
	const root = document.querySelector(':root');
	root.style.setProperty('--bg-color-body' , localStorage.getItem("bgColorBody"));
	root.style.setProperty('--text-color-body' , localStorage.getItem("textColorBody"));
}
/*body*/

/*myInput*/
function myInputDarkModeOptions(){
	localStorage.setItem("myInputBgColor" , "#404040");
	localStorage.setItem("myInputTextColor" , "white");
}

function myInputLightModeOptions(){
	localStorage.removeItem("myInputBgColor");
	localStorage.removeItem("myInputTextColor");
}

function myInputSetModeValues(){
	const root = document.querySelector(':root');
	root.style.setProperty('--bg-color-myInput' , localStorage.getItem("myInputBgColor"));
	root.style.setProperty('--text-color-myInput' , localStorage.getItem("myInputTextColor"));
}
/*myInput*/

/*scrollBar*/
function scrollBarDarkModeOptions(){
	localStorage.setItem("bgColorWebkitScrollbarTrack" , "#323232");
	localStorage.setItem("bgColorWebkitScrollbarThumb" , "#888");
	localStorage.setItem("bgColorWebkitScrollbarThumbHover" , "#696868");
}

function scrollBarLightModeOptions(){
	localStorage.setItem("bgColorWebkitScrollbarTrack" , "#F0F0F0");
	localStorage.setItem("bgColorWebkitScrollbarThumb" , "#CECECE");
	localStorage.setItem("bgColorWebkitScrollbarThumbHover" , "#A7A7A7");
}

function scrollBarSetModeValues(){
	const root = document.querySelector(':root');
	root.style.setProperty('--background-webkit-scrollbar-track' , localStorage.getItem("bgColorWebkitScrollbarTrack"));
	root.style.setProperty('--background-webkit-scrollbar-thumb' , localStorage.getItem("bgColorWebkitScrollbarThumb"));
	root.style.setProperty('--background-webkit-scrollbar-thumb-hover' , localStorage.getItem("bgColorWebkitScrollbarThumbHover"));
}
/*scrollBar*/

function darkModeIndex(){
	let changeJquery = $(".change");
	let bodyJquery = $("body");
	
	if(localStorage.getItem("switchedTheme") === "yes"){
		bodyJquery.addClass("dark");
		changeJquery.text("ON");
		bodyDarkModeOptions();
		myInputDarkModeOptions();
		scrollBarDarkModeOptions();
	}
	changeJquery.on("click" , function(){
		if(bodyJquery.hasClass("dark")){
			bodyJquery.removeClass("dark");
			changeJquery.text("OFF");
			localStorage.setItem("switchedTheme" , "no");
			bodyLightModeOptions();
			myInputLightModeOptions();
			scrollBarLightModeOptions();
		}else{
			bodyJquery.addClass("dark");
			changeJquery.text("ON");
			localStorage.setItem("switchedTheme" , "yes");
			bodyDarkModeOptions();
			myInputDarkModeOptions();
			scrollBarDarkModeOptions();
		}
		bodySetModeValues();
		myInputSetModeValues();
		scrollBarSetModeValues();
	});
	bodySetModeValues();
	myInputSetModeValues();
	scrollBarSetModeValues();
}

function darkModeAllNinjutsuCards(){
	let changeJquery = $(".change");
	let bodyJquery = $("body");
	
	if(localStorage.getItem("switchedTheme") === "yes"){
		bodyJquery.addClass("dark");
		changeJquery.text("ON");
		bodyDarkModeOptions();
		myInputDarkModeOptions();
		scrollBarDarkModeOptions();
		paginatorDarkModeOptions();
	}
	changeJquery.on("click" , function(){
		if(bodyJquery.hasClass("dark")){
			bodyJquery.removeClass("dark");
			changeJquery.text("OFF");
			localStorage.setItem("switchedTheme" , "no");
			bodyLightModeOptions();
			myInputLightModeOptions();
			scrollBarLightModeOptions();
			paginatorLightModeOptions();
		}else{
			bodyJquery.addClass("dark");
			changeJquery.text("ON");
			localStorage.setItem("switchedTheme" , "yes");
			bodyDarkModeOptions();
			myInputDarkModeOptions();
			scrollBarDarkModeOptions();
			paginatorDarkModeOptions();
		}
		bodySetModeValues();
		myInputSetModeValues();
		scrollBarSetModeValues();
		paginatorSetModeValues();
	});
	bodySetModeValues();
	myInputSetModeValues();
	scrollBarSetModeValues();
	paginatorSetModeValues();
}

