// JavaScript Document



/* Owl Carousel */

$(document).ready(function() {


/*[ Show header dropdown ]
    ===========================================================*/
		$(".myclick").click(function(){
			//alert("dcscdscdscdscdscdscsdc");
			$(".add-cart-panel").toggleClass("panel-active");
	})

	

/* Header */

if($('.fixed-top').length && $('.preheader').length){
	var $window = $(window);
	
	if($window.scrollTop() >= $('.preheader').height()){
		$('.preheader').hide();
	}

	$(window).on("scroll", function() {
		if($(window).scrollTop() > 80) {
			 $(".myheader").addClass("myheaderafix");
			$('.preheader').stop(true, false).slideUp(250).end();
		} else {
			//remove the background property so it comes transparent again (defined in your css)
			$('.preheader').slideDown(250).end();
			 $(".myheader").removeClass("myheaderafix");
		}
	});

}




				  var owl = $('#owl-car1');
				  owl.owlCarousel({
					  item:4,
					margin: 10,
					nav: true,
					loop: true,
					dots:false,
					responsive: {
					  0: {
						items: 1
					  },
					  600: {
						items: 3
					  },
					  1000: {
						items: 4
					  }
					}
				  });
				
				var owl = $('#owl-car2');
				  owl.owlCarousel({
						items: 1,
						loop: true,
						margin: 0,
						autoplay: true,
						autoplayTimeout: 6000,
						autoplayHoverPause: true,
						animateOut: 'fadeOut',
						nav: false,
						dots:false

					});


					var owl = $('#owl-car3');
				  owl.owlCarousel({
					  item:4,
					margin: 10,
					nav: true,
					loop: true,
					dots:false,
					responsive: {
					  0: {
						items: 1
					  },
					  600: {
						items: 3
					  },
					  1000: {
						items: 4
					  }
					}
				  });
					

					/* Wow */
								wow = new WOW(
										{
											animateClass: 'animated',
											offset:       200
											}
										);
								wow.init();

								/** toolip **/		
								$(function () {
									$("[rel='tooltip']").tooltip();
								});



            })

/* Owl Carousel */


