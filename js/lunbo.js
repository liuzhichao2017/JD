 window.onload = function(){
        function titleBox(){
                $(function(){
          var timer = null;
          var cur = 0;
          var len = $("#ads li").length;
          var index = 0;


          //鼠标滑过容器停止播放
          $("#ads").hover(function(){
              clearInterval(timer);
          },function(){
              showImg();
          });
          // 遍历所有圆点导航实现划过切换至对应的图片
          $("#ads li").click(function(){
              clearInterval(timer);
              cur = $(this).index();
              $(this).addClass("actives").siblings().removeClass("actives");
              $("#ads img").eq(cur).fadeIn(500).siblings("img").fadeOut(500);
          });

          function selectimg(cur){
              $('#ads img').eq(cur).fadeIn(500).siblings('img').fadeOut(500);
              $('#ads ul li').eq(cur).addClass('actives').siblings('li').removeClass('actives');
          }

           $("#gprev").click(function(){
             cur-=1;
             if (cur<0) {
              cur = len-1;
             }
             selectimg(cur)
          });

            $("#gnext").click(function(){
             cur+=1;
             if (cur>len-1) {
              cur = 0;
             }
             selectimg(cur)
          });

          

    //定义图片切换函数
    function showImg(){
        timer = setInterval(function(){
            cur++;
            if( cur>=len ){ cur=0; }
            $("#ads img").eq( cur ).fadeIn(500).siblings("img").fadeOut(500);
            $("#ads li ").eq( cur ).addClass("actives").siblings().removeClass("actives");

        },2500);
    }
    showImg();
});
             }
                titleBox();


            showTime();
        function checkTime(i){
            if (i<10) {
                i = "0"+i; 
            }
            return i;
        }

        function showTime(){
            var start = new Date();
            var end = new Date("2018/3/5,07:00:00");
            var now =Math.floor((end.getTime()-start.getTime())/1000);
            var h = Math.floor(now/(60*60)%60);
            var m =Math.floor(now/60%60);
            var s =Math.floor(now%60);
            ns = checkTime(s);
            nm = checkTime(m);
            nh = checkTime(h);
            document.getElementById("time-hour").innerHTML = nh;
            document.getElementById("time-minute").innerHTML = nm;
            document.getElementById("time-second").innerHTML = ns;
            setTimeout(showTime,500);

            if (now <=0) {
              document.getElementById("time-hour").innerHTML = "0"+0;
              document.getElementById("time-minute").innerHTML ="0"+0;
              document.getElementById("time-second").innerHTML = "0"+0;
            }
            return
        }

        
      function newBox(){
        var content1 = document.getElementById("content1");
        var list1 = document.getElementById("list1");
        var prev1 = document.getElementById("prev1");
        var next1 = document.getElementById("next1");
        var animated = false;
      

      function animate1(offset){
              animated = true;
              var time = 399;//位移时间；
              var interval = 10;//位移时间间隔；
              var speed1 = offset/(time/interval);//每次位移的距离；
              var newLeft1 = parseInt(list1.style.left) + offset;
        
        
        function go(){
            if ((speed1<0&&parseInt(list1.style.left) > newLeft1)||(speed1>0&&parseInt(list1.style.left)  < newLeft1)) {
                    list1.style.left = parseInt(list1.style.left) + speed1 +"px";
                    setTimeout(go,interval);
                }
            else{
                animated = false;
                list1.style.left = newLeft1 + "px";
                 list1.style.left = newLeft1 +"px";  
            if (newLeft1<-2397) {
                list1.style.left = -799 + "px ";
                    }
            if (newLeft1>-799) {
                list1.style.left = -2397 + "px";
                    }  
                }
           }
               go();     
      }

      prev1.onclick = function(){
        if (animated) {
                return;
                }
        animate1(799);
      }

      next1.onclick = function(){
        if (animated) {
                return;
                }
        animate1(-799);
      }
}
    newBox();



 $(function(){
    $("li",".head").hover(function () {
        $(".head a").removeClass('cur01');            
        $(".content_detail1").removeClass('show');
        var index = $(this).index();
        $(".content_detail1").eq(index).addClass('show');
        $(".head a").eq(index).addClass("cur01");
    })
})

function paihang(){
            var box =document.getElementById("box");
            var buttons = document.getElementById("button-box").getElementsByTagName("span");
            var prev = document.getElementById("prev12");
            var next = document.getElementById("next12");
            var index = 1;
            var animated = false;

            function showButton(){
              for(i=0;i<buttons.length;i++)
                if (buttons[i].className =="on"){
                  buttons[i].className ="";
                  break;
                }
                buttons[index - 1].className ="on";
            }

            function animate(offset){
                 animated = true;
                 var newLeft = parseInt(box.style.left) + offset;
                  var time = 300;//位移时间；
                  var interval = 10;//位移时间间隔；
                  var speed = offset/(time/interval);//每次位移的距离；

                  function go(){
                    if ((speed<0&&parseInt(box.style.left) > newLeft)||(speed>0&&parseInt(box.style.left)  < newLeft)) {
                        box.style.left = parseInt(box.style.left) + speed +"px";
                        setTimeout(go,interval);
                    }
                    else{
                        animated = false;
                         box.style.left = newLeft +"px";  
                        if (newLeft>0) {
                        box.style.left = -350 + "px";
                          }
                        if (newLeft<-350) {
                        box.style.left = 0 +"px";
                          }
                        }
                    }
                    go();
             }

             next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-350);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                animate(350);
                showButton();
            }

            for(var i = 0; i< buttons.length; i++){
                buttons[i].onmouseover = function(){
                    if (this.className == "on") {
                        return ;
                    }
                    var myIndex = parseInt(this.getAttribute("index"));
                    var offset = -350*(myIndex - index);
                    index = myIndex;
                    showButton();
                    if(!animated){
                        animate(offset);
                    } 
                  }
              }
           }  
           paihang();

            function secondBox(){
              var box11 =document.getElementById("box11");
        var buttons1 = document.getElementById("button-box1").getElementsByTagName("span");
        var prev11 = document.getElementById("prev11");
              var next11 = document.getElementById("next11");
              var index = 1;
              var animated = false;

            function showButton1(){
              for(i=0;i<buttons1.length;i++)
                if (buttons1[i].className =="on"){
                  buttons1[i].className ="";
                  break;
                }
                buttons1[index - 1].className ="on";
            }

            function animate11(offset){
                 animated = true;
                 var newLeft = parseInt(box11.style.left) + offset;
                  var time = 300;//位移时间；
                  var interval1 = 10;//位移时间间隔；
                  var speed = offset/(time/interval1);//每次位移的距离；

                  function go1(){
                    if ((speed<0&&parseInt(box11.style.left) > newLeft)||(speed>0&&parseInt(box11.style.left)  < newLeft)) {
                        box11.style.left = parseInt(box11.style.left) + speed +"px";
                        setTimeout(go1,interval1);
                    }
                    else{
                        animated = false;
                         box11.style.left = newLeft +"px";  
                        if (newLeft>0) {
                        box11.style.left = -350 + "px";
                          }
                        if (newLeft<-350) {
                        box11.style.left = 0 +"px";
                          }
                        }
                    }
                    go1();
             }

             next11.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate11(-350);
                showButton1();
            }
            prev11.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                animate11(350);
                showButton1();
            }
             for(var i = 0; i< buttons1.length; i++){
                buttons1[i].onmouseover = function(){
                    if (this.className == "on") {
                        return ;
                    }
                    var myIndex = parseInt(this.getAttribute("index"));
                    var offset = -350*(myIndex - index);
                    index = myIndex;
                    showButton1();
                    if(!animated){
                        animate11(offset);
                    } 
                  }
               }

           }
       secondBox();

       function threeBox(){
        var list = document.getElementById("huimai-body");
            var buttons = document.getElementById("buttons_huimai").getElementsByTagName("i");
            var prev = document.getElementById("prevm");
            var next = document.getElementById("nextm");
            var index = 1;
            var animated = false;
            var timer;

            function showButton(){
                for(var i = 0;i < buttons.length; i++)
                    if (buttons[i].className == "onmai") {
                      buttons[i].className ="";
                        break;
                    }
                buttons[index - 1].className="onmai";
            }

            function animate(offset){
                 animated = true;
                 var newLeft = parseInt(list.style.left) + offset;
                  var time = 350;//位移时间；
                  var interval = 10;//位移时间间隔；
                  var speed = offset/(time/interval);//每次位移的距离；

                  function go(){
                    if ((speed<0&&parseInt(list.style.left) > newLeft)||(speed>0&&parseInt(list.style.left)  < newLeft)) {
                        list.style.left = parseInt(list.style.left) + speed +"px";
                        setTimeout(go,interval);
                    }
                    else{
                        animated = false;
                         list.style.left = newLeft +"px";  
                        if (newLeft>-350) {
                        list.style.left = -1050 + "px";
                          }
                        if (newLeft<-1050) {
                        list.style.left = -350 +"px";
                          }
                        }
                    }
                    go();

             }
         
            function play(){
                timer = setInterval(function(){
                    nextm.onclick();
                },4000);
             }

             
                
                nextm.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-350);
                showButton();
            }
            prevm.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                animate(350);
                showButton();
            }

               for(var i = 0; i< buttons.length; i++){
                buttons[i].onmouseover = function(){
                    if (this.className == "onmai") {
                        return ;
                    }
                    var myIndex = parseInt(this.getAttribute("index"));
                    var offset = -350*(myIndex - index);
                    index = myIndex;
                    showButton();
                    if(!animated){
                        animate(offset);
                    } 
                  }
               }
               play();
       }
       threeBox();

       function fourBox(){
          var list = document.getElementById("youhui_quan");
            var buttons = document.getElementById("buttons_youhui").getElementsByTagName("i");
            var prev = document.getElementById("prevy");
            var next = document.getElementById("nexty");
            var index = 1;
            var animated = false;
            

            function showButton(){
                for(var i = 0;i < buttons.length; i++)
                    if (buttons[i].className == "onyou") {
                      buttons[i].className ="";
                        break;
                    }
                buttons[index - 1].className="onyou";
            }

            function animate(offset){
                 animated = true;
                 var newLeft = parseInt(list.style.left) + offset;
                  var time = 320;//位移时间；
                  var interval = 10;//位移时间间隔；
                  var speed = offset/(time/interval);//每次位移的距离；

                  function go(){
                    if ((speed<0&&parseInt(list.style.left) > newLeft)||(speed>0&&parseInt(list.style.left)  < newLeft)) {
                        list.style.left = parseInt(list.style.left) + speed +"px";
                        setTimeout(go,interval);
                    }
                    else{
                         animated = false;
                         list.style.left = newLeft +"px";  
                        if (newLeft>0) {
                        list.style.left = -350 + "px";
                          }
                        if (newLeft<-350) {
                        list.style.left = 0 +"px";
                          }
                        }
                    }
                    go();

             }
                
             
                
                nexty.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-350);
                showButton();
            }
            prevy.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                animate(350);
                showButton();
            }

               for(var i = 0; i< buttons.length; i++){
                buttons[i].onmouseover = function(){
                    if (this.className == "onyou") {
                        return ;
                    }
                    var myIndex = parseInt(this.getAttribute("index"));
                    var offset = -350*(myIndex - index);
                    index = myIndex;
                    showButton();
                    if(!animated){
                        animate(offset);
                    } 
                  }
               }
       }
       fourBox();
//回到顶部事件
       function goTop(){
    var tbtn =document.getElementById("tab_btn");
    var timer = null;
    tbtn.onclick = function(){
      timer = setInterval(function(){
        var osTop =document.body.scrollTop||document.documentElement.scrollTop;
        var ispeed = Math.ceil(osTop/6);
          document.body.scrollTop = document.documentElement.scrollTop = osTop -ispeed;
          if (osTop ==0) {
        clearInterval(timer);
      }
      },30);

      }
    }
    goTop();

    function title(){
     $(function(){
        $("li",".header-list").hover(function () {        
            $(".hide").removeClass('show');
            var index = $(this).index();
            $(".hide",".lists").eq(index).addClass('show');
            if (index == 0) {
              $(".header-list div").first().removeClass("move-go");
            }if(index == 1){
           $(".header-list div").first().addClass("move-go");
           }        
        })
    }) 
  }
  title();
     
     function search(){
  $(window).scroll(function(){
        if($(window).scrollTop() > 650){
            $('.search-none').addClass("shows");
        }else{
            $('.search-none').removeClass('shows');
        }
    });}
    search();

           }        
