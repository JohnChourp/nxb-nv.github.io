function abilityListTable(){
	let abilityListTableRows = [[]] , i;
	abilityListTableRows[0] = document.getElementById("abilityListTable").rows[0].cells;
	abilityListTableRows[1] = document.getElementById("abilityListTable").rows[1].cells;
	
	switch(abilityListTableRows[1][1].innerHTML){
		case "69":
			for(i = 3; i < 80; i ++){
				abilityListTableRows[i] = document.getElementById("abilityListTable").rows[i].cells;
			}
			
			for(i = 3; i < 72; i ++){
				abilityListTableRows[i][0].innerHTML = i - 2;
			}
			
			for(i = 0; i < 70; i ++){
				document.getElementsByClassName("abilityPoints").item(i).src = "https://lh3.googleusercontent.com/pkaGH5QJyR0OerBecH4eYv3ZR4AeAdVThepkfPMMCzvIPk3GhwV9Ey9BUCf4Ca2lgI_bWGw82SNzayzNArjzAUkytFFgKyAl-e0ogPgsgl__9JtweOYhr_9ACqsVKF3pkLf9uxnUjQ=w1920-h1080";
			}
			
			for(i = 0; i < 30; i ++){
				document.getElementsByClassName("increasePower").item(i).src = "https://lh3.googleusercontent.com/rRLz0dS5SPcbCMjjPKR0knr4vGXcVBC_5BSQhh2dCwCcbnctqKHWp2PSfy6An-7Vcw4XyFcICqcYlKeeQoyPr3NiyRiAw6bOxkTt2bouYmefHNUYy_nEFB0bvVGkJnx8FbIw-lG3nQ=w1920-h1080";
			}
			
			for(i = 0; i < 39; i ++){
				document.getElementsByClassName("increaseUltimatePower").item(i).src = "https://lh3.googleusercontent.com/cBHO4JCxyfpAKvYvPAAWcNL7jVI_Kz7ijBLo_jMYTG_mrrlzxlO8eW6zQvwbGfrlrK--ucfPnTkkKklFfMpi19kAVBAj2mEZeT1Ofd0KCFs-jbuQISkSgPjJsn_QkyKQ3rw4NaX8nA=w1920-h1080";
			}
			
			abilityListTableRows[3][1].innerHTML = "1";
			abilityListTableRows[3][2].innerHTML = "+10 HP";
			abilityListTableRows[3][4].innerHTML = 30;
			
			abilityListTableRows[4][2].innerHTML = "+10 ATK";
			abilityListTableRows[4][4].innerHTML = 30;
			
			abilityListTableRows[5][2].innerHTML = "+15 DEF";
			abilityListTableRows[5][4].innerHTML = 60;
			
			abilityListTableRows[6][2].innerHTML = "+10 CP";
			abilityListTableRows[6][4].innerHTML = 60;
			
			abilityListTableRows[7][2].innerHTML = "+10 ATK/+5 CP";
			abilityListTableRows[7][4].innerHTML = 60;
			
			abilityListTableRows[8][2].innerHTML = "+20 HP/+20 ATK";
			abilityListTableRows[8][4].innerHTML = 400;
			
			abilityListTableRows[9][2].innerHTML = "+30 ATK";
			abilityListTableRows[9][4].innerHTML = 400;
			
			abilityListTableRows[10][2].innerHTML = "+30 HP/+50 DEF";
			abilityListTableRows[10][4].innerHTML = 1200;
			
			abilityListTableRows[11][1].innerHTML = "2";
			abilityListTableRows[11][2].innerHTML = "+20 CP";
			abilityListTableRows[11][4].innerHTML = 400;
			
			abilityListTableRows[12][2].innerHTML = "+5 CP/+30 ATK";
			abilityListTableRows[12][4].innerHTML = 400;
			
			abilityListTableRows[13][2].innerHTML = "+10 HP/+10 ATK/+15 DEF/+5 CP";
			abilityListTableRows[13][4].innerHTML = 400;
			
			abilityListTableRows[14][2].innerHTML = "+40 HP/+30 ATK";
			abilityListTableRows[14][4].innerHTML = 1200;
			
			abilityListTableRows[15][2].innerHTML = "+50 ATK/+15 DEF";
			abilityListTableRows[15][4].innerHTML = 1200;
			
			abilityListTableRows[16][2].innerHTML = "+50 HP/+1% ATK";
			abilityListTableRows[16][4].innerHTML = 1600;
			
			abilityListTableRows[17][2].innerHTML = "+80 ATK/+12% CRI";
			abilityListTableRows[17][4].innerHTML = 2000;
			
			abilityListTableRows[18][1].innerHTML = "3";
			abilityListTableRows[18][2].innerHTML = "+80 ATK/+10 CP";
			abilityListTableRows[18][4].innerHTML = 1600;
			
			abilityListTableRows[19][2].innerHTML = "+15% CRI/+10% EVA";
			abilityListTableRows[19][4].innerHTML = 2000;
			
			abilityListTableRows[20][2].innerHTML = "+100 HP/+100 ATK";
			abilityListTableRows[20][4].innerHTML = 4000;
			
			abilityListTableRows[21][2].innerHTML = "+500 ATK/+15 CP/+10% CRI";
			abilityListTableRows[21][4].innerHTML = 5000;
			
			abilityListTableRows[22][2].innerHTML = "POW +50/+40 HP/+2% ATK";
			abilityListTableRows[22][5].innerHTML = 4000;
			
			abilityListTableRows[23][1].innerHTML = "4";
			abilityListTableRows[23][2].innerHTML = "+50 HP/+50 ATK";
			abilityListTableRows[23][4].innerHTML = 2000;
			
			abilityListTableRows[24][2].innerHTML = "+5% ATK";
			abilityListTableRows[24][4].innerHTML = 4000;
			
			abilityListTableRows[25][2].innerHTML = "+80 HP/+80 ATK/+90 DEF";
			abilityListTableRows[25][4].innerHTML = 5000;
			
			abilityListTableRows[26][2].innerHTML = "+3% ATK/+70 DEF/+20% CRI/+12% EVA";
			abilityListTableRows[26][4].innerHTML = 7000;
			
			abilityListTableRows[27][2].innerHTML = "CP -4/+100 ATK/+90 DEF/+15 CP";
			abilityListTableRows[27][5].innerHTML = 4000;
			
			abilityListTableRows[28][2].innerHTML = "CD -0.7/+80 HP/+200 ATK";
			abilityListTableRows[28][5].innerHTML = 4000;
			
			abilityListTableRows[29][2].innerHTML = "POW +60/CP -8/CD -1";
			abilityListTableRows[29][5].innerHTML = 4000;
			
			abilityListTableRows[30][1].innerHTML = "5";
			abilityListTableRows[30][2].innerHTML = "+100 ATK/+90 DEF/+80 CP";
			abilityListTableRows[30][4].innerHTML = 5000;
			
			abilityListTableRows[31][2].innerHTML = "+500 HP/+500 ATK";
			abilityListTableRows[31][4].innerHTML = 7000;
			
			abilityListTableRows[32][2].innerHTML = "+4% HP/+300 ATK";
			abilityListTableRows[32][4].innerHTML = 8000;
			
			abilityListTableRows[33][2].innerHTML = "+9% ATK";
			abilityListTableRows[33][4].innerHTML = 10000;
			
			abilityListTableRows[34][2].innerHTML = "POW +3%/+50 HP/+200 ATK";
			abilityListTableRows[34][5].innerHTML = 7000;
			
			abilityListTableRows[35][2].innerHTML = "CP -3%/+100 HP/+90 DEF";
			abilityListTableRows[35][5].innerHTML = 7000;
			
			abilityListTableRows[36][2].innerHTML = "CD -1.2/+100 ATK/+90 DEF/+30 CP";
			abilityListTableRows[36][5].innerHTML = 7000;
			
			abilityListTableRows[37][2].innerHTML = "POW +80/CP -12/+100 ATK";
			abilityListTableRows[37][5].innerHTML = 7000;
			
			abilityListTableRows[38][2].innerHTML = "POW +90/CP -12/CD -1.2";
			abilityListTableRows[38][5].innerHTML = 7000;
			
			abilityListTableRows[39][1].innerHTML = "6";
			abilityListTableRows[39][2].innerHTML = "+300 HP/+100 ATK/+90 DEF/+30 CP";
			abilityListTableRows[39][4].innerHTML = 8000;
			
			abilityListTableRows[40][2].innerHTML = "+100 HP/+1000 ATK/+200 DEF";
			abilityListTableRows[40][4].innerHTML = 10000;
			
			abilityListTableRows[41][2].innerHTML = "+4% HP/+800 ATK/+70 DEF/+10 CP";
			abilityListTableRows[41][4].innerHTML = 10000;
			
			abilityListTableRows[42][2].innerHTML = "POW +6%";
			abilityListTableRows[42][5].innerHTML = 10000;
			
			abilityListTableRows[43][2].innerHTML = "CP -6%";
			abilityListTableRows[43][5].innerHTML = 10000;
			
			abilityListTableRows[44][2].innerHTML = "POW +70/CD -1.8/+100 HP/+200 ATK";
			abilityListTableRows[44][5].innerHTML = 10000;
			
			abilityListTableRows[45][2].innerHTML = "POW +90/+6% ATK";
			abilityListTableRows[45][5].innerHTML = 10000;
			
			abilityListTableRows[46][2].innerHTML = "POW +50";
			abilityListTableRows[46][5].innerHTML = 3000;
			
			abilityListTableRows[47][2].innerHTML = "CP -4";
			abilityListTableRows[47][5].innerHTML = 2500;
			
			abilityListTableRows[48][2].innerHTML = "CD -0.7";
			abilityListTableRows[48][5].innerHTML = 2500;
			
			abilityListTableRows[49][2].innerHTML = "POW +60/CP -8/CD -1";
			abilityListTableRows[49][5].innerHTML = 4000;
			
			abilityListTableRows[50][2].innerHTML = "POW +3%";
			abilityListTableRows[50][5].innerHTML = 5000;
			
			abilityListTableRows[51][2].innerHTML = "CP -3%";
			abilityListTableRows[51][5].innerHTML = 6000;
			
			abilityListTableRows[52][2].innerHTML = "CD -1.2";
			abilityListTableRows[52][5].innerHTML = 4000;
			
			abilityListTableRows[53][2].innerHTML = "POW +80/CP -12";
			abilityListTableRows[53][5].innerHTML = 6000;
			
			abilityListTableRows[54][2].innerHTML = "POW +90/CP -12/CD -1.2";
			abilityListTableRows[54][5].innerHTML = 7000;
			
			abilityListTableRows[55][2].innerHTML = "POW +6%";
			abilityListTableRows[55][5].innerHTML = 10000;
			
			abilityListTableRows[56][2].innerHTML = "CP -6%";
			abilityListTableRows[56][5].innerHTML = 10000;
			
			abilityListTableRows[57][2].innerHTML = "POW +70/CD -1.8";
			abilityListTableRows[57][5].innerHTML = 7000;
			
			abilityListTableRows[58][2].innerHTML = "POW +90";
			abilityListTableRows[58][5].innerHTML = 8500;
			
			abilityListTableRows[59][2].innerHTML = "POW +50";
			abilityListTableRows[59][5].innerHTML = 3000;
			
			abilityListTableRows[60][2].innerHTML = "CP -4";
			abilityListTableRows[60][5].innerHTML = 2500;
			
			abilityListTableRows[61][2].innerHTML = "CD -0.7";
			abilityListTableRows[61][5].innerHTML = 2500;
			
			abilityListTableRows[62][2].innerHTML = "POW +60/CP -8/CD -1";
			abilityListTableRows[62][5].innerHTML = 4000;
			
			abilityListTableRows[63][2].innerHTML = "POW +3%";
			abilityListTableRows[63][5].innerHTML = 5000;
			
			abilityListTableRows[64][2].innerHTML = "CP -3%";
			abilityListTableRows[64][5].innerHTML = 6000;
			
			abilityListTableRows[65][2].innerHTML = "CD -1.2";
			abilityListTableRows[65][5].innerHTML = 4000;
			
			abilityListTableRows[66][2].innerHTML = "POW +80/CP -12";
			abilityListTableRows[66][5].innerHTML = 6000;
			
			abilityListTableRows[67][2].innerHTML = "POW +90/CP -12/CD -1.2";
			abilityListTableRows[67][5].innerHTML = 7000;
			
			abilityListTableRows[68][2].innerHTML = "POW +6%";
			abilityListTableRows[68][5].innerHTML = 10000;
			
			abilityListTableRows[69][2].innerHTML = "CP -6%";
			abilityListTableRows[69][5].innerHTML = 10000;
			
			abilityListTableRows[70][2].innerHTML = "POW +70/CD -1.8";
			abilityListTableRows[70][5].innerHTML = 7000;
			
			abilityListTableRows[71][2].innerHTML = "POW +90";
			abilityListTableRows[71][5].innerHTML = 8500;
			
			abilityListTableRows[72][1].innerHTML = 0;
			
			for(i = 3; i < 72; i ++){
				if(i < 22 || (i > 22 && i < 27) || (i > 29 && i < 34) || (i > 38 && i < 42)){
					abilityListTableRows[72][1].innerHTML = eval("parseInt(abilityListTableRows[72][1].innerHTML) + parseInt(abilityListTableRows[i][4].innerHTML)");
				}
				if(i === 22 || (i > 26 && i < 30) || (i > 33 && i < 39) || (i > 41)){
					abilityListTableRows[72][1].innerHTML = eval("parseInt(abilityListTableRows[72][1].innerHTML) + parseInt(abilityListTableRows[i][5].innerHTML)");
				}
			}
			
			abilityListTableRows[74][0].innerHTML = "+1660";
			abilityListTableRows[74][2].innerHTML = "+4780";
			abilityListTableRows[74][4].innerHTML = "+975";
			
			abilityListTableRows[75][0].innerHTML = "+8.00%";
			abilityListTableRows[75][2].innerHTML = "+26.00%";
			abilityListTableRows[75][4].innerHTML = "+235";
			
			abilityListTableRows[76][0].innerHTML = "+57.00%";
			abilityListTableRows[76][2].innerHTML = "+22.00%";
			
			break;
	}
}