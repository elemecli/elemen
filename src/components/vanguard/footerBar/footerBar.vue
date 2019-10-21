<template>
    <div class="footerBar">
        <div class="shoppingCart">
            <p>未选购商品</p>
        </div>
        <div class="totalPrice">
            <p>差￥666起送</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.footerBar{
    width:100%;
    position: fixed;
    bottom: 0;
    height:.5rem;
    display:flex;
    flex-direction: row;
}
.shoppingCart{
    width:70%;
    background-color:#3d3d3f;
}
.shoppingCart>p{
    font-size: .14rem;
    color: #969696;
}
.totalPrice{
    width:30%;
    background-color: #696969;
}
.totalPrice>p{
    font-size: .16rem;
    color:#ffffff;
}
</style>