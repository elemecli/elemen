<template>
    <div id="boss">
        <img src="../../../static/diancan/tu1.jpg" class="imgone">
        <div class="first">
            <div class="left" ref='dingwei'>
                <a href="#kindsa">{{arr[0].texta}}</a>
                <a href="#kindsb">{{arr[0].textb}}</a>
                <a href="#kindsc">{{arr[0].textc}}</a>
                <a href="#kindsd">{{arr[0].textd}}</a>
            </div>
            <div class="right">
                <div class="right-box" v-for="(v,i) in acc" :key="i">
                    <p id="kindsa" class="kinds">{{v.kinds}}</p>
                    <div class="prodect">
                        <div class="imgs">
                            <van-cell @click="showPopup" class="ceng">
                                <img :src="v.imgsrc|imgfilter">
                            </van-cell>
                        </div>
                        <div class="messages">
                            <p class="titlea">{{v.titlea}}</p>
                            <p class="texta one">主要原料：{{v.texta}}</p>
                            <span class="one">月售:{{v.numa}}</span>
                            <span class="one">好评率:{{v.numc}}</span>
                            <p class="nume">{{v.nume}}折</p>
                            <span class="two">￥{{v.numc}}</span>
                            <del class="three">￥{{v.numc}}</del>
                            <div class="four">
                                <span class="iconfont" v-if="v.nums>0" @click="jiana(i)">&#xe60d;</span>
                                <span class="nums" v-if="v.nums>0">{{v.nums}}</span>
                                <span class="iconfont" @click="adda(i)">&#xe61a;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-box" v-for="(v,i) in abb" :key="i+100">
                    <p id="kindsb" class="kinds">{{v.kinds}}</p>
                    <div class="prodect">
                        <div class="imgs">
                            <van-cell @click="showPopup" class="ceng">
                                <img :src="v.imgsrc|imgfilter">
                            </van-cell>
                        </div>
                        <div class="messages">
                            <p class="titlea">{{v.titlea}}</p>
                            <p class="texta one">主要原料：{{v.texta}}</p>
                            <span class="one">月售:{{v.numa}}</span>
                            <span class="one">好评率:{{v.numc}}</span>
                            <p class="nume">{{v.nume}}折</p>
                            <span class="two">￥{{v.numc}}</span>
                            <del class="three">￥{{v.numc}}</del>
                            <div class="four">
                                <span class="iconfont" v-if="v.nums>0" @click="jianb(i)">&#xe60d;</span>
                                <span class="nums" v-if="v.nums>0">{{v.nums}}</span>
                                <span class="iconfont" @click="addb(i)">&#xe61a;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-box" v-for="(v,i) in azz" :key="i+200">
                    <p id="kindsc" class="kinds">{{v.kinds}}</p>
                    <div class="prodect">
                        <div class="imgs">
                            <van-cell @click="showPopup" class="ceng">
                                <img :src="v.imgsrc|imgfilter">
                            </van-cell>
                        </div>
                        <div class="messages">
                            <p class="titlea">{{v.titlea}}</p>
                            <p class="texta one">主要原料：{{v.texta}}</p>
                            <span class="one">月售:{{v.numa}}</span>
                            <span class="one">好评率:{{v.numc}}</span>
                            <p class="nume">{{v.nume}}折</p>
                            <span class="two">￥{{v.numc}}</span>
                            <del class="three">￥{{v.numc}}</del>
                            <div class="four">
                                <span class="iconfont" v-if="v.nums>0" @click="jianc(i)">&#xe60d;</span>
                                <span class="nums" v-if="v.nums>0">{{v.nums}}</span>
                                <span class="iconfont" @click="addc(i)">&#xe61a;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-box" v-for="(v,i) in axx" :key="i+300">
                    <p id="kindsd" class="kinds">{{v.kinds}}</p>
                    <div class="prodect">
                        <div class="imgs">
                            <van-cell @click="showPopup" class="ceng">
                                <img :src="v.imgsrc|imgfilter">
                            </van-cell>
                        </div>
                        <div class="messages">
                            <p class="titlea">{{v.titlea}}</p>
                            <p class="texta one">主要原料：{{v.texta}}</p>
                            <span class="one">月售:{{v.numa}}</span>
                            <span class="one">好评率:{{v.numc}}</span>
                            <p class="nume">{{v.nume}}折</p>
                            <span class="two">￥{{v.numc}}</span>
                            <del class="three">￥{{v.numc}}</del>
                            <div class="four">
                                <span class="iconfont" v-if="v.nums>0" @click="jiand(i)">&#xe60d;</span>
                                <span class="nums" v-if="v.nums>0">{{v.nums}}</span>
                                <span class="iconfont" @click="addd(i)">&#xe61a;</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <van-popup v-model="show" closeable position="bottom" :style="{ height: '80%' }" class="goods">
                    <div class="top">
                         <img :src="aww[0].imgsrc|imgfilter">
                    </div>
                    <div class="textbox">
                        <div class="textone">
                            <div class="one">
                                <p>{{aww[0].texta}}</p>
                                <p>{{aww[0].textb}}</p>
                            </div>
                            <div class="two">
                                <span>月售{{aww[0].numa}}</span>
                                <span>好评率{{aww[0].numb}}%</span>
                            </div>
                            <div class="three">
                                <span class="twoa">￥{{aww[0].numc}}</span>
                                <del class="threea">￥{{aww[0].numd}}</del>
                                <p class="nume">{{aww[0].nume}}折</p>
                                <div class="threeb">
                                    <span class="iconfont sizetext" v-if="aww[0].nums>0" @click="jiandss()">&#xe60d;</span>
                                    <span class="nums" v-if="aww[0].nums>0">{{aww[0].nums}}</span>
                                    <span class="iconfont sizetext" @click="adddss()">&#xe61a;</span>
                                </div>
                            </div>
                            <div class="four">
                                <p>主要原料：{{aww[0].textc}}</p>
                                <span>价格说明 </span>
                                <img src="../../../static/diancan/tu28.jpg" alt="">
                            </div>
                            <div class="five">
                                <p class="aaa">
                                    <span>商品评价</span>
                                    <span>(好评率{{aww[0].numb}}%)</span>
                                </p>
                                <p class="bbb">
                                    9条评价 >
                                </p>
                            </div>
                        </div>
                    </div>
                </van-popup>
            </div>
        </div>
        <div class="bottoma">
            <div class="leftsss">
                <img src="../../../static/diancan/tu27.jpg" alt="">
            </div>
            <div class="leftsssnume" v-if="ass[0].nume!=0"><span>{{ass[0].nume}}</span></div>
            <div class="centersssa"  v-else-if="true">
                <p>未选购商品</p>
                <p>另需配送费{{ass[0].numa}}元</p>
            </div>
            <div class="centersssb" v-if="ass[0].nume!=0">
                <p>
                    <span>￥{{ass[0].numc}}</span>
                    <del>￥{{ass[0].numd}}</del>
                </p>
                <p>另需配送费{{ass[0].numa}}元</p>
            </div>
            <div class="rightsssa" v-else-if="true">
                <p>￥{{ass[0].numb}}起送</p>
            </div>
            <div class="rightsssb" v-if="ass[0].nume!=0">
                <p>去结算</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // data(){
    //     return{
    //         resData:""
    //     }
    // },
    components:{
    },
    data(){
        return{
           arr:[],
           acc:[],
           abb:[],
           azz:[],
           axx:[],
           ass:[],
           aww:[],
           show: false
        }
    },
    filters:{
        imgfilter(val){
            return "../../../static/diancan/"+val;
        }
    },
    methods:{
        jiana(i){
            if(this.acc[i].nums>0){
                this.acc[i].nums =  this.acc[i].nums - 1;
                this.ass[0].nume=  Number(this.ass[0].nume) - 1;
                this.ass[0].numc=  Number(this.acc[i].numc)*this.ass[0].nume;
                this.ass[0].numd=  Number(this.acc[i].numd)*this.ass[0].nume;
            };
        },
        adda(i){
            this.acc[i].nums =  this.acc[i].nums + 1;
            this.ass[0].nume=  Number(this.ass[0].nume) + 1;
            this.ass[0].numc=  Number(this.acc[i].numc) *this.ass[0].nume;
            this.ass[0].numd=  Number(this.acc[i].numd)*this.ass[0].nume;
        },
        jianb(i){
            if(this.abb[i].nums>0){
                 this.abb[i].nums =  this.abb[i].nums - 1;
                 this.ass[0].nume=  Number(this.ass[0].nume) - 1;
                 this.ass[0].numc=  Number(this.acc[i].numc)*this.ass[0].nume;
                 this.ass[0].numd=  Number(this.acc[i].numd)*this.ass[0].nume;
            }
        },
        addb(i){
            this.abb[i].nums =  this.abb[i].nums + 1;
            this.ass[0].nume=  Number(this.ass[0].nume) + 1;
            this.ass[0].numc=  Number(this.acc[i].numc) *this.ass[0].nume;
            this.ass[0].numd=  Number(this.acc[i].numd)*this.ass[0].nume;
        },
        jianc(i){
            if(this.azz[i].nums>0){
                 this.azz[i].nums =  this.azz[i].nums - 1;
                 this.ass[0].nume=  Number(this.ass[0].nume) - 1;
                 this.ass[0].numc=  Number(this.acc[i].numc)*this.ass[0].nume;
                 this.ass[0].numd=  Number(this.acc[i].numd)*this.ass[0].nume;
            }
        },
        addc(i){
            this.azz[i].nums =  this.azz[i].nums + 1;
            this.ass[0].nume=  Number(this.ass[0].nume) + 1;
            this.ass[0].numc=  Number(this.acc[i].numc) *this.ass[0].nume;
            this.ass[0].numd=  Number(this.acc[i].numd)*this.ass[0].nume;
        },
        jiand(i){
            if(this.axx[i].nums>0){
                 this.axx[i].nums =  this.axx[i].nums - 1;
                 this.ass[0].nume=  Number(this.ass[0].nume) - 1;
                 this.ass[0].numc=  Number(this.acc[i].numc)*this.ass[0].nume;
                 this.ass[0].numd=  Number(this.acc[i].numd)*this.ass[0].nume;
            }
        },
        addd(i){
            this.axx[i].nums =  this.axx[i].nums + 1;
            this.ass[0].nume=  Number(this.ass[0].nume) + 1;
            this.ass[0].numc=  Number(this.acc[i].numc) *this.ass[0].nume;
            this.ass[0].numd=  Number(this.acc[i].numd)*this.ass[0].nume;
        },
        jiandss(i){
            if(this.aww[0].nums>0){
                 this.aww[0].nums =  this.aww[0].nums - 1;
                 this.ass[0].nume=  Number(this.ass[0].nume) - 1;
                 this.ass[0].numc=  Number(this.aww[0].numc)*this.ass[0].nume;
                 this.ass[0].numd=  Number(this.aww[0].numd)*this.ass[0].nume;
            }
        },
        adddss(i){
            this.aww[0].nums =  this.aww[0].nums + 1;
            this.ass[0].nume=  Number(this.ass[0].nume) + 1;
            this.ass[0].numc=  Number(this.aww[0].numc) *this.ass[0].nume;
            this.ass[0].numd=  Number(this.aww[0].numd)*this.ass[0].nume;
        },
        handleScroll() {
            var scrollTop = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop;
            this.scrolltop = scrollTop;
            if(this.scrolltop>270){
                this.$refs.dingwei.style.cssText = 'position: fixed;top:2rem;left:0.1rem;';
            }else if(this.scrolltop<270){
                 this.$refs.dingwei.style.cssText = 'position:none;';
            }
        },
        showPopup() {
            this.show = true;
        }
    },
    created(){
        this.axios.get("/apis/userEval").then((ok)=>{
            this.arr=ok.data.kind,
            this.acc=ok.data.foodone,
            this.abb=ok.data.foodtwo,
            this.azz=ok.data.foodthree,
            this.axx=ok.data.foodfour,
            this.ass=ok.data.footer,
            this.aww=ok.data.goods

        })
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    // created(){
    //     var param=new URLSearchParams;
    //     param.append("resname",this.$route.query.resname)
    //     this.axios({
    //         method:"post",
    //         url:"/apis/yk",
    //         data:param
    //     }).then((ok)=>{
    //         this.resData=ok.data.data.datas.resData;
    //         console.log(this.resData);
    //     })
    // }
}
</script>

