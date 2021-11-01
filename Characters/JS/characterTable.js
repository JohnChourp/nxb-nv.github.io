function characterTable(){
	switch(document.getElementById("charType").innerHTML){
		case "Assist":
			document.getElementById("charTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLXq-L9q0FAEEzlbEGlN8I9ZtHidN6Qdz5QtGnUEm3c9NNSO7iObEpFe6mCUPjQtpqCvoPLI59BR9WiaKKkaWf-DzAToVe8c3AAU8hx5wvA_NUQGPRlCCTaiMhinCo4oXhOWbfxR3WBryqDA174xh2V6=w73-h78-no?authuser=0";
			break;
		case "Attack":
			document.getElementById("charTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLWSXZaWknPkJDShyEyaGbzSodlnbLpP5sG7B3jgzjlhbgIPNnOMrP_rsgYdTUyY82tmyqc3IhhsHeLVI6GJlFXOQjFibl1emU8yCK3_CgjbVqqnLmP9ksvKKPecCb1enrwaPZG_T-lZICBoEmLrkART=w71-h79-no?authuser=0";
			break;
		case "Defense":
			document.getElementById("charTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLUaOd9pg98atipKakrH21ZwecEx3nKXaEyVm9a9eOUf4-qi1rrWK6BeZp2qO-os7qcyZPisvlUtP8rxtH7uOsPQUGpxiROroTTguXkaP35_cRDs1-_F-Ye14g8gvM8stGwF-jiPu_ZUHmnyvpEDpc6b=w72-h77-no?authuser=0";
			break;
		case "Skill":
			document.getElementById("charTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLVlQi7WaewND4eyQRn11yM3eURB5ToAxVkWbB-vkDzJIgcBk1pXEPY2gHQ42l2pAiVO-MNcHaD5ku0wD5icdPIzC0jUdovimi16sMXk17DGi4yIv4fS_Gi8CVL2Rep22mYjkk4nUgr6QCcMXjFoHtbZ=w72-h77-no?authuser=0";
			break;
		case "Utility":
			document.getElementById("charTypeImage").src = "https://lh3.googleusercontent.com/pw/AM-JKLVmbOQGFz6KDKDr-ar9il-9XKVtcxmGiija84zQzvLFUnOSzgVZX-UzCwQdzAvFK03K-faTrArKuYDBbn3Ll2ZJn2FbkWQKiOpWvtVfgSU_DR3QYY26WX5CLgfYhyJtUBzbtxRYIixk7cvtMpCWHt34=w70-h78-no?authuser=0";
			break;
	}
}