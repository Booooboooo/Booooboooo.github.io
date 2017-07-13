/**
 * Created by Administrator on 2017/3/29 0029.
 */
window.onload=function () {
    var prev=document.querySelector(".prev");
    var next=document.querySelector(".next");
    var scrollPic=document.querySelector(".scroll-pic");
    var num=1;
    var flag=true;
    next.onclick=function () {
        if(flag){
            flag=false;
                scrollPic.style.transition="all 0.6s";
            num++;
            scrollPic.style.left=-num*78+"px"
        }
    };
    prev.onclick=function () {
        if(flag){
            num-=2;
                scrollPic.style.transition="all 0.6s";
            num++;
            scrollPic.style.left=-num*78+"px"
        }
    };
    scrollPic.addEventListener("transitionend",function () {
        if(num==13){
            num=1;
            scrollPic.style.transition="none";
            scrollPic.style.left="-78px";
        }
        if(num==0){
            num=12;
            scrollPic.style.transition="none";
            scrollPic.style.left="-936px"
        }
        flag=true;
    });
    var bannerbg=document.querySelectorAll(".bannerbg");
    var currently=document.querySelectorAll(".currently");
    var temp=bannerbg[0];
    currently[0].flag=true;
    Array.from(currently).forEach(function (n,i) {
        n.onclick=function () {
            temp.style.display="none";
            bannerbg[i].style.display="block";
            temp=bannerbg[i];
            n[0].style.outline="1px solid #fb823b"
        }

    })
    
    

    
}