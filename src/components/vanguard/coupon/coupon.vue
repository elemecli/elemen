<template>
    <div>
        <router-link to="/home">
            <div class="coupons">
                <span>领红包满49减5</span>
                <span>领红包满69减10</span>
                <span>部分9减2</span>
                <span>部分10减2</span>
            </div>
        </router-link>
        <router-link to="/home">
            <div class="couponImg">
                <img src="../../../../static/img/vanguard/coupon.jpg">
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.coupons{
    width:96%;
    margin:0 2%;
    /* background-color: darksalmon; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top:.1rem;
}
.coupons>span{
    font-size: .1rem;
    color:#d9685f;
    border:1px solid #eec4c0;
    display: block;
    margin-right: .1rem;
}
.couponImg{
    width:96%;
    margin:0 2%;
}
.couponImg>img{
    display: block;
    height:.2rem;
    margin-top:.05rem;

}
</style>