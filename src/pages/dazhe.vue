<template>
    <div class="bigbox">
         <div class="header">
            <img src="../../static/img/Discount/header.jpg">
        </div>
      <Discount></Discount>
   
    </div>
</template>

<script>
import Discount from '../components/Discount';
export default {
    components:{
        Discount
    },
   
}

</script>

<style scoped>
.bigbox{
    width:100%;
    background-color: rgb(185, 12, 14);
    font-size:0px; 
    padding-bottom: 30%;
}
.header img{
   width: 100%;
}
</style>