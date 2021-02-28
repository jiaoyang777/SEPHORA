/* 顶部通栏 */
$(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
        $('.fixedTop').addClass('active')
    } else {
        $('.fixedTop').removeClass('active')
    }
})
$('.SUMbit').click(function () {
    var keyword = $('[name="search1"]').val();
    console.log(keyword)
    localStorage.setItem("key", keyword)
    localStorage.removeItem('cat')
    location='./list.html'
})