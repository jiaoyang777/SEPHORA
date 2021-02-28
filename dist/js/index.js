var slidebox=document.querySelector(".slidebox"),imglist=document.querySelector(".slideshow").children,dots=document.querySelector(".slideshow-dots").children,slideshow_prev=document.querySelector(".slideshow-prev"),slideshow_next=document.querySelector(".slideshow-next"),brand_slidebox=document.querySelector(".brand-slide"),brand_imglist=document.querySelector(".brand-slidebox-imglist").children,brand_dots=document.querySelector(".brand-slidebox-dots").children,brand_slidebox_prev=document.querySelector(".brand-slidebox-prev"),brand_slidebox_next=document.querySelector(".brand-slidebox-next");slide(slidebox,imglist,dots,slideshow_prev,slideshow_next),slide(brand_slidebox,brand_imglist,brand_dots,brand_slidebox_prev,brand_slidebox_next),$(window).scroll(function(){600<$(window).scrollTop()?$(".fixedTop").addClass("active"):$(".fixedTop").removeClass("active"),1520<$(window).scrollTop()?$(".fixedLeft").css("display","block"):$(".fixedLeft").css("display","none")}),$(".fixedLeft").css("left",$(window).width()/2-595-60),$(window).resize(function(){$(".fixedLeft").css("left",$(window).width()/2-595-60)});var Floornum=[0];$("div[data-floor]").each(function(){Floornum.push($(this).offset().top)}),$(window).scroll(function(){var s=parseInt(Floornum[2]-Floornum[1]),i=$(window).scrollTop()-s+150;if(i<=0||i>=Floornum[Floornum.length-1]+s)$(".fixedLeft ul li").removeClass("active");else{for(var l=0;l<Floornum.length&&!(i>Floornum[l-1]&&i<Floornum[l]);l++);$(".fixedLeft ul li").eq(l-1).addClass("active").siblings().removeClass("active")}}),$(".fixedLeft ul li").click(function(){var s=$(this).data("navlist"),s=$("div[data-floor="+s+"]").offset().top-80;$("html").stop().animate({scrollTop:s},500)}),$.ajax({url:"../php/brand.php",dataType:"json",success:function(s){var i=s.slice(0,16),s=s.slice(15,23),l="",e="";i.forEach(s=>{l+=`
            <li>
                <a href="" class="brands-class-img"><img src="${s.brand_img}" alt=""></a>
                <div class="brands-class-hover">
                    <p>${s.brand_nameCN}</p>
                    <a href="">点击查看</a>
                </div>
            </li>
            `}),s.forEach(s=>{e+=`
            <li><a href=""><img src="${s.brand_img}" alt=""></a></li>
            `}),$(".brands-class").find("ul").html(l),$(".mdules-footer").find("ul").html(e)}}),$.ajax({url:"../php/shops.php",dataType:"json",success:function(s){var i=s.slice(0,8),l=s.slice(8,16),e=s.slice(16,24),d=s.slice(24,32),a=s.slice(32,40),t=s.slice(40,48),o=s.slice(48,56),c=s.slice(56,64),r=s.slice(64,84),s=[s[84],s[85]],m="",h="",p="",v="",n="",u="",f="",g="",b="",x="";i.forEach(s=>{m+=`
            <li>
                            <a href="../pages/detail.html?id=${s.id}">
                                <div class="mdules-shops-brand">${s.title}</div>
                                <div class="mdules-shops-title">${s.text}</div>
                                <div class="mdules-shops-price">￥${s.price}</div>
                                <div class="mdules-shops-img"><img src="${s.imgurl}" alt=""></div>
                            </a>
                        </li>
            `}),l.forEach(s=>{h+=`
            <li>
                            <a href="../pages/detail.html?id=${s.id}">
                                <div class="mdules-shops-brand">${s.title}</div>
                                <div class="mdules-shops-title">${s.text}</div>
                                <div class="mdules-shops-price">￥${s.price}</div>
                                <div class="mdules-shops-img"><img src="${s.imgurl}" alt=""></div>
                            </a>
                        </li>
            `}),e.forEach(s=>{p+=`
            <li>
                            <a href="../pages/detail.html?id=${s.id}">
                                <div class="mdules-shops-brand">${s.title}</div>
                                <div class="mdules-shops-title">${s.text}</div>
                                <div class="mdules-shops-price">￥${s.price}</div>
                                <div class="mdules-shops-img"><img src="${s.imgurl}" alt=""></div>
                            </a>
                        </li>
            `}),d.forEach(s=>{v+=`
            <li>
                            <a href="../pages/detail.html?id=${s.id}">
                                <div class="mdules-shops-brand">${s.title}</div>
                                <div class="mdules-shops-title">${s.text}</div>
                                <div class="mdules-shops-price">￥${s.price}</div>
                                <div class="mdules-shops-img"><img src="${s.imgurl}" alt=""></div>
                            </a>
                        </li>
            `}),a.forEach(s=>{n+=`
            <li>
                            <a href="../pages/detail.html?id=${s.id}">
                                <div class="mdules-shops-brand">${s.title}</div>
                                <div class="mdules-shops-title">${s.text}</div>
                                <div class="mdules-shops-price">￥${s.price}</div>
                                <div class="mdules-shops-img"><img src="${s.imgurl}" alt=""></div>
                            </a>
                        </li>
            `}),t.forEach(s=>{u+=`
            <li>
                            <a href="../pages/detail.html?id=${s.id}">
                                <div class="mdules-shops-brand">${s.title}</div>
                                <div class="mdules-shops-title">${s.text}</div>
                                <div class="mdules-shops-price">￥${s.price}</div>
                                <div class="mdules-shops-img"><img src="${s.imgurl}" alt=""></div>
                            </a>
                        </li>
            `}),o.forEach(s=>{f+=`
            <li>
                            <a href="../pages/detail.html?id=${s.id}">
                                <div class="mdules-shops-brand">${s.title}</div>
                                <div class="mdules-shops-title">${s.text}</div>
                                <div class="mdules-shops-price">￥${s.price}</div>
                                <div class="mdules-shops-img"><img src="${s.imgurl}" alt=""></div>
                            </a>
                        </li>
            `}),c.forEach(s=>{g+=`
            <li>
                            <a href="../pages/detail.html?id=${s.id}">
                                <div class="mdules-shops-brand">${s.title}</div>
                                <div class="mdules-shops-title">${s.text}</div>
                                <div class="mdules-shops-price">￥${s.price}</div>
                                <div class="mdules-shops-img"><img src="${s.imgurl}" alt=""></div>
                            </a>
                        </li>
            `}),r.forEach(s=>{b+=`
            <li>
            <a href="../pages/detail.html?id=${s.id}">
            <div class="guessLike-shops-img"><img src="${s.imgurl}" alt="">
            </div>
            <div class="guessLike-shops-all">
                <div class="guessLike-shops-brand">${s.title}</div>
                <div class="guessLike-shops-title">${s.text}</div>
                <div class="guessLike-shops-price">￥${s.price}</div>
            </div>
            </a>
        </li>
            `}),s.forEach(s=>{x+=`
            <li>
                            <a href="../pages/detail.html?id=${s.id}">
                                <div class="picks-info-product-brand">${s.title}</div>
                                <div class="picks-info-product-title">${s.text}</div>
                                <div class="picks-info-product-price">${s.price}</div>
                                <img src="${s.imgurl}" alt="">
                            </a>
                        </li>
            `}),$(".SKIN").html(m),$(".MAKEUP").html(h),$(".FRAG").html(p),$(".TOOLS").html(v),$(".MAN").html(n),$(".BODY").html(u),$(".HAIR").html(f),$(".FOOD").html(g),$(".guessLike-shops").html(b),$(".picks-info-product").html(x)}}),$(".nav-allshop-menu").hover(function(){$(".nav-allshop-menu-list").css("display","block")},function(){$(".nav-allshop-menu-list").css("display","block")});