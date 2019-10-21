<template>
    <div >
        <div class="top">
                <img src="../../static/img/icon/tongzhi.png" alt="" class="tongzhi">
                <img src="../../static/img/icon/shezhi.png" alt="" class="shezhi">
                <h1>立即登录></h1>
                <h2>饿不饿都上饿了么</h2>
                <img src="../../static/img/icon/logo.png" alt="" class="logo" style="width:0.8rem;">
        </div>
        
        <div class="middle"> 
            <div class="discount">
                <a href="#" class="btn btn1"><h1>红包</h1><p>登录后查看</p><img src="../../static/img/icon/hongbao.png" alt=""></a>
                <a href="#" class="btn btn2"><h1>钱包</h1><p>金币、借钱、福利</p><img src="../../static/img/icon/qianbao.png" alt="" style="width:0.25rem"></a> 
            </div>
        </div>
        <div class="lower">
            <ul>
                <li><img src="../../static/img/icon/shoucang.png">我的收藏<a>></a></li>
                <li><img src="../../static/img/icon/kefu.png">我的客服<a>></a></li>
                <li><img src="../../static/img/icon/tuijian.png">推荐有奖<span>得15元</span><a>></a></li>
                <li><img src="../../static/img/icon/hezuo.png">商务合作<a>></a></li>
                <li><img src="../../static/img/icon/ka.png">办卡有礼<a>></a></li>
                <li style="border:0"><img src="../../static/img/icon/gongyi.png">3小时公益<a>></a></li>
            </ul>
        </div>
        <FooterBar :keyid="3"></FooterBar>
    </div>
</template>

<script>
    import FooterBar from '../components/footerBar'
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
        margin-top: 0.6rem;
        margin-left: 0.3rem;
        color: #000;
        font-weight: 100
    }
    h2{
        font-size: 0.1rem;
        font-weight: 100;
        margin-left: 0.3rem;
        margin-top: 0.05rem;
    }
    .logo{
        position: absolute;
        top: 0.5rem;
        right:0.3rem;
    }
    
    
    .middle{
        margin-top: 0.3rem;
        font-size: 0.16rem;
        background-color: #f5f5f5;
    }
    .discount{
        display: flex;
        box-shadow:0 -0.25rem 0.1rem #f6f6f6,0 0.1rem 0.1rem #f6f6f6;
    }
    .discount img{
        width: 0.2rem;
        position: relative;
        top: -0.25rem;
        left: 1.3rem;
    }
    .btn{
        height: 0.6rem;
        border: 0;
        border-radius: 0.1rem;
        flex: 1;
        background-color:#fff;
        margin-top: 0.03rem;
        padding:0;
    }
    .btn1{
        margin-left: 2.5%;
        margin-right: 2.5%;
    }
    .btn2{
        margin-right: 2.5%;
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
        top:0.15rem;
        left: 0.1rem;
    }
    
    .lower{
        height: 4rem;
        font-size: 0.14rem;
        margin-top: 0.2rem;
        color: #212121;
        font-weight: 900;
        background: #f5f5f5;
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
        background: #fff;
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