$(window).on('load',function(){
	const btnShowAllTypesClick = $("#btnShowAllTypes");
	
	$("#btnAttack").on('click',function(){
		btnShowAllTypesClick.trigger( "click" );
		btnShowAllTypesClick.removeClass("active");
		$( "#btnAttack" ).addClass("active");
		
		$(".trAssist").hide();
		$(".trDefense").hide();
		$(".trSkill").hide();
		$(".trUtility").hide();
	});
	
	$("#btnAssist").on('click',function(){
		btnShowAllTypesClick.trigger( "click" );
		btnShowAllTypesClick.removeClass("active");
		$( "#btnAssist" ).addClass("active");
		
		$(".trAttack").hide();
		$(".trDefense").hide();
		$(".trSkill").hide();
		$(".trUtility").hide();
	});
	
	$("#btnDefense").on('click',function(){
		btnShowAllTypesClick.trigger( "click" );
		btnShowAllTypesClick.removeClass("active");
		$( "#btnDefense" ).addClass("active");
		
		$(".trAttack").hide();
		$(".trAssist").hide();
		$(".trSkill").hide();
		$(".trUtility").hide();
	});
	
	$("#btnSkill").on('click',function(){
		btnShowAllTypesClick.trigger( "click" );
		btnShowAllTypesClick.removeClass("active");
		$( "#btnSkill" ).addClass("active");
		
		$(".trAttack").hide();
		$(".trAssist").hide();
		$(".trDefense").hide();
		$(".trUtility").hide();
	});
	
	$("#btnUtility").on('click',function(){
		btnShowAllTypesClick.trigger( "click" );
		btnShowAllTypesClick.removeClass("active");
		$( "#btnUtility" ).addClass("active");
		
		$(".trAttack").hide();
		$(".trAssist").hide();
		$(".trSkill").hide();
		$(".trDefense").hide();
	});
	
	btnShowAllTypesClick.on('click',function(){
		btnShowAllTypesClick.addClass("active");
		
		$( "#btnAttack" ).removeClass("active");
		$( "#btnAssist" ).removeClass("active");
		$( "#btnDefense" ).removeClass("active");
		$( "#btnSkill" ).removeClass("active");
		$( "#btnUtility" ).removeClass("active");
		
		$(".trAttack").show();
		$(".trAssist").show();
		$(".trDefense").show();
		$(".trSkill").show();
		$(".trUtility").show();
	});
});