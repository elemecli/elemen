<template>
    <div>

        <div id="dbox" >
            <span @click="prev()" class="iconfont">&#xe612;</span>
            <p>购物车</p>
            <span  @click="Dialog(num=-100)">清空</span>
        </div>

        

        <div id="zanwei"></div>


        <div id="zhongxia" v-if="kong">
            <div id="gouwu" v-for="(v,i1) in lurou" :key="i1">
                <div id="shan">
                    <a href="">{{v.dianming}}  ></a>
                    <span class="iconfont" @click="Dialog(num=i1)">&#xe673;</span>
                </div>
                <div id="shangf">
                    <div id="shangp">
                        <img :src="v.imgsrc">
                        <span id="zhu">{{v.name}}</span>
                        <span id="qian">￥{{v.jiage}}</span>
                        <p>x{{v.shuliang}}</p>                  
                    </div>
                </div>
                <div id="canhe">
                    <p>餐盒</p>
                    <span>￥{{v.canhe}}</span>
                </div>
                <div id="jiesuan">
                    <p>已享受减免,优惠<span class="youhuijin">{{v.jianmian}}</span>元</p>
                    <span class="heji">合计<span class="youhuijin">￥{{zongjia}}</span></span>
                    <span class="jiesuanbtn"><a href="/#/check">去结算</a></span>
                </div>
            </div>
        
            <div id="caitxt">
                <span>猜你喜欢</span>
            </div>
            <div id="caini">
                
                <div id="caicai" v-for="(v,i) in arr" :key="i">
                    <img :src="v.imgsrc">
                    <h4>{{v.title}}</h4>
                    <span>{{v.yueshou}}</span>
                    <span>{{v.haoping}}</span>
                    <div id="jiagejian">
                        <span>￥{{v.jiage}}</span>
                        <span>￥{{v.jianmian}}</span>
                    </div>             
                    <p>{{v.dizhi}}</p>
                </div>
            </div>
        </div>

        <div id="meishang" v-else>
            <img :src="imgurl" alt="">
            <p>还没有选购商品</p>
            <p>购物车会为您保留最近七天选购的商品</p>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            prev(){
                this.$router.go(-1)
            },
            Dialog(num){
                console.log(this.num)
                this.$dialog.confirm({
                message: '确认删除该商家的所有商品',
                 title: '标删除商家'            
                }).then((num) => {
                    if(this.num==-100){
                        
                        this.lurou=[]
                        // this.kong=false;
                    }else{
                         this.lurou.splice(this.num,1); 
                    }
                   
                }).catch(() => {
                // on cancel
                });
            }
        },
        created(){
            console.log(this.kong)
            if(this.lurou.length==[]){
                    this.kong=false;
                }
            
        },
        watch:{
            kong(){
                if(this.lurou.length==[]){
                    this.kong=false;
                }
            }
        },
        computed:{
             zongjia:function(){
                 return (this.lurou[0].jiage*this.lurou[0].shuliang)+this.lurou[0].canhe-this.lurou[0].jianmian
             }
        },
        data(){
            return {
                kong:true,
                num:"",
                imgurl:"../../static/orders/a2.png",
                lurou:[
                    {dianming:"带路竞拍猪卤饭(大都汇店)",
                     imgsrc:"../../../static/guo/shopping/rou.png",
                     name:"特惠金牌猪卤饭",
                     jiage:20.5,
                     canhe:2,
                     jianmian:6,
                     shuliang:2
                    },
                    {dianming:"(大都汇店)",
                     imgsrc:"../../../static/guo/shopping/rou.png",
                     name:"特惠金牌猪卤饭",
                     jiage:20.5,
                     canhe:2,
                     jianmian:6,
                     shuliang:2
                    },
                    {dianming:"(大都汇店)asdasd",
                     imgsrc:"../../../static/guo/shopping/rou.png",
                     name:"特惠金牌猪卤饭",
                     jiage:20.5,
                     canhe:2,
                     jianmian:6,
                     shuliang:2
                    }
                ],
                arr:[
                    {imgsrc:"../../static/guo/shopping/c1.png",
                     title:"重庆冰粉",
                     yueshou:"月售193份",
                     haoping:"好评率89%",
                     jiage:7,
                     jianmian:"满10减6",
                     dizhi:"这家店不错牛肉面(高新六路店)"
                    },
                    {imgsrc:"../../static/guo/shopping/c2.png",
                     title:"五谷时蔬土豆泥",
                     yueshou:"月售167份",
                     haoping:"好评率100%",
                     jiage:8,
                     jianmian:"满25减10",
                     dizhi:"线条清食SEXYFIT(全方面守护您的健康)"
                    },
                    {imgsrc:"../../static/guo/shopping/c3.png",
                     title:"荤食满汉螺蛳粉",
                     yueshou:"月售72份",
                     haoping:"好评率100%",
                     jiage:25,
                     jianmian:"满25减1",
                     dizhi:"阿霞柳州螺蛳粉(高新六路店)"
                    },
                    {imgsrc:"../../static/guo/shopping/c4.png",
                     title:"大碗炸酱面【回馈价】",
                     yueshou:"月售227份",
                     haoping:"好评率100%",
                     jiage:12,
                     jianmian:"满10减6",
                     dizhi:"王菊面馆.一道面打天下(高新六路店)"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

#zanwei{
    height: .5rem;
    width: 100%;
    
}
/* 头部 */
#dbox{
    width: 100%;
    height: 0.5rem;
    display: flex;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    align-items: center;
    color: white;
    position: fixed;
    top: 0px;
}
#dbox p{
    font-size: 0.14rem;
    margin-left: 0.4rem;
    margin-right: 2rem;
}
#dbox span:nth-of-type(1){
    font-size: 0.27rem;
    margin-left: 0.2rem;
}
 #dbox span:nth-of-type(2){
    font-size: 0.14rem;
}

