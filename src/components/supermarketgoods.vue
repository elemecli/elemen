<template>
  <div class="box">
    <!-- banner -->
    
    <div class="banner">
      <van-swipe @change="onChange" :autoplay="3000">
        <van-swipe-item>
          <img v-if="arr[0]" class="bannerimg" :src="arr[0].imgbanner|filterimg" />
        </van-swipe-item>
        <van-swipe-item>
          <img v-if="arr[0]" class="bannerimg" :src="arr[0].imgbanner2|filterimg" />
        </van-swipe-item>
        <div class="custom-indicator custom1" slot="indicator">{{current+1}}/2</div>
      </van-swipe>
      <img src="../../static/img/Supimg/logo.jpg" class="watermask" />
      <div class="headerplaceholder">
        <img src="../../static/img/Supimg/cuowu.png" />
        <img src="../../static/img/Supimg/fenxiang.png" />
      </div>
    </div>
    <!-- content -->
    <div class="content">
        
      <div class="content1">
        <span class="cont1" v-if="arr[0]">{{arr[0].texta}}</span>
     
      <p class="cont2" v-if="arr[0]" id="boxFixed" :class="{'is_fixed' : isFixed}">
            {{arr[0].num1}}
          <span class="cont3" v-if="arr[0]">{{arr[0].num2}}</span>    
          <button @click="fun()">加入购物车</button>
         </p>
      </div>
      <div class="content2">
        <div>
          <span class="cont4">活动</span>
        </div>
        <div>
          <span class="cont5">折扣</span>
          <span class="cont6">限一份优惠</span>
          <p>此优惠商品与店铺满减、下单满赠可同时享受</p>
        </div>
      </div>
      <div class="content3">
        <span class="cont4">红包</span>
        <div>共￥15店铺 领取</div>                       
       <van-cell is-link @click="showPopup">
          <div class="hongbao">领取红包</div>
        </van-cell>
       <van-popup v-model="show" position="bottom" :style="{ height: '70%' }" closeable round>
        
         <HongBao></HongBao>
       </van-popup> 
      </div>
    </div>
    <!-- goodscomment -->
    <div class="goodscomment">
      <b>商品评价</b>
      <span>></span>
    </div>

    <div class="goodscomment">
      <b>商品信息</b>
    </div>
    <div class="container">
      <!-- pricecontent -->
      <div class="pricetitle">
        <p>价格说明</p>
      </div>
      <div class="contenttitle">1.未划线价:未划线价是当前商品或服务在本平台上的</div>
      <div class="pricecontent">
        实时销售价(不含包装费、运输费等)，是您最终决定是否购买商品或服务的依据。具体成交价格根据商品或服务参加的活动等情况发生变化，最终以订单结算页面呈现的价格为准。
        <div>2.划线价:划线价为参考价，并非原价或线下实体门店的销售价。该划线价可能是商品或服务的网络零售指导价、商家提供的正品零售价或该商品/服务在本平台上曾经展示过的销售价等。由于地区、时间的差异性和市场行情波动，零售指导价、销售价等可能会与您购物时展示的价格不一致，划线价仅供您参考。</div>*此说明仅当出现价格比较时有效，若商家单独对划线价格进行说明的，以商家的表述为准。
      </div>
      <div class="morea" @click="more()">
        查看更多
        <img class="moreaimg" src="../../static/img/Supimg/morea.png" alt />
      </div>
    </div>
    <div class="br"></div>
    <div class="goodscomment2">
      <b>商品详情</b>
    </div>

    <!-- richText -->

    <div class="richText">
      <img  :src="arr[0].xqone|filterimg"  v-if="arr[0]"/>
      <img :src="arr[0].xqtwo|filterimg"  v-if="arr[0]"/>
      <img :src="arr[0].xqthree|filterimg" v-if="arr[0]"/>
      <img :src="arr[0].xqfour|filterimg"  v-if="arr[0]"/>
      <img :src="arr[0].xqfive|filterimg"  v-if="arr[0]"/>
      <img :src="arr[0].xqsix|filterimg"  v-if="arr[0]" />
    </div>
    <div class="br"></div>
    <div class="goodscomment2">
      <b>进店的人都买了</b>
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="recomemend" v-for="(v,i) in arr" :key="i">
        <img class="mingoods" :src="v.minimgurl|filterimg" />
        <p class="recomeName">{{v.recomename}}</p>
        <p class="recomeSale">{{v.recomesale}}</p>
        <div class="recomPrice">
          <p>
            <b>
              ￥
              <span class="digit">{{v.diGit}}</span>
            </b>
            <span class="origin">{{v.origin}}</span>
          </p>
        <div class="jisuan">
          <img @click="lose()" class="lose" src="../../static/img/Supimg/lose.png" alt="">
          <span class="start">{{v.num}}</span>
          <img class="add" @click="add(i)" :src="v.addurl|filterimg" />
        </div>
        </div>
      </div>
    </div>
    <p class="nomore">没有更多了</p>
 <div class="bottombar">
    <div class="shoptitle">
      还差
      <span>17.7</span>
      "元起送(按优惠后金额计算)"
      <span>去凑单</span>
    </div>
   
    <div class="bottombar1">
          <div class="shoplog">
            <img src="../../static/img/Supimg/shopcar.png" alt="">
            <img src="../../static/img/Supimg/shopcar2.png" alt="">
          </div>
          <div class="carfooter">
            <div>
            <p class="cartempty">未选购商品</p>
            <p class="cardelivery">另需配送费4.5元</p>
            </div>
            <div class="submit">
            差￥20起送
            </div>
          </div>
     
    </div>
  </div>
