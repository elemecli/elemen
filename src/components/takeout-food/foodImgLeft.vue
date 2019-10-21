<template>
    <router-link :to="{path:'/yk/ykdiancan',query:{resname:contitle}}">
         <div class="foodAllCon">
        <div class="left">
            <img :src="imgsrc" alt="">
        </div>
        <div class="right">
            <div class="titleDiv">
                <span>{{contitle}}</span>
                <span class="iconfont">&#xe76a;</span>
            </div>
            <div class="numDiv">
                <span class="iconfont">&#xe6b0;{{score}}</span>
                <span>月售<span>{{num}}</span></span>
            </div>
            <div class="noteDiv">
                <div class="noteLeft">
                    <span>起送￥{{noteone}}</span>
                    <span>配送￥{{notetwo}}<span class="notethree">￥{{notethree}}</span></span>
                </div>
                <div class="noteRight">
                    <span class="time">{{time}}分钟</span>
                    <span class="distance">{{distance}}km</span>
                </div>
            </div>
            <div class="intro">
                <span v-for="(v,i) in intro" :key="i">{{v}}</span>
            </div>
            <div class="tipDiv">
               <div class="tips">
                    <span v-for="(v,i) in tips.slice(0,3)" :key="i">{{v}}</span>
                </div> 
                <span class="iconfont">&#xe6b9;</span>
            </div>
            
        </div>
    </div>
    
    </router-link>
   
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props:["imgsrc","contitle","score","num","noteone","notetwo","notethree","time","distance","intro","tips"]
    }
</script>

<style scoped>
    .foodAllCon{
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding:.16rem 0;
        font-size:14px;
    }
    .foodAllCon>.left{
        margin-left:.12rem;
    }
    .foodAllCon>.left>img{
        width:.8rem;
        height:.8rem;
    }
    .foodAllCon>.right{
        width:70%;
        margin-right:.12rem;
    }
    .foodAllCon>.right>.titleDiv{
        width:100%;
        height:.16rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size:.16rem;
        color:#000;
        font-weight:bolder;
        white-space: nowrap;
        overflow: hidden;
    }
    .foodAllCon>.right>.numDiv{
        width:100%;
        height:.3rem;
        line-height:.3rem;
        font-size:14px;
    }
    .foodAllCon>.right>.numDiv>span:first-of-type{
        color:#ed6d2d;
    }
    .foodAllCon>.right>.numDiv>span:last-of-type{
        color:#666666;
        margin-left:.1rem;
    }
    .foodAllCon>.right>.noteDiv{
        width:100%;
        height:.14rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        font-size:12px;
        color:#666666;
    }
    .foodAllCon>.right>.noteDiv .notethree{
        color:#b2b2b2;
        text-decoration: line-through;
    }
    .foodAllCon>.right>.intro{
        margin:.1rem 0;
        width:100%;
        white-space: nowrap;
        overflow: hidden;
    }
    .foodAllCon>.right>.intro>span{
        height:.16rem;
        line-height:.16rem;
        /* padding:0 .05rem; */
        background-color:#fdf4ec;
        font-size:12px;
        color:#ed792f;
        border-radius:.01rem;
        margin-left:.03rem;
    }
    .foodAllCon>.right>.intro>span:first-of-type{
        margin-left:0;
    }
    .foodAllCon>.right>.tipDiv{
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
    .foodAllCon>.right>.tipDiv>.tips{
        width:80%;
        white-space: nowrap;
        overflow: hidden;
    }
    .foodAllCon>.right>.tipDiv>.tips>span{
        height:.16rem;
        line-height:.16rem;
        padding:0 .05rem;
        border:1px solid #f7cbc3;
        font-size:12px;
        color:#ec654e;
        border-radius:.01rem;
        margin-left:.03rem;
    }
    .foodAllCon>.right>.tipDiv>span:first-of-type{
        margin-left:0;
    }
</style>