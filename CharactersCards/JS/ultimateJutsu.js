function ultimateJutsu() {
	let row1,row2,row3,row5,row6,row7;
	row1 = document.getElementById ( "ultimateJutsu" ).rows[ 1 ].cells;
	row2 = document.getElementById ( "ultimateJutsu" ).rows[ 2 ].cells;
	row3 = document.getElementById ( "ultimateJutsu" ).rows[ 3 ].cells;
	row5 = document.getElementById ( "ultimateJutsu" ).rows[ 5 ].cells;
	row6 = document.getElementById ( "ultimateJutsu" ).rows[ 6 ].cells;
	row7 = document.getElementById ( "ultimateJutsu" ).rows[ 7 ].cells;
	
	if(document.getElementsByClassName ( "cardLevel" ).item(0).innerHTML === "Lv 70/70"){
		document.getElementById("iconStarImage").src = "https://lh3.googleusercontent.com/s7P8ETCwxe43zzVBXUpiEmZLmUyiaOgRU9pJBcljYoVB6nMA1Woh21jnjus6nrQ1NKs5VouYtNJRZDrotPTp6JNHooJ7mUwhGF9mEHYXenQTU2eH9yy1Ao2QlDafLCr11U51dxedwQ=w1920-h1080";
		row3[1].innerHTML = "1.30%";
		row3[3].innerHTML = "1.30%";
		row5[4].innerHTML = "8/8";
		
		switch ( document.getElementsByClassName ( "cardType" ).item(0).innerHTML ){
			case "Assist":
				document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/BR61eSPgEHta1Bqu6XfV8hNtNq7fYP6VQdHCC6CBt-XodGNyxsfBOCgInPSLGmNA8i_G8OX6DCLOr1EzBYmJhJMFpCxFJZZnesU38zSmWBzYjRqmt1rMxA62BnmjbbU_Z3Zrt7w28g=w1920-h1080";
				
				row1[5].innerHTML = "1128";
				row1[7].innerHTML = "143";
				
				row2[2].innerHTML = "480";
				row2[4].innerHTML = "607";
				break;
			case "Attack":
				document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/YpVsn86SLRc9UoGMy0_EmJhAvh4Rn9qm9ImhI8YbDbyXAmc2osaEudSgCS0pcuDFPQbVkAuLCFfEaNHoL12VgwBl4HnBmKqm-ZdVXKTHjgozcK7D6ziJuPAmUbgdYmTPApa8U1beCQ=w1920-h1080";
				
				row1[5].innerHTML = "1128";
				row1[7].innerHTML = "102";
				
				row2[2].innerHTML = "829";
				row2[4].innerHTML = "534";
				break;
			case "Defense":
				document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/WqY-r_pyKeWGfkFmm3cwHTiC-8YLrx1732uuyxpHjyip4RNJk_PIbouXuNESfEYbWelb9Xpiy-LHh6zvb6vMYc1rD42a22X0diJYqXzBkgB1vvZDrZn-uwLdaJCS2iZx5PCdeU8nRg=w1920-h1080";
				
				row1[5].innerHTML = "1296";
				row1[7].innerHTML = "85";
				
				row2[2].innerHTML = "571";
				row2[4].innerHTML = "742";
				break;
			case "Skill":
				document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/FWU-cAZZI-JGONyeUaJWiRwrgoX7GxJBtZEflHfMeeirsdUBzS0NcS2Ww5abDojJgg93qKDgOMDlVhZasHH8HVg05Ubh3w5urikAt2KV1iKRkO32HiIIgupxNZyQeBzKtXCKWX9naQ=w1920-h1080";
				
				row1[5].innerHTML = "1029";
				row1[7].innerHTML = "165";
				
				row2[2].innerHTML = "627";
				row2[4].innerHTML = "436";
				break;
			case "Utility":
				document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/xRkssCYG3PU6GsqeKaY_BQiHABwcMsYd_AxNwc6UDWucszTdFCeoJKxCKeJ6exT1RJ-UPc_JRDpKlGWW7G4iE0BBgH8fKnRqH3AUa2iLvoFV-7f7B-rWXmGNYQa5BbfV9M0AI430qQ=w1920-h1080";
				
				row1[5].innerHTML = "1218";
				row1[7].innerHTML = "112";
				
				row2[2].innerHTML = "607";
				row2[4].innerHTML = "574";
				break;
		}
	}
}