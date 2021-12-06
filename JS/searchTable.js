function searchIndex(){
	let input = [] , filter = [] , td = [] , txt = [] , index = [];
	
	for(let i = 0; i < 8; i ++){
		input[i] = document.getElementById("myInput");
	}
	
	for(let i = 0; i < 8; i ++){
		filter[i] = input[i].value.toUpperCase();
	}
	
	let table = document.getElementById("sortTable");
	let tr = table.getElementsByTagName("tr");
	
	for(let i = 0; i < tr.length; i ++){
		
		td[0] = tr[i].getElementsByTagName("td")[2];
		td[1] = tr[i].getElementsByTagName("td")[3];
		td[2] = tr[i].getElementsByTagName("td")[4];
		td[3] = tr[i].getElementsByTagName("td")[6];
		td[4] = tr[i].getElementsByTagName("td")[7];
		td[5] = tr[i].getElementsByTagName("td")[8];
		td[6] = tr[i].getElementsByTagName("td")[9];
		td[7] = tr[i].getElementsByTagName("td")[10];
		
		if(td[0] && td[1] && td[2] && td[3] && td[4] && td[5] && td[6] && td[7]){
			for(let i = 0; i < 8; i ++){
				txt[i] = td[i].textContent || td[i].innerText;
			}
			
			for(let i = 0; i < 8; i ++){
				index[i] = txt[i].toUpperCase().indexOf(filter[i]);
			}
			
			if(index[0] > - 1 || index[1] > - 1 || index[2] > - 1 || index[3] > - 1 || index[4] > - 1 || index[5] > - 1 || index[6] > - 1 || index[7] > - 1){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
	}
}

function sortIndex(n){
	let table , rows , switching , i , x , y , shouldSwitch , dir , switchCount = 0;
	
	table = document.getElementById("sortTable");
	switching = true;
	//Set the sorting direction to ascending:
	dir = "asc";
	/*Make a loop that will continue until
	 no switching has been done:*/
	while(switching){
		//start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/*Loop through all table rows (except the
		 first, which contains table headers):*/
		for(i = 1; i < (rows.length - 1); i ++){
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			 one from current row and one from the next:*/
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			/*check if the two rows should switch place,
			 based on the direction, asc or desc:*/
			if(dir === "asc"){
				if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}else if(dir === "desc"){
				if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if(shouldSwitch){
			/*If a switch has been marked, make the switch
			 and mark that a switch has been done:*/
			rows[i].parentNode.insertBefore(rows[i + 1] , rows[i]);
			switching = true;
			//Each time a switch is done, increase this count by 1:
			switchCount ++;
		}else{
			/*If no switching has been done AND the direction is "asc",
			 set the direction to "desc" and run the while loop again.*/
			if(switchCount === 0 && dir === "asc"){
				dir = "desc";
				switching = true;
			}
		}
	}
}

function searchAllNinjutsuCards(){
	let inputCategory = document.getElementById("myInput");
	let inputCard = document.getElementById("myInput");
	let inputType = document.getElementById("myInput");
	let inputJutsu = document.getElementById("myInput");
	let inputNature = document.getElementById("myInput");
	let inputRankLv = document.getElementById("myInput");
	let inputJutsuLv = document.getElementById("myInput");
	let inputCPCost = document.getElementById("myInput");
	let inputCRI = document.getElementById("myInput");
	let inputPOW = document.getElementById("myInput");
	let inputRT = document.getElementById("myInput");
	let inputEquipBy = document.getElementById("myInput");
	
	let filterCategory = inputCategory.value.toUpperCase();
	let filterCard = inputCard.value.toUpperCase();
	let filterType = inputType.value.toUpperCase();
	let filterJutsu = inputJutsu.value.toUpperCase();
	let filterNature = inputNature.value.toUpperCase();
	let filterRankLv = inputRankLv.value.toUpperCase();
	let filterJutsuLv = inputJutsuLv.value.toUpperCase();
	let filterCPCost = inputCPCost.value.toUpperCase();
	let filterCRI = inputCRI.value.toUpperCase();
	let filterPOW = inputPOW.value.toUpperCase();
	let filterRT = inputRT.value.toUpperCase();
	let filterEquipBy = inputEquipBy.value.toUpperCase();
	
	let table = document.getElementById("sortTable");
	let tr = table.getElementsByTagName("tr");
	
	for(let i = 0; i < tr.length; i ++){
		
		let tdCategory = tr[i].getElementsByTagName("td")[1];
		let tdCard = tr[i].getElementsByTagName("td")[3];
		let tdType = tr[i].getElementsByTagName("td")[4];
		let tdJutsu = tr[i].getElementsByTagName("td")[6];
		let tdNature = tr[i].getElementsByTagName("td")[8];
		let tdRankLv = tr[i].getElementsByTagName("td")[11];
		let tdJutsuLv = tr[i].getElementsByTagName("td")[12];
		let tdCPCost = tr[i].getElementsByTagName("td")[13];
		let tdCRI = tr[i].getElementsByTagName("td")[14];
		let tdPOW = tr[i].getElementsByTagName("td")[15];
		let tdRT = tr[i].getElementsByTagName("td")[17];
		let tdEquipBy = tr[i].getElementsByTagName("td")[18];
		
		if(tdCategory && tdCard && tdType && tdJutsu && tdNature && tdRankLv && tdJutsuLv && tdCPCost && tdCRI && tdPOW && tdRT && tdEquipBy){
			let txtCategory = tdCategory.textContent || tdCategory.innerText;
			let txtCard = tdCard.textContent || tdCard.innerText;
			let txtType = tdType.textContent || tdType.innerText;
			let txtJutsu = tdJutsu.textContent || tdJutsu.innerText;
			let txtNature = tdNature.textContent || tdNature.innerText;
			let txtRankLv = tdRankLv.textContent || tdRankLv.innerText;
			let txtJutsuLv = tdJutsuLv.textContent || tdJutsuLv.innerText;
			let txtCPCost = tdCPCost.textContent || tdCPCost.innerText;
			let txtCRI = tdCRI.textContent || tdCRI.innerText;
			let txtPOW = tdPOW.textContent || tdPOW.innerText;
			let txtRT = tdRT.textContent || tdRT.innerText;
			let txtEquipBy = tdEquipBy.textContent || tdEquipBy.innerText;
			
			if(txtCategory.toUpperCase().indexOf(filterCategory) > - 1 || txtCard.toUpperCase().indexOf(filterCard) > - 1 || txtType.toUpperCase().indexOf(filterType) > - 1 || txtJutsu.toUpperCase().indexOf(filterJutsu) > - 1 || txtNature.toUpperCase().indexOf(filterNature) > - 1 || txtRankLv.toUpperCase().indexOf(filterRankLv) > - 1 || txtJutsuLv.toUpperCase().indexOf(filterJutsuLv) > - 1 || txtCPCost.toUpperCase().indexOf(filterCPCost) > - 1 || txtCRI.toUpperCase().indexOf(filterCRI) > - 1 || txtPOW.toUpperCase().indexOf(filterPOW) > - 1 || txtRT.toUpperCase().indexOf(filterRT) > - 1 || txtEquipBy.toUpperCase().indexOf(filterEquipBy) > - 1){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
	}
}

function sortAllNinjutsuCards(n){
	let table , rows , switching , i , x , y , shouldSwitch , dir , switchCount = 0;
	
	table = document.getElementById("sortTable");
	switching = true;
	//Set the sorting direction to ascending:
	dir = "asc";
	/*Make a loop that will continue until
	 no switching has been done:*/
	while(switching){
		//start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/*Loop through all table rows (except the
		 first, which contains table headers):*/
		for(i = 1; i < (rows.length - 1); i ++){
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			 one from current row and one from the next:*/
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			/*check if the two rows should switch place,
			 based on the direction, asc or desc:*/
			if(n === 17 || n === 14 || n === 13){
				if(dir === "asc"){
					if(parseInt(x.innerHTML) > parseInt(y.innerHTML)){
						//if so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}else if(dir === "desc"){
					if(parseInt(x.innerHTML) < parseInt(y.innerHTML)){
						//if so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}
			}else{
				if(dir === "asc"){
					if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
						//if so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}else if(dir === "desc"){
					if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
						//if so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}
			}
		}
		if(shouldSwitch){
			/*If a switch has been marked, make the switch
			 and mark that a switch has been done:*/
			rows[i].parentNode.insertBefore(rows[i + 1] , rows[i]);
			switching = true;
			//Each time a switch is done, increase this count by 1:
			switchCount ++;
		}else{
			/*If no switching has been done AND the direction is "asc",
			 set the direction to "desc" and run the while loop again.*/
			if(switchCount === 0 && dir === "asc"){
				dir = "desc";
				switching = true;
			}
		}
	}
}

