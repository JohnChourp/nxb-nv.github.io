function createPaginator(n){
	const paginationDiv = document.getElementById("paginator");
	let table = document.getElementById("sortTable");
	let tRowsLength = table.rows.length;
	let paginatorLength = Math.ceil(tRowsLength / n);
	let tr = table.getElementsByTagName("tr");
	
	for(let i = tRowsLength - 1; i > n; i --){
		tr[i].style.display = "none";
	}
	
	for(let i = 1; i < (n + 1); i ++){
		tr[i].style.display = "";
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
	aResults.innerHTML = "Showing 1 to " + n + " of " + ((tRowsLength - 1)) + " entries";
	paginationDiv.appendChild(aResults);
}

function paginator(n){
	createPaginator(n);
	let table = document.getElementById("sortTable");
	let tRowsLength = table.rows.length;
	let paginatorLength = Math.ceil(tRowsLength / n);
	let tr = table.getElementsByTagName("tr");
	
	let pagination = document.getElementById("paginator").children;
	
	pagination[0].addEventListener('click' , function(){
		for(let i = 2; i < paginatorLength + 1; i ++){
			if(pagination[i].className === "active"){
				pagination[i - 1].className = "active";
				pagination[i].className = "";
				
				for(let i = tRowsLength - 1; i > 0; i --){
					tr[i].style.display = "none";
				}
				
				let sum = ((i - 2) * n);
				for(let i = sum + 1; i < sum + (n + 1); i ++){
					tr[i].style.display = "";
				}
				if(i === 2){
					pagination[paginatorLength + 2].innerHTML = "Showing " + (i - 1) + " to " + ((i - 1) * n) + " of " + (tRowsLength - 1) + " entries";
				}
				if(i > 2 && i <= paginatorLength){
					pagination[paginatorLength + 2].innerHTML = "Showing " + (((i - 2) * n) + 1) + " to " + ((i - 1) * n) + " of " + (tRowsLength - 1) + " entries";
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
					pagination[paginatorLength + 2].innerHTML = "Showing " + i + " to " + (n * i) + " of " + (tRowsLength - 1) + " entries";
				}
				if(i > 1 && i < paginatorLength){
					pagination[paginatorLength + 2].innerHTML = "Showing " + ((n * (i - 1)) + 1) + " to " + (n * i) + " of " + (tRowsLength - 1) + " entries";
				}
				if(i === paginatorLength){
					pagination[paginatorLength + 2].innerHTML = "Showing " + ((n * (i - 1)) + 1) + " to " + (tRowsLength - 1) + " of " + (tRowsLength - 1) + " entries";
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
			
			let sum = ((i - 1) * n);
			for(let i = sum + 1; i < sum + (n + 1); i ++){
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
					
					let sum = i * n;
					for(let i = sum + 1; i < sum + (n + 1); i ++){
						tr[i].style.display = "";
					}
					if(i > 0 && i < paginatorLength - 1){
						pagination[paginatorLength + 2].innerHTML = "Showing " + ((i * n) + 1) + " to " + ((i + 1) * n) + " of " + (tRowsLength - 1) + " entries";
					}
				}
			}
			if(i === paginatorLength){
				pagination[paginatorLength + 2].innerHTML = "Showing " + (((i - 1) * n) + 1) + " to " + (tRowsLength - 1) + " of " + (tRowsLength - 1) + " entries";
			}
		}
	});
	for(let i = 0; i < paginatorLength + 3; i ++){
		document.getElementById("paginator").children.item(i).style.color = localStorage.getItem("paginationTextColor");
	}
}

function deletePaginator(){
	const paginationDiv = document.getElementById("paginator");
	const length = document.getElementById("paginator").children.length;
	const lengthDiff = document.getElementsByTagName("a").length - document.getElementById("paginator").children.length;
	
	const aResults = document.getElementsByTagName("a").item((length - 1) + lengthDiff);
	paginationDiv.removeChild(aResults);
	const aNext = document.getElementsByTagName("a").item((length - 2) + lengthDiff);
	paginationDiv.removeChild(aNext);
	
	for(let i = ((length - 3) + lengthDiff); i > lengthDiff; i --){
		const a = document.getElementsByTagName("a").item(i);
		paginationDiv.removeChild(a);
	}
	
	const aPrevious = document.getElementsByTagName("a").item(lengthDiff);
	paginationDiv.removeChild(aPrevious);
}