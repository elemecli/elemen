<template>
    <div class="ziqu">
        <div class="ziquTit">
            <h3>到店自取</h3>
            <a href="#">共46家></a>
        </div>
        <div class="ziquCon">
            <a href="" class="ziquConItem" v-for="(v,i) in arr" :key="i">
                <img :src="v.imgurl" alt="">
                <p>{{v.title}}</p>
                <img src="../../../static/wmimg/dingwei.png" alt=""><span>{{v.juli}}</span><br>
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
                {title:"白小白饺子馆（科技路店）",juli:"365m",contect:"省￥1.6配送费",imgurl:"../../../static/wmimg/m1.jpg"},
                {title:"黄家泡馍（科技四路形象店）",juli:"390m",contect:"省￥2.6配送费",imgurl:"../../../static/wmimg/m2.jpg"},
                {title:"东北大妈水饺",juli:"462m",contect:"省￥2.6配送费",imgurl:"../../../static/wmimg/m1.jpg"},
                {title:"贡茶（科技四路人气店）",juli:"365m",contect:"省￥3.6配送费",imgurl:"../../../static/wmimg/m3.jpg"},
                {title:"喵想吃酸菜鱼（南窑头店）",juli:"365m",contect:"省￥4.6配送费",imgurl:"../../../static/wmimg/m1.jpg"},
                {title:"柳州螺蛳粉",juli:"365m",contect:"省￥1.6配送费",imgurl:"../../../static/wmimg/m2.jpg"},
                {title:"江鱼儿无骨烤鱼饭（高新区店）",juli:"365m",contect:"省￥2.6配送费",imgurl:"../../../static/wmimg/m3.jpg"},
            ]
        }
    }
}
</script>
<style scoped>
    .ziquTit{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: .05rem;
    }
    .ziquTit h3{
        font-size: .2rem;
        color:#313431;
    }
    .ziquTit a{
        font-size: .12rem;
        color:#7b7d7b;
    }
    .ziquCon{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
    .ziquConItem{
        width: 30%;
        text-align: center;
        border:1px solid #e7e3e7;
        font-size: 0;
        border-radius: 10px;
        padding: .05rem 0;
        flex-shrink: 0;
        margin-right: .1rem;
    }
    .ziquConItem img:nth-of-type(1){
        width: 60%;
    }
    .ziquConItem img:nth-of-type(2){
        width: .16rem;
        margin-top: .05rem;
    }
    .ziquConItem p{
        width: 100%;
        font-size: .16rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
        margin-top: .05rem;
    }
    .ziquConItem span:nth-of-type(1){
        font-size: .12rem;
        color:#7b797b;
        margin-bottom: .05rem;
    }
    .ziquConItem span:nth-of-type(2){
        font-size: .12rem;
        border: 1px solid #ade3ff;
        color:#00a6ff;
        padding: .01rem;
        border-radius: 5px;
        margin-top: .05rem;
    }
</style>