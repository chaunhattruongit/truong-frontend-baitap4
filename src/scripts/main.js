// Main
console.log('FullStack Vietnam!')
$(document).ready(function(){
	$(".banner .owl-carousel").owlCarousel({
		items: 1,//xac dinh chay 1 item moi lan chay
		nav:true,//xac dinh co mui ten nhan
		dots:false//xac dinh bo dau cham
	});
	$(".bestsaler .owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		dots:false
	});
  });
