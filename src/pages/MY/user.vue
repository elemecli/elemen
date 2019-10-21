<template>
    <div style="font-size:0.16rem">
        <div id="head">
            <a href="user.vue"></a><span class="address">个人资料</span>
        </div>
        <div>
            <ul>
                <span class="tit">基础信息</span>
                <li style="border:0">头像<img src="../../../static/img/icon/logo1.png" alt="" class="logo"><a href="">></a></li>
                <li>用户名<span></span><a href="">></a></li>
                <li>收货地址<a href="">></a></li>
                <span class="tit">账号绑定</span>
                <li style="border:0"><img src="../../../static/img/icon/phone.png" alt="">手机<span class="pho" style="color:#727272">123</span><a href="">></a></li>
                <li><img src="../../../static/img/icon/taobao.png" alt="">淘宝<span>未绑定</span><a href="#">></a></li>
                <li><img src="../../../static/img/icon/zhifubao.png" alt="">支付宝<span>未绑定</span><a href="#">></a></li>
                <li><img src="../../../static/img/icon/weibo.png" alt="">微博<span>未绑定</span><a href="#">></a></li>
                <li><img src="../../../static/img/icon/weixin.png" alt="">微信<span>未绑定</span><a href="#">></a></li>
                <li><img src="../../../static/img/icon/qq.png" alt="">QQ<span>未绑定</span><a href="#">></a></li>
            </ul>
        </div>
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
    #head{
        font-weight: 900;
        width: 100%;
        height: 0.5rem;
        margin-top: 0.1rem;
        background-color:#ffffff;
        line-height: 0.4rem;
        position: relative;
    }
    a{
        font-size: 0.32rem;
        position: absolute;
        left: 0.1rem;
    }
    .address{
        position: absolute;
        left: 40%;
    }
    .tit{
        font-size: .12rem;
        color: #7e7e7e;
        margin-left: 0.1rem
    }
    li{
        font-size: .18rem;
        color: #2a2a2a;
        height: 0.5rem;
        line-height: 0.5rem;
        border-top:0.01rem solid #e7e7e7;
        margin-left: 0.1rem
    }
    li a{
        height: 0.5rem;
        position: absolute;
        left: 3.5rem;
        line-height: 0.5rem;
    }
    li span{
        font-size: 0.14rem;
        color: #00a6ff;
        position: absolute;
        right: 0.3rem;
    }
    img{
        width: 0.3rem;
        vertical-align: middle;
        padding-right: 0.1rem;
    }
    .logo{
        width: 0.35rem;
        position: absolute;
        right: 0.3rem;
        top: 0.9rem;
        padding-right: 0;
    }
</style>