function searchTable () {
	$(function(){
		$("#myInput").on("keyup", function() {
			const value = $(this).val().toLowerCase();
			$("#sortTable tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});
	});
}

