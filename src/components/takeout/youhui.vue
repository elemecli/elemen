<template>
    <div class="youhui">
        <h3>{{this.title}}</h3>
        <div class="youhuiTop">
            <a href="#" :class="v.aclassname" v-for="(v,i) in arr" :key="i">
            <span :class="v.spanclassname">{{v.biaoti}}</span>
            <span class="neirong">
                <span>{{v.neirong1}}</span>
                <span>{{v.neirong2}}</span>
            </span>
            </a>  
        </div>
        <div class="youhuiBottom">
            <div v-for="(v,i) in arr2" :key="i" :class="v.divclassname">
                <h4>{{v.title}}</h4>
                <p>{{v.connect}}</p>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"优惠专区",
            arr:[
                {aclassname:"youhuiTopLeft",biaoti:"限时秒杀",neirong1:"最低8元红包",neirong2:"配送费最低0元",spanclassname:"biaotia"},
                {aclassname:"youhuiTopRight",biaoti:"会员专享",neirong1:"午餐9.9元起",neirong2:"10点场限时疯抢中",spanclassname:"biaotib"}
            ],
            arr2:[
                {divclassname:"youhuiItema",title:"5折封顶",connect:"周三半价日"},
                {divclassname:"youhuiItemb",title:"大牌午餐",connect:"立减20起"},
                {divclassname:"youhuiItemc",title:"当季水果",connect:"低至9.9"},
                {divclassname:"youhuiItemd",title:"新店减配",connect:"超级新店日"},
            ]
        }
    }
}
</script>
<style scoped>
.youhui h3{
    font-size: .2rem;
    color:#313431;
    margin-bottom: .05rem;
}
.youhuiTop{
    display: flex;
    justify-content: space-between;
    margin-bottom: .05rem;
}
.youhuiTopLeft{
    background-color: pink;
    font-size: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    width: 49%;
    overflow: hidden;

}
.youhuiTopRight{
    background-color: yellow;
    font-size: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    width: 49%;
    overflow: hidden;

}
.biaotia{
    font-size: .14rem;
    background: #ff4121;
    border-radius: 5px;
    width: 50%;
    text-align: center;
    color:white;
    margin-top: -.02rem
}
.biaotib{
    font-size: .14rem;
    background: #4ac7ff;
    border-radius: 5px;
    width: 50%;
    text-align: center;
    color:white;
    margin-top: -.02rem
}
.neirong{
    font-size: .16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: white;
    border-radius: 5px;
    width: 90%;
    margin-bottom: .1rem
}
.neirong span:nth-of-type(1){
    text-align: center;
    color: #313431;
    font-weight: 700;
}
.neirong span:nth-of-type(2){
    text-align: center;
    color: #7b7d7b;
    font-size: .12rem;
}
.youhuiBottom{
    display: flex;
    justify-content: space-between;
}
.youhuiItema{
    width: 24%;
    height: .8rem;
    background-color: #4ac7ff;
}
.youhuiItemb{
    width: 24%;
    height: .8rem;
    background-color:#ff4121;
}
.youhuiItemc{
    width: 24%;
    height: .8rem;
    background-color: pink;
}
.youhuiItemd{
    width: 24%;
    height: .8rem;
    background-color: skyblue;
}
.youhuiBottom h4{
    font-size: .14rem;
    text-align: center;
    color:#313431;
}
.youhuiBottom p{
    font-size: .12rem;
    text-align: center;
    color:#848284;
}
</style>