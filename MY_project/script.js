"use stict"

//САМА ИГРА!!!!!!

function warning(EO){
    EO = EO||window.event
    console.log("GameStart"+newPlayer.gameStart)
    console.log(newPlayer.gameStart);
    if (newPlayer.gameStart ){
        EO.returnValue='А у вас есть несохранённые изменения!';
    };

}
let gameRun = false

function START (){
  document.querySelector(".name").innerHTML = newPlayer.name

    window.onbeforeunload= warning
    console.error("START!!!!")

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    

   

    let startButton = document.getElementById("Start")
    let pauseButton = document.getElementById("Pause")
    let resultsButton = document.getElementById("Results")


     
  

    let Ball = {
        x : (canvas.width-80)/2,
        y: canvas.height-80-40,
        width: 80, 
        height:80, 
        radius: 80, 
        dx: 4, 
        dy:4
    }
    
    let Paddle = {
        width: 150, 
        height: 20, 
        x: (canvas.width-150)/2,
        y: canvas.height - 20
    }
    
    let Brick ={
        row:5,
        column: 3, 
        width: 200, 
        height: 50, 
        padding: 40, 
        offsetTop: 60, 
        offsetLeft: 20
    }
    
    var rightPressed = false;
    var leftPressed = false;
    

    let ball=new Image();
    ball.src='images/ball.png';

    var brick_img=new Image();
    brick_img.src='images/main_5.jpg';
    
    var bricks = [];
    for(var c=0; c<Brick.column; c++) {
      bricks[c] = [];
      for(var r=0; r<Brick.row; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
    
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.querySelector(".arrowLeft").addEventListener("touchstart", ()=>{
      console.log(123);
      leftPressed = true;
    })
    document.querySelector(".arrowRight").addEventListener("touchstart", ()=>{
      rightPressed = true;
    })
    document.querySelector(".arrowLeft").addEventListener("touchend", ()=>{
      leftPressed = false;
    })
    document.querySelector(".arrowRight").addEventListener("touchend", ()=>{
      rightPressed = false;
    })
    // canvas.addEventListener("mousemove", mouseMoveHandler, false);

   
    
    
    function keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
    }
    
    function keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }
    
    function mouseMoveHandler(e) {
      console.log( canvas.offsetLeft);
      let relativeX = e.clientX - canvas.offsetLeft;
      if(relativeX > 0 && relativeX < canvas.width) {
        Paddle.x = relativeX - Paddle.width/2;
      }
    }
    
    
    function collisionDetection() {
      for(var c=0; c<Brick.column; c++) {
        for(var r=0; r<Brick.row; r++) {
          var b = bricks[c][r];
          if(b.status == 1) {
            if(Ball.x +Ball.width> b.x && Ball.x < b.x+Brick.width && Ball.y+Ball.height > b.y && Ball.y < b.y+Brick.height) {
              Ball.dy = -Ball.dy;
              b.status = 0;
              
              newPlayer.score++
              phrases = [
                'Так держать, еще чуть-чуть и выиграем!',
              ]
              next()
              soundhitBlock()

              if(newPlayer.score == Brick.column*Brick.row) {
                phrases = [
                  'Я верил, что мы победим!',
              ]
                next()
                newPlayer.gameStart = false
                soundWin ()          
                SendRezult(newPlayer)
                resultsGame()
                
              }
            }
          }
        }
      }
    }
    
    
  
 

    function drawBall() {
        ctx.drawImage(ball,Ball.x,Ball.y,Ball.radius,Ball.radius);
    }
    
    function drawPaddle() {
        
      ctx.beginPath();
      ctx.rect(Paddle.x, canvas.height-Paddle.height, Paddle.width, Paddle.height);
      ctx.fillStyle = "#DAA520";
      ctx.fill();
      ctx.closePath();
    }
    
    
    
    
    function drawBricks() {
      for(var c=0; c<Brick.column; c++) {
        for(var r=0; r<Brick.row; r++) {
          if(bricks[c][r].status == 1) {
            var brickX = (r*(Brick.width+Brick.padding))+Brick.offsetLeft;
            var brickY = (c*(Brick.height+Brick.padding))+Brick.offsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
        
            ctx.drawImage(brick_img, brickX, brickY, Brick.width, Brick.height);
          }
        }
      }
    }
    function drawScore() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Score: "+newPlayer.score, 8, 20);
    }
    function drawLives() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Lives: "+newPlayer.lives, canvas.width-65, 20);
    }
    
    
    
    function collision(objA, objB) {
    
        if(objA.x <= objB.x + objB.width && objA.x + objA.width >= objB.x && objA.y <= objB.y + objB.height &&
            objA.height + objA.y >= objB.y){
    
            return true;
        }
        else {
            return false;
        }
        
    }
    
    function draw() {
      window.onhashchange=switchToStateFromURLHash
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPaddle();
      drawBricks();
      drawBall();
      drawScore();
      drawLives();
      collisionDetection()
      

      if (collision(Ball,Paddle)==true){
            Ball.dy = -Ball.dy
            soundHotRacket ()
        }
    // отбивание от крайов
      if(Ball.x + Ball.dx > canvas.width-Ball.radius || Ball.x + Ball.dx < 0) {
        Ball.dx = -Ball.dx;
      }
      if(Ball.y + Ball.dy < 0) {
        Ball.dy = -Ball.dy;
      }
      else if(Ball.y + Ball.dy > canvas.height-Ball.radius) {
        if(Ball.x > Paddle.x && Ball.x < Paddle.x + Paddle.width) {//!!!!!!!!!!!!!!!!!!!!!!!!!!
            Ball.dy = -Ball.dy;
        }
        else {
          newPlayer.lives--;
          phrases = [
            'Кто не ошибается, не пьет шампанское!',
        ]
        next()
          if(!newPlayer.lives) {
            soundGameOver ()
            newPlayer.gameStart= false
            document.location.reload();
          }
          else {
            Ball.x = (canvas.width-80)/2;
            Ball.y = canvas.height-80-30;
            Ball.dx = 3;
            Ball.dy = -3;
            Paddle.x = (canvas.width-Paddle.width)/2;
          }
        }
      }
    
      if(rightPressed && Paddle.x < canvas.width-Paddle.width) {
        Paddle.x += 7;
      }
      else if(leftPressed && Paddle.x > 0) {
        Paddle.x -= 7;
      }
    
      Ball.x += Ball.dx;
      Ball.y += Ball.dy;


      if (gameRun){
        requestAnimationFrame(draw);
      }
   
    }
   
    
    
    ball.onload = function(){
        startButton.addEventListener("click", startGame) 
        brick_img.onload = draw      
    }
    function startGame(){
        pauseButton.addEventListener("click", pauseGame)
        startButton.style.display = "none"
        pauseButton.style.display = "block"
        gameRun = true;

        newPlayer.gameStart=true;
        console.log (newPlayer.gameStart)
        draw()
    }

    function pauseGame(){
        phrases = [
          'Возвращайся, игра ждет тебя!',
      ]
        gameRun = false
        startButton.style.display = "block"
        pauseButton.style.display = "none"
    }
    function resultsGame(){
        pauseButton.style.display = "none"
        resultsButton.style.display = "block"
        gameRun=false;
        resultsButton.addEventListener("click", switchToResultsPage)
        
        // document.location.reload();
    }

   


 }




