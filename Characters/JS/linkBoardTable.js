function linkBoardTable(){
	let linkBoardTableRows = [[]] , i , rowsLength;
	
	rowsLength = document.getElementById("linkBoardTable").rows.length;
	
	for(i = 1; i < rowsLength; i ++){
		linkBoardTableRows[i] = document.getElementById("linkBoardTable").rows[i].cells;
		linkBoardTableRows[i][0].innerHTML = i;
	}
	
	for(i = 1; i < rowsLength; i ++){
		if(i === 21 || i === 40 || i === 61 || i === 99 || i === 118){
			linkBoardTableRows[i][3].innerHTML = "80";
			linkBoardTableRows[i][5].innerHTML = "40";
			linkBoardTableRows[i][7].innerHTML = "10";
		}else if(i === 35 || i === 94){
			linkBoardTableRows[i][3].innerHTML = "80";
			linkBoardTableRows[i][5].innerHTML = "40";
			linkBoardTableRows[i][7].innerHTML = "10";
			linkBoardTableRows[i][11].innerHTML = "100";
			linkBoardTableRows[i][13].innerHTML = "1000000";
			linkBoardTableRows[i][15].innerHTML = "10000";
		}else if(i === 39 || i === 98){
			linkBoardTableRows[i][3].innerHTML = "80";
			linkBoardTableRows[i][5].innerHTML = "40";
			linkBoardTableRows[i][7].innerHTML = "10";
			linkBoardTableRows[i][11].innerHTML = "80";
			linkBoardTableRows[i][13].innerHTML = "1000000";
			linkBoardTableRows[i][15].innerHTML = "10000";
		}else if(i === 41 || i === 51 || i === 109 || i === 110 || i === 119 || i === 129){
			linkBoardTableRows[i][5].innerHTML = "10";
			linkBoardTableRows[i][7].innerHTML = "1000000";
			linkBoardTableRows[i][9].innerHTML = "10000";
		}else if(i === 60 || i === 111 || i === 136){
			linkBoardTableRows[i][5].innerHTML = "10";
			linkBoardTableRows[i][7].innerHTML = "1000000";
			linkBoardTableRows[i][9].innerHTML = "20000";
		}else if(i === 79 || i === 113 || i === 116){
			linkBoardTableRows[i][3].innerHTML = "80";
			linkBoardTableRows[i][5].innerHTML = "40";
			linkBoardTableRows[i][7].innerHTML = "10";
			linkBoardTableRows[i][11].innerHTML = "1000000";
			linkBoardTableRows[i][13].innerHTML = "1000000";
			linkBoardTableRows[i][15].innerHTML = "10";
		}else if(i === 80 || i === 114 || i === 117 || i === 124){
			linkBoardTableRows[i][5].innerHTML = "1000000";
			linkBoardTableRows[i][7].innerHTML = "1000000";
			linkBoardTableRows[i][9].innerHTML = "10";
		}else if(i === 137){
			linkBoardTableRows[i][3].innerHTML = "80";
			linkBoardTableRows[i][5].innerHTML = "40";
			linkBoardTableRows[i][7].innerHTML = "10";
			linkBoardTableRows[i][11].innerHTML = "10";
			linkBoardTableRows[i][13].innerHTML = "1000000";
			linkBoardTableRows[i][15].innerHTML = "1000000";
		}else if(i > 80){
			linkBoardTableRows[i][5].innerHTML = "1500000";
			linkBoardTableRows[i][7].innerHTML = "1500000";
			linkBoardTableRows[i][9].innerHTML = "7500";
		}else{
			linkBoardTableRows[i][5].innerHTML = "1000000";
			linkBoardTableRows[i][7].innerHTML = "1000000";
			linkBoardTableRows[i][9].innerHTML = "5000";
		}
	}
	
	linkBoardTableRows[1][4].innerHTML = "+50 HP";
	linkBoardTableRows[2][4].innerHTML = "+75 HP";
	linkBoardTableRows[3][4].innerHTML = "+100 HP";
	linkBoardTableRows[4][4].innerHTML = "+125 HP";
	linkBoardTableRows[5][4].innerHTML = "+150 HP";
	
	linkBoardTableRows[6][4].innerHTML = "+10 CP";
	linkBoardTableRows[7][4].innerHTML = "+15 CP";
	linkBoardTableRows[8][4].innerHTML = "+20 CP";
	linkBoardTableRows[9][4].innerHTML = "+25 CP";
	linkBoardTableRows[10][4].innerHTML = "+30 CP";
	
	linkBoardTableRows[11][4].innerHTML = "+100 ATK";
	linkBoardTableRows[12][4].innerHTML = "+150 ATK";
	linkBoardTableRows[13][4].innerHTML = "+200 ATK";
	linkBoardTableRows[14][4].innerHTML = "+250 ATK";
	linkBoardTableRows[15][4].innerHTML = "+300 ATK";
	
	linkBoardTableRows[16][4].innerHTML = "+30 DEF";
	linkBoardTableRows[17][4].innerHTML = "+45 DEF";
	linkBoardTableRows[18][4].innerHTML = "+60 DEF";
	linkBoardTableRows[19][4].innerHTML = "+75 DEF";
	linkBoardTableRows[20][4].innerHTML = "+90 DEF";
	
	linkBoardTableRows[22][4].innerHTML = "+200 ATK";
	linkBoardTableRows[23][4].innerHTML = "+300 ATK";
	linkBoardTableRows[24][4].innerHTML = "+400 ATK";
	linkBoardTableRows[25][4].innerHTML = "+500 ATK";
	linkBoardTableRows[26][4].innerHTML = "+600 ATK";
	
	linkBoardTableRows[27][4].innerHTML = "+100 HP";
	linkBoardTableRows[28][4].innerHTML = "+40 CP";
	linkBoardTableRows[29][4].innerHTML = "+60 DEF";
	linkBoardTableRows[30][4].innerHTML = "+120 DEF";
	linkBoardTableRows[31][4].innerHTML = "+200 HP";
	
	linkBoardTableRows[32][4].innerHTML = "+300 HP";
	linkBoardTableRows[33][4].innerHTML = "+60 CP";
	linkBoardTableRows[34][4].innerHTML = "+180 DEF";
	linkBoardTableRows[35][10].innerHTML = "+5% to Stats of Ninja Cards with " + "Attack Type Matching Bonus";
	
	linkBoardTableRows[36][4].innerHTML = "+400 HP";
	linkBoardTableRows[37][4].innerHTML = "+100 CP";
	linkBoardTableRows[38][4].innerHTML = "+240 DEF";
	linkBoardTableRows[39][10].innerHTML = "+10% to Stats of Ninja Cards with " + "Shinobi Matching Bonus";
	
	linkBoardTableRows[41][4].innerHTML = "-10% poison damage received";
	linkBoardTableRows[42][4].innerHTML = "+300 ATK";
	linkBoardTableRows[43][4].innerHTML = "+150 HP";
	linkBoardTableRows[44][4].innerHTML = "+30 CP";
	linkBoardTableRows[45][4].innerHTML = "+90 DEF";
	
	linkBoardTableRows[46][4].innerHTML = "+180 DEF";
	linkBoardTableRows[47][4].innerHTML = "+60 CP";
	linkBoardTableRows[48][4].innerHTML = "+300 HP";
	linkBoardTableRows[49][4].innerHTML = "+600 ATK";
	linkBoardTableRows[50][4].innerHTML = "+450 ATK";
	
	linkBoardTableRows[51][4].innerHTML = "-10% damage over time received";
	linkBoardTableRows[52][4].innerHTML = "+750 ATK";
	linkBoardTableRows[53][4].innerHTML = "+450 HP";
	linkBoardTableRows[54][4].innerHTML = "+90 CP";
	linkBoardTableRows[55][4].innerHTML = "+270 DEF";
	
	linkBoardTableRows[56][4].innerHTML = "+360 DEF";
	linkBoardTableRows[57][4].innerHTML = "+120 CP";
	linkBoardTableRows[58][4].innerHTML = "+600 HP";
	linkBoardTableRows[59][4].innerHTML = "+900 ATK";
	linkBoardTableRows[60][4].innerHTML = "+10% Ultimate Jutsu Resistance";
	
	linkBoardTableRows[62][4].innerHTML = "+400 ATK";
	linkBoardTableRows[63][4].innerHTML = "+200 HP";
	linkBoardTableRows[64][4].innerHTML = "+600 HP";
	linkBoardTableRows[65][4].innerHTML = "+800 HP";
	
	linkBoardTableRows[66][4].innerHTML = "+600 ATK";
	linkBoardTableRows[67][4].innerHTML = "+40 CP";
	linkBoardTableRows[68][4].innerHTML = "+80 CP";
	linkBoardTableRows[69][4].innerHTML = "+160 CP";
	
	linkBoardTableRows[70][4].innerHTML = "+800 ATK";
	linkBoardTableRows[71][4].innerHTML = "+120 DEF";
	linkBoardTableRows[72][4].innerHTML = "+240 DEF";
	linkBoardTableRows[73][4].innerHTML = "+360 DEF";
	
	linkBoardTableRows[74][4].innerHTML = "+1000 ATK";
	linkBoardTableRows[75][4].innerHTML = "+400 HP";
	linkBoardTableRows[76][4].innerHTML = "+120 CP";
	linkBoardTableRows[77][4].innerHTML = "+480 DEF";
	
	linkBoardTableRows[78][4].innerHTML = "+1200 ATK";
	linkBoardTableRows[79][10].innerHTML = "+1 Ninja Card Equipment Slot(s)";
	linkBoardTableRows[80][4].innerHTML = "+1 Ninja Tool Equipment Slot(s)";
	
	linkBoardTableRows[81][4].innerHTML = "+100 HP";
	linkBoardTableRows[82][4].innerHTML = "+20 CP";
	linkBoardTableRows[83][4].innerHTML = "+200 ATK";
	linkBoardTableRows[84][4].innerHTML = "+60 DEF";
	linkBoardTableRows[85][4].innerHTML = "+200 HP";
	
	linkBoardTableRows[86][4].innerHTML = "+40 CP";
	linkBoardTableRows[87][4].innerHTML = "+400 ATK";
	linkBoardTableRows[88][4].innerHTML = "+120 DEF";
	linkBoardTableRows[89][4].innerHTML = "+300 HP";
	linkBoardTableRows[90][4].innerHTML = "+60 CP";
	
	linkBoardTableRows[91][4].innerHTML = "+600 ATK";
	linkBoardTableRows[92][4].innerHTML = "+180 DEF";
	linkBoardTableRows[93][4].innerHTML = "+800 ATK";
	linkBoardTableRows[94][10].innerHTML = "+5% to Stats of Ninja Cards with " + "Attack Type Matching Bonus";
	
	linkBoardTableRows[95][4].innerHTML = "+400 HP";
	linkBoardTableRows[96][4].innerHTML = "+80 CP";
	linkBoardTableRows[97][4].innerHTML = "+240 DEF";
	linkBoardTableRows[98][10].innerHTML = "+10% to Stats of Ninja Cards with " + "Shinobi Matching Bonus";
	
	linkBoardTableRows[100][4].innerHTML = "+300 ATK";
	linkBoardTableRows[101][4].innerHTML = "+270 DEF";
	linkBoardTableRows[102][4].innerHTML = "+450 HP";
	linkBoardTableRows[103][4].innerHTML = "+90 CP";
	
	linkBoardTableRows[104][4].innerHTML = "+450 ATK";
	linkBoardTableRows[105][4].innerHTML = "+630 DEF";
	linkBoardTableRows[106][4].innerHTML = "+1050 HP";
	linkBoardTableRows[107][4].innerHTML = "+210 CP";
	
	linkBoardTableRows[108][4].innerHTML = "+600 ATK";
	linkBoardTableRows[109][4].innerHTML = "-10% poison damage received";
	linkBoardTableRows[110][4].innerHTML = "-10% damage over time received";
	linkBoardTableRows[111][4].innerHTML = "+10% Ultimate Jutsu Resistance";
	
	linkBoardTableRows[112][4].innerHTML = "+750 ATK";
	linkBoardTableRows[113][10].innerHTML = "Increases power of equipped Ultimate " + "Jutsu by 5% for each Ultimate Jutsu Card at max Jutsu LVL that is not the " + "same as the equipped Ultimate Jutsu (EX Ultimate Jutsu excluded).";
	linkBoardTableRows[114][4].innerHTML = "Increases power of equipped Ultimate " + "Jutsu by 10% for each Ultimate Jutsu Card at max Jutsu LVL that is the " + "same as the equipped Ultimate Jutsu (EX Ultimate Jutsu excluded).";
	
	linkBoardTableRows[115][4].innerHTML = "+900 ATK";
	linkBoardTableRows[116][10].innerHTML = "+1 Ninja Card Equipment Slot(s)";
	linkBoardTableRows[117][4].innerHTML = "+1 Ninja Card Equipment Slot(s)";
	
	linkBoardTableRows[119][4].innerHTML = "-10% poison damage received";
	linkBoardTableRows[120][4].innerHTML = "+500 HP";
	linkBoardTableRows[121][4].innerHTML = "+100 CP";
	linkBoardTableRows[122][4].innerHTML = "+500 ATK";
	linkBoardTableRows[123][4].innerHTML = "+300 DEF";
	
	linkBoardTableRows[124][4].innerHTML = "+1 Ninja Tool Equipment Slot(s)";
	linkBoardTableRows[125][4].innerHTML = "+450 DEF";
	linkBoardTableRows[126][4].innerHTML = "+750 ATK";
	linkBoardTableRows[127][4].innerHTML = "+150 CP";
	linkBoardTableRows[128][4].innerHTML = "+750 HP";
	
	linkBoardTableRows[129][4].innerHTML = "-10% damage over time received";
	linkBoardTableRows[130][4].innerHTML = "+1250 HP";
	linkBoardTableRows[131][4].innerHTML = "+250 CP";
	linkBoardTableRows[132][4].innerHTML = "+1000 ATK";
	linkBoardTableRows[133][4].innerHTML = "+750 DEF";
	
	linkBoardTableRows[134][4].innerHTML = "+1500 ATK";
	linkBoardTableRows[135][4].innerHTML = "+1250 ATK";
	linkBoardTableRows[136][4].innerHTML = "+10% Ultimate Jutsu Resistance";
	linkBoardTableRows[137][10].innerHTML = "Gain immunity to seal when the user is" + " inflicted with seal";
}