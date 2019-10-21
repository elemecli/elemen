<template>
  <span class="marketzong">
    <div class="headerDa">
      <div class="header">
        <div class="headerLeft" :class="scrolltop>81?'bck-col':''" @click="showPopup">
          <img src="../../static/marketImage/xuanfu1.jpg" />
          <h1>{{headerLeftText}}</h1>
          <span :class="show==false?'arrowUp':'arrowUpa'"></span>
        </div>
        <img v-if="scrolltop<81" class="logo" src="../../static/marketImage/logo.jpg" />
        <div class="header-ss" v-else>
          <div class="ss-a">
            <img src="../../static/marketImage/ss-s.jpg" />
          </div>
          <input type="text" readonly="readonly" placeholder="搜索店内5205件好物" />
          <div class="ss-b"></div>
        </div>
      </div>
      <div class="header-bto">
        <div class="headerBottom">
          <div class="headerBottom-top">
            <p>
              <img src="../../static/marketImage/xiaotubiao1.jpg" /> 一站购齐
            </p>
            <p>
              <img src="../../static/marketImage/xiaotubiao1.jpg" /> 新鲜速达
            </p>
            <p>
              <img src="../../static/marketImage/xiaotubiao1.jpg" /> 品质便利
            </p>
          </div>
          <div class="header-ss headerBottom-cen">
            <div class="ss-a headerBottom-ss-a">
              <img src="../../static/marketImage/ss-s.jpg" />
            </div>
            <input type="text" readonly="readonly" placeholder="搜索店内5205件好物" />
            <div class="ss-b"></div>
          </div>
          <p class="headerBottom-btt">
            热搜：
            <span>面包</span>
            <span>康师傅</span>
            <span>面条</span>
            <span>特仑苏</span>
            <span>洗衣粉</span>
            <span>月饼</span>
          </p>
        </div>
        <div class="headerBottom-last"></div>
      </div>
    </div>
    <img class="ban" src="../../static/marketImage/ban.jpg" alt />

    <!-- marketClassify -->

    <marketClassify></marketClassify>

    <!-- 弹出框 -->
    <van-popup v-model="show" class="tangchukuang">
      <tanChuKuang @zifunpao="fufun"></tanChuKuang>
    </van-popup>

    <div class="youHui">
      <div class="youHui-top" @click="showBool">
        <span class="youHui-topText">优惠</span>
        <p>领红包满59减5，领红包满99减10，部红包满99减10，部</p>
        <div class="youHui-topRig">
          <h6>35种优惠</h6>
          <span class="arrowUp arrowuppa"></span>
        </div>
      </div>
      <div class="youHui-bottom">
        <span class="zuoYuan"></span>
        <span class="youYuan"></span>
        <p class="youHui-bottom-text">
          共
          <span>15</span>店铺红包
        </p>
        <span class="lingqu">领取</span>
      </div>
    </div>
    <van-popup v-model="bool" class="bottomTcK" position="bottom" :style="{ height: '50%' }">
      <h3>
        商家优惠
        <img class="cuohao" src="../../static/marketImage/cuohao.jpg" alt />
      </h3>
      <p class="bottomTcKtext bottomTcKtext-a">
        <span>红包</span> 进店领红包满59减5,满99减10
      </p>
      <p class="bottomTcKtext" v-for="(v,i) in arr" :key="i">
        <span>满减</span>
        {{v.yhtext}}
      </p>
    </van-popup>

    <!-- section -->
    <span class="section">
      <div class="baoKuan">
        <div class="baoKuan-top">
          <div class="baoKuan-topLeft">
            <img src="../../static/marketImage/section-title.jpg" alt />
            <h2>超级爆款</h2>
            <span>低至5折</span>
          </div>
          <a class="guangguang">进去逛逛 ></a>
        </div>
        <div class="baoKuan-bottom">
          <baoKuan @add="adds" @jian="minus"></baoKuan>
        </div>
      </div>

      <div class="cuXiao">
        <cuXiao></cuXiao>
      </div>

      <h6 class="shplist-title">猜你喜欢</h6>

      <div class="shopping-list">
        <shoppingList @shadd="shadd" @shjian="shjian"></shoppingList>
      </div>
      <div class="shoppingcart" v-if="numNuit<1" @click="shoppa">
        <img src="../../static/marketImage/shoppingcart.jpg" alt />
        <div class="shop-left">
          <p>华润万家</p>
          <span>购物篮</span>
        </div>
      </div>
      <span class="shopping-cart" v-else @click="shoppb">
        <span class="shopnum-nuit-a">{{numNuit}}</span>
        <img src="../../static/marketImage/shoppingcart.jpg" alt />
        <div class="shop-left-a">
          <div class="shop-top">
            <h6>￥{{total.toFixed(2)}}</h6>
            <del>￥{{totalBefore.toFixed(2)}}</del>
          </div>
          <p>差￥{{few.toFixed(2)}}起送</p>
        </div>
      </span>

      <van-popup v-model="showa" class="shoppinga" position="bottom" :style="{ height: '64%' }">
        <img class="weishopp" src="../../static/marketImage/weishop.jpg" alt />
      </van-popup>

      <van-popup v-model="showb" class="shoppingb" position="bottom" :style="{ height: '54%' }">
        <div class="imgzhao">
          <img class="shopb-title" src="../../static/marketImage/youshop.jpg" alt />
        </div>
        <div class="kongbaia"></div>
        <div class="shopCart-sh" v-for="(v,i) in sharr" :key="i">
          <img :src="v.shImage|filterss" alt />
          <div class="sh-right">
            <h6>{{v.shtitle}}</h6>
            <p>
              ￥{{v.shPrice}}
              <del>￥{{v.ShUnitPrice}}</del>
            </p>
            <span class="iconfont shjians" @click="jianfa()">&#xe627;</span>
            <span class="shnums">{{v.num}}</span>
            <span class="iconfont shadds" @click="jiafa()">&#xe60d;</span>
          </div>
        </div>
        <div class="kongbaier"></div>
        <div class="jiesuan">
          <p class="qingkong" @click="qingkong()">清空</p>
          <div class="jiesuancen">
            <p class="jiesuancen_a">
              <del>￥{{totalBefore.toFixed(2)}}</del>
              ￥{{total.toFixed(2)}}
            </p>
            <p class="jiesuancen_b">另需配费7元</p>
          </div>
          <a class="but" href="#">去结算({{numNuit}})</a>
        </div>
      </van-popup>
    </span>

    <FooterBar :keyid="1"></FooterBar>
  </span>
