function ninjutsuCheckByLv() {
	let rows = [[]];
	switch ( document.getElementsByClassName ( "cardLevel" ).item(0).innerHTML ) {
		case "Lv 70/70":
			rows[0] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 2 ].cells;
			rows[1] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 4 ].cells;
			rows[2] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 6 ].cells;
			rows[3] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 8 ].cells;
			rows[4] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 10 ].cells;
			rows[5] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 12 ].cells;
			rows[6] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 14 ].cells;
			rows[7] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 16 ].cells;
			
			rows[8] = document.getElementById ( "ninjutsu" ).rows[ 6 ].cells;
			rows[9] = document.getElementById ( "ninjutsu" ).rows[ 7 ].cells;
			
			rows[2][ 1 ].innerHTML = eval ( "parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) )" );
			rows[2][ 3 ].innerHTML = eval ( "parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) )" );
			rows[2][ 5 ].innerHTML = eval ( "parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) )" ) + ".00%";
			rows[2][ 7 ].innerHTML = eval ( "parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) )" );
			
			rows[3][ 1 ].innerHTML = eval ( "parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * 2" );
			rows[3][ 3 ].innerHTML = eval ( "parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * 2" );
			rows[3][ 5 ].innerHTML = eval ( "parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * 2" ) + ".00%";
			rows[3][ 7 ].innerHTML = eval ( "parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * 2" );
			
			rows[4][ 1 ].innerHTML = eval ( "parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * 3" );
			rows[4][ 3 ].innerHTML = eval ( "parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * 3" );
			rows[4][ 5 ].innerHTML = eval ( "parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * 3" ) + ".00%";
			rows[4][ 7 ].innerHTML = eval ( "parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * 3" );
			
			rows[5][ 1 ].innerHTML = eval ( "parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * 4" );
			rows[5][ 3 ].innerHTML = eval ( "parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * 4" );
			rows[5][ 5 ].innerHTML = eval ( "parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * 4" ) + ".00%";
			rows[5][ 7 ].innerHTML = eval ( "parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * 4" );
			
			rows[6][ 1 ].innerHTML = eval ( "parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * 5" );
			rows[6][ 3 ].innerHTML = eval ( "parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * 5" );
			rows[6][ 5 ].innerHTML = eval ( "parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * 5" ) + ".00%";
			rows[6][ 7 ].innerHTML = eval ( "parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * 5" );
			
			rows[7][ 1 ].innerHTML = eval ( "parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * 6" );
			rows[7][ 3 ].innerHTML = eval ( "parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * 6" );
			rows[7][ 5 ].innerHTML = eval ( "parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * 6" ) + ".00%";
			rows[7][ 7 ].innerHTML = eval ( "parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * 6" );
			
			rows[8][ 2 ].innerHTML = rows[7][ 3 ].innerHTML;
			rows[8][ 4 ].innerHTML = rows[7][ 5 ].innerHTML;
			rows[8][ 6 ].innerHTML = rows[7][ 7 ].innerHTML;
			rows[9][ 1 ].innerHTML = rows[7][ 1 ].innerHTML;
			break;
		case "Lv 60/60":
			rows[0] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 2 ].cells;
			rows[1] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 4 ].cells;
			rows[2] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 6 ].cells;
			rows[3] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 8 ].cells;
			rows[4] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 10 ].cells;
			rows[5] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 12 ].cells;
			
			rows[7] = document.getElementById ( "ninjutsu" ).rows[ 6 ].cells;
			rows[8] = document.getElementById ( "ninjutsu" ).rows[ 7 ].cells;
			
			rows[2][ 1 ].innerHTML = eval ( "parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) )" );
			rows[2][ 3 ].innerHTML = eval ( "parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) )" );
			rows[2][ 5 ].innerHTML = eval ( "parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) )" ) + ".00%";
			rows[2][ 7 ].innerHTML = eval ( "parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) )" );
			
			rows[3][ 1 ].innerHTML = eval ( "parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * 2" );
			rows[3][ 3 ].innerHTML = eval ( "parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * 2" );
			rows[3][ 5 ].innerHTML = eval ( "parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * 2" ) + ".00%";
			rows[3][ 7 ].innerHTML = eval ( "parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * 2" );
			
			rows[4][ 1 ].innerHTML = eval ( "parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * 3" );
			rows[4][ 3 ].innerHTML = eval ( "parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * 3" );
			rows[4][ 5 ].innerHTML = eval ( "parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * 3" ) + ".00%";
			rows[4][ 7 ].innerHTML = eval ( "parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * 3" );
			
			rows[5][ 1 ].innerHTML = eval ( "parseInt(rows[1][1].innerHTML) + ( parseInt(rows[1][1].innerHTML) - parseInt(rows[0][1].innerHTML) ) * 4" );
			rows[5][ 3 ].innerHTML = eval ( "parseInt(rows[1][3].innerHTML) + ( parseInt(rows[1][3].innerHTML) - parseInt(rows[0][3].innerHTML) ) * 4" );
			rows[5][ 5 ].innerHTML = eval ( "parseInt(rows[1][5].innerHTML) + ( parseInt(rows[1][5].innerHTML) - parseInt(rows[0][5].innerHTML) ) * 4" ) + ".00%";
			rows[5][ 7 ].innerHTML = eval ( "parseInt(rows[1][7].innerHTML) + ( parseInt(rows[1][7].innerHTML) - parseInt(rows[0][7].innerHTML) ) * 4" );
			
			rows[7][ 2 ].innerHTML = rows[5][ 3 ].innerHTML;
			rows[7][ 4 ].innerHTML = rows[5][ 5 ].innerHTML;
			rows[7][ 6 ].innerHTML = rows[5][ 7 ].innerHTML;
			rows[8][ 1 ].innerHTML = rows[5][ 1 ].innerHTML;
			break;
		case "Lv 40/40":
			rows[0] = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 4 ].cells;
			
			rows[1] = document.getElementById ( "ninjutsu" ).rows[ 6 ].cells;
			rows[2] = document.getElementById ( "ninjutsu" ).rows[ 7 ].cells;
			
			rows[0][ 1 ].innerHTML = eval ( "parseInt(rows[0][1].innerHTML)" );
			rows[0][ 3 ].innerHTML = eval ( "parseInt(rows[0][3].innerHTML)" );
			rows[0][ 5 ].innerHTML = eval ( "parseInt(rows[0][5].innerHTML)" ) + ".00%";
			rows[0][ 7 ].innerHTML = eval ( "parseInt(rows[0][7].innerHTML)" );
			
			rows[1][ 2 ].innerHTML = rows[0][ 3 ].innerHTML;
			rows[1][ 4 ].innerHTML = rows[0][ 5 ].innerHTML;
			rows[1][ 6 ].innerHTML = rows[0][ 7 ].innerHTML;
			rows[2][ 1 ].innerHTML = rows[0][ 1 ].innerHTML;
			break;
	}
}