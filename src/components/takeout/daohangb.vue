<template>
    <div class="daohang">
        <div class="daohangItem" v-for="(v,i) in arr" :key="i">
            <a href="#">
                <img :src="v.imgurl" /><br>
                <span>{{v.name}}</span>
            </a>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                        
                {"name":"夜宵","imgurl":"../../../static/wmimg/16.jpg"},
                {"name":"素食简餐","imgurl":"../../../static/wmimg/17.jpg"},
                {"name":"汉堡披萨","imgurl":"../../../static/wmimg/18.jpg"},
                {"name":"早餐预定","imgurl":"../../../static/wmimg/19.jpg"},
                {"name":"鸭脖卤味","imgurl":"../../../static/wmimg/20.jpg"},
                {"name":"炸鸡炸串","imgurl":"../../../static/wmimg/26.jpg"},
                {"name":"买菜","imgurl":"../../../static/wmimg/27.jpg"},
                {"name":"鲜花绿植","imgurl":"../../../static/wmimg/28.jpg"},
                {"name":"包子粥店","imgurl":"../../../static/wmimg/29.jpg"},
                {"name":"烧烤海鲜","imgurl":"../../../static/wmimg/30.jpg"}
        
            ]
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