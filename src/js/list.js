/* 导入数据 */
/* 品牌 */
$.ajax({
    url: "../php/brand.php",
    dataType: "json",
    success: function (dt) {
        //获取要显示的数组
        var ar1 = dt.slice(0, 116)
        //创建拼接所有数据的字符串
        var str1 = ''
        //遍历ar1数组中所有数据
        ar1.forEach(item => {
            str1 += `
            <li><img src="${item.brand_img}" alt=""><a href="" class="cover">${item.brand_nameEN}</a></li>
            `
        })
        //把当前拼接好的字符串添加到页面中
        $('.brands_all_ul').html(str1)
    }
})

var pagination1 = document.querySelector('.pagination');
//获取localstorage中的key
var key = localStorage.getItem("key")
var cat = localStorage.getItem("cat")
if (key) {
    (async function () {
        var dt = await promiseAjax({
            url: '../php/key.php',
            type: 'get',
            data: `value1=${key}`,
            datatype: 'json',
        })
        //创建分页器对象
        new Pagination(pagination1, {
            pageInfo: {
                pagenum: 1,
                pagesize: 10,
                totalsize: dt.length,
                totalpage: Math.ceil(dt.length / 10)
            },
            textInfo: {
                first: '首页',
                prev: "<上一页",
                next: "下一页>",
                last: "尾页"
            }, cb(m) {
                console.log(dt)
                //获取当前页需要显示的数据
                var ar1 = dt.slice((m - 1) * 10, m * 10)
                //创建拼接所有数据的字符串
                var str = ''
                //遍历当前ar1数组中所有的数据
                ar1.forEach(item => {
                    str += `
                <li>
                        <div class="p_cont">
                            <div class="p_img">
                                <a href="../pages/detail.html?id=${item.id}"><img src="${item.imgurl}" alt=""></a>
                                <div class="p_buy" data-id="${item.id}">立即购买</div>
                            </div>
                            <div class="p_tags">
                                <span class="newtag">新品</span>
                                <span class="exclusive">独家</span>
                            </div>
                            <div class="p_brandEN">${item.title}</div>
                            <div class="p_productCN">
                                <a href="">${item.text}</a>
                            </div>
                            <div class="p_price">￥${item.price}</div>
                        </div>
                    </li>
                `
                })
                //把当前拼接好的字符串，添加到盒子中
                $('.cate-products-info').html(str)
                $('.shopsnum').html(dt.length)
                $('.serach_result').html(key)
            }
        })
    })()
} else if (cat) {
        (async function () {
            var dt = await promiseAjax({
                url: '../php/category.php',
                type: 'get',
                data: `value2=${cat}`,
                datatype: 'json',
            })
            //创建分页器对象
            new Pagination(pagination1, {
                pageInfo: {
                    pagenum: 1,
                    pagesize: 10,
                    totalsize: dt.length,
                    totalpage: Math.ceil(dt.length / 10)
                },
                textInfo: {
                    first: '首页',
                    prev: "<上一页",
                    next: "下一页>",
                    last: "尾页"
                }, cb(m) {
                    //获取当前页需要显示的数据
                    var ar1 = dt.slice((m - 1) * 10, m * 10)
                    //创建拼接所有数据的字符串
                    var str = ''
                    //遍历当前ar1数组中所有的数据
                    ar1.forEach(item => {
                        str += `
                    <li>
                            <div class="p_cont">
                                <div class="p_img">
                                    <a href="../pages/detail.html?id=${item.id}"><img src="${item.imgurl}" alt=""></a>
                                    <div class="p_buy" data-id="${item.id}">立即购买</div>
                                </div>
                                <div class="p_tags">
                                    <span class="newtag">新品</span>
                                    <span class="exclusive">独家</span>
                                </div>
                                <div class="p_brandEN">${item.title}</div>
                                <div class="p_productCN">
                                    <a href="">${item.text}</a>
                                </div>
                                <div class="p_price">￥${item.price}</div>
                            </div>
                        </li>
                    `
                    })
                    //把当前拼接好的字符串，添加到盒子中
                    $('.cate-products-info').html(str)
                    $('.shopsnum').html(dt.length)
                    $('.serach_result').html(cat)
                }
            })
        })()
    }else {
    (async function () {
        var dt = await promiseAjax({
            url: '../php/shops.php',
            datatype: 'json'
        })
        //创建分页器对象
        new Pagination(pagination1, {
            pageInfo: {
                pagenum: 1,
                pagesize: 10,
                totalsize: dt.length,
                totalpage: Math.ceil(dt.length / 10)
            },
            textInfo: {
                first: '首页',
                prev: "<上一页",
                next: "下一页>",
                last: "尾页"
            }, cb(m) {
                //获取当前页需要显示的数据
                var ar1 = dt.slice((m - 1) * 10, m * 10)
                //创建拼接所有数据的字符串
                var str = ''
                //遍历当前ar1数组中所有的数据
                ar1.forEach(item => {
                    str += `
                    <li>
                            <div class="p_cont">
                                <div class="p_img">
                                    <a href="../pages/detail.html?id=${item.id}"><img src="${item.imgurl}" alt=""></a>
                                    <div class="p_buy" data-id="${item.id}">立即购买</div>
                                </div>
                                <div class="p_tags">
                                    <span class="newtag">新品</span>
                                    <span class="exclusive">独家</span>
                                </div>
                                <div class="p_brandEN">${item.title}</div>
                                <div class="p_productCN">
                                    <a href="">${item.text}</a>
                                </div>
                                <div class="p_price">￥${item.price}</div>
                            </div>
                        </li>
                    `
                })
                //把当前拼接好的字符串，添加到盒子中
                $('.cate-products-info').html(str)
                $('.shopsnum').html(dt.length)
            }
        })
    })()
}

$('.cate-products').delegate('.p_buy', 'click', function () {
    $('.addSuccess').css('display', 'block')
    var id = $(this).attr('data-id')
    $.ajax({
        url: '../php/detail.php',
        data: 'id=' + id,
        dataType: "json",
        success: function (dt) {
            //获取localstorage中的cartlist1
            var cartList = localStorage.getItem('cartList1')
            //判断是否存在
            if (cartList) {
                //把localStorage中获取的内容转为数组对象
                cartList = JSON.parse(cartList)
                var a = 0
                //判断当前添加的商品是否在localStorage中存在
                //遍历数组中所有元素啊
                cartList.forEach(item => {
                    //判断当前遍历的商品是否等于要添加的商品
                    if (item.id == id) {
                        a++
                        item.cart_num++
                    }
                })
                //判断a变量是否等于0
                if (a == 0) {
                    //修改商品数量
                    dt.cart_num++
                    //把当前对象追加到数组中
                    cartList.push(dt)
                }
                //把当前商品添加到localStorage中
                localStorage.setItem("cartList1", JSON.stringify(cartList))
            } else {
                //修改当前商品数量
                dt['cart_num']++
                //把商品数量添加到localstorage中
                localStorage.setItem('cartList1', JSON.stringify([dt]))
            }
        }
    })
})
$('.closemark').click(function () {
    $('.addSuccess').css('display', 'none')
})
$('.goCart').click(function () {
    location = "../pages/cart.html"
})