/* 购物车 */
#gouwu{
    font-size: 0px;
    width: 100%;
    /* margin-top: .5rem; */
}
#gouwu img{
    width: 0.5rem;
    height: 0.5rem;
}
#gouwu #shan{
    width: 100%;
    height: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#shan a{
    font-size: 0.16rem;
    color: black;
    margin-left: 0.1rem;
}
#shan span{
    font-size: 0.16rem;
    color: gray;
    margin-right: 0.1rem;
}

#shangp{
   width: 100%;
}
#shangp img{
    float: left;
    margin-left: 0.1rem;
}
#shangp #zhu{
    font-size: 0.16rem;
    margin-left: .1rem;
    line-height: 0.16rem;
    color:black;
}
#shangp #qian{
    font-size: 0.16rem;
    color: rgb(255,62,0);
    font-weight: 600;
    float: right;
    margin-right: 0.1rem;
    line-height: 0.16rem;

}
#shangp p{
    font-size: 0.12rem;
    color: gray;
    margin-left: .75rem;
    margin-top: 0.1rem;
}
#shangf{
     width: 100%;
    height: 0.8rem;
    display: flex;
    align-items: center;
}

#canhe{
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(194, 191, 191, 0.562);
    border-bottom: 1px solid rgba(194, 191, 191, 0.562);
    align-items: center;
}
#canhe p{
    font-size: 0.16rem;
    margin-left: .1rem;
}
#canhe span{
    font-size: 0.14rem;
    color: rgb(255,62,0);
    margin-right: .1rem;
    font-weight: 600;

}

#jiesuan{
    width: 100%;
    height: 0.5rem;
    display: flex;
    border-bottom: 1px solid rgba(194, 191, 191, 0.562);
    align-items: center;
}
#jiesuan p{
    font-size: 0.13rem;
    color: gray;
    margin-left: .1rem;
    margin-right: .5rem;
}
#jiesuan .youhuijin{
    color: rgb(255,62,0);
    font-weight: 600;

}
.heji{
    font-size: .15rem;
    color: gray;
    margin-right: .2rem;
}
.jiesuanbtn{
    font-size: .15rem;
    color: white;
    background-color: rgb(71, 196, 92);
    padding: .07rem .12rem;
    border-radius: 3px;
}
.jiesuanbtn a{
    color: white;
}
#caini{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
#caicai{
    width: 49%;
    height: 2.7rem;
    font-size: 0px;
}
#caicai h4{
    font-size: .16rem;
    margin-left: .1rem;
    color: #000000d2;
    margin-top: .1rem;
    /* margin-bottom: .1rem; */
}
#caicai span:nth-of-type(1){
    font-size: .12rem;
    color: gray;
    margin-left: .1rem;
}
#caicai span:nth-of-type(2){
    font-size: .12rem;
    color: gray;
    margin-left: 4px;
}
#jiagejian{
    margin-top: 5px;
}
#jiagejian span:nth-of-type(1){
    color: rgb(255,62,0);  
    font-size: 0.14rem;
    font-weight: 600;
}
#jiagejian span:nth-of-type(2){
    color: brown;
    font-size: 0.1rem;
    border: 1px solid brown;
    padding: 0px 4px;
}
#caicai p{
    font-size: .12rem;
    color: gray;
    margin-left: .1rem;
    margin-top: .1rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    border-top: 1px solid rgba(169, 169, 169, 0.568);
}

#caini img{
    width: 100%;
    height: 1.7rem;
}

#caitxt{
    width: 100%;
    height: 0.5rem;
    display: flex;
}
#caitxt span{
    font-size: 0.16rem;
    font-weight: 600;
    margin-left: .1rem;
    margin-top: .2rem;
}
#zhongxia{
    width: 100%;
    height: 100%;
    /* display: none; */
}



/* 登录前 */
#meishang{
    width: 100%;
    height: 6.16rem;
    display: flex;
    align-items: center;    
    flex-direction: column;
    background: rgb(248,248,248) ;
    /* display: none; */
}
#meishang p:nth-of-type(1){
    font-size: 0.16rem;
    color: gray;
}
#meishang p:nth-of-type(2){
    font-size: .12rem;
    color: gray;
}
#meishang img{
    width: 1.5rem;
    height: 1.3rem;
    margin-top: 1.7rem;

}
</style>