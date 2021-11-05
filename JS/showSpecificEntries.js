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
	
	let showSpecificEntries = document.getElementById("myDropdown").children;
	
	for(let i = 0; i < showSpecificEntries.length; i ++){
		showSpecificEntries[i].addEventListener('click' , function(){
			showSpecificEntries[i].classList.add("dropDownActive");
			for(let j = 0; j < 6; j ++){
				if((showSpecificEntries[j].classList.contains("dropDownActive") === showSpecificEntries[i].classList.contains("dropDownActive")) && (j !== i)){
					showSpecificEntries[j].classList.remove("dropDownActive");
				}
			}
		});
		
		showSpecificEntries[0].addEventListener('click' , function(){
			localStorage.setItem("numberOfEntries" , "10");
			location.reload();
		});
		
		showSpecificEntries[1].addEventListener('click' , function(){
			localStorage.setItem("numberOfEntries" , "25");
			location.reload();
		});
		
		showSpecificEntries[2].addEventListener('click' , function(){
			localStorage.setItem("numberOfEntries" , "50");
			location.reload();
		});
		
		showSpecificEntries[3].addEventListener('click' , function(){
			localStorage.setItem("numberOfEntries" , "100");
			location.reload();
		});
	}
}



