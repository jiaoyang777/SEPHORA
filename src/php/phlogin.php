<?php
header("content-type:text/html;charset=utf-8");
//获取传入的参数
$u=$_POST['userphone'];
//连接数据库
$link=mysqli_connect("localhost",'root','','shop');
//设置编码
mysqli_set_charset($link,"utf8");

// sql语句
// 验证用户名是否存在,若不存在请注册
$sql1="select * from sephora_userinfo where userphone='{$u}'";
// 执行sql语句，返回结果集
$result1=mysqli_query($link,$sql1);
// 判断当前结果集中是否存在数据
if(!mysqli_fetch_assoc($result1)){
// 用户名不存在
echo "0";
exit;
}else{
echo "1";
}

//关闭连接
mysqli_close($link);
?>


