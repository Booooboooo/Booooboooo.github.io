window.onload=function () {
    var btn=document.querySelector("#nr2");
    var con=document.querySelector("#nr");
    var plan=document.querySelector(".plan");
    var done=document.querySelector(".done");
    var update=document.querySelector(".gengxin");
    var clear=document.querySelector(".qingchu");
//getData() 从localStorange中获取数据
    function getData() {
        if(localStorage.todo){
            var data=localStorage.todo;
            return JSON.parse(data);
        }
        else {
            return [];
        }
    }
//saveData() 向localStorange中保存数据
    function saveData(data) {
        localStorage.todo=JSON.stringify(data);
    }
//btn.onclick() 提交输入框内容
    btn.onclick=function () {
        var val=con.value;
        if(val==""){
            alert("请输入内容");
            return;
        }
        con.value="";
        var date=new Date();
        var time=date.getTime();
        var data=getData();
        data.push({content:val,time,done:false,star:false,del:false});
        saveData(data);
        reWrite();
    };
//changeState() 修改某一条数据的已完成状态
    window.changeState=function(ele) {
        var data=getData();
        var index=ele.parentNode.id;
        data[index].done=!data[index].done;
        saveData(data);
    }
//del() 修改某一条数据的是否被删除状态
    window.changedel=function(ele) {
        var data=getData();
        var index=ele.parentNode.id;
        data[index].del=!data[index].del;
        saveData(data);
    }
//changeStar() 修改星标状态
    window.changeStar=function(ele) {
        var data=getData();
        var index=ele.parentNode.id;
        data[index].star=!data[index].star;
        saveData(data);
        reWrite();
    }
//update.onclick() 重绘当前页面 完成已经完成状态的更新
    update.onclick=function () {
        reWrite();
    }
//clear.onclick() 从localStorange中清除掉要删除的数据
    clear.onclick=function () {
        var data=getData();
        // for(var i=0;i<data.length;i++){
        //     if(data[i].del){
        //         data.splice(i,1);
        //         i--;
        //     }
        // }
        data=data.filter(function (v) {
            if(v.del==false){
                return true;
            }
        })
        saveData(data);
        reWrite();
    }
//changeContent() 修改内容
         window.changeContent=function(ele) {
            var data=getData();
            var index=ele.parentNode.id;
            data[index].content=ele.innerHTML;
            saveData(data);
        }
//time() 将毫秒数处理为年月日时分秒的数据
        function time(t) {
            var date=new Date();
            date.setTime(t);
            return date.getFullYear()+"/"+date.getMonth()+1+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        }
//reWrite() 重新绘制整个内容区域
function reWrite() {
    plan.innerHTML="";
    done.innerHTML="";
    var data=getData();
    var str1="",str2="",num1=0,num2=0;
    data.forEach(function (v,i) {
        if(v.done==false){
            num1++;
            str1+=`<div id="${i}"><input type="checkbox" onclick="changeState(this)"><p contenteditable="true" onblur="changeContent(this)" class="sss">${v.content}</p><time>${time(v.time)}</time>`;
            if(v.star){
                str1+=`<div class="star active" onclick="changeStar(this)">&#xe614;</div></div>`;
            }else{
                str1+=`<div class="star" onclick="changeStar(this)">&#xe614;</div></li>`;
            }
        }else{
                num2++;
                str2+=`<div id="${i}" ><input type="checkbox" onclick="changedel(this)"><p class="sss">${v.content}</p><time>${time(v.time)}</time>`;
                if(v.star){
                    str2+=`<div class="star active" >&#xe614;</div></li>`;
            }else{
                    str2+=`<div class="star" >&#xe614;</div></div>`;
                }
        }
    });

    str1=`<div class="count"><h2>未完成</h2>总计${num1}条</div>`+str1;
    str2=`<div class="count"><h2>已完成</h2>总计${num2}条</div>`+str2;
    plan.innerHTML=str1;
    done.innerHTML=str2;

}
    reWrite();
//end
}

//reWrite() 重新绘制整个内容区域
//getData() 从localStorange中获取数据
//saveData() 向localStorange中保存数据
//changeState() 修改某一条数据的已完成状态
//del() 修改某一条数据的是否被删除状态
//time() 将毫秒数处理为年月日时分秒的数据
//changeStar() 修改星标状态
//changeContent() 修改内容
//btn.onclick() 提交输入框内容
//update.onclick() 重绘当前页面 完成已经完成状态的更新
//clear.onclick() 从localStorange中清除掉要删除的数据