</div>
</template>

<script>
import HongBao from './hongbao'
export default {
  components: {
   HongBao
  },
  data() {
    return {
      arr: [       
      ],
      current: 0,
      show: false,
      isFixed: false,
      offsetTop:400,

    }
  },
  methods: {
    fun(){
     $(".shoplog img:nth-of-type(1)").css({
       display:"none"
     });
     $(".shoplog img:nth-of-type(2)").css({
       display:"block"
     })
    },
    add(i){
       $(".shoplog img:nth-of-type(1)").css({
       display:"none"
     });
     $(".shoplog img:nth-of-type(2)").css({
       display:"block"
     })
     $(".lose").eq(i).css({
       display:"block"
     })
     $(".start").eq(i).css({
       display:"block"
     })
    },
    lose(){

    },
    onChange(index) {
      this.current = index;
    },
    more() {
      $(".pricecontent").css({
        display: "block"
      });
      $(".morea").css({
        display: "none"
      });
    },
    showPopup() {
      this.show = true;
    },
    
  initHeight(){
                // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
               
                     this.isFixed = scrollTop > this.offsetTop ? true : false;
           
                
            },
  },

   filters: {
    filterimg(val) {
      return "../../static/img/Supimg/" + val;
    }
  },
 
   created() {
    //   var parms = this.$router.query.num1
    this.axios({
      url: "/user",
      method: "get"
    }).then(ok => {
      this.arr = ok.data;
     console.log(this.arr)
    });
  },
   mounted() {
            window.addEventListener('scroll', this.initHeight);
            this.$nextTick(() => {
                //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
                this.offsetTop = document.querySelector('#boxFixed').offsetTop;
            })
        },

  destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        },
};

</script>

<style  scoped>
/* banner */
.banner {
  width: 100%;
  font-size: 0px;
}
.bannerimg {
  width: 100%;
  /* height:3.75rem; */
  position: relative;
}
.watermask {
  width: 1.3rem;
  position: absolute;
  top: 53%;
  left: 63%;
}
.custom1 {
  font-size: 12px;
  color: #ccc;
  float: right;
  background-color: rgb(0, 0, 0, 0.4);
  width: 0.4rem;
  height: 0.2rem;
  text-align: center;
  border-radius: 0.2rem;
  line-height: 0.2rem;
  margin-right: 4%;
}
.headerplaceholder {
  width: 100%;
  /* height:.4rem; */
  font-size: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-top: .25rem; */
  position: absolute;
  top: 15px;
}
.headerplaceholder img {
  width: 0.3rem;
  /* height:.3rem; */
}
.headerplaceholder img:nth-of-type(1) {
  margin-left: 14px;
}
.headerplaceholder img:nth-of-type(2) {
  margin-right: 14px;
}
/* content */
.content {
  width: 100%;
  /* height:1.8rem; */
  background-color: white;
  font-size: 0px;
}

/* first div */
.content1 {
  width: 100%;
  height: 0.6rem;
  border-bottom: 1px solid #efefef;
  line-height: 0.2rem;
}
.cont1 {
  font-size: 0.18rem;
  font-weight: 600;
}
.cont2 {
  font-size: 0.2rem;
  color: red;
  font-weight: 600;
  width: 100%;
  background-color: white;
  height: .43rem;
  /* line-height: .43rem; */
  display: flex;
  align-items: center;
}

 .is_fixed{
    position: fixed;
    top: 0;
    z-index: 999;
  }
.cont3 {
  font-size: 14px;
  color: #9c9a9c;
  font-weight: 600;
  text-decoration: line-through;
}
button {
  background-color: #2196ff;
  border: none;
  color: white;
  border-radius: 0.2rem;
  text-align: center;
  margin-left: 45%;
  font-size: 12px;
  width: 0.8rem;
  height: .24rem;
}

/* second div */
.content2 {
  width: 100%;
  height: 0.6rem;
  border-bottom: 1px solid #efefef;
  display: flex;
  align-items: center;
}

