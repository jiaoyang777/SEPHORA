//轮播
var slidebox = document.querySelector('.slidebox')
var imglist = document.querySelector('.slideshow').children
var dots = document.querySelector('.slideshow-dots').children
var slideshow_prev = document.querySelector('.slideshow-prev')
var slideshow_next = document.querySelector('.slideshow-next')
var brand_slidebox = document.querySelector('.brand-slide')
var brand_imglist = document.querySelector('.brand-slidebox-imglist').children
var brand_dots = document.querySelector('.brand-slidebox-dots').children
var brand_slidebox_prev = document.querySelector('.brand-slidebox-prev')
var brand_slidebox_next = document.querySelector('.brand-slidebox-next')

slide(slidebox, imglist, dots, slideshow_prev, slideshow_next)
slide(brand_slidebox, brand_imglist, brand_dots, brand_slidebox_prev, brand_slidebox_next)

/* 顶部通栏 */
$(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
        $('.fixedTop').addClass('active')
    } else {
        $('.fixedTop').removeClass('active')
    }
    if ($(window).scrollTop() > 1520) {
        $('.fixedLeft').css("display", "block")
    } else {
        $('.fixedLeft').css("display", "none")
    }
})

/* 楼层导航 */
$('.fixedLeft').css('left', $(window).width() / 2 - 1190 / 2 - 60)
$(window).resize(function () {
    $('.fixedLeft').css('left', $(window).width() / 2 - 1190 / 2 - 60)
})

//定义一个数组存放楼层位置
var Floornum = [0]
$('div[data-floor]').each(function () {
    Floornum.push($(this).offset().top)
})
// 滚动
$(window).scroll(function () {
    // 定义两板块的间距
    var h2 = parseInt(Floornum[2] - Floornum[1])
    // 获取滑动距离
    var a = $(window).scrollTop() - h2+150
    // 判断小于0和超过楼层后移出类名
    if (a <= 0 || a >= Floornum[Floornum.length - 1] + h2) {
        $('.fixedLeft ul li').removeClass('active')
        return
    } else {
        // 遍历
        for (var i = 0; i < Floornum.length; i++) {
            // 判断滑动距离是否在该楼层区间，满足退出循环
            if (a > Floornum[i - 1] && a < Floornum[i]) {
                break
            }
        }
        // 给该楼层添加类名，其他楼层移出楼层
        $('.fixedLeft ul li').eq(i - 1).addClass('active').siblings().removeClass('active')
    }

})

// 给楼层导航绑定点击事件
$('.fixedLeft ul li').click(function () {
    // 获取楼层位置
    var floor = $(this).data('navlist')
    // 获取点击的该楼层位置
    var h1 = $("div[data-floor=" + floor + "]").offset().top - 80
    $('html').stop().animate({
        "scrollTop": h1
    }, 500)
})

