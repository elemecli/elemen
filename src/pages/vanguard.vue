<template>
    <div class="all">
        <div class="header">
            <VanguardSearch></VanguardSearch>
            <VanguardBrand></VanguardBrand>
        </div>

        <div class="section">
            <Coupon></Coupon>

            <div class="introduce">
                <h4>商家推荐</h4>
                <div class="introduceProducts">
                    <Introduce :productName="productName"></Introduce>
                    <Introduce></Introduce>
                    <Introduce></Introduce>
                    <Introduce></Introduce>
                    <Introduce></Introduce>
                </div>           
            </div>

            <div class="banner">
                <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item><img class="bannerImg" src="../../static/img/vanguard/banner01.jpg"></van-swipe-item>
                    <van-swipe-item><img class="bannerImg" src="../../static/img/vanguard/banner02.jpg"></van-swipe-item>
                </van-swipe>
            </div>
            
            <div class="products">
                <ul class="asideBar">
                    <li @click="show()"><img src="../../static/img/vanguard/kind.jpg">专区</li>
                    <li><a href="#"><img src="../../static/img/vanguard/promotion.jpg">优惠</a></li>
                    <li><a href="#111">新鲜水果</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#222">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                    <li><a href="#">海鲜荟萃</a></li>
                </ul>
                <div>
                    <div class="topAsideBar" v-show="bool">
                        <a href="#">休闲速食直降</a>
                        <a href="#">雀巢咖啡糖果满减</a>
                        <a href="#">休闲速食直降</a>
                        <img src="../../static/img/vanguard/down.png">
                        <!-- <a href="#">雀巢咖啡糖果满减</a>
                        <a href="#">休闲速食直降</a>
                        <a href="#">雀巢咖啡糖果满减</a>
                        <a href="#">休闲速食直降</a> -->
                    </div>
                    <div class="productList">
                        <div id="111">
                            <Product></Product>
                        </div>
                        <div>
                            <Product></Product>
                        </div>
                        <div>
                            <Product></Product>
                        </div>
                        <div id="222">
                            <Product></Product>
                        </div>
                        <div>
                            <Product></Product>
                        </div>
                        <div>
                            <Product></Product>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
                  
        <FooterBar></FooterBar>
         
    </div>
</template>

<script>

    import VanguardSearch from "../components/vanguard/vanguardSearch/vanguardSearch"
    import VanguardBrand from "../components/vanguard/vanguardBrand/vanguardBrand"
    import Introduce from "../components/vanguard/introduce/introduce"
    import Coupon from "../components/vanguard/coupon/coupon"

    import Product from "../components/vanguard/product/product"

    import FooterBar from "../components/vanguard/footerBar/footerBar"

    export default {
        components:{
            VanguardSearch,
            VanguardBrand,
            Coupon,
            Introduce,
            Product,
            FooterBar
        },
        data(){
            return{
                bool:false,
                productName:"wahahahaahh"
            }
        },
        methods:{
            show(){
                return this.bool=!this.bool
            }
        }
    }
</script>

<style scoped>
    .all{
        display:flex;
        flex-direction:column;
        height:100%;
    }
    .header{
        background-color: #96a46a;
    }
    .section{
        flex: 1;
        overflow-y:scroll;
    }
    .banner{
        width:100%;
        margin: .2rem .1rem;
    }
    .topAsideBar{
        width:100%;
        height:.5rem;
        /* background-color: green; */
        display: flex;
        flex-direction: row;
    }
    .topAsideBar>a{
        height:.3rem;
        display: block;
        font-size: .12rem;
        line-height: .3rem;
        background-color: #f5f5f5;
        color: #666666;
        border: none;
        border-radius:.07rem;
        margin-right: .05rem;
    }
    .topAsideBar>img{
        display: block;
        width:.2rem;
        height:.2rem;
        /* margin-left: .2rem; */
    }
    .asideBar{
        width:25%;
    }
    .asideBar>li{
        width:100%;
        height:.5rem;
        background-color: #f8f8f8;
        font-size: .15rem;
        line-height: .5rem;
        text-align: center;
        
    }
    .asideBar>li>a{
        color:#666666;
        line-height: .2rem;
    }
    .asideBar>li>img{
        display: inline-block;
        width:.15rem;
        height:.15rem;
    }
    .asideBar>li>a>img{
        display: inline-block;
        width:.15rem;
        height:.15rem;
    }
    .bannerImg{
        width:3.5rem;
        height:1rem;
    }
     .introduce{
        width:100%;
        background-color:#fefffe;
        margin:.1rem;
     }  
     .introduceProducts{
        display:flex;
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space:nowrap;
     }    
    .introduce>h4{
        font-size: .2rem;
    }
    .products{
        width:100%;
        display: flex;
        flex-direction: row;
    }
    .productNav{
        margin-right:.1rem;
    }
    .footer{
        position:fixed;
        bottom:0;
    }
</style>