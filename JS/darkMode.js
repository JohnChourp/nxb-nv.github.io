function darkModeSave(){
	let paginatorLength;
	const themeSwitch = document.querySelector(".theme-switch");
	const root = document.querySelector(':root');
	themeSwitch.checked = localStorage.getItem("switchedTheme") === "true";
	document.body.style.backgroundColor = localStorage.getItem("bgColor");
	document.body.style.color = localStorage.getItem("textColor");
	document.getElementById("myInput").style.backgroundColor = localStorage.getItem("myInputBgColor");
	document.getElementById("myInput").style.color = localStorage.getItem("myInputTextColor");
	
	let table = document.getElementById("sortTable");
	let tRowsLength = table.rows.length;
	let numberOfEntries = parseInt(localStorage.getItem("numberOfEntries"));
	
	if(!Number.isInteger(numberOfEntries)){
		numberOfEntries = 10;
		paginatorLength = Math.ceil(tRowsLength / numberOfEntries);
	}else{
		paginatorLength = Math.ceil(tRowsLength / numberOfEntries);
	}
	
	for(let i = 0; i < paginatorLength + 3; i ++){
		document.getElementById("pagination").children.item(i).style.color = localStorage.getItem("paginationTextColor");
	}
	
	root.style.setProperty('--bg-color-paginator' , localStorage.getItem("bgColorPaginator"));
	root.style.setProperty('--border-pagination-a' , localStorage.getItem("borderPaginationA"));
	root.style.setProperty('--bg-color-paginator-a-hover-not-active' , localStorage.getItem("bgColorPaginatorAHoverNotActive"));
	
	root.style.setProperty('--background-webkit-scrollbar-track' , localStorage.getItem("bgColorWebkitScrollbarTrack"));
	root.style.setProperty('--background-webkit-scrollbar-thumb' , localStorage.getItem("bgColorWebkitScrollbarThumb"));
	root.style.setProperty('--background-webkit-scrollbar-thumb-hover' , localStorage.getItem("bgColorWebkitScrollbarThumbHover"));
	
	themeSwitch.addEventListener("change" , function(e){
		if(e.currentTarget.checked === true){
			localStorage.setItem("switchedTheme" , "true");
			localStorage.setItem("bgColor" , "#404040");
			localStorage.setItem("textColor" , "white");
			localStorage.setItem("myInputBgColor" , "#404040");
			localStorage.setItem("myInputTextColor" , "white");
			
			localStorage.setItem("paginationTextColor" , "white");
			localStorage.setItem("bgColorPaginator" , "#404040");
			localStorage.setItem("borderPaginationA" , "1px solid #DDD");
			localStorage.setItem("bgColorPaginatorAHoverNotActive" , "#7C7A7A");
			
			localStorage.setItem("bgColorWebkitScrollbarTrack" , "#323232");
			localStorage.setItem("bgColorWebkitScrollbarThumb" , "#888");
			localStorage.setItem("bgColorWebkitScrollbarThumbHover" , "#696868");
		}else{
			localStorage.removeItem("switchedTheme");
			localStorage.removeItem("bgColor");
			localStorage.removeItem("textColor");
			localStorage.removeItem("myInputBgColor");
			localStorage.removeItem("myInputTextColor");
			localStorage.removeItem("paginationTextColor");
			localStorage.setItem("bgColorPaginator" , "white");
			localStorage.setItem("borderPaginationA" , "1px solid black");
			localStorage.setItem("bgColorPaginatorAHoverNotActive" , "#989696");
			
			localStorage.setItem("bgColorWebkitScrollbarTrack" , "#F0F0F0");
			localStorage.setItem("bgColorWebkitScrollbarThumb" , "#CECECE");
			localStorage.setItem("bgColorWebkitScrollbarThumbHover" , "#A7A7A7");
		}
		location.reload();
	});
}