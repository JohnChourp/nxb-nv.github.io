$(window).on('load' , function(){
	let i;
	let table , tr;
	const paginationDiv = document.getElementById("pagination");
	table = document.getElementById("sortTable");
	const paginatorLength = Math.ceil(table.rows.length / 10);
	tr = table.getElementsByTagName("tr");
	
	for(i = table.rows.length - 1; i > 10; i --){
		tr[i].style.display = "none";
	}
	
	const aStart = document.createElement("a");
	aStart.href = "#";
	aStart.innerHTML = "&laquo;";
	paginationDiv.appendChild(aStart);
	
	for(i = 0; i < paginatorLength; i ++){
		if(i === 0){
			const a = document.createElement("a");
			a.href = "#";
			a.innerHTML = "1";
			a.className = "active";
			paginationDiv.appendChild(a);
		}else{
			const a = document.createElement("a");
			a.href = "#";
			a.innerHTML = eval("i+1");
			paginationDiv.appendChild(a);
		}
	}
	
	const aEnd = document.createElement("a");
	aEnd.href = "#";
	aEnd.innerHTML = "&raquo;";
	paginationDiv.appendChild(aEnd);
	
	let pagination = document.getElementById("pagination").children;
	
	for(let i = 0; i < 13; i ++){
		pagination[i].addEventListener('click' , function(){
			if(pagination[i].className !== "active"){
				pagination[i].className = "active";
			}
			
			for(let j = 0; j < 13; j ++){
				if((pagination[j].className === pagination[i].className) && (j !== i)){
					pagination[j].className = "";
				}
			}
			
			for(let i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			if(i === 0 || i === 1){
				for(let i = 1; i < 11; i ++){
					tr[i].style.display = "";
				}
			}else if(i === 11 || i === 12){
				for(let i = 101; i < 106; i ++){
					tr[i].style.display = "";
				}
			}else if(i > 1 || i < 11){
				let sum = ((i-2)*10);
				for(let i = sum+11; i < sum+21; i ++){
					tr[i].style.display = "";
				}
			}
		});
	}
});