/* 右侧返回顶部 */
$('.fixedRight').css('right', $(window).width() / 2 - 1190 / 2 - 60)
$(window).resize(function () {
    $('.fixedRight').css('right', $(window).width() / 2 - 1190 / 2 - 60)
})
$('.returnTop').click(function () {
    $('html').animate({ 'scrollTop': 0 }, 1000)
})
$(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
        $('.fixedRight').css("display", "block")
    } else {
        $('.fixedRight').css("display", "none")
    }
})