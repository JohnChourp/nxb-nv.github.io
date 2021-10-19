function sortCharactersInfo(n){
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
	
	if(ImageId.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 0){
		ImageId.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		ImageId.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(NameId_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 2){
		NameId_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		NameId_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(CategoryId_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 3){
		CategoryId_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		CategoryId_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(Status_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 4){
		Status_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		Status_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(JutsuNature_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 5){
		JutsuNature_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		JutsuNature_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(AwakeningRank_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 6){
		AwakeningRank_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		AwakeningRank_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(CPCost_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 8){
		CPCost_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		CPCost_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(CRI_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 9){
		CRI_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		CRI_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(POW_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 10){
		POW_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		POW_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(RT_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 11){
		RT_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		RT_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
}
