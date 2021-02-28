/* 热门搜索 */
$('[name=search]').click(function () {
    $(this).prop('placeholder', '')
    $('.search-main-focus').css({ 'display': 'block', 'boder-top': 'none' })
    $(this).mouseout(function () {
        $('.search-main-focus').css('display', 'none')
    }).one('mouseover', function () {
        $('.search-main-focus').css({ 'display': 'block', 'boder-top': 'none' })
    })
    $('.search-main-focus').mousemove(function () {
        $(this).css('display', 'block')
    }).mouseout(function () {
        $(this).css('display', 'none')
    })
})
/* 搜索框关键字变化 */
// 定义一个数组存放关键词
var key1 = ['新年好礼享不停', '红出新运势', '新年开运锦囊']
var c = 0
function keyfn() {
    c++
    if (c > 2) {
        c = 0
    }
    $('[name=search]').prop('placeholder', key1[a])
}
setInterval(keyfn, 3000)

/* 迷你购物车 */
$('.search-mincart').hover(function () {
    $(this).css('border-bottom', 0)
    $('.mincarts').addClass('mincarts-change')
}, function () {
    $(this).css('border-bottom', '1px solid #ccc')
    $('.mincarts').removeClass('mincarts-change')
})

/* 顶部滚动公告栏 */
var a = 0
var b = 0
function notic() {
    a++
    if (a > 2) {
        a = 0
    }
    $(".top-notice-list li").eq(a).css("top", "30px")
    $(".top-notice-list li").eq(a).animate({ top: 0 }, 500)
    $(".top-notice-list li").eq(b).animate({ top: -30 }, 500)
    b = a
}
// 开启定时器
setInterval(notic, 5000)

/* cookie */
//获取span标签
var cookie1 = getCookie('name1')
//  获取localstorage中的cartList
var cartList = localStorage.getItem('cartList1')
//把当前cartList字符串转为数组对象
cartList = JSON.parse(cartList) || []
//判断cookie是否存在
if (cookie1) {
    show()
} else {
    var str2 = `
     <p class="search-mincart-num">购物袋<span>0</span>件</p>
                <div>
     <div class="mincarts">
     <div class="mincarts-one">
         <p>购物车内暂时没有商品，登录后将显示您之前加入的商品</p>
         <p class="mincarts-login"><a href="./login.html">登录</a></p>
     </div>
    </div>
    </div>
     `
    $('.search-mincart').html(str2)
}


function show() {
    if (cartList.length > 0) {
        var sum = total()
        var str = `
        <p class="search-mincart-num">购物袋<span>${cartList.length}</span>件</p>
       <div>
        <div class="mincarts mincarts-three">
        <div>
            <h3>最新加入的商品</h3>
            <ul>
        `
        //遍历数组中的商品
        cartList.forEach(item => {
            str += `
        <li class="mincarts-shopslist">
        <div class="mincarts-shopslist-img"><a href=""><img src="${item.imgurl}" alt=""></a>
        </div>
        <div>
            <div class="mincarts-shopslist-conent"><a href="">${item.text}</a>
            </div>
            <div>规格：套装</div>
        </div>
        <div class="mincarts-shopslist-price">
            <div>￥<span>${item.price}</span></div>
            <div>x<span>${item.cart_num}</span></div>
            <a href="javascript:;" class="del" data-id="${item.id}">删除</a>
        </div>
    </li>
        `
        })

        str += `
        </ul>
        <div class="mincarts-total">
             <div class="mincarts-total-num">
              <p>共<span>${sum[0]}</span>件商品</p>
            </div>
           <div class="mincarts-total-price">
              <p>共计<span>${sum[1]}</span></p>
           </div>
           <a href="./cart.html"><div class="mincarts-go">去购物车</div></a>
           </div>
           </div>
       </div>
       </div>
        `
        $('.search-mincart').html(str)
    } else {
        var str1 = `
        <p class="search-mincart-num">购物袋<span>0</span>件</p>
           <div>
        <div class="mincarts">
                       <div class="mincarts-two">
                           <p>购物车空空的哦~，去看看心仪的商品吧~</p>
                       </div>
                   </div>
                   </div>
        `
        $('.search-mincart').html(str1)
    }
}

//点击删除按钮
$('.search-mincart').delegate('.del', 'click', function () {
    var id = $(this).attr("data-id")
    cartList = cartList.filter(item => {
        //过滤被删除商品
        return item.id != id
    })
    //重新把当前操作完毕的数组添加到localstorage中
    localStorage.setItem('cartList1', JSON.stringify(cartList))
    //调用show()重新渲染页面
    show()
    $('.search-mincart').css('border-bottom', '1px solid #ccc')
})
//统计函数
function total() {
    var num = 0 //所选商品总数
    var price = 0 //所选商品总价
    var pri = 0
    //遍历
    cartList.forEach(item => {
        num += parseInt(item.cart_num)
        price += parseFloat(item.cart_num * item.price)
        pri = price.toFixed(2)
    })
    return [num, pri]
}

//点击搜索框获取数据
$('.search-sumbit').click(function () {
    var keyword = $('[name="search"]').val();
    localStorage.setItem("key", keyword)
    localStorage.removeItem('cat')
    location='./list.html'
})
//去首页删除本地的key
$('.Goindex').click(function () {
    localStorage.removeItem('key')
    localStorage.removeItem('cat')
})

