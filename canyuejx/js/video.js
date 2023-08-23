$("#str-post").submit(function () {
	$("html,body").animate({
		scrollTop: $(".search").offset().top
	}, 200);
	$('#player').attr("src", $(".am-selected").find('.am-checked').data('value') + $("#str-post").serializeArray()[0].value);
	$('#player').attr("style","height: 548px!important;");
	return false;
})
