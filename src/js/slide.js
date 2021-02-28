function slide(slidebox,imglist,dots,slideshow_prev,slideshow_next){
    var index = 1
    var timer
    imglist[0].className='active'
    dots[0].className='dots-show'
    autoMove()
    function autoMove() {
        timer = setInterval(function () {
            fn1()
            index++
            if (index == imglist.length) {
                index = 0
            }
        }, 2500)
    }
    //点击底部按钮切换图片
    for (let i = 0; i < dots.length; i++) {
        dots[i].onclick = function () {
            clearInterval(timer)
            index = i
            fn1()
            autoMove()
        }
    }
    //点击左右按钮切换
    slideshow_prev.onclick = function () {
        clearInterval(timer)
        index--
        if (index < 0) {
            index = imglist.length-1
        }
        fn1()
        autoMove()
    }
    slideshow_next.onclick = function () {
        clearInterval(timer)
        index++
        if (index > imglist.length-1) {
            index = 0
        }
        fn1()
        autoMove()
    }
    //鼠标移入暂停
    slidebox.onmouseover = function () {
        clearInterval(timer)
        slideshow_prev.style.display = 'block'
        slideshow_next.style.display='block'

    }
    //鼠标移出
    slidebox.onmouseout = function () {
        clearInterval(timer)
        autoMove()
        slideshow_prev.style.display = 'none'
        slideshow_next.style.display='none'
    }
    function fn1() {
        for (var j = 0; j < imglist.length; j++) {
            imglist[j].className = ''
            dots[j].className = ''
        }
        imglist[index].className = 'active'
        dots[index].className = 'dots-show'
    }
}