//选中复选框解锁登录
$('[name="agreed"]').click(function () {
    //判断是否选中
    if (this.checked) {
        $('[type="button"]').addClass('pass').attr('disabled', false)
    } else {
        $('[type="button"]').removeClass('pass').attr('disabled', true)
    }
})

//获取焦点
$('[name="user1"]').focus(function () {
    $(this).css('border-bottom', '1px solid #000').next().addClass('input')
}).focusout(function () {
    $(this).css('border-bottom', '1px solid #ccc').next().removeClass('input')
})
$('[name="pass1"]').focus(function () {
    $(this).css('border-bottom', '1px solid #000').next().addClass('input')
}).focusout(function () {
    $(this).css('border-bottom', '1px solid #ccc').next().removeClass('input')
})

//获取user和pass框
var user = document.querySelector('[name="user1"]')
var pass = document.querySelector('[name="pass1"]')
//给user和pass框绑定input事件
user.oninput = function () {
    $(this).next().removeClass('error').removeClass('pass')
    $('.errorTip').find('div').addClass('hd-errorTip')
}
pass.oninput = function () {
    $(this).next().removeClass('error').removeClass('pass')
    $('[name="user1"]').next().removeClass('error').removeClass('pass')
    $('.errorTip').find('div').addClass('hd-errorTip')
}

//给能点击的登录按钮绑定点击事件
$('[type="button"]').click(function () {
    //获取文本框和密码框内容
    var $user1 = $('[name="user1"]')
    var $pass1 = $('[name="pass1"]')
    var $user1_val = $user1.val()
    var $pass1_val = $pass1.val()
    //书写正则表达式
    var reg1 = /^[a-zA-Z][a-zA-Z0-9_]{6,15}$/
    var reg2 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/
    var reg3 = /^[a-zA-Z]\w{7,17}$/


    //判断输入的用户名和手机号是否是英文字母数字下划线，字母开头长度大于6小于15
    if (reg1.test($user1_val) || reg2.test($user1_val)) {
        $user1.next().addClass('pass')
        //判断输入的密码是否是英文字母数字下划线，字母开头长度大于6小于18
        if (reg3.test($pass1_val)) {
            $pass1.next().addClass('pass')
            // 判断当前端验证通过再进入ajax
            $.ajax({
                url: "../php/login.php",
                type: "post",
                data: `username=${$user1_val}&password=${$pass1_val}`,
                dataType: "text",
                success: function (dt) {
                    //如果返回值是1
                    if (dt == 1) {
                        //判断地址栏是否有参数
                        if (location.search) {
                            //获取参数中传入的地址
                            var new_url = location.search.split('=')[1]
                            location.href = new_url
                        }
                        else {
                            location.href = "./index1.html"
                        }
                        setCookie("name1", $user1_val)
                    } else if (dt == 2) {
                         $user1.next().addClass('error')
                        $pass1.next().addClass('error')
                        $('.errorTip').find('div').removeClass('hd-errorTip').html('<i></i>该账号未注册！')
                    }
                    else {
                        $user1.next().addClass('error')
                        $pass1.next().addClass('error')
                        $('.errorTip').find('div').removeClass('hd-errorTip').html('<i></i>请输入正确的密码')
                    }
                }
            })
        } else {
            $pass1.next().addClass('error')
            $('.errorTip').find('div').removeClass('hd-errorTip').html('<i></i>请输入正确的密码')
        }
    } else {
        $user1.next().addClass('error')
        $pass1.next().addClass('error')
        $('.errorTip').find('div').removeClass('hd-errorTip').html('<i></i>请输入正确的手机号码或邮箱')
    }

    return false
})