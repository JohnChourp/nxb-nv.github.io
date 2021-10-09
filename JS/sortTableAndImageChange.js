function sortTableAndImageChange(n) {
	let table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
	const ImageId_Id = document.getElementById('getImageId');
	const ImageName_Id = document.getElementById('getImageName');
	const ImageType_Id = document.getElementById('getImageType');
	const ImageAbilities_Id = document.getElementById('getImageAbilities');
	const AwakeningLevel_Id = document.getElementById('getImageAwakeningLevel');
	
	if (ImageId_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 0) {
		ImageId_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		ImageId_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (ImageName_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 2) {
		ImageName_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		ImageName_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (ImageType_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 3) {
		ImageType_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		ImageType_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (ImageAbilities_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 4) {
		ImageAbilities_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		ImageAbilities_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (AwakeningLevel_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 5) {
		AwakeningLevel_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		AwakeningLevel_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	table = document.getElementById("myTable");
	switching = true;
	//Set the sorting direction to ascending:
	dir = "asc";
	/*Make a loop that will continue until
	 no switching has been done:*/
	while (switching) {
		//start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/*Loop through all table rows (except the
		 first, which contains table headers):*/
		for (i = 1; i < (rows.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			 one from current row and one from the next:*/
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			/*check if the two rows should switch place,
			 based on the direction, asc or desc:*/
			if (dir === "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch= true;
					break;
				}
			} else if (dir === "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/*If a switch has been marked, make the switch
			 and mark that a switch has been done:*/
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			//Each time a switch is done, increase this count by 1:
			switchCount ++;
		} else {
			/*If no switching has been done AND the direction is "asc",
			 set the direction to "desc" and run the while loop again.*/
			if (switchCount === 0 && dir === "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}
