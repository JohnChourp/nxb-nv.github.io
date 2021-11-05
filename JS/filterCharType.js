$(window).on('load' , function(){
	let filterCharType = document.getElementById("filterCharType").children;
	
	let table = document.getElementById("sortTable");
	let tRowsLength = table.rows.length;
	let tr = table.getElementsByTagName("tr");
	
	for(let i = 0; i < 6; i ++){
		filterCharType[i].addEventListener('click' , function(){
			filterCharType[i].classList.add("active");
			for(let j = 0; j < 6; j ++){
				if((filterCharType[j].classList.contains("active") === filterCharType[i].classList.contains("active")) && (j !== i)){
					filterCharType[j].classList.remove("active");
				}
			}
		});
	}
	
	filterCharType[0].addEventListener('click' , function(){
		for(let i = 0; i < tRowsLength; i ++){
			tr[i].style.display = "";
		}
	});
	
	filterCharType[1].addEventListener('click' , function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("charAttack")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
	});
	
	filterCharType[2].addEventListener('click' , function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("charAssist")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
	});
	
	filterCharType[3].addEventListener('click' , function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("charDefense")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
	});
	
	filterCharType[4].addEventListener('click' , function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("charSkill")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
	});
	
	filterCharType[5].addEventListener('click' , function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("charUtility")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
	});
});