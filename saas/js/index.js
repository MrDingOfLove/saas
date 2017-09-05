$(document).ready(function(){
	// list-item
	$('.list-item').children('a').click(function(){
		$('.list-item').removeClass('active');
		$(this).parent().addClass('active');
	});
	$('a').mouseleave(function(){
		$(this).css("text-decoration","none");
	});
	fixHeight();
	window.onresize=resizeBannerImage;//当窗口改变宽度时执行此函数
	function resizeBannerImage(){
	    var win_height = $(window).height()-60;
	    var menu_height = $(".menu").outerHeight();
	    if (win_height > 800) {
			$(".menu").outerHeight(win_height);
			$(".ground").outerHeight($(".menu").outerHeight()-60-66);
		}
	}
	function fixHeight(){
		var win_height = $(window).height() - 60;
	    var menu_height = $(".menu").outerHeight();
	    if (menu_height<win_height) {
			$(".menu").outerHeight(win_height);
		}
		var menu_height = $(".menu").outerHeight();
		var template_height = $("#template").outerHeight() + 60 + 66;
		menu_height > template_height ? $(".ground").outerHeight(menu_height-60-66) : $(".menu").outerHeight(template_height);
	}
});