$(window).on('load' , function(){
	let paginatorLength;
	const paginationDiv = document.getElementById("pagination");
	let table = document.getElementById("sortTable");
	let tRowsLength = table.rows.length;//106
	
	let numberOfEntries = parseInt(localStorage.getItem("numberOfEntries"));
	if(!Number.isInteger(numberOfEntries)){
		numberOfEntries = 10;
		paginatorLength = Math.ceil(tRowsLength / numberOfEntries);
	}else{
		paginatorLength = Math.ceil(tRowsLength / numberOfEntries);
	}
	
	let tr = table.getElementsByTagName("tr");
	
	for(let i = tRowsLength - 1; i > numberOfEntries; i --){
		tr[i].style.display = "none";
	}
	
	const aPrevious = document.createElement("a");
	aPrevious.href = "#";
	aPrevious.innerHTML = "Previous";
	paginationDiv.appendChild(aPrevious);
	
	for(let i = 0; i < paginatorLength; i ++){
		if(i === 0){
			const a = document.createElement("a");
			a.href = "#";
			a.innerHTML = eval("i+1");
			a.className = "active";
			paginationDiv.appendChild(a);
		}else{
			const a = document.createElement("a");
			a.href = "#";
			a.innerHTML = eval("i+1");
			paginationDiv.appendChild(a);
		}
	}
	
	const aNext = document.createElement("a");
	aNext.href = "#";
	aNext.innerHTML = "Next";
	paginationDiv.appendChild(aNext);
	
	const aResults = document.createElement("a");
	aResults.href = "#";
	aResults.innerHTML = "Showing 1 to " + numberOfEntries + " of " + ((tRowsLength - 1)) + " entries";
	paginationDiv.appendChild(aResults);
	
	let pagination = document.getElementById("pagination").children;
	
	pagination[0].addEventListener('click' , function(){
		for(let i = 2; i < paginatorLength + 1; i ++){
			if(pagination[i].className === "active"){
				pagination[i - 1].className = "active";
				pagination[i].className = "";
				
				for(let i = tRowsLength - 1; i > 0; i --){
					tr[i].style.display = "none";
				}
				
				let sum = ((i - 2) * numberOfEntries);
				for(let i = sum + 1; i < sum + (numberOfEntries + 1); i ++){
					tr[i].style.display = "";
				}
				if(i === 2){
					pagination[paginatorLength + 2].innerHTML = "Showing " + (i - 1) + " to " + ((i - 1) * numberOfEntries) + " of " + (tRowsLength - 1) + " entries";
				}
				if(i > 2 && i <= paginatorLength){
					pagination[paginatorLength + 2].innerHTML = "Showing " + (((i - 2) * numberOfEntries) + 1) + " to " + ((i - 1) * numberOfEntries) + " of " + (tRowsLength - 1) + " entries";
				}
			}
		}
	});
	
	for(let i = 1; i < paginatorLength + 1; i ++){
		pagination[i].addEventListener('click' , function(){
			if(pagination[i].className !== "active"){
				pagination[i].className = "active";
			}
			
			if(pagination[i].className === "active"){
				if(i === 1){
					pagination[paginatorLength + 2].innerHTML = "Showing " + i + " to " + (numberOfEntries * i) + " of " + (tRowsLength - 1) + " entries";
				}
				if(i > 1 && i < paginatorLength){
					pagination[paginatorLength + 2].innerHTML = "Showing " + ((numberOfEntries * (i - 1)) + 1) + " to " + (numberOfEntries * i) + " of " + (tRowsLength - 1) + " entries";
				}
				if(i === paginatorLength){
					pagination[paginatorLength + 2].innerHTML = "Showing " + ((numberOfEntries * (i - 1)) + 1) + " to " + (tRowsLength - 1) + " of " + (tRowsLength - 1) + " entries";
				}
			}
			
			for(let j = 1; j < paginatorLength + 1; j ++){
				if((pagination[j].className === pagination[i].className) && (j !== i)){
					pagination[j].className = "";
				}
			}
			
			for(let i = tRowsLength - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			let sum = ((i - 1) * numberOfEntries);
			for(let i = sum + 1; i < sum + (numberOfEntries + 1); i ++){
				tr[i].style.display = "";
			}
		});
	}
	
	pagination[paginatorLength + 1].addEventListener('click' , function(){
		for(let i = paginatorLength; i > 0; i --){
			if(pagination[i].className === "active"){
				if(i < paginatorLength){
					pagination[i + 1].className = "active";
					pagination[i].className = "";
					
					for(let i = tRowsLength - 1; i > 0; i --){
						tr[i].style.display = "none";
					}
					
					let sum = i * numberOfEntries;
					for(let i = sum + 1; i < sum + (numberOfEntries + 1); i ++){
						tr[i].style.display = "";
					}
					if(i > 0 && i < paginatorLength - 1){
						pagination[paginatorLength + 2].innerHTML = "Showing " + ((i * numberOfEntries) + 1) + " to " + ((i + 1) * numberOfEntries) + " of " + (tRowsLength - 1) + " entries";
					}
				}
			}
			if(i === paginatorLength){
				pagination[paginatorLength + 2].innerHTML = "Showing " + (((i - 1) * numberOfEntries) + 1) + " to " + (tRowsLength - 1) + " of " + (tRowsLength - 1) + " entries";
			}
		}
	});
});