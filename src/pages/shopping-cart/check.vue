<template>
    <div id="dbox">
        <!-- 页头 -->
        <div class="yetou">
            <span @click="prev()" class="iconfont">&#xe612;</span>
            <p>确认订单</p>
        </div>

        <!-- 地址块 -->
        
        <div class="dizhi">
            <div v-for="(v,i) in dizhi" :key="i" class="dizhikuai">
                <h4>{{v.dizhi}}</h4>
                <p class="jiantou" id="dulijian">></p>
                <span>{{v.name}}</span>
                <span>{{v.phone}}</span>                
            </div>
            <div class="songchu">
                <span>立即送出</span>
                <span>约11:11送达</span>
                <p class="jiantou">></p>

            </div>
            <div class="songchu"  @click="fun()">
                <span>支付方式</span>
                <span>{{zhitxt}}</span>
                <p class="jiantou">></p>
            </div>
        </div>

        <!-- 商品明细 -->
        <div class="mingxi">
            <div class="dianming">
                <p>逍遥镇老宋家优质胡辣汤(昆明路店)</p>
            </div>
            <div class="baozhunger"  v-for="(v,i) in mingxi" :key="i">
                <div class="shiwu">
                    <img :src="v.imgsrc" alt="">
                    <p>{{v.title}}</p>
                    <span>x{{v.shuliang}}</span>
                    <span>￥{{v.jiage}}</span>                              
                </div>
                <div class="baozhuang">
                    <span>包装费</span>
                    <p>餐盒</p>
                    <span>￥{{v.canhe}}</span>
                </div>
                <div class="baozhuang">
                    <span>配送费</span>
                    <p id="peisong">蜂鸟专送</p>
                    <span>￥{{v.peisong}}</span>
                </div>
            </div>
            <div class="hongbao">
                <h5>红包</h5>
                <p>没有可用红包</p>
                <p>></p>
            </div>
            <div class="youhui">
                <p>优惠说明</p>
                <span>小计</span>
                <span>￥{{zongjia}}</span>
            </div>
        </div>

        <!-- 准时达服务 -->
        <div class="zhunshi">
            <div class="zhunyi" >
                <span class="zhuna">准时达PLUS</span>
                <span class="zhunb">配送增值服务</span>
                <p>超时15分钟赔付<span class="zhunhei">6.54元红包</span>，超时30分钟赔付<span class="zhunhei">15.26元红包</span></p>
            </div>
            <span class="zhunqian">￥{{zhunshi}}</span>
            <van-checkbox  v-model="checked" checked-color="#07c160"></van-checkbox>
        </div>

        <!-- 订单备注 -->
        <div class="dingdan">
            <div class="kouwei">
                <h5>订单备注</h5>
                <span>口味丶偏好</span>
                <span>></span>
            </div>
            <div class="canjushu">
                
                <van-cell is-link @click="showPopup"  class="canjushukuai">
                    <h5>餐具份数</h5>
                    <span>{{canjusuliang}}餐具</span>
                    <!-- <span>></span> -->
                </van-cell>

                <van-popup  position="bottom"
                            :style="{ height: '50%' }" 
                            v-model="kuaizi"
                            class="canjuneirong"
                            
                            >  
                    <div id="canjudingbu"><h4>餐具份数</h4></div>
                    <div v-for="(v,index) in canjusuT" :key="index" :class="{ red:changeRed == index}" @click="change(index)"><p>{{v.shuju}}</p></div>
                                      
                </van-popup>
            </div>
            <div class="fapiao">
                <h5>发票信息</h5>
                <span>该店不支持线上开票,请电话联系商户</span>
            </div>
            <div class="haoma">
                <span>号码保护</span>
                <van-checkbox v-model="checked2" checked-color="#07c160" class="haomashi"></van-checkbox>               
                <p>选择号码保护后，将对商家丶骑手隐藏您的真实手机号</p>
            </div>
        </div>
   

        <!-- 底部支付条 -->
        <div class="dibuzhifu">
            <div class="jiesuankuai">
                <span>￥{{zongjia}}</span>
                <span>己优惠 ￥6</span>
            </div>
            <div class="querenkuai">
                <span>确认支付</span>
            </div>
        </div>

        <!-- 支付宝微信 -->
        <div class="zhifufangshi" v-show="zhifu" >
            <div class="xuanzefangshi">
                <p>选择支付方式</p>
                <span @click="zhifu2" id="xxx">x</span>
            </div>
            <div class="fnagshin">
                <img :src="zhifubao" alt="">
                <span>支付宝</span>
                <van-checkbox @click="payFun1" v-model="zhifubao1" checked-color="#07c160" class="zhifuqueren"></van-checkbox>               
            </div>
            <div class="fnagshin">
                <img :src="huabei" alt="">
                <span>花呗</span>
                <van-checkbox @click="payFun2"  v-model="huabei1" checked-color="#07c160" class="zhifuqueren1"></van-checkbox>               
            </div>
            <div class="fnagshin">
                <img :src="weixin" alt="">
                <span>微信支付</span>
                <van-checkbox @click="payFun3" v-model="weixin1"  checked-color="#07c160" class="zhifuqueren2"></van-checkbox>               
            </div>
        </div>

        
    </div>
