<template>
    <div class="classB">
        <div class="classcon" v-for="(v,i) in selectCon" :key="i">
            <div>
                <img :src="v.conImg|imgFilter" alt="">
                <span>{{v.conCon}}</span>
            </div>
            <span>{{v.conNum}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                selectCon:[
                            {conImg:"icon1.png",conCon:"全部",conNum:2896},
                            {conImg:"icon2.png",conCon:"简餐便当",conNum:2896},
                            {conImg:"icon3.png",conCon:"小吃炸串",conNum:2896},
                            {conImg:"icon4.png",conCon:"地方菜系",conNum:2896},
                            {conImg:"icon5.png",conCon:"面食粥点",conNum:2896},
                            {conImg:"icon1.png",conCon:"香锅冒菜",conNum:2896},
                            {conImg:"icon2.png",conCon:"轻食西餐",conNum:2896},
                            {conImg:"icon3.png",conCon:"日韩料理",conNum:2896},
                            {conImg:"icon4.png",conCon:"汉堡披萨",conNum:2896}
                        ]
            }
        },
        filters:{
            imgFilter:(imgsrc)=>{
                return "../../../static/img/takeout-food/"+imgsrc;
            }
        }
    }
</script>

<style scoped>
    .classB{
        width:100%;
        height:100%;
        font-size:12px;
    }
    .classcon{
        width: 100%;
        height:.4rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .classcon>div{
        width:50%;
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .classcon>div>img{
        width:20%;
        margin:.1rem;
    }
    .classcon>span{
        width:.3rem;
        height:.16rem;
        line-height:.16rem;
        text-align: center;
        border:.005rem solid #999;
        border-radius:.1rem;
        padding:.01rem;
    }
</style>