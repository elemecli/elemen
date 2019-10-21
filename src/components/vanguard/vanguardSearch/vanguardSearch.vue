<template>
    <!-- <div> -->
        <div class="vanguardSearch">
            <router-link to="/my"><img src="../../../../static/img/vanguard/back.png"></router-link>
            <div class="search">
                <img id="searchImg" src="../../../../static/img/vanguard/search.png">
                <input id="searchInput" type="text" placeholder="请输入商品名称搜索">
            </div>
            <div>
                <img src="../../../../static/img/vanguard/collect.png">
            </div>
            <router-link to="/my"><img src="../../../../static/img/vanguard/andsoon.png"></router-link>
        </div>
    <!-- </div> -->
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.vanguardSearch{
    width:100%;
    height:.5rem;
    position: fixed;
    top:0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #96a46a;
    /* margin:0 2%; */
    z-index: 1;
}
.search{
    width:2.5rem;
    height:.3rem;
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    background-color: #ffffff;
    border-radius:.15rem;
    /* background-color: orange; */
}
#searchImg{
    width:.2rem;
    height: .2rem;
}
.vanguardSearch img{
    width:.35rem;
    display:block;
}
#searchInput{
    width:1.8rem;
    height:.3rem;
    display: block;
    font-size: .12rem;
    line-height: .2rem;
    text-indent: .1rem;
    /* flex:1; */
    /* background-color: pink; */
}
</style>