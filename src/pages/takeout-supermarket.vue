<template>
  <div class="bigbox">
    <!-- 顶部 -->
    <div class="ding">
      <van-sticky>
      <div class="daohang">
        <router-link to="/takeout">
          <img :src="imgurl_a" alt="返回" class="imgurl_a" >
          </router-link>
        <span>{{text_m}}</span>
      </div>
      </van-sticky>
      <!-- 搜索框 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            
            <div>
             
      <div class="box_a">
          <van-sticky>
        <div class="sousuo_a">
          <div class="sousuo_b">
            <div class="sousuo_c">
              <!-- 搜索跳转 -->
              <div class="sousuoa">
                <img :src="img_d" alt />
              </div>
              <div class="tiao">{{text_c}}</div>
            </div>
          </div>
        </div>
        </van-sticky>
        <!-- 热搜 -->
        <div class="resou_a">
          <div class="resou_b">{{text_a}}</div>
          <div class="biao_a">
            <div class="biao_b" v-for="(v,i) in biao_p">{{v.resou_a}}</div>
          </div>
        </div>
      </div>
    </div>
         <div class="hua_box">
             <div class="img_box" v-for="(v,i) in img_box">
                 <img :src="v.imgo" alt="">
                 <div class="lp_box">{{v.jian}}</div>
                 <div class="bot_box">
                     <img src="../../static/takeout-supermarket-img/tubiao.png" alt="" class="imga1">
                     <div class="sd_box">每一天</div>
                     <div>
                          <img src="../../static/takeout-supermarket-img/go.png" alt="" class="imga2">
                     </div>
                 </div>
             </div>
         </div>
    <!-- 主体内容 -->
    <div class="zhu_a">
      <!-- 第一块 -->
      <div class="zhu_one">
        <div class="zhu_onea">
          <div class="zhu_onea_a">{{text_a1}}</div>
          <div class="zhu_onea_b">{{text_a2}}</div>
          <div class="zhu_onea_c">{{text_a3}}</div>
        </div>
        <div class="zhu_oneb">
          <div class="zhu_asd">
            <div class="shangpin_one" v-for="(v,i) in shangpin">
              <div class="shangpin_two">
                <img :src="v.imgurl_b" alt="商品" class="pice_one" />
                <div class="shangpin_s">{{v.tk}}</div>
              </div>
              <div class="shangpin_three">{{v.title}}</div>
              <div class="shangpin_five">
                <span>￥9.9</span>
                <del>￥14.5</del>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二块 -->
      <div class="er_a">
        <div class="er_b">
          <div class="er_one">
            <div class="er_one_a" v-for="(v,i) in er">
              <div class="er_one_b">
                <p>{{v.txt}}</p>
                <p>{{v.txt2}}</p>
              </div>
              <img :src="v.imgsrc" alt />
              <div class="shugang"></div>
            </div>
          </div>
          <div class="henggang"></div>
          <div class="er_one">
            <div class="er_one_a" v-for="(v,i) in san">
              <div class="er_one_b">
                <p>{{v.txt}}</p>
                <p>{{v.txt2}}</p>
              </div>
              <img :src="v.imgsrc" alt />
            </div>
            <div class="shugang"></div>
          </div>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="banner">
        <div class="item">
          <img :src="dataList[currentIndex]" />
        </div>
        <div class="page" v-if="this.dataList.length > 1">
          <ul class="dian">
            <li
              v-for="(item,index) in dataList"
              @click="gotoPage(index)"
              :class="{'current':currentIndex == index}"
            ></li>
          </ul>
        </div>
      </div>
      <!-- 导航 -->
      <van-sticky :offset-top="50">
      <div class="daohang_q">
          <div class="daohang_smallbox">
              <router-link :to="v.luyou2" v-for="(v,i) in daohang" :key="i" >
              <div class="smallbox_one"  v-bind:class="{Checked:i==topIndex}" @click="TopClick(i)">
                  <div class="smallbox_two">{{v.titlea}}</div>
                  <div class="smallbox_three">{{v.titleb}}</div>
              </div>
              </router-link>
              
          </div>
      </div>
      </van-sticky>
    
        </div>
         </van-pull-refresh>
      <router-view></router-view>
      <!-- 排序版块 -->
     
       
    </div>
    
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
         count: 0,
      isLoading: false,
    topIndex:0,
      dataList: [
        "../../static/takeout-supermarket-img/lunbo1.png",
        "../../static/takeout-supermarket-img/lunbo2.png",
        "../../static/takeout-supermarket-img/lunbo3.png"
      ],
      currentIndex: 0, //默认显示图片
      timer: null, //定时器
      imgurl_a: "../../static/takeout-supermarket-img/maichang_tou.png",
      text_m: "卖场便利",
      text_a: "热搜:",
      img_d: "../../static/takeout-supermarket-img/sousuo.png",
      text_c: "输入商家、商品名称",
      biao_p: [
        { resou_a: "啤酒" },
        { resou_a: "放便面" },
        { resou_a: "矿泉水" },
      
      ],
      text_a1: "真实惠",
      text_a2: "天天特价1折抢",
      text_a3: "查看更多",
      shangpin: [
        {
          imgurl_b: "../../static/takeout-supermarket-img/shuyuan.png",
          tk: "已抢23份",
          title: "薯愿150g/盒",
          title_a: "￥9.9",
          title_b: "￥14.5"
        },
        {
          imgurl_b: "../../static/takeout-supermarket-img/hsm.png",
          title: "统一红烧牛肉面103g*5/包",
          title_a: "￥9.9",
          title_b: "￥14.5"
        },
        {
          imgurl_b: "../../static/takeout-supermarket-img/cole.png",
          tk: "已抢12份",
          title: "统一红烧牛肉面103g*5/包",
          title_a: "￥9.9",
          title_b: "￥14.5"
        },
        {
          imgurl_b: "../../static/takeout-supermarket-img/water.png",
          tk: "已抢89份",
          title: "冰露纯悅矿物质水550ml*12",
          title_a: "￥9.9",
          title_b: "￥14.5"
        },
        {
          imgurl_b: "../../static/takeout-supermarket-img/xuehua.png",
          title: "统一红烧牛肉面103g*5/包",
          title_a: "￥9.9",
          title_b: "￥14.5"
        },
        {
          imgurl_b: "../../static/takeout-supermarket-img/zhi.png",
          tk: "已抢52份",
          title: "屈臣氏竹纤维原生纸纸抽纸巾(2层×90抽×3包)",
          title_a: "￥9.9",
          title_b: "￥14.5"
        },
        {
          imgurl_b: "../../static/takeout-supermarket-img/bls.png",
          tk: "已抢76份",
          title: "统一红烧牛肉面103g*5/包",
          title_a: "￥9.9",
          title_b: "￥14.5"
        }
      ],
      er: [
        {
          txt: "世纪金花",
          txt2: "低至五折",
          imgsrc: "../../static/takeout-supermarket-img/sj.png"
        },
        {
          txt: "世纪金花",
          txt2: "低至五折",
          imgsrc: "../../static/takeout-supermarket-img/sj.png"
        },
        {
          txt: "世纪金花",
          txt2: "低至五折",
          imgsrc: "../../static/takeout-supermarket-img/sj.png"
        }
      ],
      san: [
        {
          txt: "爆品水果",
          txt2: "低至五折",
          imgsrc: "../../static/takeout-supermarket-img/shuiguo.png"
        },
        {
          txt: "爆品水果",
          txt2: "低至五折",
          imgsrc: "../../static/takeout-supermarket-img/shuiguo.png"
        },
        {
          txt: "爆品水果",
          txt2: "低至五折",
          imgsrc: "../../static/takeout-supermarket-img/shuiguo.png"
        }
      ],
      daohang:[
          {titlea:"全部",titleb:"推荐商家",luyou2:"/supemarket/qb"},
          {titlea:"生鲜",titleb:"买菜做饭",luyou2:"/supemarket/sx"},
          {titlea:"零食",titleb:"吃货必备",luyou2:"/Supemarket/ls"},
          {titlea:"百货",titleb:"家庭常用",luyou2:"/Supemarket/bh"},
          {titlea:"人气",titleb:"畅销好货",luyou2:"/Supemarket/rq"},
          {titlea:"应急",titleb:"全天快送",luyou2:"/Supemarket/yj"},
          {titlea:"全球",titleb:"品质生活",luyou2:"/Supemarket/qq"},
      ],
      img_box:[
          {imgo:"../../static/takeout-supermarket-img/lp.png",jian:"全场满69减30"},
          {imgo:"../../static/takeout-supermarket-img/xb.png",jian:"全场满49减20"},
          {imgo:"../../static/takeout-supermarket-img/shj.png",jian:"全场满59减12"},
          {imgo:"../../static/takeout-supermarket-img/bf.png",jian:"全场满49减10"},
          {imgo:"../../static/takeout-supermarket-img/nn.png",jian:"全场满49减20"},
      ]
       
      
    };
  },
  created() {
      
    let index=0;
    let that=this;
    this.timer = setInterval(() => {
        if(index==3){
            index=0;
        }
      that.gotoPage(index);
      index=index+1;
    }, 3000);
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },
  TopClick(i){
      this.topIndex=i;
  },
   onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  },
  computed: {}
};
</script>

