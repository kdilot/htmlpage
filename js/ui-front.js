// mobile gnb
$(function(){
	var $gnb = $("#gnb");
	var $gnblist = $gnb.find(".gnb-list");

	$gnb.find(".btn-menu").click(function(e){
		e.preventDefault();
		if(!$gnb.hasClass("open")){
			$gnb.append("<div class='bg'></div>");
			$gnb.addClass("open");
			$gnblist.stop().animate({right: 0}, 500);
		} else {
			$gnb.prepend("<div class='bg'></div>");
			$gnblist.stop().animate({right: "-100%"}, 500);
			$gnb.removeClass("open");
			$gnb.find(".bg").remove();
		}
	});
});
