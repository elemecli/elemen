<template>
    <div class="daohang">
        <div class="daohangItem" v-for="(v,i) in storearr" :key="i">
            <router-link :to="v.route">
                <img :src="v.imgurl" /><br>
                <span>{{v.name}}</span>
            </router-link>
            <!-- <a href="#">
                <img :src="v.imgurl" /><br>
                <span>{{v.name}}</span>
            </a> -->
            
        </div>
    </div>
</template>
<script>
export default {
    
    created(){
        this.$store.dispatch("acta");
    },
    computed:{
        storearr(){
            return this.$store.state.arr
        }
    }
}
</script>
<style scoped>
    .daohang{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

    }
    .daohangItem{
        width: 18%;
        font-size: 0;
        text-align: center;
        margin-bottom: .1rem;
    }
    .daohangItem img{
        width: 100%;
        margin-bottom: .05rem;
    }
    .daohangItem a span{
        font-size: .12rem;
        color:#636563;
    }
</style>