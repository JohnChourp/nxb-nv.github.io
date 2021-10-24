$(window).on('load' , function(){
	const btnShowAllTypes = $("#btnShowAllTypes");
	const btnAttack = $("#btnAttack");
	const btnAssist = $("#btnAssist");
	const btnDefense = $("#btnDefense");
	const btnSkill = $("#btnSkill");
	const btnUtility = $("#btnUtility");
	
	btnAttack.on('click' , function(){
		btnShowAllTypes.trigger("click");
		btnShowAllTypes.removeClass("active");
		btnAttack.addClass("active");
		
		$(".trAssist").hide();
		$(".trDefense").hide();
		$(".trSkill").hide();
		$(".trUtility").hide();
	});
	
	btnAssist.on('click' , function(){
		btnShowAllTypes.trigger("click");
		btnShowAllTypes.removeClass("active");
		btnAssist.addClass("active");
		
		$(".trAttack").hide();
		$(".trDefense").hide();
		$(".trSkill").hide();
		$(".trUtility").hide();
	});
	
	btnDefense.on('click' , function(){
		btnShowAllTypes.trigger("click");
		btnShowAllTypes.removeClass("active");
		btnDefense.addClass("active");
		
		$(".trAttack").hide();
		$(".trAssist").hide();
		$(".trSkill").hide();
		$(".trUtility").hide();
	});
	
	btnSkill.on('click' , function(){
		btnShowAllTypes.trigger("click");
		btnShowAllTypes.removeClass("active");
		btnSkill.addClass("active");
		
		$(".trAttack").hide();
		$(".trAssist").hide();
		$(".trDefense").hide();
		$(".trUtility").hide();
	});
	
	btnUtility.on('click' , function(){
		btnShowAllTypes.trigger("click");
		btnShowAllTypes.removeClass("active");
		btnUtility.addClass("active");
		
		$(".trAttack").hide();
		$(".trAssist").hide();
		$(".trSkill").hide();
		$(".trDefense").hide();
	});
	
	btnShowAllTypes.on('click' , function(){
		btnShowAllTypes.addClass("active");
		
		btnAttack.removeClass("active");
		btnAssist.removeClass("active");
		btnDefense.removeClass("active");
		btnSkill.removeClass("active");
		btnUtility.removeClass("active");
		
		$(".trAttack").show();
		$(".trAssist").show();
		$(".trDefense").show();
		$(".trSkill").show();
		$(".trUtility").show();
	});
});