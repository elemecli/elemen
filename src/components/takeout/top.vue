<template>
    <div class="top">
        <a  class="topLeft" href="#">
            <img :src="obj.imgurla">
            <span>{{this.obj.dizhi}}</span>
            <img :src="obj.imgurlb">
        </a>
        <div class="topRight">
            <a href="#"><img src="../../../static/wmimg/saoyisao.png"><span>扫码</span></a>
            <img :src="obja.imgurl"><span>{{this.obja.tem}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj:{dizhi:"立人科技园C座",imgurla:"../../../static/wmimg/dingwei.png",imgurlb:"../../../static/wmimg/xiangxia.png"},
            obja:{imgurl:"../../static/wmimg/tianqi.png",tem:"7℃"}
        }
    },
    
}
</script>
<style scoped>
    .top{
        font-size: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .1rem;
    }
    .top a{
        width: 50%;
        display: flex;
        align-items: center;
    }
    .topLeft span{
        font-size: .2rem;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 800;
        color:black;

    }
    .topLeft img:nth-of-type(1){
        width: .35rem;
        height: .35rem;
    }
    .topLeft img:nth-of-type(2){
        width: .1rem;
        height: .1rem;
    }
    .topRight{
        width: 35%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .topRight img{
        width: .2rem;
        height: .2rem;
    }
    .topRight span{
        font-size: .18rem;
        color:#10aaff;
    }
</style>