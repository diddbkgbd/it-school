var ballElem=document.getElementById('IBall');

let countLeft =0
let countRight =0

const score = document.getElementById('score');
score.innerHTML = countLeft +":" +countRight

let ballH={
    posX : 500,
    posY : 300,
    speedX : 3,
    speedY : 3,
    width : 25,
    height: 25,

    update : function() {
        var ballElem=document.getElementById('IBall');
        ballElem.style.left=this.posX+"px";
        ballElem.style.top=this.posY+"px";
    }
}

const areaH={
    width : 1000,
    height : 600
}
setInterval(draw, 10);

function start() {
    let ballH={
        posX : 500,
        posY : 300,
        speedX : 3,
        speedY : 3,
        width : 25,
        height: 25,
    
        update : function() {
            var ballElem=document.getElementById('IBall');
            ballElem.style.left=this.posX+"px";
            ballElem.style.top=this.posY+"px";
        }
    }
    
    document.addEventListener("mousemove", mouseMoveHandler, false);
    requestAnimationFrame(tick);
   

    function tick() {
        ballH.posX+=ballH.speedX;


        ballH.posY+=ballH.speedY;
        // вылетел ли мяч ниже пола?
        if ( ballH.posY+ballH.height>areaH.height ) {
            ballH.speedY=-ballH.speedY;
            ballH.posY=areaH.height-ballH.height;
            vibro(false);
        }
        // вылетел ли мяч выше потолка?
        if ( ballH.posY<=ballH.height ) {
            ballH.speedY=-ballH.speedY;
            ballH.posY=25;
            vibro(false);
        }

        if (collision(leftH, ballH)){
            ballH.speedX=-ballH.speedX;
            ballH.posX=leftH.posX+ballH.width+leftH.width/2;
            vibro(true);
        }

        if(collision(rightH, ballH)){
            ballH.speedX=-ballH.speedX;
            ballH.posX=rightH.posX-ballH.width - rightH.width/2;
            vibro(false);
        }
        
        // вылетел ли мяч правее стены?
        if ( ballH.posX+ballH.width>=areaH.width ) {
            countRight++
            score.innerHTML = countLeft +":" +countRight
            return
        
        }
        // вылетел ли мяч левее стены?
        if ( ballH.posX<25) {
            countLeft++
            score.innerHTML = countLeft +":" +countRight
            return
        
        }

        ballH.update();

        requestAnimationFrame(tick);
        ballH.update();

        function vibro(longFlag) {
            // есть поддержка Vibration API?
            if ( navigator.vibrate ) {
                if ( !longFlag ) {
                    // вибрация 100мс
                    window.navigator.vibrate(100);
                }
                else {
                    // вибрация 3 раза по 100мс с паузами 50мс
                    window.navigator.vibrate([100,50,100,50,100]);
                }
            }
        }
    }
}

// control left paddle

var downPressed = false;
var upPressed = false;



let leftH={
    posX : 15,
    posY : 300,
    width : 30,
    height: 150,

    update : function() {
        let leftpaddle = document.querySelector(".left")
        leftpaddle.style.top=this.posY+"px";
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 17) {
        downPressed = true; //vniz
    }
    else if(e.keyCode == 16) {
        upPressed = true;//vverx
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 17) {
        downPressed = false;
    }
    else if(e.keyCode == 16) {
        upPressed = false;
    }
}


function draw() {
    
    if(downPressed && leftH.posY < areaH.height-leftH.height/2) {
        leftH.posY += 7;
    }
    else if(upPressed && leftH.posY > leftH.height/2) {
        leftH.posY -= 7;
    }

    leftH.update();
}

// control right paddle

let rightH={
    posX : 985,
    posY : 300,
    width : 30,
    height: 150,

    update : function() {
        let leftpaddle = document.querySelector(".left")
        leftpaddle.style.top=this.posY+"px";
    }
}
var paddleX = (areaH.width-rightH.width)/2;


let rightpaddle = document.querySelector(".right")
let field = document.querySelector(".play-fild")

function mouseMoveHandler(e) {
    rightH.posY = e.clientY - field.offsetTop; //координаты центра правой ракетки
    if(rightH.posY > rightH.height/2 && rightH.posY < areaH.height-rightH.height/2) {
        rightpaddle.style.top = rightH.posY+"px"
    }
}
// отбивание мяча 

function collision(objA, objB) {

        if(objA.posX <= objB.posX + objB.width &&
            objA.posX + objA.width >= objB.posX &&
            objA.posY <= objB.posY + objB.height &&
            objA.height + objA.posY >= objB.posY){

            return true;
        }
        else {
            return false;
            }
    }