
$(function () {

    $(".prod").hover(function () {
        $(this).find(".yincang").slideDown(500);
    },function () {
        $(this).find(".yincang").slideUp(500);
    });

    

        
    //
    })

window.onload=function () {
    var sst=document.querySelector(".sst");
    var rkt=document.querySelector(".rkt");
    var tu1=document.querySelector(".sst_pic");
    var tu2=document.querySelector(".rkt_pic");

    sst.onclick=function () {
        tu1.style.display="";
        tu2.style.display="none";
    }
    rkt.onclick=function () {
        tu1.style.display="none";
        tu2.style.display="";
    }

}

