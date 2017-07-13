window.onload=function () {
    // // banner轮播图
//     // 手动轮播图
    var dian=document.querySelectorAll(".danhangqiu-k li");
    var cons=document.querySelectorAll(".banner-lunbo");
    for(let i=0;i<8;i++){
        dian[i].onmouseover=function(){
            for(let j=0;j<8;j++){
                cons[j].style.zIndex="0";
                cons[j].style.opacity="0";
                dian[j].style.background="gray";

            }
            cons[i].style.zIndex="1";
            cons[i].style.opacity="1";
            dian[i].style.backgroundColor="#db192a";
            num=i;
        }
    };
//    banner自动轮播
    var num=0;
    var t1=setInterval(move,3000);
    function move(){
        num++;
        if(num==8){
            num=0;
        }
        if(num==-1){
            num=7;
        }
        for(let j=0;j<8;j++){

            cons[j].style.zIndex="0";
            cons[j].style.opacity="0";
            dian[j].style.background="gray";

        }
        cons[num].style.zIndex="1";
        cons[num].style.opacity="1";
        dian[num].style.backgroundColor="#db192a";
    };
    // 放入暂停播放
    var banner1=document.querySelector(".banner-zj-top");
    console.log(t1);
    // banner1.onmouseover=function(){
    //
    // };
    // banner1.onmouseout=function(){
    //
    // };
    // 箭头响应
    var pre=document.querySelector(".jt-left");
    var next=document.querySelector(".jt-right");
    banner1.onmouseover=function () {
        // pre.style.opacity="1";
        // next.style.opacity="1";
        clearInterval(t1);
    }
    banner1.onmouseout=function () {
        // pre.style.opacity="0";
        // next.style.opacity="0";
        t1=setInterval(move,3000);
    }
    pre.onclick=function(){
        num-=2;
        move();
    }
    next.onclick=function(){
        move();
    }





    //顶部隐藏栏
    var top=document.querySelector(".yincang-top");
    var top2=document.querySelector(".cebianlan-left");
    var obj;
    window.onscroll=function () {
        obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
        var st = obj.scrollTop;
        if (st > 650) {
            top.style.top = 0;
        } else {
            top.style.top = "-50px";
        }
        if(st>1700){
            top2.style.opacity="1";
        }else{
            top2.style.opacity="0";
        }

        for (let j=0;j<btns.length;j++) {
            if ((obj.scrollTop<floors[j].offsetTop+430)&&(obj.scrollTop>floors[j].offsetTop-60)) {
                btns[j].style.background = "#d70b1c";
            }
            else{
                btns[j].style.background ="#918888";
            }
        }
    }

    //左侧返回顶部
    var demo=document.querySelector(".fanhui-top");
    demo.onclick=function () {
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0},500);
    }

// //    侧边隐藏栏
    var btns=document.querySelectorAll(".cebianlan-left .btn");
    var floors=document.querySelectorAll(".huoqulouceng");
    for (let x=0;x<btns.length;x++){
        // btns[x].index=x
        btns[x].onclick=function () {
            var ot=floors[x].offsetTop-50;
            animate(obj,{scrollTop:ot},500);
        }
    }

//   右侧返回顶部
    var demo2=document.querySelector(".cbl-right-bootom-k .fanhuidingbu");
    demo2.onclick=function () {
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0},500);
    }

//右侧移入
    var xiangmu=document.querySelectorAll(".cbl-right-k li");
    var dibuyincang=document.querySelectorAll(".dibuyincang")
    //
    xiangmu.forEach(function (a,i) {
        a.onmouseover=function () {
            dibuyincang[i].style.transform=`translateX(-104px)`;
        }
        a.onmouseout=function () {
            dibuyincang[i].style.transform=`translateX(0px)`;
        }
    })

    var xiangmu2=document.querySelectorAll(".cbl-right-bootom-k li");
    var dibuyincang2=document.querySelectorAll(".dibuyincang2")
    //
    xiangmu2.forEach(function (a,i) {
        a.onmouseover=function () {
            dibuyincang2[i].style.transform=`translateX(-80px)`;
        }
        a.onmouseout=function () {
            dibuyincang2[i].style.transform=`translateX(0px)`;
        }
    })
