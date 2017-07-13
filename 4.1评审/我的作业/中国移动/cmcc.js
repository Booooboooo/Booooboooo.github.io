//滚动广告
window.onload=function () {
    var gd=document.querySelector(".gd-box");
    var t1=setInterval(ww,3000);
    var num=1;
    function ww() {
        flag=false;
        flag2=false;
        if(num==1||num==6){
        gd.style.transition="all 1s";
        }
        num++;
        gd.style.marginLeft=-300*num+"px";
    }

    gd.addEventListener("transitionend",function () {
        if(num==9){
            gd.style.transition="none";
            gd.style.marginLeft="-300px";
            num=1;
        }
        if(num==0){
            gd.style.transition="none";
            gd.style.marginLeft="-2400px";
            num=8;
        }
        flag=true;
        flag2=true;
    });

    var bannerbox=document.getElementsByClassName("gd-box2")[0];
    bannerbox.onmouseover=function () {
        clearInterval(t1);
    };
    bannerbox.onmouseout=function () {
        t1=setInterval(ww,2000);
    }

    	//banner图箭头切换
    var next=document.querySelector(".gdjiantou2");
    var prev=document.querySelector(".gdjiantou");
    console.log(next);
    console.log(prev);
    var flag=true;flag2=true;
    next.onclick=function () {
        if(flag) {
            ww();
        }
    }
    prev.onclick=function () {
        if(flag2){
        num-=2;
        ww();
        }
    }
    
    //公告轮播效果
    var content=document.querySelector(".gonggaowenzi1")
    var title=document.querySelectorAll(".paiming");
    var time=document.querySelectorAll(".riqi");
    var content=[{title:"客户个人信息收集、使用的目的、范围、方式以...",time:"2017-02-07"},
        {title:"关于2月9日至10日网站系统升级的公告",time:"2017-02-09"},
        {title:"针对存量来电显示收费客户开展服务回馈活动的...",time:"2016-12-26"},
        {title:"中国移动通信集团公司2016年下半年服务质...",time:"2017-02-21"}]
    var num1=0;
    var num2=1;
    var t2=setInterval(asd,3000)

    function asd() {
        num1++;
        if(num1==content.length){
            num1=0;
        }
        if(num==-1){
            num=content.length-1;
        }
        title[0].innerHTML=content[num1].title;
        time[0].innerHTML=content[num1].time;

        num2++;
        if(num2==content.length){
            num2=0;
        }
        title[1].innerHTML=content[num2].title;
        time[1].innerHTML=content[num2].time;
    }


    var yiru=document.querySelector(".gonggao")[0];
       yiru.onmouseover=function () {
        clearInterval(t2);
        console.log(clearInterval(t2));
       };
       yiru.onmouseout=function () {
        t2=setInterval(asd,1000);
       }


    var next=document.querySelector(".youdaoxiang");
    var prev=document.querySelector(".zuodaoxiang");
    next.onclick=function () {
        asd();
    }
    prev.onclick=function () {
        num-=2;
        asd();
    }


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //结束
}