function ninjutsu(){
	document.getElementById("faviconIco").href = "../../../favicon.ico";
	let rows = [[]];
	rows[0] = document.getElementById("ninjutsu").rows[1].cells;
	rows[1] = document.getElementById("ninjutsu").rows[2].cells;
	rows[2] = document.getElementById("ninjutsu").rows[3].cells;
	rows[3] = document.getElementById("ninjutsu").rows[5].cells;
	
	switch(document.getElementsByClassName("cardLevel").item(0).innerHTML){
		case "Lv 70/70":
			document.getElementsByClassName("rankImage").item(0).src = "https://lh3.googleusercontent.com/pw/AM-JKLWf4-Vxbiy4TQ1PTUiAY4GUVjvu1nWA--0_Ng0BgXsOoGByaNQrj0Sdx63xLNMY8c1Et9ExbhR_6Nmc8lbAfB8GYpY2Pl86zgFE-JBstVhrK84w41iipQzKGV0pacuM0LVuV58aPGXr_st8UgNBsUBe=w286-h47-no?authuser=0";
			rows[2][1].innerHTML = "1.10%";
			rows[2][3].innerHTML = "1.10%";
			rows[3][4].innerHTML = "8/8";
			
			switch(document.getElementById("cardType").innerHTML){
				case "Assist":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLXq-L9q0FAEEzlbEGlN8I9ZtHidN6Qdz5QtGnUEm3c9NNSO7iObEpFe6mCUPjQtpqCvoPLI59BR9WiaKKkaWf-DzAToVe8c3AAU8hx5wvA_NUQGPRlCCTaiMhinCo4oXhOWbfxR3WBryqDA174xh2V6=w73-h78-no?authuser=0";
					
					rows[0][5].innerHTML = "936";
					rows[0][7].innerHTML = "119";
					
					rows[1][2].innerHTML = "393";
					rows[1][4].innerHTML = "499";
					break;
				case "Attack":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLWSXZaWknPkJDShyEyaGbzSodlnbLpP5sG7B3jgzjlhbgIPNnOMrP_rsgYdTUyY82tmyqc3IhhsHeLVI6GJlFXOQjFibl1emU8yCK3_CgjbVqqnLmP9ksvKKPecCb1enrwaPZG_T-lZICBoEmLrkART=w71-h79-no?authuser=0";
					
					rows[0][5].innerHTML = "936";
					rows[0][7].innerHTML = "84";
					
					rows[1][2].innerHTML = "682";
					rows[1][4].innerHTML = "432";
					break;
				case "Defense":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLUaOd9pg98atipKakrH21ZwecEx3nKXaEyVm9a9eOUf4-qi1rrWK6BeZp2qO-os7qcyZPisvlUtP8rxtH7uOsPQUGpxiROroTTguXkaP35_cRDs1-_F-Ye14g8gvM8stGwF-jiPu_ZUHmnyvpEDpc6b=w72-h77-no?authuser=0";
					
					rows[0][5].innerHTML = "1083";
					rows[0][7].innerHTML = "64";
					
					rows[1][2].innerHTML = "472";
					rows[1][4].innerHTML = "622";
					break;
				case "Skill":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLVlQi7WaewND4eyQRn11yM3eURB5ToAxVkWbB-vkDzJIgcBk1pXEPY2gHQ42l2pAiVO-MNcHaD5ku0wD5icdPIzC0jUdovimi16sMXk17DGi4yIv4fS_Gi8CVL2Rep22mYjkk4nUgr6QCcMXjFoHtbZ=w72-h77-no?authuser=0";
					
					rows[0][5].innerHTML = "837";
					rows[0][7].innerHTML = "135";
					
					rows[1][2].innerHTML = "525";
					rows[1][4].innerHTML = "349";
					break;
				case "Utility":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLVmbOQGFz6KDKDr-ar9il-9XKVtcxmGiija84zQzvLFUnOSzgVZX-UzCwQdzAvFK03K-faTrArKuYDBbn3Ll2ZJn2FbkWQKiOpWvtVfgSU_DR3QYY26WX5CLgfYhyJtUBzbtxRYIixk7cvtMpCWHt34=w70-h78-no?authuser=0";
					
					rows[0][5].innerHTML = "999";
					rows[0][7].innerHTML = "94";
					
					rows[1][2].innerHTML = "499";
					rows[1][4].innerHTML = "475";
					break;
			}
			break;
		case "Lv 60/60":
			document.getElementsByClassName("rankImage").item(0).src = "https://lh3.googleusercontent.com/pw/AM-JKLVN1VAfsm9h1KD-6onbBEUsqqgimXQEEay3i1WYwev8WmNy4cdSgB-00QBaXv1oO5pDOLghXBEPtnZk6OfOgmMfPoLE4w42pZsqx6cNTYgkyR0qhongL-V9YgDgil6vNkGocWU7Z_TS897oTFL7WO3e=w237-h48-no?authuser=0";
			rows[2][1].innerHTML = "0.90%";
			rows[2][3].innerHTML = "0.90%";
			rows[3][4].innerHTML = "6/6";
			
			switch(document.getElementById("cardType").innerHTML){
				case "Assist":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLXq-L9q0FAEEzlbEGlN8I9ZtHidN6Qdz5QtGnUEm3c9NNSO7iObEpFe6mCUPjQtpqCvoPLI59BR9WiaKKkaWf-DzAToVe8c3AAU8hx5wvA_NUQGPRlCCTaiMhinCo4oXhOWbfxR3WBryqDA174xh2V6=w73-h78-no?authuser=0";
					
					rows[0][5].innerHTML = "695";
					rows[0][7].innerHTML = "87";
					
					rows[1][2].innerHTML = "290";
					rows[1][4].innerHTML = "367";
					break;
				case "Attack":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLWSXZaWknPkJDShyEyaGbzSodlnbLpP5sG7B3jgzjlhbgIPNnOMrP_rsgYdTUyY82tmyqc3IhhsHeLVI6GJlFXOQjFibl1emU8yCK3_CgjbVqqnLmP9ksvKKPecCb1enrwaPZG_T-lZICBoEmLrkART=w71-h79-no?authuser=0";
					
					rows[0][5].innerHTML = "695";
					rows[0][7].innerHTML = "61";
					
					rows[1][2].innerHTML = "504";
					rows[1][4].innerHTML = "313";
					break;
				case "Defense":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLUaOd9pg98atipKakrH21ZwecEx3nKXaEyVm9a9eOUf4-qi1rrWK6BeZp2qO-os7qcyZPisvlUtP8rxtH7uOsPQUGpxiROroTTguXkaP35_cRDs1-_F-Ye14g8gvM8stGwF-jiPu_ZUHmnyvpEDpc6b=w72-h77-no?authuser=0";
					
					rows[0][5].innerHTML = "809";
					rows[0][7].innerHTML = "44";
					
					rows[1][2].innerHTML = "350";
					rows[1][4].innerHTML = "466";
					break;
				case "Skill":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLVlQi7WaewND4eyQRn11yM3eURB5ToAxVkWbB-vkDzJIgcBk1pXEPY2gHQ42l2pAiVO-MNcHaD5ku0wD5icdPIzC0jUdovimi16sMXk17DGi4yIv4fS_Gi8CVL2Rep22mYjkk4nUgr6QCcMXjFoHtbZ=w72-h77-no?authuser=0";
					
					rows[0][5].innerHTML = "611";
					rows[0][7].innerHTML = "98";
					
					rows[1][2].innerHTML = "394";
					rows[1][4].innerHTML = "251";
					break;
				case "Utility":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLVmbOQGFz6KDKDr-ar9il-9XKVtcxmGiija84zQzvLFUnOSzgVZX-UzCwQdzAvFK03K-faTrArKuYDBbn3Ll2ZJn2FbkWQKiOpWvtVfgSU_DR3QYY26WX5CLgfYhyJtUBzbtxRYIixk7cvtMpCWHt34=w70-h78-no?authuser=0";
					
					rows[0][5].innerHTML = "735";
					rows[0][7].innerHTML = "69";
					
					rows[1][2].innerHTML = "367";
					rows[1][4].innerHTML = "352";
					break;
			}
			break;
		case "Lv 40/40":
			document.getElementsByClassName("rankImage").item(0).src = "https://lh3.googleusercontent.com/nLGut0BJuyZyLF8-M7Jm3oxrZ08oCAXO5ckgLJBdQkzZfuYhvC73wWwQZAKc8u4NsVh_V2_arOnAMlILXxR4wVW7W6a2ZMvCLPvwIvfxv75kMMqlPT9I3gkeCYYYE7tV3DGkwcY0_g=w1920-h1080";
			rows[2][1].innerHTML = "0.50%";
			rows[2][3].innerHTML = "0.50%";
			rows[3][4].innerHTML = "2/2";
			
			switch(document.getElementById("cardType").innerHTML){
				case "Assist":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLXq-L9q0FAEEzlbEGlN8I9ZtHidN6Qdz5QtGnUEm3c9NNSO7iObEpFe6mCUPjQtpqCvoPLI59BR9WiaKKkaWf-DzAToVe8c3AAU8hx5wvA_NUQGPRlCCTaiMhinCo4oXhOWbfxR3WBryqDA174xh2V6=w73-h78-no?authuser=0";
					
					rows[0][5].innerHTML = "408";
					rows[0][7].innerHTML = "50";
					
					rows[1][2].innerHTML = "169";
					rows[1][4].innerHTML = "213";
					break;
				case "Attack":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLWSXZaWknPkJDShyEyaGbzSodlnbLpP5sG7B3jgzjlhbgIPNnOMrP_rsgYdTUyY82tmyqc3IhhsHeLVI6GJlFXOQjFibl1emU8yCK3_CgjbVqqnLmP9ksvKKPecCb1enrwaPZG_T-lZICBoEmLrkART=w71-h79-no?authuser=0";
					
					rows[0][5].innerHTML = "408";
					rows[0][7].innerHTML = "35";
					
					rows[1][2].innerHTML = "294";
					rows[1][4].innerHTML = "181";
					break;
				case "Defense":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLUaOd9pg98atipKakrH21ZwecEx3nKXaEyVm9a9eOUf4-qi1rrWK6BeZp2qO-os7qcyZPisvlUtP8rxtH7uOsPQUGpxiROroTTguXkaP35_cRDs1-_F-Ye14g8gvM8stGwF-jiPu_ZUHmnyvpEDpc6b=w72-h77-no?authuser=0";
					
					rows[0][5].innerHTML = "477";
					rows[0][7].innerHTML = "24";
					
					rows[1][2].innerHTML = "205";
					rows[1][4].innerHTML = "274";
					break;
				case "Skill":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLVlQi7WaewND4eyQRn11yM3eURB5ToAxVkWbB-vkDzJIgcBk1pXEPY2gHQ42l2pAiVO-MNcHaD5ku0wD5icdPIzC0jUdovimi16sMXk17DGi4yIv4fS_Gi8CVL2Rep22mYjkk4nUgr6QCcMXjFoHtbZ=w72-h77-no?authuser=0";
					
					rows[0][5].innerHTML = "354";
					rows[0][7].innerHTML = "58";
					
					rows[1][2].innerHTML = "234";
					rows[1][4].innerHTML = "144";
					break;
				case "Utility":
					document.getElementById("cardTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLVmbOQGFz6KDKDr-ar9il-9XKVtcxmGiija84zQzvLFUnOSzgVZX-UzCwQdzAvFK03K-faTrArKuYDBbn3Ll2ZJn2FbkWQKiOpWvtVfgSU_DR3QYY26WX5CLgfYhyJtUBzbtxRYIixk7cvtMpCWHt34=w70-h78-no?authuser=0";
					
					rows[0][5].innerHTML = "427";
					rows[0][7].innerHTML = "40";
					
					rows[1][2].innerHTML = "213";
					rows[1][4].innerHTML = "205";
					break;
			}
			break;
	}
}