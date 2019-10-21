<template>
    <div>
        <!-- 登录前 -->
        <div id="dengqian" v-show="false">
            <img :src="imgscr">
            <p>登录后立即查看外卖订单</p>
            <span>立即登录</span>
        </div>
        <!-- 登录后 -->
        <div>
            <div id="tou">
                <span class="qita" @click="name()">其他订单</span>
                <div id="tiao" v-show="dtt">
                    <div>
                        <span class="iconfont">&#xe625;&nbsp;&nbsp;</span>
                        <a href="#">跑腿代购</a>
                    </div>
                    <div>
                        <span class="iconfont">&#xe634;&nbsp;&nbsp;</span>
                        <a href="#">口碑</a>
                    </div>
                    <div>
                        <span class="iconfont">&#xe679;&nbsp;&nbsp;</span>
                        <a href="#">电影</a>
                    </div>
                    <div>
                        <span class="iconfont">&#xe60a;&nbsp;&nbsp;</span>
                        <a href="#">酒店</a>
                    </div>
                    <div>
                        <span class="iconfont">&#xe678;&nbsp;&nbsp;</span>
                        <a href="#">火车票</a>
                    </div>
                <div>
                        <span class="iconfont">&#xe782;&nbsp;&nbsp;</span>
                    <a href="#">外卖卡卷</a>
                </div>               
                </div>
            </div>
            <div id="zhong"  @click="fun()">
                <h4>我的订单</h4>
                <div v-for="(v,i) in kuai" :key="i" class="dingdankuai">
                    <div class="imgkuai">
                        <img :src="v.imgurl">
                    </div>
                    <div class="wenzikuai">
                        <span>{{v.dianming}}</span>
                        <span>></span>
                        <span>已送达</span>
                        <p>{{v.shijian}}</p>
                        <span>{{v.shiwuming}}</span>
                        <span>￥{{v.jiage}}</span>
                    </div>
                </div>
            </div>
        </div>

        <FooterBar :keyid="2"></FooterBar>
    </div>
</template>

<script>
    import FooterBar from '../components/footerBar'
    export default {
        components:{
            FooterBar
        },
        data(){
            return {
                dtt:false,
                imgscr:"../../static/guo/orders/a2.png",
                kuai:[
                    {
                    dianming:"王菊面馆",
                    shijian:"2019-08-11 17:10",
                    shiwuming:"热辣炸酱面",
                    jiage:14,
                    imgurl:"../../static/guo/orders/c4.png"
                    }
                ]
            }
        },
        methods: {
            name(){
                this.dtt=!this.dtt
            },
            fun(){
                this.dtt=false
            }
            
        },
        
    }
</script>

<style scoped>

/* 登录前 */
#dengqian{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(248,248,248) ;
    width: 100%;
    height: 6rem;
}
#dengqian img{
    width: 1.5rem;
    height: 1.3rem;
    margin-top: 1.7rem;
}
#dengqian p{
    font-size: 0.16rem;
    color: rgb(45, 46, 46);
    margin-bottom: 0.2rem;
}
#dengqian span{
    font-size: 0.14rem;
    background-color: rgb(71, 196, 92);
    padding: 0.1rem 0.18rem;
    border-radius: 2px;
}

/* 登录后 */
/* 头部css */
#tou{
    width: 100%;
    height: 0.5rem;
    font-size: 0px;
    background: rgb(248,248,248) ;

}
#tou .qita{
    font-size: 0.14rem;
    margin-left: 82%;
    line-height: 0.5rem;

}

/* 导航条 */
#tou #tiao{
    width: 1.1rem;
    height: 2.2rem;
    /* text-align: center; */
    background-color: rgb(74,79,85);
    border-radius: 3px;
    position: absolute;
    top: 0.45rem;
    right: 0.1rem;
}
#tiao div{
    float: left;
    /* padding: 10px 20px; */
    width: 0.9rem;
    height: 0.35rem;
    border-bottom: 1px solid rgba(28, 28, 29, 0.445);
    margin-left: 0.1rem;
}
#tiao div a{
     font-size: 0.12rem;
    color: white;
    line-height: 0.35rem;
}
#tiao .iconfont{
    color: white;
    font-size: 0.16rem;
}


/* 中部css */
#zhong{
    font-size: 0px;
    width: 100%;
    height: 6rem;
    background-color: rgb(248,248,248) ;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#zhong h4{
    font-size: .16rem;
    margin-right: 2.7rem;
    margin-bottom: .1rem;
}
.dingdankuai{
    width: 96%;
    background-color: white;
    display: flex;
    padding-top: .2rem;
    /* padding-bottom: .1rem; */
    margin-bottom: .1rem;
    border-radius: 5px;
}
.imgkuai{
    margin-left: .1rem;
    margin-right: .1rem;
}
.dingdankuai img{
    width: .35rem;
    height: .35rem;
}
.wenzikuai{
    width: 100%;
}
.dingdankuai span:nth-of-type(1){
    font-size: .14rem;
    font-weight: 600;
    vertical-align:top;

}
.dingdankuai span:nth-of-type(2){
    font-size: .16rem;
    font-weight: 800;
    color: gray;
    margin-left: .1rem;
}
.dingdankuai span:nth-of-type(3){
    font-size: .12rem;
    float: right;
    margin-right: .1rem;
}
.dingdankuai p{
    font-size: .12rem;
    color: gray;
    line-height: .25rem;
    border-bottom: 1px solid rgba(169, 169, 169, 0.301);
}
.dingdankuai span:nth-of-type(4){
    font-size: .12rem;
    margin-top: .15rem;
    line-height: .5rem;
}
.dingdankuai span:nth-of-type(5){
    font-size: .14rem;
     float: right;
    margin-right: .1rem;
    margin-top: .15rem;
}
</style>