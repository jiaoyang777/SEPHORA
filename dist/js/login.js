$('[name="agreed"]').click(function(){this.checked?$('[type="button"]').addClass("pass").attr("disabled",!1):$('[type="button"]').removeClass("pass").attr("disabled",!0)}),$('[name="user1"]').focus(function(){$(this).css("border-bottom","1px solid #000").next().addClass("input")}).focusout(function(){$(this).css("border-bottom","1px solid #ccc").next().removeClass("input")}),$('[name="pass1"]').focus(function(){$(this).css("border-bottom","1px solid #000").next().addClass("input")}).focusout(function(){$(this).css("border-bottom","1px solid #ccc").next().removeClass("input")});var user=document.querySelector('[name="user1"]'),pass=document.querySelector('[name="pass1"]');user.oninput=function(){$(this).next().removeClass("error").removeClass("pass"),$(".errorTip").find("div").addClass("hd-errorTip")},pass.oninput=function(){$(this).next().removeClass("error").removeClass("pass"),$('[name="user1"]').next().removeClass("error").removeClass("pass"),$(".errorTip").find("div").addClass("hd-errorTip")},$('[type="button"]').click(function(){var r=$('[name="user1"]'),a=$('[name="pass1"]'),t=r.val(),s=a.val();return/^[a-zA-Z][a-zA-Z0-9_]{6,15}$/.test(t)||/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/.test(t)?(r.next().addClass("pass"),/^[a-zA-Z]\w{7,17}$/.test(s)?(a.next().addClass("pass"),$.ajax({url:"../php/login.php",type:"post",data:`username=${t}&password=${s}`,dataType:"text",success:function(s){var e;1==s?(location.search?(e=location.search.split("=")[1],location.href=e):location.href="./index1.html",setCookie("name1",t)):2==s?(r.next().addClass("error"),a.next().addClass("error"),$(".errorTip").find("div").removeClass("hd-errorTip").html("<i></i>该账号未注册！")):(r.next().addClass("error"),a.next().addClass("error"),$(".errorTip").find("div").removeClass("hd-errorTip").html("<i></i>请输入正确的密码"))}})):(a.next().addClass("error"),$(".errorTip").find("div").removeClass("hd-errorTip").html("<i></i>请输入正确的密码"))):(r.next().addClass("error"),a.next().addClass("error"),$(".errorTip").find("div").removeClass("hd-errorTip").html("<i></i>请输入正确的手机号码或邮箱")),!1});