<?php
header("content-type:text/html;charset=utf-8");
//获取传入的参数
$u=$_POST['userphone'];
$p=$_POST['password'];
$addTime=$_POST['addTime'];

// 判断手机号输入是否为空
if(!$u){
    // 手机号不为空
    echo "3";
    exit;
}
// 判断密码输入是否为空
if(!$p){
    // 密码不为空
    echo "4";
    exit;
}

// 连接数据库
$link=mysqli_connect("localhost","root","","shop");
// 设置编码
mysqli_set_charset($link,"utf8");
// sql语句
// 验证用户名是否存在
$sql1="select * from sephora_userinfo where userphone='{$u}'";
// 执行sql语句，返回结果接
$result1=mysqli_query($link,$sql1);
// 判断当前结果集中是否存在数据
if(mysqli_fetch_assoc($result1)){
// 用户名重名
echo "2";
exit;
}

// md5加密
// $str=md5(md5(md5($p)."xxx")."yyy");

// 准备sql语句将数据插入到数据库中
$sql2="insert into sephora_userinfo(userphone,password,create_time) values('{$u}','{$p}','{$addTime}')";
// 执行sql语句
$result2=mysqli_query($link,$sql2);
// 判断是否插入成功
if(!$result2){
    // 注册失败
    echo "0";
}else{
    // 注册成功
    echo "1";
}
// 关闭数据库连接
mysqli_close($link)
?>