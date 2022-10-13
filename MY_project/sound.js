let hitraketAudio = new Audio("sounds/hitRacket.mp3");
let gameOverAudio = new Audio("sounds/gameOver.mp3");
let hitBlockAudio = new Audio("sounds/block.mp3");
let winAudio = new Audio("sounds/winning.mp3");



// hitraketAudio.play()
hitraketAudio.stop()

function soundHotRacket (){
    // hitraketAudio.src = "sounds/hitRacket.mp3"
    hitraketAudio.play()
}


hitBlockAudio.stop()

function soundhitBlock (){
    hitBlockAudio.play()
}


gameOverAudio.stop()

function soundGameOver (){
    gameOverAudio.play()
}


// winAudio.play()
winAudio.stop()

function soundWin (){
    winAudio.play()
}

