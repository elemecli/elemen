<template>
  <div>
    <div class="tangCK" @click="zifuna()">
      <img class="tangCK-left" src="../../../static/marketImage/tanchukuang1.jpg" alt />
      <div class="tangCK-right">
        <h6>华润万家(科技路店)</h6>
        <p>
          <img src="../../../static/marketImage/tanchukuang-logo.jpg" alt />45分钟2.9km
        </p>
      </div>
    </div>
    <div class="tangCK" @click="zifunb()">
      <img class="tangCK-left" src="../../../static/marketImage/tanchukuang2.jpg" alt />
      <div class="tangCK-right">
        <h6>盒马鲜生(兰岛广场店)</h6>
        <p>44分钟3.0km</p>
      </div>
    </div>
    <div class="tangCK" @click="zifunc()">
      <img class="tangCK-left" src="../../../static/marketImage/tanchukuang3.jpg" alt />
      <div class="tangCK-right">
        <h6>华润万家便利超市(市兰乔圣菲店)</h6>
        <p>
          <img src="../../../static/marketImage/tanchukuang-logo.jpg" alt />35分钟3.8km
        </p>
      </div>
    </div>
    <div class="tangCK" @click="zifund()">
      <img class="tangCK-left" src="../../../static/marketImage/tanchukuang4.jpg" alt />
      <div class="tangCK-right">
        <h6>超市优选</h6>
        <p>精选附近更多超市为您提供商品服务</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zitext: "华润万家",
      zitexta: "盒马鲜生",
      zitextb: "便利超市",
      zitextc: "超市优选"
    };
  },
  methods: {
    zifuna() {
    //   console.log(this.zitext);
      this.$emit("zifunpao", this.zitext);
    },
    zifunb() {
    //   console.log(this.zitext);
      this.$emit("zifunpao", this.zitexta);
    },
    zifunc() {
    //   console.log(this.zitext);
      this.$emit("zifunpao", this.zitextb);
    },
    zifund() {
    //   console.log(this.zitext);
      this.$emit("zifunpao", this.zitextc);
    }
  }
};
</script>

<style scoped>
.tangCK {
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 0.12rem;
}
.tangCK-left {
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.1rem;
}
.tangCK-right h6 {
  font-size: 0.16rem;
  font-weight: 400;
}
.tangCK-right p {
  font-size: 0.12rem;
  display: flex;
  margin-top: 0.1rem;
  color: #7a7c7b;
}
.tangCK-right p img {
  width: 0.52rem;
  height: 0.16rem;
  margin-right: 0.04rem;
}
</style>