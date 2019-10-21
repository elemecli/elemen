<template>
  <div id="boss">
    <div class="first">
        <topOne :resData="resData"></topOne>
        <div class="topTwo">
          <!-- <p class="one">{{arr[4].textc}}</p> -->
          <p class="one">{{resData.resName}}</p>
          <div class="two">
            <!-- <p>评价{{arr[1].texta}}</p> -->
            <p>评价{{((Number(resData.starLevel1)+Number(resData.starLevel1)+Number(resData.starLevel1))/3).toFixed(1)}}</p>
            <p>月售{{resData.monSale}}</p>
            <p>{{"蜂鸟快送约"+resData.time+"分钟"}}</p>
          </div>
        </div>
        <topThree :resData="resData"></topThree>
    </div>
  </div>
</template>

<script>
import topOne from './topOne'
import topThree from './topThree'

export default {
    components:{
        topOne,
        topThree
    },
    data(){
      return{
        // arr:[]
      }
    },
    // created(){
    //   this.axios.get("/apis/home").then((ok)=>{
    //     console.log(ok.data.data)
    //         this.arr=ok.data.data
    //     })
    // },
    props:["resData"]
}
</script>

<style scoped>
.topTwo{
  text-align: center;
}
.one{
  font-size: .24rem;
  font-weight: 600;
  margin-top: .4rem;
}
.two{
  display: flex;
  margin:.1rem 0 ;
  margin-left: .65rem;
}
.two p{
  font-size: .1rem;
  color:#696969;
  padding:0 .08rem;
}
.two p:nth-child(1){
  border-right: 1px solid #ccc;
}
.two p:nth-child(2){
  border-right: 1px solid #ccc;
}
</style>
