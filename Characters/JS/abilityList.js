function abilityList() {
	let rows=[[]];
	
	switch ( document.getElementById("abilitiesNumber").innerHTML ) {
		case "69":
			for(let i=0;i<69;i++){
				rows[i] = document.getElementById ( "abilityListTable" ).rows[ 2+i ].cells;
			}
			
			for (let i = 0;i<69;i++){
				document.getElementsByClassName("abilityPoints").item(i).src = "https://lh3.googleusercontent.com/pkaGH5QJyR0OerBecH4eYv3ZR4AeAdVThepkfPMMCzvIPk3GhwV9Ey9BUCf4Ca2lgI_bWGw82SNzayzNArjzAUkytFFgKyAl-e0ogPgsgl__9JtweOYhr_9ACqsVKF3pkLf9uxnUjQ=w1920-h1080";
			}
			
			for (let i = 0;i<30;i++){
				document.getElementsByClassName("increasePower").item(i).src = "https://lh3.googleusercontent.com/rRLz0dS5SPcbCMjjPKR0knr4vGXcVBC_5BSQhh2dCwCcbnctqKHWp2PSfy6An-7Vcw4XyFcICqcYlKeeQoyPr3NiyRiAw6bOxkTt2bouYmefHNUYy_nEFB0bvVGkJnx8FbIw-lG3nQ=w1920-h1080";
			}
			
			for (let i = 0;i<39;i++){
				document.getElementsByClassName("increaseUltimatePower").item(i).src = "https://lh3.googleusercontent.com/cBHO4JCxyfpAKvYvPAAWcNL7jVI_Kz7ijBLo_jMYTG_mrrlzxlO8eW6zQvwbGfrlrK--ucfPnTkkKklFfMpi19kAVBAj2mEZeT1Ofd0KCFs-jbuQISkSgPjJsn_QkyKQ3rw4NaX8nA=w1920-h1080";
			}
			
			rows[0][0].innerHTML = "1";
			rows[0][1].innerHTML = "+10 HP";
			rows[0][3].innerHTML = "30";
			
			rows[1][1].innerHTML = "+10 ATK";
			rows[1][3].innerHTML = "30";
			
			rows[2][1].innerHTML = "+15 DEF";
			rows[2][3].innerHTML = "60";
			
			rows[3][1].innerHTML = "+10 CP";
			rows[3][3].innerHTML = "60";
			
			rows[4][1].innerHTML = "+10 ATK/+5 CP";
			rows[4][3].innerHTML = "60";
			
			rows[5][1].innerHTML = "+20 HP/+20 ATK";
			rows[5][3].innerHTML = "400";
			
			rows[6][1].innerHTML = "+30 ATK";
			rows[6][3].innerHTML = "400";
			
			rows[7][1].innerHTML = "+30 HP/+50 DEF";
			rows[7][3].innerHTML = "1200";
			
			rows[8][0].innerHTML = "2";
			rows[8][1].innerHTML = "+20 CP";
			rows[8][3].innerHTML = "400";
			
			rows[9][1].innerHTML = "+5 CP/+30 ATK";
			rows[9][3].innerHTML = "400";
			
			rows[10][1].innerHTML = "+10 HP/+10 ATK/+15 DEF/+5 CP";
			rows[10][3].innerHTML = "400";
			
			rows[11][1].innerHTML = "+40 HP/+30 ATK";
			rows[11][3].innerHTML = "1200";
			
			rows[12][1].innerHTML = "+50 ATK/+15 DEF";
			rows[12][3].innerHTML = "1200";
			
			rows[13][1].innerHTML = "+50 HP/+1% ATK";
			rows[13][3].innerHTML = "1600";
			
			rows[14][1].innerHTML = "+80 ATK/+12% CRI";
			rows[14][3].innerHTML = "2000";
			
			rows[15][0].innerHTML = "3";
			rows[15][1].innerHTML = "+80 ATK/+10 CP";
			rows[15][3].innerHTML = "1600";
			
			rows[16][1].innerHTML = "+15% CRI/+10% EVA";
			rows[16][3].innerHTML = "2000";
			
			rows[17][1].innerHTML = "+100 ATK/+100 HP";
			rows[17][3].innerHTML = "4000";
			
			rows[18][1].innerHTML = "+500 ATK/+15 CP/+10% CRI";
			rows[18][3].innerHTML = "5000";
			
			rows[19][1].innerHTML = "POW +50/+40 HP/+2% ATK";
			rows[19][4].innerHTML = "4000";
			
			rows[20][0].innerHTML = "4";
			rows[20][1].innerHTML = "+50 HP/+50 ATK";
			rows[20][3].innerHTML = "2000";
			
			rows[21][1].innerHTML = "+5% ATK";
			rows[21][3].innerHTML = "4000";
			
			rows[22][1].innerHTML = "+80 HP/+80 ATK/+90 DEF";
			rows[22][3].innerHTML = "5000";
			
			rows[23][1].innerHTML = "+3% ATK/+70 DEF/+20% CRI/+12% EVA";
			rows[23][3].innerHTML = "7000";
			
			rows[24][1].innerHTML = "CP -4/+100 ATK/+90 DEF/+15 CP";
			rows[24][4].innerHTML = "4000";
			
			rows[25][1].innerHTML = "CD -0.7/+80 HP/+200 ATK";
			rows[25][4].innerHTML = "4000";
			
			rows[26][1].innerHTML = "POW +60, CP -8, CD -1";
			rows[26][4].innerHTML = "4000";
			
			rows[27][0].innerHTML = "5";
			rows[27][1].innerHTML = "+100 ATK/+90 DEF/+80 CP";
			rows[27][3].innerHTML = "5000";
			
			rows[28][1].innerHTML = "+500 HP/+500 ATK";
			rows[28][3].innerHTML = "7000";
			
			rows[29][1].innerHTML = "+4% HP/+300 ATK";
			rows[29][3].innerHTML = "8000";
			
			rows[30][1].innerHTML = "+9% ATK";
			rows[30][3].innerHTML = "10000";
			
			rows[31][1].innerHTML = "POW +3%/+50 HP/+200 ATK";
			rows[31][4].innerHTML = "7000";
			
			rows[32][1].innerHTML = "CP -3%/+100 HP/+90 DEF";
			rows[32][4].innerHTML = "7000";
			
			rows[33][1].innerHTML = "CD -1.2/+100 ATK/+90 DEF/+30 CP";
			rows[33][4].innerHTML = "7000";
			
			rows[34][1].innerHTML = "POW +80/CP -12/+100 ATK";
			rows[34][4].innerHTML = "7000";
			
			rows[35][1].innerHTML = "POW +90/CP -12/CD -1.2";
			rows[35][4].innerHTML = "7000";
			
			rows[36][0].innerHTML = "6";
			rows[36][1].innerHTML = "+300 HP/+100 ATK/+90 DEF/+30 CP";
			rows[36][3].innerHTML = "8000";
			
			rows[37][1].innerHTML = "+100 HP/+1000 ATK/+200 DEF";
			rows[37][3].innerHTML = "10000";
			
			rows[38][1].innerHTML = "+4% HP/+800 ATK/+70 DEF/+10 CP";
			rows[38][3].innerHTML = "10000";
			
			rows[39][1].innerHTML = "POW +6%";
			rows[39][4].innerHTML = "10000";
			
			rows[40][1].innerHTML = "CP -6%";
			rows[40][4].innerHTML = "10000";
			
			rows[41][1].innerHTML = "POW +70/CD -1.8/+100 HP/+200 ATK";
			rows[41][4].innerHTML = "10000";
			
			rows[42][1].innerHTML = "POW +90/+6% ATK";
			rows[42][4].innerHTML = "10000";
			
			rows[43][1].innerHTML = "POW +50";
			rows[43][4].innerHTML = "3000";
			
			rows[44][1].innerHTML = "CP -4";
			rows[44][4].innerHTML = "2500";
			
			rows[45][1].innerHTML = "CD -0.7";
			rows[45][4].innerHTML = "2500";
			
			rows[46][1].innerHTML = "POW +60/CP -8/CD -1";
			rows[46][4].innerHTML = "4000";
			
			rows[47][1].innerHTML = "POW +3%";
			rows[47][4].innerHTML = "5000";
			
			rows[48][1].innerHTML = "CP -3%";
			rows[48][4].innerHTML = "6000";
			
			rows[49][1].innerHTML = "CD -1.2";
			rows[49][4].innerHTML = "4000";
			
			rows[50][1].innerHTML = "POW +80, CP -12";
			rows[50][4].innerHTML = "6000";
			
			rows[51][1].innerHTML = "POW +90, CP -12, CD -1.2";
			rows[51][4].innerHTML = "7000";
			
			rows[52][1].innerHTML = "POW +6%";
			rows[52][4].innerHTML = "10000";
			
			rows[53][1].innerHTML = "CP -6%";
			rows[53][4].innerHTML = "10000";
			
			rows[54][1].innerHTML = "POW +70, CD -1.8";
			rows[54][4].innerHTML = "7000";
			
			rows[55][1].innerHTML = "POW +90";
			rows[55][4].innerHTML = "8500";
			
			rows[56][1].innerHTML = "POW +50";
			rows[56][4].innerHTML = "3000";
			
			rows[57][1].innerHTML = "CP -4";
			rows[57][4].innerHTML = "2500";
			
			rows[58][1].innerHTML = "CD -0.7";
			rows[58][4].innerHTML = "2500";
			
			rows[59][1].innerHTML = "POW +60/CP -8/CD -1";
			rows[59][4].innerHTML = "4000";
			
			rows[60][1].innerHTML = "POW +3%";
			rows[60][4].innerHTML = "5000";
			
			rows[61][1].innerHTML = "CP -3%";
			rows[61][4].innerHTML = "6000";
			
			rows[62][1].innerHTML = "CD -1.2";
			rows[62][4].innerHTML = "4000";
			
			rows[63][1].innerHTML = "POW +80, CP -12";
			rows[63][4].innerHTML = "6000";
			
			rows[64][1].innerHTML = "POW +90, CP -12, CD -1.2";
			rows[64][4].innerHTML = "7000";
			
			rows[65][1].innerHTML = "POW +6%";
			rows[65][4].innerHTML = "10000";
			
			rows[66][1].innerHTML = "CP -6%";
			rows[66][4].innerHTML = "10000";
			
			rows[67][1].innerHTML = "POW +70, CD -1.8";
			rows[67][4].innerHTML = "7000";
			
			rows[68][1].innerHTML = "POW +90";
			rows[68][4].innerHTML = "8500";
			break;
	}
}