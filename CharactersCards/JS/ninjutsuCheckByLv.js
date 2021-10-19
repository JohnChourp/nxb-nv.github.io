function ninjutsuCheckByLv(){
	let rows = [[]];
	switch(document.getElementsByClassName("cardLevel").item(0).innerHTML){
		case "Lv 70/70":
			for(let i = 0 , j = 0; i < 8, j < 8; i = i + 2, j ++){
				rows[j] = document.getElementById("ninjutsuCheckByLv").rows[2 + i].cells;
			}
			
			rows[8] = document.getElementById("ninjutsu").rows[6].cells;
			rows[9] = document.getElementById("ninjutsu").rows[7].cells;
			
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
		case "Lv 60/60":
			for(let i = 0 , j = 0; i < 6, j < 6; i = i + 2, j ++){
				rows[j] = document.getElementById("ninjutsuCheckByLv").rows[2 + i].cells;
			}
			
			rows[7] = document.getElementById("ninjutsu").rows[6].cells;
			rows[8] = document.getElementById("ninjutsu").rows[7].cells;
			
			for(let i = 2 , j = 1; i < 6, j < 5; i ++, j ++){
				rows[i][1].innerHTML = eval("parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * j");
				rows[i][3].innerHTML = eval("parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * j");
				rows[i][5].innerHTML = eval("parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * j") + ".00%";
				rows[i][7].innerHTML = eval("parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * j");
			}
			
			rows[7][2].innerHTML = rows[5][3].innerHTML;
			rows[7][4].innerHTML = rows[5][5].innerHTML;
			rows[7][6].innerHTML = rows[5][7].innerHTML;
			rows[8][1].innerHTML = rows[5][1].innerHTML;
			break;
		case "Lv 40/40":
			rows[0] = document.getElementById("ninjutsuCheckByLv").rows[4].cells;
			
			rows[1] = document.getElementById("ninjutsu").rows[6].cells;
			rows[2] = document.getElementById("ninjutsu").rows[7].cells;
			
			rows[0][1].innerHTML = eval("parseInt(rows[0][1].innerHTML)");
			rows[0][3].innerHTML = eval("parseInt(rows[0][3].innerHTML)");
			rows[0][5].innerHTML = eval("parseInt(rows[0][5].innerHTML)") + ".00%";
			rows[0][7].innerHTML = eval("parseInt(rows[0][7].innerHTML)");
			
			rows[1][2].innerHTML = rows[0][3].innerHTML;
			rows[1][4].innerHTML = rows[0][5].innerHTML;
			rows[1][6].innerHTML = rows[0][7].innerHTML;
			rows[2][1].innerHTML = rows[0][1].innerHTML;
			break;
	}
}