//获取账号cookie
var name1 = getCookie('name1')
//获取地址栏的地址
var url1 = location.href
//获取localstorage中的cartList1
var cartList = localStorage.getItem("cartList1")
//把当前cartList字符串转化为数组对象
cartList = JSON.parse(cartList) || []
//判断cookie是否存在
if (name1) {
    show()
} else {
    alert('您还未登录，请登录后再进入！')
    location = "../pages/login.html?pathUrl=" + url1
}
function show() {
    //判断当前localstorage中是否有内容
    if (cartList.length > 0) {
        //获取全选框是否被选中
        var quan = cartList.every(item => {
            //判断当前商品是否被选中
            return item.select == 1
        })
        //获取当前被选中商品种类和价格
        var sum = total()
        var str2 = `
        <div class="checkoutMain">
        <ul class="shopnav">
            <li class="quanxuan"><input type="checkbox" name="quan" class="Allcheck" ${quan ? "checked" : ''}>全选</li>
            <li class="prodinfo">商品信息</li>
            <li class="oneprice">单价（元）</li>
            <li class="prodnum">数量</li>
            <li class="totalprice">小计（元）</li>
            <li class="del">操作</li>
        </ul>
        `
        //遍历数组中所有的商品
        cartList.forEach(item => {
            str2 += `
            <div class="shopInfo">
            <div class="shopInfo_xuan"><input type="checkbox" name="xuan"  ${item.select == 1 ? "checked" : ''} data-id="${item.id}"></div>
            <div class="shopInfo_img"><img src="${item.imgurl}" alt=""></div>
            <div class="shopInfo_text">
                <h3>${item.title}</h3>
                <h4>${item.text}</h4>
                <h5>${item.specification}</h5>
            </div>
            <div class="shopInfo_price">${item.price}</div>
            <div class="shopInfo_num">
                <i class="SUB" data-id="${item.id}">-</i>
                <span class="NUM">${item.cart_num}</span>
                <i class="ADD" data-id="${item.id}">+</i>
            </div>
            <div class="shopInfo_total">${parseFloat(item.cart_num * item.price).toFixed(2)}</div>
            <div class="shopInfo_del"  data-id="${item.id}"></div>
        </div>
            `
        })
        str2 += '</div>'
        $('.cart').html(str2)
        //
        var str3 = `
        <div class="checkoutSumbit">
                    <ul class="settle">
                        <li><input type="checkbox" name="quan" class="Allcheck" ${quan ? "checked" : ''}>全选</li>
                        <li class="alldel">批量删除</li>
                        <li class="line"></li>
                        <li class="service">联系客服</li>
                    </ul>
                    <ul class="total">
                        <li class="checkNum">已选择<span>${sum[0]}</span>件商品</li>
                        <li class="totalPrice">合计：<span>￥${sum[1]}</span></li>
                        <li class="Sumbit">立即结算</li>
                    </ul>
                </div>
        `
        $('.SUMBIT').html(str3)

    } else {
        var str1 = `
        <div class="notLogin">
                        <i></i>
                        <p>购物车空空的哦~，去看看心仪的商品吧~</p>
                        <a href="../pages/index1.html">去购物 ></a>
                    </div>
        `
        //将数据渲染到页面
        $('.cart').html(str1)
    }
}

