<template>
    <div class="foodAll">
        <div class="foodNav">
            <div class="allNav">
                <div class="left">
                    <van-dropdown-menu class="sort">
                        <van-dropdown-item v-model="value1" :options="option1" style="font-size:14px"/>
                    </van-dropdown-menu>
                    <!-- <span class="iconfont">综合排序&#xe6b9;</span> -->
                    <span class="sort" @click="distanceSort(1)">距离</span>
                    <span class="sort" @click="saleSort(2)">销量</span>
                </div>
                <div class="right">
                    <span class="iconfont">筛选&#xe606;</span>
                </div>
            </div>
            <div class="nav">
                <span>津贴联盟</span>
                <span>满减优惠</span>
                <span>品质联盟</span>
                <span>配送费优惠</span>
            </div>
        </div>
        <div class="foodAllcon">
                <FoodImgLeft v-for="(v,i) in resData" :key="i" :imgsrc="v.resImg|imgfilter" :contitle="v.resName" 
                :num="v.monSale" :intro="v.resTags" :score="((Number(v.starLevel1)+Number(v.starLevel2)+Number(v.starLevel3))/3).toFixed(1)" :noteone="v.sendPrice" :notetwo="v.sendedPrice" :notethree="v.sendedRowPrice"
                :time="v.time" :distance="v.distance" :tips="v.resDiscount"></FoodImgLeft>
        </div>
    </div>
</template>

<script>
    import FoodImgLeft from '../../components/takeout-food/foodImgLeft'
    export default {
        data(){
            return{
                // 下拉
                value1: 0,
                option1: [
                    { text: '综合排序', value: 0 },
                    { text: '好评优先', value: 1 },
                    { text: '起送价最低', value: 2 },
                    { text: '配送最快', value: 3 },
                    { text: '配送费最低', value: 4 },
                    { text: '人均从低到高', value: 5 },
                    { text: '人均从高到低', value: 6 },
                    { text: '通用排序', value: 7 },
                ],


                resData:[],
                allNavFixed:true
            }
        },
        components:{
            FoodImgLeft
        },
        methods:{
            distanceSort(i){
                for(let i=0;i<$(".sort").length;++i){
                    $(".sort").eq(i).css({
                        "color":"#000"
                    })
                }
                $(".sort").eq(i).css({
                    "color":"#1989fa"
                })
                // this.resData.sort((a,b)=>{
                //     a.distance-b.distance
                // })
                this.axios({
                    method:"post",
                    url:"/apis/takeoutFood",
                }).then((ok)=>{
                    this.resData=ok.data.data.datas.resData;
                    this.resData.sort((a,b)=>{
                        return a.distance-b.distance
                    })
                    console.log(this.resData);
                })
            },
            saleSort(i){
                for(let i=0;i<$(".sort").length;++i){
                    $(".sort").eq(i).css({
                        "color":"#000"
                    })
                }
                $(".sort").eq(i).css({
                    "color":"#1989fa"
                })
                // this.resData.sort((a,b)=>{
                //     a.monSale-b.monSale
                // })
                this.axios({
                    method:"post",
                    url:"/apis/takeoutFood",
                }).then((ok)=>{
                    this.resData=ok.data.data.datas.resData;
                    this.resData.sort((a,b)=>{
                        return b.monSale-a.monSale
                    })
                    console.log(this.resData);
                })
            }
        },
        filters:{
            imgfilter:(imgsrc)=>{
                return "../../../static/restaurant/"+imgsrc;
            }
        },
        mounted(){
            // var param=new URLSearchParams;
            // param.append()
            this.axios({
                method:"post",
                url:"/apis/takeoutFood",
            }).then((ok)=>{
                this.resData=ok.data.data.datas.resData;
            })
        },
    }
</script>

<style scoped>
    .foodAll{
        width:100%;
    }
    .foodAll>.top>img{
        width:100%;
    }
    /* 导航 */
    .foodNav{
        width:100%;
        height:.95rem;
        position:sticky;
        top:0;
        left:0;
    }
    .allNav{
        width:100%;
        height:.5rem;
        line-height: .5rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        background-color:#fff;
        position: sticky;
        top:-.5rem;
        font-size:14px;
    }
    .allNav>div:first-of-type{
        width:1.95rem;
        font-size:0;
        margin-left:.12rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .allNav>div:last-of-type{
        width:.45rem;
        font-size:0;
        margin-right:.12rem;
    }
    .allNav span{
        font-size:14px;
    }
    .nav{
        width:100%;
        height:.45rem;
         display:flex;
        flex-direction: row;
        justify-content: space-between;
        /* position:sticky;
        top:0; */
        background-color:#fff;
    }
    .nav>span{
        width:22%;
        height:.3rem;
        background-color:#f3f3f3;
        border-radius:.04rem;
        font-size:12px;
        color:#000;
        text-align:center;
        line-height:.3rem;
    }
    .nav>span:first-of-type{
        margin-left:.1rem;
    }
    .nav>span:last-of-type{
        margin-right:.1rem;
    }
    .van-ellipsis{
        font-size:14px;
        color:#1989fa;
    }
</style>