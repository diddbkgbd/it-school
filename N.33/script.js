let conteinerInput =document.querySelector('.input')
let conteinerClock =document.querySelector('.clock-conteiner')
let time = document.querySelector('.time')

let sec=180; //поворот стрелок(градусы), 180 - чтоб 0-ое значение было в 00:00:00
let min =180;
let hour=180;

let deg = 6;//размер одного поворота в грудусах за секунду (6=360:60 )
let degh=0.5;//(0.5 - кол-во градусов, на сколько сдвигается
// каждую минуту часовая стрелка, при учете, что весь круг мы пройдем за 12 часов - 360 градусов:12 часов:60 минут)
let deghfull =30; //кол-во градусов, сколько часовая стрелка проходит за один час (360:12)


document.querySelector('.add').onclick=function creatClock(){

    conteinerInput.style.display ="none"
    conteinerClock.style.display ="block"

    let date=new Date()

    let hourN= date.getHours()
    let minN = date.getMinutes()
    let secN = date.getSeconds()
 

    console.error("Текущее время: "+hourN+"."+minN+"."+secN)
    // начальная точка 
    sec= sec+(secN*deg)
    min= min+(minN*deg)
    hour= hour+(hourN*deghfull)+(minN*degh)

    pos()

    document.querySelector('.sec').style.transform='rotate('+sec+'deg)';
    document.querySelector('.minut').style.transform='rotate('+min+'deg)';
    document.querySelector('.hour').style.transform='rotate('+hour+'deg)';

    fSec()

    setInterval(fSec,1000);

  

    function fSec(){
        let date=new Date()
        let hourN= date.getHours()
        let minN = date.getMinutes()
        let secN = date.getSeconds()

        time.innerHTML =hourN+":"+minN+":"+secN


        document.querySelector('.sec').style.transform='rotate('+sec+'deg)';
        document.querySelector('.minut').style.transform='rotate('+min+'deg)';
        document.querySelector('.hour').style.transform='rotate('+hour+'deg)';

        if(sec+deg==546){
            sec=180;
            min=min+deg;
            hour=hour+degh
        }

        sec=sec+deg;
    }



    function pos(){

        const diamentr=parseFloat(document.querySelector('.diament').value)
        let clock =document.querySelector(".clock")
    
        clock.style.width = diamentr+'px'
        clock.style.height = diamentr+'px'


        const radius = diamentr/2
        const angle =30/180*Math.PI
    
        let center = document.querySelector('.center')
    
        let centerCenterX= center.offsetLeft+center.offsetWidth/2
        let centerCenterY= center.offsetTop+center.offsetHeight/2
    
    
    
        for( let i=12;i>0;i--){
            
             let div=document.createElement("div");
             div.classList.add("clock-item")
             div.innerHTML=i
             clock.appendChild(div)
    
            let clockItemcenterX = centerCenterX +radius*Math.sin(angle*i) 
            let clockItemcenterY = centerCenterY -radius*Math.cos(angle*i)
    
            div.style.left =Math.round(clockItemcenterX - div.offsetWidth/2)+'px';
            div.style.top =Math.round(clockItemcenterY - div.offsetHeight/2)+'px';
    
             
        }
     
    }
    
}



