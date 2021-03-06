function createNinjutsu(){
	let rows = [[]];
	const table = document.getElementById("ninjutsu");
	let header = table.createTHead();
	
	rows[0] = header.insertRow(0);
	
	rows[0][0] = rows[0].insertCell(0);
	rows[0][0].outerHTML = "<th colspan=4 >Ninjutsu</th>";
	
	rows[0][1] = rows[0].insertCell(1);
	rows[0][1].outerHTML = "<th colspan=4 >Max Card Stats</th>";
	
	rows[1] = table.rows[1];
	
	rows[1][0] = table.rows[1].cells[0];
	rows[1][0].style.fontWeight = "bold";
	
	rows[1][1] = rows[1].insertCell(1);
	
	let imgType = document.createElement("img");
	imgType.classList.add("typeImage");
	imgType.alt = rows[1][0].innerHTML;
	imgType.referrerPolicy = "no-referrer";
	rows[1][1].appendChild(imgType);
	
	rows[1][2] = rows[1].insertCell(2);
	
	rows[1][3] = table.rows[1].cells[3];
	let imgRank = document.createElement("img");
	imgRank.classList.add("rankImage");
	imgRank.alt = rows[1][3].innerHTML;
	if(rows[1][3].innerHTML === "3 Star"){
		rows[1][2].innerHTML = "Lv 40/40";
	}
	if(rows[1][3].innerHTML === "5 Star"){
		rows[1][2].innerHTML = "Lv 60/60";
	}
	if(rows[1][3].innerHTML === "6 Star"){
		rows[1][2].innerHTML = "Lv 70/70";
	}
	rows[1][3].innerHTML = "";
	imgRank.referrerPolicy = "no-referrer";
	rows[1][3].appendChild(imgRank);
	
	rows[1][4] = rows[1].insertCell(4);
	rows[1][4].innerHTML = "HP";
	
	rows[1].insertCell(5);
	rows[1][6] = rows[1].insertCell(6);
	rows[1][6].innerHTML = "CP";
	
	rows[1].insertCell(7);
	
	rows[2] = table.rows[2];
	
	rows[2][0] = table.rows[2].cells[0];
	let cardImage = document.createElement("img");
	cardImage.classList.add("cardImage");
	cardImage.referrerPolicy = "no-referrer";
	cardImage.src = rows[2][0].innerHTML;
	rows[2][0].innerHTML = "";
	rows[2][0].appendChild(cardImage);
	rows[2][0].colSpan = "4";
	rows[2][0].rowSpan = "2";
	rows[2][0].classList.add("cardImageTable");
	
	rows[2][1] = rows[2].insertCell(1);
	rows[2][1].innerHTML = "ATK";
	
	rows[2].insertCell(2);
	
	rows[2][3] = rows[2].insertCell(3);
	rows[2][3].innerHTML = "DEF";
	
	rows[2].insertCell(4);
	
	rows[3] = table.insertRow(3);
	
	rows[3][0] = rows[3].insertCell(0);
	rows[3][0].innerHTML = "CRI";
	
	rows[3].insertCell(1);
	
	rows[3][2] = rows[3].insertCell(2);
	rows[3][2].innerHTML = "EVA";
	
	rows[3].insertCell(3);
	
	rows[4] = table.insertRow(4);
	
	rows[4][0] = rows[4].insertCell(0);
	rows[4][0].outerHTML = "<th colspan=8 >Max Jutsu Stats</th>";
	
	rows[5] = table.rows[5];
	
	rows[5][0] = table.rows[5].cells[0];
	
	rows[5][0].style.fontWeight = "bold";
	
	rows[5][1] = rows[5].insertCell(1);
	let natureImage = document.createElement("img");
	natureImage.classList.add("natureImage");
	natureImage.alt = rows[5][0].innerHTML;
	natureImage.referrerPolicy = "no-referrer";
	rows[5][1].appendChild(natureImage);
	
	rows[5][2] = table.rows[5].cells[2];
	rows[5][2].colSpan = "4";
	rows[5][2].style.fontWeight = "bold";
	
	rows[5][3] = rows[5].insertCell(3);
	rows[5][3].innerHTML = "LVL";
	rows[5].insertCell(4);
	
	rows[6] = table.rows[6];
	
	rows[6][0] = table.rows[6].cells[0];
	rows[6][0].colSpan = "2";
	
	let jutsuImage = document.createElement("img");
	jutsuImage.classList.add("jutsuImage");
	jutsuImage.referrerPolicy = "no-referrer";
	jutsuImage.src = rows[6][0].innerHTML;
	rows[6][0].innerHTML = "";
	rows[6][0].appendChild(jutsuImage);
	
	rows[6][1] = rows[6].insertCell(1);
	rows[6][1].innerHTML = "CP Cost";
	
	rows[6].insertCell(2);
	
	rows[6][3] = rows[6].insertCell(3);
	rows[6][3].innerHTML = "CRI";
	
	rows[6].insertCell(4);
	
	rows[6][5] = rows[6].insertCell(5);
	rows[6][5].innerHTML = "POW";
	
	rows[6].insertCell(6);
	
	rows[7] = table.rows[7];
	
	rows[7][0] = rows[7].insertCell(0);
	let rtImage = document.createElement("img");
	rtImage.classList.add("rtImage");
	rtImage.referrerPolicy = "no-referrer";
	rtImage.alt = "rt";
	rows[7][0].appendChild(rtImage);
	
	rows[7].insertCell(1);
	
	rows[7][2] = rows[7].insertCell(2);
	rows[7][2].colSpan = "3";
	rows[7][2].innerHTML = "Equippable By";
	
	rows[7][3] = table.rows[7].cells[3];
	rows[7][3].colSpan = "3";
	
	rows[8] = table.rows[8];
	
	rows[8][0] = rows[8].insertCell(0);
	rows[8][0].colSpan = "2";
	rows[8][0].innerHTML = "Info";
	
	rows[8][1] = table.rows[8].cells[1];
	rows[8][1].colSpan = "6";
}

