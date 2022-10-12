class PlayerStorage {
    
    constructor(key_st) {
      this.storage = GetData() || new Object()
      this.storage.name = key_st
      this.storage.score = 0
      this.storage.gameSatrt = false
      this.storage.gameRun = false
    } 
    addPlayer(Name){
        this.storage.name = Name;
    } 
  }
class Player {
    constructor(name) {
        this.name = name;
        this.gameStart = false;
        this.gameRun = false
        this.lives = 3;
        this.score=0;
    }
}

function PostData() {
    PlayerStorage = {
        1: "12345",
        2:"1234567890"
    }
    $.ajax("https://fe.it-academy.by/AjaxStringStorage2.php", {
            type:'POST', dataType:'json', data:{func:'INSERT',n:"PlayerStorage", v:PlayerStorage},
            cache:false,
            success:successLoad(), error:errorHandler,
        
        })
}
function GetData() {
    $.ajax("https://fe.it-academy.by/AjaxStringStorage2.php", {
            type:'POST', dataType:'json', data:{func:'READ',n:"PlayerStorage",},
            cache:false,
            success:success, complete:complete, error:errorHandler,

        }
    );
}
function successLoad(){
    console.log("SEND")
}

function success(data) {
    if (data){
        console.log('загруженные через AJAX данные:');
        console.log(data);
        return data;   
    }

   
}

function complete() {
    // document.getElementById('IProgress').style.display="none";
    alert("done")
}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}

