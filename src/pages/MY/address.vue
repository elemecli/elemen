<template>
    <div>
        <div id="head">
             <a href="user.vue" class="left"></a><span>收货地址</span><a href="newaddress.vue" class="right">新增地址</a>
        </div>
        <div class="nar">
            <Site v-for="(v,i) in site" :title="v.title" :con="v.con" :name="v.name" :key="i"></Site>
        </div>

    </div>
</template>

<script>
    import Site from "../../components/site";
    export default {
        components:{
                Site
        },
        data(){
            return{
                site:""
            }
        },
        created(){
            this.axios.get("/apis/home").then((ok)=>{
                console.log(ok.data.data)
                this.site=ok.data.data
                console.log(this.site)
            })
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
        position: absolute;
        left: 0.1rem;
    }
    #head span{
        position: absolute;
        left: 40%;
    }
    .right{
        position: absolute;
        right: 0.2rem;
    }
</style>