function hideContentFilterType(){
	let contentFilterType = document.getElementsByClassName("contentFilterType");
	for(let i = 0; i < contentFilterType.length; i ++){
		if(contentFilterType[i].classList.contains('showFilterType')){
			contentFilterType[i].classList.remove('showFilterType');
		}else{
			contentFilterType[i].classList.add('showFilterType');
		}
	}
}

function createFilterType(){
	let table = document.getElementById("sortTable");
	let tRowsLength = table.rows.length;
	let tr = table.getElementsByTagName("tr");
	
	const filterTypeDiv = document.getElementById("filterType");
	
	const btnFilterType = document.createElement("button");
	btnFilterType.className = "btnFilterType";
	btnFilterType.onclick = function(){
		filterType();
	}
	btnFilterType.innerHTML = "Type";
	filterTypeDiv.appendChild(btnFilterType);
	
	const filterTypeContentDiv = document.createElement("div");
	filterTypeContentDiv.className = "contentFilterType";
	filterTypeDiv.appendChild(filterTypeContentDiv);
	
	const filterTypeContentDivDiv = document.getElementsByClassName("contentFilterType").item(0);
	
	const aShowAll = document.createElement("a");
	aShowAll.href = "#";
	aShowAll.onclick = function(){
		for(let i = 0; i < tRowsLength; i ++){
			tr[i].style.display = "";
		}
		hideContentFilterType();
	}
	aShowAll.innerHTML = "Show All";
	filterTypeContentDivDiv.appendChild(aShowAll);
	
	const aAttack = document.createElement("a");
	aAttack.href = "#";
	aAttack.onclick = function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("attack") || tr[i].cells[4].classList.contains("attack")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
		hideContentFilterType();
	}
	aAttack.innerHTML = "Attack";
	filterTypeContentDivDiv.appendChild(aAttack);
	
	const aAssist = document.createElement("a");
	aAssist.href = "#";
	aAssist.onclick = function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("assist") || tr[i].cells[4].classList.contains("assist")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
		hideContentFilterType();
	}
	aAssist.innerHTML = "Assist";
	filterTypeContentDivDiv.appendChild(aAssist);
	
	const aDefense = document.createElement("a");
	aDefense.href = "#";
	aDefense.onclick = function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("defense") || tr[i].cells[4].classList.contains("defense")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
		hideContentFilterType();
	}
	aDefense.innerHTML = "Defense";
	filterTypeContentDivDiv.appendChild(aDefense);
	
	const aSkill = document.createElement("a");
	aSkill.href = "#";
	aSkill.onclick = function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("skill") || tr[i].cells[4].classList.contains("skill")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
		hideContentFilterType();
	}
	aSkill.innerHTML = "Skill";
	filterTypeContentDivDiv.appendChild(aSkill);
	
	const aUtility = document.createElement("a");
	aUtility.href = "#";
	aUtility.onclick = function(){
		for(let i = 0; i < tRowsLength; i ++){
			if(tr[i].cells[3].classList.contains("utility") || tr[i].cells[4].classList.contains("utility")){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
		tr[0].style.display = "";
		hideContentFilterType();
	}
	aUtility.innerHTML = "Utility";
	filterTypeContentDivDiv.appendChild(aUtility);
}

function filterType(){
	document.getElementsByClassName("contentFilterType").item(0).classList.toggle("showFilterType");
	let filterType = document.getElementsByClassName("contentFilterType").item(0).children;
	for(let i = 0; i < filterType.length; i ++){
		filterType[i].addEventListener('click' , function(){
			filterType[i].classList.add("filterTypeActive");
			for(let j = 0; j < filterType.length; j ++){
				if((filterType[j].classList.contains("filterTypeActive") === filterType[i].classList.contains("filterTypeActive")) && (j !== i)){
					filterType[j].classList.remove("filterTypeActive");
				}
			}
		});
	}
}

