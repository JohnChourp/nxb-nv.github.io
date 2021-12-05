function rankLevelImages(){
	let rankImageItemLength = document.getElementsByClassName("rankImage");
	
	for(let i = 0; i < rankImageItemLength.length; i ++){
		switch(document.getElementsByClassName("rankImage").item(i).alt){
			case "7 Star":
				document.getElementsByClassName("rankImage").item(i).src = "https://lh3.googleusercontent.com/pw/AM-JKLXfSU0Ql6Gm4kKA0E9I_3IoHD3OAGn8Lc4ngdrCFSpxzxnGIQcTnqTGsi9zIGenh7jXxFGp0Cuajca6Kn3iTCsn9yR5j7J_DHXSkjth9Sp-9srEK582O0WBxUyXBe7N2dNkuEWxT4yJzDGwwIc_pr5F=w336-h48-no?authuser=0";
				break;
			case "6 Star":
				document.getElementsByClassName("rankImage").item(i).src = "https://lh3.googleusercontent.com/s7P8ETCwxe43zzVBXUpiEmZLmUyiaOgRU9pJBcljYoVB6nMA1Woh21jnjus6nrQ1NKs5VouYtNJRZDrotPTp6JNHooJ7mUwhGF9mEHYXenQTU2eH9yy1Ao2QlDafLCr11U51dxedwQ=w1920-h1080";
				break;
			case "5 Star":
				document.getElementsByClassName("rankImage").item(i).src = "https://lh3.googleusercontent.com/BMguj359fpGE5nDJucj6h-Gkl3PMSbXxbjXU4fInp_MXGc7nCRt76WJ-NqD9M77nqcddxy4veQ4YPhTq7wA-ZOCiZPu23nBz831iLiVTgNScTZ1ShiY1Z1LgGsvkswKlAcEExEV9bg=w1920-h1080";
				break;
			case "4 Star":
				document.getElementsByClassName("rankImage").item(i).src = "https://lh3.googleusercontent.com/Bwf8MNAs7sW7dS0yM42K8h01HpBWEkGZ2YCv7uuRF9UcwTwhhDHng_is68KxmlyjWxu0TCImhqhz5c5mxchavEUMEmd6mn3HE8b9QXjho4q-PTrYh89DdK5SmRT9brb2r56YGBnykw=w1920-h1080";
				break;
			case "3 Star":
				document.getElementsByClassName("rankImage").item(i).src = "https://lh3.googleusercontent.com/nLGut0BJuyZyLF8-M7Jm3oxrZ08oCAXO5ckgLJBdQkzZfuYhvC73wWwQZAKc8u4NsVh_V2_arOnAMlILXxR4wVW7W6a2ZMvCLPvwIvfxv75kMMqlPT9I3gkeCYYYE7tV3DGkwcY0_g=w1920-h1080";
				break;
			case "2 Star":
				document.getElementsByClassName("rankImage").item(i).src = "https://lh3.googleusercontent.com/NvkueZjBKYki85ameXlwsXY_mS83G6hJExSULArjG29rr53WgjYgB-Se8_By4FrEuq5Hv3wa8Vu4x3T_sM04tEW5Oy_FtFLaqNuydJhzbej9blrZn_VDvbtxnEFj9lxlcYtjqBPBXg=w1920-h1080";
				break;
			case "1 Star":
				document.getElementsByClassName("rankImage").item(i).src = "https://lh3.googleusercontent.com/kOFwXYezHdix8CBVy_QOni9fXbfAEbZuIk_l9ZMXd_8n1jxhg3MIKBQLDWQ0DDQGF25JYpszku_tM8yM1UYfaSCkze3ZBZdoiwsqRf4uCExmItCVBqY-N59yeA8L1Q6-VF_fdh8oFA=w1920-h1080";
				break;
		}
	}
}