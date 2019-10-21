<template>
    <div >
        <!-- section -->
        <div class="section" v-for="(v,i) in arr" :key="i">
          <img class="imgtop" :src="v.titleimgurl">
          <div class="data">
              <div class="food" v-for="(va,j) in v.arr1" :key="j">
                <img :src="va.imgurl" class="foodcover">
                <div class="foodname">
                 {{va.foodname}}
                </div>
                <div class="foodprice">
                       <span class="pricekey">￥</span>
                       <span class="priceval">{{va.priceval}}</span>
                     <div class="foodstock">
                        限量特惠
                     </div>
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
            arr:[
                {
                    titleimgurl:"../../static/img/Discount/a.jpg",
                    arr1:[
                         {imgurl:"../../static/img/Discount/a1.jpg",foodname:"哈尔滨啤酒小麦王500ml/听",priceval:"5"},
                        {imgurl:"../../static/img/Discount/a2.jpg",foodname:"哈尔滨小麦王啤酒330ml/罐",priceval:"3.5"},
                        {imgurl:"../../static/img/Discount/a3.jpg",foodname:"哈尔滨小麦王啤酒500m1/罐",priceval:"5.5"},                 
                    ]
                },
                {
                    titleimgurl:"../../static/img/Discount/b.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/b1.jpg",foodname:"思念小小水饺500g/袋",priceval:"14.9"},
                        {imgurl:"../../static/img/Discount/b2.jpg",foodname:"思念手打天下猪肉荠菜水饺728g/袋",priceval:"14.9"},
                        {imgurl:"../../static/img/Discount/b3.jpg",foodname:"思念手打天下猪肉韭菜水饺495g",priceval:"14.9"},            
                    ]
                },
                {
                    titleimgurl:"../../static/img/Discount/c.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/c1.jpg",foodname:"嘉士伯特醇听装500ml",priceval:"7.7"},
                        {imgurl:"../../static/img/Discount/c2.jpg",foodname:"嘉士伯啤酒500ml/听",priceval:"6.6"},
                        {imgurl:"../../static/img/Discount/c3.jpg",foodname:"嘉士伯啤酒500ML*3听/组",priceval:"19.8"},                 
                    ]
                },
                {
                    titleimgurl:"../../static/img/Discount/d.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/d1.jpg",foodname:"安佳超高温灭菌轻欣脱脂牛奶10*250ml",priceval:"49"},
                        {imgurl:"../../static/img/Discount/d2.jpg",foodname:"安佳切达再制干酪(高钙) 100g",priceval:"49"},
                        {imgurl:"../../static/img/Discount/d3.jpg",foodname:"安佳超高温灭菌脱脂牛奶礼盒装250",priceval:"49"},                 
                    ]
                },
                {
                    titleimgurl:"../../static/img/Discount/e.jpg",
                    arr1:[
                          {imgurl:"../../static/img/Discount/e1.jpg",foodname:"黄飞红功夫堂麻辣小鱼60G/袋",priceval:"10.9"},
                        {imgurl:"../../static/img/Discount/e2.jpg",foodname:"黄飞红香脆椒98G/袋",priceval:"10.9"},
                        {imgurl:"../../static/img/Discount/e3.jpg",foodname:"黄飞红麻辣花生70g/包",priceval:"9"},                 
                    ]
                },
                {
                    titleimgurl:"../../static/img/Discount/f.jpg",
                    arr1:[
                           {imgurl:"../../static/img/Discount/f1.jpg",foodname:"统- 藤娇牛肉面105g",priceval:"5"},
                        {imgurl:"../../static/img/Discount/f2.jpg",foodname:"统-巧面馆油泼辣子酸汤面122g()",priceval:"4.5"},
                        {imgurl:"../../static/img/Discount/f3.jpg",foodname:"统一 来一桶红烧牛肉面105g (桶)",priceval:"4.5"},                 
                    ]
                },
                  {
                    titleimgurl:"../../static/img/Discount/g.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/g1.jpg",foodname:"南街村北京麻辣方便面65g/袋",priceval:"1.5"},
                        {imgurl:"../../static/img/Discount/g2.jpg",foodname:"南街村北京麻辣方便面65g/袋",priceval:"1.5"},
                        {imgurl:"../../static/img/Discount/g3.jpg",foodname:"南街村北京麻辣方便面65g/袋",priceval:"1.3"},               
                    ]
                },
                  {
                    titleimgurl:"../../static/img/Discount/h.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/h1.jpg",foodname:"麦斯威尔醇香白咖啡25Gx5条",priceval:"14.7"},
                        {imgurl:"../../static/img/Discount/h2.jpg",foodname:"麦斯威尔特浓速溶咖啡7条(91克/盒)",priceval:"9.8"},
                        {imgurl:"../../static/img/Discount/h3.jpg",foodname:"麦斯威尔特浓咖啡7杯盒装91g ",priceval:"8.4"},            
                    ]
                },
                 {
                    titleimgurl:"../../static/img/Discount/j.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/j1.jpg",foodname:"六神清凉爽肤沐浴露200ml",priceval:"15.5"},
                        {imgurl:"../../static/img/Discount/j2.jpg",foodname:"六神清新滋润沐浴露200ml",priceval:"15"},
                        {imgurl:"../../static/img/Discount/j3.jpg",foodname:"六神喷雾驱蚊花露水180ml/瓶 ",priceval:"25.9"},            
                    ]
                },
                 {
                    titleimgurl:"../../static/img/Discount/k.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/k1.jpg",foodname:"高洁丝棉柔丝薄夜用卫生巾420mm*4片/包",priceval:"10.8"},
                        {imgurl:"../../static/img/Discount/k2.jpg",foodname:"高洁丝经典系亲柔无忧夜安裤L码2片/包",priceval:"9.8"},
                        {imgurl:"../../static/img/Discount/k3.jpg",foodname:"高洁丝臻选系列极薄纯棉卫生巾日用240mm8片 ",priceval:"8.4"},            
                    ]
                },
                 {
                    titleimgurl:"../../static/img/Discount/l.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/l1.jpg",foodname:"高露洁360牙膏长效清新200克",priceval:"24.99"},
                        {imgurl:"../../static/img/Discount/l2.jpg",foodname:"高露洁劲酷清爽牙膏( 直立式)100ml/支",priceval:"38.8"},
                        {imgurl:"../../static/img/Discount/l3.jpg",foodname:"高露洁劲白竹炭薄荷牙膏180g ",priceval:"16.99"},            
                    ]
                },
                 {
                    titleimgurl:"../../static/img/Discount/z.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/z1.jpg",foodname:"ABC亲柔立围轻透薄棉柔表层夜用卫生巾280mm*8片/包",priceval:"9.99"},
                        {imgurl:"../../static/img/Discount/z2.jpg",foodname:"ABC纤薄棉柔夜用卫生巾8片/包",priceval:"10.5"},
                        {imgurl:"../../static/img/Discount/z3.jpg",foodname:"ABC日用纤薄网感棉柔表层卫生巾(含澳洲茶树精华) 8片/包 ",priceval:"8.7"},            
                    ]
                },
                 {
                    titleimgurl:"../../static/img/Discount/x.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/x1.jpg",foodname:"李施德林冰蓝零度漱口水500ml",priceval:"38.99"},
                        {imgurl:"../../static/img/Discount/x2.jpg",foodname:"李施德林漱口水500ml/瓶(天然橙味)",priceval:"36.8"},
                        {imgurl:"../../static/img/Discount/x3.jpg",foodname:"李施德林清凉薄荷漱口水500m ",priceval:"38.9"},            
                    ]
                },
                 {
                    titleimgurl:"../../static/img/Discount/v.jpg",
                    arr1:[
                        {imgurl:"../../static/img/Discount/v1.jpg",foodname:"肌研舒缓净肤温和洁面乳100克",priceval:"25"},
                        {imgurl:"../../static/img/Discount/v2.jpg",foodname:"曼秀雷敦天然植物润无香料唇膏4g(秋冬)",priceval:"32.4"},
                        {imgurl:"../../static/img/Discount/v3.jpg",foodname:"曼秀雷敦男士润唇膏(天然型) 3.5g ",priceval:"27"},            
                    ]
                },
            ]
        }
    }
}
</script>


<style scoped>

/* section */
.section{
    width:100%;
    margin-top: 4px; 
}
.imgtop{
    width: 100%;
}
/* data */
.data{
    width: 100%;
    padding-bottom: 5px;
    display: flex;
}
.food{
    width: 31%;
    background-color: white;
    margin:0 1.1%;
    border-radius: 1.067vw;
}
.foodcover{
    width:1.06rem;
    height:1.06rem;
    margin-left:9px;
}
.foodname{
    width: 100%;
    font-size: 12px;
    color: rgb(3, 0, 0,0.8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    margin-left:3px;
}
.foodprice{
    width:100%;
    margin-left:3px;
}
.pricekey{
    font-size: 11px;
    color: #ff3c00;
}
.priceval{
    font-size: 14px;
    color: #ff3c00;
}
.foodstock{
    color: #b9b9b9;
    font-size: 10px;
    float:right;
    margin-right:4px;
    margin-top: 6px;
}
</style>