function sortTableForCharactersInfo(n) {
	let table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
	const ImageId = document.getElementById('getImageId');
	const NameId_Id = document.getElementById('getImageNameId');
	const CategoryId_Id = document.getElementById('getImageCategoryId');
	const Status_Id = document.getElementById('getImageStatusId');
	const JutsuNature_Id = document.getElementById('getImageJutsuNatureId');
	const AwakeningRank_Id = document.getElementById('getImageAwakeningRankId');
	const CPCost_Id = document.getElementById('getImageCPCostId');
	const CRI_Id = document.getElementById('getImageCRIId');
	const POW_Id = document.getElementById('getImagePOWId');
	const RT_Id = document.getElementById('getImageRTId');
	
	if (ImageId.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 0) {
		ImageId.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		ImageId.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (NameId_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 2) {
		NameId_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		NameId_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (CategoryId_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 3) {
		CategoryId_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		CategoryId_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (Status_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 4) {
		Status_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		Status_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (JutsuNature_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 5) {
		JutsuNature_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		JutsuNature_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (AwakeningRank_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 6) {
		AwakeningRank_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		AwakeningRank_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (CPCost_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 8) {
		CPCost_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		CPCost_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (CRI_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 9) {
		CRI_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		CRI_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (POW_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 10) {
		POW_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		POW_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if (RT_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 11) {
		RT_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		RT_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
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
