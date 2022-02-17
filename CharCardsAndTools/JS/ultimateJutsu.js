function createUltimateJutsu(){
	const table = document.getElementById("ultimateJutsu");
	let header = table.createTHead();
	let row0 = header.insertRow(0);
	let row0Cell0 = row0.insertCell(0);
	let row0Cell1 = row0.insertCell(1);
	row0Cell0.outerHTML = "<th colspan = 4 >Ninjutsu</th>";
	row0Cell1.outerHTML = "<th colspan = 4 >Max Card Stats</th>";
}

function ultimateJutsu(){
	createUltimateJutsu();
	let rows = [[]] , rowsUJByLvl = [[]] , rowsUltimateJutsu = [[]] , rowsLength;
	
	rowsLength = document.getElementById("ultimateJutsuCheckByLv").rows.length;
	rowsUltimateJutsu[0] = document.getElementById("ultimateJutsu").rows[6].cells;
	rowsUltimateJutsu[1] = document.getElementById("ultimateJutsu").rows[7].cells;
	
	for(let i = 0 , j = 0; i < (rowsLength - 1) / 2, j < (rowsLength - 1) / 2; i = i + 2, j ++){
		rowsUJByLvl[j] = document.getElementById("ultimateJutsuCheckByLv").rows[2 + i].cells;
	}
	
	for(let i = 2 , j = 1; i < (rowsLength - 1) / 2, j < ((rowsLength - 1) / 2) - 1; i ++, j ++){
		rowsUJByLvl[i][1].innerHTML = eval("parseInt(rowsUJByLvl[1][1].innerHTML) + ( parseInt(rowsUJByLvl[1][1].innerHTML) - parseInt(rowsUJByLvl[0][1].innerHTML) ) * j");
		rowsUJByLvl[i][3].innerHTML = eval("parseInt(rowsUJByLvl[1][3].innerHTML) + ( parseInt(rowsUJByLvl[1][3].innerHTML) - parseInt(rowsUJByLvl[0][3].innerHTML) ) * j");
		rowsUJByLvl[i][5].innerHTML = eval("parseInt(rowsUJByLvl[1][5].innerHTML) + ( parseInt(rowsUJByLvl[1][5].innerHTML) - parseInt(rowsUJByLvl[0][5].innerHTML) ) * j") + ".00%";
		rowsUJByLvl[i][7].innerHTML = eval("parseInt(rowsUJByLvl[1][7].innerHTML) + ( parseInt(rowsUJByLvl[1][7].innerHTML) - parseInt(rowsUJByLvl[0][7].innerHTML) ) * j");
	}
	
	rows[0] = document.getElementById("ultimateJutsu").rows[1].cells;
	rows[0][0].style.fontWeight = "bold";
	rows[1] = document.getElementById("ultimateJutsu").rows[2].cells;
	rows[2] = document.getElementById("ultimateJutsu").rows[3].cells;
	rows[3] = document.getElementById("ultimateJutsu").rows[5].cells;
	
	switch(document.getElementsByClassName("cardLevel").item(0).innerHTML){
		case "Lv 70/70":
			rows[2][1].innerHTML = "1.30%";
			rows[2][3].innerHTML = "1.30%";
			rows[3][4].innerHTML = "8/8";
			
			switch(rows[0][0].innerHTML){
				case "Assist":
					rows[0][5].innerHTML = "1128";
					rows[0][7].innerHTML = "143";
					rows[1][2].innerHTML = "480";
					rows[1][4].innerHTML = "607";
					break;
				case "Attack":
					rows[0][5].innerHTML = "1128";
					rows[0][7].innerHTML = "102";
					rows[1][2].innerHTML = "829";
					rows[1][4].innerHTML = "534";
					break;
				case "Defense":
					rows[0][5].innerHTML = "1296";
					rows[0][7].innerHTML = "85";
					rows[1][2].innerHTML = "571";
					rows[1][4].innerHTML = "742";
					break;
				case "Skill":
					rows[0][5].innerHTML = "1029";
					rows[0][7].innerHTML = "165";
					rows[1][2].innerHTML = "627";
					rows[1][4].innerHTML = "436";
					break;
				case "Utility":
					rows[0][5].innerHTML = "1218";
					rows[0][7].innerHTML = "112";
					rows[1][2].innerHTML = "607";
					rows[1][4].innerHTML = "574";
					break;
			}
			rowsUltimateJutsu[0][2].innerHTML = rowsUJByLvl[7][3].innerHTML;
			rowsUltimateJutsu[0][4].innerHTML = rowsUJByLvl[7][5].innerHTML;
			rowsUltimateJutsu[0][6].innerHTML = rowsUJByLvl[7][7].innerHTML;
			rowsUltimateJutsu[1][1].innerHTML = rowsUJByLvl[7][1].innerHTML;
			break;
		case "Lv 100/100":
			rows[2][1].innerHTML = "1.50%";
			rows[2][3].innerHTML = "1.50%";
			rows[3][4].innerHTML = "15/15";
			
			switch(rows[0][0].innerHTML){
				case "Assist":
					rows[0][5].innerHTML = "1730";
					rows[0][7].innerHTML = "223";
					rows[1][2].innerHTML = "740";
					rows[1][4].innerHTML = "940";
					break;
				case "Attack":
					rows[0][5].innerHTML = "";
					rows[0][7].innerHTML = "";
					rows[1][2].innerHTML = "";
					rows[1][4].innerHTML = "";
					break;
				case "Defense":
					rows[0][5].innerHTML = "1980";
					rows[0][7].innerHTML = "138";
					rows[1][2].innerHTML = "877";
					rows[1][4].innerHTML = "1130";
					break;
				case "Skill":
					rows[0][5].innerHTML = "1596";
					rows[0][7].innerHTML = "254";
					rows[1][2].innerHTML = "955";
					rows[1][4].innerHTML = "684";
					break;
				case "Utility":
					rows[0][5].innerHTML = "1881";
					rows[0][7].innerHTML = "175";
					rows[1][2].innerHTML = "940";
					rows[1][4].innerHTML = "881";
					break;
			}
			rowsUltimateJutsu[0][2].innerHTML = rowsUJByLvl[14][3].innerHTML;
			rowsUltimateJutsu[0][4].innerHTML = rowsUJByLvl[14][5].innerHTML;
			rowsUltimateJutsu[0][6].innerHTML = rowsUJByLvl[14][7].innerHTML;
			rowsUltimateJutsu[1][1].innerHTML = rowsUJByLvl[14][1].innerHTML;
			break;
	}
}