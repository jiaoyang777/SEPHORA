//给登录按钮绑定点击事事件
$('.sumbitBtn').click(function () {
    //获取手机号和密码
    var $phone = $('[name="user1"]')
    //获取内容
    var $phone_val = $phone.val()
    // 书写正则表达式
    var reg1 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/
    // 判断输入的电话号码是否是正确
    if (reg1.test($phone_val)) {
        $phone.next().addClass('pass')
        $('.errorInfo').eq(0).find('div').removeClass('active')
        $($phone).addClass('active-green')
    } else {
        $phone.next().addClass('error')
        $('.errorInfo').eq(0).find('div').addClass('active').find('span').eq(0).removeClass('hiddenError')
        $($phone).addClass('active-red')
    }
    // 判断验证码
    if ($('[name=card]').val().toUpperCase() === $('.code').html()) {
        $('[name=card]').addClass('active-green').next().addClass('pass')
        $('.errorInfo').eq(1).find('div').removeClass('active')
        // 当前端验证通过后发送ajax请求
        $.ajax({
            url: "../php/phlogin.php",
            type: "post",
            data: {
                userphone: $phone_val,
            },
            dataType: "text",
            success: function (dt) {
                if (dt == 0) {
                    $phone.next().addClass('error')
                    $('.errorInfo').eq(0).find('div').addClass('active').find('span').eq(0).removeClass('hiddenError').html('该账号未注册！')
                    $($phone).addClass('active-red')
                    createCode()
                    $('[name=card]').addClass('active-red').next().addClass('error')
                    $('.errorInfo').eq(1).find('div').addClass('active')
                    $('.Goregister').html('<a href="../pages/register.html">立即注册</a>')
                } else if (dt == 1) {
                    //判断地址栏是否有参数
                    if (location.search) {
                        //获取参数中传入的地址
                        var new_url = location.search.split('=')[1]
                        location.href = new_url
                    }
                    else {
                        location.href = "./index1.html"
                    }
                    setCookie("name1", $phone_val)
                }
            }
        })
    } else {
        $('[name=card]').addClass('active-red').next().addClass('error')
        $('.errorInfo').eq(1).find('div').addClass('active')
        createCode()
    }
    return false
})

//选中复选框解锁登录
$('[name="agreed"]').click(function () {
    //判断是否选中
    if (this.checked) {
        $('[type="button"]').addClass('passBtn').attr('disabled', false)
    } else {
        $('[type="button"]').removeClass('passBtn').attr('disabled', true)
    }
})

//获取焦点
$('[name="user1"]').focus(function () {
    $(this).removeClass('active-green').removeClass('active-red').css('border-bottom', '1px solid #000').next().addClass('input')
}).focusout(function () {
    $(this).css('border-bottom', '1px solid #ccc').next().removeClass('input')
})
$('[name="card"]').focus(function () {
    $(this).removeClass('active-green').removeClass('active-red').css('border-bottom', '1px solid #000').next().addClass('input')
    $('.code').css('color', '#000')
}).focusout(function () {
    $(this).css('border-bottom', '1px solid #ccc').next().removeClass('input')
})

//获取user和pass框
var user = document.querySelector('[name="user1"]')
var card = document.querySelector('[name="card"]')
//给user和pass框绑定input事件
user.oninput = function () {
    $(this).next().removeClass('error').removeClass('pass')
    $('.errorInfo').eq(0).find('div').removeClass('active')
}
card.oninput = function () {
    $(this).next().removeClass('error').removeClass('pass')
    $('.errorInfo').eq(1).find('div').removeClass('active')
}

// 调用验证码函数
createCode()
// 给点击验证码绑定点击事件，点击刷新验证码
$('.codeCg').click(function () {
    $('.code').html(createCode())
})