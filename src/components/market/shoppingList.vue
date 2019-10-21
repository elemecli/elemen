<template>
    <div class="shopplist">
        <div class="shoplist-i" v-for="(v,i) in obj" :key = "i">
             <img class="shoplist-img" :src="v.shoppingListimg|shpfilter" alt="">
             <p class="shoplist-title">{{v.shoppingListTitle}}</p>
             <div class="shopnum">
                 <div class="money">
                    <h6>￥<span>{{v.shoppingListmoney}}</span></h6>
                    <del>￥<span>{{v.huashoppingListmoney}}</span></del>
                 </div>
                 <div class="shopnum-s">
                     <span class="iconfont jians" v-if="v.num>0" @click="jianhao(i,v)">&#xe627;</span>
                     <span class="nums" v-if="v.num>0">{{v.num}}</span>
                     <span class="iconfont adds" @click="jiahao(i,v)">&#xe60d;</span>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    filters:{
        shpfilter(val){
            return "../../../static/"+val;
        }
    },
    data(){
        return{
            obj:[]
        }
    },
     methods:{
        jianhao(i,v){
            if(this.obj[i].num>0){
                this.obj[i].num -= 1;
            }
            let obj={
                shPrice:v.shoppingListmoney,
                ShUnitPrice:v.huashoppingListmoney,
                shImage:v.shoppingListimg,
                num:v.num,
                shtitle:v.shoppingListTitle
            }
            this.$emit("shjian",obj)
        },
        jiahao(i,v){
            this.obj[i].num += 1;
            let obj={
                shPrice:v.shoppingListmoney,
                ShUnitPrice:v.huashoppingListmoney,
                shImage:v.shoppingListimg,
                num:v.num,
                shtitle:v.shoppingListTitle
            }
            // console.log(this.obj[i].num);
            this.$emit("shadd",obj)
            
        }

    },
    created(){
        this.axios.get("/apis/market").then((ok)=>{
            console.log(ok.data.datass);
            this.obj = ok.data.datass;

        })
    }
}
</script>

<style scoped>
    .shopplist{
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-bottom: 0.9rem;
    }
    .shoplist-i{
        width: 43%;
        border-radius: 0.16rem;
        background-color: white;
        padding: 0.1rem;
        margin-top: 0.1rem;
    }
    .shoplist-img{
        width: 100%;
        display: block;

    }
    .shoplist-title{
        width: 100%;
        white-space: nowrap;
        font-size: 0.14rem;
        color: black;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 0.3rem;
        margin-bottom: 0.2rem;
    }
    .shopnum{
        display: flex;
        justify-content: space-between;
    }
    .money{
        display: flex;
        align-items: center;
    }
    .money>h6{
        font-size: 0.14rem;
        color: #ff4152;
    }
    .money>h6>span{
        font-size: 0.16rem;
        color: #ff4152;
    }
    .money>del{
        font-size: 0.12rem;
        color: #9c9a9c;
        justify-content: center;
    }
    .shopnum-s{
        width: 40%;
        display: flex;
        align-items: center;
        position: relative;
    }
    .shopnum-s>span{
        font-size: 0.18rem;
        color: #00a6ff;
    }
    .shopnum-s .nums{
        font-size: 0.16rem;
        position: absolute;
        top: -0.01rem;
        left: 0.22rem;
        color: black;

    }
    .jians{
        margin-right: 0.16rem;
        position: absolute;
        top: 0;
        left: 0;
    }
    .adds{
        position: absolute;
        top: 0;
        right: 0;
    }
</style>