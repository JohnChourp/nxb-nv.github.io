function createAbilityListTable(){
	let rows = [[]] , rowsUltimateJutsus = [[]] , numberOfRows , numberOfAbilities;
	const UltimateJutsusTable = document.getElementById("UltimateJutsus");
	
	for(let i = 0; i < UltimateJutsusTable.rows.length; i ++){
		rowsUltimateJutsus[i] = UltimateJutsusTable.rows[i].cells;
	}
	if(UltimateJutsusTable.rows.length === 1){
		numberOfAbilities = 43;
		numberOfRows = numberOfAbilities + 3;
	}else{
		numberOfAbilities = 43 + (13 * (UltimateJutsusTable.rows.length - 1));
		numberOfRows = numberOfAbilities + 3;
	}
	
	const abilityListTable = document.getElementById("abilityListTable");
	let header = abilityListTable.createTHead();
	
	rows[0] = header.insertRow(0);
	
	rows[0][0] = rows[0].insertCell(0);
	rows[0][0].outerHTML = "<th colspan=7 >Ability List</th>";
	
	rows[1] = header.insertRow(1);
	
	rows[1][0] = rows[1].insertCell(0);
	rows[1][0].colSpan = "4";
	rows[1][0].innerHTML = "Number of Abilities";
	
	rows[1][1] = rows[1].insertCell(1);
	rows[1][1].colSpan = "3";
	rows[1][1].innerHTML = numberOfAbilities;
	
	rows[2] = abilityListTable.insertRow(2);
	
	rows[2][0] = rows[2].insertCell(0);
	rows[2][0].outerHTML = "<th>Number</th>";
	
	rows[2][1] = rows[2].insertCell(1);
	rows[2][1].outerHTML = "<th>Rank</th>";
	
	rows[2][2] = rows[2].insertCell(2);
	rows[2][2].outerHTML = "<th colspan=3 >Benefit</th>";
	
	rows[2][3] = rows[2].insertCell(3);
	rows[2][3].outerHTML = "<th colspan=2 >Cost</th>";
	
	for(let i = 3; i < numberOfRows; i ++){
		if(i !== 22 && !(i > 26 && i < 30) && !(i > 33 && i < 39) && i < 42){
			rows[i] = abilityListTable.insertRow(i);
			
			rows[i][0] = rows[i].insertCell(0);
			
			rows[i][1] = rows[i].insertCell(1);
			
			rows[i][2] = rows[i].insertCell(2);
			rows[i][2].colSpan = "2";
			
			rows[i][3] = rows[i].insertCell(3);
			let increasePower = document.createElement("img");
			increasePower.classList.add("abilityListImages");
			increasePower.alt = "increasePower";
			increasePower.referrerPolicy = "no-referrer";
			rows[i][3].appendChild(increasePower);
			
			rows[i][4] = rows[i].insertCell(4);
			
			rows[i][5] = rows[i].insertCell(5);
			let abilityPoints = document.createElement("img");
			abilityPoints.classList.add("abilityListImages");
			abilityPoints.alt = "abilityPoints";
			abilityPoints.referrerPolicy = "no-referrer";
			rows[i][5].appendChild(abilityPoints);
		}else if(i === 22 || (i > 26 && i < 30) || (i > 33 && i < 39) || i < 46){
			rows[i] = abilityListTable.insertRow(i);
			
			rows[i][0] = rows[i].insertCell(0);
			
			rows[i][1] = rows[i].insertCell(1);
			
			rows[i][2] = rows[i].insertCell(2);
			
			rows[i][3] = rows[i].insertCell(3);
			let equipBy = document.createElement("a");
			equipBy.classList.add("equipBy");
			equipBy.href = rowsUltimateJutsus[0][0].innerHTML;
			equipBy.innerHTML = rowsUltimateJutsus[0][1].innerHTML;
			rows[i][3].appendChild(equipBy);
			
			rows[i][4] = rows[i].insertCell(4);
			let increaseUltimatePower = document.createElement("img");
			increaseUltimatePower.classList.add("abilityListImages");
			increaseUltimatePower.alt = "increaseUltimatePower";
			increaseUltimatePower.referrerPolicy = "no-referrer";
			rows[i][4].appendChild(increaseUltimatePower);
			
			rows[i][5] = rows[i].insertCell(5);
			
			rows[i][6] = rows[i].insertCell(6);
			let abilityPoints = document.createElement("img");
			abilityPoints.classList.add("abilityListImages");
			abilityPoints.alt = "abilityPoints";
			abilityPoints.referrerPolicy = "no-referrer";
			rows[i][6].appendChild(abilityPoints);
		}else if(i < 59){
			rows[i] = abilityListTable.insertRow(i);
			
			rows[i][0] = rows[i].insertCell(0);
			
			rows[i][1] = rows[i].insertCell(1);
			
			rows[i][2] = rows[i].insertCell(2);
			
			rows[i][3] = rows[i].insertCell(3);
			let equipBy = document.createElement("a");
			equipBy.classList.add("equipBy");
			equipBy.href = rowsUltimateJutsus[1][0].innerHTML;
			equipBy.innerHTML = rowsUltimateJutsus[1][1].innerHTML;
			rows[i][3].appendChild(equipBy);
			
			rows[i][4] = rows[i].insertCell(4);
			let increaseUltimatePower = document.createElement("img");
			increaseUltimatePower.classList.add("abilityListImages");
			increaseUltimatePower.alt = "increaseUltimatePower";
			increaseUltimatePower.referrerPolicy = "no-referrer";
			rows[i][4].appendChild(increaseUltimatePower);
			
			rows[i][5] = rows[i].insertCell(5);
			
			rows[i][6] = rows[i].insertCell(6);
			let abilityPoints = document.createElement("img");
			abilityPoints.classList.add("abilityListImages");
			abilityPoints.alt = "abilityPoints";
			abilityPoints.referrerPolicy = "no-referrer";
			rows[i][6].appendChild(abilityPoints);
		}else if(i < 72){
			rows[i] = abilityListTable.insertRow(i);
			
			rows[i][0] = rows[i].insertCell(0);
			
			rows[i][1] = rows[i].insertCell(1);
			
			rows[i][2] = rows[i].insertCell(2);
			
			rows[i][3] = rows[i].insertCell(3);
			let equipBy = document.createElement("a");
			equipBy.classList.add("equipBy");
			equipBy.href = rowsUltimateJutsus[2][0].innerHTML;
			equipBy.innerHTML = rowsUltimateJutsus[2][1].innerHTML;
			rows[i][3].appendChild(equipBy);
			
			rows[i][4] = rows[i].insertCell(4);
			let increaseUltimatePower = document.createElement("img");
			increaseUltimatePower.classList.add("abilityListImages");
			increaseUltimatePower.alt = "increaseUltimatePower";
			increaseUltimatePower.referrerPolicy = "no-referrer";
			rows[i][4].appendChild(increaseUltimatePower);
			
			rows[i][5] = rows[i].insertCell(5);
			
			rows[i][6] = rows[i].insertCell(6);
			let abilityPoints = document.createElement("img");
			abilityPoints.classList.add("abilityListImages");
			abilityPoints.alt = "abilityPoints";
			abilityPoints.referrerPolicy = "no-referrer";
			rows[i][6].appendChild(abilityPoints);
		}else{
			rows[i] = abilityListTable.insertRow(i);
			
			rows[i][0] = rows[i].insertCell(0);
			
			rows[i][1] = rows[i].insertCell(1);
			
			rows[i][2] = rows[i].insertCell(2);
			
			rows[i][3] = rows[i].insertCell(3);
			let equipBy = document.createElement("a");
			equipBy.classList.add("equipBy");
			equipBy.href = rowsUltimateJutsus[3][0].innerHTML;
			equipBy.innerHTML = rowsUltimateJutsus[3][1].innerHTML;
			rows[i][3].appendChild(equipBy);
			
			rows[i][4] = rows[i].insertCell(4);
			let increaseUltimatePower = document.createElement("img");
			increaseUltimatePower.classList.add("abilityListImages");
			increaseUltimatePower.alt = "increaseUltimatePower";
			increaseUltimatePower.referrerPolicy = "no-referrer";
			rows[i][4].appendChild(increaseUltimatePower);
			
			rows[i][5] = rows[i].insertCell(5);
			
			rows[i][6] = rows[i].insertCell(6);
			let abilityPoints = document.createElement("img");
			abilityPoints.classList.add("abilityListImages");
			abilityPoints.alt = "abilityPoints";
			abilityPoints.referrerPolicy = "no-referrer";
			rows[i][6].appendChild(abilityPoints);
		}
	}
}

