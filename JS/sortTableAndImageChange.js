function sortTableAndImageChange(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  var ImageId_Id = document.getElementById('getImageId');
  var ImageName_Id = document.getElementById('getImageName');
  var ImageType_Id = document.getElementById('getImageType');
  var ImageAbilities_Id = document.getElementById('getImageAbilities');
  var AwakeningLevel_Id = document.getElementById('getImageAwakeningLevel');
  var Trait1_Id = document.getElementById('getImageTrait1');
  var Trait2_Id = document.getElementById('getImageTrait2');
  var Trait3_Id = document.getElementById('getImageTrait3');
  var Trait4_Id = document.getElementById('getImageTrait4');
  var Trait5_Id = document.getElementById('getImageTrait5');

  if (ImageId_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n == 0) {
    ImageId_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
  }else{
    ImageId_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
  }

  if (ImageName_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n == 2) {
    ImageName_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
  }else{
    ImageName_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
  }

  if (ImageType_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n == 3) {
    ImageType_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
  }else{
    ImageType_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
  }

  if (ImageAbilities_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n == 4) {
    ImageAbilities_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
  }else{
    ImageAbilities_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
  }

  if (AwakeningLevel_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n == 5) {
    AwakeningLevel_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
  }else{
    AwakeningLevel_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
  }

  if (Trait1_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n == 6) {
    Trait1_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
  }else{
    Trait1_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
  }

  if (Trait2_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n == 7) {
    Trait2_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
  }else{
    Trait2_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
  }

  if (Trait3_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n == 8) {
    Trait3_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
  }else{
    Trait3_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
  }

  if (Trait4_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n == 9) {
    Trait4_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
  }else{
    Trait4_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
  }

  if (Trait5_Id.src.match("https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080") && n == 10) {
    Trait5_Id.src = "https://lh3.googleusercontent.com/p9GFQ812NpxkSCylSu8crEjTrxfbKGQBHkMLQ2_9Eu-awzYzIovS7hxb9bmqkQ2OqiNyD-C9hxzgZ61NcI1RDSKT52D97Jw_QYOGDEyWXSES80xHS5qKe7zii5SKK0JyyLWr8BrE-Q=w1920-h1080";
  }else{
    Trait5_Id.src = "https://lh3.googleusercontent.com/e9rxI7SLVSCYSrD1DhIbyZl2_8_CAsyg4-KniarzjEab3tVlmfKOcUQTAf3bclvLLFYjgx5XW-2bL06Xn2BxZuRH9JplNnYNJpup8SsHNRzIVzhgeqWGy_YBcBihpNHrexhUCMpF6g=w1920-h1080";
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
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
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
      switchcount ++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