</template>

<script>
    export default {
        methods: {
            change(index){
                this.changeRed = index;
                this.canjusuliang=this.canjusuT[index].shuju;
                this.kuaizi = false;     
            },
            showPopup() {
                this.kuaizi = true;
            },
            prev(){
                this.$router.go(-1)
            },
            fun(){
                this.zhifu=!this.zhifu;
            }  ,
            zhifu2(){
                this.zhifu=!this.zhifu;
            },
            payFun1(){
                if(!this.zhifubao1){
                    this.zhitxt="支付宝";
                    this.huabei1=this.zhifubao1
                    this.weixin1=this.zhifubao1
                    this.zhifu=false;
                }
            },
            payFun2(){
                if(!this.huabei1){
                    this.zhitxt="花呗";
                    this.zhifubao1=this.huabei1
                    this.weixin1=this.huabei1
                    this.zhifu=false;

                }              
            },
            payFun3(){
                if(!this.weixin1){
                    this.zhitxt="微信支付";
                    this.huabei1=this.weixin1
                    this.zhifubao1=this.weixin1
                    this.zhifu=false;

                }              
            },
        },
        computed:{
             zongjia:function(){
                   if(this.checked==true){
                    return (this.mingxi[0].jiage+this.mingxi[0].canhe)*this.mingxi[0].shuliang+this.mingxi[0].peisong+this.zhunshi
                }else{
                    return (this.mingxi[0].jiage+this.mingxi[0].canhe)*this.mingxi[0].shuliang+this.mingxi[0].peisong

                }
             },
             
             
        },
        data(){
            return {
                canjusuliang:"1份",
                kuaizi:false,
                zhitxt:"支付宝",
                zhifu:false,
                zhifubao:"../../static/guo/check/z1.png",
                huabei:"../../static/guo/check/z2.png",
                weixin:"../../static/guo/check/z3.png",
                checked: false,
                checked2: true,
                zhifubao1: true,
                huabei1:false,
                weixin1:false,
                zhunshi:0.2,
                dizhi:[
                    {dizhi:"立人科技园c座2001",phone:"18391435019",name:"郭挺"}
                ],
                mingxi:[
                    {imgsrc:"../../static/guo/shopping/c1.png",
                     title:"重庆冰粉",
                     jiage:7,
                     canhe:2,
                     peisong:5,
                     shuliang:2
                    }
                ],
                canjusuT:[
                    {shuju:"1份"},
                    {shuju:"2份"},
                    {shuju:"3份"},
                    {shuju:"4份"},
                    {shuju:"5份"},
                    {shuju:"6份"},
                    {shuju:"7份"},
                    {shuju:"8份"},
                    {shuju:"9份"},
                    {shuju:"10份"},
                ],
                changeRed:-1
            }
        }
    }
</script>

<style scoped>

 .red{
  color: #0085ff;
 }

.haomashi{
    float: right;
    margin-right: .1rem;
}

