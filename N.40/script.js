document.querySelector('.add').onclick=function analogClock () {
    const value = document.querySelector("input").value

    document.querySelector(".input").style.display = "none"

    let clock=document.querySelector(".clock")
    clock.setAttribute("width",value)
    clock.setAttribute("height", value)
    var oldSeconds = 0;
   
    function updateClock() {
     var t = new Date();

     var clockArms = [t.getHours(), t.getMinutes(), t.getSeconds()];
     if (clockArms[2] == oldSeconds) return; //секунды не менялись? выйти
     oldSeconds = clockArms[2];
    
     var c = document.getElementById('clock');
     var ctx = c.getContext('2d');
     
     

     //очистить канву:

     ctx.fillStyle = 'white';
     ctx.fillRect(0, 0, c.width, c.height);

     //нарисовать контур часов:
     var x = Math.round(c.width/2);
     var y = Math.round(c.height/2);
     var r = Math.round(Math.min(x,y)-10);
     ctx.beginPath(); 
     ctx.arc(x,y,r,0,2*Math.PI,true);


     ctx.lineWidth = 1;
     ctx.strokeStyle = '#C0C0C0';
     ctx.stroke();
     ctx.closePath();

    // время внутри

    ctx.fillStyle = "#00F";
    ctx.font = "italic 30pt Arial";
    let time = clockArms[0]+"."+clockArms[1]+"."+clockArms[2]
    ctx.textAlign ="center"
    ctx.strokeText(time, c.width/2, 120);


     //нарисовать метки циферблата и цифры:
     ctx.save();
     ctx.textBaseline = "middle";
     ctx.textAlign = 'center';
     ctx.shadowColor = '#800000';
     ctx.shadowOffsetX = 3;
     ctx.shadowOffsetY = 3;
     ctx.shadowBlur = 6;

     var delta = Math.max(8,Math.round(r/10)); //для размера шрифта и отсечек
     ctx.font = 'bold '+delta+'pt sans-serif';
     var u=Math.PI/2;
     var hour = 1;

     for (var i=12; i>0; i--) {
      ctx.beginPath();
      var r1=r-delta;


      var x1 = x+Math.round(r1*Math.cos(u)), //так можно узнать позиции делений циферблата
          y1 = y-Math.round(r1*Math.sin(u)),
          x2 = x+Math.round(r*Math.cos(u)),
          y2 = y-Math.round(r*Math.sin(u));
          
      ctx.strokeStyle = '#606060';
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2); //Вывести деление
      u+=Math.PI/6;
      ctx.stroke();
      ctx.closePath();

   
       ctx.fillStyle = '#202020';
       ctx.fillText (''+(13-hour),x1,y1); 
       hour++;
       ctx.fill();
      
     }
     
     ctx.restore();
     //нарисовать стрелки:
     clockArms[1] += clockArms[2] / 60;
     clockArms[0] += clockArms[1] / 60;
     drawClockArm(ctx, x, y, clockArms[0] * 30, 2*r/2.5 - 15, 5, '#000080');
     drawClockArm(ctx, x, y, clockArms[1] * 6,  2*r/2.2 - 10, 3, '#008000');
     drawClockArm(ctx, x, y, clockArms[2] * 6,  2*r/2.0 - 6,  2, '#800000');
    }
    
    function drawClockArm(ctx, x,y, degrees, len, lineWidth, style) {
     ctx.save();
     ctx.lineWidth = lineWidth;
     ctx.lineCap = 'round';
     ctx.translate(x, y);
     ctx.rotate((degrees - 90) * Math.PI / 180);
     ctx.strokeStyle = style;
     ctx.beginPath();
     ctx.moveTo(-len / 10, 0);
     ctx.lineTo(len, 0);
     ctx.stroke();
     ctx.closePath();
     ctx.restore();
    }
    
    updateClock()
    function initClock() {
     window.setInterval(updateClock, 1000); 
    }
   
    initClock();
 }
   