<style scoped>
#boss{
    width:100%;
    font-size: 0;
}
.imgone{
    width:3.3rem;
    height:1rem;
    margin:.2rem .2rem;
}
.first{
    display: flex;
    float: right;
    padding-bottom: .8rem;
}
.left{
    background-color:#f8f8f8;
}
.left a{
    display: block;
    font-size: .13rem;
    width:.5rem;
    color:#9a9a9a;
    margin-right: .4rem;
    margin-bottom: .4rem;
}

.right{
    font-size: .14rem;
    margin-left: .1rem;
    padding-right: .57rem;
    float: right;
}
.imgs img{
    display: block;
    width:.8rem;
    height:1rem;
    margin-right: .1rem;
}
.ceng{
    padding:0;
    margin:0;
}
.kinds{
    color:#696969;
    font-weight: 600;
    margin-bottom: .12rem;
}
.prodect{
    display: flex;
}
.messages{
    position: relative;
}
.messages .titlea{
    font-size: .16rem;
    font-weight: 600;
    margin-bottom: .08rem;
}
.messages .one{
    font-size: .12rem;
    color:#999;
}
.nume{
    width:.28rem;
    padding:.01rem 0;
    text-align: center;
    border:1px solid #ccc;
    color:#c78086;
    background-color: #fef2f4;
}
.messages .two{
    color:#ef5839;
    font-size: .15rem;
    font-weight: 600;
}
.messages .three{
    font-size: .12rem;
    color:#999;
}
.messages .four{
    display: flex;
    position: absolute;
    left:1rem;
    top:.9rem;
}
.messages .four .nums{
    margin:0 .1rem;
}
.iconfont{
    color:#2495ff;
}
.sizetext{
    font-size: .18rem;
}


