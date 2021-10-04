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

  if (ImageId_Id.src.match("Photos/sortDownIcon.png") && n == 0) {
    ImageId_Id.src = "Photos/sortUpIcon.png";
  }else{
    ImageId_Id.src = "Photos/sortDownIcon.png";
  }

  if (ImageName_Id.src.match("Photos/sortDownIcon.png") && n == 2) {
    ImageName_Id.src = "Photos/sortUpIcon.png";
  }else{
    ImageName_Id.src = "Photos/sortDownIcon.png";
  }

  if (ImageType_Id.src.match("Photos/sortDownIcon.png") && n == 3) {
    ImageType_Id.src = "Photos/sortUpIcon.png";
  }else{
    ImageType_Id.src = "Photos/sortDownIcon.png";
  }

  if (ImageAbilities_Id.src.match("Photos/sortDownIcon.png") && n == 4) {
    ImageAbilities_Id.src = "Photos/sortUpIcon.png";
  }else{
    ImageAbilities_Id.src = "Photos/sortDownIcon.png";
  }

  if (AwakeningLevel_Id.src.match("Photos/sortDownIcon.png") && n == 5) {
    AwakeningLevel_Id.src = "Photos/sortUpIcon.png";
  }else{
    AwakeningLevel_Id.src = "Photos/sortDownIcon.png";
  }

  if (Trait1_Id.src.match("Photos/sortDownIcon.png") && n == 6) {
    Trait1_Id.src = "Photos/sortUpIcon.png";
  }else{
    Trait1_Id.src = "Photos/sortDownIcon.png";
  }

  if (Trait2_Id.src.match("Photos/sortDownIcon.png") && n == 7) {
    Trait2_Id.src = "Photos/sortUpIcon.png";
  }else{
    Trait2_Id.src = "Photos/sortDownIcon.png";
  }

  if (Trait3_Id.src.match("Photos/sortDownIcon.png") && n == 8) {
    Trait3_Id.src = "Photos/sortUpIcon.png";
  }else{
    Trait3_Id.src = "Photos/sortDownIcon.png";
  }

  if (Trait4_Id.src.match("Photos/sortDownIcon.png") && n == 9) {
    Trait4_Id.src = "Photos/sortUpIcon.png";
  }else{
    Trait4_Id.src = "Photos/sortDownIcon.png";
  }

  if (Trait5_Id.src.match("Photos/sortDownIcon.png") && n == 10) {
    Trait5_Id.src = "Photos/sortUpIcon.png";
  }else{
    Trait5_Id.src = "Photos/sortDownIcon.png";
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
