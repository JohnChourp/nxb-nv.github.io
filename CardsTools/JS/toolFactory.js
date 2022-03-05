function createToolFactory(){
	let rows = [[]];
	const table = document.getElementById("toolMaterials");
	
	rows[0][0] = table.rows[0].insertCell(0);
	rows[0][0].outerHTML = "<th colspan=3 >Required Materials</th>";
	
	rows[1] = table.rows[1].cells;
	
	rows[1][1].colSpan = "2";
	let toolMaterialImage = document.createElement("img");
	toolMaterialImage.classList.add("toolMaterialImage");
	toolMaterialImage.referrerPolicy = "no-referrer";
	toolMaterialImage.src = rows[1][1].innerHTML;
	rows[1][1].innerHTML = "";
	rows[1][1].appendChild(toolMaterialImage);
	
	rows[2] = table.insertRow(2);
	
	rows[2][0] = table.rows[2].insertCell(0);
	rows[2][0].innerHTML = "Production Cost";
	
	rows[2][1] = table.rows[2].insertCell(1);
	let productionCostRyoImage = document.createElement("img");
	productionCostRyoImage.id = "productionCostRyoImage";
	productionCostRyoImage.referrerPolicy = "no-referrer";
	productionCostRyoImage.src = "https://lh3.googleusercontent.com/BJl_cwfBPySnObV0BjX_w2xx32LBuqcKzSwefpm9SqEDc_--d90_iyI31mX-JGKswtwtTLYRNsvcaoNCKSCeSygu1iO5k5p9mngqQItMA30B0ic6Kn1TN0tedsk_pg2630dgFmKnEQ=w1920-h1080";
	rows[2][1].appendChild(productionCostRyoImage);
	
	rows[2][2] = table.rows[2].insertCell(2);
	rows[2][2].classList.add("productionCost");
	
}

function toolFactory(){
	createToolFactory();
	let toolImageLength = document.getElementsByClassName("rankImage");
	
	for(let i = 0; i < toolImageLength.length; i ++){
		switch(document.getElementsByClassName("rankImage").item(i).alt){
			case "5 Star":
				document.getElementsByClassName("productionCost").item(i).innerHTML = "600000";
				break;
			case "4 Star":
				document.getElementsByClassName("productionCost").item(i).innerHTML = "300000";
				break;
			case "3 Star":
				document.getElementsByClassName("productionCost").item(i).innerHTML = "150000";
				break;
			case "2 Star":
				document.getElementsByClassName("productionCost").item(i).innerHTML = "15000";
				break;
			case "1 Star":
				document.getElementsByClassName("productionCost").item(i).innerHTML = "3000";
				break;
		}
	}
}

toolFactory();