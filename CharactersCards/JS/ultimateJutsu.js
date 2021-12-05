function ultimateJutsu(){
	let rows = [[]];
	rows[0] = document.getElementById("ultimateJutsu").rows[1].cells;
	rows[1] = document.getElementById("ultimateJutsu").rows[2].cells;
	rows[2] = document.getElementById("ultimateJutsu").rows[3].cells;
	rows[3] = document.getElementById("ultimateJutsu").rows[5].cells;
	
	switch(document.getElementsByClassName("cardLevel").item(0).innerHTML){
		case "Lv 70/70":
			rows[2][1].innerHTML = "1.30%";
			rows[2][3].innerHTML = "1.30%";
			rows[3][4].innerHTML = "8/8";
			
			switch(document.getElementsByClassName("cardType").item(0).innerHTML){
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
			break;
		case "Lv 100/100":
			rows[2][1].innerHTML = "1.50%";
			rows[2][3].innerHTML = "1.50%";
			rows[3][4].innerHTML = "15/15";
			
			switch(document.getElementsByClassName("cardType").item(0).innerHTML){
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
			break;
	}
}

function ultimateJutsuCheckByLv(){
	let rowsCheckByLvl = [[]] , rowsUltimateJutsu = [[]] , rowsLength;
	
	rowsLength = document.getElementById("ultimateJutsuCheckByLv").rows.length;
	rowsUltimateJutsu[0] = document.getElementById("ultimateJutsu").rows[6].cells;
	rowsUltimateJutsu[1] = document.getElementById("ultimateJutsu").rows[7].cells;
	
	for(let i = 0 , j = 0; i < (rowsLength - 1) / 2, j < (rowsLength - 1) / 2; i = i + 2, j ++){
		rowsCheckByLvl[j] = document.getElementById("ultimateJutsuCheckByLv").rows[2 + i].cells;
	}
	
	for(let i = 2 , j = 1; i < (rowsLength - 1) / 2, j < ((rowsLength - 1) / 2) - 1; i ++, j ++){
		rowsCheckByLvl[i][1].innerHTML = eval("parseInt(rowsCheckByLvl[1][1].innerHTML) + ( parseInt(rowsCheckByLvl[1][1].innerHTML) - parseInt(rowsCheckByLvl[0][1].innerHTML) ) * j");
		rowsCheckByLvl[i][3].innerHTML = eval("parseInt(rowsCheckByLvl[1][3].innerHTML) + ( parseInt(rowsCheckByLvl[1][3].innerHTML) - parseInt(rowsCheckByLvl[0][3].innerHTML) ) * j");
		rowsCheckByLvl[i][5].innerHTML = eval("parseInt(rowsCheckByLvl[1][5].innerHTML) + ( parseInt(rowsCheckByLvl[1][5].innerHTML) - parseInt(rowsCheckByLvl[0][5].innerHTML) ) * j") + ".00%";
		rowsCheckByLvl[i][7].innerHTML = eval("parseInt(rowsCheckByLvl[1][7].innerHTML) + ( parseInt(rowsCheckByLvl[1][7].innerHTML) - parseInt(rowsCheckByLvl[0][7].innerHTML) ) * j");
	}
	
	switch(document.getElementsByClassName("cardLevel").item(0).innerHTML){
		case "Lv 70/70":
			rowsUltimateJutsu[0][2].innerHTML = rowsCheckByLvl[7][3].innerHTML;
			rowsUltimateJutsu[0][4].innerHTML = rowsCheckByLvl[7][5].innerHTML;
			rowsUltimateJutsu[0][6].innerHTML = rowsCheckByLvl[7][7].innerHTML;
			rowsUltimateJutsu[1][1].innerHTML = rowsCheckByLvl[7][1].innerHTML;
			break;
		case "Lv 100/100":
			rowsUltimateJutsu[0][2].innerHTML = rowsCheckByLvl[14][3].innerHTML;
			rowsUltimateJutsu[0][4].innerHTML = rowsCheckByLvl[14][5].innerHTML;
			rowsUltimateJutsu[0][6].innerHTML = rowsCheckByLvl[14][7].innerHTML;
			rowsUltimateJutsu[1][1].innerHTML = rowsCheckByLvl[14][1].innerHTML;
			break;
	}
}