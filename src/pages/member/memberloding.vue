<template>
  <div class="first">
    <div class="black">
      <div>
        <img src="../../../static/imgs/close1.png" />超级会员
      </div>
      <div class="black_2">
        <div>
          <img src="../../../static/imgs/hg.png" alt />
        </div>
        <div>
          <p>我是用户名</p>
          <p>我是会员期限</p>
        </div>
        <div>
          <button class="xufei">立即续费</button>
        </div>
      </div>
    </div>
    <!-- ---------------------------- -->
    <div class="goldon">
      <div class="gold">
        <div class="gold_1">
          <div>
            <p class="canhongbao">可领红包(个)</p>
            <p class="sizes">4</p>
            <p>每月领4个红包</p>
            <button class="gold_btn">领取红包</button>
          </div>
          <div>
            <p class="canhongbao">可用奖励金(个)</p>
            <p class="sizes">0</p>
            <p>可兑无门槛红包</p>
            <button class="gold_btn">兑换红包</button>
          </div>
        </div>
        <div class="tongzhi">
          <van-notice-bar text="会员每月可免费领取4个专属红包，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈" left-icon="volume-o" />
        </div>
      </div>
    </div>

    <!-- ------------------ -->
    <div class="renwu">
      <div>
        <p>领取限时任务</p>
        <p>
          最高赚
          <span class="jianglijin">6元奖励金</span>>
        </p>
      </div>
      <div>
        <img src="../../../static/imgs/hand.jpg" alt />
      </div>
    </div>
    <!-- <div class="renwu"></div> -->
    <div class="byhongbao">
      <div class="byhongbao_1">
        <b>低价购买更多红包</b>
        <div class="more">更多></div>
      </div>
      <div class="byhongbao_2">
        <div class="byhongbao_bg"></div>
        <div>
          <b>会员专享无门槛红包</b>
          <p class="wuzhe">5折疯抢</p>
          <p class="price">
            ¥5
            <span>¥10</span>
          </p>
        </div>
        <div>
          <button class="qiang">立即抢</button>
        </div>
      </div>
      <div class="byhongbao_2">
        <div class="byhongbao_bg"></div>
        <div>
          <b>会员专享无门槛红包</b>
          <p class="wuzhe">5折疯抢</p>
          <p class="price">
            ¥5
            <span>¥10</span>
          </p>
        </div>
        <div>
          <button class="qiang">立即抢</button>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------ -->
    <div class="byhongbao">
      <div class="byhongbao_1">
        <b>会员联合促销</b>
      </div>
      <div class="aaaa">
        <div class="bordercuxiao" v-for="(v,i) in arra" :key="i">
          <div class="cuxiao_2">
            <img :src="v.img1url" alt />
            <div>+</div>
            <img :src="v.img2url" alt />
          </div>
          <div class="cuxiao_3">
            <p class="prie">
              ¥{{v.money}}/年
              <span>¥{{v.money2}}</span>
            </p>
            <button class="liji">立即抢</button>
          </div>
        </div>
      </div>
    </div>
    <!-- --------------= -->
    <div class="byhongbao">
      <div class="byhongbao_1">
        <b>专享折扣商品</b>
        <div>></div>
      </div>
      <div v-for="(v,i) in arr" :key="i" class="wupinxiangqing">
        <h5>{{v.dianming}}</h5>
        <div class="xiangqing">
          <div class="xiangqing_1">
            <img :src="v.tupian" alt />
          </div>
          <div>
            <p>{{v.shangpin}}</p>
            <p class="yueshou">月售{{v.yueshou}}好评率{{v.haoping}}</p>
            <p class="huiyuanzhuanxiang">会员专享{{v.zhekou}}折</p>
            <p class="price">
              ¥{{v.newp}}
              <span>¥{{v.oldp}}</span>
            </p>
          </div>
          <div>
            <button class="qiang">立即抢</button>
          </div>
        </div>
      </div>
    </div>
    <!-- --------------------------------------------= -->
    <div class="renwu">
      <div>
        <p>
          光大银行x饿了么
          <span class="jianglijin">联名银行卡</span>>
        </p>
        <h4>免费成为超级会员</h4>
      </div>
      <div>
        <img src="../../../static/imgs/hand.jpg" alt />
      </div>
    </div>
    <!-- -------------------------------------------= -->
    <div class="byhongbao">
      <div class="byhongbao_1">
        <b>会员特权</b>
        <div>详情></div>
      </div>
      <div class="bottom_bar">
        <div v-for="(v,i) in arr_1" :key="i">
          <div>
            <img :src="v.img" alt />
          </div>
          <div>{{v.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          dianming: "约赏臻品至尊牛排炸鸡饭（高新店）",
          tupian: "../../../static/imgs/fancai.jpg",
          yueshou: "299",
          haoping: "92%",
          zhekou: "3.8",
          newp: "13.8",
          oldp: "35.9",
          shangpin: "黑椒牛排+香辣鸡腿"
        },
        {
          dianming: "约赏臻品牛排炸鸡饭（高新店）",
          tupian: "../../../static/imgs/jipaifan.jpg",
          yueshou: "17",
          haoping: "100%",
          zhekou: "3.9",
          newp: "13.8",
          oldp: "34.99",
          shangpin: "番茄 鸡排饭+饮料"
        },
      ],
      arr_1: [
        { name: "专享红包", img: "../../../static/imgs/hongbao.jpg" },
        { name: "奖励金", img: "../../../static/imgs/qian.jpg" },
        { name: "专属折扣", img: "../../../static/imgs/zhe.jpg" },
        { name: "专属客服", img: "../../../static/imgs/kefu.jpg" }
      ],
      arra:[
        {img1url:"../../../static/imgs/youku.png",img2url:"../../../static/imgs/eleme.png",money:"189",money2:"378"},
        {img1url:"../../../static/imgs/youku.png",img2url:"../../../static/imgs/eleme.png",money:"189",money2:"378"},
        {img1url:"../../../static/imgs/youku.png",img2url:"../../../static/imgs/eleme.png",money:"189",money2:"378"},
        {img1url:"../../../static/imgs/youku.png",img2url:"../../../static/imgs/eleme.png",money:"189",money2:"378"},
      ]
    };
  }
};
</script>
<style  scoped>
.liji{
  border: none;
  width: 1.2rem;
  border-radius: 0.2rem;
  padding: 0.1rem 0.2rem;
  background: white;
  border: 0.01rem solid #bd8242;
  color: #bd8242
}
.more{
  color: #7b7d7b;
  font-size: 0.14rem;
}
.wupinxiangqing {
  margin: 0.2rem 0;
}
.first {
  font-size: 0.16rem;
  background: #f7f7f7;
}
.black {
  background: black;
  width: 100%;
  height: 2.6rem;
  color: white;
}
.black_2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.4rem;
}
.goldon {
  position: relative;
  width: 90%;
  height: 0.9rem;
  padding: 0.2rem;
  color: #634529;
}
.price {
  margin-top: 0.2rem;
}
.price span {
  text-decoration: line-through;
  color: #7b7d7b;
}
.jianglijin {
  color: #b57539;
}
.gold {
  width: 94%;
  background: #f7d79c;
  height: 2rem;
  /* margin: 0 auto; */
  left: 0.1rem;
  position: absolute;
  top: -1.2rem;
  text-align: center;
  border-radius: 0.1rem;
}
.gold_1 {
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  margin: 0.1rem auto;
}
.gold_btn {
  border-radius: 0.2rem;
  border: none;
  background: #b57d42;
  font-size: 0.13rem;
  padding: 0.06rem 0.15rem;;
  margin: 0.21rem;
  color: white;
}
.renwu {
  width: 92%;
  height: 0.8rem;
  background: white;
  margin: 0.15rem auto;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem;
}
.huiyuanzhuanxiang {
  color: white;
  background: #bd8242;
  font-size: 0.1rem;
  width: 0.8rem;
}
.renwu img {
  /* width:50%; */
  width: 0.5rem;
  margin: 0 auto;
}
.byhongbao_1 {
  display: flex;
  justify-content: space-between;
  margin: 0.1rem auto;
}
.byhongbao_2 {
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
}
.byhongbao {
  /* margin: 0.5rem; */
  width: 92%;
  margin: 0.09rem auto;
  background: white;
  padding: 0.05rem;
  border-radius: 0.1rem;
}
.cuxiao_2 {
 
  width:1.4rem;
  display: flex;
  justify-content: center;
  /* backface-visibility: red; */
  align-items: center;
  background: #f7f3e7;
  padding: 0.2rem;
 
}
.cuxiao_3 {
  margin: 0.2rem;
  padding: 0.1rem;
  text-align: center;
}
.bordercuxiao {
  border: 0.01rem solid burlywood;
  /* padding: 0.1rem; */
 
}
.aaaa {
  display: flex;
  justify-content: space-around;
  overflow-x: scroll;
  
}
.canhongbao {
  font-weight: 900;
  margin-bottom: 0.2rem;
}
.sizes {
  font-size: 0.4rem;
}
.xufei {
  border: none;
  border-radius: 0.2rem;
  font-size: 0.14rem;
  background: black;
  border: 0.01rem solid #f7d79c;
  color: #f7d79c;
}
.tongzhi {
  background: #fff7ef;
  bottom: 0;
}
.byhongbao_bg {
  background-image: url("../../../static/imgs/litter.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 20%;
}
.wuzhe {
  background: #ffebef;
  color: red;
  width: 0.7rem;
}
.price span {
  font-size: 0.13rem;
  text-decoration: line-through;
}
.qiang {
  border: none;
  background: white;
  border: 0.01rem solid #b57539;
  border-radius: 0.2rem;
  color: #b57539;
  font-size: 0.13rem;
  margin-top: 0.34rem;
}
.xiangqing {
  display: flex;
  justify-content: space-between;
  margin: 0.1rem;
}
.xiangqing img {
  width: 100%;
  /* flex: 1; */
}
.xiangqing_1 {
  width: 1rem;
}
.yueshou {
  font-size: 0.1rem;
  color: #7b7d7b;
}
.bottom_bar {
  display: flex;
  height: 1.2rem;;
  /* justify-content: space-around; */
  text-align: center;
  /* margin: 0.1rem; */
  /* padding: 0.1rem; */
  /* margin: 0.3rem; */
  align-items: center;
}
.bottom_bar img {
  width: 60%;
}
.prie {
  color: red;
}
.prie span {
  text-decoration: line-through;
  color: #7b7d7b;
}
</style>