// Close the dropdown if the user clicks outside of it
window.onclick = function(event){
	if(!event.target.matches('.btnShowSpecificEntries')){
		let dropdowns = document.getElementsByClassName("dropdownContentEntries");
		let i;
		for(i = 0; i < dropdowns.length; i ++){
			let openDropdown = dropdowns[i];
			if(openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}

function showSpecificEntries(){
	document.getElementById("myDropdown").classList.toggle("show");
}



