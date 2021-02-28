//给注册按钮绑定点击事事件
$('.sumbitBtn').click(function () {
    //获取手机号和密码
    var $phone = $('[name="user1"]')
    var $pass1 = $('[name="pass1"]')
    //获取内容
    var $phone_val = $phone.val()
    var $pass1_val = $pass1.val()
    // 书写正则表达式
    var reg1 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/
    var reg2 = /^[a-zA-Z]\w{7,17}$/
    var reg3 = /^[a-zA-Z]/
    var reg4 = /\w{8,18}/

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
    } else {
        $('[name=card]').addClass('active-red').next().addClass('error')
        $('.errorInfo').eq(1).find('div').addClass('active')
        $('.code').html(createCode())
    }
    // 判断密码正则
    if (reg2.test($pass1_val)) {
        $pass1.next().addClass('pass')
        $('.errorInfo').eq(2).find('div').removeClass('active')
        $($pass1).addClass('active-green')
    } else if (!reg3.test($pass1_val)) {
        $pass1.next().addClass('error')
        $('.errorInfo').eq(2).find('div').addClass('active').find('span').eq(0).removeClass('hiddenError').siblings().addClass('hiddenError')
        $($pass1).addClass('active-red')
    } else if (!reg4.test($pass1_val)) {
        $('[name=pass2]').addClass('active-red').next().addClass('error')
        $pass1.next().addClass('error')
        $('.errorInfo').eq(2).find('div').addClass('active').find('span').eq(1).removeClass('hiddenError').siblings().addClass('hiddenError')
        $($pass1).addClass('active-red')
    }
    //判断密码框是否为空
    if ($pass1_val == '') {
        $('.errorInfo').eq(2).find('div').addClass('active').find('span').eq(2).removeClass('hiddenError').siblings().addClass('hiddenError').end().end().end().find('i').removeClass('hiddenError')
        $pass1.next().addClass('error')
        $($pass1).addClass('active-red')
    }
    // 判断再次输入的密码是否等于第一次输的密码
    if ($pass1_val == $('[name=pass2]').val() && $('[name=pass2]').val() != '') {
        $('[name=pass2]').addClass('active-green').next().addClass('pass')
    } else if ($('[name=pass2]').val() == '') {
        $('[name=pass2]').addClass('active-red').next().addClass('error')
        $('.errorInfo').eq(3).find('div').addClass('active').find('span').eq(0).removeClass('hiddenError').next().addClass('hiddenError')
    } else {
        $('[name=pass2]').addClass('active-red').next().addClass('error')
        $('.errorInfo').eq(3).find('div').addClass('active').find('span').eq(1).removeClass('hiddenError').prev().addClass('hiddenError')
    }

    if (reg1.test($phone_val)&&reg2.test($pass1_val)&&$pass1_val == $('[name=pass2]').val() && $('[name=pass2]').val() != ''&&$('[name=card]').val().toUpperCase() === $('.code').html()) {
        // 当前端验证通过后发送ajax请求
        $.ajax({
            url: "../php/register.php",
            type: "post",
            data: {
                userphone: $phone_val,
                password: $pass1_val,
                addTime: new Date().getTime()
            },
            dataType: "text",
            success: function (dt) {
                if (dt == 1) {
                    alert('注册成功')
                } else if(dt==2){
                    alert('用户已存在')
                } else {
                    alert('注册失败')
                }
            }

        })
    }
    createCode()
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
$('[name="pass1"]').focus(function () {
    $(this).removeClass('active-green').removeClass('active-red').css('border-bottom', '1px solid #000').next().addClass('input')
}).focusout(function () {
    $(this).css('border-bottom', '1px solid #ccc').next().removeClass('input')
})
$('[name="pass2"]').focus(function () {
    $(this).removeClass('active-green').removeClass('active-red').css('border-bottom', '1px solid #000').next().addClass('input')
}).focusout(function () {
    $(this).css('border-bottom', '1px solid #ccc').next().removeClass('input')
})

//获取user和pass框
var user = document.querySelector('[name="user1"]')
var card = document.querySelector('[name="card"]')
var pass1 = document.querySelector('[name="pass1"]')
var pass2 = document.querySelector('[name="pass2"]')
//给user和pass框绑定input事件
user.oninput = function () {
    $(this).next().removeClass('error').removeClass('pass')
    $('.errorInfo').eq(0).find('div').removeClass('active')
}
card.oninput = function () {
    $(this).next().removeClass('error').removeClass('pass')
    $('.errorInfo').eq(1).find('div').removeClass('active')
}
pass1.oninput = function () {
    $(this).next().removeClass('error').removeClass('pass')
    $('.errorInfo').eq(2).find('div').removeClass('active')
}
pass2.oninput = function () {
    $(this).next().removeClass('error').removeClass('pass')
    $('.errorInfo').eq(3).find('div').removeClass('active')
}

//调用验证码函数
createCode()
// 给点击验证码绑定点击事件，点击刷新验证码
$('.codeCg').click(function () {
    $('.code').html(createCode())
})