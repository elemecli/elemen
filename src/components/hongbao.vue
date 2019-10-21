<template>
    <div class="box">
       <p class="hongbaotitle"><b>店铺红包</b></p>
       <div class="section" v-for="(v,i) in arr" :key="i">
           <div class="teall">
           <div class="amout">
               <span class="icon">￥</span>
               <span class="price">{{v.money}}</span>
           </div>
           <div class="text">
               <p class="top">{{v.title}}</p>
               <p class="bottom">{{v.content}}</p>
           </div>
           </div>
           <div class="status">
               <div class="btn" @click="fun(i)">领取</div>
               <img src="../../static/img/Supimg/yilingqu.png">
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[
                {money:"10",title:"店铺红包(新客)",content:"满69元可用,2019.10.20到期"},
                {money:"20",title:"店铺红包",content:"满79元可用,2019.10.20到期"},
                {money:"25",title:"店铺红包",content:"满119元可用,2019.10.20到期"},
            ]
        }
    },
    methods:{
        fun(i){
        $(".status img").eq(i).css({
        display: "block"
      });
      $(".btn").eq(i).css({
        display: "none"
      });
        }
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 100%;
    font-size: 0px;
}
.hongbaotitle{
  width: 100%;
  text-align: center;
  height: .4rem;
  margin-top: 13px;

}
.section{
    width: 90%;
    height:.96rem;
    margin: 0 auto;
    background-color: white;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:0px; 
}
.icon{
    font-size: .16rem;
    color: #FD414F;
}
.price{
    font-size: .32rem;
    color: #FD414F;
}
.amout{
    margin-right: 9px;
}
.top{
    font-size: .15rem;
    color: #333;
}
.bottom{
    font-size: 11px;
    color: rgb(0, 0,0,0.5)
}
.btn{
    width: .64rem;
    height: .29rem;
    text-align: center;
    font-size: 13px;
    color: #FFF2F0;
    background-color: #FD414F;
    line-height: .29rem;
    border-radius: 32px;
    margin-right: 6px;
}
.teall{
    display: flex;
    align-items: center;
}
.status img{
    width: .84rem;
    height:.84rem;
    display: none;
}
</style>