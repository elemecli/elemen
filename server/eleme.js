let express=require("express");
let mongoose=require("mongoose");
let bodyParser=require("body-parser");
let jwt=require("jsonwebtoken");
let uE=bodyParser.urlencoded({ extended: false });
let app=express();
let Restaurant=mongoose.model("restaurant",{
    resType:String,
    resName:String,
    resImg:String,
    resAddress:String,
    resOnTime:String,
    starLevel1:String,
    starLevel2:String,
    starLevel3:String,
    monSale:Number,
    sendPrice:String,
    sendedPrice:String,
    sendedRowPrice:String,
    time:Number,
    distance:Number,
    resTags:Array,
    resDiscount:Array,
    foodType:Array,
    menu:Array
})

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
})

// 任博
app.get('/supermarket',function(req,res){
    res.send({
        status:200,
        message:"这是超市的数据",
        data:[
            {
            "resdiscount" : [ 
                "49减5", 
                "99减10",
                "部分9减2"
            ],
            "resName" : "柴柴便利(光华路店)",
            "resImg" : "caicai.png",
            "starLevel1" : "4.9",
            "monSale" : "1235",
            "sendPrice" : "20",
            "sendedPrice" : "1.5",
            "time" : "29分钟",
            "distance" : "3.5km",
            "menu" : [{"foodType":"零食","foodName":"可口可乐 听装 碳酸饮料 330ml","foodImg":"cl.png","foodPrice":"2.5","foodSale":"29","evalRate":"100%"},
            {"foodType":"零食","foodName":"红牛维生素功能饮料250ml/罐","foodImg":"ls_a1.png","foodPrice":"6.9","foodSale":"29","evalRate":"100%"},
            {"foodType":"零食","foodName":" 卫龙亲嘴烧口味随机20g","foodImg":"ls_a2.png","foodPrice":"1","foodSale":"29","evalRate":"100%"},
            {"foodType":"零食","foodName":" 百草味山楂条120g ","foodImg":"ls_a3.png","foodPrice":"4","foodSale":"29","evalRate":"100%"},
            {"foodType":"零食","foodName":"康师傅 柠檬味 冰红茶 饮料1L","foodImg":"ls_a4.png","foodPrice":"2.5","foodSale":"29","evalRate":"100%"},
            {"foodType":"零食","foodName":"乳酸菌饮料 香蕉味 300ml/袋","foodImg":"ls_a5.png","foodPrice":"5.5","foodSale":"29","evalRate":"100%"},
           
            
           ]
        },
        {
            "resdiscount" : [ 
                "49减5", 
                "69减7",
                "99减10",
                "品质联盟什首饰",
                "99减40"
            ],
            "resName" : "天猫小店(大萌百货便利丈八北路店)",
            "resImg" : "tm.png",
            "starLevel1" : "4.9",
            "monSale" : "186",
            "sendPrice" : "20",
            "sendedPrice" : "4",
            "time" : "30分钟",
            "distance" : "700m",
            "menu" : [
                      
                      {"foodType":"百货","foodName":"拉芳多姿润肤柠檬清新爽洁洗手液","foodImg":"lf_a2.png","foodPrice":"7.5","foodSale":"29","evalRate":"100%"},
                      {"foodType":"百货","foodName":"六神清凉爽肤沐浴露200ml","foodImg":"lsh_a2.png","foodPrice":"15.5","foodSale":"29","evalRate":"100%"},
                      {"foodType":"百货","foodName":"心相印茶语丝享纸面巾3层130抽*6包/提","foodImg":"xxy_a2.png","foodPrice":"18.9","foodSale":"29","evalRate":"100%"},
                      {"foodType":"百货","foodName":"清扬男士去屑洗发露活活力运动薄荷型","foodImg":"qy_a2.png","foodPrice":"28.9","foodSale":"29","evalRate":"100%"},
                      {"foodType":"百货","foodName":"蒂佳婷水润面膜5片","foodImg":"dj_a2.png","foodPrice":"99","foodSale":"29","evalRate":"100%"},
                      {"foodType":"百货","foodName":"美丽蓓菲Q10牛奶氨基酸洗面奶100ml/瓶 泰国进口","foodImg":"ml_a2.png","foodPrice":"29.9","foodSale":"29","evalRate":"100%"}
                      
        ]
        },
        {
            "resdiscount" : [ 
                "49减5", 
                "99减10",
                "部分9减2"
            ],
            "resName" : "华润万家(科技路店)",
            "resImg" : "hrwj.png",
            "starLevel1" : "4.9",
            "monSale" : "286",
            "sendPrice" : "20",
            "sendedPrice" : "4.5",
            "time" : "50分钟",
            "distance" : "2.8km",
            "menu" : [
                     {"foodType":"生鲜","foodName":"尚珍喵少爷秋葵干40g","foodImg":"qk_a1.png","foodPrice":"11.89","foodSale":"29","evalRate":"100%"},
                     {"foodType":"生鲜","foodName":"娃娃菜 3颗装/份 约600g","foodImg":"wwc_a1.png","foodPrice":"7.8","foodSale":"29","evalRate":"100%"},
                      {"foodType":"生鲜","foodName":"油麦菜300g/份","foodImg":"ymc_a1.png","foodPrice":"2.8","foodSale":"29","evalRate":"100%"},
                      {"foodType":"生鲜","foodName":"生菜350g/份","foodImg":"sc_a1.png","foodPrice":"4.8","foodSale":"29","evalRate":"100%"},
                      {"foodType":"生鲜","foodName":"卷心菜(圆白菜) 600g/份","foodImg":"jxc_a1.png","foodPrice":"4.8","foodSale":"29","evalRate":"100%"},
                      {"foodType":"生鲜","foodName":"上海青350g/盒","foodImg":"shq_a1.png","foodPrice":"3.4","foodSale":"29","evalRate":"100%"}
                     
        ]
        },
        {
            "resdiscount" : [ 
                "30减2", 
                "部分9减2",
                "部分10减5"
            ],
            "resName" : "唐久便利(唐沣国际店)",
            "resImg" : "tj.png",
            "starLevel1" : "4.9",
            "monSale" : "66",
            "sendPrice" : "20",
            "sendedPrice" : "2",
            "time" : "30分钟",
            "distance" : "750m",
            "menu" : [
                {"foodType":"应急","foodName":"ABC日用纤薄网感棉柔表层卫生巾(含澳洲茶树精华)","foodImg":"abc_a3.png","foodPrice":"8.7","foodSale":"29","evalRate":"100%"},
                {"foodType":"应急","foodName":"名创优品EVA系列条纹长柄伞雨伞防晒伞(混)/把","foodImg":"eva_a3.png","foodPrice":"15","foodSale":"29","evalRate":"100%"},
                {"foodType":"应急","foodName":"ABC纤薄棉柔夜用卫生巾8片/包","foodImg":"abcxb_a3.png","foodPrice":"10.5","foodSale":"29","evalRate":"100%"},
                {"foodType":"应急","foodName":"高洁丝臻选系列极薄纯棉卫生巾日用240mm8片","foodImg":"gjs_a3.png","foodPrice":"12","foodSale":"29","evalRate":"100%"},
                {"foodType":"应急","foodName":"双鹿1号碳性P型电池二粒卡","foodImg":"slP_a3.png","foodPrice":"11.69","foodSale":"29","evalRate":"100%"},
                {"foodType":"应急","foodName":"润之家红糖姜茶150g","foodImg":"ht_a3.png","foodPrice":"15.9","foodSale":"29","evalRate":"100%"}
        ]       
        },
        {
            "resdiscount" : [ 
                "59减15", 
                "99减10",
                "229减25"
            ],
            "resName" : "1919酒类直供(西安电子六路店)",
            "resImg" : "1919.png",
            "starLevel1" : "5.0",
            "monSale" : "64",
            "sendPrice" : "50",
            "sendedPrice" : "5",
            "time" : "50分钟",
            "distance" : "3.7km",
            "menu" : [
                {"foodType":"全球","foodName":"【现剥】白心蜜柚 200g","foodImg":"sg_a1.png","foodPrice":"9.9","foodSale":"29","evalRate":"100%"},
                {"foodType":"全球","foodName":"【现切】 海南香蕉 200g","foodImg":"sg_a2.png","foodPrice":"6.8","foodSale":"29","evalRate":"100%"},
                {"foodType":"全球","foodName":"户太八号葡萄(180g盒装,洗净摘豆)","foodImg":"sg_a3.png","foodPrice":"6.9","foodSale":"29","evalRate":"100%"},
                {"foodType":"全球","foodName":"云南红提(150g)","foodImg":"sg_a4.png","foodPrice":"3.9","foodSale":"29","evalRate":"100%"},
                {"foodType":"全球","foodName":"进口泰国迷你小菠萝","foodImg":"sg_a5.png","foodPrice":"5.9","foodSale":"29","evalRate":"100%"},
                {"foodType":"全球","foodName":"麒麟西瓜切(220g)","foodImg":"sg_a6.png","foodPrice":"4.6","foodSale":"29","evalRate":"100%"}
        ]
        },
        {
            "resdiscount" : [
                "129减20", 
                "200减30",
                "400减50"
            ],
            "resName" : "Ole精品超市(西安高新店)",
            "resImg" : "ole.png",
            "starLevel1" : "5.0",
            "monSale" : "72",
            "sendPrice" : "20",
            "sendedPrice" : "5",
            "time" : "43分钟",
            "distance" : "2.1km",
            "menu" : [
                {"foodType":"人气","foodName":"招牌珍珠奶茶","foodImg":"yp_a1.png","foodPrice":"25","foodSale":"29","evalRate":"100%"},
                {"foodType":"人气","foodName":"相思豆奶茶","foodImg":"yp_a2.png","foodPrice":"11","foodSale":"29","evalRate":"100%"},
                {"foodType":"人气","foodName":"格雷三兄弟","foodImg":"yp_a3.png","foodPrice":"12","foodSale":"29","evalRate":"100%"},
                {"foodType":"人气","foodName":"奥利奥奶茶","foodImg":"yp_a4.png","foodPrice":"14","foodSale":"29","evalRate":"100%"},
                {"foodType":"人气","foodName":"御金钻奶茶","foodImg":"yp_a5.png","foodPrice":"11","foodSale":"29","evalRate":"100%"},
                {"foodType":"人气","foodName":"抹茶珍珠奶茶","foodImg":"yp_a6.png","foodPrice":"13","foodSale":"29","evalRate":"100%"}
        ]
        },
       
        ],
      
    })
})

