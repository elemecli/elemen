<template>
    <div>
        <div class="top">
            <img src="../../../static/img/icon/tongzhi.png" alt="" class="tongzhi">
            <img src="../../../static/img/icon/shezhi.png" alt="" class="shezhi">
            <h1>123456</h1>
            <h2>再忙，也要记得吃饭呦~</h2>
            <img src="../../../static/img/icon/logo1.png" alt="" class="logo" style="width:0.8rem;">
            <a href="#"><img src="../../../static/img/icon/qiandao.png" class="qiandao" style="width:0.15rem;"> 签到领10元红包</a>
        </div>
        <div class="middle">
                <a href="#"><img src="../../../static/img/icon/huiyuan.png" alt=""></a>
                <div class="discount">
                    <a href="#" class="btn"><h1>红包</h1><p><span>2</span>个未使用</p></a>
                    <a href="#" class="btn"><h1>津贴</h1><p><span>￥20</span>可用</p></a>
                    <a  href="#" style="margin-right:2.5%" class="btn"><h1>钱包</h1><p>金币、借钱、...</p></a> 
                </div>
        </div>
        <div class="lower">
            <ul>
                <li><img src="../../../static/img/icon/shoucang.png">我的收藏<a>></a></li>
                <li><img src="../../../static/img/icon/kefu.png">我的客服<a>></a></li>
                <li><img src="../../../static/img/icon/tuijian.png">推荐有奖<span>得15元</span><a>></a></li>
                <li><img src="../../../static/img/icon/hezuo.png">商务合作<a>></a></li>
                <li><img src="../../../static/img/icon/ka.png">办卡有礼<a>></a></li>
                <li style="border:0"><img src="../../../static/img/icon/gongyi.png">3小时公益<a>></a></li>
            </ul>
        </div>
        <FooterBar></FooterBar>
    </div>
</template>

<script>
    import FooterBar from '../../components/footerBar'
    export default {
        components:{
            FooterBar
        }
    }
</script>

<style scoped>
    .top img{
        width: 0.25rem;
        position:absolute;
    }
    .tongzhi{
        width: 0.27rem;
        top:0.1rem;
        right: 0.8rem;
    }
    .shezhi{
        top:0.12rem;
        right: 0.25rem;
    }
    h1{
        font-size: 0.32rem;
        margin-top: 0.4rem;
        margin-left: 0.3rem;
        color: #000;
    }
    h2{
        font-size: 0.12rem;
        font-weight: 100;
        margin-left: 0.3rem;

    }
    .logo{
        position: absolute;
        top: 0.45rem;
        right:0.3rem;
    }
    .top a{
        font-size: 0.12rem;
        border: 0.01rem solid #cfcfcf;
        border-radius: 0.15rem;
        height: 0.25rem;
        width: 1.3rem;
        line-height: 0.25rem;
        background-color: #fff;
        text-indent: 0.25rem;
        margin-top: 0.2rem;
        position: absolute;
        top: 0.9rem;
        left: 0.29rem;
        color: #757575;
    }
    .qiandao{
        left: 0.09rem;
        top: 0.04rem;
    }
    .middle img{
        width: 100%;
        /* margin-left: 2.5%; */
    }
    .middle{
        margin-top: 0.6rem;
        font-size: 0.16rem;
        background-color: #f5f5f5;
    }
    .discount{
        display: flex;
        box-shadow:0 0.2rem 0.1rem #f6f6f6;
    }
    .btn{
        height: 0.6rem;
        border: 0;
        border-radius: 0.05rem;
        flex: 1;
        background-color:#fff;
        margin-top: 0.03rem;
        margin-left: 2.5%;
        padding:0;
    }
    .btn h1{
        margin: 0;
        font-size: 0.16rem;
        font-weight: 100;
        color: #212121;
        position:relative;
        top:0.1rem;
        left: 0.1rem;
    }
    .btn p{
        color: #818181;
        font-size: 0.12rem;
        position:relative;
        top:0.1rem;
        left: 0.1rem;
    }
    .btn span{
        color: red;
        font-size: 0.16rem;
    }
    .lower{
        font-size: 0.14rem;
        margin-top: 0.2rem;
        color: #212121;
        font-weight: 900;
    }
    .lower img{
        width: 0.25rem;
        vertical-align: middle;
    }
    li{
        height: 0.47rem;
        border-bottom: 0.01rem solid #f2f2f2;
        padding-left: 0.2rem;
        line-height: 0.42rem;
    }
    li a{
        position: absolute;
        right: 0.1rem;
    }
    li span{
        font-size: 0.12rem;
        color: #999999;
        position: absolute;
        right: 0.25rem;
    }
</style>