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

