<template>
    <div>
        <div id="head">
             <a href="user.vue" class="left"></a><span>收货地址</span><a href="newaddress.vue" class="right">新增地址</a>
        </div>
            <img src="../../../static/img/icon/bg.png">
    </div>
</template>

<script>

    export default {
        components:{
            
        }
    }
</script>

<style scoped>
    #head{
        width: 100%;
        height: 0.4rem;
        background-color:#ffffff;
        font-size: 0.16rem;
        font-weight: 900;
        line-height: 0.4rem;
        position: relative;
        margin: 0.1rem 0;
    }
    .left{
        font-size: 0.32rem;
        position: absolute;
        left: 0.1rem;
    }
    span{
        position: absolute;
        left: 40%;
    }
    .right{
        position: absolute;
        right: 0.2rem;
    }
    img{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 6.2rem;
    }
</style>