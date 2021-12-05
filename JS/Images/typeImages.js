function typeImages(){
	let cardTypeImageItemLength = document.getElementsByClassName("cardTypeImage");
	
	for(let i = 0; i < cardTypeImageItemLength.length; i ++){
		switch(document.getElementsByClassName("cardTypeImage").item(i).alt){
			case "Assist":
				document.getElementsByClassName("cardTypeImage").item(i).src = "https://lh3.googleusercontent.com/BR61eSPgEHta1Bqu6XfV8hNtNq7fYP6VQdHCC6CBt-XodGNyxsfBOCgInPSLGmNA8i_G8OX6DCLOr1EzBYmJhJMFpCxFJZZnesU38zSmWBzYjRqmt1rMxA62BnmjbbU_Z3Zrt7w28g=w1920-h1080";
				break;
			case "Attack":
				document.getElementsByClassName("cardTypeImage").item(i).src = "https://lh3.googleusercontent.com/pw/AM-JKLWSXZaWknPkJDShyEyaGbzSodlnbLpP5sG7B3jgzjlhbgIPNnOMrP_rsgYdTUyY82tmyqc3IhhsHeLVI6GJlFXOQjFibl1emU8yCK3_CgjbVqqnLmP9ksvKKPecCb1enrwaPZG_T-lZICBoEmLrkART=w71-h79-no?authuser=0";
				break;
			case "Defense":
				document.getElementsByClassName("cardTypeImage").item(i).src = "https://lh3.googleusercontent.com/WqY-r_pyKeWGfkFmm3cwHTiC-8YLrx1732uuyxpHjyip4RNJk_PIbouXuNESfEYbWelb9Xpiy-LHh6zvb6vMYc1rD42a22X0diJYqXzBkgB1vvZDrZn-uwLdaJCS2iZx5PCdeU8nRg=w1920-h1080";
				break;
			case "Skill":
				document.getElementsByClassName("cardTypeImage").item(i).src = "https://lh3.googleusercontent.com/FWU-cAZZI-JGONyeUaJWiRwrgoX7GxJBtZEflHfMeeirsdUBzS0NcS2Ww5abDojJgg93qKDgOMDlVhZasHH8HVg05Ubh3w5urikAt2KV1iKRkO32HiIIgupxNZyQeBzKtXCKWX9naQ=w1920-h1080";
				break;
			case "Utility":
				document.getElementsByClassName("cardTypeImage").item(i).src = "https://lh3.googleusercontent.com/xRkssCYG3PU6GsqeKaY_BQiHABwcMsYd_AxNwc6UDWucszTdFCeoJKxCKeJ6exT1RJ-UPc_JRDpKlGWW7G4iE0BBgH8fKnRqH3AUa2iLvoFV-7f7B-rWXmGNYQa5BbfV9M0AI430qQ=w1920-h1080";
				break;
		}
	}
}