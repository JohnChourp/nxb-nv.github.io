function sortImageChange(n){
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

function charRank(){
	for(let i = 0; i < 106; i ++){
		switch(document.getElementsByClassName("charAwaken").item(i).alt){
			case "7 Star":
				document.getElementsByClassName("charAwaken").item(i).src = "https://lh3.googleusercontent.com/pw/AM-JKLXfSU0Ql6Gm4kKA0E9I_3IoHD3OAGn8Lc4ngdrCFSpxzxnGIQcTnqTGsi9zIGenh7jXxFGp0Cuajca6Kn3iTCsn9yR5j7J_DHXSkjth9Sp-9srEK582O0WBxUyXBe7N2dNkuEWxT4yJzDGwwIc_pr5F=w336-h48-no?authuser=0";
				break;
			case "6 Star":
				document.getElementsByClassName("charAwaken").item(i).src = "https://lh3.googleusercontent.com/pw/AM-JKLWf4-Vxbiy4TQ1PTUiAY4GUVjvu1nWA--0_Ng0BgXsOoGByaNQrj0Sdx63xLNMY8c1Et9ExbhR_6Nmc8lbAfB8GYpY2Pl86zgFE-JBstVhrK84w41iipQzKGV0pacuM0LVuV58aPGXr_st8UgNBsUBe=w286-h47-no?authuser=0";
				break;
		}
	}
}
