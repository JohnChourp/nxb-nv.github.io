function sortImages(n){
	const ImageId_Id = document.getElementById('getImageId');
	const ImageName_Id = document.getElementById('getImageName');
	const ImageType_Id = document.getElementById('getImageType');
	const ImageAbilities_Id = document.getElementById('getImageAbilities');
	const Rank_Id = document.getElementById('getImageRank');
	
	if(ImageId_Id.src.match("https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0") && n === 0){
		ImageId_Id.src = "https://lh3.googleusercontent.com/pw/AM-JKLXRCRgL1CibZL1HM-k9vfQt4vh33Gteo0aMduz5vKBJjjkyawW3zktOS6t2cffmYhJdew7Quazpm7OchbWecudNNDslVZZ7g7qdQKgetXOxiwkjBlbZN3R3HW2Xth9LLgNEPjKDBnmY5DihrUU8-oeZ=w58-h59-no?authuser=0";
	}else{
		ImageId_Id.src = "https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0";
	}
	
	if(ImageName_Id.src.match("https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0") && n === 2){
		ImageName_Id.src = "https://lh3.googleusercontent.com/pw/AM-JKLXRCRgL1CibZL1HM-k9vfQt4vh33Gteo0aMduz5vKBJjjkyawW3zktOS6t2cffmYhJdew7Quazpm7OchbWecudNNDslVZZ7g7qdQKgetXOxiwkjBlbZN3R3HW2Xth9LLgNEPjKDBnmY5DihrUU8-oeZ=w58-h59-no?authuser=0";
	}else{
		ImageName_Id.src = "https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0";
	}
	
	if(ImageType_Id.src.match("https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0") && n === 3){
		ImageType_Id.src = "https://lh3.googleusercontent.com/pw/AM-JKLXRCRgL1CibZL1HM-k9vfQt4vh33Gteo0aMduz5vKBJjjkyawW3zktOS6t2cffmYhJdew7Quazpm7OchbWecudNNDslVZZ7g7qdQKgetXOxiwkjBlbZN3R3HW2Xth9LLgNEPjKDBnmY5DihrUU8-oeZ=w58-h59-no?authuser=0";
	}else{
		ImageType_Id.src = "https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0";
	}
	
	if(ImageAbilities_Id.src.match("https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0") && n === 4){
		ImageAbilities_Id.src = "https://lh3.googleusercontent.com/pw/AM-JKLXRCRgL1CibZL1HM-k9vfQt4vh33Gteo0aMduz5vKBJjjkyawW3zktOS6t2cffmYhJdew7Quazpm7OchbWecudNNDslVZZ7g7qdQKgetXOxiwkjBlbZN3R3HW2Xth9LLgNEPjKDBnmY5DihrUU8-oeZ=w58-h59-no?authuser=0";
	}else{
		ImageAbilities_Id.src = "https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0";
	}
	
	if(Rank_Id.src.match("https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0") && n === 5){
		Rank_Id.src = "https://lh3.googleusercontent.com/pw/AM-JKLXRCRgL1CibZL1HM-k9vfQt4vh33Gteo0aMduz5vKBJjjkyawW3zktOS6t2cffmYhJdew7Quazpm7OchbWecudNNDslVZZ7g7qdQKgetXOxiwkjBlbZN3R3HW2Xth9LLgNEPjKDBnmY5DihrUU8-oeZ=w58-h59-no?authuser=0";
	}else{
		Rank_Id.src = "https://lh3.googleusercontent.com/pw/AM-JKLUKsUrOYR6fMKi7VeYr22a57KgdEw65eVU-i4TkYyevP-QaoXFySMuEZgsrlvtsUNKkqTROCqdkCia0S4KdE0zAi8nQ4sa1n47llhCpvn58shhyldWte29w5DXzHhYInVidZWaymieer9CNTrtemz1s=w57-h59-no?authuser=0";
	}
}
