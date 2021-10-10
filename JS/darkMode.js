function darkModeSave() {
	// This code is only used to remember theme selection between page loads
	const themeSwitch = document.querySelector(".theme-switch");
	themeSwitch.checked = localStorage.getItem("switchedTheme") === "true";
	document.body.style.backgroundColor = localStorage.getItem("bgColor");
	document.body.style.color = localStorage.getItem("textColor");
	document.getElementById("myInput").style.backgroundColor = localStorage.getItem("myInputBgColor");
	document.getElementById("myInput").style.color = localStorage.getItem("myInputTextColor");
	
	themeSwitch.addEventListener("change", function(e) {
		if (e.currentTarget.checked === true) {
			// Add item to localstorage
			localStorage.setItem("switchedTheme", "true");
			localStorage.setItem("bgColor","#404040");
			localStorage.setItem("textColor","white");
			localStorage.setItem("myInputBgColor","#404040");
			localStorage.setItem("myInputTextColor","white");
			location.reload();
		} else {
			// Remove item if theme is switched back to normal
			localStorage.removeItem("switchedTheme");
			localStorage.removeItem("bgColor");
			localStorage.removeItem("textColor");
			localStorage.removeItem("myInputBgColor");
			localStorage.removeItem("myInputTextColor");
			location.reload();
		}
	});
}