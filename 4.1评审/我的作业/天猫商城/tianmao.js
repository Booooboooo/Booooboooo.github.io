window.onload=function () {

// banner轮播图
    var kuais=document.getElementsByClassName("kuai");
    var aasds=document.getElementsByClassName("aasd");

    for(let i=0;i<kuais.length;i++){
        kuais[i].onmouseover=function () {
            for(let j=0;j<aasds.length;j++){
                kuais[j].style.background="rgba(0,0,0,0.5)";
                kuais[j].style.border="none";
                aasds[j].style.zIndex="1";
                aasds[j].style.opacity="0";

            }
            kuais[i].style.background="rgba(255, 255, 255, 0.7)";
            kuais[i].style.border="2px solid rgba(0, 0, 0, 0.5)";
            aasds[i].style.zIndex="2";
            aasds[i].style.opacity="1";
            num=i;
            if(num==0){
                banners1.style.background="#000";
            }
            if(num==1){
                banners1.style.background="#F0F0F0";
            }
            if(num==2){
                banners1.style.background="#135899";
            }
            if(num==3){
                banners1.style.background="#FC6230";
            }
            if(num==4){
                banners1.style.background="#DFDFDF";
            }
            if(num==5){
                banners1.style.background="#E8E8E8";
            }

        }
    }
    var num=0;
    var t1=setInterval(move,
        3000);
    function move() {
        num++;
        if(num==aasds.length){
            num=0;
        }
        // var colorarr=["#e8e8e8","#F0F0F0","#135899","#DF652D","#DFDFDF","#E8E8E8"];
        for(let j=0;j<aasds.length;j++){
            kuais[j].style.background="rgba(0,0,0,0.5)";
            aasds[j].style.zIndex="1";
            kuais[j].style.border="none";
            aasds[j].style.opacity="0";
        }
        kuais[num].style.background="rgba(255, 255, 255, 0.7)";
        aasds[num].style.zIndex="2";
        aasds[num].style.opacity="1";
        kuais[num].style.border="2px solid rgba(0, 0, 0, 0.5)";
        if(num==0){
            banners1.style.background="#000";
        }
        if(num==1){
            banners1.style.background="#F0F0F0";
        }
        if(num==2){
            banners1.style.background="#135899";
        }
        if(num==3){
            banners1.style.background="#FC6230";
        }
        if(num==4){
            banners1.style.background="#DFDFDF";
        }
        if(num==5){
            banners1.style.background="#E8E8E8";
        }
    }
    var banners1=document.getElementsByClassName("banner")[0];
    var banners=document.getElementsByClassName("banner1")[0];
    banners.onmouseover=function () {
        clearInterval(t1);
    }
    banners.onmouseout=function () {
        t1=setInterval(move, 3000);
    }

    //顶部隐藏栏
    var top=document.querySelector(".yincangtop");
    var top2=document.querySelector(".cebian-box");
    var obj;
     window.onscroll=function () {
         obj=document.body.scrollTop==0?document.documentElement:document.body;
        var st=obj.scrollTop;
        if(st>750){
            top.style.top=0;
        }else{
            top.style.top="-50px";
        }
        if(st>680){
            top2.style.width="36px";
            top2.style.height="332px";
        }else{
            top2.style.width="0";
            top2.style.height="0";
        }

         for (let j=0;j<btns.length;j++) {
             if ((obj.scrollTop<floors[j].offsetTop+430)&&(obj.scrollTop>floors[j].offsetTop-60)) {
                 btns[j].style.background = colorarr2[j];
             }
             else{
                 btns[j].style.background ="#626262";
             }
         }
         if((obj.scrollTop<floors2[0].offsetTop+430)&&(obj.scrollTop>floors2[0].offsetTop-60)){
             btns2.style.background = "#000";
         }else{
             btns2.style.background = "#626262";
         }

    }
    

    //返回顶部
        var demo=document.querySelector(".erweima222");
    console.log(demo);
        demo.onclick=function () {
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0},500);
    }
    
//    侧边隐藏栏
    var btns=document.querySelectorAll(".dhlist");
    var floors=document.querySelectorAll(".yindao");
    var btns2=document.querySelector(".dhlist3");
    var floors2=document.querySelector(".xihuan");
    var colorarr2=["#EA5F8D","#19C8A9","#0AA6E8","#F7A945","#F15453","#64C333","#626262"];

    for (let x=0;x<btns.length;x++){
        // btns[x].index=x
        btns[x].onclick=function () {
            var ot=floors[x].offsetTop-50;
            animate(obj,{scrollTop:ot},500);
        }
    }
    btns2.onclick=function () {
        var ot2=floors2.offsetTop-50;
        animate(obj,{scrollTop:ot2},500);
    }




//   侧边返回顶部
    var demo=document.querySelector(".dhlist2");
    console.log(demo);
    demo.onclick=function () {
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0},500);
    }

//结束
}