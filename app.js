$(".modal_code").click(function () {
	$button = $(this);
	$code = $(this).attr("data-code");

	$(this).html("Copied");

	setTimeout(function () {
		$button.html($code);
	}, 3000);
});
