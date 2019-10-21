<template>
    <div class="brand">
        <router-link to="/orders"><img id="logo" src="../../../../static/img/vanguard/van_logo.jpg"></router-link>

        <div class="brandText">
            
            <router-link to="/orders">  
                <div class="name">            
                    <span>华润万家便利超市(...<img src="../../../../static/img/vanguard/next.png"></span>    
                </div>            
            </router-link>
        
        
            <router-link to="/orders">
                <div class="promise">
                    <img src="../../../../static/img/vanguard/brand.jpg">
                    <img src="../../../../static/img/vanguard/delivery.jpg">
                </div>
            </router-link>
           

        </div>      

        <router-link to="/orders"><img class="score" src="../../../../static/img/vanguard/score.jpg"></router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.brand{
    width:96%;
    /* height:2rem; */
    margin:0 2%;
    /* background-color:#8a995e; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:.4rem;
}
#logo{
    width:.7rem;
    height:.7rem;
}
.brandText{
    display:flex;
    flex-direction: column;
    justify-content: space-around;  
    height:1rem;
    /* background-color: orange; */
}
.name>span{
    height: .3rem;
    font-size:.2rem;
    color: #ffffff;
    /* line-height: .2rem; */
    /* text-indent: .2rem; */
    /* background-color: pink; */
    display:block
}
.name>span>img{
    width:.2rem;
    height:.2rem;
    display: inline-block;

}
.promise{
    display: flex;
    justify-content: flex-start;
    /* background-color: aquamarine; */
}
.promise>img{
    height:.2rem;
    margin-right:.1rem;
}
.score{
    display: block;
    width:.4rem;
    height:.4rem;
}
</style>