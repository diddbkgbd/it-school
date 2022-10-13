"use strict";

  // SPA
window.onhashchange=switchToStateFromURLHash;
window.onbeforeunload=switchToStateFromURLHash;
  
let SPAState={};

let newPlayer = new Player();

function switchToStateFromURLHash() {
    var URLHash=window.location.hash;

    var stateStr=URLHash.substring(1);
    
    if ( stateStr!="" ) { 
      let parts=stateStr.split("_")
      SPAState={ pagename: parts[0] };     
      console.log(SPAState.pagename+"_"+newPlayer.gameStart)
    }
    else{
      SPAState={pagename:'Main'};
    }
       // иначе показываем главную страницу
    if( newPlayer.gameStart ==true){
      warning()
      alert("Не сохраниться!!!!")
    }
    console.log('Новое состояние приложения:');
    console.log(SPAState);

    // обновляем вариабельную часть страницы под текущее состояние

    let pageHTML_left="";
    let pageHTML_right = "";
    let IPAGE = document.getElementById("IPage")
    let IpageRight = document.getElementById("IpageRight")
    switch ( SPAState.pagename ) {
      case 'Main':
        newPlayer = new Player
        pageHTML_left ='<img class="main_logo" src="images/main.svg" alt="logo">'
        IPAGE.innerHTML=pageHTML_left;
        pageHTML_right = '<form action=""> <fieldset> <legend>Info</legend> <label for="name">Введите свой Ник:</label> <input type="text" id= "Name"> </fieldset> <div class="points"> <input type="checkbox" name="agree" id="agree">     <label for="agree">Согласен обрабатывать данные </label></div><input id = "Game_page" type="button" onclick="switchToGamePage()"  value="Начать игру"></form>'
        IpageRight.innerHTML=pageHTML_right;
        break;

      case 'Game':
        pageHTML_left = ' <canvas id="myCanvas" width="1200" height="800"></canvas> '
        IPAGE.innerHTML=pageHTML_left;
         pageHTML_right+='<h1>Привет, Дорогой Друг!</h1> <p class="rules">Правила игры:</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam saepe libero tempora consectetur doloribus quo quia dolorum, quasi deserunt blanditiis asperiores possimus hic, id perspiciatis officia natus quae explicabo?</p> <input type="button" id="Start" value="Start!"> <input type="button" id="Pause" value="Pause!"> <input type="button" id="Results" value="Results!">' 
        IpageRight.innerHTML=pageHTML_right;
        START()
        break;

      case 'Record':
        IPAGE.innerHTML="";
        resultTableBilding()
        // IPAGE.innerHTML=resultTableBilding();
        pageHTML_right+='<h1>Поздравляю, Дорогой Друг!</h1> <p class="rules">Данные таблицы:</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam saepe libero tempora consectetur doloribus quo quia dolorum, quasi deserunt blanditiis asperiores possimus hic, id perspiciatis officia natus quae explicabo?</p> <input type="button" id="Main" value="Main!" onclick="switchToMainPage()"> ' 
        IpageRight.innerHTML=pageHTML_right;
        break;
    }
    // IPAGE.innerHTML=pageHTML;

  }


  function switchToState(newState) {

    var stateStr=newState.pagename;
  
    location.hash=stateStr;
  }

  function switchToMainPage() {
    switchToState( { pagename:'Main' } );
  }

  function switchToGamePage() {
    GetName()
    switchToState( { pagename:'Game' } );
  }

  function switchToResultsPage() {
    switchToState( { pagename:'Record' } );
  }


  switchToStateFromURLHash();


function GetName(){
    let NICK = document.getElementById("Name").value;
    newPlayer.name = NICK
    console.log(newPlayer)
}