<style  scoped>
.bigbox {
  background-color: #f4f4f4;
}
.daohang {
  width: 100%;
  height: 0.5rem;
  font-size: 0.22rem;
  background-color: #00a6ff;
  color: #fff;
  line-height: .5rem;
}
.imgurl_a{
    width: 23px;
    height: 23px;
    position: relative;
    top:.08rem;
}
.daohang>span{
    margin-left: 1.1rem;
}
/* 搜索 */
.box_a {
  background-image: linear-gradient(90deg, rgb(1, 166, 250), rgb(1, 141, 252));
  height: 0.7rem;
  padding-top: 0.02rem;
}
.sousuo_a{
  height: .4rem;
    padding-top: 5px;
    width: 100%;
}
.sousuo_b {
  width: 100%;
  height: 0.3rem;
}
.sousuo_c {
  display: flex;
  margin: 0.1rem 0.2rem;
  height: 100%;
  border-radius: 18px;
  background: #fff;
  justify-content: center;
  align-items: center;
}
.sousuoa {
  font-size: 0px;
}
.sousuoa > img {
  width: 0.2rem;
}
/* 热搜 */
.resou_a {
  position: relative;
  height: 0.53rem;
  padding-left: 0.2rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: -.1rem;
}
.resou_b {
  color: #fff;
  font-size: 14px;
}
.tiao {
  display: inline-block;
  font-size: 12px;
  line-height: 0.42rem;
  color: rgba(0, 0, 0, 0.5);
}
.biao_a {
  position: absolute;
  width: 7rem;
  left: 0.7rem;
  top: -0.22rem;
  transform: scale(0.5);
  transform-origin: 0 0;
}
.biao_b {
  margin-bottom: 0.4rem;
  margin-right: 0.37rem;
  font-size: 0.2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.08rem 0.3rem;
  color: #fff;
  background: rgba(0, 119, 201, 0.4);
  border-radius: 0.5rem;
}
/* 主体内容 */
.zhu_a {
  overflow: hidden;
  margin-top: 10px;
}
.zhu_one {
  margin-bottom: 0.13rem;
  margin-top: 0.13rem;
  margin: 0 0.3rem;
  border-radius: 7px;
  background: #fefefe;
  position: relative;
  overflow: hidden;
}
.zhu_onea {
  position: relative;
  display: flex;
  margin-top: 0.07rem;
  align-items: baseline;
}
.zhu_onea_a {
  color: rgb(255, 82, 1);
  font-size: 18px;
  font-weight: 700;
  margin-left: 0.1rem;
}
.zhu_onea_b {
  color: rgb(102, 102, 102);
  font-size: 14px;
  margin-left: 0.1rem;
}
.zhu_onea_c {
  position: absolute;
  right: 0.1rem;
  top: 0.03rem;
  padding: 0.03rem 0.27rem 0.04rem 0.1rem;
  display: flex;
  align-items: center;
  background: #fff;
  font-size: 12px;
  color: #666;
  z-index: 2;
  pointer-events: none;
  box-sizing: border-box;
  transform-origin: 0 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 40px;
}
.zhu_oneb {
  width: 100%;
  padding-left: 0.05rem;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  transform: translateZ(0);
}
.shangpin_one {
  width: 1.2rem;
  height: 100%;
  margin-right: 0.1rem;
  position: relative;
}
.pice_one {
  margin-top: 0.1rem;
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 4px;
}
.shangpin_three {
  height: 0.4rem;
  font-size: 16px;
  margin-top: 0.04rem;
  color: rgba(0, 0, 0, 0.8);
  line-height: 0.2rem;
  white-space: normal;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.shangpin_five {
  margin-left: 0.025rem;
  margin-top: 0.04rem;
  font-size: 14px;
  font-weight: 500;
}
.shangpin_five > span {
  margin-left: 0.01rem;
  font-size: 18px;
  font-weight: 500;
  color: #df550c;
}
.shangpin_five > del {
  margin-left: 0.025rem;
  color: #7f7f7f;
}
.zhu_asd {
  display: inline-flex;
  vertical-align: top;
  overflow-y: hidden;
  height: 100%;
}
::-webkit-scrollbar {
  display: none;
}
.shangpin_s {
  background-color: #df550c;
  position: absolute;
  top: 0.96rem;
  left: 0;
  font-size: 12px;
  border-radius: 2px 4px 2px 4px;
  color: #fff;
}
/* 第二块 */
.er_a {
  padding: 0 0.3rem;
  margin-top: 10px;
}
.er_b {
  background-color: #fff;
  border-radius: 7px;
}
.er_one {
  display: flex;
  justify-content: space-between;
}
.er_one_a {
  width: 1rem;
  height: 1.2rem;
  border-radius: 7px;
  position: relative;
}
.er_one_b {
  width: 1rem;
  height: 0.5rem;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  position: relative;
  text-align: center;
}
.er_one_b > p:nth-child(1) {
  padding-top: 0.15rem;
  font-size: 14px;
  color: #333;
}
.er_one_b > p:nth-child(2) {
  height: 0.1rem;
  margin-top: 0.05rem;
  font-size: 12px;
  color: #666;
}
.er_one_a > img {
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  left: 0.2rem;
  bottom: 0.06rem;
}
.henggang {
  height: 0.02rem;
  margin: 0 0.13333rem 0 0.4rem;
  background: #f4f4f4;
}
.shugang {
  height: 1.9rem;
  margin: -0.2rem 0;
  width: 0.02667rem;
  background: #f4f4f4;
  transform: scaleX(0.5);
}
/* 轮播图 */
.dian{
    left: 44%;
    bottom: -0.44rem;
    z-index: 2;
    position: absolute;
    display: flex;
}
.dian>li{
    width: .15rem;
    height: .025rem;
    border-radius: 0;
    background-color:#fff;
    opacity: .4;
    margin: 0 .025rem;
}
.banner{
    padding: 0 0.3rem;
    margin-top: -16px;
}
.item>img{
    width: 100%;
    border-radius: 7px;
}
/* 导航 2*/
.daohang_q{
    position: sticky;
    top: 1rem;
    z-index: 8000;
    font-size: 0;
}
.daohang_smallbox{
    transition: .3s ease-in-out;
    background: #f5f5f5;
    margin-bottom: .15rem;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    position: relative;
}
.smallbox_one{
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1rem;
    position: relative;
}
.smallbox_two{
    font-weight: 700;
    margin: .1rem 0 .2rem;
    font-size: .2rem;
    color: #333;
}
.smallbox_three{
    position: absolute;
    bottom: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: .15rem;
    border-radius: 16px;
    padding: 0 .08rem;
    color: #666;
   
}
.Checked .smallbox_three{
  color: #fff;
  background-image: linear-gradient(90deg,#40b6ff,#00a6ff);
}
.Checked .smallbox_two{
    color: #00a6ff;
}
/* 排序版块 */
.hua_box{
    background: url(../../static/takeout-supermarket-img/beijing.png) no-repeat;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding-top: 5px;
}
.img_box{
    position: relative;
    display: inline-block;
    width: 1.5rem;
    height: 2rem;
    margin-left: .08rem;
    margin-right: .08rem;
    border-radius: 8px;
    box-shadow: 0 0.05rem 0.1rem 0 rgba(0,0,0,.08);
}
.img_box>img{
    border-radius: 8px;
    width: 100%;
    height: 1.7rem;
}
.lp_box{
    position: absolute;
    display: flex;
    align-items: center;
    height: .25rem;
    top: 1.45rem;
    font-size: .15rem;
    padding: 0 .15rem 0 .08rem;
    color: #fff;
    font-weight: 700;
    z-index: 1;
    background-image:url(../../static/takeout-supermarket-img/red.png),-webkit-linear-gradient(left,#f63c28 85%,transparent 0,transparent);
    background-repeat: no-repeat;
    background-position: 90%;
}
.bot_box{
    border-radius: 0 0 4px 4px;
    position: absolute;
    top: 1.7rem;
    display: flex;
    left: 0;
    align-items: center;
}
.imga1{
   border-radius: 2px;
    margin-left: .1rem;
    width: .3rem;
    height: .3rem;
}
.imga2{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 6px;
    right: 0px;
}
.sd_box{
    display: inline-block;
    margin-left: .05rem;
    font-size: .15rem;
    color:#00a6ff;
    width: 0.8rem;
    overflow: hidden;
}
</style>