$(document).ready(function(){
	


	$('.tab-one').click(function(){
		$('#tab-one').fadeIn(150);
		$('#tab-two').fadeOut(150);
		$('#tab-three').fadeOut(150);
		$('#tab-four').fadeOut(150);
		$('#tab-five').fadeOut(150);
		$('#tab-six').fadeOut(150);
		$('#tab-seven').fadeOut(150);
		$('#tab-eight').fadeOut(150);
		$('#tab-nine').fadeOut(150);
		$('#tab-ten').fadeOut(150);
		$('#tab-eleven').fadeOut(150);
	});
	
	$('.tab-two').click(function(){
		$('#tab-one').fadeOut(150);
		$('#tab-two').fadeIn(150);
		$('#tab-three').fadeOut(150);
		$('#tab-four').fadeOut(150);		
		$('#tab-five').fadeOut(150);
		$('#tab-six').fadeOut(150);
		$('#tab-seven').fadeOut(150);
		$('#tab-eight').fadeOut(150);
		$('#tab-nine').fadeOut(150);
		$('#tab-ten').fadeOut(150);
		$('#tab-eleven').fadeOut(150);

	
	});
	
	$('.tab-three').click(function(){
		$('#tab-one').fadeOut(150);
		$('#tab-two').fadeOut(150);
		$('#tab-three').fadeIn(150);
		$('#tab-four').fadeOut(150);
		$('#tab-five').fadeOut(150);
		$('#tab-six').fadeOut(150);
		$('#tab-seven').fadeOut(150);
		$('#tab-eight').fadeOut(150);
		$('#tab-nine').fadeOut(150);
		$('#tab-ten').fadeOut(150);
		$('#tab-eleven').fadeOut(150);
	});
	$('.tab-four').click(function(){
		$('#tab-one').fadeOut(150);
		$('#tab-two').fadeOut(150);
		$('#tab-three').fadeOut(150);
		$('#tab-four').fadeIn(150);
	    $('#tab-five').fadeOut(150);
		$('#tab-six').fadeOut(150);
		$('#tab-seven').fadeOut(150);
		$('#tab-eight').fadeOut(150);
		$('#tab-nine').fadeOut(150);
		$('#tab-ten').fadeOut(150);
		$('#tab-eleven').fadeOut(150);
	});
$('.tab-five').click(function(){
		$('#tab-one').fadeOut(150);
		$('#tab-two').fadeOut(150);
		$('#tab-three').fadeOut(150);
		$('#tab-four').fadeOut(150);
	    $('#tab-five').fadeIn(150);
		$('#tab-six').fadeOut(150);
		$('#tab-seven').fadeOut(150);
		$('#tab-eight').fadeOut(150);
		$('#tab-nine').fadeOut(150);
		$('#tab-ten').fadeOut(150);
		$('#tab-eleven').fadeOut(150);

	});
$('.tab-six').click(function(){
		$('#tab-one').fadeOut(150);
		$('#tab-two').fadeOut(150);
		$('#tab-three').fadeOut(150);
		$('#tab-four').fadeOut(150);
		$('#tab-five').fadeOut(150);
		$('#tab-six').fadeIn(150);
		$('#tab-seven').fadeOut(150);
		$('#tab-eight').fadeOut(150);
		$('#tab-nine').fadeOut(150);
		$('#tab-ten').fadeOut(150);
		$('#tab-eleven').fadeOut(150);
	});
$('.tab-seven').click(function(){
		$('#tab-one').fadeOut(150);
		$('#tab-two').fadeOut(150);
		$('#tab-three').fadeOut(150);
		$('#tab-four').fadeOut(150);
	$('#tab-five').fadeOut(150);
		$('#tab-six').fadeOut(150);
		$('#tab-seven').fadeIn(150);
		$('#tab-eight').fadeOut(150);
		$('#tab-nine').fadeOut(150);
		$('#tab-ten').fadeOut(150);
		$('#tab-eleven').fadeOut(150);
	});
$('.tab-eight').click(function(){
		$('#tab-one').fadeOut(150);
		$('#tab-two').fadeOut(150);
		$('#tab-three').fadeOut(150);
		$('#tab-four').fadeOut(150);
		$('#tab-five').fadeOut(150);
		$('#tab-six').fadeOut(150);
		$('#tab-seven').fadeOut(150);
		$('#tab-eight').fadeIn(150);
		$('#tab-nine').fadeOut(150);
		$('#tab-ten').fadeOut(150);
		$('#tab-eleven').fadeOut(150);
	});
$('.tab-nine').click(function(){
		$('#tab-one').fadeOut(150);
		$('#tab-two').fadeOut(150);
		$('#tab-three').fadeOut(150);
		$('#tab-four').fadeOut(150);	
		$('#tab-five').fadeOut(150);
		$('#tab-six').fadeOut(150);
		$('#tab-seven').fadeOut(150);
		$('#tab-eight').fadeOut(150);
		$('#tab-nine').fadeIn(150);
		$('#tab-ten').fadeOut(150);
		$('#tab-eleven').fadeOut(150);
	});
$('.tab-ten').click(function(){
		$('#tab-one').fadeOut(150);
		$('#tab-two').fadeOut(150);
		$('#tab-three').fadeOut(150);
		$('#tab-four').fadeOut(150);
		$('#tab-five').fadeOut(150);
		$('#tab-six').fadeOut(150);
		$('#tab-seven').fadeOut(150);
		$('#tab-eight').fadeOut(150);
		$('#tab-nine').fadeOut(150);
		$('#tab-ten').fadeIn(150);
		$('#tab-eleven').fadeOut(150);
	});
$('.tab-eleven').click(function(){
		$('#tab-one').fadeOut(150);
		$('#tab-two').fadeOut(150);
		$('#tab-three').fadeOut(150);
		$('#tab-four').fadeOut(150);
		$('#tab-five').fadeOut(150);
		$('#tab-six').fadeOut(150);
		$('#tab-seven').fadeOut(150);
		$('#tab-eight').fadeOut(150);
		$('#tab-nine').fadeOut(150);
		$('#tab-ten').fadeOut(150);
		$('#tab-eleven').fadeIn(150);
	});



	
// 	$('.content-tab').each((i,v) => {
// 	$('.tab-page').fadeOut(150);
// 	$('#tab-' + i).fadeIn(150);
// })

	$('body,html').animate({scrollTop:0},0);
	

	$('.deploy-navigation').click(function(){
		$('.page-content').delay(200).hide();
		$('.page-navigation').delay(200).fadeIn(300);
		$('.page-hider').animate({
			height:'120%'
		}, 300, 'easeInOutExpo');
		$('body,html').animate({scrollTop:0},500);
		return false;
	});
	
	$('.small-close-nav').click(function(){
		$('.page-content').delay(200).show();
		$('.page-navigation').fadeOut(300);
		$('.page-hider').delay(200).animate({
			height:'0%'
		}, 300, 'easeInOutExpo');
		$('body,html').animate({scrollTop:0},500);
		return false;
	});
			
	$('.bxslider').bxSlider({
		pager:false,
		controls:true,
		touchEnabed:true,
		infiniteLoop: true,
		preventDefaultSwipeX:true
	});	
	
	$('.bx-next').click(function(){
		return false;
	});
	
	$('.bx-prev').click(function(){
		return false;
	});	

	
});


