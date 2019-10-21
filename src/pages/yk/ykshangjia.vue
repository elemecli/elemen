<template>
    <div>
        <div class="boxss">
        <h1 class="message">商家信息</h1>
        <p class="introduce">
            1.本店使用饿了么网上订餐，优先配送! 2.提前40分钟预订，用
            餐更及时! 3.投诉餐厅,请拨打饿了么市场经理: 15691887080
        </p>
        <div class="kongbai"></div>
        <div class="besmirch">
            <div class="besmirch-list">
                <p>商家名称</p>
                <!-- <span>{{arr[0].besmirchName}}</span> -->
                <span>{{resData.resName}}</span>
            </div>
            <div class="besmirch-list">
                <p>商家品类</p>
                <!-- <span>{{arr[0].besmirchPinglei}}</span> -->
                <span>{{resData.resType}}</span>
            </div>
            <div class="besmirch-list">
                <p>商家地址</p>
                <!-- <span>{{arr[0].besmirchDress}}</span> -->
                <span>{{resData.resAddress}}</span>
            </div>
            <div class="besmirch-list">
                <p>商家电话</p>
                <img class="besmirchImg" src="../../../static/pingjia/tu5.jpg">
            </div>
            <div class="besmirch-list">
                <p>营业时间</p>
                <!-- <span>00:00-23:59</span> -->
                <span>{{resData.resOnTime}}</span>
            </div>
        </div>
        <div class="kongbai"></div>
        <div class="besmirchFw">
            <h1 class="messageess">商家服务</h1> 
            <p><span>赔</span> 商家原因导致订单取消,赔付代金券</p>
            <p><span>保</span> 该商户食品安全已由国泰产险承担，食品安全有保障</p>
        </div>
        <div class="kongbai"></div>
        </div>
    </div>
</template>

<script>
    import FooterBar from '../../components/footerBar'
    export default {
        data(){
            return{
                resData:""
            }
        },
        components:{
            FooterBar
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
        },
        
        //  data(){
        //     return{
        //         arr:[]
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
        //         this.arr=ok.data.messages
        //     })
        // },
    }
</script>

<style scoped>
    .boxss{
        margin-bottom: .8rem;
    }
    .message{
        width: 90%;
        font-size: 0.18rem;
        margin: 0 auto;
        color: black;
        line-height: 0.6rem;
    }
    .introduce{
        width: 90%;
        font-size: 0.14rem;
        margin: 0 auto;
        color: #a4a4a4;
    }
    .kongbai{
        width: 100%;
        height: 0.16rem;
        background-color: #f6f6f6;
    }
    .besmirch{
        width: 90%;
        margin: 0 auto;
    }
    .besmirch-list{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.6rem;
        border-bottom: 1px solid #f0f0f0; 
    }
    .besmirch-list p{
        font-size: 0.16rem;
        color: black;
        font-weight: 500;
    }
    .besmirch-list span{
        font-size: 0.14rem;
        color: #a4a4a4; 
    }
    .besmirch-list:last-child{
        border:0;
    }
    .besmirchImg{
        width: 0.7rem;
        height: 0.24rem;
        display: block;
    }
    .besmirchFw{
        width: 90%;
        margin: 0 auto;
    }
    .messageess{
        font-size: 0.18rem;
        color: black;
        line-height: 0.6rem;
    }
    .besmirchFw>p{
        font-size: 0.12rem;
        color: #a4a4a4;
        line-height: 0.3rem;
    }
    .besmirchFw>p>span{
        width: 0.15rem;
        height: 0.15rem;
        border: 1px solid #ededed;
    }
</style>