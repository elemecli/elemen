<template>
    <div class="footerItem">
        <router-link :to="route">
            <img :src="imgsrc" alt="" class="footerIcon">
            <span class="footerCon">{{con}}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        props:["con","route","imgsrc"]
    }
</script>

<style scoped>
    .foot>.footerItem>a{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items:center;
    }
    .foot>.footerItem>a>img{
        width:.25rem;
    }
    .foot>.footerItem>a>span{
        color:#666;
        font-size:10px;
        margin-top:.1rem;
    }
    .foot>.footerItem>.router-link-active>span{
        color:#3190e8;
    }
</style>