function ninjutsu(){
	let rows = [[]];
	rows[0] = document.getElementById("ninjutsu").rows[1].cells;
	rows[1] = document.getElementById("ninjutsu").rows[2].cells;
	rows[2] = document.getElementById("ninjutsu").rows[3].cells;
	rows[3] = document.getElementById("ninjutsu").rows[5].cells;
	
	switch(document.getElementsByClassName("cardLevel").item(0).innerHTML){
		case "Lv 70/70":
			rows[2][1].innerHTML = "1.10%";
			rows[2][3].innerHTML = "1.10%";
			rows[3][4].innerHTML = "8/8";
			
			switch(document.getElementsByClassName("cardType").item(0).innerHTML){
				case "Assist":
					rows[0][5].innerHTML = "936";
					rows[0][7].innerHTML = "119";
					rows[1][2].innerHTML = "393";
					rows[1][4].innerHTML = "499";
					break;
				case "Attack":
					rows[0][5].innerHTML = "936";
					rows[0][7].innerHTML = "84";
					rows[1][2].innerHTML = "682";
					rows[1][4].innerHTML = "432";
					break;
				case "Defense":
					rows[0][5].innerHTML = "1083";
					rows[0][7].innerHTML = "64";
					rows[1][2].innerHTML = "472";
					rows[1][4].innerHTML = "622";
					break;
				case "Skill":
					rows[0][5].innerHTML = "837";
					rows[0][7].innerHTML = "135";
					rows[1][2].innerHTML = "525";
					rows[1][4].innerHTML = "349";
					break;
				case "Utility":
					rows[0][5].innerHTML = "999";
					rows[0][7].innerHTML = "94";
					rows[1][2].innerHTML = "499";
					rows[1][4].innerHTML = "475";
					break;
			}
			break;
		case "Lv 60/60":
			rows[2][1].innerHTML = "0.90%";
			rows[2][3].innerHTML = "0.90%";
			rows[3][4].innerHTML = "6/6";
			
			switch(document.getElementsByClassName("cardType").item(0).innerHTML){
				case "Assist":
					rows[0][5].innerHTML = "695";
					rows[0][7].innerHTML = "87";
					rows[1][2].innerHTML = "290";
					rows[1][4].innerHTML = "367";
					break;
				case "Attack":
					rows[0][5].innerHTML = "695";
					rows[0][7].innerHTML = "61";
					rows[1][2].innerHTML = "504";
					rows[1][4].innerHTML = "313";
					break;
				case "Defense":
					rows[0][5].innerHTML = "809";
					rows[0][7].innerHTML = "44";
					rows[1][2].innerHTML = "350";
					rows[1][4].innerHTML = "466";
					break;
				case "Skill":
					rows[0][5].innerHTML = "611";
					rows[0][7].innerHTML = "98";
					rows[1][2].innerHTML = "394";
					rows[1][4].innerHTML = "251";
					break;
				case "Utility":
					rows[0][5].innerHTML = "735";
					rows[0][7].innerHTML = "69";
					rows[1][2].innerHTML = "367";
					rows[1][4].innerHTML = "352";
					break;
			}
			break;
		case "Lv 40/40":
			rows[2][1].innerHTML = "0.50%";
			rows[2][3].innerHTML = "0.50%";
			rows[3][4].innerHTML = "2/2";
			
			switch(document.getElementsByClassName("cardType").item(0).innerHTML){
				case "Assist":
					rows[0][5].innerHTML = "408";
					rows[0][7].innerHTML = "50";
					rows[1][2].innerHTML = "169";
					rows[1][4].innerHTML = "213";
					break;
				case "Attack":
					rows[0][5].innerHTML = "408";
					rows[0][7].innerHTML = "35";
					rows[1][2].innerHTML = "294";
					rows[1][4].innerHTML = "181";
					break;
				case "Defense":
					rows[0][5].innerHTML = "477";
					rows[0][7].innerHTML = "24";
					rows[1][2].innerHTML = "205";
					rows[1][4].innerHTML = "274";
					break;
				case "Skill":
					rows[0][5].innerHTML = "354";
					rows[0][7].innerHTML = "58";
					rows[1][2].innerHTML = "234";
					rows[1][4].innerHTML = "144";
					break;
				case "Utility":
					rows[0][5].innerHTML = "427";
					rows[0][7].innerHTML = "40";
					rows[1][2].innerHTML = "213";
					rows[1][4].innerHTML = "205";
					break;
			}
			break;
	}
}