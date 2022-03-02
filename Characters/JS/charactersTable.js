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
	
	if(rankImage.alt === "7 Star"){
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
	}else{
		rows[3][0].colSpan ="4";
	}
}

function cardsAndToolsTable(){
	createCharactersTable();
	let rows = [[]] , sumOfRows = 0;
	const table = document.getElementById("cardsAndToolsTable");
	let characterFolder = window.location.pathname.split('/')[3];
	
	const Ult6 = document.getElementById("UltimateJutsus6Star");
	const Ult5 = document.getElementById("UltimateJutsus5Star");
	const J5 = document.getElementById("Jutsus5Star");
	const J4 = document.getElementById("Jutsus4Star");
	const J3 = document.getElementById("Jutsus3Star");
	const J1 = document.getElementById("Jutsus1Star");
	const T5 = document.getElementById("Tools5Star");
	const T4 = document.getElementById("Tools4Star");
	
	if(Ult6){
		table.insertRow(sumOfRows);
		table.insertRow(sumOfRows + 1);
		table.rows[sumOfRows + 1].classList.add("cardsTypesFlex");
		rows[sumOfRows] = table.rows[sumOfRows].cells;
		rows[sumOfRows + 1] = table.rows[sumOfRows + 1].cells;
		
		let rowsUlt6 = [[]];
		let Ult6Length = Ult6.rows.length;
		
		table.rows[sumOfRows].insertCell(0);
		rows[sumOfRows][0].outerHTML = "<th>Ultimate Jutsus 6 Star</th>";
		rows[sumOfRows][0].classList.add("cardsTypes");
		
		for(let i = 0; i < Ult6Length; i ++){
			table.rows[sumOfRows + 1].insertCell(i);
			rowsUlt6[i] = Ult6.rows[i].cells;
			
			let cardThumbImage = document.createElement("img");
			cardThumbImage.classList.add("cardThumb");
			cardThumbImage.referrerPolicy = "no-referrer";
			cardThumbImage.src = rowsUlt6[i][0].innerHTML;
			
			let cardThumbLink = document.createElement("a");
			cardThumbLink.href = "../../CardsTools/"+characterFolder+"/UltimateJutsus6Star/" + rowsUlt6[i][1].innerHTML;
			cardThumbLink.appendChild(cardThumbImage);
			
			let figcaption = document.createElement("figcaption");
			figcaption.innerHTML = rowsUlt6[i][2].innerHTML;
			
			let cardHoverFigure = document.createElement("figure");
			cardHoverFigure.classList.add("cardHover");
			cardHoverFigure.appendChild(cardThumbLink);
			cardHoverFigure.appendChild(figcaption);
			
			rows[sumOfRows + 1][i].appendChild(cardHoverFigure);
		}
		sumOfRows = sumOfRows + 2;
	}
	
	if(Ult5){
		table.insertRow(sumOfRows);
		table.insertRow(sumOfRows + 1);
		table.rows[sumOfRows + 1].classList.add("cardsTypesFlex");
		rows[sumOfRows] = table.rows[sumOfRows].cells;
		rows[sumOfRows + 1] = table.rows[sumOfRows + 1].cells;
		
		let rowsUlt5 = [[]];
		let Ult5Length = Ult5.rows.length;
		
		table.rows[sumOfRows].insertCell(0);
		rows[sumOfRows][0].outerHTML = "<th>Ultimate Jutsus 5 Star</th>";
		rows[sumOfRows][0].classList.add("cardsTypes");
		
		for(let i = 0; i < Ult5Length; i ++){
			table.rows[sumOfRows + 1].insertCell(i);
			rowsUlt5[i] = Ult5.rows[i].cells;
			
			let cardThumbImage = document.createElement("img");
			cardThumbImage.classList.add("cardThumb");
			cardThumbImage.referrerPolicy = "no-referrer";
			cardThumbImage.src = rowsUlt5[i][0].innerHTML;
			
			let cardThumbLink = document.createElement("a");
			cardThumbLink.href = "../../CardsTools/"+characterFolder+"/UltimateJutsus5Star/" + rowsUlt5[i][1].innerHTML;
			cardThumbLink.appendChild(cardThumbImage);
			
			let figcaption = document.createElement("figcaption");
			figcaption.innerHTML = rowsUlt5[i][2].innerHTML;
			
			let cardHoverFigure = document.createElement("figure");
			cardHoverFigure.classList.add("cardHover");
			cardHoverFigure.appendChild(cardThumbLink);
			cardHoverFigure.appendChild(figcaption);
			
			rows[sumOfRows + 1][i].appendChild(cardHoverFigure);
		}
		sumOfRows = sumOfRows + 2;
	}
	
	if(J5){
		table.insertRow(sumOfRows);
		table.insertRow(sumOfRows + 1);
		table.rows[sumOfRows + 1].classList.add("cardsTypesFlex");
		rows[sumOfRows] = table.rows[sumOfRows].cells;
		rows[sumOfRows + 1] = table.rows[sumOfRows + 1].cells;
		
		let rowsJ5 = [[]];
		let J5Length = J5.rows.length;
		
		table.rows[sumOfRows].insertCell(0);
		rows[sumOfRows][0].outerHTML = "<th>Jutsus 4 Star</th>";
		rows[sumOfRows][0].classList.add("cardsTypes");
		
		for(let i = 0; i < J5Length; i ++){
			table.rows[sumOfRows + 1].insertCell(i);
			rowsJ5[i] = J5.rows[i].cells;
			
			let cardThumbImage = document.createElement("img");
			cardThumbImage.classList.add("cardThumb");
			cardThumbImage.referrerPolicy = "no-referrer";
			cardThumbImage.src = rowsJ5[i][0].innerHTML;
			
			let cardThumbLink = document.createElement("a");
			cardThumbLink.href = "../../CardsTools/"+characterFolder+"/Ninjutsus5Star/" + rowsJ5[i][1].innerHTML;
			cardThumbLink.appendChild(cardThumbImage);
			
			let figcaption = document.createElement("figcaption");
			figcaption.innerHTML = rowsJ5[i][2].innerHTML;
			
			let cardHoverFigure = document.createElement("figure");
			cardHoverFigure.classList.add("cardHover");
			cardHoverFigure.appendChild(cardThumbLink);
			cardHoverFigure.appendChild(figcaption);
			
			rows[sumOfRows + 1][i].appendChild(cardHoverFigure);
		}
		sumOfRows = sumOfRows + 2;
	}
	
	if(J4){
		table.insertRow(sumOfRows);
		table.insertRow(sumOfRows + 1);
		table.rows[sumOfRows + 1].classList.add("cardsTypesFlex");
		rows[sumOfRows] = table.rows[sumOfRows].cells;
		rows[sumOfRows + 1] = table.rows[sumOfRows + 1].cells;
		
		let rowsJ4 = [[]];
		let J4Length = J4.rows.length;
		
		table.rows[sumOfRows].insertCell(0);
		rows[sumOfRows][0].outerHTML = "<th>Jutsus 4 Star</th>";
		rows[sumOfRows][0].classList.add("cardsTypes");
		
		for(let i = 0; i < J4Length; i ++){
			table.rows[sumOfRows + 1].insertCell(i);
			rowsJ4[i] = J4.rows[i].cells;
			
			let cardThumbImage = document.createElement("img");
			cardThumbImage.classList.add("cardThumb");
			cardThumbImage.referrerPolicy = "no-referrer";
			cardThumbImage.src = rowsJ4[i][0].innerHTML;
			
			let cardThumbLink = document.createElement("a");
			cardThumbLink.href = "../../CardsTools/"+characterFolder+"/Ninjutsus4Star/" + rowsJ4[i][1].innerHTML;
			cardThumbLink.appendChild(cardThumbImage);
			
			let figcaption = document.createElement("figcaption");
			figcaption.innerHTML = rowsJ4[i][2].innerHTML;
			
			let cardHoverFigure = document.createElement("figure");
			cardHoverFigure.classList.add("cardHover");
			cardHoverFigure.appendChild(cardThumbLink);
			cardHoverFigure.appendChild(figcaption);
			
			rows[sumOfRows + 1][i].appendChild(cardHoverFigure);
		}
		sumOfRows = sumOfRows + 2;
	}
	
	if(J3){
		table.insertRow(sumOfRows);
		table.insertRow(sumOfRows + 1);
		table.rows[sumOfRows + 1].classList.add("cardsTypesFlex");
		rows[sumOfRows] = table.rows[sumOfRows].cells;
		rows[sumOfRows + 1] = table.rows[sumOfRows + 1].cells;
		
		let rowsJ3 = [[]];
		let J3Length = J3.rows.length;
		
		table.rows[sumOfRows].insertCell(0);
		rows[sumOfRows][0].outerHTML = "<th>Jutsus 3 Star</th>";
		rows[sumOfRows][0].classList.add("cardsTypes");
		
		for(let i = 0; i < J3Length; i ++){
			table.rows[sumOfRows + 1].insertCell(i);
			rowsJ3[i] = J3.rows[i].cells;
			
			let cardThumbImage = document.createElement("img");
			cardThumbImage.classList.add("cardThumb");
			cardThumbImage.referrerPolicy = "no-referrer";
			cardThumbImage.src = rowsJ3[i][0].innerHTML;
			
			let cardThumbLink = document.createElement("a");
			cardThumbLink.href = "../../CardsTools/"+characterFolder+"/Ninjutsus3Star/" + rowsJ3[i][1].innerHTML;
			cardThumbLink.appendChild(cardThumbImage);
			
			let figcaption = document.createElement("figcaption");
			figcaption.innerHTML = rowsJ3[i][2].innerHTML;
			
			let cardHoverFigure = document.createElement("figure");
			cardHoverFigure.classList.add("cardHover");
			cardHoverFigure.appendChild(cardThumbLink);
			cardHoverFigure.appendChild(figcaption);
			
			rows[sumOfRows + 1][i].appendChild(cardHoverFigure);
		}
		sumOfRows = sumOfRows + 2;
	}
	
	if(J1){
		table.insertRow(sumOfRows);
		table.insertRow(sumOfRows + 1);
		table.rows[sumOfRows + 1].classList.add("cardsTypesFlex");
		rows[sumOfRows] = table.rows[sumOfRows].cells;
		rows[sumOfRows + 1] = table.rows[sumOfRows + 1].cells;
		
		let rowsJ1 = [[]];
		let J1Length = J1.rows.length;
		
		table.rows[sumOfRows].insertCell(0);
		rows[sumOfRows][0].outerHTML = "<th>Jutsus 1 Star</th>";
		rows[sumOfRows][0].classList.add("cardsTypes");
		
		for(let i = 0; i < J1Length; i ++){
			table.rows[sumOfRows + 1].insertCell(i);
			rowsJ1[i] = J1.rows[i].cells;
			
			let cardThumbImage = document.createElement("img");
			cardThumbImage.classList.add("cardThumb");
			cardThumbImage.referrerPolicy = "no-referrer";
			cardThumbImage.src = rowsJ1[i][0].innerHTML;
			
			let cardThumbLink = document.createElement("a");
			cardThumbLink.href = "../../CardsTools/"+characterFolder+"/Ninjutsus1Star/" + rowsJ1[i][1].innerHTML;
			cardThumbLink.appendChild(cardThumbImage);
			
			let figcaption = document.createElement("figcaption");
			figcaption.innerHTML = rowsJ1[i][2].innerHTML;
			
			let cardHoverFigure = document.createElement("figure");
			cardHoverFigure.classList.add("cardHover");
			cardHoverFigure.appendChild(cardThumbLink);
			cardHoverFigure.appendChild(figcaption);
			
			rows[sumOfRows + 1][i].appendChild(cardHoverFigure);
		}
		sumOfRows = sumOfRows + 2;
	}
	
	if(T5){
		table.insertRow(sumOfRows);
		table.insertRow(sumOfRows + 1);
		table.rows[sumOfRows + 1].classList.add("cardsTypesFlex");
		rows[sumOfRows] = table.rows[sumOfRows].cells;
		rows[sumOfRows + 1] = table.rows[sumOfRows + 1].cells;
		
		let rowsT5 = [[]];
		let T5Length = T5.rows.length;
		
		table.rows[sumOfRows].insertCell(0);
		rows[sumOfRows][0].outerHTML = "<th>Tools 5 Star</th>";
		rows[sumOfRows][0].classList.add("cardsTypes");
		
		for(let i = 0; i < T5Length; i ++){
			table.rows[sumOfRows + 1].insertCell(i);
			rowsT5[i] = T5.rows[i].cells;
			
			let cardThumbImage = document.createElement("img");
			cardThumbImage.classList.add("toolThumb");
			cardThumbImage.referrerPolicy = "no-referrer";
			cardThumbImage.src = rowsT5[i][0].innerHTML;
			
			let cardThumbLink = document.createElement("a");
			cardThumbLink.href = "../../CardsTools/"+characterFolder+"/Tools5Star/" + rowsT5[i][1].innerHTML;
			cardThumbLink.appendChild(cardThumbImage);
			
			let figcaption = document.createElement("figcaption");
			figcaption.innerHTML = rowsT5[i][2].innerHTML;
			
			let cardHoverFigure = document.createElement("figure");
			cardHoverFigure.classList.add("cardHover");
			cardHoverFigure.appendChild(cardThumbLink);
			cardHoverFigure.appendChild(figcaption);
			
			rows[sumOfRows + 1][i].appendChild(cardHoverFigure);
		}
		sumOfRows = sumOfRows + 2;
	}
	
	if(T4){
		table.insertRow(sumOfRows);
		table.insertRow(sumOfRows + 1);
		table.rows[sumOfRows + 1].classList.add("cardsTypesFlex");
		rows[sumOfRows] = table.rows[sumOfRows].cells;
		rows[sumOfRows + 1] = table.rows[sumOfRows + 1].cells;
		
		let rowsT4 = [[]];
		let T4Length = T4.rows.length;
		
		table.rows[sumOfRows].insertCell(0);
		rows[sumOfRows][0].outerHTML = "<th>Tools 4 Star</th>";
		rows[sumOfRows][0].classList.add("cardsTypes");
		
		for(let i = 0; i < T4Length; i ++){
			table.rows[sumOfRows + 1].insertCell(i);
			rowsT4[i] = T4.rows[i].cells;
			
			let cardThumbImage = document.createElement("img");
			cardThumbImage.classList.add("toolThumb");
			cardThumbImage.referrerPolicy = "no-referrer";
			cardThumbImage.src = rowsT4[i][0].innerHTML;
			
			let cardThumbLink = document.createElement("a");
			cardThumbLink.href = "../../CardsTools/"+characterFolder+"/Tools4Star/" + rowsT4[i][1].innerHTML;
			cardThumbLink.appendChild(cardThumbImage);
			
			let figcaption = document.createElement("figcaption");
			figcaption.innerHTML = rowsT4[i][2].innerHTML;
			
			let cardHoverFigure = document.createElement("figure");
			cardHoverFigure.classList.add("cardHover");
			cardHoverFigure.appendChild(cardThumbLink);
			cardHoverFigure.appendChild(figcaption);
			
			rows[sumOfRows + 1][i].appendChild(cardHoverFigure);
		}
		// sumOfRows = sumOfRows + 2;
	}
}