function abilityListTable1(rows){
	rows[3][1].innerHTML = "1";
	rows[3][2].innerHTML = "+10 HP";
	rows[3][4].innerHTML = 30;
	
	rows[4][2].innerHTML = "+10 ATK";
	rows[4][4].innerHTML = 30;
	
	rows[5][2].innerHTML = "+15 DEF";
	rows[5][4].innerHTML = 60;
	
	rows[6][2].innerHTML = "+10 CP";
	rows[6][4].innerHTML = 60;
	
	rows[7][2].innerHTML = "+10 ATK/+5 CP";
	rows[7][4].innerHTML = 60;
	
	rows[8][2].innerHTML = "+10 HP/+15 DEF/+5 CP";
	rows[8][4].innerHTML = 400;
	
	rows[9][2].innerHTML = "+30 DEF";
	rows[9][4].innerHTML = 400;
	
	rows[10][2].innerHTML = "+40 HP/+20 CP";
	rows[10][4].innerHTML = 1200;
	
	rows[11][1].innerHTML = "2";
	rows[11][2].innerHTML = "+20 HP/+10 CP";
	rows[11][4].innerHTML = 400;
	
	rows[12][2].innerHTML = "+10 ATK/+15 DEF/+10 CP";
	rows[12][4].innerHTML = 400;
	
	rows[13][2].innerHTML = "+10 HP/+30 DEF";
	rows[13][4].innerHTML = 400;
	
	rows[14][2].innerHTML = "+30 HP/+30 DEF/+15 CP";
	rows[14][4].innerHTML = 1200;
	
	rows[15][2].innerHTML = "+20 ATK/+70 DEF";
	rows[15][4].innerHTML = 1200;
	
	rows[16][2].innerHTML = "+50 ATK/+50 DEF";
	rows[16][4].innerHTML = 1600;
	
	rows[17][2].innerHTML = "+200 DEF";
	rows[17][4].innerHTML = 2000;
	
	rows[18][1].innerHTML = "3";
	rows[18][2].innerHTML = "+120 DEF/+10 CP";
	rows[18][4].innerHTML = 1600;
	
	rows[19][2].innerHTML = "+50 HP/+10% CRI/+10% EVA";
	rows[19][4].innerHTML = 2000;
	
	rows[20][2].innerHTML = "+3% HP/+120 DEF";
	rows[20][4].innerHTML = 4000;
	
	rows[21][2].innerHTML = "+200 HP/+20 ATK/+160 DEF/+15 CP";
	rows[21][4].innerHTML = 5000;
	
	rows[22][2].innerHTML = "POW +50/+40 ATK/+160 DEF";
	rows[22][5].innerHTML = 4000;
	
	rows[23][1].innerHTML = "4";
	rows[23][2].innerHTML = "+2%HP/+30 CP";
	rows[23][4].innerHTML = 2000;
	
	rows[24][2].innerHTML = "+5% DEF";
	rows[24][4].innerHTML = 4000;
	
	rows[25][2].innerHTML = "+500 HP/+40 ATK/+30 CP";
	rows[25][4].innerHTML = 5000;
	
	rows[26][2].innerHTML = "+100 HP/+100 ATK/+3% DEF";
	rows[26][4].innerHTML = 7000;
	
	rows[27][2].innerHTML = "CP -4/+200 DEF/+100 CP";
	rows[27][5].innerHTML = 4000;
	
	rows[28][2].innerHTML = "CD -0.7/+60 HP/+40 ATK/+120 DEF";
	rows[28][5].innerHTML = 4000;
	
	rows[29][2].innerHTML = "POW +60/CP -8/CD -1.0";
	rows[29][5].innerHTML = 4000;
	
	rows[30][1].innerHTML = "5";
	rows[30][2].innerHTML = "+3% HP/+200 DEF";
	rows[30][4].innerHTML = 5000;
	
	rows[31][2].innerHTML = "+500 HP/+40 ATK/+400 DEF";
	rows[31][4].innerHTML = 7000;
	
	rows[32][2].innerHTML = "+50 ATK/+1000 DEF/+100 CP";
	rows[32][4].innerHTML = 8000;
	
	rows[33][2].innerHTML = "+3% HP/+1600 DEF/+50 CP";
	rows[33][4].innerHTML = 10000;
	
	rows[34][2].innerHTML = "POW +3%/+600 DEF";
	rows[34][5].innerHTML = 7000;
	
	rows[35][2].innerHTML = "CP -3%/+100 HP/+50 CP";
	rows[35][5].innerHTML = 7000;
	
	rows[36][2].innerHTML = "CD - 1.2/+20 ATK/+4% DEF/+30 CP";
	rows[36][5].innerHTML = 7000;
	
	rows[37][2].innerHTML = "POW +80/CP -12/+160 DEF";
	rows[37][5].innerHTML = 7000;
	
	rows[38][2].innerHTML = "POW +90/CP -12/CD -1.2";
	rows[38][5].innerHTML = 7000;
	
	rows[39][1].innerHTML = "6";
	rows[39][2].innerHTML = "+2% HP/+600 DEF/+80 CP";
	rows[39][4].innerHTML = 8000;
	
	rows[40][2].innerHTML = "+60 ATK/+1600 DEF/+200 CP";
	rows[40][4].innerHTML = 10000;
	
	rows[41][2].innerHTML = "+50 ATK/+7% DEF/+15 CP";
	rows[41][4].innerHTML = 10000;
	
	rows[42][2].innerHTML = "POW +6%";
	rows[42][5].innerHTML = 10000;
	
	rows[43][2].innerHTML = "CP -6%";
	rows[43][5].innerHTML = 10000;
	
	rows[44][2].innerHTML = "POW +70/CD -1.8/+100 HP/+200 ATK";
	rows[44][5].innerHTML = 10000;
	
	rows[45][2].innerHTML = "POW +90/+4% DEF/+80 CP";
	rows[45][5].innerHTML = 10000;
}

