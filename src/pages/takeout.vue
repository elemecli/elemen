<template>
    <div class="takeout">
        <FooterBar :keyid="0"></FooterBar>
        <Top></Top>
        <van-sticky>
            <div class="search">
                <p><img src="../../static/wmimg/fangdajing.png"><span>搜索商家、商品名称</span></p>
            </div>
        </van-sticky>
        
        <div class="bannerA">
           <van-swipe :autoplay="3000" indicator-color="skyblue">
            <van-swipe-item><img src="../../static/wmimg/1.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../static/wmimg/2.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../static/wmimg/banner2.jpg" alt=""></van-swipe-item>
            </van-swipe> 
        </div>
        
        <div class="news">
            <img src="../../static/wmimg/2.jpg">
        </div>
        <div>
             <van-swipe :loop="false">
                <van-swipe-item><Daohang></Daohang></van-swipe-item>
                <van-swipe-item><Daohangb></Daohangb></van-swipe-item>
             </van-swipe>
            
        </div>
       
        
        
        <Huiyuan></Huiyuan>
        <Youhui></Youhui>
        <Zhuanshu></Zhuanshu>
        <Ziqu></Ziqu>
        <div class="bannerA">
           <van-swipe :autoplay="3000" indicator-color="skyblue">
            <van-swipe-item><img src="../../static/wmimg/banner2.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../static/wmimg/2.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../static/wmimg/1.jpg" alt=""></van-swipe-item>
            </van-swipe> 
        </div>
        <h3>推荐商家</h3>
        <ResType></ResType>
        <div>

        </div>
    </div>
    
</template>

<script>
    import FooterBar from '../components/footerBar'
    import Top from "../components/takeout/top"
    import Daohang from "../components/takeout/daohang"
    import Daohangb from "../components/takeout/daohangb"
    import Huiyuan from "../components/takeout/huiyuan"
    import Youhui from "../components/takeout/youhui"
    import Zhuanshu from "../components/takeout/zhuanshu"
    import Ziqu from "../components/takeout/ziqu"
    import ResType from "../components/takeout-food/resType"

    export default {
        components:{
            FooterBar,
            Top,
            Daohang,
            Daohangb,
            Huiyuan,
            Youhui,
            Zhuanshu,
            Ziqu,
            ResType
        }
    
    }
</script>

<style scoped>
    .takeout{
        width: 96%;
        padding: 0 2%;
        margin-bottom: .8rem;
    }
    .search{
        width: 100%;
        height: .4rem;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0;
        
    }
    .search img{
        width: .2rem;
        height: .2rem;
    }
    .search p{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #efebef;
        width: 100%;
        height: .3rem;
        border-radius: 30px;
    }
    .search p span{
        font-size: .16rem;
        color:#a5a6a5;
    }
    
    
    .news{
        margin:.1rem auto;
    }
    .news img{
        display: block;
        width: 100%;
    }
    h3{
        font-size: .2rem;
        color:#313031;
        margin:.1rem auto;
    }
    
    .bannerA{
        margin-top: .1rem; 
    }
    .bannerA img{
        width: 100%;
    }
</style>