/* 支付方式块 */
.zhifufangshi{
    width: 100%;
    height: 3rem;
    position: fixed;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    background-color: white;
    /* display: none; */
}
.zhifufangshi img{
    width: .2rem;
    height: .2rem;
    margin-left: .1rem;
    margin-right: .1rem;
}
.xuanzefangshi{
    height: .5rem;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    border-bottom: 1px solid rgba(169, 169, 169, 0.205);
    
}
.xuanzefangshi p{
    font-size: .16rem;
    font-weight: 700;
    /* margin-right: 1rem; */
    display: inline;
    margin-left: 1.4rem;
    margin-right: .9rem;
    line-height: .5rem;
}
.fnagshin{
    height: .5rem;
    display: flex;
    /* justify-content: center; */
    /* justify-content: space-around; */
    align-items: center;
    border-bottom: 1px solid rgba(169, 169, 169, 0.205);
}
.fnagshin span{
    font-size: .14rem;
}
.zhifuqueren{
    margin-left: 2.5rem;
}
.zhifuqueren1{
    margin-left: 2.63rem;
}
.zhifuqueren2{
    margin-left: 2.35rem;
}
#xxx{
    font-size: .2rem;
    color: gray;
}

/* 全局背景色 */
#dbox{
    height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: .5rem;
    background-image: linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96%,.3) 75%,hsla(0,0%,96%,0)),linear-gradient(270deg,#0085ff,#0af);
}

/* 页头 */
.yetou{
    width: 100%;
    height: 0.5rem;
    display: flex;
    align-items: center;
    /* background-color: #0085ff; */
    background-image: linear-gradient(90deg,#0af,#0085ff);
    position: fixed;
    top: 0px;
}
.yetou span{
    font-size: 0.15rem;
    color: white;
    margin-right: 1.5rem;
    margin-left: .1rem;
} 
.yetou p{
    font-size: 0.15rem;
    color: white;
    
}


/* 地址块 */
.dizhi{
    width: 96%;
    /* height: 1.5rem; */
    background-color: white;
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* font-size: 0px; */
    margin-top: .5rem;
    /* display: none; */

}
.dizhikuai{
    /* display: flex; */
    font-size: 0px;
    width: 100%;
    height: 0.5rem;
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);
    /* display: flex; */
    flex-direction: column;
   
    /* position: relative; */
}
.dizhikuai h4{
    font-size: .16rem;
    margin-left: .1rem;
    margin-top: .1rem;
}
.dizhikuai span{
    font-size: .12rem;
    color: gray;
    margin-left: .1rem;
}
.dizhi .jiantou{
    font-size: .2rem;
    color: rgba(128, 128, 128, 0.562);
    font-weight: 700;
    /* position: absolute; */
   float: right;
   margin-right: .1rem;
}
#dulijian{
    margin-top: -.15rem;
}
.songchu{
    /* font-size: 0px; */
    width: 100%;
    height: 0.47rem;
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);

    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: relative; */
}
.songchu span:nth-of-type(1){
    font-size: .14rem;
    margin-left: .1rem;
}
.songchu span:nth-of-type(2){
    font-size: .13rem;
    color: rgb(33,150,255);
    margin-left: 1.3rem;
}

/* 明细 */
.mingxi{
    width: 96%;
    background-color: rgb(255,255,255);
    display: flex;
    flex-wrap: wrap;
    /* height: 2.6rem; */
    margin-top: .1rem;
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);

}
.dianming{
    width: 100%;
    height: .45rem;
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);

    display: flex;
    align-items: center;
}
.dianming p{
    font-size: .14rem;
    font-weight: 600;
    margin-left: .1rem;
}
.shiwu{
    width: 100%;
    height: .55rem;
    display: flex;
    align-items: center;
}
.shiwu img{
    width: .4rem;
    height: .4rem;
    margin-left: .1rem;
    margin-right: .1rem;
}
.shiwu p{
    font-size: .13rem;  
}
.shiwu span:nth-of-type(1){
    font-size: .12rem;
    margin-left: .3rem;
    margin-right: 1.7rem;
}
.shiwu span:nth-of-type(2){
    font-size: .13rem;
}

div{
    font-size: 0px;
}

/* 包装 */
.baozhuang{
    width: 100%;
    height: .35rem;
    display: flex;
    align-items: center;
}
.baozhunger{
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);
    width: 100%;
}
.baozhuang span:nth-of-type(1){
    font-size: .12rem;
    background-color: rgb(239,243,247);
    color: rgb(132,146,173);
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);    
    margin-left: .1rem;
    margin-right: .1rem;
}
.baozhuang p{
    font-size: .14rem;
    margin-right: 2.3rem;
}
.baozhuang span:nth-of-type(2){
    font-size: .13rem;
}
.baozhuang #peisong{
    margin-right: 2.02rem;
}

