function darkModeSave(){
	// This code is only used to remember theme selection between page loads
	const themeSwitch = document.querySelector(".theme-switch");
	const root = document.querySelector(':root');
	themeSwitch.checked = localStorage.getItem("switchedTheme") === "true";
	document.body.style.backgroundColor = localStorage.getItem("bgColor");
	document.body.style.color = localStorage.getItem("textColor");
	document.getElementById("myInput").style.backgroundColor = localStorage.getItem("myInputBgColor");
	document.getElementById("myInput").style.color = localStorage.getItem("myInputTextColor");
	
	for(let i=0;i<13;i++){
		document.getElementById("pagination").children.item(i).style.color = localStorage.getItem("paginationTextColor");
	}
	root.style.setProperty('--bg-color-paginator', localStorage.getItem("paginationBgColor"));
	
	themeSwitch.addEventListener("change" , function(e){
		if(e.currentTarget.checked === true){
			// Add item to localstorage
			localStorage.setItem("switchedTheme" , "true");
			localStorage.setItem("bgColor" , "#404040");
			localStorage.setItem("textColor" , "white");
			localStorage.setItem("myInputBgColor" , "#404040");
			localStorage.setItem("myInputTextColor" , "white");
			localStorage.setItem("paginationTextColor" , "white");
			localStorage.setItem("paginationBgColor" , "#7c7a7a");
			
			location.reload();
		}else{
			// Remove item if theme is switched back to normal
			localStorage.removeItem("switchedTheme");
			localStorage.removeItem("bgColor");
			localStorage.removeItem("textColor");
			localStorage.removeItem("myInputBgColor");
			localStorage.removeItem("myInputTextColor");
			localStorage.removeItem("paginationTextColor");
			localStorage.removeItem("paginationBgColor");
			
			location.reload();
		}
	});
}