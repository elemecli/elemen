<template>
    <div class="login">
        <div class="head">
            <a href="#"><img src="../../../static/img/icon/jiantou.png" alt=""></a><span>登录</span>
        </div>
        <div class="nar">
            <input type="text" placeholder="手机号" v-model="inputa"><button class="code" @click="fun()">获取验证码</button>
            <input type="text" placeholder="验证码" >
            <p>温馨提示：未注册饿了么的手机账号，登录时自动注册，且代表您已经同意<a href="#" style="color:#0088cc">《用户服务协议》</a><a href="#" style="color:#0088cc">《隐私政策》</a></p>
            <button class="btn">登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        components:{
        },
        data(){
            return{
                inputa:"",
                
            }
        },
        methods:{
            fun(){
                var tel = /^1(3|5|7|8)\d{9}$/
		        if(!tel.test(this.inputa)){
                    alert("请输入正确的手机号");
		        }
            }
            

        }
    }
</script>

<style scoped>
    .nar{
        font-size: 0.16rem;
    }
    .head{
        background-color: #0096ff;
        height: 0.6rem;
        font-size: 0.2rem;
        line-height: 0.6rem;
    }
    img{
        width: 0.3rem;
        vertical-align:middle;
        margin-left: 0.1rem;
    }
    .head span{
        margin-left: 0.5rem;
        color: white;
    }
    .nar{
        width: 100% ;
        height: 6.06rem;
        background-color: #f5f5f5;
    }
    input{
        width: 100%;
        height: 0.5rem;
        text-indent: 0.1rem;
    }
    .code{
        width: 1.1rem;
        height: 0.4rem;
        color: #fff;
        position: absolute;
        top: 0.66rem;
        right: 0.1rem;
        background-color: #2395ff;
        border: 0;
        border-radius: 0.03rem;
    }
    input::-webkit-input-placeholder{
        color:#939393;
    }
    p{
        font-size: 0.14rem;
        color: #5d5d5d;
        margin: 0.25rem 0.1rem;
    }
    .btn{
        width: 95%;
        height: 0.4rem;
        color: #fff;
        background-color: #4dc060;
        border: 0;
        border-radius: 0.03rem;
        margin-left: 2.5%;
    }
</style>