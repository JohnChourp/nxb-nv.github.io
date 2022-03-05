function createTool(){
	let rows = [[]];
	const table = document.getElementById("tool");
	
	rows[0][0] = table.rows[0].insertCell(0);
	rows[0][0].outerHTML = "<th colspan=2 >Tool</th>"
	
	rows[0][1] = table.rows[0].insertCell(1);
	rows[0][1].outerHTML = "<th colspan=1 >Rank</th>"
	
	rows[0] = table.rows[0].cells;
	
	rows[0][2].colSpan = "3";
	let imgRank = document.createElement("img");
	imgRank.classList.add("rankImage");
	imgRank.referrerPolicy = "no-referrer";
	imgRank.alt = rows[0][2].innerHTML;
	rows[0][2].innerHTML = "";
	rows[0][2].appendChild(imgRank);
	
	rows[1] = table.rows[1].cells;
	
	rows[1][0].colSpan = "2";
	rows[1][0].rowSpan = "3";
	let toolImage = document.createElement("img");
	toolImage.id = "toolImage";
	toolImage.referrerPolicy = "no-referrer";
	toolImage.src = rows[1][0].innerHTML;
	rows[1][0].innerHTML = "";
	rows[1][0].appendChild(toolImage);
	
	let typeImage = document.createElement("img");
	typeImage.classList.add("statTypeImage");
	typeImage.classList.add("natureImage");
	typeImage.referrerPolicy = "no-referrer";
	typeImage.alt = rows[1][2].innerHTML;
	rows[1][2].innerHTML = "";
	rows[1][2].appendChild(typeImage);
	
	if(rows[1][4].innerHTML !== "N/A"){
		typeImage = document.createElement("img");
		typeImage.classList.add("statTypeImage");
		typeImage.classList.add("natureImage");
		typeImage.referrerPolicy = "no-referrer";
		typeImage.alt = rows[1][4].innerHTML;
		rows[1][4].innerHTML = "";
		rows[1][4].appendChild(typeImage);
	}
	
	rows[2] = table.rows[2].cells;
	
	typeImage = document.createElement("img");
	typeImage.classList.add("statTypeImage");
	typeImage.classList.add("natureImage");
	typeImage.referrerPolicy = "no-referrer";
	typeImage.alt = rows[2][1].innerHTML;
	rows[2][1].innerHTML = "";
	rows[2][1].appendChild(typeImage);
	
	if(rows[2][3].innerHTML !== "N/A"){
		typeImage = document.createElement("img");
		typeImage.classList.add("statTypeImage");
		typeImage.classList.add("natureImage");
		typeImage.referrerPolicy = "no-referrer";
		typeImage.alt = rows[2][3].innerHTML;
		rows[2][3].innerHTML = "";
		rows[2][3].appendChild(typeImage);
	}
	
	rows[3] = table.rows[3].cells;
	
	typeImage = document.createElement("img");
	typeImage.classList.add("statTypeImage");
	typeImage.classList.add("natureImage");
	typeImage.referrerPolicy = "no-referrer";
	typeImage.alt = rows[3][1].innerHTML;
	rows[3][1].innerHTML = "";
	rows[3][1].appendChild(typeImage);
	
	if(rows[3][3].innerHTML !== "N/A"){
		typeImage = document.createElement("img");
		typeImage.classList.add("statTypeImage");
		typeImage.classList.add("natureImage");
		typeImage.referrerPolicy = "no-referrer";
		typeImage.alt = rows[3][3].innerHTML;
		rows[3][3].innerHTML = "";
		rows[3][3].appendChild(typeImage);
	}
	rows[4] = table.rows[4].cells;
	rows[4][0] = table.rows[4].insertCell(0);
	rows[4][0].colSpan = "2";
	rows[4][0].innerHTML = "Equippable By";
	
	rows[4][1].colSpan = "4";
}

createTool();