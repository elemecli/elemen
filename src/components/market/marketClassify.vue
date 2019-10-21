<template>
  <div>
    <div class="zongTitle">
      <a href="#" v-for="(v,i) in arr" :key="i" class="classify">
        <img :src="v.classifyimg|ifyimgFilter" alt />
        <span>{{v.classifytitle}}</span>
      </a>
    </div>
    <div v-if="classifyScrolltop>423" class="huaDongZongTitle">
      <div class="huadongTitle">
        <a href="#" v-for="(v,i) in arr" :key="i" class="classify huadongClassify">
          <img :src="v.classifyimg|ifyimgFilter" alt />
          <span>{{v.classifytitle}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    ifyimgFilter(val) {
      return "../../../static/" + val;
    }
  },
  data() {
    return {
      arr: [],
      classifyScrolltop: ""
    };
  },
  created() {
    this.axios.get("/apis/market").then(ok => {
      console.log(ok.data.data);
      this.arr = ok.data.data;
    });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.classifyScrolltop = scrollTop;
    }
  }
};
</script>

<style scoped>
.huaDongZongTitle {
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0.64rem;
  z-index: 1900;
}
.zongTitle {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
  border-radius: 0.1rem;
}
.classify {
  margin: 0.06rem 0.04rem;
}
.classify img {
  width: 0.54rem;
  height: 0.54rem;
  display: block;
}
.classify span {
  display: block;
  font-size: 0.14rem;
  color: black;
}
.huadongTitle {
  width: 90%;
  margin: 0 auto;
  display: flex;
  overflow-x: auto;
}
.huadongClassify span {
  font-size: 0.12rem;
}
</style>