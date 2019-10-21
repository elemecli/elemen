<template>
    <div class="zhuanshu">
        <div class="zhuanshuTit">
            <h3>专属·午后时光</h3>
            <a href="#">更多好店></a>
        </div>
        <div class="zhuanshuCon">
            <a href="#" class="tuijian" v-for="(v,i) in arr" :key="i">
                <img :src="v.imgurl" alt=""><br>
                <span>{{v.title}}</span><br>
                <span>{{v.contect}}</span>
            </a>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
            {title:"人人居（科技路店）",contect:"根据你浏览过的店铺推荐",imgurl:"../../../static/wmimg/a1.jpg"},
            {title:"天宝秘制烤肉拌饭",contect:"你附近的热卖商家",imgurl:"../../../static/wmimg/a2.jpg"}
            ]
        }
    }
}
</script>
<style scoped>
    .zhuanshu{
    margin-bottom:.1rem; 
    }
    .zhuanshuTit{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: .05rem;
    }
    .zhuanshuTit h3{
        font-size: .2rem;
        color:#313431;
    }
    .zhuanshuTit a{
        font-size: .12rem;
        color:#7b7d7b;
    }
    .zhuanshuCon{
        display: flex;
        justify-content: space-between;
    }
    .tuijian{
        width: 49%;
        font-size: 0;
    }
    .tuijian img{
        width: 100%;
    }
    .tuijian span:nth-of-type(1){
        font-size: .14rem;
        font-weight: 700;
        color: #313031;
    }
    .tuijian span:nth-of-type(2){
        font-size: .12rem;
        color:#ff7100;
    }
</style>