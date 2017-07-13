/**
 * Created by Administrator on 2017/3/27 0027.
 */
$(function () {
    // $(".btn").click(function () {
    //     $(".btn").removeClass("active");
    //     $(this).addClass("active");
    //     var index=$(this).index();
    //     $(".banner").css({
    //         zIndex:1,opacity:0.5
    //     }).eq(index).css({
    //         zIndex:2
    //     }).animate({
    //         opacity:1},1000)
    //     });
    // var num=0;
    // var t1=setInterval(move,2000);
    // function move(){
    //     num++;
    //     if(num==$(".btn").length){
    //         num=0;
    //     }
    //     $(".btn").css("background","#CBCBCB").eq(num).css("background","#7f7f7f");
    //     $(".banner").css({
    //         zIndex:1,
    //         opacity:0.5
    //     }).eq(num).css({
    //         zIndex:2
    //     }).animate({
    //         opacity:1},1000)
    // }
    $(".effect").hover(
        function () {
            clearInterval(t1);
        },
        function () {
            t1=setInterval(move,2000);
        }
    );
    $(".prod").hover(function () {
        $(this).find(".yincang").slideDown(500);
    },function () {
        $(this).find(".yincang").slideUp(500);
    });



        
    //
    })
    
