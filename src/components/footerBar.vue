<template>
    <div>
        <div class="foot">
            <FooterChild v-for="(v,i) in footerLi" :key=i :con="v.txt" :route="v.route" :imgsrc="(i==keyid)?v.imgsrccur:v.imgsrc">
            </FooterChild>    
        </div>
    </div>
</template>


<script>
    import FooterChild from "./footerChild";
    export default {
        components:{
            FooterChild
        },
        data(){
            return {
                footerLi:[
                    {"route":"/takeout","txt":"外卖","imgsrc":"../../static/img/takeout.png","imgsrccur":"../../static/img/takeout1.png"},
                    {"route":"/market","txt":"超市","imgsrc":"../../static/img/market.png","imgsrccur":"../../static/img/market1.png"},
                    {"route":"/orders","txt":"订单","imgsrc":"../../static/img/orders.png","imgsrccur":"../../static/img/orders1.png"},
                    {"route":"/my","txt":"我的","imgsrc":"../../static/img/my.png","imgsrccur":"../../static/img/my1.png"}
                ]
            }
        },
        props:{
            keyid:Number
        }

    }
</script>

<style scoped>
    /* footer */
    .foot{
        width:100%;
        height:.8rem;
        background-color: #f6f6f6;
        border-top: #c8c8c8 1px solid;
        position:fixed;
        bottom:0;
        left:0;
        display:flex;
        justify-content: space-around;
        align-items:center;
    }
</style>