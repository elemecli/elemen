<template>
    <div class="huiyuan">
        <a href="#" class="huiyuanLeft">
            <h3>超级会员</h3>
            <p>
                <span>下单即可获得奖励</span>
                <img src="../../../static/wmimg/huangguan.png" alt="">
            </p>
        </a>
        <a href="#" class="huiyuanRight">
            <h3>津贴联盟</h3>
            <p>
                <span>20元专属补贴</span>
                <img src="../../../static/wmimg/youhuiquan.png" alt="">
            </p>
        </a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .huiyuan {
        font-size: 0;
        display: flex;
        justify-content: space-between;
        margin:.1rem auto;
    }
    .huiyuanLeft{
        width: 49%;
        border-radius: 5px;
        background-color: #ffefce;
        padding: .1rem 0;
    }
    .huiyuanLeft h3{
        font-size: .18rem;
        color:#634931;
        margin-left: .1rem;
    }
    .huiyuanLeft p span{
        font-size: .14rem;
        color:#9c866b;
        margin-left: .1rem;
    }
    .huiyuanLeft p img{
        width: .2rem;
        height: .2rem;
        margin-right: .1rem;
    }
    .huiyuanLeft p{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    .huiyuanRight{
        width: 49%;
        border-radius: 5px;
        background-color: #ffe7e7;
        padding: .1rem 0;
    }
    .huiyuanRight h3{
        font-size: .18rem;
        color:#7b3839;
        margin-left: .1rem;
    }
    .huiyuanRight p span{
        font-size: .14rem;
        color:#ad8e94;
        margin-left: .1rem;
    }
    .huiyuanRight p img{
        width: .2rem;
        height: .2rem;
        margin-right: .1rem;
    }
    .huiyuanRight p{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
</style>