$(document).ready(function(){
	$('a').mouseleave(function(){
		$(this).css("text-decoration","none");
	});
	$('.page-break-li').click(function(){
		$('.page-break-li').removeClass('active');
		$(this).addClass('active');
	});
});