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

function cardsAndToolsTable(){
	createCharactersTable();
	let rows = [[]];
	const cardsAndToolsTable = document.getElementById("cardsAndToolsTable");
	const UltimateJutsus5Star = document.getElementById("UltimateJutsus5Star");
	const Jutsus4Star = document.getElementById("Jutsus4Star");
	
	rows[0] = cardsAndToolsTable.rows[0].cells;
	rows[1] = cardsAndToolsTable.rows[1].cells;
	rows[2] = cardsAndToolsTable.rows[2].cells;
	rows[3] = cardsAndToolsTable.rows[3].cells;

	if(UltimateJutsus5Star){
		let rowsUltimateJutsus5Star = [[]];
		let UltimateJutsus5StarLength = UltimateJutsus5Star.rows.length;
		cardsAndToolsTable.rows[0].insertCell(0);
		rows[0][0].outerHTML = "<th>Ultimate Jutsus 5 Star</th>";
		rows[0][0].classList.add("cardsTypes");
		
		for(let i = 0; i < UltimateJutsus5StarLength; i ++){
			cardsAndToolsTable.rows[1].insertCell(i);
			
			rowsUltimateJutsus5Star[i] = UltimateJutsus5Star.rows[i].cells;
			
			let cardThumbImage = document.createElement("img");
			cardThumbImage.classList.add("cardThumb");
			cardThumbImage.referrerPolicy = "no-referrer";
			cardThumbImage.src = rowsUltimateJutsus5Star[i][0].innerHTML;
			
			let cardThumbLink = document.createElement("a");
			cardThumbLink.href = "../../CardsTools/NarutoUzumaki/UltimateJutsus/" + rowsUltimateJutsus5Star[i][1].innerHTML;
			cardThumbLink.appendChild(cardThumbImage);
			
			let figcaption = document.createElement("figcaption");
			figcaption.innerHTML = rowsUltimateJutsus5Star[i][2].innerHTML;
			
			let cardHoverFigure = document.createElement("figure");
			cardHoverFigure.classList.add("cardHover");
			cardHoverFigure.appendChild(cardThumbLink);
			cardHoverFigure.appendChild(figcaption);
			
			rows[1][i].appendChild(cardHoverFigure);
		}
	}
	
	if(Jutsus4Star){
		let rowsJutsus4Star = [[]];
		let Jutsus4StarLength = Jutsus4Star.rows.length;
		
		if(UltimateJutsus5Star){
			cardsAndToolsTable.rows[2].insertCell(0);
			rows[2][0].outerHTML = "<th>Jutsus 4 Star</th>";
			rows[2][0].classList.add("cardsTypes");
			
			for(let i = 0; i < Jutsus4StarLength; i ++){
				cardsAndToolsTable.rows[3].insertCell(i);
				rowsJutsus4Star[i] = Jutsus4Star.rows[i].cells;
				
				let cardThumbImage = document.createElement("img");
				cardThumbImage.classList.add("cardThumb");
				cardThumbImage.referrerPolicy = "no-referrer";
				cardThumbImage.src = rowsJutsus4Star[i][0].innerHTML;
				
				let cardThumbLink = document.createElement("a");
				cardThumbLink.href = "../../CardsTools/NarutoUzumaki/Ninjutsus4Star/" + rowsJutsus4Star[i][1].innerHTML;
				cardThumbLink.appendChild(cardThumbImage);
				
				let figcaption = document.createElement("figcaption");
				figcaption.innerHTML = rowsJutsus4Star[i][2].innerHTML;
				
				let cardHoverFigure = document.createElement("figure");
				cardHoverFigure.classList.add("cardHover");
				cardHoverFigure.appendChild(cardThumbLink);
				cardHoverFigure.appendChild(figcaption);
				
				rows[3][i].appendChild(cardHoverFigure);
			}
			
		}else{
			cardsAndToolsTable.rows[0].insertCell(0);
			rows[0][0].outerHTML = "<th>Jutsus 4 Star</th>";
			rows[0][0].classList.add("cardsTypes");
			
			for(let i = 0; i < Jutsus4StarLength; i ++){
				cardsAndToolsTable.rows[1].insertCell(i);
				rowsJutsus4Star[i] = Jutsus4Star.rows[i].cells;
				
				let cardThumbImage = document.createElement("img");
				cardThumbImage.classList.add("cardThumb");
				cardThumbImage.referrerPolicy = "no-referrer";
				cardThumbImage.src = rowsJutsus4Star[i][0].innerHTML;
				
				let cardThumbLink = document.createElement("a");
				cardThumbLink.href = "../../CardsTools/NarutoUzumaki/Ninjutsus4Star/" + rowsJutsus4Star[i][1].innerHTML;
				cardThumbLink.appendChild(cardThumbImage);
				
				let figcaption = document.createElement("figcaption");
				figcaption.innerHTML = rowsJutsus4Star[i][2].innerHTML;
				
				let cardHoverFigure = document.createElement("figure");
				cardHoverFigure.classList.add("cardHover");
				cardHoverFigure.appendChild(cardThumbLink);
				cardHoverFigure.appendChild(figcaption);
				
				rows[1][i].appendChild(cardHoverFigure);
			}
		}
	}
}