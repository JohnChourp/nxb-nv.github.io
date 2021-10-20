function linkBoardTable(){
	let linkBoardTableRows = [[]] , i;
	
	for(i = 1; i < 36; i ++){
		linkBoardTableRows[i] = document.getElementById("linkBoardTable").rows[i].cells;
		linkBoardTableRows[i][0].innerHTML = i;
	}
	
	for(i = 0; i < 33; i ++){
		document.getElementsByClassName("IncreaseCharStat").item(i).src = "https://lh3.googleusercontent.com/A5z6_L451I2qgM3XClqvKx4F-abkTDybL0qW6UMaqx09LdIjr8iPr9C2vpNTZvga2eoOQwq37Dgo7llIwn72XKAxZacb-HRljfhkpnagEJBiC_pc8wSHYpiTJmFx9lTHB7b2CKyJUA=w1920-h1080";
	}
	
	for(i = 0; i < 34; i ++){
		document.getElementsByClassName("linkBoardChakra").item(i).src = "https://lh3.googleusercontent.com/G-BAMQLBMFxzA09MgJmD7KF650eMIbGDnr5DURaAXUGEDRy6tvPhEhNGD4_ufZG-QlmgIJCFmQ3L0gFJ9ZpQ3QRrLaOK_F-SPMFC4GXQj5PC4CtO113S3418MGRYhEEJMxbcWNN62w=w1920-h1080";
	}
	
	for(i = 0; i < 34; i ++){
		document.getElementsByClassName("linkBoardAbilityPoints").item(i).src = "https://lh3.googleusercontent.com/pkaGH5QJyR0OerBecH4eYv3ZR4AeAdVThepkfPMMCzvIPk3GhwV9Ey9BUCf4Ca2lgI_bWGw82SNzayzNArjzAUkytFFgKyAl-e0ogPgsgl__9JtweOYhr_9ACqsVKF3pkLf9uxnUjQ=w1920-h1080";
	}
	
	for(i = 0; i < 33; i ++){
		document.getElementsByClassName("linkBoardRyo").item(i).src = "https://lh3.googleusercontent.com/BJl_cwfBPySnObV0BjX_w2xx32LBuqcKzSwefpm9SqEDc_--d90_iyI31mX-JGKswtwtTLYRNsvcaoNCKSCeSygu1iO5k5p9mngqQItMA30B0ic6Kn1TN0tedsk_pg2630dgFmKnEQ=w1920-h1080";
	}
	
	for(i = 0; i < 2; i ++){
		document.getElementsByClassName("linkBoardLocked").item(i).src = "https://lh3.googleusercontent.com/c4ixXBI6aKwDBekfHUqSL6HjVPFd3L7-NI9Nf29qCKFW50Di-Dq7nRVjUd-5D8egBDPeuQGIoPL3pCMMM0mmlb70sIZ5UMIlfrUtmxVGmzFf_jLTu0xJUCisKSVYn9PCvvfS07vKOw=w1920-h1080";
		document.getElementsByClassName("linkBoardFragment").item(i).src = "https://lh3.googleusercontent.com/snf81ECMK7Zn1_RpDH-DtMy6DvagAyrAJCT7Q9p9hlV-_wl4yrEqm1AwXaK5oEZWDStyMh88qy4TbCwFf4ska7C4oi_td0uUtmW4DeHc8_RehkPjIF60wfS-RucIJHVDtX7FYzlSwA=w1920-h1080";
		document.getElementsByClassName("linkBoardSuperFragment").item(i).src = "https://lh3.googleusercontent.com/aEdNb7OiL9xoARn_h-t7E1hwa9li2OE07i_S6J3RbhnfbCqgkgfSWOq_yDRE9492qLMhsudtBbzkTLn1se3Hi53Vv6sX2pss2XigzT92u1zZqN1Wil_MatKsDAwGUVBYjMopAII4eA=w1920-h1080";
		document.getElementsByClassName("linkBoardKeys").item(i).src = "https://lh3.googleusercontent.com/7s5B9I501ay5wHi_04Oc-5qz2YIiNiSElMCF0Xyo5imnf06RXKBwaiQMdsuVwo9mBJ5ImlGE08pa5JFnai3D8d7-9jgQCOKve1mH8LTgXr3kV1ynbN4WKEuQ5MT6USoCna9DPLpTcg=w1920-h1080";
	}
	
	for(i = 0; i < 1; i ++){
		document.getElementsByClassName("IncreaseCharStatCharType").item(i).src = "https://lh3.googleusercontent.com/LWOvmPwtPSaP5uU1pvv55YjDt7d54nv_yZ-wygUggVvOLgCXGUMas0C_BHwVNvCBFqVZN77esG2PEBKl1fyQrpTliVFsMB5CCZBgRhm1R8p2AUlt1ZthdFFokLGUf2PSSegutzXO4Q=w1920-h1080";
	}
	
	for(i = 0; i < 1; i ++){
		document.getElementsByClassName("linkBoard5StarAttackGem").item(i).src = "https://lh3.googleusercontent.com/mF65xMho503dM5aqaW1Uk8Zo8MAsejJSiUZKc78ggwFAi6ooMofMem0W9W9oeSEsn7PGeiDMJ2idQr65aXdCCJu7HlHoHNTnZVpB-tN5LDfZPEKFmimARRG4nwSXtPy67y8daPGaeA=w1920-h1080";
	}
	
	for(i = 1; i < 36; i ++){
		if(i === 21){
			linkBoardTableRows[i][3].innerHTML = "80";
			linkBoardTableRows[i][5].innerHTML = "40";
			linkBoardTableRows[i][7].innerHTML = "10";
		}else if(i === 35){
			linkBoardTableRows[i][3].innerHTML = "80";
			linkBoardTableRows[i][5].innerHTML = "40";
			linkBoardTableRows[i][7].innerHTML = "10";
			linkBoardTableRows[i][11].innerHTML = "1000000";
			linkBoardTableRows[i][13].innerHTML = "1000000";
			linkBoardTableRows[i][15].innerHTML = "5000";
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
	
	linkBoardTableRows[27][4].innerHTML = "+100 ATK";
	linkBoardTableRows[28][4].innerHTML = "+40 HP";
	linkBoardTableRows[29][4].innerHTML = "+60 DEF";
	linkBoardTableRows[30][4].innerHTML = "+120 DEF";
	linkBoardTableRows[31][4].innerHTML = "+200 HP";
	
	linkBoardTableRows[32][4].innerHTML = "+300 HP";
	linkBoardTableRows[33][4].innerHTML = "+60 CP";
	linkBoardTableRows[34][4].innerHTML = "+180 DEF";
	linkBoardTableRows[35][10].innerHTML = "+5% to Stats of Ninja Cards with Attack Type Matching Bonus";
	
}