/* 顶部滚动公告栏 */
var a1 = 0
var b1 = 0
function notic() {
    a1++
    if (a1 > 2) {
        a1 = 0
    }
    $(".top-notice-list li").eq(a1).css("top", "30px")
    $(".top-notice-list li").eq(a1).animate({ top: 0 }, 500)
    $(".top-notice-list li").eq(b1).animate({ top: -30 }, 500)
    b1 = a1
}
// 开启定时器
setInterval(notic, 5000)


/* cookie */
 //获取span标签
 var span1 = document.querySelector('.login-change')
 var cookie1 = getCookie('name1')
 if (cookie1) {
     span1.innerHTML = `
     <a href="" class="username">${cookie1}</a><em></em>
     <b></b>
     <a href="javascript:;" class="exit">退出</a>
     `
 }
 //给退出绑定点击事件 点击删除cookie
 $('.exit').click(function(){
     $('.mask').css('display', 'block')

 })
 //给确认按钮绑定点击事件
$('.exitConfirm').click(function () {
    delCookie('name1')
    location.reload()
}).next().click(function () {
    $('.mask').css('display', 'none')
})
 //给关闭按钮绑定点击事件
$('.closeExit').click(function () {
    $('.mask').css('display', 'none')
 })