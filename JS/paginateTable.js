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
	
	pagination[0].addEventListener('click' , function(){
		if(pagination[0].className !== "active"){
			pagination[0].className = "active";
			
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 1; i < 11; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[1].addEventListener('click' , function(){
		if(pagination[1].className !== "active"){
			pagination[1].className = "active";
			
			pagination[0].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 1; i < 11; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[2].addEventListener('click' , function(){
		if(pagination[2].className !== "active"){
			pagination[2].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 11; i < 21; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[3].addEventListener('click' , function(){
		if(pagination[3].className !== "active"){
			pagination[3].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 21; i < 31; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[4].addEventListener('click' , function(){
		if(pagination[4].className !== "active"){
			pagination[4].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 31; i < 41; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[5].addEventListener('click' , function(){
		if(pagination[5].className !== "active"){
			pagination[5].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 41; i < 51; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[6].addEventListener('click' , function(){
		if(pagination[6].className !== "active"){
			pagination[6].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 51; i < 61; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[7].addEventListener('click' , function(){
		if(pagination[7].className !== "active"){
			pagination[7].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 61; i < 71; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[8].addEventListener('click' , function(){
		if(pagination[8].className !== "active"){
			pagination[8].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 71; i < 81; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[9].addEventListener('click' , function(){
		if(pagination[9].className !== "active"){
			pagination[9].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 81; i < 91; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[10].addEventListener('click' , function(){
		if(pagination[10].className !== "active"){
			pagination[10].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[11].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 91; i < 101; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[11].addEventListener('click' , function(){
		if(pagination[11].className !== "active"){
			pagination[11].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[12].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 101; i < 106; i ++){
				tr[i].style.display = "";
			}
		}
	});
	
	pagination[12].addEventListener('click' , function(){
		if(pagination[12].className !== "active"){
			pagination[12].className = "active";
			
			pagination[0].className = "";
			pagination[1].className = "";
			pagination[2].className = "";
			pagination[3].className = "";
			pagination[4].className = "";
			pagination[5].className = "";
			pagination[6].className = "";
			pagination[7].className = "";
			pagination[8].className = "";
			pagination[9].className = "";
			pagination[10].className = "";
			pagination[11].className = "";
			
			for(i = table.rows.length - 1; i > 0; i --){
				tr[i].style.display = "none";
			}
			
			for(i = 101; i < 106; i ++){
				tr[i].style.display = "";
			}
		}
	});
});