//点击增加商品按钮
$('.cart').delegate('.ADD', 'click', function () {
    //获取当前对象中的id属性
    var id = $(this).attr("data-id")
    //遍历cartList数组对象
    cartList.forEach(item => {
        if (item.id == id) {
            item.cart_num++
        }
    })
    //重新把当前操作完毕的数组添加到localstorage中
    localStorage.setItem('cartList1', JSON.stringify(cartList))
    //调用show()重新渲染页面
    show()
})
//点击减少商品按钮
$('.cart').delegate('.SUB', 'click', function () {
    //获取当前对象中的id属性
    var id = $(this).attr("data-id")
    //遍历cartList数组对象
    cartList.forEach(item => {
        if (item.id == id) {
            if (item.cart_num > 1) {
                item.cart_num--
            } else if (item.cart_num == 1) {
                $(this).addClass('mins')
            }
        }
    })
    //重新把当前操作完毕的数组添加到localstorage中
    localStorage.setItem('cartList1', JSON.stringify(cartList))
    //调用show()重新渲染页面
    show()
})
//点击删除按钮
$('.cart').delegate('.shopInfo_del', 'click', function () {
    var id = $(this).attr("data-id")
    cartList = cartList.filter(item => {
        //过滤被删除商品
        return item.id != id
    })
    //重新把当前操作完毕的数组添加到localstorage中
    localStorage.setItem('cartList1', JSON.stringify(cartList))
    //调用show()重新渲染页面
    show()
    location.reload()
})
//全选
$('.cart').delegate('[name=quan]', 'click', function () {
    cartList.forEach(item => {
        if ($(this)[0].checked) {
            item.select = 1
        } else {
            item.select = 0
        }
    })
    //重新把当前操作完毕的数组添加到localstorage中
    localStorage.setItem("cartList1", JSON.stringify(cartList))
    //调用show()重新渲染页面
    show()
})
$('.SUMBIT').delegate('[name=quan]', 'click', function () {
    cartList.forEach(item => {
        if ($(this)[0].checked) {
            item.select = 1
        } else {
            item.select = 0
        }
    })
    //重新把当前操作完毕的数组添加到localstorage中
    localStorage.setItem("cartList1", JSON.stringify(cartList))
    //调用show()重新渲染页面
    show()
})
//选中
$('.cart').delegate('[name=xuan]', 'click', function () {
    var id = $(this).attr('data-id')
    cartList.forEach(item => {
        if (item.id == id) {
            item.select = item.select == 1 ? '0' : '1'
        }
    })
    //重新把当前操作完毕的数组添加到localstorage中
    localStorage.setItem("cartList1", JSON.stringify(cartList))
    //调用show()重新渲染页面
    show()
})
//批量删除
$('.SUMBIT').delegate('.alldel', 'click', function () {
    //遍历所有cartList
    var x = 0
    cartList.forEach(item => {
        if (item.select == 1) {
            x++
        }
    })
    if (x != 0) {
        cartList = cartList.filter(item => {
            return item.select != 1
        })
        //重新把当前操作完毕的数组添加到localstorage中
        localStorage.setItem("cartList1", JSON.stringify(cartList))
        //调用show()重新渲染页面
        show()
        location.reload()
    } else {
        alert('请选择要删除的商品~')
    }
})
//统计函数
function total() {
    var num = 0 //所选商品总数
    var price = 0 //所选商品总价
    var pri = 0
    //遍历
    cartList.forEach(item => {
        if (item.select == 1) {
            num += parseInt(item.cart_num)
            price += parseFloat(item.cart_num * item.price)
            pri = price.toFixed(2)
        }
    })
    return [num, pri]
}
//立即结算
$('.SUMBIT').delegate('.Sumbit', 'click', function () {
    var a = 0
    cartList.forEach(item => {
        if (item.select == 1) {
            a++
        }
    })
    if (a != 0) {
        $('.CloseAccount').css('display', 'block')
    } else {
        alert('请选择要购买的商品再结算哦~')
    }
})
$('.closemark').click(function () {
    $('.CloseAccount').css('display', 'none')
})
$('.goAccount').click(function () {
    //重新把当前操作完毕的数组添加到localstorage中
    localStorage.setItem("cartList1", JSON.stringify([]))
    // 刷新本页面
    location.reload()
})


// 猜你喜欢
$.ajax({
    url: "../php/shops.php",
    dataType: "json",
    success: function (dt) {
        //获取要显示的数组
        var ar1 = dt.slice(64, 84)
        //创建拼接所有数据的字符串
        var str1 = ''
        //遍历ar1数组中所有数据

        ar1.forEach(item => {
            str1 += `
                <li>
                    <a href="../pages/detail.html?id=${item.id}">
                        <div class="guessLike-shops-img"><img src="${item.imgurl}" alt="">
                        </div>
                        <div class="guessLike-shops-all">
                            <div class="guessLike-shops-brand">${item.title}</div>
                            <div class="guessLike-shops-title">${item.text}</div>
                            <div class="guessLike-shops-price">￥${item.price}</div>
                        </div>
                    </a>
                </li>
            `
        })
        //把当前拼接好的字符串添加到页面中
        $('.guessLike-shops').html(str1)
    }
})

//给左右切换按钮绑定点击事件
var c = 0
$('.rightBtn').addClass('disabled')
$('.leftBtn').click(function () {
    c++
    if (c > 3) {
        c = 3
    } else if (c == 3) {
        $('.leftBtn').addClass('disabled')
    }
    $('.guessLike-shops').animate({ left: -1190 * c }, 500)
    $('.rightBtn').removeClass('disabled')
})
$('.rightBtn').click(function () {
    c--
    if (c < 0) {
        c = 0
    } else if (c == 0) {
        $('.rightBtn').addClass('disabled')
    }
    $('.guessLike-shops').animate({ left: -1190 * c }, 500)
    $('.leftBtn').removeClass('disabled')
})