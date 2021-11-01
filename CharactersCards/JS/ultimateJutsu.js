function ultimateJutsu(){
	document.getElementById("faviconIco").href = "../../../favicon.ico";
	let rows = [[]];
	rows[0] = document.getElementById("ultimateJutsu").rows[1].cells;
	rows[1] = document.getElementById("ultimateJutsu").rows[2].cells;
	rows[2] = document.getElementById("ultimateJutsu").rows[3].cells;
	rows[3] = document.getElementById("ultimateJutsu").rows[5].cells;
	
	switch(document.getElementsByClassName("cardLevel").item(0).innerHTML){
		case "Lv 70/70":
			rows[2][1].innerHTML = "1.30%";
			rows[2][3].innerHTML = "1.30%";
			rows[3][4].innerHTML = "8/8";
			
			switch(document.getElementById("cardType").innerHTML){
				case "Assist":
					rows[0][5].innerHTML = "1128";
					rows[0][7].innerHTML = "143";
					rows[1][2].innerHTML = "480";
					rows[1][4].innerHTML = "607";
					break;
				case "Attack":
					rows[0][5].innerHTML = "1128";
					rows[0][7].innerHTML = "102";
					rows[1][2].innerHTML = "829";
					rows[1][4].innerHTML = "534";
					break;
				case "Defense":
					rows[0][5].innerHTML = "1296";
					rows[0][7].innerHTML = "85";
					rows[1][2].innerHTML = "571";
					rows[1][4].innerHTML = "742";
					break;
				case "Skill":
					rows[0][5].innerHTML = "1029";
					rows[0][7].innerHTML = "165";
					rows[1][2].innerHTML = "627";
					rows[1][4].innerHTML = "436";
					break;
				case "Utility":
					rows[0][5].innerHTML = "1218";
					rows[0][7].innerHTML = "112";
					rows[1][2].innerHTML = "607";
					rows[1][4].innerHTML = "574";
					break;
			}
			break;
		case "Lv 100/100":
			rows[2][1].innerHTML = "1.50%";
			rows[2][3].innerHTML = "1.50%";
			rows[3][4].innerHTML = "15/15";
			
			switch(document.getElementById("cardType").innerHTML){
				case "Assist":
					rows[0][5].innerHTML = "1730";
					rows[0][7].innerHTML = "223";
					rows[1][2].innerHTML = "740";
					rows[1][4].innerHTML = "940";
					break;
				case "Attack":
					rows[0][5].innerHTML = "";
					rows[0][7].innerHTML = "";
					rows[1][2].innerHTML = "";
					rows[1][4].innerHTML = "";
					break;
				case "Defense":
					rows[0][5].innerHTML = "1980";
					rows[0][7].innerHTML = "138";
					rows[1][2].innerHTML = "877";
					rows[1][4].innerHTML = "1130";
					break;
				case "Skill":
					rows[0][5].innerHTML = "1596";
					rows[0][7].innerHTML = "254";
					rows[1][2].innerHTML = "955";
					rows[1][4].innerHTML = "684";
					break;
				case "Utility":
					rows[0][5].innerHTML = "1881";
					rows[0][7].innerHTML = "175";
					rows[1][2].innerHTML = "940";
					rows[1][4].innerHTML = "881";
					break;
			}
			break;
	}
}