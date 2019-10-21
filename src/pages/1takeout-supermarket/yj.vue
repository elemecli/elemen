<template>
    <div>
        <div class="ls_box">
            <div class="cl_box" v-for="(v,i) in obj.menu" :key="'info1'+i">
                <img :src="v.foodImg|priceFmt" alt="" class="imgsrca">
                <div class="sp_box">{{v.foodName}}</div>
                <div class="koo_box">
                    <span class="jg_box">￥</span>
                    <span class="jg_nume">{{v.foodPrice}}</span>
                </div>
               <div>
                   <div class="shop_for">
                       <div class="left_box">
                           <img :src="obj.resImg|priceFmt" alt="" class="img_box">
                         <div class="js_box"> {{obj.resName}}</div> 
                       </div>
                       <div class="right_box">配送￥{{obj.sendedPrice}}</div>
                   </div>
               </div>
               <div class="tag_con">
                   <div class="tag_wrap">
                       <div class="tag_market" v-for="(v,i) in obj.resdiscount.slice(0,2)" :key="'info2'+i">{{v}}</div>
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                obj:[],
              
            }
        },
        created(){
             this.axios.get("/apis/supermarket").then((ok)=>{
            console.log(ok.data.data);
            this.obj = ok.data.data[3];
        })
        },
         filters: {
      priceFmt:(imgsrc)=>{
          return "../../static/takeout-supermarket-img/"+imgsrc
        }
      }
    }
</script>

<style  scoped>
@import url(../../assets/rb.css);
</style>