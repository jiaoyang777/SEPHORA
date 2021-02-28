$("[name=search]").click(function(){$(this).prop("placeholder",""),$(".search-main-focus").css({display:"block","boder-top":"none"}),$(this).mouseout(function(){$(".search-main-focus").css("display","none")}).one("mouseover",function(){$(".search-main-focus").css({display:"block","boder-top":"none"})}),$(".search-main-focus").mousemove(function(){$(this).css("display","block")}).mouseout(function(){$(this).css("display","none")})});var key1=["新年好礼享不停","红出新运势","新年开运锦囊"],c=0;function keyfn(){2<++c&&(c=0),$("[name=search]").prop("placeholder",key1[a])}setInterval(keyfn,3e3),$(".search-mincart").hover(function(){$(this).css("border-bottom",0),$(".mincarts").addClass("mincarts-change")},function(){$(this).css("border-bottom","1px solid #ccc"),$(".mincarts").removeClass("mincarts-change")});var a=0,b=0;function notic(){2<++a&&(a=0),$(".top-notice-list li").eq(a).css("top","30px"),$(".top-notice-list li").eq(a).animate({top:0},500),$(".top-notice-list li").eq(b).animate({top:-30},500),b=a}setInterval(notic,5e3);var str2,cookie1=getCookie("name1"),cartList=localStorage.getItem("cartList1");function show(){var a,s;0<cartList.length?(a=total(),s=`
        <p class="search-mincart-num">购物袋<span>${cartList.length}</span>件</p>
       <div>
        <div class="mincarts mincarts-three">
        <div>
            <h3>最新加入的商品</h3>
            <ul>
        `,cartList.forEach(a=>{s+=`
        <li class="mincarts-shopslist">
        <div class="mincarts-shopslist-img"><a href=""><img src="${a.imgurl}" alt=""></a>
        </div>
        <div>
            <div class="mincarts-shopslist-conent"><a href="">${a.text}</a>
            </div>
            <div>规格：套装</div>
        </div>
        <div class="mincarts-shopslist-price">
            <div>￥<span>${a.price}</span></div>
            <div>x<span>${a.cart_num}</span></div>
            <a href="javascript:;" class="del" data-id="${a.id}">删除</a>
        </div>
    </li>
        `}),s+=`
        </ul>
        <div class="mincarts-total">
             <div class="mincarts-total-num">
              <p>共<span>${a[0]}</span>件商品</p>
            </div>
           <div class="mincarts-total-price">
              <p>共计<span>${a[1]}</span></p>
           </div>
           <a href="./cart.html"><div class="mincarts-go">去购物车</div></a>
           </div>
           </div>
       </div>
       </div>
        `,$(".search-mincart").html(s)):$(".search-mincart").html(`
        <p class="search-mincart-num">购物袋<span>0</span>件</p>
           <div>
        <div class="mincarts">
                       <div class="mincarts-two">
                           <p>购物车空空的哦~，去看看心仪的商品吧~</p>
                       </div>
                   </div>
                   </div>
        `)}function total(){var s=0,t=0,i=0;return cartList.forEach(a=>{s+=parseInt(a.cart_num),t+=parseFloat(a.cart_num*a.price),i=t.toFixed(2)}),[s,i]}cartList=JSON.parse(cartList)||[],cookie1?show():(str2=`
     <p class="search-mincart-num">购物袋<span>0</span>件</p>
                <div>
     <div class="mincarts">
     <div class="mincarts-one">
         <p>购物车内暂时没有商品，登录后将显示您之前加入的商品</p>
         <p class="mincarts-login"><a href="./login.html">登录</a></p>
     </div>
    </div>
    </div>
     `,$(".search-mincart").html(str2)),$(".search-mincart").delegate(".del","click",function(){var s=$(this).attr("data-id");cartList=cartList.filter(a=>a.id!=s),localStorage.setItem("cartList1",JSON.stringify(cartList)),show(),$(".search-mincart").css("border-bottom","1px solid #ccc")}),$(".search-sumbit").click(function(){var a=$('[name="search"]').val();localStorage.setItem("key",a),localStorage.removeItem("cat"),location="./list.html"}),$(".Goindex").click(function(){localStorage.removeItem("key"),localStorage.removeItem("cat")});