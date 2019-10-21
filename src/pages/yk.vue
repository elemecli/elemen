<template>
  <div id="boss">
    <top :resData="resData"></top>
    <div class="first">
      <router-link :to="{path:'/yk/ykdiancan',query:{resname:contitle}}" class="firsta">点餐</router-link>
      <router-link :to="{path:'/yk/ykpingjia',query:{resname:contitle}}" class="firsta">评价</router-link>
      <router-link :to="{path:'/yk/ykshangjia',query:{resname:contitle}}" class="firsta">商家</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import top from '../components/shopAndcar/top'

export default {
  data(){
    return{
      resData:"",
      contitle:""
    }
  },
  components:{
    top
  },
  created(){
    var param=new URLSearchParams;
    this.contitle=this.$route.query.resname;
    param.append("resname",this.$route.query.resname);
    this.axios({
        method:"post",
        url:"/apis/yk",
        data:param
    }).then((ok)=>{
        this.resData=ok.data.data.datas.resData;
        console.log(this.resData);
    })
  }
}
</script>

<style scoped>
.first{
  height:.5rem;
  font-size: .18rem;
  margin:0 .2rem;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
}
.firsta{
  color:black;
  margin-top: .13rem;
}
.router-link-active{
  font-weight: 600;
  padding-bottom:.12rem;
  border-bottom: 3px solid black;
}
</style>
