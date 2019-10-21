<template>
    <div>
         <div class="big_box">
        <div class="big_boxa">
            <div class="big_boxb" v-for="(v,i) in lop" :key="'info1'+i">
               <van-dropdown-menu class="s_box"> <van-dropdown-item v-model="value1" :options="option1" /></van-dropdown-menu>
                <div class="q_box" >{{v.t2}}</div>
                <div class="d_box">{{v.t3}}</div>
                <div class="sx_box">{{v.t4}}<img :src="v.imgsrcd" alt=""></div>
            </div>
        </div>
         <van-sticky :offset-top="89">
         <div>
             <div class="smalla_box">
                 <div class="tag" v-for="(v,i) in tag" :key="'info2'+i">{{v.tag1}}</div>
             </div>
         </div>
         </van-sticky>
        <div class="foodAllCon">
        <footleft v-for="(v,i) in obj" :key="i" :imgsrc="v.resImg|priceFmt" :contitle="v.resName" :score="v.starLevel1"
        :num="v.monSale" :noteone="v.sendPrice" :notetwo="v.sendedPrice" :time="v.distance" :distance="v.time"
        :tips="v.resdiscount"
        > 
        </footleft>
        </div>
     </div>
    </div>
</template>

<script>
import footleft from '../../components/takeout-food/foodImgLeft'
    export default {
         components: {footleft},
         data() {
             return{
                 obj:[],
                value1: 0,
                option1: [
        { text: '综合排序', value: 0 },
        { text: '起送价最低', value: 1 },
        { text: '配送费最低', value: 2 },
        { text: '配送速度最快', value: 3 },
        { text: '好评优先', value: 4 }
      ],
                tag:[
                    {tag1:"免配送费"},
                    {tag1:"满减优惠"},
                    {tag1:"品牌商家"},
                    {tag1:"准时达"},
                    {tag1:"新店"},
                ],
                lop:[
          {t1:"综合排序",t2:"距离",t3:"销量",t4:"筛选",imgsrcd:"../../static/takeout-supermarket-img/shaixuan.png"}
      ],
             }
        },
        methods:{
        },
        created(){
             this.axios.get("/apis/supermarket").then((ok)=>{
            console.log(ok.data.data);
            this.obj = ok.data.data;
        })
        },
         filters: {
      priceFmt:(imgsrc)=>{
          return "../../static/takeout-supermarket-img/"+imgsrc
        }
      }
    }
</script>

<style  scoped>
.big_box{
    min-height: 10rem;
    background-color: white;
}
.big_boxa{
    z-index: 8001;
    height: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .15rem;
    padding: 0 .15rem;
    background: #fff;
}
.s_box{
    display: inline-flex;
    align-items: center;
}
.q_box{
    display: inline-block;
    margin-left: .2rem;
}
.d_box{
    display: inline-block;
    margin-left: .4rem;
}
.sx_box{
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    margin-left: 0.5rem;
}
.sx_box>img{
    margin-left: .05rem;
    height: .15rem;
}
.smalla_box{
    padding: .1rem .03rem;
    overflow-x: auto;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    background-color: white;
}
.tag{
    padding: .1rem .1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: .4rem;
    background: #f3f3f3;
    color: #666;
    border-radius: .03rem;
    font-size: .14rem;
    white-space: nowrap;
    margin-right: .07rem;
}
</style>