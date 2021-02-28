<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost",'root','','shop');
//设置编码
mysqli_set_charset($link,"utf8");

$v1=$_GET['val'];
$sql="select * from sephora_cate where category like '$v1'";
$result=mysqli_query($link,$sql);
$row=mysqli_fetch_assoc($result);
echo json_encode($row);
//关闭连接
mysqli_close($link);
?>