function abilityListTable2(rows){
	let rowsMaximumStats = [[]] , HP , ATK , DEF , CP , CRI , EVA;
	const maximumStats = document.getElementById("maximumStats");
	
	rowsMaximumStats[1] = maximumStats.rows[1].cells;
	rowsMaximumStats[2] = maximumStats.rows[2].cells;
	rowsMaximumStats[5] = maximumStats.rows[5].cells;
	rowsMaximumStats[6] = maximumStats.rows[6].cells;
	rowsMaximumStats[7] = maximumStats.rows[7].cells;
	
	rows[3][1].innerHTML = "1";
	rows[3][2].innerHTML = "+10 HP";
	rows[3][4].innerHTML = 30;
	
	rows[4][2].innerHTML = "+10 ATK";
	rows[4][4].innerHTML = 30;
	
	rows[5][2].innerHTML = "+15 DEF";
	rows[5][4].innerHTML = 60;
	
	rows[6][2].innerHTML = "+10 CP";
	rows[6][4].innerHTML = 60;
	
	rows[7][2].innerHTML = "+10 ATK/+5 CP";
	rows[7][4].innerHTML = 60;
	
	rows[8][2].innerHTML = "+20 ATK/+15 DEF";
	rows[8][4].innerHTML = 400;
	
	rows[9][2].innerHTML = "+15 DEF/+15 CP";
	rows[9][4].innerHTML = 400;
	
	rows[10][2].innerHTML = "+50 DEF/+20 CP";
	rows[10][4].innerHTML = 1200;
	
	rows[11][1].innerHTML = "2";
	rows[11][2].innerHTML = "+20 CP";
	rows[11][4].innerHTML = 400;
	
	rows[12][2].innerHTML = "+20 ATK/+10 CP";
	rows[12][4].innerHTML = 400;
	
	rows[13][2].innerHTML = "+10 HP/+10 ATK/+15 DEF/+5 CP";
	rows[13][4].innerHTML = 400;
	
	rows[14][2].innerHTML = "+30 ATK/+50 DEF";
	rows[14][4].innerHTML = 1200;
	
	rows[15][2].innerHTML = "+50 ATK/+10 CP";
	rows[15][4].innerHTML = 1200;
	
	rows[16][2].innerHTML = "+20 HP/+30 ATK/+50 DEF/+10 CP";
	rows[16][4].innerHTML = 1600;
	
	rows[17][2].innerHTML = "+40 HP/+60 ATK";
	rows[17][4].innerHTML = 2000;
	
	rows[18][1].innerHTML = "3";
	rows[18][2].innerHTML = "+40 ATK/+70 DEF";
	rows[18][4].innerHTML = 1600;
	
	rows[19][2].innerHTML = "+12% CRI/+10% EVA";
	rows[19][4].innerHTML = 2000;
	
	rows[20][2].innerHTML = "+40 HP/+80 ATK/+160 DEF";
	rows[20][4].innerHTML = 4000;
	
	rows[21][2].innerHTML = "+3% ATK/+1% DEF/+10% CRI";
	rows[21][4].innerHTML = 5000;
	
	rows[22][2].innerHTML = "POW +50/+120 DEF/+50 CP";
	rows[22][5].innerHTML = 4000;
	
	rows[23][1].innerHTML = "4";
	rows[23][2].innerHTML = "+90 DEF/+30 CP";
	rows[23][4].innerHTML = 2000;
	
	rows[24][2].innerHTML = "+20 HP/+60 ATK/+120 DEF/+50 CP";
	rows[24][4].innerHTML = 4000;
	
	rows[25][2].innerHTML = "+30 HP/+200 ATK/+200 DEF";
	rows[25][4].innerHTML = 5000;
	
	rows[26][2].innerHTML = "+200 HP/+200 ATK/+70 DEF/+15% CRI";
	rows[26][4].innerHTML = 7000;
	
	rows[27][2].innerHTML = "CP -4/+20 HP/+80 ATK/+80 CP";
	rows[27][5].innerHTML = 4000;
	
	rows[28][2].innerHTML = "CD -0.7/+80 ATK/+160 DEF/+20 CP";
	rows[28][5].innerHTML = 4000;
	
	rows[29][2].innerHTML = "POW +60/CP -8/CD -1.0";
	rows[29][5].innerHTML = 4000;
	
	rows[30][1].innerHTML = "5";
	rows[30][2].innerHTML = "+40 ATK/+120 DEF/+200 CP";
	rows[30][4].innerHTML = 5000;
	
	rows[31][2].innerHTML = "+500 ATK/+400 DEF/+50 CP";
	rows[31][4].innerHTML = 7000;
	
	rows[32][2].innerHTML = "+20 HP/+200 ATK/+200 DEF/+100 CP";
	rows[32][4].innerHTML = 8000;
	
	rows[33][2].innerHTML = "+3% ATK/+3% DEF/+3% CRI";
	rows[33][4].innerHTML = 10000;
	
	rows[34][2].innerHTML = "POW +3%/+100 ATK/+90 DEF";
	rows[34][5].innerHTML = 7000;
	
	rows[35][2].innerHTML = "CP -3%/+3% DEF";
	rows[35][5].innerHTML = 7000;
	
	rows[36][2].innerHTML = "CD - 1.2/+100 ATK/+1% DEF/+50 CP";
	rows[36][5].innerHTML = 7000;
	
	rows[37][2].innerHTML = "POW +80/CP -12/+100 ATK";
	rows[37][5].innerHTML = 7000;
	
	rows[38][2].innerHTML = "POW +90/CP -12/CD -1.2";
	rows[38][5].innerHTML = 7000;
	
	rows[39][1].innerHTML = "6";
	rows[39][2].innerHTML = "+300 ATK/+1000 DEF";
	rows[39][4].innerHTML = 8000;
	
	rows[40][2].innerHTML = "+20 HP/+300 ATK/+3% DEF/+200 CP";
	rows[40][4].innerHTML = 10000;
	
	rows[41][2].innerHTML = "+500 ATK/+400 DEF/+200 CP";
	rows[41][4].innerHTML = 10000;
	
	rows[42][2].innerHTML = "POW +6%";
	rows[42][5].innerHTML = 10000;
	
	rows[43][2].innerHTML = "CP -6%";
	rows[43][5].innerHTML = 10000;
	
	rows[44][2].innerHTML = "POW +70/CD -1.8/+100 ATK/+200 DEF";
	rows[44][5].innerHTML = 10000;
	
	rows[45][2].innerHTML = "POW +90/+6% CP";
	rows[45][5].innerHTML = 10000;
	
	HP = 430;
	rows[75][0].innerHTML = "+" + HP;
	rowsMaximumStats[5][1].innerHTML = eval("(parseInt(rowsMaximumStats[1][1].innerHTML) + HP)");
	rows[77][0].innerHTML = "+0.00%";

	ATK = Math.floor(eval("3220 + ((parseInt(rowsMaximumStats[2][1].innerHTML) * 6) / 100)"));
	rows[75][1].innerHTML = "+" + ATK;
	rowsMaximumStats[6][1].innerHTML = eval("(parseInt(rowsMaximumStats[2][1].innerHTML) + ATK)");
	rows[77][1].innerHTML = "+6.00%";

	DEF = Math.floor(eval("3610 + ((parseInt(rowsMaximumStats[2][3].innerHTML) * 11) / 100)"));
	rows[75][2].innerHTML = "+" + DEF;
	rowsMaximumStats[6][3].innerHTML = eval("(parseInt(rowsMaximumStats[2][3].innerHTML) + DEF)");
	rows[77][2].innerHTML = "+11.00%";

	CP = Math.floor(eval("1135 + ((parseInt(rowsMaximumStats[1][3].innerHTML) * 9) / 100)"));
	rows[75][3].innerHTML = "+" + CP;
	rowsMaximumStats[5][3].innerHTML = eval("(parseInt(rowsMaximumStats[1][3].innerHTML) + CP)");
	rows[77][3].innerHTML = "+9.00%";
	
	CRI = eval("5 + (5 * 57) / 100") + "%";
	rowsMaximumStats[7][1].innerHTML = CRI;
	rows[76][4].innerHTML = "+57.00%";

	EVA = eval("5 + (5 * 22) / 100") + "%";
	rowsMaximumStats[7][3].innerHTML = EVA;
	rows[76][5].innerHTML = "+22.00%";
}

