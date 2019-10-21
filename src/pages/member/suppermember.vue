<template>
  <div class="first">
    <div class="black_mode">
      <div class="first_1">
        <img src="../../../static/imgs/close1.png" alt />
        <b>购买超级会员</b>
      </div>
      <div class="huangguan">
        <div>
          <img src="../../../static/imgs/hg.png" />
        </div>
        <div>
          <p>我是用户名</p>
          <p>开通饿了么超级会员，每月领20元红包</p>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------ -->
    <div class="fenge">
      <div class="baoyue" v-if="a" >
        <div v-for="(v,i) in arr" :key="i"  @click="funn(i)" class="baoyue_un">
          <p>{{v.title}}</p>
          <p>¥{{v.num}}</p>
          <p class="delonum">¥{{v.onum}}</p>
        </div>
      </div>
      <div class="baoyue " v-else >
        <div v-for="(v,i) in arr1" :key="i" @click="funn2(i)" class="baoyue_op">
          <p>{{v.title}}</p>
          <p>¥{{v.num}}</p>
          <p class="delonum">¥{{v.onum}}</p>
        </div>
      </div>
      <div class="inputbao">
        <input type="checkbox" v-model="a" /><span class="xianshitext"></span>
        <!-- <van-checkbox v-model="checked">复选框</van-checkbox> -->
      </div>
    </div>
    <!-- ------------------------------------------------------ -->

    <div class="checkxian">
      <div>
        <p>选择会员城市</p>
        <p class="checkhongbao">每月红包限制使用次数</p>
      </div>
      <div class="xian">
        <b>西安></b>
      </div>
    </div>

    <!-- ------------------------------------------------------------- -->
    <div class="diyong">
      <div>会员抵用红包</div>
      <div class="diyong_2"><router-link to="./hongbao">可用抵用红包></router-link></div>
    </div>
    <div class="diyong_copy">
      <div>免费送最高12个月会员</div>
      <!-- <div>办饿了么联名送会员更有百元红包</div> -->
      <div class="diyongcopy_2">></div>
    </div>
    <div class="diyong">
      <div>会员抵用红包</div>
      <div class="diyong_2">></div>
    </div>
    <div class="bottom_1">
      <div>自动续费条款</div>
      <div>会员特权说明</div>
      <div>会员服务协议</div>
    </div>
    <!-- -------------------------------- -->
    <div class="bottom_bar">
      <div>
        总价
        <span class="nprice">¥10</span>
        <span class="oprice">¥15</span>
      </div>
      <div>
        <button class="bottom_btn">开通连续包月会员</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { title: "连续包月", num: "6", onum: "15" },
        { title: "连续包季", num: "28", onum: "45" },
        { title: "连续包年", num: "108", onum: "180" }
      ],
      arr1: [
        { title: "包1个月", num: "12", onum: "15" },
        { title: "包3个月", num: "28", onum: "45" },
        { title: "包12个月", num: "108", onum: "180" }
      ],
      arry: [
        { name: "到期后自动续费10元/月，可随时取消" },
        { name: "到期后自动续费28元/季度，可随时取消" },
        { name: "到期后自动续费108元/年，可随时取消" }
      ],
       arry_1: [
        { name: "到期后自动续费12元/月，可随时取消" },
        { name: "到期后自动续费222元/季度，可随时取消" },
        { name: "到期后自动续费22222元/年，可随时取消" }
      ],
      a: true
      //  checked: true
    };
  },
  methods: {
    // fun2(i){
    //  let arr=document.getElementsByClassName("baoyue_un");
    //  arr[i].style.backgroundColor="red"
    // }
    funn(i) {
      // console.log(this.arry[i].name);
      $(".xianshitext").html(this.arry[i].name);
      $(".baoyue_un").eq(i).css({
        border:"0.03rem solid #dfc78a",
        backgroundColor:"#fffcee"
      }).siblings().css({
         border:"0.03rem solid #eeeeee",
        backgroundColor:"white"

      })
    },
      funn2(i) {
      // console.log(this.arry[i].name);
      $(".xianshitext").html(this.arry_1[i].name);
      $(".baoyue_op").eq(i).css({
        border:"0.03rem solid #dfc78a",
        backgroundColor:"#fffcee"
      }).siblings().css({
         border:"0.03rem solid #eeeeee",
        backgroundColor:"white"

      })
    }
  }
};
</script>
<style  scoped>
.first {
  font-size: 0.16rem;
  /* color: white; */
  background: #f3f2f2;
}
.first_1 {
  padding: 0.1rem;
  color: white;
}
.huangguan {
  display: flex;
  margin: 0 0.2rem;
  color: #f2d499;
}
.black_mode {
  background: black;
}
.delonum {
  text-decoration: line-through;
}
.fenge {
  /* margin: 0.1rem; */
  background: white;
}
.baoyue {
  display: flex;
  justify-content: space-around;
  text-align: center;
  /* margin-top: 0.2rem; */
}
.baoyue p {
  margin: 0.07rem;
}
.baoyue div {
  border: 0.02rem solid #f0f0f0;
  padding: 0.15rem;
  height: 1.2rem;
  margin-top: 0.1rem;
}
.inputbao {
  margin: 0.15rem;
}

.checkxian {
  /* width: 100%; */
  /* height: 0.8rem; */
  background: white;
  display: flex;
  justify-content: space-between;
  /* line-height: 0.4rem; */
  padding: 0.15rem;
}
.xian {
  margin-top: 0.03rem;
  font-size: 0.25rem;
}
.checkhongbao {
  font-size: 0.1rem;
  color: gray;
}
.diyong {
  display: flex;
  justify-content: space-between;
  border-top: 0.02rem solid #eeeeee;
  /* height: 0.5rem; */
  background: white;
  /* line-height: 0.5rem; */
  /* margin-bottom: 0.2rem; */
  padding: 0.1rem;
}
.diyong_2 {
  color: #9d9d9d;
}
.diyong_copy {
  display: flex;
  justify-content: space-between;
  /* border-top: 0.02rem solid #eeeeee; */
  height: 0.3;
  background: white;
  line-height: 0.3rem;
  margin-top: 0.2rem;
  padding: 0.1rem;
}
.diyongcopy_2 {
  color: #9d9d9d;
}
.bottom_1 {
  display: flex;
  justify-content: space-around;
  /* background: white; */
  font-size: 0.15rem;
  color: #727272;
  height: 2rem;
  margin-top: 0.03rem;
}
.bottom_bar {
  display: flex;
  justify-content: space-around;
  background: white;
  height: 0.9rem;
  position: fixed;
  bottom: 0rem;
  width: 100%;
  align-items: center;
}
.bottom_btn {
  border: none;
  width: 2rem;
  height: 0.6rem;
  font-size: 0.2rem;
  border-radius: 0.5rem;
  background: #f3d7a1;
}
.nprice {
  color: red;
}
.oprice {
  color: #999999;
  text-decoration: line-through;
  font-size: 0.14rem;
}
</style>