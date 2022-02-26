function abilityListTable(){
	let rows = [[]] , i , rowsLength;
	
	rowsLength = document.getElementById("abilityListTable").rows.length;
	
	rows[0] = document.getElementById("abilityListTable").rows[0].cells;
	rows[1] = document.getElementById("abilityListTable").rows[1].cells;
	
	switch(rows[1][1].innerHTML){
		case "69":
			for(i = 3; i < rowsLength; i ++){
				rows[i] = document.getElementById("abilityListTable").rows[i].cells;
			}
			
			for(i = 3; i < rowsLength - 8; i ++){
				rows[i][0].innerHTML = i - 2;
			}
			
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
			
			for(i = 3; i < rowsLength - 8; i ++){
				if(i < 22 || (i > 22 && i < 27) || (i > 29 && i < 34) || (i > 38 && i < 42)){
					rows[72][1].innerHTML = eval("parseInt(rows[72][1].innerHTML) + parseInt(rows[i][4].innerHTML)");
				}
				if(i === 22 || (i > 26 && i < 30) || (i > 33 && i < 39) || (i > 41)){
					rows[72][1].innerHTML = eval("parseInt(rows[72][1].innerHTML) + parseInt(rows[i][5].innerHTML)");
				}
			}
			
			rows[74][0].innerHTML = "+1660";
			rows[74][2].innerHTML = "+4780";
			rows[74][4].innerHTML = "+975";
			
			rows[75][0].innerHTML = "+8.00%";
			rows[75][2].innerHTML = "+26.00%";
			rows[75][4].innerHTML = "+235";
			
			rows[76][0].innerHTML = "+57.00%";
			rows[76][2].innerHTML = "+22.00%";
			
			break;
	}
}