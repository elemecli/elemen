<template>
<div class="boss">
  <div id="bossa" v-if="scrolltop<140">
    <div class="onea">
    <router-link class="lefta" to="/takeoutFood/all">
        <img src="../../../static/diancan/tu18.jpg" alt="">
    </router-link>
    <div class="centera">
        <img src="../../../static/diancan/tu19.jpg" alt="">
        <img src="../../../static/diancan/tu20.jpg" alt="">
    </div>
    <div class="righta">
        <img src="../../../static/diancan/tu21.jpg" alt="">
    </div>
    </div>
    <div id="bossc">
      <img :src="resData.resImg|imgfilter">
  </div>
  <div id="bossd" @click="fun()" >
      <img src="../../../static/diancan/tu26.jpg" v-if = "bool">
      <img src="../../../static/diancan/tu25.jpg" v-else>
  </div>
  <transition>
  <div class="bosse" v-if = "bool&&aaa" ref="adds">
      <span>已收藏</span>
  </div>
  <div class="bossf" v-if = "!bool&&aaa" ref="addx">
      <span>已取消</span>
  </div>
  </transition>
  </div>
  
  <div id="bossb" v-else>
    <div class="twoa">
    <div class="lefta leftb">
        <img src="../../../static/diancan/tu24.jpg" alt="">
    </div>
    <div class="centerb">
        <div class="inputa">
            <img src="../../../static/diancan/tu22.jpg" alt="">
            <input type="text" placeholder="想吃什么搜一搜" readonly="readonly">
        </div>
    </div>
    <div class="righta rightb">
        <img src="../../../static/diancan/tu23.jpg" alt="">
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    
    data(){
        return{
           bool:false,
           aaa:false,
           arr:[],
           scrolltop:""
        }
    },
    filters:{
        imgfilter(val){
            return "../../../static/restaurant/"+val;
        }
    },
    methods:{
        fun(){
            let timeout=clearTimeout();
            this.bool = !this.bool;
            this.aaa=true;
            if(true){
                let that=this;
                timeout=setTimeout(() => {
                    that.aaa=false;
                }, 2000);
            }
        },
        handleScroll() {
      var scrollTop = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop;
      this.scrolltop = scrollTop;
    }
    },
    // created(){
    //     this.axios.get("/apis/home").then((ok)=>{
    //         this.arr=ok.data.data
    //     })
    // },
    mounted() {
    window.addEventListener("scroll", this.handleScroll);
    },

    props:["resData"]

}
</script>

<style scoped>
.boss{
    position: relative;
}
#bossa{
    width:100%;
    height:1.4rem;
    background:linear-gradient(to bottom,#27450f 0%,#558f28 100%);
}
img{
    width:.20rem;
    height:.20rem;
}
.onea{
    padding-top: .54rem;
    display: flex;
}
.lefta{
    font-size: 0;
    margin-left: .2rem;
}
.centera{
    display: flex;
}
.centera img:nth-child(1){
    margin-left: 1.95rem;
}
.centera img:nth-child(2){
    margin-left: .3rem;
}
.righta{
    margin-left:.3rem;
    font-size: 0;
}
#bossb{
    width:100%;
    padding:.1rem 0;
    background-color: #fff;
    position: fixed;
    top:0;
    z-index: 1;
}
.twoa{
    display: flex;
}
.leftb{
    margin-top: .08rem;
}
.centerb{
    width:62%;
    height:.3rem;
    background-color:#e6e6e6;
    margin-left:.3rem;
    border-radius: .25rem;
}
.centerb .inputa{
    font-size: 0.08rem;
    display: flex;
    padding-left:.42rem;
    margin-top:.08rem;
}
.inputa img{
    width:.17rem;
    height:.17rem;
}
.inputa input{
    background-color:#e6e6e6;
}
.rightb{
    margin-top: .08rem;
    margin-left:.26rem;
}
#bossc{
    position: absolute;
    left:1.45rem;
    top:.6rem;
}
#bossc img{
    width:.8rem;
    height:.8rem;
}
#bossd{
    width:.36rem;
    height:.36rem;
    background-color: #fff;
    font-size: 0;
    border-radius: 50%;
    position: absolute;
    top:1.2rem;
    right:.1rem;
    text-align: center;
    z-index:1;
}
#bossd img:nth-child(1){
    margin-top:.1rem;
}
#bossd img:nth-child(2){
    margin-top:.1rem;
}
.bosse{
    width:.5rem;
    height:.2rem;
    background-color:#fff;
    font-size: 0;
    border-top-left-radius:.1rem;
    border-bottom-left-radius:.1rem;
    position: absolute;
    top:1.3rem;
    right:0rem;
    text-align: center;
    transition: all 1s;
    transform: translateX(-0.44rem);
}

.bossev-enter-active{
    opacity: 0;
}
.bosse span{
    display: block;
    font-size: .06rem;
    margin-top:.01rem;
    color:red;
}
.bossf{
    width:.5rem;
    height:.2rem;
    background-color:#fff;
    font-size: 0;
    border-top-left-radius:.1rem;
    border-bottom-left-radius:.1rem;
    position: absolute;
    top:1.3rem;
    right:0rem;
    text-align: center;
    transition: all 1s;
    transform: translateX(-0.44rem);
}
.bossf span{
    display: block;
    font-size: .06rem;
    margin-top:.01rem;
}
</style>
