!function(e){"use strict";e("#loading").fadeOut(500),e("#mobile-menu-active").meanmenu({meanScreenWidth:"767.98",meanMenuContainer:".responsive-menu",onePage:!0}),e("nav ul li:first-child > a").on("click",function(t){var i=e(this.getAttribute("href"));i.length&&(t.preventDefault(),e("html, body").stop().animate({scrollTop:i.offset().top-80},1e3))}),e("nav ul li:first-child > a").addClass("active"),e("ul.main-menu > li:first-child > a").addClass("active"),e("ul.main-menu li a").on("click",function(){e("ul.main-menu li a").removeClass("active"),e(this).addClass("active")});new SlideNav({activeClass:"active",toggleButtonSelector:!1,toggleBoxSelector:!1,hideAfterSelect:!0,speed:80,changeHash:!1,navBoxToggleClass:!1});e("[data-background]").each(function(){e(this).css("background-image","url("+e(this).attr("data-background")+")")}),e(".slider-active").owlCarousel({autoplay:!0,loop:!0,nav:!1,responsive:{0:{items:1},600:{items:1},768:{items:1},992:{items:1},1200:{items:1}}}),e(".portfolio-menu li").on("click",function(t){e(this).siblings(".active").removeClass("active"),e(this).addClass("active"),t.preventDefault()});var t=e(".grid").isotope({itemSelector:".grid-item",parcenPosition:!0,masonry:{columnWidth:1}});e(".portfolio-menu li").on("click",function(){var i=e(this).attr("data-filter");t.isotope({filter:i})}),e(".testimonial-active").owlCarousel({autoplay:!1,loop:!0,nav:!0,margin:30,navText:['<i class="fa fa-long-arrow-alt-left"></i>','<i class="fa fa-long-arrow-alt-right"></i>'],responsive:{0:{items:1},576:{items:1},768:{items:3},992:{items:3},1200:{items:3}}})}(jQuery);const scrollToTop=document.querySelector("#scrollToTop");scrollToTop.addEventListener("click",function(){$("html,body").animate({scrollTop:0},"slow")});