.content2 div:nth-of-type(2) {
  margin-left: 6px;
}
.cont4 {
  width: 10%;
  font-size: 14px;
  color: #9c9a9c;
  margin-left: 10px;
}
.cont5 {
  font-size: 8px;
  margin-left: 3px;
  color: #eb6551;
  border: 1px solid #f9d0ca;
  border-radius: 2px;
}
.cont6 {
  font-size: 12px;
  margin-left: 3px;
}
.content2 p {
  font-size: 8px;
  color: #9c9a9c;
  margin-left: 3px;
}
/* 
third div */
.content3 {
  width: 100%;
  height: 0.6rem;
  border-bottom: 6px solid #efefef;
  line-height: 0.2rem;
  display: flex;
  align-items: center;
}
.hongbao {
  margin-left: 6px;
  width: 1.2rem;
  height: 0.25rem;
  color: white;
  background-color: #ff7984;
  font-size: 14px;
  text-align: center;
  line-height: 0.25rem;
}
.van-popup {
  background-color: rgb(245, 245, 245);
}

/* goodscomment */
.goodscomment {
  width: 100%;
  height: 0.6rem;
  border-bottom: 6px solid #efefef;
  font-size: 0px;
  line-height: 0.6rem;
}
.goodscomment b {
  font-size: 0.19rem;
  margin-left: 10px;
}
.goodscomment span {
  float: right;
  font-size: 0.19rem;
  color: #6b696b;
  margin-right: 8px;
}
/* container */
.container {
  width: 80%;
  margin: 0 auto;
  padding-top: 0.1rem;
  line-height: 0.2rem;
  padding-bottom: 0.1rem;
}
.pricetitle p {
  font-size: 12px;
}
.pricecontent {
  font-size: 12px;
  color: #9c9a9c;
  display: none;
}
.contenttitle {
  font-size: 12px;
  color: #9c9a9c;
}
.br {
  border-bottom: 6px solid #efefef;
}
.morea {
  text-align: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
.moreaimg {
  width: 0.12rem;
  height: 0.12rem;
}
.goodscomment2 {
  width: 100%;
  height: 0.6rem;
  font-size: 0px;
  line-height: 0.6rem;
}
.goodscomment2 b {
  font-size: 0.19rem;
  margin-left: 10px;
}

/* richText */
.richText {
  width: 100%;
}
.richText img{
    width:100%;
}
/* footer */
.footer {
  width: 100%;
  font-size: 0px;
  display: flex;
  flex-wrap: wrap;
}
.recomemend {
  width: 50%;
  border-right: 3px solid #f7f3f7;
  border-bottom: 3px solid #f7f3f7;
  padding-bottom: 0.13rem;
  box-sizing: border-box;
}
.mingoods {
  width: 100%;
}
.recomeName {
  width: 1.63rem;
  font-size: 0.15rem;
  font-weight: 600;
  color: #333;
  margin-left: 8px;
  margin-top: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recomeSale {
  font-size: 12px;
  color: #666;
  margin-left: 8px;
}
.recomPrice {
  font-size: 0px;
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
  margin-top: 6px;
}
.recomPrice p {
  font-size: 0px;
}
.recomPrice b {
  font-size: 10px;
  font-weight: 600;
  color: #ff5339;
}
.digit {
  font-size: 0.16rem;
}
.origin {
  font-size: 10px;
  color: #666;
  text-decoration: line-through;
  margin-left: 3px;
}
.jisuan{
  display: flex;
}
.add {
  width: 0.22rem;
  height: 0.22rem;
  margin-right: 10px;
}
.lose {
  width: 0.22rem;
  height: 0.22rem;
  display: none;
}
.start{
  font-size: 13px;
  color: #333;
  display: none;
}
.nomore {
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 6%;
  padding-bottom: 6%;
}


/* shopcar */
.bottombar{
  font-size: 0px;
  width: 100%;
  height: .8rem;
  position: fixed;
  bottom: 0px;
  background-color: rgb(61,61,63);
}
.shoptitle{
  width: 100%;
  font-size: 12px;
  color: #666;
  background-color: rgba(255,250,218,.98);
  text-align: center;
}
.shoptitle span{
  color:#FF5339;
}
.shoplog{
  position: relative;
  height: .70rem;
  width: .74rem;
}
.shoplog img{
  width: .74rem;
  height: .70rem;
}
.shoplog img:nth-of-type(1){
  position:absolute;
  top: 0px;
}
.shoplog img:nth-of-type(2){
  display: none;
  position:absolute;
}
.bottombar1{
  display: flex;
  align-items: center;
}
.carfooter{
  width: 100%;
  height: .74rem;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
}

.cartempty{
  font-size: 14px;
  color: #999;
  margin-top: .14rem;
}
.cardelivery{
  font-size: 10px;
  color: #999;
}
.submit{
  width: 1rem;
  height: 74rem;
  color: white;
  background-color: rgb(105,105,105);
  font-size: .16rem;
  text-align: center;
  line-height: .6rem;

}
</style>