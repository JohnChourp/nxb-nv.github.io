$(window).on('load' , function(){
	const filterCharTypeDiv = document.getElementById("filterCharType");
	
	const btnShowAll = document.createElement("button");
	btnShowAll.className = "btnType";
	btnShowAll.innerHTML = "Show all";
	filterCharTypeDiv.appendChild(btnShowAll);
	
	const btnAttack = document.createElement("button");
	btnAttack.className = "btnType";
	btnAttack.innerHTML = "Attack";
	filterCharTypeDiv.appendChild(btnAttack);
	
	const btnAssist = document.createElement("button");
	btnAssist.className = "btnType";
	btnAssist.innerHTML = "Assist";
	filterCharTypeDiv.appendChild(btnAssist);
	
	const btnDefense = document.createElement("button");
	btnDefense.className = "btnType";
	btnDefense.innerHTML = "Defense";
	filterCharTypeDiv.appendChild(btnDefense);
	
	const btnSkill = document.createElement("button");
	btnSkill.className = "btnType";
	btnSkill.innerHTML = "Skill";
	filterCharTypeDiv.appendChild(btnSkill);
	
	const btnUtility = document.createElement("button");
	btnUtility.className = "btnType";
	btnUtility.innerHTML = "Utility";
	filterCharTypeDiv.appendChild(btnUtility);
	
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
			if(tr[i].cells[3].classList.contains("attack")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
	});
	
	filterCharType[2].addEventListener('click' , function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("assist")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
	});
	
	filterCharType[3].addEventListener('click' , function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("defense")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
	});
	
	filterCharType[4].addEventListener('click' , function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("skill")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
	});
	
	filterCharType[5].addEventListener('click' , function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("utility")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
	});
});