.bottoma{
    width:100%;
    height:.6rem;
    background-color: #414143;
    position: fixed;
    bottom:0;
    display: flex;
}
.leftsss{
    width:1rem;
    position: relative;
}
.leftsss img{
    width:.6rem;
    height:.6rem;
    position: absolute;
    left:.2rem;
    bottom:.088rem;
    z-index: 1;
}
.leftsssnume{
    width:.2rem;
    height:.2rem;
    background-color: #f66d1d;
    border-radius: 50%;
    position: absolute;
    left:.65rem;
    bottom:.45rem;
    z-index: 2;
}
.leftsssnume span{
    font-size: .11rem;
    color:#fff;
    font-weight: 600;
    margin-left: .06rem;
}
.centersssa{
    margin-top:.12rem;
}
.centersssa p:nth-child(1){
    font-size: .14rem;
    color:#989898;
}
.centersssa p:nth-child(2){
    font-size: .11rem;
    color:#989898;
}
.centersssb{
    margin-top:.12rem;
}
.centersssb p:nth-child(1){
    display: flex;
}
.centersssb p:nth-child(1) span{
    font-size: .2rem;
    color:#fff;
    font-weight: 600;
}
.centersssb p:nth-child(1) del{
    font-size: .11rem;
    color:#989898;
    margin-top: .1rem;
}
.centersssb p:nth-child(2){
    font-size: .11rem;
    color:#989898;
}
.rightsssa{
    width:1.45rem;
    height:.6rem;
    background-color: #545456;
    text-align: center;
    margin-left:.4rem;
}
.rightsssa p{
    color:#aaaaac;
    font-size: .2rem;
    font-weight: 600;
    margin-top: .12rem;
}
.rightsssb{
    width:1.45rem;
    height:.6rem;
    background-color: #5ad078;
    text-align: center;
    margin-left:.4rem;;
}
.rightsssb p{
    color:#fff;
    font-size: .2rem;
    font-weight: 600;
    margin-top: .12rem;
}
.goods .top img{
    width:100%;
    height:2rem;;
}
.goods .textbox{
    margin:0 .1rem;
}
.goods .textone .one{
    display: flex;
    margin-top: .1rem;
}
.goods .textone .one p:nth-child(1){
    width:.4rem;
    height:.2rem;
    text-align: center;
    background-color: #fa7307;
    border-radius: .04rem;
    color:#fff;
    margin-right: .08rem;
}
.goods .textone .one p:nth-child(2){
    font-size: .16rem;
    font-weight: 600;
    margin-bottom: .08rem;
}
.goods .textone .two span{
    font-size: .12rem;
    color:#999;
}
.goods .textone .three{
    position: relative;
    margin:.1rem 0;
    display: flex;
}
.goods .textone .three .twoa{
    color:#ef5839;
    font-size: .18rem;
    font-weight: 600;
}
.goods .textone .three .threea{
    font-size: .12rem;
    color:#999;
    margin-right: .1rem;
}
.goods .textone .three .nume{
    height:.18rem;
}
.goods .textone .three .threeb{
    display: flex;
    position: absolute;
    left:2.8rem;
    top:.1rem;
}
.goods .textone .three .threeb .nums{
    margin:0 .1rem;
}
.goods .textone .four p,span{
    font-size: .12rem;
    color:#999;
    margin-bottom: .06rem;
}
.goods .textone .four img{
    width:.15rem;
    height:.15rem;
    margin-top: .08rem;
}
.goods .textone .five{
    display: flex;
    justify-content: space-between;
    margin-top: .3rem;
}
.goods .textone .five .aaa span:nth-child(1){
    font-size: .16rem;
    font-weight: 600;
    color:black;
}
.goods .textone .five .aaa span:nth-child(2){
    font-size: .12rem;
    font-weight: 600;
    color:black;
}
.goods .textone .five .bbb{
    font-size: .12rem;
    color:#666;
}
</style>