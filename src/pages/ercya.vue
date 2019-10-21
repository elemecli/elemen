<template>

    <div class="cai">
       
           <ul class="caileft">
               <li><a href="#rexiao">热销</a></li>
               <li><a href="#youhui">优惠</a></li>
               <li><a href="#jiagong">国产水果</a></li>
           </ul>
           <!-- 占位 -->
           <div class="caileft1"></div>
    <div class="cy">
            
            <a name="rexiao" class="aa">热销</a>

    <div class="cairight" v-for="(v,a) in arr"  >
            <div class="tupian">
            <img :src="v.imgurl" />

            </div>
            <div class="xinxi">
                <h1>{{v.title}}</h1>
                <p>{{v.haoping}}</p>
                <span>{{v.jiage}}</span>
            </div>
    </div>
            <a name="youhui" class="aa">优惠</a>

     <div class="cairight" v-for="(v,i) in brr"  >

            <div class="tupian">
            <img :src="v.imgurl" />

            </div>
            <div class="xinxi">
                <h1>{{v.title}}</h1>
                <p>{{v.haoping}}</p>
                <span>{{v.jiage}}</span>
            </div>
    </div>
            <a name="jiagong" class="aa">国产水果</a>

     <div class="cairight" v-for="(v,b) in crr" >

            <div class="tupian">
            <img :src="v.imgurl" />

            </div>
            <div class="xinxi">
                <h1>{{v.title}}</h1>
                <p>{{v.haoping}}</p>
                <span>{{v.jiage}}</span>
            </div>
    </div>
    </div> 
</div> 
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {imgurl:"../../static/cyimg/18.jpg",title:"进口香蕉1000g",haoping:"月售33份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/19.jpg",title:"西柚400g",haoping:"月售25份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/20.jpg",title:"越南白肉火龙果",haoping:"月售19份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/21.jpg",title:"福建蜜柚1个",haoping:"月售18份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/22.jpg",title:"西柚",haoping:"月售13份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/23.jpg",title:"国产红提",haoping:"月售13份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/24.jpg",title:"石榴",haoping:"月售10份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/25.jpg",title:"越南红肉火龙果",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/26.jpg",title:"河北鸭梨",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/27.jpg",title:"国产猕猴桃",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/28.jpg",title:"皇冠梨",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/29.jpg",title:"国产香蕉",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
            ],
            brr:[
                
                 {imgurl:"../../static/cyimg/18.jpg",title:"进口香蕉1000g",haoping:"月售33份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/19.jpg",title:"西柚400g",haoping:"月售25份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/20.jpg",title:"越南白肉火龙果",haoping:"月售19份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/21.jpg",title:"福建蜜柚1个",haoping:"月售18份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/22.jpg",title:"西柚",haoping:"月售13份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/23.jpg",title:"国产红提",haoping:"月售13份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/24.jpg",title:"石榴",haoping:"月售10份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/25.jpg",title:"越南红肉火龙果",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/26.jpg",title:"河北鸭梨",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/27.jpg",title:"国产猕猴桃",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/28.jpg",title:"皇冠梨",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/29.jpg",title:"国产香蕉",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
            ],
            crr:[
                   
                {imgurl:"../../static/cyimg/18.jpg",title:"进口香蕉1000g",haoping:"月售33份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/19.jpg",title:"西柚400g",haoping:"月售25份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/20.jpg",title:"越南白肉火龙果",haoping:"月售19份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/21.jpg",title:"福建蜜柚1个",haoping:"月售18份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/22.jpg",title:"西柚",haoping:"月售13份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/23.jpg",title:"国产红提",haoping:"月售13份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/24.jpg",title:"石榴",haoping:"月售10份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/25.jpg",title:"越南红肉火龙果",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/26.jpg",title:"河北鸭梨",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/27.jpg",title:"国产猕猴桃",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/28.jpg",title:"皇冠梨",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
                {imgurl:"../../static/cyimg/29.jpg",title:"国产香蕉",haoping:"月售30份 好评率100%",jiage:"¥3.58"},
            ],
        }
    }
}
</script>
<style scoped>
.cai{
    width: 100%;
    display: flex;
}
.caileft{
    width: 20%;
    font-size: 0.12rem;
    line-height: 0.2rem;
    text-align: center;
    position:fixed;
    left:0;
    top:1.44rem;
    background-color:#fff;
}
.aa{
    font-size: 0.12rem;
    color: gray;
    line-height: 0.2rem;
}
.caileft1{
    width:20%;
}
.caileft li{
    height: .4rem;
    /* line-height: .4rem; */
}
.caileft a{
    text-decoration: none;
    color: gray;
    display: block;
 

}
.caileft a:hover{
    color:black;
}
.cy{
    flex-direction: column;
    width: 80%;
    font-size: 0;
}
.cairight{
    width:100%;
    display: flex;
    margin: 0 auto;
}
.tupian{
    width: 35%;

}
.tupian img{
    width: 0.92rem;
    height: 0.92rem;
    display: block;
}
.xinxi{
    width: 65%;
    font-size: 0;
}
.xinxi h1{
    font-size: 0.14rem;
}
.xinxi p{
    font-size: 0.1rem;
    color:lightgray;
    margin-top:0.1rem;
    margin-bottom: 0.2rem;
}
.xinxi span{
    font-size: 0.12rem;
    color: red;
    /* margin-top: 0.2rem; */
}
</style>