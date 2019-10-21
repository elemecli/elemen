<template>
    <div class="takeoutFood">
        <div class="foodTop">
            <!-- header -->
            <div class="header">
                <router-link to="/takeout">
                    <span class="iconfont" v-html="t"></span>
                </router-link>
                <span>美食</span>
                <span class="iconfont">&#xe6a2;</span>
            </div>
            <!-- nav -->
            <div class="nav">
                <div class="navCon">
                    <router-link to="/takeoutFood/all" :foodAllData="foodsData">全部</router-link>
                    <router-link to="/takeoutFood/noodles">面食粥点</router-link>
                    <router-link to="/takeoutFood/boxRice">简餐便当</router-link>
                    <router-link to="/takeoutFood/hamburg">汉堡披萨</router-link>
                    <router-link to="/takeoutFood/spicy">香锅冒菜</router-link>
                    <router-link to="/takeoutFood/snacks">小吃炸串</router-link>
                    <router-link to="/takeoutFood/local">地方菜系</router-link>
                    <router-link to="/takeoutFood/japan">日韩料理</router-link>
                    <router-link to="/takeoutFood/light">轻食简餐</router-link>
                </div>
                
                <span class="iconfont" @click="selectBool=!selectBool">&#xe6b9;</span>
            </div>
        </div>
        <div class="foodTopPos">
        </div>

        <!-- 导航下拉时的遮罩层 -->
            <div class="mask" v-show="selectBool"></div>
        <!--导航下拉  -->
            <div class="navSelect"  v-show="selectBool">
                <div class="navSelectTop">
                    <span>请选择分类</span>
                    <span class="iconfont" @click="selectBool=!selectBool">&#xe6b9;</span>
                </div>
                <div class="navSelectBot">
                    <div class="left">
                        <div class="leftCon">
                            <p v-for="(v,i) in navSelect" :key="i" @click="select(i)" class="selectP"><span class="selectSpan">{{v.selectTit}}</span><span>{{v.selectNum}}</span></p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="rightCon">
                            <keep-alive>
                                <component :is="selectname"></component>
                            </keep-alive>
                        </div>
                    </div>
                </div>
            </div>
        <!-- 一级路由的内容 -->
        <div class="content">
            <router-view></router-view>
        </div>        
    </div>
</template>

<script>
    import ClassA from '../components/takeout-food/classA'
    import ClassB from '../components/takeout-food/classB'
    import ClassC from '../components/takeout-food/classC'
    export default {
        data(){
            return{
                t:"&#xe665;" ,
                foodsData:[],
                selectname:"ClassA",
                selectBool:false,
                navSelect:[
                    {
                        selectname:"ClassA",
                        selectTit:"美食",
                        selectNum:2896,
                    },
                    {
                        selectname:"ClassB",
                        selectTit:"快餐便当",
                        selectNum:1785,
                    },
                    {
                        selectname:"ClassC",
                        selectTit:"特色菜系",
                        selectNum:627,
                    },
                ]
            }
        },
        components:{
            ClassA,
            ClassB,
            ClassC,
        },
        methods:{
            select(i){
                this.selectname=this.navSelect[i].selectname;
                $(".selectP").eq(i).css({
                    "background-color":"#fff",
                    "border-right":"1px solid #fff",
                    }
                ).siblings().css({
                     "background-color":"#fcfcfc",
                     "border-right":"1px solid #eee"
                })
                for(let i=0;i< $(".selectSpan").length;++i){
                    $(".selectSpan").eq(i).css({
                     "border-left":".02rem solid  #fff"
                    }
                )
                }
                $(".selectSpan").eq(i).css({
                     "border-left":".02rem solid #0085ff"
                    }
                )
            }
        }    
    }
</script>

<style scoped>
    .takeoutFood{
        width:100%;
        height:6.67rem;
        display:flex;
        flex-direction: column;
    }
    .foodTop{
        width:100%;
        height:.8rem;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        position:fixed;
        top:0;
    }
    .foodTopPos{
        width:100%;
        height:.8rem;
    }
    .foodTop .iconfont{
        font-size:.2rem;
        color:#fff;
    }
    /* 头部 */
    .header{
        width:100%;
        height:.45rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        font-size:.19rem;
        color:#fff;
    }
    .header>a{
        margin-left:.2rem;
    }
    .header>span{
        margin-right:.2rem;
    }
    /* nav */
    .nav{
        width:100%;
        height:.35rem;
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-items:center;
        font-size:14px;
    }
    .nav>.iconfont{
        width:10%;
        text-align:center;
    }
    .nav>.navCon{
        width:90%;
        flex:1;
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items:center;
        overflow-x: scroll;
    }
    .nav>.navCon>a{
        line-height:.25rem;
        color:#bde2fc;
        flex-shrink:0;
        margin:0 .15rem;
    }
    .nav>.navCon>a:first-of-type{
        margin-left:.18rem;
    }
    .nav>.navCon>.router-link-active{
        color:#fff;
        border-bottom:.04rem solid #fff;
    }
    /* 导航下拉 */
    .navSelect{
        width:100%;
        height:2rem;
        position:fixed;
        top:.4rem;
        background-color:#fff;
        font-size: 14px;
        /* display:none; */
        z-index: 100;
    }
    .navSelectTop{
        width:100%;
        height:.4rem;
        background-color:#f5f5f5;
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
    }
    .navSelectTop>span:first-of-type{
        margin-left:.1rem;
    }
    .navSelectTop>span:last-of-type{
        margin-right:.1rem;
        color:#999999;
    }
    .navSelectBot{
        width:100%;
        font-size:12px;
        display:flex;
        flex-direction: row;
    }
    .navSelectBot>.left{
        width:30%;
        height:1.6rem;
        display:flex;
        flex-direction:column;
    }
    .navSelectBot>.left>.leftCon{
        flex:1;
        overflow-y:scroll;
        background-color:#fcfcfc;
    }
    .navSelectBot>.left>.leftCon>p{
        width:99%;
        height:.4rem;
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;
        border-bottom:.005rem solid #eeeeee;
        border-right:1px solid #eeeeee;
        font-size:12px;
    }
    .navSelectBot>.left>.leftCon>p>span:first-of-type{
        padding-left:.1rem;
    }
    .navSelectBot>.left>.leftCon>p:first-of-type>span:first-of-type{
         border-left:.02rem solid #0085ff;
    }
    .navSelectBot>.left>.leftCon>p>span:last-of-type{
        width:.3rem;
        height:.14rem;
        line-height:.14rem;
        text-align:center;
        margin-right:.05rem;
        border:.005rem solid #999;
        border-radius:.1rem;
        padding:.01rem;
    }
    .navSelectBot>.right{
        width:70%;
        height:1.6rem;
        display:flex;
        flex-direction:column;
        margin-right:.1rem;
    }
    .navSelectBot>.right>.rightCon{
        flex:1;
        overflow-y:scroll;
    }
    /* 主体内容 */
    .content{
        flex:1;
        overflow-y: scroll;
    }
    .mask{
        width:100%;
        height:100%;
        background-color:#000;
        opacity: .5;
        position:fixed;
        top:.8rem;
        z-index:99;
    }
</style>