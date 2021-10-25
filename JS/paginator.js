$(window).on('load' , function(){
	let i , table , tr;
	const paginationDiv = document.getElementById("pagination");
	table = document.getElementById("sortTable");
	let tRowsLength = table.rows.length;
	const paginatorLength = Math.ceil(tRowsLength / 10);//paginatorLength = roundup(105/10)= 11
	tr = table.getElementsByTagName("tr");
	
	for(i = tRowsLength - 1; i > 10; i --){
		tr[i].style.display = "none";
	}
	
	const aPrevious = document.createElement("a");
	aPrevious.href = "#";
	aPrevious.innerHTML = "Previous";
	paginationDiv.appendChild(aPrevious);
	
	for(i = 0; i < paginatorLength; i ++){
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
	
	let pagination = document.getElementById("pagination").children;
	
	pagination[0].addEventListener('click' , function(){
		
		for(let i = 2; i < paginatorLength + 1; i ++){
			
			if(pagination[i].className === "active"){
				pagination[i - 1].className = "active";
				pagination[i].className = "";
				
				for(let i = tRowsLength - 1; i > 0; i --){
					tr[i].style.display = "none";
				}
				
				if((i - 1) < paginatorLength + 1){
					let sum = (((i - 1) - 1) * 10);
					for(let i = sum + 1; i < sum + 11; i ++){
						tr[i].style.display = "";
					}
				}
			}
		}
		
	});
	
	for(let i = 1; i < paginatorLength + 1; i ++){
		pagination[i].addEventListener('click' , function(){
			if(pagination[i].className !== "active"){
				pagination[i].className = "active";
			}
			
			for(let j = 1; j < paginatorLength + 1; j ++){
				if((pagination[j].className === pagination[i].className) && (j !== i)){
					pagination[j].className = "";
				}
			}
			
			for(let i = tRowsLength - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			if(i < paginatorLength + 1){
				let sum = ((i - 1) * 10);
				for(let i = sum + 1; i < sum + 11; i ++){
					tr[i].style.display = "";
				}
			}
		});
	}
	
	pagination[12].addEventListener('click' , function(){
		
		for(let i = paginatorLength - 1; i > 0; i --){
			
			if(pagination[i].className === "active"){
				pagination[i + 1].className = "active";
				pagination[i].className = "";
				
				for(let i = tRowsLength - 1; i > 0; i --){
					tr[i].style.display = "none";
				}
				
				if((i + 1) < paginatorLength + 1){
					let sum = (((i + 1) - 1) * 10);
					for(let i = sum + 1; i < sum + 11; i ++){
						tr[i].style.display = "";
					}
				}
			}
		}
		
	});
});