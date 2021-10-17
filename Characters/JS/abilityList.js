function abilityList () {
	let tableRows = [ [] ] , i;
	tableRows[0] = document.getElementById ( "abilityListTable" ).rows[0].cells;
	tableRows[1] = document.getElementById ( "abilityListTable" ).rows[1].cells;
	
	switch ( tableRows[0][2].innerHTML ) {
		case "69":
			for ( i = 2; i < 72; i ++ ) {
				tableRows[i] = document.getElementById ( "abilityListTable" ).rows[i].cells;
			}
			
			for ( i = 2; i < 71; i ++ ) {
				tableRows[i][0].innerHTML = i-1;
			}
			
			for ( i = 0; i < 70; i ++ ) {
				document.getElementsByClassName ( "abilityPoints" ).item ( i ).src = "https://lh3.googleusercontent.com/pkaGH5QJyR0OerBecH4eYv3ZR4AeAdVThepkfPMMCzvIPk3GhwV9Ey9BUCf4Ca2lgI_bWGw82SNzayzNArjzAUkytFFgKyAl-e0ogPgsgl__9JtweOYhr_9ACqsVKF3pkLf9uxnUjQ=w1920-h1080";
			}
			
			for ( i = 0; i < 30; i ++ ) {
				document.getElementsByClassName ( "increasePower" ).item ( i ).src = "https://lh3.googleusercontent.com/rRLz0dS5SPcbCMjjPKR0knr4vGXcVBC_5BSQhh2dCwCcbnctqKHWp2PSfy6An-7Vcw4XyFcICqcYlKeeQoyPr3NiyRiAw6bOxkTt2bouYmefHNUYy_nEFB0bvVGkJnx8FbIw-lG3nQ=w1920-h1080";
			}
			
			for ( i = 0; i < 39; i ++ ) {
				document.getElementsByClassName ( "increaseUltimatePower" ).item ( i ).src = "https://lh3.googleusercontent.com/cBHO4JCxyfpAKvYvPAAWcNL7jVI_Kz7ijBLo_jMYTG_mrrlzxlO8eW6zQvwbGfrlrK--ucfPnTkkKklFfMpi19kAVBAj2mEZeT1Ofd0KCFs-jbuQISkSgPjJsn_QkyKQ3rw4NaX8nA=w1920-h1080";
			}
			
			tableRows[2][1].innerHTML = "1";
			tableRows[2][2].innerHTML = "+10 HP";
			tableRows[2][4].innerHTML = 30;
			
			tableRows[3][2].innerHTML = "+10 ATK";
			tableRows[3][4].innerHTML = 30;
			
			tableRows[4][2].innerHTML = "+15 DEF";
			tableRows[4][4].innerHTML = 60;
			
			tableRows[5][2].innerHTML = "+10 CP";
			tableRows[5][4].innerHTML = 60;
			
			tableRows[6][2].innerHTML = "+10 ATK/+5 CP";
			tableRows[6][4].innerHTML = 60;
			
			tableRows[7][2].innerHTML = "+20 HP/+20 ATK";
			tableRows[7][4].innerHTML = 400;
			
			tableRows[8][2].innerHTML = "+30 ATK";
			tableRows[8][4].innerHTML = 400;
			
			tableRows[9][2].innerHTML = "+30 HP/+50 DEF";
			tableRows[9][4].innerHTML = 1200;
			
			tableRows[10][1].innerHTML = "2";
			tableRows[10][2].innerHTML = "+20 CP";
			tableRows[10][4].innerHTML = 400;
			
			tableRows[11][2].innerHTML = "+5 CP/+30 ATK";
			tableRows[11][4].innerHTML = 400;
			
			tableRows[12][2].innerHTML = "+10 HP/+10 ATK/+15 DEF/+5 CP";
			tableRows[12][4].innerHTML = 400;
			
			tableRows[13][2].innerHTML = "+40 HP/+30 ATK";
			tableRows[13][4].innerHTML = 1200;
			
			tableRows[14][2].innerHTML = "+50 ATK/+15 DEF";
			tableRows[14][4].innerHTML = 1200;
			
			tableRows[15][2].innerHTML = "+50 HP/+1% ATK";
			tableRows[15][4].innerHTML = 1600;
			
			tableRows[16][2].innerHTML = "+80 ATK/+12% CRI";
			tableRows[16][4].innerHTML = 2000;
			
			tableRows[17][1].innerHTML = "3";
			tableRows[17][2].innerHTML = "+80 ATK/+10 CP";
			tableRows[17][4].innerHTML = 1600;
			
			tableRows[18][2].innerHTML = "+15% CRI/+10% EVA";
			tableRows[18][4].innerHTML = 2000;
			
			tableRows[19][2].innerHTML = "+100 ATK/+100 HP";
			tableRows[19][4].innerHTML = 4000;
			
			tableRows[20][2].innerHTML = "+500 ATK/+15 CP/+10% CRI";
			tableRows[20][4].innerHTML = 5000;
			
			tableRows[21][2].innerHTML = "POW +50/+40 HP/+2% ATK";
			tableRows[21][5].innerHTML = 4000;
			
			tableRows[22][1].innerHTML = "4";
			tableRows[22][2].innerHTML = "+50 HP/+50 ATK";
			tableRows[22][4].innerHTML = 2000;
			
			tableRows[23][2].innerHTML = "+5% ATK";
			tableRows[23][4].innerHTML = 4000;
			
			tableRows[24][2].innerHTML = "+80 HP/+80 ATK/+90 DEF";
			tableRows[24][4].innerHTML = 5000;
			
			tableRows[25][2].innerHTML = "+3% ATK/+70 DEF/+20% CRI/+12% EVA";
			tableRows[25][4].innerHTML = 7000;
			
			tableRows[26][2].innerHTML = "CP -4/+100 ATK/+90 DEF/+15 CP";
			tableRows[26][5].innerHTML = 4000;
			
			tableRows[27][2].innerHTML = "CD -0.7/+80 HP/+200 ATK";
			tableRows[27][5].innerHTML = 4000;
			
			tableRows[28][2].innerHTML = "POW +60/CP -8/CD -1";
			tableRows[28][5].innerHTML = 4000;
			
			tableRows[29][1].innerHTML = "5";
			tableRows[29][2].innerHTML = "+100 ATK/+90 DEF/+80 CP";
			tableRows[29][4].innerHTML = 5000;
			
			tableRows[30][2].innerHTML = "+500 HP/+500 ATK";
			tableRows[30][4].innerHTML = 7000;
			
			tableRows[31][2].innerHTML = "+4% HP/+300 ATK";
			tableRows[31][4].innerHTML = 8000;
			
			tableRows[32][2].innerHTML = "+9% ATK";
			tableRows[32][4].innerHTML = 10000;
			
			tableRows[33][2].innerHTML = "POW +3%/+50 HP/+200 ATK";
			tableRows[33][5].innerHTML = 7000;
			
			tableRows[34][2].innerHTML = "CP -3%/+100 HP/+90 DEF";
			tableRows[34][5].innerHTML = 7000;
			
			tableRows[35][2].innerHTML = "CD -1.2/+100 ATK/+90 DEF/+30 CP";
			tableRows[35][5].innerHTML = 7000;
			
			tableRows[36][2].innerHTML = "POW +80/CP -12/+100 ATK";
			tableRows[36][5].innerHTML = 7000;
			
			tableRows[37][2].innerHTML = "POW +90/CP -12/CD -1.2";
			tableRows[37][5].innerHTML = 7000;
			
			tableRows[38][1].innerHTML = "6";
			tableRows[38][2].innerHTML = "+300 HP/+100 ATK/+90 DEF/+30 CP";
			tableRows[38][4].innerHTML = 8000;
			
			tableRows[39][2].innerHTML = "+100 HP/+1000 ATK/+200 DEF";
			tableRows[39][4].innerHTML = 10000;
			
			tableRows[40][2].innerHTML = "+4% HP/+800 ATK/+70 DEF/+10 CP";
			tableRows[40][4].innerHTML = 10000;
			
			tableRows[41][2].innerHTML = "POW +6%";
			tableRows[41][5].innerHTML = 10000;
			
			tableRows[42][2].innerHTML = "CP -6%";
			tableRows[42][5].innerHTML = 10000;
			
			tableRows[43][2].innerHTML = "POW +70/CD -1.8/+100 HP/+200 ATK";
			tableRows[43][5].innerHTML = 10000;
			
			tableRows[44][2].innerHTML = "POW +90/+6% ATK";
			tableRows[44][5].innerHTML = 10000;
			
			tableRows[45][2].innerHTML = "POW +50";
			tableRows[45][5].innerHTML = 3000;
			
			tableRows[46][2].innerHTML = "CP -4";
			tableRows[46][5].innerHTML = 2500;
			
			tableRows[47][2].innerHTML = "CD -0.7";
			tableRows[47][5].innerHTML = 2500;
			
			tableRows[48][2].innerHTML = "POW +60/CP -8/CD -1";
			tableRows[48][5].innerHTML = 4000;
			
			tableRows[49][2].innerHTML = "POW +3%";
			tableRows[49][5].innerHTML = 5000;
			
			tableRows[50][2].innerHTML = "CP -3%";
			tableRows[50][5].innerHTML = 6000;
			
			tableRows[51][2].innerHTML = "CD -1.2";
			tableRows[51][5].innerHTML = 4000;
			
			tableRows[52][2].innerHTML = "POW +80/CP -12";
			tableRows[52][5].innerHTML = 6000;
			
			tableRows[53][2].innerHTML = "POW +90/CP -12/CD -1.2";
			tableRows[53][5].innerHTML = 7000;
			
			tableRows[54][2].innerHTML = "POW +6%";
			tableRows[54][5].innerHTML = 10000;
			
			tableRows[55][2].innerHTML = "CP -6%";
			tableRows[55][5].innerHTML = 10000;
			
			tableRows[56][2].innerHTML = "POW +70/CD -1.8";
			tableRows[56][5].innerHTML = 7000;
			
			tableRows[57][2].innerHTML = "POW +90";
			tableRows[57][5].innerHTML = 8500;
			
			tableRows[58][2].innerHTML = "POW +50";
			tableRows[58][5].innerHTML = 3000;
			
			tableRows[59][2].innerHTML = "CP -4";
			tableRows[59][5].innerHTML = 2500;
			
			tableRows[60][2].innerHTML = "CD -0.7";
			tableRows[60][5].innerHTML = 2500;
			
			tableRows[61][2].innerHTML = "POW +60/CP -8/CD -1";
			tableRows[61][5].innerHTML = 4000;
			
			tableRows[62][2].innerHTML = "POW +3%";
			tableRows[62][5].innerHTML = 5000;
			
			tableRows[63][2].innerHTML = "CP -3%";
			tableRows[63][5].innerHTML = 6000;
			
			tableRows[64][2].innerHTML = "CD -1.2";
			tableRows[64][5].innerHTML = 4000;
			
			tableRows[65][2].innerHTML = "POW +80/CP -12";
			tableRows[65][5].innerHTML = 6000;
			
			tableRows[66][2].innerHTML = "POW +90/CP -12/CD -1.2";
			tableRows[66][5].innerHTML = 7000;
			
			tableRows[67][2].innerHTML = "POW +6%";
			tableRows[67][5].innerHTML = 10000;
			
			tableRows[68][2].innerHTML = "CP -6%";
			tableRows[68][5].innerHTML = 10000;
			
			tableRows[69][2].innerHTML = "POW +70/CD -1.8";
			tableRows[69][5].innerHTML = 7000;
			
			tableRows[70][2].innerHTML = "POW +90";
			tableRows[70][5].innerHTML = 8500;
			
			tableRows[71][1].innerHTML = 0;
			
			 for (i=2;i<71;i++){
				 if(i<21 || (i>21 && i<26) || (i>28 && i<33) || (i>37 && i<41)){
					 tableRows[71][1].innerHTML = eval("parseInt(tableRows[71][1].innerHTML) + parseInt(tableRows[i][4].innerHTML)");
				 }
				 if(i === 21 || (i>25 && i<29) || (i>32 && i<38) || (i>40)){
					 tableRows[71][1].innerHTML = eval("parseInt(tableRows[71][1].innerHTML) + parseInt(tableRows[i][5].innerHTML)");
				 }
			 }
			
			break;
	}
}