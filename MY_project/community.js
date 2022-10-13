// class PlayerStorage {
    
//     constructor(key_st) {
//       this.storage = GetData() || new Object()
//       this.storage.name = key_st
//       this.storage.score = 0
//       this.storage.gameSatrt = false
//       this.storage.gameRun = false
//     } 
//     addPlayer(Name){
//         this.storage.name = Name;
//     } 
//   }


     


        // function PostData(LIST) { //отправляет список

        //     $.ajax("https://fe.it-academy.by/AjaxStringStorage2.php", {
        //             type:'POST', dataType:'json', data:{f:"INSERT",n:"result", v:LIST},
        //             cache:false,
        //             success:successLoad(), error:errorHandler,
                
        //         })
        // }
        // function GetData() {// получает данные
        //     $.ajax("https://fe.it-academy.by/AjaxStringStorage2.php", {
        //             type:'POST', dataType:'json', data:{f:"READ",n:"PlayerStorage",},
        //             cache:false,
        //             success:success, complete:complete, error:errorHandler,

        //         }
        //     );
        // }
             // function successLoad(){
        //     console.log("SEND")
        // }

        // function success(data) {
        //     if (data){
        //         console.log('загруженные через AJAX данные:');
        //         console.log(data);
        //         return data;   
        //     }

        
        // }

        // function complete() {
        //     // document.getElementById('IProgress').style.display="none";
        //     alert("done")
        // }

        // function errorHandler(jqXHR,statusStr,errorStr) {
        //     alert(statusStr+' '+errorStr);
        // }
        
        // function PostData() {
        //     PlayerStorage = {
        //         1: "12345",
        //         2:"1234567890"
        //     }
        //     $.ajax("https://fe.it-academy.by/AjaxStringStorage2.php", {
        //             type:'POST', dataType:'json', data:{func:'INSERT',n:"PlayerStorage", v:PlayerStorage},
        //             cache:false,
        //             success:successLoad(), error:errorHandler,
                
        //         })
        // }
        // function GetData() {
        //     $.ajax("https://fe.it-academy.by/AjaxStringStorage2.php", {
        //             type:'POST', dataType:'json', data:{func:'READ',n:"PlayerStorage",},
        //             cache:false,
        //             success:success, complete:complete, error:errorHandler,
        
        //         }
        //     );
        // }
        // function successLoad(){
        //     console.log("SEND")
        // }
        
        // function success(data) {
        //     if (data){
        //         console.log('загруженные через AJAX данные:');
        //         console.log(data);
        //         return data;   
        //     }
        
           
        // }
        
        // function complete() {
        //     // document.getElementById('IProgress').style.display="none";
        //     alert("done")
        // }
        
        // function errorHandler(jqXHR,statusStr,errorStr) {
        //     alert(statusStr+' '+errorStr);
        // }
    const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
    let updatePassword;
    const stringName='DIANA_RESULTS_INFO';

    
    class Player {
        constructor(name) {
            this.name = "Noname"||name;
            this.gameStart = false;
            this.gameRun = false
            this.lives = 3;
            this.score=0;
        }
    }
    
    console.log("______________________new_______________");


   

    function storeInfo() {
        console.log("storeInfo");
        updatePassword=Math.random();
        $.ajax( {
                url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                data : { f : 'LOCKGET', n : stringName, p : updatePassword },
                success : lockGetReady, error : errorHandler
            }
        );
    }



    function lockGetReady(callresult) {
        console.log("lockGetReady");
        if ( callresult.error!=undefined )
            alert(callresult.error);
        else {
            console.warn("lockGetReady" + PlayersList);
            const info=PlayersList;
            $.ajax( {
                    url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                    data : { f : 'UPDATE', n : stringName,
                        v : JSON.stringify(info), p : updatePassword },
                    success : updateReady, error : errorHandler
                }
            );
        }
    }



    function updateReady(callresult) {
        if ( callresult.error!=undefined )
            alert(callresult.error);
        else{
            console.log("ВСЕ ОТПРАВИЛОСЬ!!!!");
        }
    }

    function restoreInfo() {

        console.log("restoreInfo");
    
        console.log("START GETTING INFO");
        $.ajax(
            {
                url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                data : { f : 'READ', n : stringName },
                success : readReady, error : errorHandler
            }
        );
    }
    // let TESTLIST = new Object

    function readReady(callresult) {
        console.log("readReady");
        if ( callresult.error!=undefined )
            alert(callresult.error);
        else if ( callresult.result!="" ) {
            const info=JSON.parse(callresult.result);
            if(info.length!=0){
                PlayersList = info
                console.warn(PlayersList)
                return info
               
            }
            else{
                console.warn("PlayersList empty")
            }
           
            
        }
    }




    function errorHandler(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
    }





let PlayersList =  restoreInfo()||[]

function SendRezult(user){

    PlayersList.push(user)
    console.log(PlayersList)

    storeInfo()
}


function resultTableBilding(){
    console.log(PlayersList)
    let table = document.createElement('table');
    table.setAttribute("class", "resultTable")
    let IPAGE = document.getElementById("IPage")
    let IPAGEcontainer = document.createElement('div');
    IPAGEcontainer.setAttribute("class", "IPAGEcontainer")
    IPAGE.appendChild(IPAGEcontainer)
        var headertr = document.createElement('tr');
        
        var td = document.createElement('td');
        td.innerHTML ="Names" ;
        headertr.appendChild(td);

        var td = document.createElement('td');
        td.innerHTML ="Lives" ;
        headertr.appendChild(td);
        table.appendChild(headertr)
        
        

    var tr = document.createElement('tr');
    for(var i = 0; i < PlayersList.length; i++) {
        var tr = document.createElement('tr');
       
            var td = document.createElement('td');
            td.innerHTML =PlayersList[i].name ;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerHTML =PlayersList[i].lives ;
            tr.appendChild(td);
        
        table.appendChild(tr);
    }
    console.warn(table)
    IPAGEcontainer.appendChild(table)

}