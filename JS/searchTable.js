function searchTable(){
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

