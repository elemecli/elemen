<template>
  <div class="first">
    <div class="members">
      <p>开通超级会员</p>
      <p>
        每月领
        <span class="redmoney">¥20</span>专属红包
      </p>
      <p class="thirdp">再享4大会员专属特权</p>
      <!-- <button>1111111111</button> -->
      <button>
        Y10
        <span class="delete">Y15</span>开通会员
      </button>
    </div>
    <!-- 联合会员 -->
    <div class="under_box">
      <div class="lhmember">
        <div>
          <span class="only_tequan">限时</span>
          <b>联合会员专区</b>
        </div>
        <div class="dijia">低至五折</div>
      </div>
      <div>
        <img src="../../../static/imgs/member.jpg" class="lhimg" />
      </div>
    </div>
    <!-- 免费红包 -->
    <div class="under_box">
      <div>
        <div>
          <span class="only_tequan">特权1</span>
          <b>每月免费领4个会员红包</b>
        </div>
      </div>
      <div class="wumenkan">
        <div class="freehongbao" v-for="(v,i) in arr_tequan1" :key="i">
          <div>
            <span class="prices">¥{{v.price}}</span>
          </div>
          <div>{{v.text}}</div>
        </div>
      </div>
    </div>
    <!-- 会员红包 -->
    <div class="under_box">
      <div>
        <div>
          <span class="only_tequan">特权2</span>
          <b>会员红包可升级商家大红包</b>
        </div>
      </div>
      <!-- ----------轮播---------= -->

      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="tequan2">
            <div v-for="(v,i) in arr" :key="i" class="memberhongbao">
              <img :src="v.imgurl" alt />
              <p>{{v.title}}</p>
              <p>
                <span class="prices">¥{{v.link}}</span>
                {{v.text}}
              </p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="tequan2">
            <div v-for="(v,i) in arr" :key="i" class="memberhongbao">
              <img :src="v.imgurl" alt />
              <p>{{v.title}}</p>
              <p>
                <span class="prices">¥{{v.link}}</span>
                {{v.text}}
              </p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="tequan2">
            <div v-for="(v,i) in arr" :key="i" class="memberhongbao">
              <img :src="v.imgurl" alt />
              <p>{{v.title}}</p>
              <p>
                <span class="prices">¥{{v.link}}</span>
                {{v.text}}
              </p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="tequan2">
            <div v-for="(v,i) in arr" :key="i" class="memberhongbao">
              <img :src="v.imgurl" alt />
              <p>{{v.title}}</p>
              <p>
                <span class="prices">¥{{v.link}}</span>
                {{v.text}}
              </p>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 下单奖励 -->
    <div class="under_box">
      <div>
        <div>
          <span class="only_tequan">特权3</span>
          <b>下单返奖励金，再兑专属红包</b>
          <p class="tequan3_tex">每下一笔实付满Y20订单，获1个奖励金</p>
        </div>
      </div>
      <div class="tequan3">
        <div class="duihuan" v-for="(v,i) in arr_tequan3" :key="i">
          <div>
            <img src="../../../static/imgs/hg.png" alt />
            两个奖励金兑换
          </div>
          <div class="duihuan2">
            <span class="prices">¥{{v.price}}</span>
            <span>{{v.text}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- -------------------------- -->

    <div class="under_box">
      <div>
        <span class="only_tequan">特权4</span>
        <b>会员红包可升级商家大红包</b>
      </div>
      <!-- ----------------------------------------轮播============== -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="tequan4" >
            <div v-for="(v,i) in arr_tequan4" :key="i" class="member_tequan4">
              <img :src="v.imgurl" />
              <p>{{v.title}}</p>
              <p class="prices">
                ¥{{v.link}}
                <span class="oprices">{{v.olink}}</span>
              </p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="tequan4">
            <div v-for="(v,i) in arr_tequan4" :key="i" class="member_tequan4">
              <img :src="v.imgurl" />
              <p>{{v.title}}</p>
              <p class="prices">
                ¥{{v.link}}
                <span class="oprices">{{v.olink}}</span>
              </p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="tequan4">
            <div v-for="(v,i) in arr_tequan4" :key="i" class="member_tequan4">
              <img :src="v.imgurl" />
              <p>{{v.title}}</p>
              <p class="prices">
                ¥{{v.link}}
                <span class="oprices">{{v.olink}}</span>
              </p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="tequan4">
            <div v-for="(v,i) in arr_tequan4" :key="i" class="member_tequan4">
              <img :src="v.imgurl" />
              <p>{{v.title}}</p>
              <p class="prices">
                ¥{{v.link}}
                <span class="oprices">{{v.olink}}</span>
              </p>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- ----------------------------------- -->
    <div class="under_box">
      <div>
        <div>
          <span class="only_tequan">特权5</span>
          <b>会员专属客服</b>
        </div>
      </div>
      <div class="tequan5">
        <p>
          <img src="../../../static/imgs/member2.jpg" alt />
        </p>
        <p>超级会员享有24小时客服专线，配有专属客服，竭诚提供更专业，更舒适的服务</p>
      </div>
    </div>
    <!-- ------------------------------- -->
    <div class="bottom_btn">
      <button>
        <a href="#">Y10
        <span class="delete">Y15</span>开通会员</a>
        
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          title: "人人居",
          imgurl: "../../../static/imgs/renrendian.png",
          link: "7",
          text: "无门槛"
        },
        {
          title: "米多面多",
          imgurl: "../../../static/imgs/mimian.png",
          link: "6",
          text: "无门槛"
        },
        {
          title: "小六汤包",
          imgurl: "../../../static/imgs/xiaoliu.png",
          link: "8",
          text: "无门槛"
        },
        {
          title: "渝乡川菜馆",
          imgurl: "../../../static/imgs/feichang.png",
          link: "8",
          text: "无门槛"
        },
        {
          title: "湖南土菜馆",
          imgurl: "../../../static/imgs/hunan.png",
          link: "9",
          text: "无门槛"
        },
        {
          title: "嘻范剁椒鱼",
          imgurl: "../../../static/imgs/yu.png",
          link: "7",
          text: "无门槛"
        }
      ],
      arr_tequan4: [
        {
          title: "葱油拌面+椰汁+鲁西牛肉",
          imgurl: "../../../static/imgs/member1.jpg",
          link: "14.5",
          olink: "¥22"
        },
        {
          title: "葱油拌面+椰汁+鲁西牛肉",
          imgurl: "../../../static/imgs/jiding.png",
          link: "14.5",
          olink: "¥22"
        },
        {
          title: "葱油拌面+椰汁+鲁西牛肉",
          imgurl: "../../../static/imgs/zhou.png",
          link: "14.5",
          olink: "¥22"
        },
        {
          title: "葱油拌面+椰汁+鲁西牛肉",
          imgurl: "../../../static/imgs/zhou2.png",
          link: "14.5",
          olink: "¥22"
        }
      ],
      arr_tequan1: [
        { price: "5", text: "无门槛" },
        { price: "5", text: "无门槛" },
        { price: "5", text: "无门槛" },
        { price: "5", text: "无门槛" }
      ],
      arr_tequan3: [
        { price: "4", text: "商家红包" },
        { price: "5", text: "会员红包" }
      ]
    };
  }
};
</script>
<style  scoped>
.dijia{
  font-size: 0.12rem;
  color: #9c9a9c;
}
.first {
  background: #f7f7f7;
}
.members {
  width: 100%;
  font-size: 0.16rem;
  background: #181010;
  text-align: center;
  height: 1.85rem;
  color: #f7dfb5;
  padding-top: 0.2rem;
}
.members button {
  color: black;
}
.delete {
  text-decoration: line-through;
  color: gray;
}
.members button {
  border: none;
  background: #f7dfb5;
  width: 2.2rem;
  height: 0.4rem;
  border-radius: 0.3rem;
  text-align: center;
  font-size: 0.2rem;
}
.members p {
  margin: 0.1rem;
}
.redmoney {
  color: red;
}
.thirdp {
  font-size: 0.15rem;
}

