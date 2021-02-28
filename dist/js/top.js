var a1=0,b1=0;function notic(){2<++a1&&(a1=0),$(".top-notice-list li").eq(a1).css("top","30px"),$(".top-notice-list li").eq(a1).animate({top:0},500),$(".top-notice-list li").eq(b1).animate({top:-30},500),b1=a1}setInterval(notic,5e3);var span1=document.querySelector(".login-change"),cookie1=getCookie("name1");cookie1&&(span1.innerHTML=`
     <a href="" class="username">${cookie1}</a><em></em>
     <b></b>
     <a href="javascript:;" class="exit">退出</a>
     `),$(".exit").click(function(){$(".mask").css("display","block")}),$(".exitConfirm").click(function(){delCookie("name1"),location.reload()}).next().click(function(){$(".mask").css("display","none")}),$(".closeExit").click(function(){$(".mask").css("display","none")});