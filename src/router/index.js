import Vue from 'vue'
import Router from 'vue-router'
import Takeout from '../pages/takeout'
import Market from '../pages/market'
import Orders from '../pages/orders'
import My from '../pages/my'
import TakeoutFood from '../pages/takeout-food'
import TakeoutSupermarket from '../pages/takeout-supermarket'

// 柴丽坤
import All from '../pages/takeout-food/all'
import BoxRice from '../pages/takeout-food/boxRice'
import Hamburg from '../pages/takeout-food/hamburg'
import Noodles from '../pages/takeout-food/noodles'
import Spicy from '../pages/takeout-food/spicy'
import Snacks from '../pages/takeout-food/snacks'
import Local from '../pages/takeout-food/local'
import Japan from '../pages/takeout-food/japan'
import Light from '../pages/takeout-food/light'

// 贠啸天
import Chaoshijuti from '../pages/chaoshijuti'
import Dazhe from '../pages/dazhe'

//张琰
import Vanguard from '../pages/vanguard'

// 常毅
import Cy from '../pages/cy'
import Ercya from '../pages/ercya'
import Ercyb from '../pages/ercyb'
import Ercyc from '../pages/ercyc'
import Ercyd from '../pages/ercyd'
import Ercye from '../pages/ercye'
import Ercyf from '../pages/ercyf'
import Ercyg from '../pages/ercyg'

// 边朝
import Member from "../pages/member/member";
import Memberloding from "../pages/member/memberloding";
import Suppermember from "../pages/member/suppermember";

// 杨凯
import Yk from "../pages/yk"
import Ykdiancan from "../pages/yk/ykdiancan"
import Ykpingjia from "../pages/yk/ykpingjia"
import Ykshangjia from "../pages/yk/ykshangjia"

// 郭挺
import Check from "../pages/shopping-cart/check"
import Shopping from "../pages/shopping-cart/shopping"

import asd from '../pages/1takeout-supermarket/sx'

Vue.use(Router)

export default new Router({
  routes: [
    // 周昆
    {name:"takeout",path:"/takeout",component:Takeout},

    // 南存存
    {name:"market",path:"/market",component:Market},

    // 郭挺
    {name:"orders",path:"/orders",component:Orders},
    {name:"check",path:"/check",component:Check},
    {name:"shopping",path:"/shopping",component:Shopping},


    {name:"my",path:"/my",component:My},


    // 柴丽坤
    {
      name:"takeoutFood",
      path:"/takeoutFood",
      component:TakeoutFood,
      children:[
        {name:"all",path:"all",component:All},
        {name:"noodles",path:"noodles",component:Noodles},
        {name:"boxRice",path:"boxRice",component:BoxRice},
        {name:"hamburg",path:"hamburg",component:Hamburg},
        {name:"spicy",path:"spicy",component:Spicy},
        {name:"snacks",path:"snacks",component:Snacks},
        {name:"local",path:"local",component:Local},
        {name:"japan",path:"japan",component:Japan},
        {name:"light",path:"light",component:Light},
      ]
    },
    //贠啸天 
    {name:"chaoshijuti",path:"/chaoshijuti",component:Chaoshijuti},
    {name:"dazhe",path:"/dazhe",component:Dazhe},
    //张琰
    {name:"vanguard",path:"/vanguard",component:Vanguard},
    // 常毅
    {
      name:"cy",
      path:"/cy",
      component:Cy,
      children:[
        {name:"ercya",path:"ercya",component:Ercya},
        {name:"ercyb",path:"ercyb",component:Ercyb},
        {name:"ercyc",path:"ercyc",component:Ercyc},
        {name:"ercyd",path:"ercyd",component:Ercyd},
        {name:"ercye",path:"ercye",component:Ercye},
        {name:"ercyf",path:"ercyf",component:Ercyf},
        {name:"ercyg",path:"ercyg",component:Ercyg},
      ]
    },
    // 边朝
    {name:"member",path:"/member",component:Member},
    {name:"memberloding",path:"/memberloding",component:Memberloding},
    {name:"suppermember",path:"/suppermember",component:Suppermember},

    // 杨凯
    {
      name:"yk",
      path:"/yk",
      component:Yk,
      children:[
        {name:"ykdiancan",path:"ykdiancan",component:Ykdiancan},
        {name:"ykpingjia",path:"ykpingjia",component:Ykpingjia},
        {name:"ykshangjia",path:"ykshangjia",component:Ykshangjia}
      ]
    },
    

    {
      name:"Supermarket",
      path:"/Supemarket",
      component:TakeoutSupermarket,
      children:[
        {
          name:"qb",
          path:"qb",
          component:()=>import("@/pages/1takeout-supermarket/qb.vue")
        },
        {
          name:"bh",
          path:"bh",
          component:()=>import("@/pages/1takeout-supermarket/bh.vue")
        },
        {
          name:"ls",
          path:"ls",
          component:()=>import("@/pages/1takeout-supermarket/ls.vue")
        },
        {
          name:"qq",
          path:"qq",
          component:()=>import("@/pages/1takeout-supermarket/qq.vue")
        },
        {
          name:"rq",
          path:"rq",
          component:()=>import("@/pages/1takeout-supermarket/rq.vue")
        },
        {
          name:"sx",
          path:"sx",
          component:asd
        },
        {
          name:"yj",
          path:"yj",
          component:()=>import("@/pages/1takeout-supermarket/yj.vue")
        },
      ]
    },
    {path:"*",redirect:"/Supemarket/qb"}
  ]
})
