function ninjutsuCheckByLv() {
	let row2,row4,row6,row8,row10,row12,row14,row16,rowMax6,rowMax7;
	
	switch ( document.getElementsByClassName ( "cardLevel" ).item(0).innerHTML ) {
		case "Lv 70/70":
			row2 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 2 ].cells;
			row4 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 4 ].cells;
			row6 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 6 ].cells;
			row8 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 8 ].cells;
			row10 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 10 ].cells;
			row12 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 12 ].cells;
			row14 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 14 ].cells;
			row16 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 16 ].cells;
			
			rowMax6 = document.getElementById ( "ninjutsu" ).rows[ 6 ].cells;
			rowMax7 = document.getElementById ( "ninjutsu" ).rows[ 7 ].cells;
			
			row6[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) )" );
			row6[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) )" );
			row6[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) )" ) + ".00%";
			row6[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) )" );
			
			row8[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 2" );
			row8[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 2" );
			row8[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 2" ) + ".00%";
			row8[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 2" );
			
			row10[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 3" );
			row10[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 3" );
			row10[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 3" ) + ".00%";
			row10[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 3" );
			
			row12[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 4" );
			row12[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 4" );
			row12[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 4" ) + ".00%";
			row12[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 4" );
			
			row14[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 5" );
			row14[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 5" );
			row14[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 5" ) + ".00%";
			row14[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 5" );
			
			row16[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 6" );
			row16[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 6" );
			row16[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 6" ) + ".00%";
			row16[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 6" );
			
			rowMax6[ 2 ].innerHTML = row16[ 3 ].innerHTML;
			rowMax6[ 4 ].innerHTML = row16[ 5 ].innerHTML;
			rowMax6[ 6 ].innerHTML = row16[ 7 ].innerHTML;
			rowMax7[ 1 ].innerHTML = row16[ 1 ].innerHTML;
			break;
		case "Lv 60/60":
			row2 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 2 ].cells;
			row4 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 4 ].cells;
			row6 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 6 ].cells;
			row8 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 8 ].cells;
			row10 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 10 ].cells;
			row12 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 12 ].cells;
			
			rowMax6 = document.getElementById ( "ninjutsu" ).rows[ 6 ].cells;
			rowMax7 = document.getElementById ( "ninjutsu" ).rows[ 7 ].cells;
			
			row6[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) )" );
			row6[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) )" );
			row6[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) )" ) + ".00%";
			row6[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) )" );
			
			row8[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 2" );
			row8[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 2" );
			row8[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 2" ) + ".00%";
			row8[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 2" );
			
			row10[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 3" );
			row10[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 3" );
			row10[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 3" ) + ".00%";
			row10[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 3" );
			
			row12[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 4" );
			row12[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 4" );
			row12[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 4" ) + ".00%";
			row12[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 4" );
			
			rowMax6[ 2 ].innerHTML = row12[ 3 ].innerHTML;
			rowMax6[ 4 ].innerHTML = row12[ 5 ].innerHTML;
			rowMax6[ 6 ].innerHTML = row12[ 7 ].innerHTML;
			rowMax7[ 1 ].innerHTML = row12[ 1 ].innerHTML;
			break;
		case "Lv 40/40":
			row4 = document.getElementById ( "ninjutsuCheckByLv" ).rows[ 4 ].cells;
			
			rowMax6 = document.getElementById ( "ninjutsu" ).rows[ 6 ].cells;
			rowMax7 = document.getElementById ( "ninjutsu" ).rows[ 7 ].cells;
			
			row4[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML)" );
			row4[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML)" );
			row4[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML)" ) + ".00%";
			row4[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML)" );
			
			rowMax6[ 2 ].innerHTML = row4[ 3 ].innerHTML;
			rowMax6[ 4 ].innerHTML = row4[ 5 ].innerHTML;
			rowMax6[ 6 ].innerHTML = row4[ 7 ].innerHTML;
			rowMax7[ 1 ].innerHTML = row4[ 1 ].innerHTML;
			break;
	}
}