// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 解构赋值
import {store} from './store/store'
require("./mock")
// 阿里图标字体
import './assets/css/iconfont/iconfont.css'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// 引入jquery
import $ from 'jquery'

Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