function abilityListTable3(rows){
	let rowsMaximumStats = [[]] , HP , ATK , DEF , CP , CRI , EVA;
	const maximumStats = document.getElementById("maximumStats");
	
	rowsMaximumStats[1] = maximumStats.rows[1].cells;
	rowsMaximumStats[2] = maximumStats.rows[2].cells;
	rowsMaximumStats[5] = maximumStats.rows[5].cells;
	rowsMaximumStats[6] = maximumStats.rows[6].cells;
	rowsMaximumStats[7] = maximumStats.rows[7].cells;
	
	rows[3][1].innerHTML = "1";
	rows[3][2].innerHTML = "+10 HP";
	rows[3][4].innerHTML = 30;
	
	rows[4][2].innerHTML = "+10 ATK";
	rows[4][4].innerHTML = 30;
	
	rows[5][2].innerHTML = "+15 DEF";
	rows[5][4].innerHTML = 60;
	
	rows[6][2].innerHTML = "+10 CP";
	rows[6][4].innerHTML = 60;
	
	rows[7][2].innerHTML = "+10 ATK/+5 CP";
	rows[7][4].innerHTML = 60;
	
	rows[8][2].innerHTML = "+20 HP/+20 ATK";
	rows[8][4].innerHTML = 400;
	
	rows[9][2].innerHTML = "+30 ATK";
	rows[9][4].innerHTML = 400;
	
	rows[10][2].innerHTML = "+30 HP/+50 DEF";
	rows[10][4].innerHTML = 1200;
	
	rows[11][1].innerHTML = "2";
	rows[11][2].innerHTML = "+20 CP";
	rows[11][4].innerHTML = 400;
	
	rows[12][2].innerHTML = "+5 CP/+30 ATK";
	rows[12][4].innerHTML = 400;
	
	rows[13][2].innerHTML = "+10 HP/+10 ATK/+15 DEF/+5 CP";
	rows[13][4].innerHTML = 400;
	
	rows[14][2].innerHTML = "+40 HP/+30 ATK";
	rows[14][4].innerHTML = 1200;
	
	rows[15][2].innerHTML = "+50 ATK/+15 DEF";
	rows[15][4].innerHTML = 1200;
	
	rows[16][2].innerHTML = "+50 HP/+1% ATK";
	rows[16][4].innerHTML = 1600;
	
	rows[17][2].innerHTML = "+80 ATK/+12% CRI";
	rows[17][4].innerHTML = 2000;
	
	rows[18][1].innerHTML = "3";
	rows[18][2].innerHTML = "+80 ATK/+10 CP";
	rows[18][4].innerHTML = 1600;
	
	rows[19][2].innerHTML = "+15% CRI/+10% EVA";
	rows[19][4].innerHTML = 2000;
	
	rows[20][2].innerHTML = "+100 HP/+100 ATK";
	rows[20][4].innerHTML = 4000;
	
	rows[21][2].innerHTML = "+500 ATK/+15 CP/+10% CRI";
	rows[21][4].innerHTML = 5000;
	
	rows[22][2].innerHTML = "POW +50/+40 HP/+2% ATK";
	rows[22][5].innerHTML = 4000;
	
	rows[23][1].innerHTML = "4";
	rows[23][2].innerHTML = "+50 HP/+50 ATK";
	rows[23][4].innerHTML = 2000;
	
	rows[24][2].innerHTML = "+5% ATK";
	rows[24][4].innerHTML = 4000;
	
	rows[25][2].innerHTML = "+80 HP/+80 ATK/+90 DEF";
	rows[25][4].innerHTML = 5000;
	
	rows[26][2].innerHTML = "+3% ATK/+70 DEF/+20% CRI/+12% EVA";
	rows[26][4].innerHTML = 7000;
	
	rows[27][2].innerHTML = "CP -4/+100 ATK/+90 DEF/+15 CP";
	rows[27][5].innerHTML = 4000;
	
	rows[28][2].innerHTML = "CD -0.7/+80 HP/+200 ATK";
	rows[28][5].innerHTML = 4000;
	
	rows[29][2].innerHTML = "POW +60/CP -8/CD -1";
	rows[29][5].innerHTML = 4000;
	
	rows[30][1].innerHTML = "5";
	rows[30][2].innerHTML = "+100 ATK/+90 DEF/+80 CP";
	rows[30][4].innerHTML = 5000;
	
	rows[31][2].innerHTML = "+500 HP/+500 ATK";
	rows[31][4].innerHTML = 7000;
	
	rows[32][2].innerHTML = "+4% HP/+300 ATK";
	rows[32][4].innerHTML = 8000;
	
	rows[33][2].innerHTML = "+9% ATK";
	rows[33][4].innerHTML = 10000;
	
	rows[34][2].innerHTML = "POW +3%/+50 HP/+200 ATK";
	rows[34][5].innerHTML = 7000;
	
	rows[35][2].innerHTML = "CP -3%/+100 HP/+90 DEF";
	rows[35][5].innerHTML = 7000;
	
	rows[36][2].innerHTML = "CD -1.2/+100 ATK/+90 DEF/+30 CP";
	rows[36][5].innerHTML = 7000;
	
	rows[37][2].innerHTML = "POW +80/CP -12/+100 ATK";
	rows[37][5].innerHTML = 7000;
	
	rows[38][2].innerHTML = "POW +90/CP -12/CD -1.2";
	rows[38][5].innerHTML = 7000;
	
	rows[39][1].innerHTML = "6";
	rows[39][2].innerHTML = "+300 HP/+100 ATK/+90 DEF/+30 CP";
	rows[39][4].innerHTML = 8000;
	
	rows[40][2].innerHTML = "+100 HP/+1000 ATK/+200 DEF";
	rows[40][4].innerHTML = 10000;
	
	rows[41][2].innerHTML = "+4% HP/+800 ATK/+70 DEF/+10 CP";
	rows[41][4].innerHTML = 10000;
	
	rows[42][2].innerHTML = "POW +6%";
	rows[42][5].innerHTML = 10000;
	
	rows[43][2].innerHTML = "CP -6%";
	rows[43][5].innerHTML = 10000;
	
	rows[44][2].innerHTML = "POW +70/CD -1.8/+100 HP/+200 ATK";
	rows[44][5].innerHTML = 10000;
	
	rows[45][2].innerHTML = "POW +90/+6% ATK";
	rows[45][5].innerHTML = 10000;
	
	HP = Math.floor(eval("1660 + ((parseInt(rowsMaximumStats[1][1].innerHTML) * 8) / 100)"));
	rows[75][0].innerHTML = "+" + HP;
	rowsMaximumStats[5][1].innerHTML = eval("(parseInt(rowsMaximumStats[1][1].innerHTML) + HP)");
	rows[77][0].innerHTML = "+8.00%";
	
	ATK = Math.floor(eval("4780 + ((parseInt(rowsMaximumStats[2][1].innerHTML) * 26) / 100)"));
	rows[75][1].innerHTML = "+" + ATK;
	rowsMaximumStats[6][1].innerHTML = eval("(parseInt(rowsMaximumStats[2][1].innerHTML) + ATK)");
	rows[77][1].innerHTML = "+26.00%";
	
	DEF = eval("(parseInt(rowsMaximumStats[2][3].innerHTML) + 975)");
	rows[75][2].innerHTML = "+975";
	rowsMaximumStats[6][3].innerHTML = DEF;
	rows[77][2].innerHTML = "+0.00%";
	
	CP = eval("(parseInt(rowsMaximumStats[1][3].innerHTML) + 235)");
	rows[75][3].innerHTML = "+235";
	rowsMaximumStats[5][3].innerHTML =  CP;
	rows[77][3].innerHTML = "+0.00%";
	
	CRI = eval("5 + (5 * 57) / 100") + "%";
	rowsMaximumStats[7][1].innerHTML = CRI;
	rows[76][4].innerHTML = "+57.00%";
	
	EVA = eval("5 + (5 * 22) / 100") + "%";
	rowsMaximumStats[7][3].innerHTML = EVA;
	rows[76][5].innerHTML = "+22.00%";
}

