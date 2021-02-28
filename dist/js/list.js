$.ajax({url:"../php/brand.php",dataType:"json",success:function(a){var a=a.slice(0,116),t="";a.forEach(a=>{t+=`
            <li><img src="${a.brand_img}" alt=""><a href="" class="cover">${a.brand_nameEN}</a></li>
            `}),$(".brands_all_ul").html(t)}});var pagination1=document.querySelector(".pagination"),key=localStorage.getItem("key"),cat=localStorage.getItem("cat");(key?async function(){var i=await promiseAjax({url:"../php/key.php",type:"get",data:`value1=${key}`,datatype:"json"});new Pagination(pagination1,{pageInfo:{pagenum:1,pagesize:10,totalsize:i.length,totalpage:Math.ceil(i.length/10)},textInfo:{first:"首页",prev:"<上一页",next:"下一页>",last:"尾页"},cb:function(a){console.log(i);var a=i.slice(10*(a-1),10*a),t="";a.forEach(a=>{t+=`
                <li>
                        <div class="p_cont">
                            <div class="p_img">
                                <a href="../pages/detail.html?id=${a.id}"><img src="${a.imgurl}" alt=""></a>
                                <div class="p_buy" data-id="${a.id}">立即购买</div>
                            </div>
                            <div class="p_tags">
                                <span class="newtag">新品</span>
                                <span class="exclusive">独家</span>
                            </div>
                            <div class="p_brandEN">${a.title}</div>
                            <div class="p_productCN">
                                <a href="">${a.text}</a>
                            </div>
                            <div class="p_price">￥${a.price}</div>
                        </div>
                    </li>
                `}),$(".cate-products-info").html(t),$(".shopsnum").html(i.length),$(".serach_result").html(key)}})}:cat?async function(){var i=await promiseAjax({url:"../php/category.php",type:"get",data:`value2=${cat}`,datatype:"json"});new Pagination(pagination1,{pageInfo:{pagenum:1,pagesize:10,totalsize:i.length,totalpage:Math.ceil(i.length/10)},textInfo:{first:"首页",prev:"<上一页",next:"下一页>",last:"尾页"},cb:function(a){var a=i.slice(10*(a-1),10*a),t="";a.forEach(a=>{t+=`
                    <li>
                            <div class="p_cont">
                                <div class="p_img">
                                    <a href="../pages/detail.html?id=${a.id}"><img src="${a.imgurl}" alt=""></a>
                                    <div class="p_buy" data-id="${a.id}">立即购买</div>
                                </div>
                                <div class="p_tags">
                                    <span class="newtag">新品</span>
                                    <span class="exclusive">独家</span>
                                </div>
                                <div class="p_brandEN">${a.title}</div>
                                <div class="p_productCN">
                                    <a href="">${a.text}</a>
                                </div>
                                <div class="p_price">￥${a.price}</div>
                            </div>
                        </li>
                    `}),$(".cate-products-info").html(t),$(".shopsnum").html(i.length),$(".serach_result").html(cat)}})}:async function(){var i=await promiseAjax({url:"../php/shops.php",datatype:"json"});new Pagination(pagination1,{pageInfo:{pagenum:1,pagesize:10,totalsize:i.length,totalpage:Math.ceil(i.length/10)},textInfo:{first:"首页",prev:"<上一页",next:"下一页>",last:"尾页"},cb:function(a){var a=i.slice(10*(a-1),10*a),t="";a.forEach(a=>{t+=`
                    <li>
                            <div class="p_cont">
                                <div class="p_img">
                                    <a href="../pages/detail.html?id=${a.id}"><img src="${a.imgurl}" alt=""></a>
                                    <div class="p_buy" data-id="${a.id}">立即购买</div>
                                </div>
                                <div class="p_tags">
                                    <span class="newtag">新品</span>
                                    <span class="exclusive">独家</span>
                                </div>
                                <div class="p_brandEN">${a.title}</div>
                                <div class="p_productCN">
                                    <a href="">${a.text}</a>
                                </div>
                                <div class="p_price">￥${a.price}</div>
                            </div>
                        </li>
                    `}),$(".cate-products-info").html(t),$(".shopsnum").html(i.length)}})})(),$(".cate-products").delegate(".p_buy","click",function(){$(".addSuccess").css("display","block");var s=$(this).attr("data-id");$.ajax({url:"../php/detail.php",data:"id="+s,dataType:"json",success:function(a){var t,i=localStorage.getItem("cartList1");i?(i=JSON.parse(i),t=0,i.forEach(a=>{a.id==s&&(t++,a.cart_num++)}),0==t&&(a.cart_num++,i.push(a)),localStorage.setItem("cartList1",JSON.stringify(i))):(a.cart_num++,localStorage.setItem("cartList1",JSON.stringify([a])))}})}),$(".closemark").click(function(){$(".addSuccess").css("display","none")}),$(".goCart").click(function(){location="../pages/cart.html"});