</template>

<script>
import FooterBar from "../components/footerBar";
import marketClassify from "../components/market/marketClassify";
import tanChuKuang from "../components/market/tanChuKuang";
import baoKuan from "../components/market/baokuan";
import cuXiao from "../components/market/cuxiao";
import shoppingList from "../components/market/shoppingList";
export default {
  components: {
    FooterBar,
    marketClassify,
    tanChuKuang,
    baoKuan,
    cuXiao,
    shoppingList
  },
  filters: {
    filterss(val) {
      return "../../static/" + val;
    }
  },
  data() {
    return {
      scrolltop: "",
      headerLeftText: "华润万家",
      show: false,
      bool: false,
      numNuit: 0,
      total: 0,
      totalBefore: 0,
      few: 20,
      cook: 20,
      showa: false,
      showb: false,
      sharr: [],
      nums: 0,
      objs: [],
      arr: [
        { yhtext: "足销满减活动*1009档上刊单品" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" },
        { yhtext: "促销" }
      ]
    };
  },
  created() {
    this.axios.get("/apis/market").then(ok => {
      this.objs = ok.data.datass;
    });
  },
  methods: {
    shoppa() {
      this.showa = true;
    },
    shoppb() {
      this.showb = true;
    },
    adds(item) {
      console.log(item);
      this.numNuit += 1;
      this.total += item.baokuanprice;
      this.totalBefore += item.baokuanunitPrice;
      if (this.few > 0) {
        this.few = this.few - item.baokuanprice;
        if (this.few <= 0) {
          this.few = 0;
        }
      }
      this.cook -= item.baokuanprice;
    },
    minus(item) {
      this.numNuit -= 1;
      this.total -= item.baokuanprice;
      this.totalBefore -= item.baokuanunitPrice;
      this.cook = this.cook + item.baokuanprice;

      if (this.cook >= 0) {
        this.few = this.cook;
      } else {
        this.few = 0;
      }
    },
    shadd(shitem) {
      // console.log(shitem)
      if (this.sharr.length === 0) {
        this.sharr.push(shitem);
      } else {
        let i;
        for (i = 0; i < this.sharr.length; i++) {
          if (shitem.shImage == this.sharr[i].shImage) {
            this.sharr[i].num = shitem.num;
            break;
          }
        }
        if (i == this.sharr.length) {
          this.sharr.push(shitem);
        }
      }
      // console.log(this.sharr);
      this.nums = shitem.num;

      this.numNuit += 1;
      this.total += shitem.shPrice;
      this.totalBefore += shitem.ShUnitPrice;
      if (this.few > 0) {
        this.few = this.few - shitem.shPrice;
        if (this.few <= 0) {
          this.few = 0;
        }
      }
      this.cook -= shitem.shPrice;
    },
    shjian(shitem) {
      console.log(shitem);
      let i;
      for (i = 0; i < this.sharr.length; i++) {
        if (this.sharr[i].num > 1) {
          this.sharr[i].num -= 1;
        } else {
          this.sharr.splice(i, 1);
        }
      }
      console.log(shitem);
      this.numNuit -= 1;
      this.total -= shitem.shPrice;
      this.totalBefore -= shitem.ShUnitPrice;
      this.cook = this.cook + shitem.shPrice;

      if (this.cook >= 0) {
        this.few = this.cook;
      } else {
        this.few = 0;
      }
    },
    jianfa() {
      for (let i = 0; i < this.sharr.length; i++) {
        this.sharr[i].num -= 1;
        this.numNuit -= 1;
        this.totalBefore -= this.sharr[i].ShUnitPrice;
        this.total -= this.sharr[i].shPrice;
        if (this.sharr[i].num <= 0) {
          this.sharr.splice(i, 1);
        }
        //this.sharr[i].shtitle
        // let name = this.sharr[i].shtitle;
        // console.log(this.sharr)
        // 循环一遍商品库
        // let shop;
        // for (let j = 0; j < this.objs.length; j++) {
        //   if (this.objs[j].shoppingListTitle === name) {
        //     this.objs[j].num = this.sharr[i].num;
        //     // shop = this.objs[j];
        //     break;
        //   }
        // }
        // shjian(shop);
      }
    },
    jiafa() {
      for (let i = 0; i < this.sharr.length; i++) {
        this.sharr[i].num += 1;
        this.numNuit += 1;
        this.totalBefore += this.sharr[i].ShUnitPrice;
        this.total += this.sharr[i].shPrice;
      }
    },
    qingkong(shitem) {
      this.sharr = "";
      this.numNuit = 0;
      this.total = 0;
      this.totalBefore = 0;
      this.few = 20;
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrolltop = scrollTop;
    },
    fun() {
      this.bool = !this.bool;
    },
    fufun(val) {
      this.headerLeftText = val;
    },
    showPopup() {
      this.show = true;
    },
    showBool() {
      this.bool = true;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.marketzong {
  background-color: #f7f7f7;
}
.headerDa {
  background: linear-gradient(to left, #008eff 0%, #18b2ff 100%);
}
.header {
  width: 100%;
  height: 0.64rem;
  background: linear-gradient(to left, #008eff 0%, #18b2ff 100%);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  top: 0;
  z-index: 2500;
}
.headerLeft {
  width: 1.4rem;
  height: 0.34rem;
  display: flex;
  background-color: #18a2e7;
  border-bottom-right-radius: 0.22rem;
  border-top-right-radius: 0.22rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.06rem;
}
.headerLeft img {
  width: 0.24rem;
  height: 0.24rem;
  margin-right: 0.06rem;
}
.headerLeft h1 {
  font-size: 0.18rem;
  color: white;
  font-weight: 600;
}
.arrowUp:after {
  display: block;
  content: "";
  width: 8px;
  height: 8px;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-left: 0.06rem;
  margin-bottom: 0.05rem;
  transition: all 1s;
}
.arrowUpa:after {
  display: block;
  content: "";
  width: 8px;
  height: 8px;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  transform: rotate(-225deg);
  transform-origin: 50% 75%;
  transition: all 1s;
  margin-left: 0.06rem;
  margin-bottom: 0.05rem;
}
.logo {
  width: 1rem;
  height: 0.34rem;
  margin-bottom: 0.06rem;
  margin-right: 0.1rem;
}
.header-ss {
  height: 0.32rem;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 0.16rem;
  margin-bottom: 0.06rem;
  margin-right: 0.1rem;
}
.bck-col {
  background-color: transparent;
}
.ss-a {
  width: 0.34rem;
  height: 0.32rem;
  border-bottom-left-radius: 0.16rem;
  border-top-left-radius: 0.16rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.ss-a img {
  width: 0.2rem;
  height: 0.2rem;
}
.header-ss input {
  width: 1.2rem;
  height: 0.32rem;
  font-size: 0.12rem;
}
.ss-b {
  width: 0.3rem;
  height: 0.32rem;
  border-bottom-right-radius: 0.16rem;
  border-top-right-radius: 0.16rem;
  background-color: white;
}
.header-bto {
  background: linear-gradient(to left, #008eff 0%, #18b2ff 100%);
}
.headerBottom {
  width: 100%;
  padding-top: 0.64rem;
  background: linear-gradient(to left, #008eff 0%, #18b2ff 100%);
}
.headerBottom-top {
  display: flex;
  margin-top: 0.04rem;
  padding-bottom: 0.14rem;
}
.headerBottom-top p {
  font-size: 0.12rem;
  color: white;
  display: flex;
  align-items: center;
  margin-left: 0.1rem;
}
.headerBottom-top p img {
  width: 0.12rem;
  height: 0.12rem;
  margin-right: 0.04rem;
}
.headerBottom-cen {
  width: 90%;
  display: block;
  display: flex;
  margin: 0 auto;
  margin-bottom: 0.1rem;
}
.headerBottom-btt {
  font-size: 0.12rem;
  display: flex;
  margin-left: 0.1rem;
  color: white;
}
.headerBottom-btt span {
  background-color: #1896de;
  border-radius: 0.1rem;
  padding: 0.01rem 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.02rem;
}
.headerBottom-last {
  width: 100%;
  height: 0.4rem;
  background-image: url("../../static/marketImage/logobeijing.jpg");
  background-size: 100% 0.4rem;
  background-repeat: no-repeat;
  background-color: white;
}
.ban {
  width: 90%;
  margin: 0 auto 0.2rem;
  height: auto;
}
.tanChuKuang {
  width: 90%;
  height: 2.6rem;
  background-color: white;
  position: fixed;
  top: 0.64rem;
  left: 5%;
  border-radius: 0.06rem;
  z-index: 2200;
}
img {
  display: block;
}
.tangchukuang {
  width: 90%;
  height: 2.6rem;
  background-color: white;
  position: fixed;
  top: 2rem;
  left: 50%;
  border-radius: 0.06rem;
  z-index: 100;
}
.youHui {
  width: 84%;
  height: 0.9rem;
  background-color: #ff5d63;
  margin: 0 auto;
  border-radius: 0.1rem;
  margin-top: 0.2rem;
  padding: 0.1rem 0.16rem;
}
.youHui-top {
  display: flex;
  align-items: center;
  font-size: 0.14rem;
}
.youHui-top .youHui-topText {
  font-size: 0.14rem;
  display: block;
  width: 0.5rem;
  height: 0.2rem;
  background-color: white;
  text-align: center;
  line-height: 0.2rem;
  border-radius: 0.2rem;
  color: #ff5d63;
}
.youHui-top p {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 52%;
  font-size: 0.14rem;
  color: white;
  overflow: hidden;
  margin-left: 0.12rem;
}
.youHui-topRig {
  display: flex;
  margin-left: 0.16rem;
}
.youHui-top h6 {
  font-size: 0.14rem;
  color: white;
  font-weight: 100;
}
.arrowuppa {
  margin-top: 0.04rem;
}

.youHui-bottom {
  width: 100%;
  height: 0.5rem;
  background-color: white;
  margin-top: 0.18rem;
  border-radius: 0.06rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.zuoYuan {
  width: 0.06rem;
  height: 0.12rem;
  background-color: #ff5d63;
  display: block;
  border-top-right-radius: 0.06rem;
  border-bottom-right-radius: 0.06rem;
  position: absolute;
  top: 0.2rem;
  left: 0;
}
.youYuan {
  width: 0.06rem;
  height: 0.12rem;
  background-color: #ff5d63;
  display: block;
  border-top-left-radius: 0.06rem;
  border-bottom-left-radius: 0.06rem;
  position: absolute;
  top: 0.2rem;
  right: 0;
}
.youHui-bottom-text {
  font-size: 0.14rem;
  color: #ff5d63;
  margin-left: 0.2rem;
}
.youHui-bottom-text span {
  font-weight: 400;
  font-size: 0.18rem;
  margin-right: 0.1rem;
}

.lingqu {
  font-size: 0.14rem;
  display: block;
  width: 0.6rem;
  height: 0.26rem;
  background-color: #ff5d63;
  text-align: center;
  line-height: 0.26rem;
  border-radius: 0.2rem;
  color: white;
  margin-right: 0.2rem;
}
.bottomTcK {
  top: 50%;
  width: 100%;
  border-top-right-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
}
.bottomTcK h3 {
  font-size: 0.18rem;
  margin: 0.2rem 0.2rem 0.1rem;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 0.6rem;
  bottom: 40%;
  line-height: 0.6rem;
  display: flex;
  align-items: center;
}
.bottomTcKtext {
  width: 86%;
  overflow: hidden;
  font-size: 0.14rem;
  display: flex;
  color: black;
  white-space: nowrap;
  align-items: center;
  margin: 0.14rem 0;
}
.bottomTcKtext span {
  font-size: 0.14rem;
  display: block;
  width: 0.5rem;
  height: 0.2rem;
  background-color: white;
  text-align: center;
  line-height: 0.2rem;
  border-radius: 0.2rem;
  color: #ff5d63;
  border: 1px solid #dadad8;
  margin: 0 0.2rem;
}
.bottomTcKtext-a {
  margin-top: 0.6rem;
}
/* section */
.section {
  padding-bottom: 0.9rem;
}
.baoKuan {
  width: 90%;
  margin: 0 auto;
  border-radius: 0.2rem;
  background-color: white;
  margin-top: 0.2rem;
}
.baoKuan-top {
  width: 100%;
  height: 0.6rem;
  border-bottom: 1px solid #e7e3e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.baoKuan-topLeft {
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
}
.baoKuan-topLeft img {
  width: 0.4rem;
  height: 0.4rem;
}
.baoKuan-topLeft h2 {
  font-size: 0.2rem;
  color: #ff4152;
  margin: 0 0.1rem;
}
.baoKuan-topLeft span {
  font-size: 0.14rem;
  color: #7b7d7b;
}
.guangguang {
  font-size: 0.14rem;
  color: #7b7d7b;
  width: 0.8rem;
  height: 0.26rem;
  border: 1px solid #7b7d7b;
  border-radius: 0.13rem;
  line-height: 0.26rem;
  text-align: center;
  margin-right: 0.2rem;
}
.cuXiao {
  width: 85%;
  padding: 0.1rem;
  margin: 0.2rem auto 0.3rem;
  background-color: white;
  border-radius: 0.2rem;
}
.shplist-title {
  font-size: 0.22rem;
  width: 90%;
  margin: 0 auto 0.2rem;
}

.shoppingcart {
  width: 1.4rem;
  height: 0.4rem;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.26rem;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  right: 0.2rem;
  top: 75%;
}
.shoppingcart > img {
  width: 0.4rem;
  height: 0.3rem;
}
.shop-left p {
  font-size: 0.14rem;
  color: black;
  font-weight: 400;
}
.shop-left span {
  display: block;
  font-size: 0.12rem;
  color: #959595;
}
.shopnum-nuit-a {
  text-align: center;
  line-height: 0.16rem;
  width: 0.16rem;
  height: 0.16rem;
  font-size: 0.1rem;
  color: white;
  background-color: #f15906;
  position: absolute;
  border-radius: 50%;
  top: 0.02rem;
  left: 0.32rem;
}
.shopping-cart {
  width: 1.4rem;
  height: 0.4rem;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.26rem;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  right: 0.2rem;
  top: 75%;
}
.shopping-cart > img {
  width: 0.4rem;
  height: 0.3rem;
}
.shop-top {
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop-top > h6 {
  font-size: 0.14rem;
  color: #ff5b50;
}
.shop-top > del {
  font-size: 0.1rem;
  color: #969696;
}
.shop-left-a p {
  font-size: 0.1rem;
  color: black;
}
.cuohao {
  display: block;
  width: 0.16rem;
  height: 0.16rem;
  margin-left: 66%;
}
.weishopp {
  width: 100%;
  height: 100%;
}
.shopb-title {
  width: 100%;
  position: fixed;
  top: 45%;
  z-index: 3000;
}
.kongbaia {
  width: 100%;
  height: 0.6rem;
}
.shopCart-sh {
  width: 90%;
  height: 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
}
.shopCart-sh > img {
  width: 0.8rem;
  height: 0.8rem;
}
.sh-right {
  width: 68%;
  margin-left: 7%;
  height: 65%;
  position: relative;
}
.sh-right > h6 {
  font-size: 0.16rem;
  font-weight: 500;
  color: black;
}
.sh-right > p {
  font-size: 0.16rem;
  color: #fb474a;
  margin-top: 0.21rem;
}
.sh-right > p > del {
  font-size: 0.12rem;
  color: #999999;
}
.shjians {
  font-size: 0.22rem;
  color: #11a1f8;
  position: absolute;
  top: 0.4rem;
  right: 0.8rem;
}
.shadds {
  font-size: 0.2rem;
  color: #11a1f8;
  position: absolute;
  top: 0.42rem;
  right: 0.1rem;
}
.shnums {
  font-size: 0.2rem;
  color: black;
  position: absolute;
  top: 0.4rem;
  right: 0.5rem;
}
.shoppingb {
  background-color: white;
}
.jiesuan {
  width: 100%;
  height: 0.5rem;
  border-top: 1px solid #f0f2f1;
  box-shadow: 0 10px 15px #f0f2f1;
  display: flex;
  align-items: center;
  position: fixed;
  top: 92.2%;
  background-color: white;
}
.qingkong {
  font-size: 0.16rem;
  color: #828483;
  margin-left: 0.1rem;
}
.jiesuancen {
  width: 50%;
  margin-left: 0.25rem;
}
.jiesuancen_a {
  font-size: 0.2rem;
  color: #f65948;
  text-align: right;
}
.jiesuancen_a > del {
  font-size: 0.16rem;
  color: #828483;
}
.jiesuancen_b {
  font-size: 0.12rem;
  color: #828483;
  text-align: right;
}
.but {
  display: block;
  width: 30%;
  height: 0.5rem;
  font-size: 0.18rem;
  color: white;
  background-color: #01df68;
  text-align: center;
  line-height: 0.54rem;
  margin-left: 0.08rem;
}
.imgzhao {
  widows: 100%;
  background-color: white;
  z-index: 3000;
}
.kongbaier {
  width: 100%;
  height: 0.6rem;
}
</style>