/* 红包 */
.hongbao{
    width: 100%;
    height: .4rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);

}
.hongbao h5{
    font-size: .14rem;
    margin-left: .1rem;
    margin-right: 2rem;
}
.hongbao p:nth-of-type(1){
    font-size: .12rem;
    color: rgba(128, 128, 128, 0.699);
    margin-right: .2rem;
}
.hongbao p:nth-of-type(2){
    font-size: .2rem;
    color: rgba(128, 128, 128, 0.699);    
}

/* 优惠 */
.youhui{
     width: 100%;
    height: .4rem;
    display: flex;
    align-items: center;
}
.youhui p{
    font-size: .13rem;
    color: rgb(189,190,189);
    margin-left: .1rem;
    margin-right: 2.15rem;
}
.youhui span:nth-of-type(1){
    font-size: .13rem;
}
.youhui span:nth-of-type(2){
    font-size: .15rem;
}

/* 准时达服务 */
.zhunshi{
    width: 96%;
    height: .77rem;
    background-color: rgb(255,255,255);
    margin-top: .1rem;
    display: flex;
    align-items: center;
}
.zhunyi{
    width: 2.5rem;
    margin-left: .1rem;
    margin-right: .3rem;
}
.zhuna{
    font-size: .13rem;
    color: rgb(33,150,255);
}
.zhunb{
    font-size: .13rem;
}
.zhunshi p{
    font-size: .12rem;
    color: gray;
}
.zhunshi .zhunhei{
    color: black;
}
.zhunqian{
    font-size: .14rem;
    margin-right: .1rem;
}

/* 订单备注 */
.dingdan{
    width: 96%;
    height: 2rem;
    background-color: rgb(255,255,255);
    margin-top: .1rem;
    display: flex;
    flex-wrap: wrap;
}
.dingdan div{
    font-size: 0px;
}
.kouwei{
    width: 100%;
    height: .4rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);

}
.dingdan h5{
    font-size: .13rem;
    margin-left: .1rem;

}
.kouwei span:nth-of-type(1){
    font-size: .12rem;
    color: gray;
    margin-left: 2rem;
    margin-right: .1rem;
}
.kouwei span:nth-of-type(2){
    font-size: .18rem;
    color: gray;
    font-weight: 700;
}


/* 餐具 */
.canjushu{
    width: 100%;
    height: .4rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);

}
.canjushukuai h5{
    display: inline;
    margin: 0;
}
.canjushukuai{
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);

}
.canjushukuai span:nth-of-type(1){
    font-size: .12rem;
    margin-left: 1.95rem;
}
.canjuneirong div{
    width: 100%;
    height: .5rem;
    text-align: center;
    font-size: 0px;
}
.canjuneirong div p{
    font-size: .14rem;
    line-height: .5rem;
}
.canjuneirong div h4{
    font-size: .16rem;
}
#canjudingbu{
    position: fixed;
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);
    background-color: white;
    line-height: .5rem;
}
.canjuneirong div:nth-of-type(2){
    margin-top: .5rem;
}


/* 发票 */

.fapiao{
    width: 100%;
    height: .4rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(169, 169, 169, 0.233);

}
.fapiao span{
    font-size: .12rem;
    color: gray;
    margin-left: .45rem;
}

.haoma{
    width: 100%;
    height: .35rem;
    padding-top: .1rem;
    padding-bottom: .1rem;
    padding-left: .1rem;
    
}
.haoma span{
    font-size: .13rem;
    font-weight: 600;
    margin-right: 2.25rem;
}
.haoma p{
    font-size: .12rem;
    color: gray;
}


/* 底部支付 */
.dibuzhifu{
    width: 100%;
    height: .4rem;
    position: fixed;
    bottom: 0px;
    display: flex;
    /* display: none; */
}
.jiesuankuai{
    width: 70%;
    background-color: rgb(65,65,67);
    display: flex;
    align-items: center;
}
.querenkuai{
    width: 30%;
    background-color: rgb(88,209,120);
     display: flex;
    align-items: center;
    justify-content: center;
}
.jiesuankuai span:nth-of-type(1){
    font-size: .16rem;
    color: white;
    margin-left: .2rem;
    margin-right: .1rem;
    /* padding-right: 5px; */
}
.jiesuankuai span:nth-of-type(2){
    font-size: .12rem;
    padding-left: .1rem;
    color: gray;
    border-left: 1px solid gray;
}
.querenkuai{
    font-size: .16rem;
    color: white;
}
</style>