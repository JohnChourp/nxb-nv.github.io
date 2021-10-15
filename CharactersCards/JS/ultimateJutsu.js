function ultimateJutsu() {
	document.getElementById("faviconIco").href = "../../../favicon.ico";
	let rows = [[]];
	rows[0] = document.getElementById ( "ultimateJutsu" ).rows[ 1 ].cells;
	rows[1] = document.getElementById ( "ultimateJutsu" ).rows[ 2 ].cells;
	rows[2] = document.getElementById ( "ultimateJutsu" ).rows[ 3 ].cells;
	rows[3] = document.getElementById ( "ultimateJutsu" ).rows[ 5 ].cells;
	
	switch ( document.getElementsByClassName ( "cardLevel" ).item(0).innerHTML ) {
		case "Lv 70/70":
			document.getElementsByClassName ( "rankImage" ).item(0).src = "https://lh3.googleusercontent.com/s7P8ETCwxe43zzVBXUpiEmZLmUyiaOgRU9pJBcljYoVB6nMA1Woh21jnjus6nrQ1NKs5VouYtNJRZDrotPTp6JNHooJ7mUwhGF9mEHYXenQTU2eH9yy1Ao2QlDafLCr11U51dxedwQ=w1920-h1080";
			rows[2][1].innerHTML = "1.30%";
			rows[2][3].innerHTML = "1.30%";
			rows[3][4].innerHTML = "8/8";
			
			switch ( document.getElementById( "cardType" ).innerHTML ){
				case "Assist":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/BR61eSPgEHta1Bqu6XfV8hNtNq7fYP6VQdHCC6CBt-XodGNyxsfBOCgInPSLGmNA8i_G8OX6DCLOr1EzBYmJhJMFpCxFJZZnesU38zSmWBzYjRqmt1rMxA62BnmjbbU_Z3Zrt7w28g=w1920-h1080";
					
					rows[0][5].innerHTML = "1128";
					rows[0][7].innerHTML = "143";
					
					rows[1][2].innerHTML = "480";
					rows[1][4].innerHTML = "607";
					break;
				case "Attack":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/YpVsn86SLRc9UoGMy0_EmJhAvh4Rn9qm9ImhI8YbDbyXAmc2osaEudSgCS0pcuDFPQbVkAuLCFfEaNHoL12VgwBl4HnBmKqm-ZdVXKTHjgozcK7D6ziJuPAmUbgdYmTPApa8U1beCQ=w1920-h1080";
					
					rows[0][5].innerHTML = "1128";
					rows[0][7].innerHTML = "102";
					
					rows[1][2].innerHTML = "829";
					rows[1][4].innerHTML = "534";
					break;
				case "Defense":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/WqY-r_pyKeWGfkFmm3cwHTiC-8YLrx1732uuyxpHjyip4RNJk_PIbouXuNESfEYbWelb9Xpiy-LHh6zvb6vMYc1rD42a22X0diJYqXzBkgB1vvZDrZn-uwLdaJCS2iZx5PCdeU8nRg=w1920-h1080";
					
					rows[0][5].innerHTML = "1296";
					rows[0][7].innerHTML = "85";
					
					rows[1][2].innerHTML = "571";
					rows[1][4].innerHTML = "742";
					break;
				case "Skill":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/FWU-cAZZI-JGONyeUaJWiRwrgoX7GxJBtZEflHfMeeirsdUBzS0NcS2Ww5abDojJgg93qKDgOMDlVhZasHH8HVg05Ubh3w5urikAt2KV1iKRkO32HiIIgupxNZyQeBzKtXCKWX9naQ=w1920-h1080";
					
					rows[0][5].innerHTML = "1029";
					rows[0][7].innerHTML = "165";
					
					rows[1][2].innerHTML = "627";
					rows[1][4].innerHTML = "436";
					break;
				case "Utility":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/xRkssCYG3PU6GsqeKaY_BQiHABwcMsYd_AxNwc6UDWucszTdFCeoJKxCKeJ6exT1RJ-UPc_JRDpKlGWW7G4iE0BBgH8fKnRqH3AUa2iLvoFV-7f7B-rWXmGNYQa5BbfV9M0AI430qQ=w1920-h1080";
					
					rows[0][5].innerHTML = "1218";
					rows[0][7].innerHTML = "112";
					
					rows[1][2].innerHTML = "607";
					rows[1][4].innerHTML = "574";
					break;
			}
			break;
		case "Lv 100/100":
			document.getElementsByClassName ( "rankImage" ).item(0).src = "https://lh3.googleusercontent.com/s7P8ETCwxe43zzVBXUpiEmZLmUyiaOgRU9pJBcljYoVB6nMA1Woh21jnjus6nrQ1NKs5VouYtNJRZDrotPTp6JNHooJ7mUwhGF9mEHYXenQTU2eH9yy1Ao2QlDafLCr11U51dxedwQ=w1920-h1080";
			rows[2][1].innerHTML = "1.50%";
			rows[2][3].innerHTML = "1.50%";
			rows[3][4].innerHTML = "15/15";
			
			switch ( document.getElementById( "cardType" ).innerHTML ){
				case "Assist":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/BR61eSPgEHta1Bqu6XfV8hNtNq7fYP6VQdHCC6CBt-XodGNyxsfBOCgInPSLGmNA8i_G8OX6DCLOr1EzBYmJhJMFpCxFJZZnesU38zSmWBzYjRqmt1rMxA62BnmjbbU_Z3Zrt7w28g=w1920-h1080";
					
					rows[0][5].innerHTML = "1730";
					rows[0][7].innerHTML = "223";
					
					rows[1][2].innerHTML = "740";
					rows[1][4].innerHTML = "940";
					break;
				case "Attack":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/YpVsn86SLRc9UoGMy0_EmJhAvh4Rn9qm9ImhI8YbDbyXAmc2osaEudSgCS0pcuDFPQbVkAuLCFfEaNHoL12VgwBl4HnBmKqm-ZdVXKTHjgozcK7D6ziJuPAmUbgdYmTPApa8U1beCQ=w1920-h1080";
					
					rows[0][5].innerHTML = "";
					rows[0][7].innerHTML = "";
					
					rows[1][2].innerHTML = "";
					rows[1][4].innerHTML = "";
					break;
				case "Defense":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/WqY-r_pyKeWGfkFmm3cwHTiC-8YLrx1732uuyxpHjyip4RNJk_PIbouXuNESfEYbWelb9Xpiy-LHh6zvb6vMYc1rD42a22X0diJYqXzBkgB1vvZDrZn-uwLdaJCS2iZx5PCdeU8nRg=w1920-h1080";
					
					rows[0][5].innerHTML = "1980";
					rows[0][7].innerHTML = "138";
					
					rows[1][2].innerHTML = "877";
					rows[1][4].innerHTML = "1130";
					break;
				case "Skill":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/FWU-cAZZI-JGONyeUaJWiRwrgoX7GxJBtZEflHfMeeirsdUBzS0NcS2Ww5abDojJgg93qKDgOMDlVhZasHH8HVg05Ubh3w5urikAt2KV1iKRkO32HiIIgupxNZyQeBzKtXCKWX9naQ=w1920-h1080";
					
					rows[0][5].innerHTML = "1596";
					rows[0][7].innerHTML = "254";
					
					rows[1][2].innerHTML = "955";
					rows[1][4].innerHTML = "684";
					break;
				case "Utility":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/xRkssCYG3PU6GsqeKaY_BQiHABwcMsYd_AxNwc6UDWucszTdFCeoJKxCKeJ6exT1RJ-UPc_JRDpKlGWW7G4iE0BBgH8fKnRqH3AUa2iLvoFV-7f7B-rWXmGNYQa5BbfV9M0AI430qQ=w1920-h1080";
					
					rows[0][5].innerHTML = "1881";
					rows[0][7].innerHTML = "175";
					
					rows[1][2].innerHTML = "940";
					rows[1][4].innerHTML = "881";
					break;
			}
			break;
	}
}