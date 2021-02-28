<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost",'root','','shop');
//设置编码
mysqli_set_charset($link,"utf8");
//sql语句
$sql="select * from sephora_brand";
//执行sql语句返回结果集
$result=mysqli_query($link,$sql);
//创建储存数据的数组
$arr=[];
//遍历结果集
while($row=mysqli_fetch_assoc($result)){
    //把遍历出来的数据追加到数组中
    array_push($arr,$row);
}
//把当前数组转换为字符串，响应给浏览器
echo json_encode($arr);
//关闭连接
mysqli_close($link);
?>