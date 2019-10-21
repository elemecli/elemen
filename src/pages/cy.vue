<template>
<div class="cytop">
    <div class="cyhead">
        <div class="header">
            <img src="../../static/cyimg/houtui.png">
            <h1>时令蔬菜</h1>
            <img src="../../static/cyimg/sousuo.png">
        </div>
        <div class="nav">
            
                <router-link :to="v.dizhi" v-for="(v,i) in drr" :key="i" class="nar">
                    <img :src="v.imgurl" />
                    <br>
                    <span>{{v.title}}</span>
                </router-link>
        
            
            
        </div>
    </div>
    <div class="cynav"></div>
    
    <div class="caicon">
        <router-view></router-view>
    </div>
    
</div>

</template>
<script>

export default {
        data(){
            return{
                drr:[
                    {title:"新鲜水果",imgurl:"../../static/cyimg/1.jpg",dizhi:"/cy/ercya"},
                    {title:"时令蔬菜",imgurl:"../../static/cyimg/2.jpg",dizhi:"/cy/ercyb"},
                    {title:"肉蛋家禽",imgurl:"../../static/cyimg/3.jpg",dizhi:"/cy/ercyc"},
                    {title:"冷藏冷冻",imgurl:"../../static/cyimg/4.jpg",dizhi:"/cy/ercyd"},
                    {title:"牛奶酸奶",imgurl:"../../static/cyimg/5.jpg",dizhi:"/cy/ercye"},
                    {title:"水饮冲调",imgurl:"../../static/cyimg/10.jpg",dizhi:"/cy/ercyf"},
                    {title:"中外名酒",imgurl:"../../static/cyimg/11.jpg",dizhi:"/cy/ercyg"}
                   
                ]
            }
        }
}
</script>
<style scoped>
.cytop{
    width: 100%;
    height:6.67rem;
    background-color: white;
    display: flex;
    flex-direction: column;
}
.cyhead{
    width:100%;
    height:1.44rem;
    background-color: #fff;
    position:fixed;
    top:0;
}
.cynav{
    width:100%;
    height:1.44rem;
}
.header{
    width: 100%;
    height: .2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-top:0.2rem;
}
.header img{
    display: block;
    width:0.2rem;
    height: 0.2rem;
}
.header h1{
    font-size: 0.16rem;
}
.nav{
    width: 100%;
    height:.66rem;
    display: flex;
    overflow-x:scroll;
    margin-top: 0.2rem;
}

.nav img{
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 auto;
}
.nav span{
    font-size: 0.12rem;
}
.nar{
    width: 20%;
    font-size: 0px;
    text-align: center;
    flex-shrink: 0;
}
.caicon{
    flex:1;
    overflow-y: scroll;
}
</style>