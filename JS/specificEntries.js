function hideContentSpecificEntries(){
	let contentEntries = document.getElementsByClassName("contentEntries");
	for(let i = 0; i < contentEntries.length; i ++){
		if(contentEntries[i].classList.contains('showEntries')){
			contentEntries[i].classList.remove('showEntries');
		}else{
			contentEntries[i].classList.add('showEntries');
		}
	}
}

function createSpecificEntries(){
	const entriesDiv = document.getElementById("entries");
	
	const btnEntries = document.createElement("button");
	btnEntries.className = "btnEntries";
	btnEntries.onclick = function(){
		specificEntries();
	}
	btnEntries.innerHTML = "Number Entries";
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
		hideContentSpecificEntries();
	}
	a10.innerHTML = "10";
	entriesContentDivDiv.appendChild(a10);
	
	const a25 = document.createElement("a");
	a25.href = "#";
	a25.onclick = function(){
		deletePaginator();
		createPaginator(25);
		hideContentSpecificEntries();
	}
	a25.innerHTML = "25";
	entriesContentDivDiv.appendChild(a25);
	
	const a50 = document.createElement("a");
	a50.href = "#";
	a50.onclick = function(){
		deletePaginator();
		createPaginator(50);
		hideContentSpecificEntries();
	}
	a50.innerHTML = "50";
	entriesContentDivDiv.appendChild(a50);
	
	const a100 = document.createElement("a");
	a100.href = "#";
	a100.onclick = function(){
		deletePaginator();
		createPaginator(100);
		hideContentSpecificEntries();
	}
	a100.innerHTML = "100";
	entriesContentDivDiv.appendChild(a100);
}

function specificEntries(){
	document.getElementsByClassName("contentEntries").item(0).classList.toggle("showEntries");
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

