function sortCharacterTable(n){
	const ImageId_Id = document.getElementById('getImageId');
	const ImageName_Id = document.getElementById('getImageName');
	const ImageType_Id = document.getElementById('getImageType');
	const ImageAbilities_Id = document.getElementById('getImageAbilities');
	const Rank_Id = document.getElementById('getImageRank');
	
	if(ImageId_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 0){
		ImageId_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		ImageId_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(ImageName_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 2){
		ImageName_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		ImageName_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(ImageType_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 3){
		ImageType_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		ImageType_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(ImageAbilities_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 4){
		ImageAbilities_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		ImageAbilities_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
	
	if(Rank_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n === 5){
		Rank_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
	}else{
		Rank_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
	}
}

function charRank(){
	for(let i = 0; i < 106; i ++){
		switch(document.getElementsByClassName("charAwaken").item(i).alt){
			case "7 Star":
				document.getElementsByClassName("charAwaken").item(i).src = "https://lh3.googleusercontent.com/6MnzcluW9C6CjFzGJ1L_JLVZB9wvEbyu3cfLMoLGOLDzM4kYSxyt9ourb9kqKTUgWyCBq_fOJ78MEyAxjTpiD2nunWBTHb62Wbfjdx5zQpSAIFhfq87HisKeH7SN_YM8GsEKQg0wkA=w1920-h1080";
				break;
			case "6 Star":
				document.getElementsByClassName("charAwaken").item(i).src = "https://lh3.googleusercontent.com/s7P8ETCwxe43zzVBXUpiEmZLmUyiaOgRU9pJBcljYoVB6nMA1Woh21jnjus6nrQ1NKs5VouYtNJRZDrotPTp6JNHooJ7mUwhGF9mEHYXenQTU2eH9yy1Ao2QlDafLCr11U51dxedwQ=w1920-h1080";
				break;
		}
	}
}
