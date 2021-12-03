function searchTableIndex(){
	let inputCharName = document.getElementById("myInput");
	let inputCharType = document.getElementById("myInput");
	let inputCharAbilities = document.getElementById("myInput");
	let inputCharTrait1 = document.getElementById("myInput");
	let inputCharTrait2 = document.getElementById("myInput");
	let inputCharTrait3 = document.getElementById("myInput");
	let inputCharTrait4 = document.getElementById("myInput");
	let inputCharTrait5 = document.getElementById("myInput");
	
	let filterCharName = inputCharName.value.toUpperCase();
	let filterCharType = inputCharType.value.toUpperCase();
	let filterCharAbilities = inputCharAbilities.value.toUpperCase();
	let filterCharTrait1 = inputCharTrait1.value.toUpperCase();
	let filterCharTrait2 = inputCharTrait2.value.toUpperCase();
	let filterCharTrait3 = inputCharTrait3.value.toUpperCase();
	let filterCharTrait4 = inputCharTrait4.value.toUpperCase();
	let filterCharTrait5 = inputCharTrait5.value.toUpperCase();
	
	let table = document.getElementById("sortTable");
	let tr = table.getElementsByTagName("tr");
	
	for(let i = 0; i < tr.length; i ++){
		
		let tdCharName = tr[i].getElementsByTagName("td")[2];
		let tdCharType = tr[i].getElementsByTagName("td")[3];
		let tdCharAbilities = tr[i].getElementsByTagName("td")[4];
		let tdCharTrait1 = tr[i].getElementsByTagName("td")[6];
		let tdCharTrait2 = tr[i].getElementsByTagName("td")[7];
		let tdCharTrait3 = tr[i].getElementsByTagName("td")[8];
		let tdCharTrait4 = tr[i].getElementsByTagName("td")[9];
		let tdCharTrait5 = tr[i].getElementsByTagName("td")[10];
		
		if(tdCharName && tdCharType && tdCharAbilities && tdCharTrait1 && tdCharTrait2 && tdCharTrait3 && tdCharTrait4 && tdCharTrait5){
			let txtValueCharName = tdCharName.textContent || tdCharName.innerText;
			let txtValueCharType = tdCharType.textContent || tdCharType.innerText;
			let txtValueCharAbilities = tdCharAbilities.textContent || tdCharAbilities.innerText;
			let txtValueCharTrait1 = tdCharTrait1.textContent || tdCharTrait1.innerText;
			let txtValueCharTrait2 = tdCharTrait2.textContent || tdCharTrait2.innerText;
			let txtValueCharTrait3 = tdCharTrait3.textContent || tdCharTrait3.innerText;
			let txtValueCharTrait4 = tdCharTrait4.textContent || tdCharTrait4.innerText;
			let txtValueCharTrait5 = tdCharTrait5.textContent || tdCharTrait5.innerText;
			
			if(txtValueCharName.toUpperCase().indexOf(filterCharName) > - 1 || txtValueCharType.toUpperCase().indexOf(filterCharType) > - 1 || txtValueCharAbilities.toUpperCase().indexOf(filterCharAbilities) > - 1 || txtValueCharTrait1.toUpperCase().indexOf(filterCharTrait1) > - 1 || txtValueCharTrait2.toUpperCase().indexOf(filterCharTrait2) > - 1 || txtValueCharTrait3.toUpperCase().indexOf(filterCharTrait3) > - 1 || txtValueCharTrait4.toUpperCase().indexOf(filterCharTrait4) > - 1 || txtValueCharTrait5.toUpperCase().indexOf(filterCharTrait5) > - 1){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
	}
}

