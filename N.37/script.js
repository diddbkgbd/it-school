
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const TIME = document.querySelector("#time");

const roundH = 12;
const rountSM = 60


const date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let deg = 6
let degh=0.5

//таймер
const runClock = () => {
    
    const date = new Date();
    hrInfo = date.getHours();
    minInfo = date.getMinutes();
    secInfo = date.getSeconds();

    // счетчик часов после запуска 
    sec++
    if (sec==60){
        min++
    }
    if (min==60){
        hour++
    }
    
    TIME.textContent =hrInfo +"."+minInfo+"."+secInfo

    let hrPosition = (hr * 360) / roundH + (min * (360 / rountSM)) / roundH;
    let minPosition = (min * 360) / rountSM + (sec * (360 / rountSM)) / rountSM;
    let secPosition = (sec * 360) / rountSM;
    


    hrPosition = hrPosition + 3 / 360;
    minPosition = minPosition + 6 / 60;
    secPosition = secPosition + 6;
  

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

  };

 
document.querySelector('.add').onclick=function creatClock(){
    let input = document.querySelector(".input")
    input.style.display= "none"
    let clockConteiner= document.querySelector(".clock-conteiner")

    clockConteiner.style.display="block"

    const date = new Date();

    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    //точка начала
    let hrPosition = (hr * 360) / roundH + (min * (360 / rountSM)) / roundH;
    let minPosition = (min * 360) / rountSM + (sec * (360 / rountSM)) / rountSM;
    let secPosition = (sec * 360) / rountSM;
    


    hrPosition = hrPosition + 3 / 360;
    minPosition = minPosition + 6 / 60;
    secPosition = secPosition + 6;
  

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";


    console.error("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    //изменение размера часов
    let clockbox = document.querySelector(".clockbox ");
    let clock = document.querySelector(" #clock");

    const width =document.querySelector('input').value

    clockbox.style.width = width+"px"
    clockbox.style.height = width+"px"
    clock.style.width = width+"px"
    clock.style.height = width+"px"
    runClock()
    pos()
    setInterval(runClock, 1000);

}


function pos(){
    const clock = document.querySelector("#clock");
    const width =document.querySelector('input').value
    const radius = 250 // радиус круга часов

    const angle =30/180*Math.PI

    let center = document.querySelector('.mid-circle')

    let centerCenterX= 300+8
    let centerCenterY= 300+8


    for( let i=1;i<13;i++){
        let face = document.querySelector("#one")
            let g = document.createElementNS("http://www.w3.org/2000/svg", "g");

            let raund = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            raund.setAttributeNS(null,"r",15)

            let text =document.createElementNS("http://www.w3.org/2000/svg","text");
            text.setAttribute("text-anchor", "middle")

            raund.classList.add("clock-item")
            text.textContent=i

            g.appendChild(raund)
            g.appendChild(text)
            

            face.appendChild(g)

           
            let clockItemcenterX = centerCenterX +radius*Math.sin(angle*i) 
            let clockItemcenterY = centerCenterY -radius*Math.cos(angle*i)
    
            // div.style.left =Math.round(clockItemcenterX - div.offsetWidth/2)+'px';
            // div.style.top =Math.round(clockItemcenterY - div.offsetHeight/2)+'px';


        let left =Math.round(clockItemcenterX - 7.5);
        let top =Math.round(clockItemcenterY - 7.5);

        raund.setAttribute("cx",left)
        raund.setAttribute("cy",top)
        text.setAttribute("x",left)
        text.setAttribute("y",top+6)

            
    }
    
}



// let container = document.querySelector("#face")
// for (var x = 0; x < 500; x += 50) {
//     for (var y = 0; y < 300; y += 50) {
//         var circle = document.createElementNS(svgns, 'circle');
//         circle.setAttributeNS(null, 'cx', x);
//         circle.setAttributeNS(null, 'cy', y);
//         circle.setAttributeNS(null, 'r', 50);
//         circle.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;' );
//         container.appendChild(circle);
//     }
// }

