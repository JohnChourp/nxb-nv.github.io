function ultimateJutsuCheckByLv() {
	let row2,row4,row6,row8,row10,row12,row14,row16,row18,row20,row22,row24,row26,row28,row30,rowMax6,rowMax7;
	
	switch ( document.getElementsByClassName ( "cardLevel" ).item(0).innerHTML ) {
		case "Lv 70/70":
			row2 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 2 ].cells;
			row4 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 4 ].cells;
			row6 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 6 ].cells;
			row8 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 8 ].cells;
			row10 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 10 ].cells;
			row12 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 12 ].cells;
			row14 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 14 ].cells;
			row16 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 16 ].cells;
			
			rowMax6 = document.getElementById ( "ultimateJutsu" ).rows[ 6 ].cells;
			rowMax7 = document.getElementById ( "ultimateJutsu" ).rows[ 7 ].cells;
			
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
		case "Lv 100/100":
			row2 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 2 ].cells;
			row4 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 4 ].cells;
			row6 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 6 ].cells;
			row8 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 8 ].cells;
			row10 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 10 ].cells;
			row12 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 12 ].cells;
			row14 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 14 ].cells;
			row16 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 16 ].cells;
			
			rowMax6 = document.getElementById ( "ultimateJutsu" ).rows[ 6 ].cells;
			rowMax7 = document.getElementById ( "ultimateJutsu" ).rows[ 7 ].cells;
			
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
			
			row18[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 7" );
			row18[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 7" );
			row18[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 7" ) + ".00%";
			row18[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 7" );
			
			row20[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 8" );
			row20[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 8" );
			row20[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 8" ) + ".00%";
			row20[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 8" );
			
			row22[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 9" );
			row22[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 9" );
			row22[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 9" ) + ".00%";
			row22[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 9" );
			
			row24[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 10" );
			row24[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 10" );
			row24[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 10" ) + ".00%";
			row24[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 10" );
			
			row26[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 11" );
			row26[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 11" );
			row26[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 11" ) + ".00%";
			row26[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 11" );
			
			row28[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 12" );
			row28[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 12" );
			row28[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 12" ) + ".00%";
			row28[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 12" );
			
			row30[ 1 ].innerHTML = eval ( "parseInt(row4[1].innerHTML) + ( parseInt(row4[1].innerHTML) - parseInt(row2[1].innerHTML) ) * 13" );
			row30[ 3 ].innerHTML = eval ( "parseInt(row4[3].innerHTML) + ( parseInt(row4[3].innerHTML) - parseInt(row2[3].innerHTML) ) * 13" );
			row30[ 5 ].innerHTML = eval ( "parseInt(row4[5].innerHTML) + ( parseInt(row4[5].innerHTML) - parseInt(row2[5].innerHTML) ) * 13" ) + ".00%";
			row30[ 7 ].innerHTML = eval ( "parseInt(row4[7].innerHTML) + ( parseInt(row4[7].innerHTML) - parseInt(row2[7].innerHTML) ) * 13" );
			
			rowMax6[ 2 ].innerHTML = row30[ 3 ].innerHTML;
			rowMax6[ 4 ].innerHTML = row30[ 5 ].innerHTML;
			rowMax6[ 6 ].innerHTML = row30[ 7 ].innerHTML;
			rowMax7[ 1 ].innerHTML = row30[ 1 ].innerHTML;
			break;
	}
}