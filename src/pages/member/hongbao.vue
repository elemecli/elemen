<template>
    <div class="hongbao">
        <div class="meiyou">
            
            <p><img src="../../../static/imgs/hongbao.gif" alt=""></p>
            <h3>亲，你的红包呢</h3>
            <router-link to="/my">返回</router-link>
            <!-- <button>返回</button> -->
        </div>
        <div class="you">

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.hongbao{
    font-size: 0.16rem;
}
.meiyou img{
    width: 70%;
}
.meiyou{
    text-align: center;
    margin-top: 1.8rem;
}
.meiyou button{
    border: none;
    background: greenyellow;
    font-size: 0.3rem;
    width: 1.5rem;
    padding: 0.1rem;
}
</style>