// 杨凯
app.get('/userEval',function(req,res){
    res.send({
        status:200,
        message:"这是用户评价的数据",
        // data:[
        //     {imgsrc:"tu0.jpg"},
        //     {texta:"4.8"},
        //     {textb:"7994"},
        //     {textc:"蜂鸟快送约42分钟"},
        //     {textd:"王菊面馆一道面打天下"},
        //     {tags:["“面筋道”,“味道好”"]},
        //     {discount:["20减5","50减10","津贴2元"]}
        // ],
        kind:[
            {texta:"王菊面折扣价",textb:"王菊面",textc:"小料",textd:"饮料"}
        ],
        foodone:[
            {kinds:"王菊面折扣价",imgsrc:"tu2.jpg",titlea:"普通小碗牛肉面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu3.jpg",titlea:"普通小碗牛肉面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu4.jpg",titlea:"普通小碗牛肉面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu5.jpg",titlea:"普通小碗牛肉面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu6.jpg",titlea:"普通小碗牛肉面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu7.jpg",titlea:"普通小碗牛肉面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu8.jpg",titlea:"普通小碗牛肉面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0}
        ],
        foodtwo:[
            {kinds:"王菊面",imgsrc:"tu2.jpg",titlea:"王菊牛肉面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu3.jpg",titlea:"王菊剁椒面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu4.jpg",titlea:"王菊炸酱面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu5.jpg",titlea:"王菊茄汁面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu6.jpg",titlea:"王菊烩菜面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu7.jpg",titlea:"王菊烩菜面",texta:"牛肉",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0}
        ],
        foodthree:[
            {kinds:"小料",imgsrc:"tu9.jpg",titlea:"加牛肉",texta:"辣椒",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu0.jpg",titlea:"加剁椒",texta:"辣椒",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu11.jpg",titlea:"加炸酱",texta:"辣椒",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu12.jpg",titlea:"加茄汁",texta:"辣椒",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu13.jpg",titlea:"加烩菜",texta:"辣椒",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
        ],
        foodfour:[
            {kinds:"饮料",imgsrc:"tu14.jpg",titlea:"汇源果汁",texta:"辣椒",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu15.jpg",titlea:"汇源果汁",texta:"辣椒",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu16.jpg",titlea:"汇源果汁",texta:"辣椒",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0},
            {imgsrc:"tu17.jpg",titlea:"汇源果汁",texta:"辣椒",numa:"344",numb:"99.999%",numc:"13.9",numd:"19.9",nume:"7",nums:0}
        ],
        footer:[
            {numa:"1.1",numb:"15",numc:"20.1",numd:"32.1",nume:"0"}
        ],
        // scoreone:[
        //     {nums:4.8}
        // ],
        scoretwo:[
            {numa:"9999+",numb:1381,numc:3835,numd:1203,nume:255,numf:158,numg:115,numh:85,numi:58,numj:20,numk:17}
        ],
        scorethree:[
            {imgsrca:"tu0.jpg",names:"是讽德诵功",members:"tu4.jpg",times:"2019-10-11",imgsrcb:"tu2.jpg",textb:"谢谢亲的好评,欢迎亲下次光临,祝亲生活愉快!"},
            {imgsrca:"tu1.jpg",names:"的非官方的",members:"tu4.jpg",times:"2019-10-11",texta:"每周必点!份量十足，味道不错!",imgsrcb:"tu3.jpg",textb:"谢谢亲的好评,欢迎亲下次光临,祝亲生活愉快!"},
            {imgsrca:"tu0.jpg",names:"是讽德诵功",members:"tu4.jpg",times:"2019-10-11",texta:"每周必点!份量十足，味道不错!",imgsrcb:"tu2.jpg",textb:"谢谢亲的好评,欢迎亲下次光临,祝亲生活愉快!"}
        ],
        // messages:[
        //     {besmirchName:"王菊面馆一道面打天下",besmirchPinglei:"面馆/其他快餐",besmirchDress:"西安市高新区东辛庄社区27排1-102号",imgsrc:"tu5.jpg"}
        // ],
        goods:[
            {imgsrc:"tu5.jpg",texta:"人气",textb:"普通小碗牛肉面",numa:344,numb:100,numc:13.9,numd:19.9,nume:7,textc:"牛肉",nums:0}
        ],
        // selecta:[
        //     {texta:"王菊牛肉面",textb:"优质大碗牛肉面",textc:"王葡剁权面",textd:"优质小碗牛肉面",texte:"普通大碗牛肉面",textf:"王菊炸香面",textg:"王菊烩菜面"}
        // ]
    })
})

// 南存存
app.get('/market',function(req,res){
    res.send({
        status:200,
        message:"这是首页的数据",
        //商品分类
        data:[
            {classifyimg:"marketImage/title-1.jpg",classifytitle:"新鲜水果"},
            {classifyimg:"marketImage/title-2.jpg",classifytitle:"时令蔬菜"},
            {classifyimg:"marketImage/title-3.jpg",classifytitle:"肉蛋家禽"},
            {classifyimg:"marketImage/title-4.jpg",classifytitle:"冷藏冷冻"},
            {classifyimg:"marketImage/title-5.jpg",classifytitle:"牛奶酸奶"},
            {classifyimg:"marketImage/title-6.jpg",classifytitle:"水饮冲调"},
            {classifyimg:"marketImage/title-7.jpg",classifytitle:"中外名酒"},
            {classifyimg:"marketImage/title-8.jpg",classifytitle:"粮油副食"},
            {classifyimg:"marketImage/title-9.jpg",classifytitle:"家居清洁"},
            {classifyimg:"marketImage/title-10.jpg",classifytitle:"日用百货"},
        ],
        //超级爆款
        datas:[
            {baokuanimg:"marketImage/baokuan1.jpg",baokuantitle:"金龙鱼高筋麦芯粉5kg",money:19.9,huamoney:39.8,num:0},
            {baokuanimg:"marketImage/baokuan2.jpg",baokuantitle:"福锦东北长粒香(一级)5公斤",money:38.9,huamoney:48.99,num:0},
            {baokuanimg:"marketImage/baokuan3.jpg",baokuantitle:"金龙鱼外婆乡小榨菜籽油4L",money:59.9,huamoney:79.99,num:0},
            {baokuanimg:"marketImage/baokuan4.jpg",baokuantitle:"桂格即食燕麦片700g",money:9.9,huamoney:16.8,num:0},
            {baokuanimg:"marketImage/baokuan5.jpg",baokuantitle:"洁柔布艺圆点无芯卷纸卫生纸2",money:23.9,huamoney:41.8,num:0},
            {baokuanimg:"marketImage/baokuan6.jpg",baokuantitle:"雕牌全渍净洗衣液(健康除菌)(..",money:49.9,huamoney:78.8,num:0}
        ],
        //商品列表
        datass:[
            {shoppingListimg:"marketImage/list-1.jpg","shoppingListTitle":"汉斯小木屋果味啤酒饮料","shoppingListmoney":1.49,"huashoppingListmoney":1.8,"num":0},
            {shoppingListimg:"marketImage/list-2.jpg","shoppingListTitle":"银桥利乐枕红枣220g","shoppingListmoney":2.09,"huashoppingListmoney":2.35,"num":0},
            {shoppingListimg:"marketImage/list-3.jpg","shoppingListTitle":"贤哥面筋辣么小小脆","shoppingListmoney":3.99,"huashoppingListmoney":4.99,"num":0},
            {shoppingListimg:"marketImage/list-4.jpg","shoppingListTitle":"伊明牛肉卷280g","shoppingListmoney":1.49,"huashoppingListmoney":1.8,"num":0},
            {shoppingListimg:"marketImage/list-5.jpg","shoppingListTitle":"农夫山泉东方树叶红山泉东方","shoppingListmoney":4.6,"huashoppingListmoney":4.89,"num":0},
            {shoppingListimg:"marketImage/list-6.jpg","shoppingListTitle":"怡宝纯净水4.5L","shoppingListmoney":7.5,"huashoppingListmoney":8.89,"num":0},
            {shoppingListimg:"marketImage/list-7.jpg","shoppingListTitle":"银桥百利包纯牛奶20包","shoppingListmoney":1.59,"huashoppingListmoney":1.79,"num":0},
            {shoppingListimg:"marketImage/list-8.jpg","shoppingListTitle":"农夫山泉饮用天然水","shoppingListmoney":7.99,"huashoppingListmoney":8.5,"num":0},
            {shoppingListimg:"marketImage/list-9.jpg","shoppingListTitle":"伊利味浓原味酸奶特","shoppingListmoney":14.99,"huashoppingListmoney":23.9,"num":0},
            {shoppingListimg:"marketImage/list-10.jpg","shoppingListTitle":"进口甜香蕉1000g土5包","shoppingListmoney":9.98,"huashoppingListmoney":13.98,"num":0},
            {shoppingListimg:"marketImage/list-11.jpg","shoppingListTitle":"精瘦肉500g土20gEA","shoppingListmoney":28.99,"huashoppingListmoney":29.99,"num":0},
            {shoppingListimg:"marketImage/list-12.jpg","shoppingListTitle":"农夫山泉东方树叶绿东方","shoppingListmoney":4.6,"huashoppingListmoney":4.89,"num":0}
        ]
    })
})


app.post('/yk',uE,function(req,res){
    let resname=req.body.resname;
    console.log(resname);
    mongoose.connect("mongodb://localhost:27017/eleme",{useNewUrlParser:true},(err)=>{
        if(err){
            console.log("数据库连接失败");
        }else{
            console.log("数据库连接成功");
            Restaurant.find({resName:resname}).then((ok)=>{
                    console.log(ok);
                    let datas={
                        connectionok:true,
                        resData:ok[0]
                    }
                    res.send({
                        status:200,
                        message:"这是外卖页面的数据",
                        data:{
                            linkid:"数据获取成功",
                            datas
                        }
                    })
                
            },(err)=>{
                console.log("数据查询失败")
            })
        }
    })
})

// 柴丽坤
app.post('/takeoutFood',uE,function(req,res){
    mongoose.connect("mongodb://localhost:27017/eleme",{useNewUrlParser:true},(err)=>{
        if(err){
            console.log("数据库连接失败");  
        }else{
            console.log("数据库连接成功");
            Restaurant.find({}).then((ok)=>{
                    console.log(ok);
                    let datas={
                        connectionok:true,
                        resData:ok
                    }
                    res.send({
                        status:200,
                        message:"这是外卖页面的数据",
                        data:{
                            linkid:"数据获取成功",
                            datas
                        }
                    })
                
            },(err)=>{
                console.log("数据查询失败")
            })
        }
    })
})

app.post('/server',uE,function(req,res){
    let resType=req.body.resType;
    let resName=req.body.resName;
    let resImg=req.body.resImg;
    let starLevel1=req.body.starLevel1;
    let starLevel2=req.body.starLevel2;
    let starLevel3=req.body.starLevel3;
    let monSale=req.body.monSale;
    let sendPrice=req.body.sendPrice;
    let sendedPrice=req.body.sendedPrice;
    let sendedRowPrice=req.body.sendedRowPrice;
    let time=req.body.time;
    let distance=req.body.distance;
    let resTags=req.body.resTags.split(",");
    let resdiscount=req.body.resdiscount.split(",");
    let foodType=req.body.foodType;
    let menu=req.body.menu;
    let resAddress=req.body.resAddress;
    let resOnTime=req.body.resOnTime;


    mongoose.connect("mongodb://localhost:27017/eleme",{useNewUrlParser:true},(err)=>{
        if(err){
            console.log("数据库连接失败");
        }else{
            console.log("数据库连接成功");

            Restaurant.find({resName:resName}).then((ok)=>{
                console.log(ok.length);
                let restaurant;
                if(ok.length==0){
                    restaurant=new Restaurant({
                        resType,
                        resName,
                        resImg,
                        starLevel1,
                        starLevel2,
                        starLevel3,
                        monSale,
                        sendPrice,
                        sendedPrice,
                        sendedRowPrice,
                        time,
                        distance,
                        resTags,
                        resdiscount,
                        foodType,
                        menu,
                        resAddress,
                        resOnTime
                    });
                }else{
                    if(ok[0].foodType.indexOf(foodType)==-1){
                        ok[0].foodType.push(foodType);
                    }
                    ok[0].menu.push(menu);
                    restaurant=new Restaurant({
                        resType,
                        resName,
                        resImg,
                        starLevel1,
                        starLevel2,
                        starLevel3,
                        monSale,
                        sendPrice,
                        sendedPrice,
                        sendedRowPrice,
                        time,
                        distance,
                        resTags,
                        resdiscount,
                        foodType:ok[0].foodType,
                        menu:ok[0].menu,
                        resAddress,
                        resOnTime
                    });
                    Restaurant.remove({resName:resName}).then((ok)=>{
                        console.log("删除成功");
                    })
                }
                console.log(ok);
                restaurant.save().then(function(data){
                    console.log("数据插入成功"+data);
                    res.send({status:200,message:"post接口测试",data:{linkid:0}});
                },function(err){
                    console.log("数据插入失败");
                    res.send({status:200,message:"post接口测试",data:{linkid:1}});
                })
            },(err)=>{
                console.log("数据查询失败");
            })

        }
    })
})

app.listen(3000)