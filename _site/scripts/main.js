$(document).ready(function(){
	
	var comments_loaded = false;
	
	// Hide comments section by default
	$('#comments_section').hide();
	
	// Toggle visibility of comments on button click
    $('#toggle_button').click(function(){
		var comments = $('#comments_section');
		
        // Load comments once
		if (!comments_loaded) {
			var loading = $('#loading_indicator');
			loading.show('fast');
			$.get('/comments_section.html', function(data) {
				comments.html(data);
				comments_loaded = true;
				loading.hide('fast');
			});
		};

		$(this).toggleClass("down");

		if (comments.is(":hidden")) {
			comments.show('slow');
		} else {
			comments.hide('slow');
		};
		
    });
	
});