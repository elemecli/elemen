<template>
    <div>
        <router-link to="/vanguard">
            <div class="introduce">
                <img class="productImg" src="../../../../static/img/vanguard/intro_01.jpg">
                <h6 class="productName">{{productName}}</h6>
                <div class="productBuy">
                    <p class="productPrice">￥666</p>
                    <img class="productAdd" src="../../../../static/img/vanguard/add.png">
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props:{
        productName:String
    }
}
</script>
<style scoped>
.introduce{
    width:40%;
    height:2.3rem;
    display:flex;
    flex-direction: column;
    border: none;
    display: inline-block;
    margin:0 .1rem;
    /* background-color: green; */
}
.productImg{
    display:block;
    width:1.5rem;
    height:1.5rem;
}
.productName{
    display:block;
    font-size: .16rem;
    margin-top: .1rem;
    color: #333333;   
}
.productBuy{
    width:90%;
    display:flex;
    flex-direction: row;
    /* background-color: pink; */
    /* justify-content: space-around; */
    margin-top:.2rem;
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
    margin-left:.7rem;
}
</style>