//二维码移入
    var ewm=document.querySelector(".kh-ewm") ;
    var ewm2=document.querySelector(".ewm-yincang") ;
    var ewm3=document.querySelector("#kh2");
    var kehu=document.querySelector("#kh3");
    var myjd3=document.querySelector(".myjd3");
    var daohang=document.querySelector("#kh4");
    var myjd4=document.querySelector(".myjd4");
    var dizhi=document.querySelector("#where");
    var dizhi2=document.querySelector(".where2");
    var myjd=document.querySelector("#myjd-zi");
    var myjd2=document.querySelector(".myjd");
    var gouwuche=document.querySelector(".gouwuche-k");
    var gouwuche2=document.querySelector(".gouwuche-yincang");
    var xxml=document.querySelectorAll(".xiangxifenlei");
    var xxml2=document.querySelector(".xiangxi-list22");
    console.log(xxml2);
    console.log(xxml);
     ewm.onmouseover=ewm3.onmouseover=function () {
         ewm2.style.display="block";
     }
     ewm2.onmouseout=ewm3.onmouseout=function () {
         ewm2.style.display="none";
     }
    dizhi.onmouseover=function () {
        dizhi2.style.display="block";

    }
    dizhi.onmouseout=function () {
        dizhi2.style.display="none";
    }
    myjd.onmouseover=function () {
        myjd2.style.display="block";
    }
    myjd.onmouseout=function () {
        myjd2.style.display="none";
    }
    kehu.onmouseover=function () {
        myjd3.style.display="block";
    }
    kehu.onmouseout=function () {
        myjd3.style.display="none";
    }
    daohang.onmouseover=function () {
        myjd4.style.display="block";
    }
    daohang.onmouseout=function () {
        myjd4.style.display="none";
    }
    gouwuche.onmouseover=function () {
        gouwuche2.style.display="block";
    }
    gouwuche.onmouseout=function () {
        gouwuche2.style.display="none";
    }
    xxml.onmouseover=function () {
        // xxml2.style.zIndex="555";
        // xxml2.style.opacity="1";
        xxml2.style.display="block";
    }
    xxml.onmouseout=xxml2.onmouseout=function () {
        // xxml2.style.zIndex="0";
        // xxml2.style.opacity="0";
        xxml2.style.display="none";
    }

    //促销 广告
    var con2images=document.querySelectorAll(".con2images span");
    var con2textp=document.querySelectorAll(".con2textp p");
    var con222=[{rr:"自营图书叠券享满300自营图书"}, {rr:"牙齿炫白 星级口腔会场！ "},
        {rr:"“鬼怪棉花”变身“好奇中国最大家京"},
        {rr:"下单立减1000元"}];
    var cons222=["京东成为中国最大家京东自营", "京东自营家电清洗帮服务店",
        "京东帮服务店突破170店突破",
        " 京东售后退换无忧店突破店突破"];
    con2images[0].onmouseover=function(){
        con2textp.forEach(function(v,i){
            v.innerHTML=con222[i].rr;
            con2images[0].style.borderBottom="2px solid #c43b1f"
        });
    };
    con2images[1].onmouseover=function(){
        con2textp.forEach(function(v,i){
            v.innerHTML=cons222[i];
            con2images[0].style.borderBottom="none"
        });
    };

    //JD秒杀轮播图
    var list1sum=document.querySelector(".list1sum");
    var list1left=document.querySelector("#list1left");
    var list1rights=document.querySelector("#list1right");
    var conlist1=document.querySelector(".conlist1");
    list1sum.onmouseover=function(){
        list1left.style.opacity=1;
        list1rights.style.opacity=1;
    };
    list1sum.onmouseout=function(){
        list1left.style.opacity=0;
        list1rights.style.opacity=0;
    };
    var nums=1;
    var flage=true;
    list1rights.onclick=function(){
        if (nums==1){
            conlist1.style.transition="all 1s"
        }
        if (flage){
            nums++;
            conlist1.style.transform=`translateX(${-nums*998}px)`;
            flage=false;
        }
    };
    list1left.onclick=function(){
        conlist1.style.transition="all 1s"
        if (flage){
            nums--;
            conlist1.style.transform=`translateX(${-nums*998}px)`
            flage=false
        }

    };
    conlist1.addEventListener("transitionend",function(){
        if (nums==5){
            conlist1.style.transition="none";
            conlist1.style.transform='translateX(-998px)';
            nums=1;
        }
        if (nums==0){
            conlist1.style.transition="none";
            conlist1.style.transform='translateX(-3992px)';
            nums=4;
        }
        flage=true;
    });
    //five小轮播图
    var fiveleft=document.querySelectorAll(".fiveleft");
    var fiveright=document.querySelectorAll(".fiveright");
    var fivebox=document.querySelectorAll(".fivebox");
    var fivelast=document.querySelectorAll(".fivelist:last-child");
    Array.from(fivebox).forEach(function(v,i){
        HSY(fiveright[i],v,fiveleft[i],fivelast[i])
    });
    function HSY(fiveright,fivebox,fiveleft,fivelast) {
        fiveright.onclick=function(){
            if (first==1){
                fivebox.style.transition=""
            }
            if (play){
                first++;
                fivebox.style.transform=`translateX(${-590*first}px)`
                play=false;
            }
        };
        fivebox.addEventListener("transitionend",function(){
            if (first==3){
                fivebox.style.transition="none";
                fivebox.style.transform="translateX(-590px)";
                first=1;
            }
            if (first==0){
                fivebox.style.transition="none";
                fivebox.style.transform="translateX(-1180px)";
                first=2
            }
            play=true;
        });
        fiveleft.onclick=function(){
            if (first==2){
                fivebox.style.transition=""
            }
            if (play){
                first--;
                fivebox.style.transform=`translateX(${-590*first}px)`
                play=false;
            }
        };
        hover(fivelast,function(){
            fiveleft.style.opacity=1;
            fiveright.style.opacity=1;
            fiveleft.style.color="#F10835";
            fiveright.style.color="#F10835";
        },function() {
            fiveleft.style.opacity=0;
            fiveright.style.opacity=0;
        });
        var play=true;
        var first=1;
    }
    //发现好货的动画
    var importli=document.querySelectorAll(".import li");
    var line=document.querySelector(".line");
    var importspan=document.querySelectorAll(".import li span");
    var import2img=document.querySelectorAll(".import2 img");
    var import2span=document.querySelectorAll(".import2 span");
    var newimg=["images/12s.jpg","images/12.1.jpg","images/12.3.jpg","images/12.4.jpg","images/12.5.jpg","images/12.1.jpg"];
    var newimg2=["images/12.1.jpg","images/12s.jpg","images/12.4.jpg","images/12.3.jpg","images/12.1.jpg","images/12.5.jpg"];
    var newimg3=["images/12.3.jpg","images/12.1.jpg","images/12.5.jpg","images/12.3.jpg","images/12s.jpg","images/12.4.jpg"];
    var newimg4=["images/12.4.jpg","images/12.5.jpg","images/12s.jpg","images/12.1.jpg","images/12.3.jpg","images/12.4.jpg"];
    var newimg5=["images/12.5.jpg","images/12.jpg","images/12.1.jpg","images/12.4.jpg","images/12.5.jpg","images/12s.jpg"];
    Array.from(importli).forEach(function(v,i){
        v.onmouseover=function(){
            import2img.forEach(function(v,k){
                import2span.forEach(function(m,o){
                    if (i==0){
                        line.style.left=0;
                        import2img[o].src=newimg[o]
                        m.innerHTML="Apple iPhone 7 (A1660) 32G 黑色 移动联通电信4G手机"
                    }else {
                        if (i==1){
                            line.style.left="80px"
                            import2img[o].src=newimg2[o]
                            m.innerHTML="2017新款彩棉婴儿连体衣 新生儿彩棉棉保暖衣服 春秋夹棉宝宝连体衣 哈衣爬服外出服 米白爱心(春秋夹棉) 66码(建议0-6个月)"
                        }else {
                            if (i==2){
                                line.style.left="160px"
                                import2img[o].src=newimg3[o]
                                m.innerHTML="【京东超市】帮宝适 Pampers 超薄干爽 婴儿拉拉裤 加加大号XXL50片【15kg以上】"
                            }else {
                                if (i==3){
                                    import2img[o].src=newimg4[o]
                                    line.style.left="230px"
                                    m.innerHTML="小米米初生婴儿连体哈衣纯棉春装男女宝宝蝴蝶衣爬服新生儿衣服 粉 52cm(0-3月)"
                                }else {
                                    import2img[o].src=newimg5[o]
                                    line.style.left="310px"
                                    m.innerHTML="天章(TANGO) 新绿天章70克A4复印纸 500张/包 8包/箱"
                                }
                            }
                        }
                    }
                })
            })
        }
    });
    //购物
    var goshopping=document.querySelector("#goshoping");
    var goshoppingbox=document.querySelector(".goshopping-box");
    hover(goshopping,function () {
        goshoppingbox.style.opacity=1;
        goshopping.style.borderBottom="1px solid #fff"
    },function(){
        goshoppingbox.style.opacity=0;
        goshopping.style.borderBottom="";
    })

    //定时器
    var hours=document.querySelector(".hours");
    var mines=document.querySelector(".mines");
    var secounnd=document.querySelector(".secound");
    var mm,hh,m;
    var furture=new Date();
    furture.setHours(24);
    furture.setMinutes(0);
    furture.setSeconds(0);
    setInterval(function () {
        var now=new Date();
        var cha=furture.getTime()-now.getTime();
        hh=Math.floor(cha/(1000*60*60));
        hours.innerHTML=hh<10?`0${hh}`:hh;
        m=Math.floor(cha/(1000*60)%60);
        mines.innerHTML=m<10?`0${m}`:m;
        mm=Math.floor((cha/1000)%60);
        secounnd.innerHTML=mm<10?`0${mm}`:mm;
    },1000);



    //end
}