function abilityListTable(n){
	createAbilityListTable();
	let rows = [[]] , rowsLength;
	
	const abilityListTable = document.getElementById("abilityListTable");
	rowsLength = abilityListTable.rows.length;
	rows[0] = abilityListTable.rows[0].cells;
	rows[1] = abilityListTable.rows[1].cells;
	for(let i = 3; i < rowsLength; i ++){
		rows[i] = abilityListTable.rows[i].cells;
	}
	
	for(let i = 3; i < rowsLength - 9; i ++){
		rows[i][0].innerHTML = i - 2;
	}
	
	if(n === 1){
		abilityListTable1(rows);
	}
	if(n === 2){
		abilityListTable2(rows);
	}
	if(n === 3){
		abilityListTable3(rows);
	}
	
	switch((rowsLength - 12)){
		case 43:
			rows[46][1].innerHTML = 0;
			
			for(let i = 3; i < rowsLength - 9; i ++){
				if(i < 22 || (i > 22 && i < 27) || (i > 29 && i < 34) || (i > 38 && i < 42)){
					rows[46][1].innerHTML = eval("parseInt(rows[46][1].innerHTML) + parseInt(rows[i][4].innerHTML)");
				}
				if(i === 22 || (i > 26 && i < 30) || (i > 33 && i < 39) || (i > 41)){
					rows[46][1].innerHTML = eval("parseInt(rows[46][1].innerHTML) + parseInt(rows[i][5].innerHTML)");
				}
			}
			break;
		case 56:
			rows[46][2].innerHTML = "POW +50";
			rows[46][5].innerHTML = 3000;
			
			rows[47][2].innerHTML = "CP -4";
			rows[47][5].innerHTML = 2500;
			
			rows[48][2].innerHTML = "CD -0.7";
			rows[48][5].innerHTML = 2500;
			
			rows[49][2].innerHTML = "POW +60/CP -8/CD -1";
			rows[49][5].innerHTML = 4000;
			
			rows[50][2].innerHTML = "POW +3%";
			rows[50][5].innerHTML = 5000;
			
			rows[51][2].innerHTML = "CP -3%";
			rows[51][5].innerHTML = 6000;
			
			rows[52][2].innerHTML = "CD -1.2";
			rows[52][5].innerHTML = 4000;
			
			rows[53][2].innerHTML = "POW +80/CP -12";
			rows[53][5].innerHTML = 6000;
			
			rows[54][2].innerHTML = "POW +90/CP -12/CD -1.2";
			rows[54][5].innerHTML = 7000;
			
			rows[55][2].innerHTML = "POW +6%";
			rows[55][5].innerHTML = 10000;
			
			rows[56][2].innerHTML = "CP -6%";
			rows[56][5].innerHTML = 10000;
			
			rows[57][2].innerHTML = "POW +70/CD -1.8";
			rows[57][5].innerHTML = 7000;
			
			rows[58][2].innerHTML = "POW +90";
			rows[58][5].innerHTML = 8500;
			
			rows[59][1].innerHTML = 0;
			
			for(let i = 3; i < rowsLength - 9; i ++){
				if(i < 22 || (i > 22 && i < 27) || (i > 29 && i < 34) || (i > 38 && i < 42)){
					rows[59][1].innerHTML = eval("parseInt(rows[59][1].innerHTML) + parseInt(rows[i][4].innerHTML)");
				}
				if(i === 22 || (i > 26 && i < 30) || (i > 33 && i < 39) || (i > 41)){
					rows[59][1].innerHTML = eval("parseInt(rows[59][1].innerHTML) + parseInt(rows[i][5].innerHTML)");
				}
			}
			
			rows[61][0].innerHTML = "+1660";
			rows[61][2].innerHTML = "+4780";
			rows[61][4].innerHTML = "+975";
			
			rows[62][0].innerHTML = "+8.00%";
			rows[62][2].innerHTML = "+26.00%";
			rows[62][4].innerHTML = "+235";
			
			rows[63][0].innerHTML = "+57.00%";
			rows[63][2].innerHTML = "+22.00%";
			break;
		case 69:
			rows[46][2].innerHTML = "POW +50";
			rows[46][5].innerHTML = 3000;
			
			rows[47][2].innerHTML = "CP -4";
			rows[47][5].innerHTML = 2500;
			
			rows[48][2].innerHTML = "CD -0.7";
			rows[48][5].innerHTML = 2500;
			
			rows[49][2].innerHTML = "POW +60/CP -8/CD -1";
			rows[49][5].innerHTML = 4000;
			
			rows[50][2].innerHTML = "POW +3%";
			rows[50][5].innerHTML = 5000;
			
			rows[51][2].innerHTML = "CP -3%";
			rows[51][5].innerHTML = 6000;
			
			rows[52][2].innerHTML = "CD -1.2";
			rows[52][5].innerHTML = 4000;
			
			rows[53][2].innerHTML = "POW +80/CP -12";
			rows[53][5].innerHTML = 6000;
			
			rows[54][2].innerHTML = "POW +90/CP -12/CD -1.2";
			rows[54][5].innerHTML = 7000;
			
			rows[55][2].innerHTML = "POW +6%";
			rows[55][5].innerHTML = 10000;
			
			rows[56][2].innerHTML = "CP -6%";
			rows[56][5].innerHTML = 10000;
			
			rows[57][2].innerHTML = "POW +70/CD -1.8";
			rows[57][5].innerHTML = 7000;
			
			rows[58][2].innerHTML = "POW +90";
			rows[58][5].innerHTML = 8500;
			
			rows[59][2].innerHTML = "POW +50";
			rows[59][5].innerHTML = 3000;
			
			rows[60][2].innerHTML = "CP -4";
			rows[60][5].innerHTML = 2500;
			
			rows[61][2].innerHTML = "CD -0.7";
			rows[61][5].innerHTML = 2500;
			
			rows[62][2].innerHTML = "POW +60/CP -8/CD -1";
			rows[62][5].innerHTML = 4000;
			
			rows[63][2].innerHTML = "POW +3%";
			rows[63][5].innerHTML = 5000;
			
			rows[64][2].innerHTML = "CP -3%";
			rows[64][5].innerHTML = 6000;
			
			rows[65][2].innerHTML = "CD -1.2";
			rows[65][5].innerHTML = 4000;
			
			rows[66][2].innerHTML = "POW +80/CP -12";
			rows[66][5].innerHTML = 6000;
			
			rows[67][2].innerHTML = "POW +90/CP -12/CD -1.2";
			rows[67][5].innerHTML = 7000;
			
			rows[68][2].innerHTML = "POW +6%";
			rows[68][5].innerHTML = 10000;
			
			rows[69][2].innerHTML = "CP -6%";
			rows[69][5].innerHTML = 10000;
			
			rows[70][2].innerHTML = "POW +70/CD -1.8";
			rows[70][5].innerHTML = 7000;
			
			rows[71][2].innerHTML = "POW +90";
			rows[71][5].innerHTML = 8500;
			
			rows[72][1].innerHTML = 0;
			
			for(let i = 3; i < rowsLength - 9; i ++){
				if(i < 22 || (i > 22 && i < 27) || (i > 29 && i < 34) || (i > 38 && i < 42)){
					rows[72][1].innerHTML = eval("parseInt(rows[72][1].innerHTML) + parseInt(rows[i][4].innerHTML)");
				}
				if(i === 22 || (i > 26 && i < 30) || (i > 33 && i < 39) || (i > 41)){
					rows[72][1].innerHTML = eval("parseInt(rows[72][1].innerHTML) + parseInt(rows[i][5].innerHTML)");
				}
			}
			break;
		case 82:
			rows[46][2].innerHTML = "POW +50";
			rows[46][5].innerHTML = 3000;
			
			rows[47][2].innerHTML = "CP -4";
			rows[47][5].innerHTML = 2500;
			
			rows[48][2].innerHTML = "CD -0.7";
			rows[48][5].innerHTML = 2500;
			
			rows[49][2].innerHTML = "POW +60/CP -8/CD -1";
			rows[49][5].innerHTML = 4000;
			
			rows[50][2].innerHTML = "POW +3%";
			rows[50][5].innerHTML = 5000;
			
			rows[51][2].innerHTML = "CP -3%";
			rows[51][5].innerHTML = 6000;
			
			rows[52][2].innerHTML = "CD -1.2";
			rows[52][5].innerHTML = 4000;
			
			rows[53][2].innerHTML = "POW +80/CP -12";
			rows[53][5].innerHTML = 6000;
			
			rows[54][2].innerHTML = "POW +90/CP -12/CD -1.2";
			rows[54][5].innerHTML = 7000;
			
			rows[55][2].innerHTML = "POW +6%";
			rows[55][5].innerHTML = 10000;
			
			rows[56][2].innerHTML = "CP -6%";
			rows[56][5].innerHTML = 10000;
			
			rows[57][2].innerHTML = "POW +70/CD -1.8";
			rows[57][5].innerHTML = 7000;
			
			rows[58][2].innerHTML = "POW +90";
			rows[58][5].innerHTML = 8500;
			
			rows[59][2].innerHTML = "POW +50";
			rows[59][5].innerHTML = 3000;
			
			rows[60][2].innerHTML = "CP -4";
			rows[60][5].innerHTML = 2500;
			
			rows[61][2].innerHTML = "CD -0.7";
			rows[61][5].innerHTML = 2500;
			
			rows[62][2].innerHTML = "POW +60/CP -8/CD -1";
			rows[62][5].innerHTML = 4000;
			
			rows[63][2].innerHTML = "POW +3%";
			rows[63][5].innerHTML = 5000;
			
			rows[64][2].innerHTML = "CP -3%";
			rows[64][5].innerHTML = 6000;
			
			rows[65][2].innerHTML = "CD -1.2";
			rows[65][5].innerHTML = 4000;
			
			rows[66][2].innerHTML = "POW +80/CP -12";
			rows[66][5].innerHTML = 6000;
			
			rows[67][2].innerHTML = "POW +90/CP -12/CD -1.2";
			rows[67][5].innerHTML = 7000;
			
			rows[68][2].innerHTML = "POW +6%";
			rows[68][5].innerHTML = 10000;
			
			rows[69][2].innerHTML = "CP -6%";
			rows[69][5].innerHTML = 10000;
			
			rows[70][2].innerHTML = "POW +70/CD -1.8";
			rows[70][5].innerHTML = 7000;
			
			rows[71][2].innerHTML = "POW +90";
			rows[71][5].innerHTML = 8500;
			
			rows[72][2].innerHTML = "POW +50";
			rows[72][5].innerHTML = 3000;
			
			rows[73][2].innerHTML = "CP -4";
			rows[73][5].innerHTML = 2500;
			
			rows[74][2].innerHTML = "CD -0.7";
			rows[74][5].innerHTML = 2500;
			
			rows[75][2].innerHTML = "POW +60/CP -8/CD -1";
			rows[75][5].innerHTML = 4000;
			
			rows[76][2].innerHTML = "POW +3%";
			rows[76][5].innerHTML = 5000;
			
			rows[77][2].innerHTML = "CP -3%";
			rows[77][5].innerHTML = 6000;
			
			rows[78][2].innerHTML = "CD -1.2";
			rows[78][5].innerHTML = 4000;
			
			rows[79][2].innerHTML = "POW +80/CP -12";
			rows[79][5].innerHTML = 6000;
			
			rows[80][2].innerHTML = "POW +90/CP -12/CD -1.2";
			rows[80][5].innerHTML = 7000;
			
			rows[81][2].innerHTML = "POW +6%";
			rows[81][5].innerHTML = 10000;
			
			rows[82][2].innerHTML = "CP -6%";
			rows[82][5].innerHTML = 10000;
			
			rows[83][2].innerHTML = "POW +70/CD -1.8";
			rows[83][5].innerHTML = 7000;
			
			rows[84][2].innerHTML = "POW +90";
			rows[84][5].innerHTML = 8500;
			
			rows[85][1].innerHTML = 0;
			
			for(let i = 3; i < rowsLength - 9; i ++){
				if(i < 22 || (i > 22 && i < 27) || (i > 29 && i < 34) || (i > 38 && i < 42)){
					rows[85][1].innerHTML = eval("parseInt(rows[85][1].innerHTML) + parseInt(rows[i][4].innerHTML)");
				}
				if(i === 22 || (i > 26 && i < 30) || (i > 33 && i < 39) || (i > 41)){
					rows[85][1].innerHTML = eval("parseInt(rows[85][1].innerHTML) + parseInt(rows[i][5].innerHTML)");
				}
			}
			
			rows[87][0].innerHTML = "+1660";
			rows[87][2].innerHTML = "+4780";
			rows[87][4].innerHTML = "+975";
			
			rows[88][0].innerHTML = "+8.00%";
			rows[88][2].innerHTML = "+26.00%";
			rows[88][4].innerHTML = "+235";
			
			rows[89][0].innerHTML = "+57.00%";
			rows[89][2].innerHTML = "+22.00%";
			break;
	}
}