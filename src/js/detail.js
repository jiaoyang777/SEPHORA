//获取地址栏的参数信息
var search = location.search
//判断当前search对象中是否有值
if (search) {
    var id = search.split('=')[1];
    (async function () {
        var dt = await promiseAjax({
            url: '../php/detail.php',
            data: 'id=' + id,
            datatype: 'json'
        })
        //创建拼接所有内容的字符串
        var str = `
        <div class="wrap clearfix">
                <div class="crumbs">
                    <div><a href="">首页</a></div>
                    <div>></div>
                    <div><a href="">${dt.category}</a></div>
                </div>
                <!-- 放大镜 -->
                <div class="productImageChange">
                    <div class="productImage">
                        <div class="bigicon"></div>
                        <span class="maskimg"></span>
                        <span class="maskbox"></span>
                        <img src="${dt.imgurl}" alt="">
                    </div>
                    <div class="bigImage">
                        <img src="${dt.imgurl}">
                    </div>
                    <div class="moreImages">
                        <div class="arrow">
                            <div class="leftArrow cant"></div>
                        </div>
                        <div class="arrow arrowR">
                            <div class="rightArrow cant"></div>
                        </div>
                        <ul class="picture">
                            <li><img src="${dt.imgurl}"
                                    class="" alt="" title=""></li>
                        </ul>
                    </div>
                </div>
                <div class="productMain">
                    <div class="title">
                        <div class="titleBox clearFix">
                            <h1>
                                <p>${dt.text}</p>
                            </h1>
                            <p>${dt.nameEN}</p>
                            <p></p>
                        </div>
                        <img alt="" title="" class="logo"
                            src="${dt.imglogo}">
                    </div>
                    <div class="price">
                        <p class="one">价格</p>
                        <p class="two">￥</p>
                        <p class="three">${dt.price}</p>
                        <ul>
                            <li class="newtag">新品</li>
                            <li class="exclusive">独家</li>
                        </ul>
                    </div>
                    <div class="activity">
                        <p class="title">活动</p>
                        <ul class="mainlist">
                            <li>
                                <div class="fullgive">满赠</div>
                                <p class="text">
                                    2021.1.30起，在丝芙兰官网、APP和小程序任意购物即可随单获赠【丝芙兰定制口罩】一份（每份含2只）。官网、APP和小程序共限量57000份，赠完即止，详情请以购物车结算页面为准
                                </p>
                            </li>
                            <li>
                                <div class="fullgive">满赠</div>
                                <p class="text">2021.1.25-2021.2.24,
                                    在丝芙兰官网、APP和小程序任意购物实付满1288元，即可获赠【丝芙兰新年倒数开运红盒】1份（内含钥匙扣1个、红包2个、镜子1个及小样6件）。官网、APP和小程序共限量2300份，赠完即止，详情请以购物车结算页面为准。
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="specification">
                        <p class="title">规格</p>
                        <ul class="classes">
                            <li class="now">套装</li>
                        </ul>
                    </div>
                    <div class="productNum">
                        <div class="number">
                            <div class="numberBox">
                                <input type="text" name="P-num" value="1">
                            </div>
                            <div class="arrow">
                                <div class="toparrow">
                                    <div class="icon Right"></div>
                                </div>
                                <div class="bottomarrow">
                                    <div class="icon Error"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="addShopCart">
                        <div>加入购物车<p class="icon"></p>
                        </div>
                    </div>
                </div>
                <!-- 猜你喜欢 -->
                <div class="guessLike">
                    <div class="title">
                        <p>猜你喜欢</p>
                    </div>
                    <div class="products">
                        <div>
                            <a href="">
                                <img src="${dt.imgurl}" alt="">
                                <p class="brand">${dt.title}</p>
                                <div class="text">${dt.text}</div>
                                <div class="price">￥${dt.price}</div>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img src="../images/a1_350x350.jpg" alt="">
                                <p class="brand">LOEWE</p>
                                <div class="text">罗意威001女款淡香水</div>
                                <div class="price">￥880.00</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="moreInfo">
                    <div class="nav">
                        <ul>
                            <li class="now">基本信息</li>
                            <li>美印社区</li>
                            <li>所有评论</li>
                            <li>产品咨询</li>
                            <li>配送信息</li>
                        </ul>
                    </div>
                    <div class="infos">
                        <div class="sku">
                            <ul>
                                <li>${dt.people}</li>
                                <li>${dt.body}</li>
                                <li>${dt.effect}</li>
                                <li>${dt.skin}</li>
                                <li>${dt.character}</li>
                                <li>${dt.specification}</li>
                                <li>${dt.item}</li>
                            </ul>
                        </div>
                        <div class="infosclass">
                            <ul>
                                <li>
                                    <div class="title">
                                        <div class="icon"></div>
                                        <p>产品功效</p>
                                    </div>
                                    <div class="text"><p>${dt.gongxiao}
                                    </p></div>
                                </li>
                                <li>
                                    <div class="title">
                                        <div class="icon"></div>
                                        <p>主要成分</p>
                                    </div>
                                    <div class="text"><p>${dt.chengfen}
                                    </p></div>
                                </li>
                                <li>
                                    <div class="title">
                                        <div class="icon"></div>
                                        <p>产地</p>
                                    </div>
                                    <div class="text"><p>${dt.address}</p></div>
                                </li>
                            </ul>
                        </div>
                        <div class="Picture">
                            <ul>
                                <li><img src="${dt.detailimg1}" alt=""></li>
                                <li><img src="${dt.detailimg2}" alt=""></li>
                                <li><img src="${dt.detailimg3}" alt=""></li>
                                <li><img src="${dt.detailimg4}" alt=""></li>
                                <li><img src="${dt.detailimg5}" alt=""></li>
                            </ul>
                        </div>
                        <div class="payship module">
                            <h1>支付及配送</h1>
                            <h2>PAYMENT&SHIPPING</h2>
                            <div>
                                <p class="title">选择支付方式</p>
                                <p>目前我们提供以下1种支付方式</p>
                                <ul>
                                    <li class="type">1. 在线支付</li>
                                    <li class="text">支持支付宝、微信、及目前市场所有主流银行卡的在线支付。请在确认订单后选择相应支付界面进行支付。</li>
                                </ul>
                            </div>
                        </div>
                        <div class="priceStatement module">
                            <h1>价格声明</h1>
                            <h2>PRICE STATEMENT</h2>
                            <p>本店商品标注的促销价，为此商品的实际售价。本店标注的其他价格信息，如划线价、专柜价、建议零售价、价值等，为仅供消费者参考的市场价格信息，来源为有关商品实体店的柜台售价、品牌方建议零售价或者根据有关商品正装产品售价和容量推算的价值等，便于您了解市场行情和价格变动。但是，由于地区、时间和行情波动因素，这些价格的实际情况可能与本店标注的其他价格信息有所不同。</p>
                        </div>
                        <div class="returnShop module">
                            <h1>退换货规定</h1>
                            <h2>RETURN PROVISIONS</h2>
                            <ul>
                                <li>1. 我们不接受包装盒已被开封的商品的退换货（商品外包装盒上的透明封装胶纸已被撕开同样视为开封），请您谅解！</li>
                                <li>2. 所有未开封的商品如需退换请于签收日算起14日内办理，退货收到并确认无误后于一周内办理退款。</li>
                                <li>3. 如您需整单退换，请您务必将当次订单中所有商品（包括免费赠品、包装礼盒）全部退回。</li>
                                <li>4. 因顾客自身原因造成退换货时，由顾客承担商品退回时的邮资和再次发送时的运费。</li>
                                <li>5. 如该商品曾被积分，退货后，该笔金额产生的积分将被从积分数中扣除。</li>
                                <LI>6. 如您希望调换其它等价商品，请您先为需要退回的订单办理退货，我们收到退货并确认无误后，将为您发送新的商品。若您希望调换的为非等价商品，请您先为您的订单办理退货及退款，然后至网站另行订购您喜欢的其它商品，我们将另行发送。</LI>
                                <LI>7. 如您在使用了于丝芙兰网站购买的产品后出现过敏症状，在提供相关医院出具的有效证明后，我们将接受此产品的退货。</LI>
                            </ul>
                        </div>
                        <div class="ConsumptionReminds module">
                            <ul>
                                <li class="title">消费提醒</li>
                                <li>国家药监局提示您：请正确认识化妆品功效，化妆品不能替代药品，不能治疗皮肤病等疾病。</li>
                                <li>国家药监局提示您：宣称用于祛斑美白、防晒、染发、烫发等的化妆品为特殊用途化妆品，产品标签上应标注‘国妆特字’或者‘国妆特进字’的批准文号。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
        //把当前内容渲染到页面中
        $('#ProductDetail').html(str)
        $('.toparrow').click(function () {
            var num = $('[name=P-num]').val()
            num++
            $('[name=P-num]').val(num)
            $('.bottomarrow').find('div').addClass('Right').removeClass('Error')

        })
        $('.bottomarrow').click(function () {
            var num = $('[name=P-num]').val()
            if (num > 1 && num != 2) {
                num--
                $('[name=P-num]').val(num)
                $('.bottomarrow').find('div').addClass('Right').removeClass('Error')
            } else if (num == 2) {
                $('[name=P-num]').val(1)
                $('.bottomarrow').find('div').addClass('Error').removeClass('Right')
            }
        })
        $('.addShopCart').click(function () {
            //获取localstorage中的cartlist1
            var cartList = localStorage.getItem('cartList1')
            //判断是否存在
            if (cartList) {
                //把localStorage中获取的内容转为数组对象
                cartList = JSON.parse(cartList)
                var a = 0
                //判断当前添加的商品是否在localStorage中存在
                //遍历数组中所有元素啊
                cartList.forEach(item => {
                    //判断当前遍历的商品是否等于要添加的商品
                    if (item.id == dt.id) {
                        a++
                        item.cart_num = parseInt($('[name=P-num]').val()) + parseInt(item.cart_num)
                    }
                })
                //判断a变量是否等于0
                if (a == 0) {
                    //修改商品数量
                    dt.cart_num = $('[name=P-num]').val()
                    //把当前对象追加到数组中
                    cartList.push(dt)
                }
                //把当前商品添加到localStorage中
                localStorage.setItem("cartList1", JSON.stringify(cartList))
            } else {
                //修改当前商品数量
                dt['cart_num'] = $('[name=P-num]').val()
                //把商品数量添加到localstorage中
                localStorage.setItem('cartList1', JSON.stringify([dt]))
            }
            $('.addSuccess').css('display', 'block')
        })
        $('.closemark').click(function () {
            $('.addSuccess').css('display', 'none')
            location.reload()
        })
        $('.goCart').click(function () {
            location = "../pages/cart.html"
        })
        //放大镜
        $('.maskimg').mouseover(function () {
            $(this).css('background','rgba(0,0,0,0.2)')
            $('.maskbox').show()
            $('.bigImage').show()
        })
        $(".maskimg").mouseout(function () {
            $(this).css('background','rgba(0,0,0,0)')
            $('.maskbox').hide()
            $('.bigImage').hide()
        })
        $('.maskimg').mousemove(function (e) {
            var l = e.pageX - $('.productImage').offset().left - ($('.maskbox').width() / 2)
            var t = e.pageY - $('.productImage').offset().top - ($('.maskbox').height() / 2)
            if (l < 0) {
                l=0
            }
            if (l > $(this).width() - $('.maskbox').width()) {
                l = $(this).width() - $('.maskbox').width()
            }
            if (t < 0) {
                t=0
            }
            if (t > $(this).height() - $('.maskbox').height()) {
                t = $(this).height() - $('.maskbox').height()
            }
            $('.maskbox').css({
                'left': l,
                'top': t
            })
            var pX = l / ($('.maskimg').width() - $('.maskbox').width())
            var pY = t / ($('.maskimg').height() - $('.maskbox').height())
            $('.bigImage img').css({
                'left': -pX * ($('.bigImage img').width() - $('.bigImage').width()),
                'top': -pY * ($('.bigImage img').height() - $('.bigImage').height())
            })
        })
    })()
} else {
    //非法进入，跳转至首页
    alert('请先选择商品')
    location = "../pages/index1.html"
}
