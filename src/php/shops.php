<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost",'root','','shop');
//设置编码
mysqli_set_charset($link,"utf8");

$sql="select * from sephora_shops";
$result=mysqli_query($link,$sql);
$arr=[];
while($row=mysqli_fetch_assoc($result)){
    //把遍历出来的数据追加到数组中
    array_push($arr,$row);
}
echo json_encode($arr);
//关闭连接
mysqli_close($link);
?>