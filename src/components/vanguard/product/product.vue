<template>
    <div>
        <router-link to="/my">
            <div class="product" id="1111">
                <img class="productImg" src="../../../../static/img/vanguard/fruit_01.jpg">
                <div class="productDetail"> 
                    <h5 class="productName">润之家红肉蜜柚1600g</h5>
                    <div class="productBuy">
                        <div class="productTxt">
                            <img class="productInstore" src="../../../../static/img/vanguard/instore_1.jpg">
                            <p class="productPrice">￥666</p>
                        </div>
                        <div>
                            <img class="productAdd" src="../../../../static/img/vanguard/add.png">
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.product{
    width:100%;
    height:1.5rem;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.productImg{
    display:block;
    width:.8rem;
    height:.8rem;
}
.productDetail{
    width:60%;
    height:1rem;
    /* background-color: green; */
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: .1rem;
}
.productDetail>.productName{
    display: block;
    font-size: .2rem;
    color: #333333;   
}
.productBuy{
    width:90%;
    display:flex;
    flex-direction: row;
    /* background-color: pink; */
    justify-content: space-between;
}
.productTxt{
    display:flex;
    flex-direction: column;
    /* background-color: tomato; */
    justify-content: flex-end;

}
.productInstore{
    width:.5rem;
    height:.15rem;
}
.productPrice{
    display: block;
    font-size: .16rem;
    color: #ec6046;
}
.productAdd{
    display: block;
    width:.2rem;
    height:.2rem;
    bottom:0;
}
</style>