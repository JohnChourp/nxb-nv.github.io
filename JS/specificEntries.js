function createSpecificEntries(){

}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event){
	if(!event.target.matches('.btnEntries')){
		let dropdowns = document.getElementsByClassName("contentEntries");
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
	paginator(10);
}

function loadEntries25(){
	deletePaginator();
	paginator(25);
}

function loadEntries50(){
	deletePaginator();
	paginator(50);
}

function loadEntries100(){
	deletePaginator();
	paginator(100);
}

function specificEntries(){
	document.getElementsByClassName("contentEntries").item(0).classList.toggle("show");
	let showEntries = document.getElementsByClassName("contentEntries").item(0).children;
	for(let i = 0; i < showEntries.length; i ++){
		showEntries[i].addEventListener('click' , function(){
			showEntries[i].classList.add("entriesActive");
			for(let j = 0; j < showEntries.length; j ++){
				if((showEntries[j].classList.contains("entriesActive") === showEntries[i].classList.contains("entriesActive")) && (j !== i)){
					showEntries[j].classList.remove("entriesActive");
				}
			}
		});
	}
}

