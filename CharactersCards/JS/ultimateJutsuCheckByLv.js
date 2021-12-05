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