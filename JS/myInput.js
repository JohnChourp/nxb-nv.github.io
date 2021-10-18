function searchTable () {
	$(function(){
		$("#myInput").on("keyup", function() {
			const value = $(this).val().toLowerCase();
			$("#sortTable tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
			
			if($( "#btnAttack" ).hasClass("active")){
				$(".trAssist").hide();
				$(".trDefense").hide();
				$(".trSkill").hide();
				$(".trUtility").hide();
			}
			
			if($( "#btnAssist" ).hasClass("active")){
				$(".trAttack").hide();
				$(".trDefense").hide();
				$(".trSkill").hide();
				$(".trUtility").hide();
			}
			
			if($( "#btnDefense" ).hasClass("active")){
				$(".trAttack").hide();
				$(".trAssist").hide();
				$(".trSkill").hide();
				$(".trUtility").hide();
			}
			
			if($( "#btnSkill" ).hasClass("active")){
				$(".trAttack").hide();
				$(".trAssist").hide();
				$(".trDefense").hide();
				$(".trUtility").hide();
			}
			
			if($( "#btnUtility" ).hasClass("active")){
				$(".trAttack").hide();
				$(".trAssist").hide();
				$(".trSkill").hide();
				$(".trDefense").hide();
			}
		});
	});
}