/* 导入数据 */
/* 品牌 */
$.ajax({
    url: "../php/brand.php",
    dataType: "json",
    success: function (dt) {
        //获取要显示的数组
        var ar1 = dt.slice(0, 16)
        var ar2 = dt.slice(15, 23)
        //创建拼接所有数据的字符串
        var str1 = ''
        var str2 = ''
        //遍历ar1数组中所有数据
        ar1.forEach(item => {
            str1 += `
            <li>
                <a href="" class="brands-class-img"><img src="${item.brand_img}" alt=""></a>
                <div class="brands-class-hover">
                    <p>${item.brand_nameCN}</p>
                    <a href="">点击查看</a>
                </div>
            </li>
            `
        })
        ar2.forEach(item => {
            str2 += `
            <li><a href=""><img src="${item.brand_img}" alt=""></a></li>
            `
        })
        //把当前拼接好的字符串添加到页面中
        $('.brands-class').find("ul").html(str1)
        $('.mdules-footer').find('ul').html(str2)
    }
})
/* 商品 */
$.ajax({
    url: "../php/shops.php",
    dataType: "json",
    success: function (dt) {
        //获取要显示的数组
        var ar1 = dt.slice(0, 8)
        var ar2 = dt.slice(8, 16)
        var ar3 = dt.slice(16, 24)
        var ar4 = dt.slice(24, 32)
        var ar5 = dt.slice(32, 40)
        var ar6 = dt.slice(40, 48)
        var ar7 = dt.slice(48, 56)
        var ar8 = dt.slice(56, 64)
        var ar9 = dt.slice(64, 84)
        var ar10 = [dt[84],dt[85]]
        //创建拼接所有数据的字符串
        var str1 = ''
        var str2 = ''
        var str3 = ''
        var str4 = ''
        var str5 = ''
        var str6 = ''
        var str7 = ''
        var str8 = ''
        var str9 = ''
        var str10 = ''
        //遍历ar1数组中所有数据
        ar1.forEach(item => {
            str1 += `
            <li>
                            <a href="../pages/detail.html?id=${item.id}">
                                <div class="mdules-shops-brand">${item.title}</div>
                                <div class="mdules-shops-title">${item.text}</div>
                                <div class="mdules-shops-price">￥${item.price}</div>
                                <div class="mdules-shops-img"><img src="${item.imgurl}" alt=""></div>
                            </a>
                        </li>
            `
        })
        ar2.forEach(item => {
            str2 += `
            <li>
                            <a href="../pages/detail.html?id=${item.id}">
                                <div class="mdules-shops-brand">${item.title}</div>
                                <div class="mdules-shops-title">${item.text}</div>
                                <div class="mdules-shops-price">￥${item.price}</div>
                                <div class="mdules-shops-img"><img src="${item.imgurl}" alt=""></div>
                            </a>
                        </li>
            `
        })
        ar3.forEach(item => {
            str3 += `
            <li>
                            <a href="../pages/detail.html?id=${item.id}">
                                <div class="mdules-shops-brand">${item.title}</div>
                                <div class="mdules-shops-title">${item.text}</div>
                                <div class="mdules-shops-price">￥${item.price}</div>
                                <div class="mdules-shops-img"><img src="${item.imgurl}" alt=""></div>
                            </a>
                        </li>
            `
        })
        ar4.forEach(item => {
            str4 += `
            <li>
                            <a href="../pages/detail.html?id=${item.id}">
                                <div class="mdules-shops-brand">${item.title}</div>
                                <div class="mdules-shops-title">${item.text}</div>
                                <div class="mdules-shops-price">￥${item.price}</div>
                                <div class="mdules-shops-img"><img src="${item.imgurl}" alt=""></div>
                            </a>
                        </li>
            `
        })
        ar5.forEach(item => {
            str5 += `
            <li>
                            <a href="../pages/detail.html?id=${item.id}">
                                <div class="mdules-shops-brand">${item.title}</div>
                                <div class="mdules-shops-title">${item.text}</div>
                                <div class="mdules-shops-price">￥${item.price}</div>
                                <div class="mdules-shops-img"><img src="${item.imgurl}" alt=""></div>
                            </a>
                        </li>
            `
        })
        ar6.forEach(item => {
            str6 += `
            <li>
                            <a href="../pages/detail.html?id=${item.id}">
                                <div class="mdules-shops-brand">${item.title}</div>
                                <div class="mdules-shops-title">${item.text}</div>
                                <div class="mdules-shops-price">￥${item.price}</div>
                                <div class="mdules-shops-img"><img src="${item.imgurl}" alt=""></div>
                            </a>
                        </li>
            `
        })
        ar7.forEach(item => {
            str7 += `
            <li>
                            <a href="../pages/detail.html?id=${item.id}">
                                <div class="mdules-shops-brand">${item.title}</div>
                                <div class="mdules-shops-title">${item.text}</div>
                                <div class="mdules-shops-price">￥${item.price}</div>
                                <div class="mdules-shops-img"><img src="${item.imgurl}" alt=""></div>
                            </a>
                        </li>
            `
        })
        ar8.forEach(item => {
            str8 += `
            <li>
                            <a href="../pages/detail.html?id=${item.id}">
                                <div class="mdules-shops-brand">${item.title}</div>
                                <div class="mdules-shops-title">${item.text}</div>
                                <div class="mdules-shops-price">￥${item.price}</div>
                                <div class="mdules-shops-img"><img src="${item.imgurl}" alt=""></div>
                            </a>
                        </li>
            `
        })
        ar9.forEach(item => {
            str9 += `
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
        ar10.forEach(item => {
            str10 += `
            <li>
                            <a href="../pages/detail.html?id=${item.id}">
                                <div class="picks-info-product-brand">${item.title}</div>
                                <div class="picks-info-product-title">${item.text}</div>
                                <div class="picks-info-product-price">${item.price}</div>
                                <img src="${item.imgurl}" alt="">
                            </a>
                        </li>
            `
        })
        //把当前拼接好的字符串添加到页面中
        $('.SKIN').html(str1)
        $('.MAKEUP').html(str2)
        $('.FRAG').html(str3)
        $('.TOOLS').html(str4)
        $('.MAN').html(str5)
        $('.BODY').html(str6)
        $('.HAIR').html(str7)
        $('.FOOD').html(str8)
        $('.guessLike-shops').html(str9)
        $('.picks-info-product').html(str10)
    }
})
$('.nav-allshop-menu').hover(function () {
    $('.nav-allshop-menu-list').css('display','block')
}, function () {
    $('.nav-allshop-menu-list').css('display','block')
})