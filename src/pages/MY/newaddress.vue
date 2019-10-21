<template>
<div id="box">
    <div id="head">
        <a href="user.vue"></a><span class="address">新增地址</span>
    </div>
    <div>
        <div id="nar">
            <span class="front">联系人</span><input type="text" placeholder="姓名" class="name"><br>
        </div>
        <div class="sex">
            <span class="nan">先生</span><span class="nan">女士</span>
        </div>
        <div class="phone">
            <span class="front">电话</span><input type="text" placeholder="手机号码" class="name pho"><br>
        </div>
        <div class="site">
            <span class="front">地址</span><input type="text" placeholder="小区/写字楼/学校等" class="name pho"><br>
        </div>
        <div class="site">
            <span class="front">门牌号</span><input type="text" placeholder="10号楼5层501室222" class="name sect"><br>
        </div>
        <div class="tag">
             <span class="front">标签</span><span class="nan home">家</span><span class="nan">公司</span><span class="nan">学习</span>
        </div>
        <button class="btn">保存</button>
    </div>
</div>
    
</template>

<script>
    export default {
        components:{

        }
    }
</script>

<style scoped>
span{
    font-weight: 900;
}
#box{
        font-size: 0.16rem;

}
#head{
        width: 100%;
        height: 0.5rem;
        margin-top: 0.1rem;
        background-color:#ffffff;
        line-height: 0.4rem;
        position: relative;
    }
    a{
        position: absolute;
        left: 0.1rem;
    }
    .address{
        position: absolute;
        left: 40%;
    }
    #nar{
        height: 0.4rem;
        line-height: 0.5rem;
        margin-top: 0.1rem;
        border-top: 0.01rem solid #eeeeee;
        
    }
    .name{
        margin-left: 0.32rem;
    }
    input::-webkit-input-placeholder{
        color: #ccc;
    }
    .sex{
        width: 82%;
        height: 0.5rem;
        line-height: 0.5rem;
        margin-left:18%; 
        border-top: 0.01rem solid #eee
    }
    .nan{
        display: inline-block;
        width: 0.5rem;
        height: 0.3rem;
        line-height: 0.3rem;
        font-weight: 100;
        border: 0.01rem solid #eee;
        text-align: center;
        vertical-align: middle;
        margin: 0 0.1rem;
    }
    .phone{
        height: 0.5rem;
        line-height: 0.5rem;
        border-top: 0.01rem solid #eeeeee;
    }
    .pho{
        margin-left: 0.42rem;
    }
    .site{
        height: 0.5rem;
        line-height: 0.5rem;
        border-top: 0.01rem solid #eeeeee;
    }
    .sect{
        margin-left: 0.22rem;
    }
    .tag{
        height: 0.5rem;
        line-height: 0.5rem;
        border-top:  0.01rem solid #eeeeee;
        border-bottom:  0.01rem solid #eeeeee;

    }
    .home{
        margin-left: 0.38rem
    }
    .btn{
        width: 98%;
        height: 0.5rem;
        background-color: #4dc060;
        margin-left: 1%;
        margin-top: 0.2rem;
        border: 0;
        color: #ffffff
    }
    .front{
        margin-left: 0.1rem
    }
</style>