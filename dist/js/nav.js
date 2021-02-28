$(".nav-allshop-menu-list ul>li").hover(function(){$(this).addClass("active").siblings().removeClass("active").parent().find("span").removeClass("active-style"),$(this).find("span").addClass("active-style"),$(".nav-allshop-content").css("display","block")},function(){}),$(".nav-allshop-menu").hover(function(){},function(){$(".nav-allshop-content").css("display","none"),$(".nav-allshop-menu-list ul>li").removeClass("active").find("span").removeClass("active-style")}),$(".salable").click(function(){localStorage.removeItem("key"),localStorage.removeItem("cat")}),$(".nav-allshop-menu-list").delegate("LI","click",function(){localStorage.removeItem("key");var a=$(this).find("a").eq(0).html();localStorage.setItem("cat",a),location="./list.html"}),$(".nav-allshop-menu").hover(function(){$(".nav-allshop-menu-list").css("display","block")},function(){$(".nav-allshop-menu-list").css("display","none")}),$(".nav-allshop-menu-list").delegate("LI","mouseover",function(){var a=$(this).find("a").eq(0).html();$.ajax({url:"../php/menu.php",type:"get",data:`val=${a}`,dataType:"json",success:function(a){var l="";l+=`
            <div class="nav-allshop-content-info">
                            <div class="nav-allshop-content-info-title">${a.category}</div>
                            <div class="nav-allshop-content-info-category">
                                <ol>
                                    <li>
                                        <p><a href="">${a.a1}</a></p>
                                        <p><span><a href="">${a.b1}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${a.a2}</a></p>
                                        <p><span><a href="">${a.b2}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${a.a3}</a></p>
                                        <p><span><a href="">${a.b3}</a></span></p>
                                    </li>
                                </ol>
                                <ol>
                                    <li>
                                        <p><a href="">${a.a4}</a></p>
                                        <p><span><a href="">${a.b4}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${a.a5}</a></p>
                                        <p><span><a href="">${a.b5}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${a.a6}</a></p>
                                        <p><span><a href="">${a.b6}</a></span></p>
                                    </li>
                                </ol>
                                <ol>
                                    <li>
                                        <p><a href="">${a.a7}</a></p>
                                        <p><span><a href="">${a.b7}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${a.a8}</a></p>
                                        <p><span><a href="">${a.b8}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${a.a9}</a></p>
                                        <p><span><a href="">${a.b9}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${a.a10}</a></p>
                                        <p><span><a href="">${a.b10}</a></span></p>
                                    </li>
                                </ol>
                            </div>
                            <ul class="nav-allshop-content-info-logo">
                                <li><a href=""><img src="${a.brand1}" alt=""></a></li>
                                <li><a href=""><img src="${a.brand2}" alt=""></a></li>
                                <li><a href=""><img src="${a.brand3}" alt=""></a></li>
                                <li><a href=""><img src="${a.brand4}" alt=""></a></li>
                            </ul>
                        </div>
                        <ul class="nav-allshop-content-info-banner">
                            <li><a href=""><img src="${a.banner1}" alt=""></a></li>
                            <li><a href=""><img src="${a.banner2}" alt=""></a></li>
                        </ul>
                    </div>
            `,$(".nav-allshop-content").html(l)}})});