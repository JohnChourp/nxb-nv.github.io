function createCharactersTable(){
	let rows = [[]];
	const charactersTable = document.getElementById("charTable");
	
	rows[0] = charactersTable.rows[0].cells;
	
	rows[0][0].colSpan = "4";
	rows[0][0].id = "char";
	let charImage = document.createElement("img");
	charImage.classList.add("char");
	charImage.referrerPolicy = "no-referrer";
	charImage.src = rows[0][0].innerHTML;
	rows[0][0].innerHTML = "";
	rows[0][0].appendChild(charImage);
	
	rows[1] = charactersTable.rows[1].cells;
	
	rows[1][0].colSpan = "2";
	rows[1][0].classList.add("type");
	
	rows[1][1] = charactersTable.rows[1].insertCell(1);
	
	rows[1][1].colSpan = "2";
	let typeImage = document.createElement("img");
	typeImage.classList.add("typeImage");
	typeImage.referrerPolicy = "no-referrer";
	typeImage.alt = rows[1][0].innerHTML;
	rows[1][1].appendChild(typeImage);
	
	rows[2] = charactersTable.rows[2].cells;
	
	rows[2][0] = charactersTable.rows[2].insertCell(0);
	rows[2][0].colSpan = "2";
	rows[2][0].innerHTML = document.title + " Stat Cards";
	
	rows[2][1].colSpan = "2";
	let rankImage = document.createElement("img");
	rankImage.classList.add("rankImage");
	rankImage.alt = rows[2][1].innerHTML;
	rows[2][1].innerHTML = "";
	rankImage.referrerPolicy = "no-referrer";
	rows[2][1].appendChild(rankImage);
	
	rows[3] = charactersTable.rows[3].cells;
	
	rows[3][0].colSpan = "2";
	let abilityListImage = document.createElement("img");
	abilityListImage.classList.add("abilitiesListBtn");
	abilityListImage.referrerPolicy = "no-referrer";
	abilityListImage.src = rows[3][0].innerHTML;
	rows[3][0].innerHTML = "";
	
	let abilityListLink = document.createElement("a");
	let currentPageFileName = window.location.pathname.split("/").pop();
	let removeHtml = currentPageFileName.slice(0 , currentPageFileName.length - 5);
	abilityListLink.href = removeHtml + "-abilities-list.html";
	abilityListLink.appendChild(abilityListImage);
	rows[3][0].appendChild(abilityListLink);
	
	rows[3][1] = charactersTable.rows[3].insertCell(1);
	rows[3][1].outerHTML = "<th></th>";
	rows[3][1].colSpan = "2";
	let linkBoardImage = document.createElement("img");
	linkBoardImage.classList.add("linkBoardBtn");
	linkBoardImage.referrerPolicy = "no-referrer";
	linkBoardImage.src = "https://lh3.googleusercontent.com/pw/AM-JKLVO8FT6yX4NPoztbEgRIIfNUGOJSFnORJoi6czUTAcx6P1QpVI8tN8GwpAvBf0A85y72pbdB2BFKbiVTsgL-5AmUtIVRfVdSNsq_wvAT8tDYBAyhc_cvL0whJhBt6dbtGCAQs2JWLEiPrYst4zLlwMd=w259-h67-no?authuser=0";
	
	let linkBoardLink = document.createElement("a");
	currentPageFileName = window.location.pathname.split("/").pop();
	removeHtml = currentPageFileName.slice(0 , currentPageFileName.length - 5);
	linkBoardLink.href = removeHtml + "-link-board.html";
	linkBoardLink.appendChild(linkBoardImage);
	rows[3][1].appendChild(linkBoardLink);
	
}