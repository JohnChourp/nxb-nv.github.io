function abilityList () {
	let tableRows = [ [] ] , i;
	tableRows[0] = document.getElementById ( "abilityListTable" ).rows[0].cells;
	tableRows[1] = document.getElementById ( "abilityListTable" ).rows[1].cells;
	
	switch ( tableRows[0][2].innerHTML ) {
		case "69":
			for ( i = 2; i < 71; i ++ ) {
				tableRows[i] = document.getElementById ( "abilityListTable" ).rows[i].cells;
			}
			
			for ( i = 0; i < 69; i ++ ) {
				document.getElementsByClassName ( "abilityPoints" ).item ( i ).src = "https://lh3.googleusercontent.com/pkaGH5QJyR0OerBecH4eYv3ZR4AeAdVThepkfPMMCzvIPk3GhwV9Ey9BUCf4Ca2lgI_bWGw82SNzayzNArjzAUkytFFgKyAl-e0ogPgsgl__9JtweOYhr_9ACqsVKF3pkLf9uxnUjQ=w1920-h1080";
			}
			
			for ( i = 0; i < 30; i ++ ) {
				document.getElementsByClassName ( "increasePower" ).item ( i ).src = "https://lh3.googleusercontent.com/rRLz0dS5SPcbCMjjPKR0knr4vGXcVBC_5BSQhh2dCwCcbnctqKHWp2PSfy6An-7Vcw4XyFcICqcYlKeeQoyPr3NiyRiAw6bOxkTt2bouYmefHNUYy_nEFB0bvVGkJnx8FbIw-lG3nQ=w1920-h1080";
			}
			
			for ( i = 0; i < 39; i ++ ) {
				document.getElementsByClassName ( "increaseUltimatePower" ).item ( i ).src = "https://lh3.googleusercontent.com/cBHO4JCxyfpAKvYvPAAWcNL7jVI_Kz7ijBLo_jMYTG_mrrlzxlO8eW6zQvwbGfrlrK--ucfPnTkkKklFfMpi19kAVBAj2mEZeT1Ofd0KCFs-jbuQISkSgPjJsn_QkyKQ3rw4NaX8nA=w1920-h1080";
			}
			
			tableRows[2][0].innerHTML = "1";
			tableRows[2][1].innerHTML = "+10 HP";
			tableRows[2][3].innerHTML = "30";
			
			tableRows[3][1].innerHTML = "+10 ATK";
			tableRows[3][3].innerHTML = "30";
			
			tableRows[4][1].innerHTML = "+15 DEF";
			tableRows[4][3].innerHTML = "60";
			
			tableRows[5][1].innerHTML = "+10 CP";
			tableRows[5][3].innerHTML = "60";
			
			tableRows[6][1].innerHTML = "+10 ATK/+5 CP";
			tableRows[6][3].innerHTML = "60";
			
			tableRows[7][1].innerHTML = "+20 HP/+20 ATK";
			tableRows[7][3].innerHTML = "400";
			
			tableRows[8][1].innerHTML = "+30 ATK";
			tableRows[8][3].innerHTML = "400";
			
			tableRows[9][1].innerHTML = "+30 HP/+50 DEF";
			tableRows[9][3].innerHTML = "1200";
			
			tableRows[10][0].innerHTML = "2";
			tableRows[10][1].innerHTML = "+20 CP";
			tableRows[10][3].innerHTML = "400";
			
			tableRows[11][1].innerHTML = "+5 CP/+30 ATK";
			tableRows[11][3].innerHTML = "400";
			
			tableRows[12][1].innerHTML = "+10 HP/+10 ATK/+15 DEF/+5 CP";
			tableRows[12][3].innerHTML = "400";
			
			tableRows[13][1].innerHTML = "+40 HP/+30 ATK";
			tableRows[13][3].innerHTML = "1200";
			
			tableRows[14][1].innerHTML = "+50 ATK/+15 DEF";
			tableRows[14][3].innerHTML = "1200";
			
			tableRows[15][1].innerHTML = "+50 HP/+1% ATK";
			tableRows[15][3].innerHTML = "1600";
			
			tableRows[16][1].innerHTML = "+80 ATK/+12% CRI";
			tableRows[16][3].innerHTML = "2000";
			
			tableRows[17][0].innerHTML = "3";
			tableRows[17][1].innerHTML = "+80 ATK/+10 CP";
			tableRows[17][3].innerHTML = "1600";
			
			tableRows[18][1].innerHTML = "+15% CRI/+10% EVA";
			tableRows[18][3].innerHTML = "2000";
			
			tableRows[19][1].innerHTML = "+100 ATK/+100 HP";
			tableRows[19][3].innerHTML = "4000";
			
			tableRows[20][1].innerHTML = "+500 ATK/+15 CP/+10% CRI";
			tableRows[20][3].innerHTML = "5000";
			
			tableRows[21][1].innerHTML = "POW +50/+40 HP/+2% ATK";
			tableRows[21][4].innerHTML = "4000";
			
			tableRows[22][0].innerHTML = "4";
			tableRows[22][1].innerHTML = "+50 HP/+50 ATK";
			tableRows[22][3].innerHTML = "2000";
			
			tableRows[23][1].innerHTML = "+5% ATK";
			tableRows[23][3].innerHTML = "4000";
			
			tableRows[24][1].innerHTML = "+80 HP/+80 ATK/+90 DEF";
			tableRows[24][3].innerHTML = "5000";
			
			tableRows[25][1].innerHTML = "+3% ATK/+70 DEF/+20% CRI/+12% EVA";
			tableRows[25][3].innerHTML = "7000";
			
			tableRows[26][1].innerHTML = "CP -4/+100 ATK/+90 DEF/+15 CP";
			tableRows[26][4].innerHTML = "4000";
			
			tableRows[27][1].innerHTML = "CD -0.7/+80 HP/+200 ATK";
			tableRows[27][4].innerHTML = "4000";
			
			tableRows[28][1].innerHTML = "POW +60/CP -8/CD -1";
			tableRows[28][4].innerHTML = "4000";
			
			tableRows[29][0].innerHTML = "5";
			tableRows[29][1].innerHTML = "+100 ATK/+90 DEF/+80 CP";
			tableRows[29][3].innerHTML = "5000";
			
			tableRows[30][1].innerHTML = "+500 HP/+500 ATK";
			tableRows[30][3].innerHTML = "7000";
			
			tableRows[31][1].innerHTML = "+4% HP/+300 ATK";
			tableRows[31][3].innerHTML = "8000";
			
			tableRows[32][1].innerHTML = "+9% ATK";
			tableRows[32][3].innerHTML = "10000";
			
			tableRows[33][1].innerHTML = "POW +3%/+50 HP/+200 ATK";
			tableRows[33][4].innerHTML = "7000";
			
			tableRows[34][1].innerHTML = "CP -3%/+100 HP/+90 DEF";
			tableRows[34][4].innerHTML = "7000";
			
			tableRows[35][1].innerHTML = "CD -1.2/+100 ATK/+90 DEF/+30 CP";
			tableRows[35][4].innerHTML = "7000";
			
			tableRows[36][1].innerHTML = "POW +80/CP -12/+100 ATK";
			tableRows[36][4].innerHTML = "7000";
			
			tableRows[37][1].innerHTML = "POW +90/CP -12/CD -1.2";
			tableRows[37][4].innerHTML = "7000";
			
			tableRows[38][0].innerHTML = "6";
			tableRows[38][1].innerHTML = "+300 HP/+100 ATK/+90 DEF/+30 CP";
			tableRows[38][3].innerHTML = "8000";
			
			tableRows[39][1].innerHTML = "+100 HP/+1000 ATK/+200 DEF";
			tableRows[39][3].innerHTML = "10000";
			
			tableRows[40][1].innerHTML = "+4% HP/+800 ATK/+70 DEF/+10 CP";
			tableRows[40][3].innerHTML = "10000";
			
			tableRows[41][1].innerHTML = "POW +6%";
			tableRows[41][4].innerHTML = "10000";
			
			tableRows[42][1].innerHTML = "CP -6%";
			tableRows[42][4].innerHTML = "10000";
			
			tableRows[43][1].innerHTML = "POW +70/CD -1.8/+100 HP/+200 ATK";
			tableRows[43][4].innerHTML = "10000";
			
			tableRows[44][1].innerHTML = "POW +90/+6% ATK";
			tableRows[44][4].innerHTML = "10000";
			
			tableRows[45][1].innerHTML = "POW +50";
			tableRows[45][4].innerHTML = "3000";
			
			tableRows[46][1].innerHTML = "CP -4";
			tableRows[46][4].innerHTML = "2500";
			
			tableRows[47][1].innerHTML = "CD -0.7";
			tableRows[47][4].innerHTML = "2500";
			
			tableRows[48][1].innerHTML = "POW +60/CP -8/CD -1";
			tableRows[48][4].innerHTML = "4000";
			
			tableRows[49][1].innerHTML = "POW +3%";
			tableRows[49][4].innerHTML = "5000";
			
			tableRows[50][1].innerHTML = "CP -3%";
			tableRows[50][4].innerHTML = "6000";
			
			tableRows[51][1].innerHTML = "CD -1.2";
			tableRows[51][4].innerHTML = "4000";
			
			tableRows[52][1].innerHTML = "POW +80/CP -12";
			tableRows[52][4].innerHTML = "6000";
			
			tableRows[53][1].innerHTML = "POW +90/CP -12/CD -1.2";
			tableRows[53][4].innerHTML = "7000";
			
			tableRows[54][1].innerHTML = "POW +6%";
			tableRows[54][4].innerHTML = "10000";
			
			tableRows[55][1].innerHTML = "CP -6%";
			tableRows[55][4].innerHTML = "10000";
			
			tableRows[56][1].innerHTML = "POW +70/CD -1.8";
			tableRows[56][4].innerHTML = "7000";
			
			tableRows[57][1].innerHTML = "POW +90";
			tableRows[57][4].innerHTML = "8500";
			
			tableRows[58][1].innerHTML = "POW +50";
			tableRows[58][4].innerHTML = "3000";
			
			tableRows[59][1].innerHTML = "CP -4";
			tableRows[59][4].innerHTML = "2500";
			
			tableRows[60][1].innerHTML = "CD -0.7";
			tableRows[60][4].innerHTML = "2500";
			
			tableRows[61][1].innerHTML = "POW +60/CP -8/CD -1";
			tableRows[61][4].innerHTML = "4000";
			
			tableRows[62][1].innerHTML = "POW +3%";
			tableRows[62][4].innerHTML = "5000";
			
			tableRows[63][1].innerHTML = "CP -3%";
			tableRows[63][4].innerHTML = "6000";
			
			tableRows[64][1].innerHTML = "CD -1.2";
			tableRows[64][4].innerHTML = "4000";
			
			tableRows[65][1].innerHTML = "POW +80/CP -12";
			tableRows[65][4].innerHTML = "6000";
			
			tableRows[66][1].innerHTML = "POW +90/CP -12/CD -1.2";
			tableRows[66][4].innerHTML = "7000";
			
			tableRows[67][1].innerHTML = "POW +6%";
			tableRows[67][4].innerHTML = "10000";
			
			tableRows[68][1].innerHTML = "CP -6%";
			tableRows[68][4].innerHTML = "10000";
			
			tableRows[69][1].innerHTML = "POW +70/CD -1.8";
			tableRows[69][4].innerHTML = "7000";
			
			tableRows[70][1].innerHTML = "POW +90";
			tableRows[70][4].innerHTML = "8500";
			break;
	}
}