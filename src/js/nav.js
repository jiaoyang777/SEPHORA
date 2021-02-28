/* 全部类目商品 */
$('.nav-allshop-menu-list ul>li').hover(function () {
    $(this).addClass('active').siblings().removeClass('active').parent().find('span').removeClass('active-style')
    $(this).find('span').addClass('active-style')
    $('.nav-allshop-content').css('display', 'block')
}, function () {
})
$('.nav-allshop-menu').hover(function () {
}, function () {
    $('.nav-allshop-content').css('display', 'none')
    $('.nav-allshop-menu-list ul>li').removeClass('active').find('span').removeClass('active-style')
})

$('.salable').click(function () {
    localStorage.removeItem('key')
    localStorage.removeItem('cat')
})

$('.nav-allshop-menu-list').delegate('LI', 'click', function () {
    localStorage.removeItem('key')
    var category = $(this).find('a').eq(0).html()
    localStorage.setItem("cat", category)
    location = './list.html'
})
$('.nav-allshop-menu').hover(function () {
    $('.nav-allshop-menu-list').css('display', 'block')
}, function () {
    $('.nav-allshop-menu-list').css('display', 'none')
})

$('.nav-allshop-menu-list').delegate('LI', 'mouseover', function () {
    var cate1 = $(this).find('a').eq(0).html()
    $.ajax({
        url: '../php/menu.php',
        type: 'get',
        data: `val=${cate1}`,
        dataType: 'json',
        success: function (dt) {
            var str = ''
            str += `
            <div class="nav-allshop-content-info">
                            <div class="nav-allshop-content-info-title">${dt.category}</div>
                            <div class="nav-allshop-content-info-category">
                                <ol>
                                    <li>
                                        <p><a href="">${dt.a1}</a></p>
                                        <p><span><a href="">${dt.b1}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${dt.a2}</a></p>
                                        <p><span><a href="">${dt.b2}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${dt.a3}</a></p>
                                        <p><span><a href="">${dt.b3}</a></span></p>
                                    </li>
                                </ol>
                                <ol>
                                    <li>
                                        <p><a href="">${dt.a4}</a></p>
                                        <p><span><a href="">${dt.b4}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${dt.a5}</a></p>
                                        <p><span><a href="">${dt.b5}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${dt.a6}</a></p>
                                        <p><span><a href="">${dt.b6}</a></span></p>
                                    </li>
                                </ol>
                                <ol>
                                    <li>
                                        <p><a href="">${dt.a7}</a></p>
                                        <p><span><a href="">${dt.b7}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${dt.a8}</a></p>
                                        <p><span><a href="">${dt.b8}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${dt.a9}</a></p>
                                        <p><span><a href="">${dt.b9}</a></span></p>
                                    </li>
                                    <li>
                                        <p><a href="">${dt.a10}</a></p>
                                        <p><span><a href="">${dt.b10}</a></span></p>
                                    </li>
                                </ol>
                            </div>
                            <ul class="nav-allshop-content-info-logo">
                                <li><a href=""><img src="${dt.brand1}" alt=""></a></li>
                                <li><a href=""><img src="${dt.brand2}" alt=""></a></li>
                                <li><a href=""><img src="${dt.brand3}" alt=""></a></li>
                                <li><a href=""><img src="${dt.brand4}" alt=""></a></li>
                            </ul>
                        </div>
                        <ul class="nav-allshop-content-info-banner">
                            <li><a href=""><img src="${dt.banner1}" alt=""></a></li>
                            <li><a href=""><img src="${dt.banner2}" alt=""></a></li>
                        </ul>
                    </div>
            `
            $('.nav-allshop-content').html(str)
        }
    })
})