function createNinjutsuCheckByLvl(){
	let rowsCheckByLvl = [[]] , rowsNinjutsu = [[]];
	const tableCheckByLvl = document.getElementById("ninjutsuCheckByLv");
	const tableNinjutsu = document.getElementById("ninjutsu");
	let imgRankLvl = document.createElement("img");
	let rtImageLvl = document.createElement("img");
	
	let header = tableCheckByLvl.createTHead();
	//row0
	rowsCheckByLvl[0] = header.insertRow(0);
	rowsCheckByLvl[0][0] = rowsCheckByLvl[0].insertCell(0);
	rowsCheckByLvl[0][0].outerHTML = "<th colspan=8 >Check By Lv</th>";
	//row0
	
	//row1
	rowsCheckByLvl[1] = tableCheckByLvl.insertRow(1);
	rowsCheckByLvl[1][0] = rowsCheckByLvl[1].insertCell(0);
	rowsCheckByLvl[1][1] = rowsCheckByLvl[1].insertCell(1);
	rowsCheckByLvl[1][2] = rowsCheckByLvl[1].insertCell(2);
	rowsCheckByLvl[1][0].colSpan = "2";
	rowsCheckByLvl[1][0].innerHTML = "NJ Lv 1";
	rowsCheckByLvl[1][1].colSpan = "3";
	rowsCheckByLvl[1][1].innerHTML = "Card Rank";
	rowsCheckByLvl[1][2].colSpan = "3";
	//row1
	
	//row2
	rowsCheckByLvl[2] = tableCheckByLvl.rows[2];
	rowsCheckByLvl[2][0] = rowsCheckByLvl[2].insertCell(0);
	rowsCheckByLvl[2][2] = rowsCheckByLvl[2].insertCell(2);
	rowsCheckByLvl[2][4] = rowsCheckByLvl[2].insertCell(4);
	rowsCheckByLvl[2][6] = rowsCheckByLvl[2].insertCell(6);
	rtImageLvl.classList.add("rtImage");
	rtImageLvl.referrerPolicy = "no-referrer";
	rtImageLvl.alt = "rt";
	rowsCheckByLvl[2][0].appendChild(rtImageLvl);
	rowsCheckByLvl[2][2].innerHTML = "CP Cost";
	rowsCheckByLvl[2][4].innerHTML = "CRI";
	rowsCheckByLvl[2][6].innerHTML = "POW";
	//row2
	
	//row3
	rowsCheckByLvl[3] = tableCheckByLvl.insertRow(3);
	rowsCheckByLvl[3][0] = rowsCheckByLvl[3].insertCell(0);
	rowsCheckByLvl[3][1] = rowsCheckByLvl[3].insertCell(1);
	rowsCheckByLvl[3][2] = rowsCheckByLvl[3].insertCell(2);
	rowsCheckByLvl[3][0].colSpan = "2";
	rowsCheckByLvl[3][0].innerHTML = "NJ Lv 2";
	rowsCheckByLvl[3][1].colSpan = "3";
	rowsCheckByLvl[3][1].innerHTML = "Card Rank";
	rowsCheckByLvl[3][2].colSpan = "3";
	//row3
	
	//row4
	rowsCheckByLvl[4] = tableCheckByLvl.rows[4];
	rowsCheckByLvl[4][0] = rowsCheckByLvl[4].insertCell(0);
	rowsCheckByLvl[4][2] = rowsCheckByLvl[4].insertCell(2);
	rowsCheckByLvl[4][4] = rowsCheckByLvl[4].insertCell(4);
	rowsCheckByLvl[4][6] = rowsCheckByLvl[4].insertCell(6);
	rtImageLvl = document.createElement("img");
	rtImageLvl.classList.add("rtImage");
	rtImageLvl.referrerPolicy = "no-referrer";
	rtImageLvl.alt = "rt";
	rowsCheckByLvl[4][0].appendChild(rtImageLvl);
	rowsCheckByLvl[4][2].innerHTML = "CP Cost";
	rowsCheckByLvl[4][4].innerHTML = "CRI";
	rowsCheckByLvl[4][6].innerHTML = "POW";
	//row4
	
	rowsNinjutsu[1] = tableNinjutsu.rows[1].cells;
	switch(rowsNinjutsu[1][2].innerHTML){
		case "Lv 40/40":
			rowsCheckByLvl[1] = tableCheckByLvl.rows[1];
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "1 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[1][2].appendChild(imgRankLvl);
			
			rowsCheckByLvl[3] = tableCheckByLvl.rows[3];
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "3 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[3][2].appendChild(imgRankLvl);
			break;
		case "Lv 60/60":
			for(let i = 5; i < 13; i ++){
				rowsCheckByLvl[i] = tableCheckByLvl.insertRow(i);
			}
			
			for(let i = 5 , j = 3; i < 13, j < 7; i = i + 2, j ++){
				rowsCheckByLvl[i][0] = rowsCheckByLvl[i].insertCell(0);
				rowsCheckByLvl[i][1] = rowsCheckByLvl[i].insertCell(1);
				rowsCheckByLvl[i][2] = rowsCheckByLvl[i].insertCell(2);
				rowsCheckByLvl[i][0].colSpan = "2";
				rowsCheckByLvl[i][0].innerHTML = "NJ Lv " + j;
				rowsCheckByLvl[i][1].colSpan = "3";
				rowsCheckByLvl[i][1].innerHTML = "Card Rank";
				rowsCheckByLvl[i][2].colSpan = "3";
				
				rowsCheckByLvl[i + 1][0] = rowsCheckByLvl[i + 1].insertCell(0);
				rowsCheckByLvl[i + 1].insertCell(1);
				rowsCheckByLvl[i + 1][2] = rowsCheckByLvl[i + 1].insertCell(2);
				rowsCheckByLvl[i + 1].insertCell(3);
				rowsCheckByLvl[i + 1][4] = rowsCheckByLvl[i + 1].insertCell(4);
				rowsCheckByLvl[i + 1].insertCell(5);
				rowsCheckByLvl[i + 1][6] = rowsCheckByLvl[i + 1].insertCell(6);
				rowsCheckByLvl[i + 1].insertCell(7);
				rowsCheckByLvl[i + 1][2].innerHTML = "CP Cost";
				rowsCheckByLvl[i + 1][4].innerHTML = "CRI";
				rowsCheckByLvl[i + 1][6].innerHTML = "POW";
				rtImageLvl = document.createElement("img");
				rtImageLvl.classList.add("rtImage");
				rtImageLvl.referrerPolicy = "no-referrer";
				rtImageLvl.alt = "rt";
				rowsCheckByLvl[i + 1][0].appendChild(rtImageLvl);
			}
			
			rowsCheckByLvl[1] = tableCheckByLvl.rows[1];
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "3 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[1][2].appendChild(imgRankLvl);
			
			rowsCheckByLvl[3] = tableCheckByLvl.rows[3];
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "3 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[3][2].appendChild(imgRankLvl);
			
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "4 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[5][2].appendChild(imgRankLvl);
			
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "4 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[7][2].appendChild(imgRankLvl);
			
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "5 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[9][2].appendChild(imgRankLvl);
			
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "5 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[11][2].appendChild(imgRankLvl);
			break;
		case "Lv 70/70":
			for(let i = 5; i < 17; i ++){
				rowsCheckByLvl[i] = tableCheckByLvl.insertRow(i);
			}
			
			for(let i = 5 , j = 3; i < 17, j < 9; i = i + 2, j ++){
				rowsCheckByLvl[i][0] = rowsCheckByLvl[i].insertCell(0);
				rowsCheckByLvl[i][1] = rowsCheckByLvl[i].insertCell(1);
				rowsCheckByLvl[i][2] = rowsCheckByLvl[i].insertCell(2);
				rowsCheckByLvl[i][0].colSpan = "2";
				rowsCheckByLvl[i][0].innerHTML = "NJ Lv " + j;
				rowsCheckByLvl[i][1].colSpan = "3";
				rowsCheckByLvl[i][1].innerHTML = "Card Rank";
				rowsCheckByLvl[i][2].colSpan = "3";
				
				rowsCheckByLvl[i + 1][0] = rowsCheckByLvl[i + 1].insertCell(0);
				rowsCheckByLvl[i + 1].insertCell(1);
				rowsCheckByLvl[i + 1][2] = rowsCheckByLvl[i + 1].insertCell(2);
				rowsCheckByLvl[i + 1].insertCell(3);
				rowsCheckByLvl[i + 1][4] = rowsCheckByLvl[i + 1].insertCell(4);
				rowsCheckByLvl[i + 1].insertCell(5);
				rowsCheckByLvl[i + 1][6] = rowsCheckByLvl[i + 1].insertCell(6);
				rowsCheckByLvl[i + 1].insertCell(7);
				rowsCheckByLvl[i + 1][2].innerHTML = "CP Cost";
				rowsCheckByLvl[i + 1][4].innerHTML = "CRI";
				rowsCheckByLvl[i + 1][6].innerHTML = "POW";
				rtImageLvl = document.createElement("img");
				rtImageLvl.classList.add("rtImage");
				rtImageLvl.referrerPolicy = "no-referrer";
				rtImageLvl.alt = "rt";
				rowsCheckByLvl[i + 1][0].appendChild(rtImageLvl);
			}
			
			rowsCheckByLvl[1] = tableCheckByLvl.rows[1];
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "4 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[1][2].appendChild(imgRankLvl);
			
			rowsCheckByLvl[3] = tableCheckByLvl.rows[3];
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "4 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[3][2].appendChild(imgRankLvl);
			
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "4 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[5][2].appendChild(imgRankLvl);
			
			imgRankLvl = document.createElement("img");
			imgRankLvl.classList.add("rankImage");
			imgRankLvl.alt = "4 Star";
			imgRankLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[7][2].appendChild(imgRankLvl);
			
			rtImageLvl = document.createElement("img");
			rtImageLvl.classList.add("rankImage");
			rtImageLvl.alt = "5 Star";
			rtImageLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[9][2].appendChild(rtImageLvl);
			
			rtImageLvl = document.createElement("img");
			rtImageLvl.classList.add("rankImage");
			rtImageLvl.alt = "5 Star";
			rtImageLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[11][2].appendChild(rtImageLvl);
			
			rtImageLvl = document.createElement("img");
			rtImageLvl.classList.add("rankImage");
			rtImageLvl.alt = "6 Star";
			rtImageLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[13][2].appendChild(rtImageLvl);
			
			rtImageLvl = document.createElement("img");
			rtImageLvl.classList.add("rankImage");
			rtImageLvl.alt = "6 Star";
			rtImageLvl.referrerPolicy = "no-referrer";
			rowsCheckByLvl[15][2].appendChild(rtImageLvl);
			break;
	}
}

