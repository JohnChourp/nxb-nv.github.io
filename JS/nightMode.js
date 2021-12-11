/*dark mode*/
function darkModeBody(){
	localStorage.setItem("bg-color-body" , "#404040");
	localStorage.setItem("text-color-body" , "white");
}

function darkModeMyInput(){
	localStorage.setItem("bg-color-myInput" , "#404040");
	localStorage.setItem("text-color-myInput" , "white");
}

function darkModePaginator(){
	localStorage.setItem("text-color-paginator" , "white");
	localStorage.setItem("bg-color-paginator" , "#404040");
	localStorage.setItem("border-a-paginator" , "1px solid #DDD");
	localStorage.setItem("bg-color-a-hover-not-active-paginator" , "#7C7A7A");
}

function darkModeScrollBar(){
	localStorage.setItem("bg-color-webkit-scrollbar-track" , "#323232");
	localStorage.setItem("bg-webkit-scrollbar-thumb" , "#888");
	localStorage.setItem("bg-webkit-scrollbar-thumb-hover" , "#696868");
}

/*dark mode*/

/*light mode*/
function lightModeBody(){
	localStorage.setItem("bg-color-body" , "white");
	localStorage.setItem("text-color-body" , "black");
}

function lightModeMyInput(){
	localStorage.removeItem("bg-color-myInput");
	localStorage.removeItem("text-color-myInput");
}

function lightModePaginator(){
	localStorage.setItem("text-color-paginator" , "black");
	localStorage.setItem("bg-color-paginator" , "white");
	localStorage.setItem("border-a-paginator" , "1px solid black");
	localStorage.setItem("bg-color-a-hover-not-active-paginator" , "#989696");
}

function lightModeScrollBar(){
	localStorage.setItem("bg-color-webkit-scrollbar-track" , "#F0F0F0");
	localStorage.setItem("bg-webkit-scrollbar-thumb" , "#CECECE");
	localStorage.setItem("bg-webkit-scrollbar-thumb-hover" , "#A7A7A7");
}

/*light mode*/

/*set mode*/
function setBody(){
	const root = document.querySelector(':root');
	root.style.setProperty('--bg-color-body' , localStorage.getItem("bg-color-body"));
	root.style.setProperty('--text-color-body' , localStorage.getItem("text-color-body"));
}

function setMyInput(){
	const root = document.querySelector(':root');
	root.style.setProperty('--bg-color-myInput' , localStorage.getItem("bg-color-myInput"));
	root.style.setProperty('--text-color-myInput' , localStorage.getItem("text-color-myInput"));
}

function setPaginator(){
	const root = document.querySelector(':root');
	root.style.setProperty('--text-color-paginator' , localStorage.getItem("text-color-paginator"));
	root.style.setProperty('--bg-color-paginator' , localStorage.getItem("bg-color-paginator"));
	root.style.setProperty('--border-a-paginator' , localStorage.getItem("border-a-paginator"));
	root.style.setProperty('--bg-color-a-hover-not-active-paginator' , localStorage.getItem("bg-color-paginator-a-hover-not-active"));
}

function setScrollBar(){
	const root = document.querySelector(':root');
	root.style.setProperty('--bg-color-webkit-scrollbar-track' , localStorage.getItem("bg-color-webkit-scrollbar-track"));
	root.style.setProperty('--bg-webkit-scrollbar-thumb' , localStorage.getItem("bg-webkit-scrollbar-thumb"));
	root.style.setProperty('--bg-webkit-scrollbar-thumb-hover' , localStorage.getItem("bg-webkit-scrollbar-thumb-hover"));
}

/*set mode*/

function changeDarkMode(){
	let changeJquery = $("#mode");
	let bodyJquery = $("body");
	
	if(localStorage.getItem("switchedTheme") === "yes"){
		bodyJquery.addClass("dark");
		changeJquery.text("Dark mode:ON");
		darkModeBody();
		darkModeMyInput();
		darkModePaginator();
		darkModeScrollBar();
	}
	
	changeJquery.on("click" , function(){
		if(bodyJquery.hasClass("dark")){
			bodyJquery.removeClass("dark");
			changeJquery.text("Dark mode:OFF");
			localStorage.setItem("switchedTheme" , "no");
			lightModeBody();
			lightModeMyInput();
			lightModePaginator();
			lightModeScrollBar();
		}else{
			bodyJquery.addClass("dark");
			changeJquery.text("Dark mode:ON");
			localStorage.setItem("switchedTheme" , "yes");
			darkModeBody();
			darkModeMyInput();
			darkModePaginator();
			darkModeScrollBar();
		}
		setBody();
		setMyInput();
		setPaginator();
		setScrollBar();
	});
	setBody();
	setMyInput();
	setPaginator();
	setScrollBar();
}
