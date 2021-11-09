// Close the dropdown if the user clicks outside of it
window.onclick = function(event){
	if(!event.target.matches('.btnShowEntries')){
		let dropdowns = document.getElementsByClassName("dropContentEntries");
		let i;
		for(i = 0; i < dropdowns.length; i ++){
			let openDropdown = dropdowns[i];
			if(openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}

function loadEntries10(){
	let numberOfEntries = parseInt(localStorage.getItem("numberOfEntries"));
	
	if(numberOfEntries === 10){
		deletePaginator10();
	}
	if(numberOfEntries === 25){
		deletePaginator25();
	}
	if(numberOfEntries === 50){
		deletePaginator50();
	}
	if(numberOfEntries === 100){
		deletePaginator100();
	}
	
	createPaginator(10);
}

function loadEntries25(){
	let numberOfEntries = parseInt(localStorage.getItem("numberOfEntries"));
	
	if(numberOfEntries === 10){
		deletePaginator10();
	}
	if(numberOfEntries === 25){
		deletePaginator25();
	}
	if(numberOfEntries === 50){
		deletePaginator50();
	}
	if(numberOfEntries === 100){
		deletePaginator100();
	}
	
	createPaginator(25);
}

function loadEntries50(){
	let numberOfEntries = parseInt(localStorage.getItem("numberOfEntries"));
	
	if(numberOfEntries === 10){
		deletePaginator10();
	}
	if(numberOfEntries === 25){
		deletePaginator25();
	}
	if(numberOfEntries === 50){
		deletePaginator50();
	}
	if(numberOfEntries === 100){
		deletePaginator100();
	}
	
	createPaginator(50);
}

function loadEntries100(){
	let numberOfEntries = parseInt(localStorage.getItem("numberOfEntries"));
	
	if(numberOfEntries === 10){
		deletePaginator10();
	}
	if(numberOfEntries === 25){
		deletePaginator25();
	}
	if(numberOfEntries === 50){
		deletePaginator50();
	}
	if(numberOfEntries === 100){
		deletePaginator100();
	}
	
	createPaginator(100);
}

function showSpecificEntries(){
	document.getElementById("IDDropContentEntries").classList.toggle("show");
	let showEntries = document.getElementById("IDDropContentEntries").children;
	for(let i = 0; i < showEntries.length; i ++){
		showEntries[i].addEventListener('click' , function(){
			showEntries[i].classList.add("dropDownActive");
			for(let j = 0; j < 6; j ++){
				if((showEntries[j].classList.contains("dropDownActive") === showEntries[i].classList.contains("dropDownActive")) && (j !== i)){
					showEntries[j].classList.remove("dropDownActive");
				}
			}
		});
	}
}

