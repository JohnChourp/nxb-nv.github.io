function ultimateJutsuCheckByLv() {
	let row6,row8,row10,row12,row14,row16,RT1,RT2,CPCost1,CPCost2,CRI1,CRI2,POW1,POW2,rowMax6,rowMax7;
	
	if(document.getElementsByClassName ( "cardLevel" ).item(0).innerHTML === "Lv 70/70") {
		RT1 = document.getElementsByClassName ( "RT1" ).item ( 0 ).innerHTML;
		RT2 = document.getElementsByClassName ( "RT2" ).item ( 0 ).innerHTML;
		
		CPCost1 = document.getElementsByClassName ( "CPCost1" ).item ( 0 ).innerHTML;
		CPCost2 = document.getElementsByClassName ( "CPCost2" ).item ( 0 ).innerHTML;
		
		CRI1 = document.getElementsByClassName ( "CRI1" ).item ( 0 ).innerHTML;
		CRI2 = document.getElementsByClassName ( "CRI2" ).item ( 0 ).innerHTML;
		
		POW1 = document.getElementsByClassName ( "POW1" ).item ( 0 ).innerHTML;
		POW2 = document.getElementsByClassName ( "POW2" ).item ( 0 ).innerHTML;
		
		row6 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 6 ].cells;
		row8 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 8 ].cells;
		row10 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 10 ].cells;
		row12 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 12 ].cells;
		row14 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 14 ].cells;
		row16 = document.getElementById ( "ultimateJutsuCheckByLv" ).rows[ 16 ].cells;
		
		rowMax6 = document.getElementById ( "ultimateJutsu" ).rows[ 6 ].cells;
		rowMax7 = document.getElementById ( "ultimateJutsu" ).rows[ 7 ].cells;
		
		row6[ 1 ].innerHTML = eval ( "parseInt(RT2) + ( parseInt(RT2) - parseInt(RT1) )" );
		row6[ 3 ].innerHTML = eval ( "parseInt(CPCost2) + ( parseInt(CPCost2) - parseInt(CPCost1) )" );
		row6[ 5 ].innerHTML = eval ( "parseInt(CRI2) + ( parseInt(CRI2) - parseInt(CRI1) )" ) + ".00%";
		row6[ 7 ].innerHTML = eval ( "parseInt(POW2) + ( parseInt(POW2) - parseInt(POW1) )" );
		
		row8[ 1 ].innerHTML = eval ( "parseInt(RT2) + ( parseInt(RT2) - parseInt(RT1) ) * 2" );
		row8[ 3 ].innerHTML = eval ( "parseInt(CPCost2) + ( parseInt(CPCost2) - parseInt(CPCost1) ) * 2" );
		row8[ 5 ].innerHTML = eval ( "parseInt(CRI2) + ( parseInt(CRI2) - parseInt(CRI1) ) * 2" ) + ".00%";
		row8[ 7 ].innerHTML = eval ( "parseInt(POW2) + ( parseInt(POW2) - parseInt(POW1) ) * 2" );
		
		row10[ 1 ].innerHTML = eval ( "parseInt(RT2) + ( parseInt(RT2) - parseInt(RT1) ) * 3" );
		row10[ 3 ].innerHTML = eval ( "parseInt(CPCost2) + ( parseInt(CPCost2) - parseInt(CPCost1) ) * 3" );
		row10[ 5 ].innerHTML = eval ( "parseInt(CRI2) + ( parseInt(CRI2) - parseInt(CRI1) ) * 3" ) + ".00%";
		row10[ 7 ].innerHTML = eval ( "parseInt(POW2) + ( parseInt(POW2) - parseInt(POW1) ) * 3" );
		
		row12[ 1 ].innerHTML = eval ( "parseInt(RT2) + ( parseInt(RT2) - parseInt(RT1) ) * 4" );
		row12[ 3 ].innerHTML = eval ( "parseInt(CPCost2) + ( parseInt(CPCost2) - parseInt(CPCost1) ) * 4" );
		row12[ 5 ].innerHTML = eval ( "parseInt(CRI2) + ( parseInt(CRI2) - parseInt(CRI1) ) * 4" ) + ".00%";
		row12[ 7 ].innerHTML = eval ( "parseInt(POW2) + ( parseInt(POW2) - parseInt(POW1) ) * 4" );
		
		row14[ 1 ].innerHTML = eval ( "parseInt(RT2) + ( parseInt(RT2) - parseInt(RT1) ) * 5" );
		row14[ 3 ].innerHTML = eval ( "parseInt(CPCost2) + ( parseInt(CPCost2) - parseInt(CPCost1) ) * 5" );
		row14[ 5 ].innerHTML = eval ( "parseInt(CRI2) + ( parseInt(CRI2) - parseInt(CRI1) ) * 5" ) + ".00%";
		row14[ 7 ].innerHTML = eval ( "parseInt(POW2) + ( parseInt(POW2) - parseInt(POW1) ) * 5" );
		
		row16[ 1 ].innerHTML = eval ( "parseInt(RT2) + ( parseInt(RT2) - parseInt(RT1) ) * 6" );
		row16[ 3 ].innerHTML = eval ( "parseInt(CPCost2) + ( parseInt(CPCost2) - parseInt(CPCost1) ) * 6" );
		row16[ 5 ].innerHTML = eval ( "parseInt(CRI2) + ( parseInt(CRI2) - parseInt(CRI1) ) * 6" ) + ".00%";
		row16[ 7 ].innerHTML = eval ( "parseInt(POW2) + ( parseInt(POW2) - parseInt(POW1) ) * 6" );
		
		rowMax6[ 2 ].innerHTML = row16[ 3 ].innerHTML;
		rowMax6[ 4 ].innerHTML = row16[ 5 ].innerHTML;
		rowMax6[ 6 ].innerHTML = row16[ 7 ].innerHTML;
		rowMax7[ 1 ].innerHTML = row16[ 1 ].innerHTML;
	}
}