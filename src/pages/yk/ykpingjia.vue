<template>
    <div id="boss">
        <div class="score">
            <div class="one">
                <!-- <p>{{arr[0].nums}}</p> -->
                <p>{{((Number(resData.starLevel1)+Number(resData.starLevel1)+Number(resData.starLevel1))/3).toFixed(1)}}</p>
            </div>
            <div class="two twoa">
                <p>商家评分</p>
                <van-rate
                    v-model="value"
                    :size="6"
                    color="yellow"
                    void-icon="star"
                    void-color="#eee"
                />
            </div>
            <div class="three two">
                <p>味道</p>
                <!-- <span>{{arr[0].nums}}</span> -->
                <span>{{resData.starLevel1}}</span>
            </div>
            <div class="four two three">
                <p>包装</p>
                <!-- <span>{{arr[0].nums}}</span> -->
                <span>{{resData.starLevel2}}</span>
            </div>
            <div class="five two ">
                <p>配送</p>
                <!-- <span>{{arr[0].nums}}</span> -->
                <span>{{resData.starLevel3}}</span>
            </div>
        </div>
        <div class="boxs"></div>
        <div class="boxsx">
            <div class="simllbox" v-if="acc[0]">
                <div class="one oneb"><span>全部 {{acc[0].numa}}</span></div>
                <div class="one"><span>最新</span></div>
                <div class="one"><span >好评 {{acc[0].numa}}</span></div>
                <div class="one onec"><span>差评 {{acc[0].numb}}</span></div>
                <div class="one"><span>有图 {{acc[0].numc}}</span></div>
                <div class="one"><span>味道好 {{acc[0].numd}}</span></div>
                <div class="one"><span>分量足 {{acc[0].nume}}</span></div>
                <div class="one"><span>送货快 {{acc[0].numf}}</span></div>
                <div class="one"><span>包装精美 {{acc[0].numg}}</span></div>
                <div class="one"><span>物美价廉 {{acc[0].numh}}</span></div>
                <div class="one onec"><span>不好吃 {{acc[0].numi}}</span></div>
                <div class="one"><span>服务不错 {{acc[0].numj}}</span></div>
                <div class="one onec"><span>分量一般 {{acc[0].numk}}</span></div>
            </div>
        </div>
        <div class="boxs boxss"></div>
        <div class="usertalk" v-for="(v,i) in abb" :key="i">
            <div class="left">
                <img :src="v.imgsrca|imgfilter">
            </div>
            <div class="right">
                <div class="one">
                    <div class="asdf">
                        <p class="onea">{{v.names}}</p>
                        <img :src="v.members|imgfilter">
                    </div>
                    <p class="oneb">{{v.times}}</p>
                </div>
                <div class="two">
                    <van-rate
                    v-model="value"
                    :size="6"
                    color="yellow"
                    void-icon="star"
                    void-color="#eee"
                    />
                    <span>超赞</span>
                </div>
                <p class="three">{{v.texta}}</p>
                <div class="imgas">
                    <img :src="v.imgsrcb|imgfilter">
                </div>
                <div class="four">
                    <p>商家回复：{{v.textb}}</p>
                    <div class="five"></div>
                </div>
            </div>
        </div>
    </div>
</template>
numa
<script>
    export default {
        data(){
            return{
                resData:"",
                acc:[],
                abb:[],
                value: 5
            }
        },
        created(){
            var param=new URLSearchParams;
            param.append("resname",this.$route.query.resname)
            this.axios({
                method:"post",
                url:"/apis/yk",
                data:param
            }).then((ok)=>{
                this.resData=ok.data.data.datas.resData;
                console.log(this.resData);
            })

            this.axios.get("/apis/userEval").then((ok)=>{
                this.acc=ok.data.scoretwo,
                this.abb=ok.data.scorethree
            })
        },
        components:{
            
        },
        // data(){
        //     return{
        //         arr:[],
        //         acc:[],
        //         abb:[],
        //         value: 5
        //     }
        // },
        filters:{
            imgfilter(val){
                return "../../../static/pingjia/"+val;
            }
        },
        methods:{
            
        },
        // created(){
        //     this.axios.get("/apis/home").then((ok)=>{
        //         this.arr=ok.data.scoreone,
        //         this.acc=ok.data.scoretwo,
        //         this.abb=ok.data.scorethree
        //     })
        // }
    }
</script>

<style scoped>
.score{
    height:.8rem;
    display: flex;
    font-size: .12rem;
    margin:.1rem .2rem;
}
.score .one p{
    font-size: .36rem;
    font-weight: 600;
    color:#fa6700;
    margin-top:.18rem;
    margin-right: .1rem;
}
.score .two{
    margin-top:.18rem;
    text-align: center;
}
.score .twoa{
    margin-right: .1rem;
}
.score .two p{
    font-size: .12rem;
    color:#666;
    margin-bottom: .06rem;
}
.score .two span{
    font-size: .24rem;
    color:#666;
}
.score .three{
    margin-right: .2rem;
}
.score .five{
    padding:0 .16rem;
    border-left: 1px solid #ccc;
}

.boxs{
    width:100%;
    height:.12rem;
    background-color: #f7f7f7;
}

.simllbox{
    display: flex;
    flex-wrap: wrap;
    margin-top: .1rem;
    margin-left: .1rem;
    padding-bottom: .1rem;
    border-bottom: 1px dashed #ccc;
}
.simllbox .one{
    height:.3rem;
    line-height: .3rem;
    font-size: .12rem;
    padding:0 .12rem;
    background-color: #ecf4ff;
    border-radius: .04rem;
    margin-right: .1rem;
    margin-bottom: .12rem;
}
.simllbox .one span{
    color:#737d87;
}
.simllbox .oneb{
    background-color: #2195fc;
}
.simllbox .oneb span{
    color:#fff;
}
.simllbox .onec{
    background-color: #f6f6f6;
}
.simllbox .onec span{
    color:#ababab;
}

.boxss{
    margin:.1rem 0;
}

.usertalk{
    display: flex;
    font-size: 0;
    margin:0 .12rem;
}
.usertalk .left img{
    width:.4rem;
    height:.4rem;
    margin-right: .1rem;
}
.usertalk .right{
    width:100%;
}
.usertalk .right .one{
    display: flex;
    justify-content:space-between
}
.asdf{
     display: flex;
}
.usertalk .right .onea{
    font-size: .15rem;
    margin-right: .1rem;
}
.usertalk .right .one img{
    width:.75rem;
    height:.18rem;
}
.usertalk .right .oneb {
    font-size: .12rem;
    color:#bbb;
}
.usertalk .right .two{
    margin:.08rem 0;
}
.usertalk .right .two span{
    font-size:.12rem;
    color:#fa6700;
    margin-left: .06rem;
}
.usertalk .right .three{
    color:#323232;
    font-size: .15rem;
    margin-bottom: .12rem;
}
.usertalk .right .imgas img{
    width:1.5rem;
    height:1.5rem;
}
.usertalk .right .four{
    width:100%;
    height:.4rem;
    background-color: #fafafa;
    border-radius: .04rem;
    border:1px solid #ccc;
    margin:.1rem 0;
    margin-top: .2rem;
    position: relative;
}
.usertalk .right .four p{
    font-size: .12rem;
    color:#656565;
    margin:.04rem .1rem;
}
.usertalk .right .five{
    width:0;
    height:0;
    border:.1rem solid transparent;
    border-bottom-color:#fafafa;
    position: absolute;
    left:.15rem;
    top:-.2rem;
}
</style>