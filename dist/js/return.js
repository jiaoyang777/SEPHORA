$(".fixedRight").css("right",$(window).width()/2-595-60),$(window).resize(function(){$(".fixedRight").css("right",$(window).width()/2-595-60)}),$(".returnTop").click(function(){$("html").animate({scrollTop:0},1e3)}),$(window).scroll(function(){600<$(window).scrollTop()?$(".fixedRight").css("display","block"):$(".fixedRight").css("display","none")});