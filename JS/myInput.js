function searchTable(){
	let table , tr , i;
	let inputCharName , filterCharName , tdCharName , txtValueCharName;
	let inputCharType , filterCharType , tdCharType , txtValueCharType;
	let inputCharAbilities , filterCharAbilities , tdCharAbilities , txtValueCharAbilities;
	let inputCharTrait1 , filterCharTrait1 , tdCharTrait1 , txtValueCharTrait1;
	let inputCharTrait2 , filterCharTrait2 , tdCharTrait2 , txtValueCharTrait2;
	let inputCharTrait3 , filterCharTrait3 , tdCharTrait3 , txtValueCharTrait3;
	let inputCharTrait4 , filterCharTrait4 , tdCharTrait4 , txtValueCharTrait4;
	let inputCharTrait5 , filterCharTrait5 , tdCharTrait5 , txtValueCharTrait5;
	const btnAttack = $("#btnAttack");
	const btnAssist = $("#btnAssist");
	const btnDefense = $("#btnDefense");
	const btnSkill = $("#btnSkill");
	const btnUtility = $("#btnUtility");
	
	const trAssist = $(".trAssist");
	const trAttack = $(".trAttack");
	const trDefense = $(".trDefense");
	const trSkill = $(".trSkill");
	const trUtility = $(".trUtility");
	
	inputCharName = document.getElementById("myInput");
	inputCharType = document.getElementById("myInput");
	inputCharAbilities = document.getElementById("myInput");
	inputCharTrait1 = document.getElementById("myInput");
	inputCharTrait2 = document.getElementById("myInput");
	inputCharTrait3 = document.getElementById("myInput");
	inputCharTrait4 = document.getElementById("myInput");
	inputCharTrait5 = document.getElementById("myInput");
	
	filterCharName = inputCharName.value.toUpperCase();
	filterCharType = inputCharType.value.toUpperCase();
	filterCharAbilities = inputCharAbilities.value.toUpperCase();
	filterCharTrait1 = inputCharTrait1.value.toUpperCase();
	filterCharTrait2 = inputCharTrait2.value.toUpperCase();
	filterCharTrait3 = inputCharTrait3.value.toUpperCase();
	filterCharTrait4 = inputCharTrait4.value.toUpperCase();
	filterCharTrait5 = inputCharTrait5.value.toUpperCase();
	
	table = document.getElementById("sortTable");
	tr = table.getElementsByTagName("tr");
	
	for(i = 0; i < tr.length; i ++){
		
		tdCharName = tr[i].getElementsByTagName("td")[2];
		tdCharType = tr[i].getElementsByTagName("td")[3];
		tdCharAbilities = tr[i].getElementsByTagName("td")[4];
		tdCharTrait1 = tr[i].getElementsByTagName("td")[6];
		tdCharTrait2 = tr[i].getElementsByTagName("td")[7];
		tdCharTrait3 = tr[i].getElementsByTagName("td")[8];
		tdCharTrait4 = tr[i].getElementsByTagName("td")[9];
		tdCharTrait5 = tr[i].getElementsByTagName("td")[10];
		
		if(tdCharName && tdCharType && tdCharAbilities && tdCharTrait1 && tdCharTrait2 && tdCharTrait3 && tdCharTrait4 && tdCharTrait5){
			txtValueCharName = tdCharName.textContent || tdCharName.innerText;
			txtValueCharType = tdCharType.textContent || tdCharType.innerText;
			txtValueCharAbilities = tdCharAbilities.textContent || tdCharAbilities.innerText;
			txtValueCharTrait1 = tdCharTrait1.textContent || tdCharTrait1.innerText;
			txtValueCharTrait2 = tdCharTrait2.textContent || tdCharTrait2.innerText;
			txtValueCharTrait3 = tdCharTrait3.textContent || tdCharTrait3.innerText;
			txtValueCharTrait4 = tdCharTrait4.textContent || tdCharTrait4.innerText;
			txtValueCharTrait5 = tdCharTrait5.textContent || tdCharTrait5.innerText;
			
			if(txtValueCharName.toUpperCase().indexOf(filterCharName) > - 1 || txtValueCharType.toUpperCase().indexOf(filterCharType) > - 1 || txtValueCharAbilities.toUpperCase().indexOf(filterCharAbilities) > - 1 || txtValueCharTrait1.toUpperCase().indexOf(filterCharTrait1) > - 1 || txtValueCharTrait2.toUpperCase().indexOf(filterCharTrait2) > - 1 || txtValueCharTrait3.toUpperCase().indexOf(filterCharTrait3) > - 1 || txtValueCharTrait4.toUpperCase().indexOf(filterCharTrait4) > - 1 || txtValueCharTrait5.toUpperCase().indexOf(filterCharTrait5) > - 1){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
	}
	if(btnAttack.hasClass("active")){
		trAssist.hide();
		trDefense.hide();
		trSkill.hide();
		trUtility.hide();
	}
	
	if(btnAssist.hasClass("active")){
		trAttack.hide();
		trDefense.hide();
		trSkill.hide();
		trUtility.hide();
	}
	
	if(btnDefense.hasClass("active")){
		trAttack.hide();
		trAssist.hide();
		trSkill.hide();
		trUtility.hide();
	}
	
	if(btnSkill.hasClass("active")){
		trAttack.hide();
		trAssist.hide();
		trDefense.hide();
		trUtility.hide();
	}
	
	if(btnUtility.hasClass("active")){
		trAttack.hide();
		trAssist.hide();
		trSkill.hide();
		trDefense.hide();
	}
}

