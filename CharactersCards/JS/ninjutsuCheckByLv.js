function ninjutsuCheckByLv(){
	let rowsCheckByLvl = [[]] , rowsNinJutsu = [[]] , rowsLength;
	
	rowsLength = document.getElementById("ninjutsuCheckByLv").rows.length;
	rowsNinJutsu[0] = document.getElementById("ninjutsu").rows[6].cells;
	rowsNinJutsu[1] = document.getElementById("ninjutsu").rows[7].cells;
	
	for(let i = 0 , j = 0; i < (rowsLength - 1) / 2, j < (rowsLength - 1) / 2; i = i + 2, j ++){
		rowsCheckByLvl[j] = document.getElementById("ninjutsuCheckByLv").rows[2 + i].cells;
	}
	
	for(let i = 2 , j = 1; i < (rowsLength - 1) / 2, j < ((rowsLength - 1) / 2) - 1; i ++, j ++){
		rowsCheckByLvl[i][1].innerHTML = eval("parseInt(rowsCheckByLvl[1][1].innerHTML) + ( parseInt(rowsCheckByLvl[1][1].innerHTML) - parseInt(rowsCheckByLvl[0][1].innerHTML) ) * j");
		rowsCheckByLvl[i][3].innerHTML = eval("parseInt(rowsCheckByLvl[1][3].innerHTML) + ( parseInt(rowsCheckByLvl[1][3].innerHTML) - parseInt(rowsCheckByLvl[0][3].innerHTML) ) * j");
		rowsCheckByLvl[i][5].innerHTML = eval("parseInt(rowsCheckByLvl[1][5].innerHTML) + ( parseInt(rowsCheckByLvl[1][5].innerHTML) - parseInt(rowsCheckByLvl[0][5].innerHTML) ) * j") + ".00%";
		rowsCheckByLvl[i][7].innerHTML = eval("parseInt(rowsCheckByLvl[1][7].innerHTML) + ( parseInt(rowsCheckByLvl[1][7].innerHTML) - parseInt(rowsCheckByLvl[0][7].innerHTML) ) * j");
	}
	
	switch(document.getElementsByClassName("cardLevel").item(0).innerHTML){
		case "Lv 70/70":
			rowsNinJutsu[0][2].innerHTML = rowsCheckByLvl[7][3].innerHTML;
			rowsNinJutsu[0][4].innerHTML = rowsCheckByLvl[7][5].innerHTML;
			rowsNinJutsu[0][6].innerHTML = rowsCheckByLvl[7][7].innerHTML;
			rowsNinJutsu[1][1].innerHTML = rowsCheckByLvl[7][1].innerHTML;
			break;
		case "Lv 60/60":
			rowsNinJutsu[0][2].innerHTML = rowsCheckByLvl[5][3].innerHTML;
			rowsNinJutsu[0][4].innerHTML = rowsCheckByLvl[5][5].innerHTML;
			rowsNinJutsu[0][6].innerHTML = rowsCheckByLvl[5][7].innerHTML;
			rowsNinJutsu[1][1].innerHTML = rowsCheckByLvl[5][1].innerHTML;
			break;
		case "Lv 40/40":
			rowsNinJutsu[0][2].innerHTML = rowsCheckByLvl[1][3].innerHTML;
			rowsNinJutsu[0][4].innerHTML = rowsCheckByLvl[1][5].innerHTML;
			rowsNinJutsu[0][6].innerHTML = rowsCheckByLvl[1][7].innerHTML;
			rowsNinJutsu[1][1].innerHTML = rowsCheckByLvl[1][1].innerHTML;
			break;
	}
}