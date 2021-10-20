function linkBoardTable(){
	let linkBoardTableRows = [[]] , i;
	
	for(i = 1; i < 138; i ++){
		linkBoardTableRows[i] = document.getElementById("linkBoardTable").rows[i].cells;
		linkBoardTableRows[i][0].innerHTML = i;
	}
	
	for(i = 1; i < 138; i ++){
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
	
	for(i = 0; i < 132; i ++){
		document.getElementsByClassName("linkBoardChakra").item(i).src = "https://lh3.googleusercontent.com/G-BAMQLBMFxzA09MgJmD7KF650eMIbGDnr5DURaAXUGEDRy6tvPhEhNGD4_ufZG-QlmgIJCFmQ3L0gFJ9ZpQ3QRrLaOK_F-SPMFC4GXQj5PC4CtO113S3418MGRYhEEJMxbcWNN62w=w1920-h1080";
	}
	
	for(i = 0; i < 125; i ++){
		document.getElementsByClassName("linkBoardAbilityPoints").item(i).src = "https://lh3.googleusercontent.com/pkaGH5QJyR0OerBecH4eYv3ZR4AeAdVThepkfPMMCzvIPk3GhwV9Ey9BUCf4Ca2lgI_bWGw82SNzayzNArjzAUkytFFgKyAl-e0ogPgsgl__9JtweOYhr_9ACqsVKF3pkLf9uxnUjQ=w1920-h1080";
	}
	
	for(i = 0; i < 118; i ++){
		document.getElementsByClassName("linkBoardRyo").item(i).src = "https://lh3.googleusercontent.com/BJl_cwfBPySnObV0BjX_w2xx32LBuqcKzSwefpm9SqEDc_--d90_iyI31mX-JGKswtwtTLYRNsvcaoNCKSCeSygu1iO5k5p9mngqQItMA30B0ic6Kn1TN0tedsk_pg2630dgFmKnEQ=w1920-h1080";
	}
	
	for(i = 0; i < 111; i ++){
		document.getElementsByClassName("increaseCharStat").item(i).src = "https://lh3.googleusercontent.com/A5z6_L451I2qgM3XClqvKx4F-abkTDybL0qW6UMaqx09LdIjr8iPr9C2vpNTZvga2eoOQwq37Dgo7llIwn72XKAxZacb-HRljfhkpnagEJBiC_pc8wSHYpiTJmFx9lTHB7b2CKyJUA=w1920-h1080";
	}
	
	for(i = 0; i < 4; i ++){
		document.getElementsByClassName("increaseCharStatCharType").item(i).src = "https://lh3.googleusercontent.com/LWOvmPwtPSaP5uU1pvv55YjDt7d54nv_yZ-wygUggVvOLgCXGUMas0C_BHwVNvCBFqVZN77esG2PEBKl1fyQrpTliVFsMB5CCZBgRhm1R8p2AUlt1ZthdFFokLGUf2PSSegutzXO4Q=w1920-h1080";
	}
	
	for(i = 0; i < 9; i ++){
		document.getElementsByClassName("reduceResistancePoison").item(i).src = "https://lh3.googleusercontent.com/sdJkV2XHcZw7wtYfVgza89obyUnNKEn94tFNXGJaYZQ4y7n6YpymCioWvWSRg2jFUVptyY8pMEpXMarhRGT2Zerw2hVdkzRxHTglmrduOG90OWcaHHqueE0i0dv-f86wV01zP68fXQ=w1920-h1080";
	}
	
	for(i = 0; i < 5; i ++){
		document.getElementsByClassName("increaseCharCardsTools").item(i).src = "https://lh3.googleusercontent.com/n5GUOcvrzEyOsZcsEdN1Sr9_F8c5CgrTHRjRxnG05c426eCeMWUVQ4lghQo6AyPTRfYupr3N3MDgyqdrQwJhm6qJm2_vyw-PGl__akKkHBIndA0ZDjjGQbeffrRw1YLAQDkq8rrS4A=w1920-h1080";
	}
	
	for(i = 0; i < 2; i ++){
		document.getElementsByClassName("increaseCharUltimateJutsu").item(i).src = "https://lh3.googleusercontent.com/YSkqV-gY4Pr3ZQJAU91OSo4nIrK-2iOJEYNP4gNVCpgEKUQwv4q7K3FkOWTusb0PPl_2tOWdEolIsrRty3vMJQwsNcYLow4EOdpmB5FBl4VDvdqissxLDm6DspJRBOny_rW4LsxboA=w1920-h1080";
	}
	
	document.getElementsByClassName("gainCharImmunity").item(0).src = "https://lh3.googleusercontent.com/f-X73gpdQLj1LjT04UqQP5orsEeSklj7nDesk8yK5C7f2Tq3ZYiQd9qo7hdLjTepOcK881t5f6xZz8Uiub6B_KSqkpOI-GXEi1gYbdLv-sN25DZg3yXAnewa-2bdooRAsDAiIKI3VA=w1920-h1080";
	
	for(i = 0; i < 2; i ++){
		document.getElementsByClassName("linkBoard5StarAttackGem").item(i).src = "https://lh3.googleusercontent.com/mF65xMho503dM5aqaW1Uk8Zo8MAsejJSiUZKc78ggwFAi6ooMofMem0W9W9oeSEsn7PGeiDMJ2idQr65aXdCCJu7HlHoHNTnZVpB-tN5LDfZPEKFmimARRG4nwSXtPy67y8daPGaeA=w1920-h1080";
	}
	
	for(i = 0; i < 9; i ++){
		document.getElementsByClassName("shinobiAmulet").item(i).src = "https://lh3.googleusercontent.com/AsyE9VSFIoLCSlEAkbulQExe4ZOupW7gqLa0AmLVb-Mxd9vD2CQzJWqOQ1Zb_1Itvy0ZAtuyBbiNfoIBMZGioWFAK3zlf1AVaovcGPlCxPuVQ5L4uDM1EgPoDKJJ4JEsHplaE0THVQ=w1920-h1080";
	}
	
	for(i = 0; i < 5; i ++){
		document.getElementsByClassName("expansionScroll").item(i).src = "https://lh3.googleusercontent.com/b1sLIN6FyUYSa_EMvZMOrKdltQ4D6am5VnE_wDf-hstkQeKonUH9q1oa3flT7evLbE0-94jp2SAsS6Ul5iZwguPZHkqZA0e8h4l2WXhACiH2EUZuGLmaVn2OE62h4wdHleYT9iIkuw=w1920-h1080";
	}
	
	for(i = 0; i < 3; i ++){
		document.getElementsByClassName("trainingScroll").item(i).src = "https://lh3.googleusercontent.com/jP2zFMblWyzsYwYfo14Dg-CAjz6yll1AD3O9iD1Bq-QZD-w2NQLjAtFPNMqIZ8N75RSQvevMtr_ds-9GrJ2ARMjl0URncGOMA-WtPQkwkdHgD6G9x4DJakUj2DOINWc6NfcXz1aCgg=w1920-h1080";
	}
	
	for(i = 0; i < 13; i ++){
		document.getElementsByClassName("linkBoardLocked").item(i).src = "https://lh3.googleusercontent.com/c4ixXBI6aKwDBekfHUqSL6HjVPFd3L7-NI9Nf29qCKFW50Di-Dq7nRVjUd-5D8egBDPeuQGIoPL3pCMMM0mmlb70sIZ5UMIlfrUtmxVGmzFf_jLTu0xJUCisKSVYn9PCvvfS07vKOw=w1920-h1080";
		document.getElementsByClassName("linkBoardSuperFragment").item(i).src = "https://lh3.googleusercontent.com/aEdNb7OiL9xoARn_h-t7E1hwa9li2OE07i_S6J3RbhnfbCqgkgfSWOq_yDRE9492qLMhsudtBbzkTLn1se3Hi53Vv6sX2pss2XigzT92u1zZqN1Wil_MatKsDAwGUVBYjMopAII4eA=w1920-h1080";
		document.getElementsByClassName("linkBoardKeys").item(i).src = "https://lh3.googleusercontent.com/7s5B9I501ay5wHi_04Oc-5qz2YIiNiSElMCF0Xyo5imnf06RXKBwaiQMdsuVwo9mBJ5ImlGE08pa5JFnai3D8d7-9jgQCOKve1mH8LTgXr3kV1ynbN4WKEuQ5MT6USoCna9DPLpTcg=w1920-h1080";
	}
	
	for(i = 0; i < 15; i ++){
		document.getElementsByClassName("linkBoardFragment").item(i).src = "https://lh3.googleusercontent.com/snf81ECMK7Zn1_RpDH-DtMy6DvagAyrAJCT7Q9p9hlV-_wl4yrEqm1AwXaK5oEZWDStyMh88qy4TbCwFf4ska7C4oi_td0uUtmW4DeHc8_RehkPjIF60wfS-RucIJHVDtX7FYzlSwA=w1920-h1080";
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
	
	linkBoardTableRows[27][4].innerHTML = "+100 ATK";
	linkBoardTableRows[28][4].innerHTML = "+40 HP";
	linkBoardTableRows[29][4].innerHTML = "+60 DEF";
	linkBoardTableRows[30][4].innerHTML = "+120 DEF";
	linkBoardTableRows[31][4].innerHTML = "+200 HP";
	
	linkBoardTableRows[32][4].innerHTML = "+300 HP";
	linkBoardTableRows[33][4].innerHTML = "+60 CP";
	linkBoardTableRows[34][4].innerHTML = "+180 DEF";
	linkBoardTableRows[35][10].innerHTML = "+5% to Stats of Ninja Cards with Attack Type Matching Bonus";
	
	linkBoardTableRows[36][4].innerHTML = "+400 HP";
	linkBoardTableRows[37][4].innerHTML = "+100 CP";
	linkBoardTableRows[38][4].innerHTML = "+240 DEF";
	linkBoardTableRows[39][10].innerHTML = "+10% to Stats of Ninja Cards with Shinobi Matching Bonus";
	
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
	
	linkBoardTableRows[66][4].innerHTML = "+400 ATK";
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
	linkBoardTableRows[94][10].innerHTML = "+5% to Stats of Ninja Cards with Attack Type Matching Bonus";
	
	linkBoardTableRows[95][4].innerHTML = "+400 HP";
	linkBoardTableRows[96][4].innerHTML = "+80 CP";
	linkBoardTableRows[97][4].innerHTML = "+240 DEF";
	linkBoardTableRows[98][10].innerHTML = "+10% to Stats of Ninja Cards with Shinobi Matching Bonus";
	
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
	linkBoardTableRows[113][10].innerHTML = "Increases power of equipped Ultimate Jutsu by 5% for each Ultimate Jutsu Card at max Jutsu LVL that is not the same as the equipped Ultimate Jutsu (EX Ultimate Jutsu excluded).";
	linkBoardTableRows[114][4].innerHTML = "Increases power of equipped Ultimate Jutsu by 10% for each Ultimate Jutsu Card at max Jutsu LVL that is the same as the equipped Ultimate Jutsu (EX Ultimate Jutsu excluded).";
	
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
	linkBoardTableRows[137][10].innerHTML = "Gain immunity to seal when the user is inflicted with seal";
}