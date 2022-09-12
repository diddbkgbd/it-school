
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


    setInterval(runClock, 1000);

}


function pos(){
    const clock = document.querySelector("#clock");
    const radius = 400
    const angle =30/180*Math.PI

    let center = document.querySelector('.mid-circle')

    let centerCenterX= 300
    let centerCenterY= 300



    for( let i=1;i<12;i++){
        let face = document.querySelector("#one")
            let div=document.createElement("g");
            let raund=document.createElement('circle');
            raund.setAttribute("r",15)

            let text =document.createElement("text");

            raund.classList.add("clock-item")
            text.textContent=i
            div.appendChild(raund)
            div.appendChild(text)
            face.appendChild(div)

        let clockItemcenterX = radius*Math.sin(angle*i) 
        let clockItemcenterY = radius*Math.sin(angle*i)

        let left =Math.round(clockItemcenterX - 7.5);
        let top =Math.round(clockItemcenterY - 7.5);

        raund.setAttribute("cx",left)
        raund.setAttribute("cy",top)
        text.setAttribute("x",left)
        text.setAttribute("y",top)

            
    }
    
}
pos()


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

