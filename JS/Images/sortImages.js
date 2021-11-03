function placeSortImages(){
	let sortIconItemLength = document.getElementsByClassName("sortIcon");
	
	for(let i = 0; i < sortIconItemLength.length; i ++){
		switch(document.getElementsByClassName("sortIcon").item(i).alt){
			case "SortDown":
				document.getElementsByClassName("sortIcon").item(i).src = "https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0";
				break;
		}
	}
}

function sortImages(n){
	switch(document.getElementsByClassName("sortIcon").item(n).alt){
		case "SortDown":
			document.getElementsByClassName("sortIcon").item(n).src = "https://lh3.googleusercontent.com/pw/AM-JKLXRCRgL1CibZL1HM-k9vfQt4vh33Gteo0aMduz5vKBJjjkyawW3zktOS6t2cffmYhJdew7Quazpm7OchbWecudNNDslVZZ7g7qdQKgetXOxiwkjBlbZN3R3HW2Xth9LLgNEPjKDBnmY5DihrUU8-oeZ=w58-h59-no?authuser=0";
			document.getElementsByClassName("sortIcon").item(n).alt = "SortUp";
			break;
		case "SortUp":
			document.getElementsByClassName("sortIcon").item(n).src = "https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0";
			document.getElementsByClassName("sortIcon").item(n).alt = "SortDown";
			break;
	}
}
