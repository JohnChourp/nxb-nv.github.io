function ultimateJutsuCheckByLv(){
	let rows = [[]];
	switch(document.getElementsByClassName("cardLevel").item(0).innerHTML){
		case "Lv 70/70":
			for(let i = 0 , j = 0; i < 8, j < 8; i = i + 2, j ++){
				rows[j] = document.getElementById("ultimateJutsuCheckByLv").rows[2 + i].cells;
			}
			
			rows[8] = document.getElementById("ultimateJutsu").rows[6].cells;
			rows[9] = document.getElementById("ultimateJutsu").rows[7].cells;
			
			for(let i = 2 , j = 1; i < 8, j < 7; i ++, j ++){
				rows[i][1].innerHTML = eval("parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * j");
				rows[i][3].innerHTML = eval("parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * j");
				rows[i][5].innerHTML = eval("parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * j") + ".00%";
				rows[i][7].innerHTML = eval("parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * j");
			}
			
			rows[8][2].innerHTML = rows[7][3].innerHTML;
			rows[8][4].innerHTML = rows[7][5].innerHTML;
			rows[8][6].innerHTML = rows[7][7].innerHTML;
			rows[9][1].innerHTML = rows[7][1].innerHTML;
			break;
		case "Lv 100/100":
			for(let i = 0 , j = 0; i < 8, j < 8; i = i + 2, j ++){
				rows[j] = document.getElementById("ultimateJutsuCheckByLv").rows[2 + i].cells;
			}
			
			rows[8] = document.getElementById("ultimateJutsu").rows[6].cells;
			rows[9] = document.getElementById("ultimateJutsu").rows[7].cells;
			
			for(let i = 2 , j = 1; i < 15, j < 14; i ++, j ++){
				rows[i][1].innerHTML = eval("parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * j");
				rows[i][3].innerHTML = eval("parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * j");
				rows[i][5].innerHTML = eval("parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * j") + ".00%";
				rows[i][7].innerHTML = eval("parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * j");
			}
			
			rows[8][2].innerHTML = rows[14][3].innerHTML;
			rows[8][4].innerHTML = rows[14][5].innerHTML;
			rows[8][6].innerHTML = rows[14][7].innerHTML;
			rows[9][1].innerHTML = rows[14][1].innerHTML;
			break;
	}
}