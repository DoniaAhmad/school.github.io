/*global $, alert, console*/
$(function(){
	'use strict'
	var slider=$('.slide'),
		stuff=$('.stuff'),
		regular=$('.stuff-info img');
	slider.height($(window).height()-$('.top').height()-$('.navbar').height());
	regular.height($(window).height()-$('.stuff-info div').height()-110);
	stuff.height($(window).height());
	

		
		$(window).resize(function(){
			slider.height($(window).height()-$('.top').height()-$('.navbar').height());
			regular.height($(window).height()-$('.stuff-info div').height());
			stuff.height($(window).height());
		
		});
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();

			 if (scroll > 35) {
				$(".navbar").addClass('navbar-fixed-top');
				$(".navbar").css("box-shadow", "0 1px 40px #555");
				$(".nav li a ").css({"padding" : "12px 12px 0 12px", "transition" : "0.6s ease-in-out"});
				$(".logo h2").css({"padding" : "12px", "transition" : "0.6s ease-in-out"});
				$("nav").css("marginLeft" , "0");
				$("nav").css("paddingLeft" , "0");
				$("nav").css("marginTop" , "0");
				slider.css("margin-top",$('.navbar').height());
				$(".head").css("margin-top",$('.navbar').height());	
			}
			else{
				$(".navbar").removeClass('navbar-fixed-top');
				$(".nav li a ").css({"padding" : "15px", "transition" : "0.6s ease-in-out"});
				$(".logo h2").css({"padding" : "20px", "transition" : "0.6s ease-in-out"});
				$("nav").css("paddingLeft" , "0");
				$("nav").css("marginBottom" , "0");
				$(".navbar").css("box-shadow", "none");
				slider.css("margin-top","0");
				$(".head").css("margin-top","0");
			}
			
		});
		
		$('.nav li a').click(function(){
			$(this).parent().addClass('active').siblings().removeClass('active');
		});	
				
		$('.nav li a').click (function(){
			$('html, body').animate(
			{		
				scrollTop:$('#' + $(this).data('value')).offset().top -	110
			},1000);
		});
		$(".regular").slick({
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay:1,
			autoplaySpeed:3e3
		  });
		  
		$(".stuff-info").hover(function(){
			$(this).addClass('slick-current').siblings().removeClass('slick-current');
        });
		function myRepeat() {
			$('.shadow').fadeIn(4000).delay(1000).fadeOut(2000); 
		}
		setInterval(myRepeat,500);
		var TT = 0;
		$(window).scroll(function (){
			var t = $('.exp').offset().top - 300;
			if($(this).scrollTop() >= t && TT == 0){
				TT = 1;
				$('.count').each(function () {
					$(this).prop('Counter',0).animate({
					Counter: $(this).text()
					}, {
						duration: 5000,
						easing: 'swing',
						step: function (now) {
						$(this).text(Math.ceil(now));
						}
					});
				});
			}
		});

});
	var $lightbox = $('#lightbox');
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt');
          
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });

	
$(window).load(function(){
	$('body').css("overflow","auto");
	$('.loading').fadeOut(1000,function(){
		$(this).remove();
	});
	
});