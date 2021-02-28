var name1=getCookie("name1"),url1=location.href,cartList=localStorage.getItem("cartList1");function show(){var t,s,a;0<cartList.length?(t=cartList.every(t=>1==t.select),a=total(),s=`
        <div class="checkoutMain">
        <ul class="shopnav">
            <li class="quanxuan"><input type="checkbox" name="quan" class="Allcheck" ${t?"checked":""}>全选</li>
            <li class="prodinfo">商品信息</li>
            <li class="oneprice">单价（元）</li>
            <li class="prodnum">数量</li>
            <li class="totalprice">小计（元）</li>
            <li class="del">操作</li>
        </ul>
        `,cartList.forEach(t=>{s+=`
            <div class="shopInfo">
            <div class="shopInfo_xuan"><input type="checkbox" name="xuan"  ${1==t.select?"checked":""} data-id="${t.id}"></div>
            <div class="shopInfo_img"><img src="${t.imgurl}" alt=""></div>
            <div class="shopInfo_text">
                <h3>${t.title}</h3>
                <h4>${t.text}</h4>
                <h5>${t.specification}</h5>
            </div>
            <div class="shopInfo_price">${t.price}</div>
            <div class="shopInfo_num">
                <i class="SUB" data-id="${t.id}">-</i>
                <span class="NUM">${t.cart_num}</span>
                <i class="ADD" data-id="${t.id}">+</i>
            </div>
            <div class="shopInfo_total">${parseFloat(t.cart_num*t.price).toFixed(2)}</div>
            <div class="shopInfo_del"  data-id="${t.id}"></div>
        </div>
            `}),s+="</div>",$(".cart").html(s),a=`
        <div class="checkoutSumbit">
                    <ul class="settle">
                        <li><input type="checkbox" name="quan" class="Allcheck" ${t?"checked":""}>全选</li>
                        <li class="alldel">批量删除</li>
                        <li class="line"></li>
                        <li class="service">联系客服</li>
                    </ul>
                    <ul class="total">
                        <li class="checkNum">已选择<span>${a[0]}</span>件商品</li>
                        <li class="totalPrice">合计：<span>￥${a[1]}</span></li>
                        <li class="Sumbit">立即结算</li>
                    </ul>
                </div>
        `,$(".SUMBIT").html(a)):$(".cart").html(`
        <div class="notLogin">
                        <i></i>
                        <p>购物车空空的哦~，去看看心仪的商品吧~</p>
                        <a href="../pages/index1.html">去购物 ></a>
                    </div>
        `)}function total(){var s=0,a=0,i=0;return cartList.forEach(t=>{1==t.select&&(s+=parseInt(t.cart_num),a+=parseFloat(t.cart_num*t.price),i=a.toFixed(2))}),[s,i]}cartList=JSON.parse(cartList)||[],name1?show():(alert("您还未登录，请登录后再进入！"),location="../pages/login.html?pathUrl="+url1),$(".cart").delegate(".ADD","click",function(){var s=$(this).attr("data-id");cartList.forEach(t=>{t.id==s&&t.cart_num++}),localStorage.setItem("cartList1",JSON.stringify(cartList)),show()}),$(".cart").delegate(".SUB","click",function(){var s=$(this).attr("data-id");cartList.forEach(t=>{t.id==s&&(1<t.cart_num?t.cart_num--:1==t.cart_num&&$(this).addClass("mins"))}),localStorage.setItem("cartList1",JSON.stringify(cartList)),show()}),$(".cart").delegate(".shopInfo_del","click",function(){var s=$(this).attr("data-id");cartList=cartList.filter(t=>t.id!=s),localStorage.setItem("cartList1",JSON.stringify(cartList)),show(),location.reload()}),$(".cart").delegate("[name=quan]","click",function(){cartList.forEach(t=>{$(this)[0].checked?t.select=1:t.select=0}),localStorage.setItem("cartList1",JSON.stringify(cartList)),show()}),$(".SUMBIT").delegate("[name=quan]","click",function(){cartList.forEach(t=>{$(this)[0].checked?t.select=1:t.select=0}),localStorage.setItem("cartList1",JSON.stringify(cartList)),show()}),$(".cart").delegate("[name=xuan]","click",function(){var s=$(this).attr("data-id");cartList.forEach(t=>{t.id==s&&(t.select=1==t.select?"0":"1")}),localStorage.setItem("cartList1",JSON.stringify(cartList)),show()}),$(".SUMBIT").delegate(".alldel","click",function(){var s=0;cartList.forEach(t=>{1==t.select&&s++}),0!=s?(cartList=cartList.filter(t=>1!=t.select),localStorage.setItem("cartList1",JSON.stringify(cartList)),show(),location.reload()):alert("请选择要删除的商品~")}),$(".SUMBIT").delegate(".Sumbit","click",function(){var s=0;cartList.forEach(t=>{1==t.select&&s++}),0!=s?$(".CloseAccount").css("display","block"):alert("请选择要购买的商品再结算哦~")}),$(".closemark").click(function(){$(".CloseAccount").css("display","none")}),$(".goAccount").click(function(){localStorage.setItem("cartList1",JSON.stringify([])),location.reload()}),$.ajax({url:"../php/shops.php",dataType:"json",success:function(t){var t=t.slice(64,84),s="";t.forEach(t=>{s+=`
                <li>
                    <a href="../pages/detail.html?id=${t.id}">
                        <div class="guessLike-shops-img"><img src="${t.imgurl}" alt="">
                        </div>
                        <div class="guessLike-shops-all">
                            <div class="guessLike-shops-brand">${t.title}</div>
                            <div class="guessLike-shops-title">${t.text}</div>
                            <div class="guessLike-shops-price">￥${t.price}</div>
                        </div>
                    </a>
                </li>
            `}),$(".guessLike-shops").html(s)}});var c=0;$(".rightBtn").addClass("disabled"),$(".leftBtn").click(function(){3<++c?c=3:3==c&&$(".leftBtn").addClass("disabled"),$(".guessLike-shops").animate({left:-1190*c},500),$(".rightBtn").removeClass("disabled")}),$(".rightBtn").click(function(){--c<0?c=0:0==c&&$(".rightBtn").addClass("disabled"),$(".guessLike-shops").animate({left:-1190*c},500),$(".leftBtn").removeClass("disabled")});