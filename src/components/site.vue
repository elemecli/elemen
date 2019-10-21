<template>
    <div class="nar">
        <a href="#"><h1>{{title}}</h1><p>{{con}}</p><span>{{name}}</span></a>
    </div>
</template>

<script>
export default {
    props:["title","con","name","imgurl"]
}
</script>

<style scoped>
    .nar{
        font-size: 0;
        border-top: 0.01rem solid #999;
        padding-top: 0.2rem;
        margin-bottom: 0.2rem;
        background-image: url(../../static/img/icon/bianji.png) ;
        background-size:0.2rem;
        background-repeat: no-repeat;
        background-position: 3.4rem 0.4rem
    }
    
    h1{
        font-size: 0.16rem;
        color: #333;
        text-indent: 0.1rem;
    }
    p{
        font-size: 0.14rem;
        color: #333;
        text-indent: 0.1rem;
    }
    span{
        font-size: 0.16rem;  
        color: #999;
        margin-left: 0.1rem;      
    }
    
</style>