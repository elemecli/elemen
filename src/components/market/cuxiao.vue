<template>
    <div class="cuxiaoda">
        <div class="cuxiaoa">
            <h1>满额促销<span class="iconfont">&#xe63e;</span></h1>
            <p>凑满减享优惠</p>
            <div class="cuxiaoimg">
                <div class="cximg">
                    <img src="../../../static/marketImage/cuxiao1.jpg" alt="">
                </div>
                <div class="cximg">
                    <img src="../../../static/marketImage/cuxiao2.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="cuxiaoa cuxiaob">
            <h1>超值特价<span class="iconfont">&#xe63e;</span></h1>
            <p>好货不贵</p>
            <div class="cuxiaoimg">
                <div class="cximg">
                    <img src="../../../static/marketImage/cuxiao3.jpg" alt="">
                </div>
                <div class="cximg">
                    <img src="../../../static/marketImage/cuxiao4.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .cuxiaoda{
        width: 100%;
        display: flex;
    }
    .cuxiaoa{
        width: 46%;
        border-right:1px solid #e7e3e7; 
        padding: 2%
    }
    .cuxiaoa h1{
        font-size: 0.2rem;
        color: #ff414a;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cuxiaoa h1>span{
        color: #8c8a8c;
        font-size: 0.2rem;
        font-weight: 100;
        margin-right: 0.1rem;
    }
    .cuxiaoa p{
        color: #8c8a8c;
        font-size: 0.14rem;
        line-height: 0.3rem;
    }
    .cuxiaoimg{
        width: 100%;
        display: flex;
    }
    .cximg{
        width: 50%;
    }
    .cximg img{
        width: 0.7rem;
        height: 0.7rem;
        display: block;
    }
    .cuxiaob{
        border: 0;
    }
</style>