/* 联合会员 */
.under_box {
  width: 90%;
  background: white;
  margin: 0.15rem auto;
  font-size: 0.16rem;
  padding: 0.1rem;
  border-radius: 0.2rem;
}
.lhmember {
  display: flex;
  justify-content: space-between;
}
.lhimg {
  width: 100%;
  margin-top: 0.2rem;
}
.freehongbao {
  text-align: center;
  width: 0.8rem;
  /* height: 1.3rem; */
  background: #fff3de;
  line-height: 0.4rem;
  /* border-radius: 0.2rem; */
}
.wumenkan {
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
}
.memberhongbao {
  width: 0.8rem;
  /* height: 0.8rem; */
  margin: 0.06rem;
  background: #fffbef;
  padding: 0.1rem;
}
.memberhongbao img {
  width: 100%;
}
.tequan2 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-size: 0.12rem;
}
/* ------------------------------- */
.tequan3 {
  display: flex;
  justify-content: space-around;
  margin: 0.1rem auto;
  text-align: center;
}
.tequan3_tex {
  font-size: 0.08rem;
  color: #9c9a9c;
}
.duihuan {
  width: 1.4rem;
  border-radius: 0.1rem;
  border: 1px solid gold;
  color: #c69263;
  font-size: 0.13rem;
}

.duihuan img {
  width: 13%;
  /* line-height: 0.3rem; */
  margin-top: 0.1rem;
}
.duihuan2 {
  background: #fff3de;
  padding: 0.1rem;
  margin: 0.1rem;
}
.tequan4 {
  display: flex;
  flex-wrap: wrap;
  padding: 0.07rem;
  /* text-align: center; */
}
.member_tequan4 img {
  width: 1.5rem;
}
.member_tequan4 {
  width: 1.5rem;
  margin: 0.05rem;
}
.tequan5 img {
  width: 60%;
}
.tequan5 {
  padding: 0.2rem;
  text-align: center;
  font-size: 0.11rem;
}
.only_tequan {
  background: #f7d79c;
  padding: 0.02rem;
  border-radius: 0.08rem;
  font-size: 0.14rem;
  color: #634529;
  font-weight: 600;
}
.bottom_btn button {
  width: 3.3rem;
  height: 0.5rem;
  border-radius: 0.3rem;
  border: none;
  font-size: 0.2rem;
  background: #f7d79c;
}
.bottom_btn {
  text-align: center;
  /* line-height: 0.5rem; */
}
.bottom_btn a{
color: #181010;
}

.prices {
  color: red;
  font-size: 0.25rem;
}
.oprices {
  color: gray;
  font-size: 0.12rem;
  text-decoration: line-through;
}
</style>