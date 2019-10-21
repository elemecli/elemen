<template>
  <div id="boss">
    <div class="first" v-if="bool">
        <div class="one">
            <div class="onea">
                <!-- <p>10减7</p>
                <p>25减19</p>
                <p>津贴2元</p> -->
                <p v-for="(v,i) in resData.resDiscount" :key="i">{{v}}</p>
            </div>
            <div class="oneb" @click="fun()">
                <p>4个优惠 v</p>
            </div>
        </div>
        <p class="two">公告: 1分钱商品不单卖，必须点面才配送哦~望理解~</p>
    </div>
    <div class="second" v-else>
        <div class="three">
            <h3>优惠</h3>
            <div class="threea threee">
                <p>收单</p>
                <span>新用户下单立减11元</span>
            </div>
            <div class="threeb threee">
                <p>减免</p>
                <span>满10元减7元，满25元减19元</span>
            </div>
            <div class="threec threee">
                <p>津贴</p>
                <span>满18元可使用津贴2元</span>
            </div>
            <div class="threed threee">
                <p>特价</p>
                <span>特价商品3.9元起</span>
            </div>
        </div>
        <div class="three">
            <h3>服务</h3>
            <div class="threea threee">
                <p>拒单赔</p>
                <span>商家原因导致订单取消，赔付代金券</span>
            </div>
            <div class="threeb threee">
                <p>食安保</p>
                <span>该商户食品安全已由国泰产险承担，食品安全有保障</span>
            </div>
        </div>
        <div class="three">
            <h3>公告</h3>
            <div class="threea threee">
                <span>1分钱商品不单卖，必须点面才配送哦~望理解~</span>
            </div>
        </div>
        <div class="fourth" @click="funb()">
            <van-icon name="arrow-up" class="fourtha"/>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    components:{

    },
    data(){
      return{
        arr:[],
        bool:true,
        style:true
      }
    },
    methods:{
        fun(){
            this.bool=!this.bool
        },
        funb(){
            this.style=false;
            this.bool=true;
            this.style=!this.style
        }
    },

    props:["resData"]
}
</script>

<style scoped>
.first{
    font-size: .16rem;
    margin:0 .25rem;
}
.first .one{
    display: flex;
    justify-content: space-between;
}
.first .one .onea{
    display: flex;
}
.first .one .onea p{
    font-size: .12rem;
    color:#e3593f;
    padding:.02rem;
    border:1px solid #ccc;
    margin-right: .02rem;
}
.first .one .onea p:nth-child(3){
    background-color: #ffeeea;
}
.first .oneb p{
    color:#999;
    font-size: .1rem;
}
.first .two{
    color:#999;
    font-size: .12rem;
    margin-top: .06rem;
}
.second{
    height:100%;
    font-size: .16rem;
    margin:0 .2rem;
    z-index: 3;
}
.three h3{
    margin-top: .2rem;
    margin-bottom: .1rem;
}
.threee{
    display: flex;
    font-size: .12rem;
    margin-bottom: .1rem;
}
.threee p{
    padding:.02rem;
    border:1px solid #ccc;
    color:#c78086;
    background-color: #fef2f4;
    margin-right: .1rem;
}
.threea p{
    color:#76866c;
    background-color: #e9fae7;
}
.threee span{
    color:#999;
}
.fourth{
    width:100%;
    text-align: center;
    margin-top: .8rem;
}
.fourtha{
    font-size: .7rem;
    color:#cdcdcd;
}
</style>
