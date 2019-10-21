<template>
    <div class="baokuanzong">
        <div v-for="(v,i) in str" :key = "i" class="baokuandan">
            <img :src="v.baokuanimg|bkfilter" alt="">
            <p class="baokuantitle">{{v.baokuantitle}}</p>
            <div class="unit">
                <p class="money">￥<span>{{v.money}}</span></p>
                <del class="huamoney">￥<span>{{v.huamoney}}</span></del>
                <span class="num" v-if="v.num>0">{{v.num}}</span>
                <span class="iconfont jie" @click="jie(i,v)" v-if="v.num>0">&#xe627;</span>
                <span class="iconfont add" @click="add(i,v)">&#xe60d;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    filters:{
       bkfilter(val){
           return "../../../static/"+val
       } 
    },
    data(){
        return{
            str:[]
        }
    },
    methods:{
        add(i,v){
            this.str[i].num = this.str[i].num+1;
            let str = {
                baokuanprice:v.money,
                baokuanunitPrice:v.huamoney
            }
            this.$emit("add",str)
        },
        jie(i,v){
            let str = {
                baokuanprice:v.money,
                baokuanunitPrice:v.huamoney
            }
            this.$emit("jian",str)
            if(this.str[i].num>0){
                this.str[i].num = this.str[i].num-1;
            }
        }
    },
    created(){
        this.axios.get("/apis/market").then((ok)=>{
            console.log(ok.data.datas);
            this.str = ok.data.datas;
        })
    }
}
</script>

<style scoped>
    .baokuanzong{
        display: flex;
        flex-wrap:wrap; 
        justify-content: space-around;
        margin-top: 0.08rem;
        padding-bottom: 0.2rem;
    }
    .baokuandan{
        width: 29%;
        margin-bottom: 0.16rem;
    }
    .baokuandan img{
        width: 100%;
        height: 1.12rem;
        display: block;
    }
    .baokuantitle{
        font-size: 0.12rem;
        width: 100%;
        height: 0.36rem;
        overflow: hidden;
        text-overflow: ellipsis;
        color: black;
        margin-top:0.04rem; 
    }
    .unit{
        display: flex;
        position: relative;
        align-items: center;
         margin-top:0.04rem; 
    }
    .money{
        font-size: 0.12rem;
        color: #ff4152;
    }
     .money span{
         font-size: 0.16rem;
         color: #ff4152;
     }
     .huamoney{
         font-size: 0.12rem;
         color: #949a94;
     }
     .jie{
         font-size: .18rem;
         color: #00a6ff;
         position: absolute;
         top: 0.2rem;
         left: 0.44rem;
         font-weight: 400;
     }
     .add{
         font-size: .18rem;
         color: #00a6ff;
         font-weight: 400;
         position: absolute;
         top: 0.2rem;
         right: -0.05rem;
     }
     .num{
         font-size: 0.16rem;
         color: black;
         position: absolute;
         top: 0.2rem;
         right: 0.2rem;
     }
</style>