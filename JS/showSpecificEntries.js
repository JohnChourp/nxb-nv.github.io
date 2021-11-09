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
	deletePaginator();
	createPaginator(10);
}

function loadEntries25(){
	deletePaginator();
	createPaginator(25);
}

function loadEntries50(){
	deletePaginator();
	createPaginator(50);
}

function loadEntries100(){
	deletePaginator();
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

