function createSpecificEntries(){
	const entriesDiv = document.getElementById("entries");
	
	const btnEntries = document.createElement("button");
	btnEntries.className = "btnEntries";
	btnEntries.onclick = function(){
		specificEntries();
	}
	btnEntries.innerHTML = "Show Number of Entries";
	entriesDiv.appendChild(btnEntries);
	
	const entriesContentDiv = document.createElement("div");
	entriesContentDiv.className = "contentEntries";
	entriesDiv.appendChild(entriesContentDiv);
	
	const entriesContentDivDiv = document.getElementsByClassName("contentEntries").item(0);
	
	const a10 = document.createElement("a");
	a10.href = "#";
	a10.onclick = function(){
		deletePaginator();
		createPaginator(10);
	}
	a10.innerHTML = "10";
	entriesContentDivDiv.appendChild(a10);
	
	const a25 = document.createElement("a");
	a25.href = "#";
	a25.onclick = function(){
		deletePaginator();
		createPaginator(25);
	}
	a25.innerHTML = "25";
	entriesContentDivDiv.appendChild(a25);
	
	const a50 = document.createElement("a");
	a50.href = "#";
	a50.onclick = function(){
		deletePaginator();
		createPaginator(50);
	}
	a50.innerHTML = "50";
	entriesContentDivDiv.appendChild(a50);
	
	const a100 = document.createElement("a");
	a100.href = "#";
	a100.onclick = function(){
		deletePaginator();
		createPaginator(100);
	}
	a100.innerHTML = "100";
	entriesContentDivDiv.appendChild(a100);
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

