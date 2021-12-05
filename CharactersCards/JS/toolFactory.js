function toolFactory(){
	let rankImageItemLength = document.getElementsByClassName("rankImage");
	
	for(let i = 0; i < rankImageItemLength.length; i ++){
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