function ninjutsu(){
	createNinjutsu();
	createNinjutsuCheckByLvl();
	
	let rowsNinjutsu = [[]] , rowsCheckByLvl = [[]] , rowsCheckByLvLength;
	
	const tableNinjutsu = document.getElementById("ninjutsu");
	const tableCheckByLv = document.getElementById("ninjutsuCheckByLv");
	
	rowsCheckByLvLength = tableCheckByLv.rows.length;
	
	for(let i = 0 , j = 0; i < (rowsCheckByLvLength - 1) / 2, j < (rowsCheckByLvLength - 1) / 2; i = i + 2, j ++){
		rowsCheckByLvl[j] = tableCheckByLv.rows[2 + i].cells;
	}
	
	for(let i = 2 , j = 1; i < (rowsCheckByLvLength - 1) / 2, j < ((rowsCheckByLvLength - 1) / 2) - 1; i ++, j ++){
		rowsCheckByLvl[i][1].innerHTML = eval("parseInt(rowsCheckByLvl[1][1].innerHTML) + ( parseInt(rowsCheckByLvl[1][1].innerHTML) - parseInt(rowsCheckByLvl[0][1].innerHTML) ) * j");
		rowsCheckByLvl[i][3].innerHTML = eval("parseInt(rowsCheckByLvl[1][3].innerHTML) + ( parseInt(rowsCheckByLvl[1][3].innerHTML) - parseInt(rowsCheckByLvl[0][3].innerHTML) ) * j");
		rowsCheckByLvl[i][5].innerHTML = eval("parseInt(rowsCheckByLvl[1][5].innerHTML) + ( parseInt(rowsCheckByLvl[1][5].innerHTML) - parseInt(rowsCheckByLvl[0][5].innerHTML) ) * j") + ".00%";
		rowsCheckByLvl[i][7].innerHTML = eval("parseInt(rowsCheckByLvl[1][7].innerHTML) + ( parseInt(rowsCheckByLvl[1][7].innerHTML) - parseInt(rowsCheckByLvl[0][7].innerHTML) ) * j");
	}
	
	rowsNinjutsu[1] = tableNinjutsu.rows[1].cells;
	rowsNinjutsu[2] = tableNinjutsu.rows[2].cells;
	rowsNinjutsu[3] = tableNinjutsu.rows[3].cells;
	rowsNinjutsu[5] = tableNinjutsu.rows[5].cells;
	rowsNinjutsu[6] = tableNinjutsu.rows[6].cells;
	rowsNinjutsu[7] = tableNinjutsu.rows[7].cells;
	
	switch(rowsNinjutsu[1][3].getElementsByClassName("rankImage").item(0).alt){
		case "6 Star":
			rowsNinjutsu[3][1].innerHTML = "1.10%";
			rowsNinjutsu[3][3].innerHTML = "1.10%";
			rowsNinjutsu[5][4].innerHTML = "8/8";
			
			switch(rowsNinjutsu[1][0].innerHTML){
				case "Assist":
					rowsNinjutsu[1][5].innerHTML = "936";
					rowsNinjutsu[1][7].innerHTML = "119";
					rowsNinjutsu[2][2].innerHTML = "393";
					rowsNinjutsu[2][4].innerHTML = "499";
					break;
				case "Attack":
					rowsNinjutsu[1][5].innerHTML = "936";
					rowsNinjutsu[1][7].innerHTML = "84";
					rowsNinjutsu[2][2].innerHTML = "682";
					rowsNinjutsu[2][4].innerHTML = "432";
					break;
				case "Defense":
					rowsNinjutsu[1][5].innerHTML = "1083";
					rowsNinjutsu[1][7].innerHTML = "64";
					rowsNinjutsu[2][2].innerHTML = "472";
					rowsNinjutsu[2][4].innerHTML = "622";
					break;
				case "Skill":
					rowsNinjutsu[1][5].innerHTML = "837";
					rowsNinjutsu[1][7].innerHTML = "135";
					rowsNinjutsu[2][2].innerHTML = "525";
					rowsNinjutsu[2][4].innerHTML = "349";
					break;
				case "Utility":
					rowsNinjutsu[1][5].innerHTML = "999";
					rowsNinjutsu[1][7].innerHTML = "94";
					rowsNinjutsu[2][2].innerHTML = "499";
					rowsNinjutsu[2][4].innerHTML = "475";
					break;
			}
			rowsNinjutsu[6][2].innerHTML = rowsCheckByLvl[7][3].innerHTML;
			rowsNinjutsu[6][4].innerHTML = rowsCheckByLvl[7][5].innerHTML;
			rowsNinjutsu[6][6].innerHTML = rowsCheckByLvl[7][7].innerHTML;
			rowsNinjutsu[7][1].innerHTML = rowsCheckByLvl[7][1].innerHTML;
			break;
		case "5 Star":
			rowsNinjutsu[3][1].innerHTML = "0.90%";
			rowsNinjutsu[3][3].innerHTML = "0.90%";
			rowsNinjutsu[5][4].innerHTML = "6/6";
			
			switch(rowsNinjutsu[1][0].innerHTML){
				case "Assist":
					rowsNinjutsu[1][5].innerHTML = "695";
					rowsNinjutsu[1][7].innerHTML = "87";
					rowsNinjutsu[2][2].innerHTML = "290";
					rowsNinjutsu[2][4].innerHTML = "367";
					break;
				case "Attack":
					rowsNinjutsu[1][5].innerHTML = "695";
					rowsNinjutsu[1][7].innerHTML = "61";
					rowsNinjutsu[2][2].innerHTML = "504";
					rowsNinjutsu[2][4].innerHTML = "313";
					break;
				case "Defense":
					rowsNinjutsu[1][5].innerHTML = "809";
					rowsNinjutsu[1][7].innerHTML = "44";
					rowsNinjutsu[2][2].innerHTML = "350";
					rowsNinjutsu[2][4].innerHTML = "466";
					break;
				case "Skill":
					rowsNinjutsu[1][5].innerHTML = "611";
					rowsNinjutsu[1][7].innerHTML = "98";
					rowsNinjutsu[2][2].innerHTML = "394";
					rowsNinjutsu[2][4].innerHTML = "251";
					break;
				case "Utility":
					rowsNinjutsu[1][5].innerHTML = "735";
					rowsNinjutsu[1][7].innerHTML = "69";
					rowsNinjutsu[2][2].innerHTML = "367";
					rowsNinjutsu[2][4].innerHTML = "352";
					break;
			}
			rowsNinjutsu[6][2].innerHTML = rowsCheckByLvl[5][3].innerHTML;
			rowsNinjutsu[6][4].innerHTML = rowsCheckByLvl[5][5].innerHTML;
			rowsNinjutsu[6][6].innerHTML = rowsCheckByLvl[5][7].innerHTML;
			rowsNinjutsu[7][1].innerHTML = rowsCheckByLvl[5][1].innerHTML;
			break;
		case "3 Star":
			rowsNinjutsu[3][1].innerHTML = "0.50%";
			rowsNinjutsu[3][3].innerHTML = "0.50%";
			rowsNinjutsu[5][4].innerHTML = "2/2";
			
			switch(rowsNinjutsu[1][0].innerHTML){
				case "Assist":
					rowsNinjutsu[1][5].innerHTML = "408";
					rowsNinjutsu[1][7].innerHTML = "50";
					rowsNinjutsu[2][2].innerHTML = "169";
					rowsNinjutsu[2][4].innerHTML = "213";
					break;
				case "Attack":
					rowsNinjutsu[1][5].innerHTML = "408";
					rowsNinjutsu[1][7].innerHTML = "35";
					rowsNinjutsu[2][2].innerHTML = "294";
					rowsNinjutsu[2][4].innerHTML = "181";
					break;
				case "Defense":
					rowsNinjutsu[1][5].innerHTML = "477";
					rowsNinjutsu[1][7].innerHTML = "24";
					rowsNinjutsu[2][2].innerHTML = "205";
					rowsNinjutsu[2][4].innerHTML = "274";
					break;
				case "Skill":
					rowsNinjutsu[1][5].innerHTML = "354";
					rowsNinjutsu[1][7].innerHTML = "58";
					rowsNinjutsu[2][2].innerHTML = "234";
					rowsNinjutsu[2][4].innerHTML = "144";
					break;
				case "Utility":
					rowsNinjutsu[1][5].innerHTML = "427";
					rowsNinjutsu[1][7].innerHTML = "40";
					rowsNinjutsu[2][2].innerHTML = "213";
					rowsNinjutsu[2][4].innerHTML = "205";
					break;
			}
			rowsNinjutsu[6][2].innerHTML = rowsCheckByLvl[1][3].innerHTML;
			rowsNinjutsu[6][4].innerHTML = rowsCheckByLvl[1][5].innerHTML;
			rowsNinjutsu[6][6].innerHTML = rowsCheckByLvl[1][7].innerHTML;
			rowsNinjutsu[7][1].innerHTML = rowsCheckByLvl[1][1].innerHTML;
			break;
	}
}

ninjutsu();