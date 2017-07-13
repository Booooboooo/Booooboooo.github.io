// window.onload=function () {


function Draw(cobj,setting) {
    //setting 类型 样式 画笔颜色 画笔粗细 边数
    this.cobj = cobj;
    this.style=setting.st;
    this.color=setting.co;
    this.width=setting.wi;
}
Draw.prototype={
    init:function () {
        this.cobj.strokeStyle=this.color;
        this.cobj.fillStyle=this.color;
        this.cobj.lineWidth=this.width;
    },
    //铅笔
    pen:function (sx,sy,ox,oy) {
        this.init();
        var cobj = this.cobj;
        cobj.lineTo(ox, oy);
        cobj[this.style]();
    },
    //橡皮擦
    eraser:function (sx,sy,ox,oy) {
        this.init();
        var cobj = this.cobj;
        // cobj.strokeStyle=bgcolor.value;
        // cobj.lineTo(ox, oy);
        // cobj[this.style]();
        cobj.clearRect(sx,sy,13,13);
        cobj.clearRect(ox,oy,13,13);
    },
    //直线
    line:function (sx,sy,ox,oy) {
        this.init();
        var cobj=this.cobj;
        cobj.beginPath();
        cobj.moveTo(sx,sy);
        cobj.lineTo(ox,oy);
        cobj[this.style]();
    },
    //矩形
    rect:function (sx,sy,ox,oy) {
        this.init();
        var cobj=this.cobj;
        cobj.beginPath();
        cobj.rect(sx, sy, ox-sx, oy-sy);
        cobj[this.style]();
    },
    //圆
    circle:function (sx,sy,ox,oy) {
        this.init();
        var cobj=this.cobj;
        
        //不固定圆心
        // cobj.beginPath();
        // cobj.arc(sx+(ox-sx)/2,sy+(oy-sy)/2,Math.abs((ox-sx)/2>(ox-sx)/2?(ox-sx)/2:(oy-sy)/2),0,Math.PI*2);
        // cobj[this.style]();
        
        //固定圆心
        var r=Math.sqrt(Math.pow(ox-sx,2)+Math.pow(oy-sy,2));//勾股定理
        var cobj=this.cobj;
        cobj.beginPath();
        cobj.arc(sx,sy,r,0,Math.PI*2);
        cobj[this.style]();
    },
    //多边形
    poly:function (sx,sy,ox,oy,s) {
        this.init();
        var cobj=this.cobj;
        cobj.save();
        cobj.translate(sx,sy);
        cobj.rotate(Math.PI/2);
        var r=Math.sqrt(Math.pow(ox-sx,2)+Math.pow(oy-sy,2));
        var x=Math.cos(Math.PI/s)*r;
        var y=Math.sin(Math.PI/s)*r;
        cobj.beginPath();
        cobj.moveTo(x,y);
        for(var i=0;i<s;i++){
            cobj.save();
            cobj.rotate(-2*Math.PI/s*i);
            cobj.lineTo(x,-y);
            cobj.restore();
        }
        // cobj.closePath();
        cobj[this.style]();
        cobj.restore();
    },
    
    
    
    
    
}    
    
    
    
    
    



//end
// }
