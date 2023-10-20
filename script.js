$(".scheme-item").hover(
	function () {
		$(".scheme svg path[data-id=" + $(this).data("id") + "]").attr("id", "hover");
	},
	function () {
		$(".scheme svg path[data-id=" + $(this).data("id") + "]").attr("id", "");
	}
);

$(".scheme-item").on("click", function () {
	$(".scheme-popup").hide();
	var popup = $(this).find(".scheme-popup");
	$(popup).css("top", "-" + ($(popup).outerHeight(true) - 75) + "px");
	$(popup).css(
		"left",
		"-" + ($(popup).outerWidth(true) / 20 - $(this).outerWidth(true) / 2) + "px"
	);
	$(popup).show();
});

$(".scheme svg path").click(function () {
	$(".scheme-popup").hide();
	$(".scheme-item[data-id=" + $(this).data("id") + "]").trigger("click");
});

$("body").click(function (e) {
	if ($(e.target).closest(".scheme svg path, .scheme-item").length == 0) {
		$(".scheme-popup").hide();
	}
});