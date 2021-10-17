function ninjutsu () {
	document.getElementById ( "faviconIco" ).href = "../../../favicon.ico";
	let rows = [ [] ];
	rows[0] = document.getElementById ( "ninjutsu" ).rows[1].cells;
	rows[1] = document.getElementById ( "ninjutsu" ).rows[2].cells;
	rows[2] = document.getElementById ( "ninjutsu" ).rows[3].cells;
	rows[3] = document.getElementById ( "ninjutsu" ).rows[5].cells;
	
	switch ( document.getElementsByClassName ( "cardLevel" ).item ( 0 ).innerHTML ) {
		case "Lv 70/70":
			document.getElementsByClassName ( "rankImage" ).item ( 0 ).src = "https://lh3.googleusercontent.com/s7P8ETCwxe43zzVBXUpiEmZLmUyiaOgRU9pJBcljYoVB6nMA1Woh21jnjus6nrQ1NKs5VouYtNJRZDrotPTp6JNHooJ7mUwhGF9mEHYXenQTU2eH9yy1Ao2QlDafLCr11U51dxedwQ=w1920-h1080";
			rows[2][1].innerHTML = "1.10%";
			rows[2][3].innerHTML = "1.10%";
			rows[3][4].innerHTML = "8/8";
			
			switch ( document.getElementById ( "cardType" ).innerHTML ) {
				case "Assist":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/BR61eSPgEHta1Bqu6XfV8hNtNq7fYP6VQdHCC6CBt-XodGNyxsfBOCgInPSLGmNA8i_G8OX6DCLOr1EzBYmJhJMFpCxFJZZnesU38zSmWBzYjRqmt1rMxA62BnmjbbU_Z3Zrt7w28g=w1920-h1080";
					
					rows[0][5].innerHTML = "936";
					rows[0][7].innerHTML = "119";
					
					rows[1][2].innerHTML = "393";
					rows[1][4].innerHTML = "499";
					break;
				case "Attack":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/YpVsn86SLRc9UoGMy0_EmJhAvh4Rn9qm9ImhI8YbDbyXAmc2osaEudSgCS0pcuDFPQbVkAuLCFfEaNHoL12VgwBl4HnBmKqm-ZdVXKTHjgozcK7D6ziJuPAmUbgdYmTPApa8U1beCQ=w1920-h1080";
					
					rows[0][5].innerHTML = "936";
					rows[0][7].innerHTML = "84";
					
					rows[1][2].innerHTML = "682";
					rows[1][4].innerHTML = "432";
					break;
				case "Defense":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/WqY-r_pyKeWGfkFmm3cwHTiC-8YLrx1732uuyxpHjyip4RNJk_PIbouXuNESfEYbWelb9Xpiy-LHh6zvb6vMYc1rD42a22X0diJYqXzBkgB1vvZDrZn-uwLdaJCS2iZx5PCdeU8nRg=w1920-h1080";
					
					rows[0][5].innerHTML = "1083";
					rows[0][7].innerHTML = "64";
					
					rows[1][2].innerHTML = "472";
					rows[1][4].innerHTML = "622";
					break;
				case "Skill":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/FWU-cAZZI-JGONyeUaJWiRwrgoX7GxJBtZEflHfMeeirsdUBzS0NcS2Ww5abDojJgg93qKDgOMDlVhZasHH8HVg05Ubh3w5urikAt2KV1iKRkO32HiIIgupxNZyQeBzKtXCKWX9naQ=w1920-h1080";
					
					rows[0][5].innerHTML = "837";
					rows[0][7].innerHTML = "135";
					
					rows[1][2].innerHTML = "525";
					rows[1][4].innerHTML = "349";
					break;
				case "Utility":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/xRkssCYG3PU6GsqeKaY_BQiHABwcMsYd_AxNwc6UDWucszTdFCeoJKxCKeJ6exT1RJ-UPc_JRDpKlGWW7G4iE0BBgH8fKnRqH3AUa2iLvoFV-7f7B-rWXmGNYQa5BbfV9M0AI430qQ=w1920-h1080";
					
					rows[0][5].innerHTML = "999";
					rows[0][7].innerHTML = "94";
					
					rows[1][2].innerHTML = "499";
					rows[1][4].innerHTML = "475";
					break;
			}
			break;
		case "Lv 60/60":
			document.getElementsByClassName ( "rankImage" ).item ( 0 ).src = "https://lh3.googleusercontent.com/BMguj359fpGE5nDJucj6h-Gkl3PMSbXxbjXU4fInp_MXGc7nCRt76WJ-NqD9M77nqcddxy4veQ4YPhTq7wA-ZOCiZPu23nBz831iLiVTgNScTZ1ShiY1Z1LgGsvkswKlAcEExEV9bg=w1920-h1080";
			rows[2][1].innerHTML = "0.90%";
			rows[2][3].innerHTML = "0.90%";
			rows[3][4].innerHTML = "6/6";
			
			switch ( document.getElementById ( "cardType" ).innerHTML ) {
				case "Assist":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/BR61eSPgEHta1Bqu6XfV8hNtNq7fYP6VQdHCC6CBt-XodGNyxsfBOCgInPSLGmNA8i_G8OX6DCLOr1EzBYmJhJMFpCxFJZZnesU38zSmWBzYjRqmt1rMxA62BnmjbbU_Z3Zrt7w28g=w1920-h1080";
					
					rows[0][5].innerHTML = "695";
					rows[0][7].innerHTML = "87";
					
					rows[1][2].innerHTML = "290";
					rows[1][4].innerHTML = "367";
					break;
				case "Attack":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/YpVsn86SLRc9UoGMy0_EmJhAvh4Rn9qm9ImhI8YbDbyXAmc2osaEudSgCS0pcuDFPQbVkAuLCFfEaNHoL12VgwBl4HnBmKqm-ZdVXKTHjgozcK7D6ziJuPAmUbgdYmTPApa8U1beCQ=w1920-h1080";
					
					rows[0][5].innerHTML = "695";
					rows[0][7].innerHTML = "61";
					
					rows[1][2].innerHTML = "504";
					rows[1][4].innerHTML = "313";
					break;
				case "Defense":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/WqY-r_pyKeWGfkFmm3cwHTiC-8YLrx1732uuyxpHjyip4RNJk_PIbouXuNESfEYbWelb9Xpiy-LHh6zvb6vMYc1rD42a22X0diJYqXzBkgB1vvZDrZn-uwLdaJCS2iZx5PCdeU8nRg=w1920-h1080";
					
					rows[0][5].innerHTML = "809";
					rows[0][7].innerHTML = "44";
					
					rows[1][2].innerHTML = "350";
					rows[1][4].innerHTML = "466";
					break;
				case "Skill":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/FWU-cAZZI-JGONyeUaJWiRwrgoX7GxJBtZEflHfMeeirsdUBzS0NcS2Ww5abDojJgg93qKDgOMDlVhZasHH8HVg05Ubh3w5urikAt2KV1iKRkO32HiIIgupxNZyQeBzKtXCKWX9naQ=w1920-h1080";
					
					rows[0][5].innerHTML = "611";
					rows[0][7].innerHTML = "98";
					
					rows[1][2].innerHTML = "394";
					rows[1][4].innerHTML = "251";
					break;
				case "Utility":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/xRkssCYG3PU6GsqeKaY_BQiHABwcMsYd_AxNwc6UDWucszTdFCeoJKxCKeJ6exT1RJ-UPc_JRDpKlGWW7G4iE0BBgH8fKnRqH3AUa2iLvoFV-7f7B-rWXmGNYQa5BbfV9M0AI430qQ=w1920-h1080";
					
					rows[0][5].innerHTML = "735";
					rows[0][7].innerHTML = "69";
					
					rows[1][2].innerHTML = "367";
					rows[1][4].innerHTML = "352";
					break;
			}
			break;
		case "Lv 40/40":
			document.getElementsByClassName ( "rankImage" ).item ( 0 ).src = "https://lh3.googleusercontent.com/nLGut0BJuyZyLF8-M7Jm3oxrZ08oCAXO5ckgLJBdQkzZfuYhvC73wWwQZAKc8u4NsVh_V2_arOnAMlILXxR4wVW7W6a2ZMvCLPvwIvfxv75kMMqlPT9I3gkeCYYYE7tV3DGkwcY0_g=w1920-h1080";
			rows[2][1].innerHTML = "0.50%";
			rows[2][3].innerHTML = "0.50%";
			rows[3][4].innerHTML = "2/2";
			
			switch ( document.getElementById ( "cardType" ).innerHTML ) {
				case "Assist":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/BR61eSPgEHta1Bqu6XfV8hNtNq7fYP6VQdHCC6CBt-XodGNyxsfBOCgInPSLGmNA8i_G8OX6DCLOr1EzBYmJhJMFpCxFJZZnesU38zSmWBzYjRqmt1rMxA62BnmjbbU_Z3Zrt7w28g=w1920-h1080";
					
					rows[0][5].innerHTML = "408";
					rows[0][7].innerHTML = "50";
					
					rows[1][2].innerHTML = "169";
					rows[1][4].innerHTML = "213";
					break;
				case "Attack":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/YpVsn86SLRc9UoGMy0_EmJhAvh4Rn9qm9ImhI8YbDbyXAmc2osaEudSgCS0pcuDFPQbVkAuLCFfEaNHoL12VgwBl4HnBmKqm-ZdVXKTHjgozcK7D6ziJuPAmUbgdYmTPApa8U1beCQ=w1920-h1080";
					
					rows[0][5].innerHTML = "408";
					rows[0][7].innerHTML = "35";
					
					rows[1][2].innerHTML = "294";
					rows[1][4].innerHTML = "181";
					break;
				case "Defense":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/WqY-r_pyKeWGfkFmm3cwHTiC-8YLrx1732uuyxpHjyip4RNJk_PIbouXuNESfEYbWelb9Xpiy-LHh6zvb6vMYc1rD42a22X0diJYqXzBkgB1vvZDrZn-uwLdaJCS2iZx5PCdeU8nRg=w1920-h1080";
					
					rows[0][5].innerHTML = "477";
					rows[0][7].innerHTML = "24";
					
					rows[1][2].innerHTML = "205";
					rows[1][4].innerHTML = "274";
					break;
				case "Skill":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/FWU-cAZZI-JGONyeUaJWiRwrgoX7GxJBtZEflHfMeeirsdUBzS0NcS2Ww5abDojJgg93qKDgOMDlVhZasHH8HVg05Ubh3w5urikAt2KV1iKRkO32HiIIgupxNZyQeBzKtXCKWX9naQ=w1920-h1080";
					
					rows[0][5].innerHTML = "354";
					rows[0][7].innerHTML = "58";
					
					rows[1][2].innerHTML = "234";
					rows[1][4].innerHTML = "144";
					break;
				case "Utility":
					document.getElementById ( "cardTypeImage" ).src = "https://lh3.googleusercontent.com/xRkssCYG3PU6GsqeKaY_BQiHABwcMsYd_AxNwc6UDWucszTdFCeoJKxCKeJ6exT1RJ-UPc_JRDpKlGWW7G4iE0BBgH8fKnRqH3AUa2iLvoFV-7f7B-rWXmGNYQa5BbfV9M0AI430qQ=w1920-h1080";
					
					rows[0][5].innerHTML = "427";
					rows[0][7].innerHTML = "40";
					
					rows[1][2].innerHTML = "213";
					rows[1][4].innerHTML = "205";
					break;
			}
			break;
	}
}