"use strict";
const dev=document.getElementById("dev")
const names=document.getElementById("name")
const site=document.getElementById("site")
const date=document.getElementById("date")
const kol=document.getElementById("kol")
const mail=document.getElementById("mail")
const adder=document.getElementById("adder")
const place=document.getElementById("place")
const mess=document.getElementById("mess")
const desc=document.getElementById("desc")

let  form = document.forms.FORMIN;
let ch = false
dev.addEventListener("blur", (EO)=> devValid(false))
names.addEventListener("blur",(EO)=> namesValid(false))
site.addEventListener("blur", (EO)=>siteValid(false))
date.addEventListener("blur",(EO)=> dateValid(false))
kol.addEventListener("blur",(EO)=> kolValid(false))
mail.addEventListener("blur",(EO)=> mailValid(false))
adder.addEventListener("change", (EO)=>adderValid(false))
place.addEventListener("change",(EO)=> placeValid(false))
mess.addEventListener("click",(EO)=> messValid(false))
desc.addEventListener("blur", (EO)=>descValid(false))
form.addEventListener("submit", check)




function checkRus(str){
    const cyrillicPattern = /^[\u0400-\u04FF]+$/;
    return cyrillicPattern.test(str)
}
function checkEng(str){
    const cyrillicPattern =  /^[A-Za-z0-9]*$/;
    return cyrillicPattern.test(str)
}


function devValid(fcs){

    let dev = document.getElementById("dev");
    let value = dev.value.trim();
    let error = document.getElementById("error-dev")
    if (!value || value.lenght<30 || !checkRus(value) ){
        error.innerHTML = "Имя разработчиков должно состоять из русских букв, не быть пустым и быть менее 30 символов";
        // eo.preventDefault()
        if(fcs){
            dev.focus()
            
        }
        return false ;

    }
    else {
        error.innerHTML = ""
        return true;
    }
}

function siteValid(fcs){

    let site = document.getElementById("site");
    let value = site.value.trim();
    let error = document.getElementById("error-site")
    if (!value || value.lenght<30 ||!checkEng(value) ){
        error.innerHTML = "URL сайта должно состоять из АНГЛ букв,  не быть пустым и быть менее 30 символов";
        // eo.preventDefault()
        if(fcs){
            site.focus()
            
        }
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}

    
function namesValid(fcs){

    let names = document.getElementById("name");
    let value = names.value.trim();
    let error = document.getElementById("error-name")
    if (!value || value.lenght<30){
        error.innerHTML = "Название сайта должно не быть пустым и быть менее 30 символов";
        // eo.preventDefault()
        if(fcs){
            names.focus()
            
        }
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}


function dateValid(fcs){

    let names = document.getElementById("date");
    let value = names.value.trim();
    let error = document.getElementById("error-date")
    if (!value || value.lenght<30){
        error.innerHTML = "Дата должно не быть пустым и быть менее 30 символов";
        if(fcs){
            names.focus()
            
        }
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}

function kolValid(fcs){

    let names = document.getElementById("kol");
    let value = names.value.trim();
    let error = document.getElementById("error-kol")
    if (!value || value.lenght<30){
        error.innerHTML = "Количество посетителей должно не быть пустым и быть менее 30 символов";
        if(fcs){
            names.focus()
            
        }
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}


function mailValid(fcs){

    let names = document.getElementById("mail");
    let value = names.value.trim();
    let error = document.getElementById("error-mail")
    if (!value || value.lenght<30 || !value.includes("@")){
        error.innerHTML = "E-mail для связи должно не быть пустым, должно состоять из АНГЛ букв и содержать '@' и быть менее 30 символов";
        if(fcs){
            names.focus()
            
        }
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}


function adderValid(fcs){


    const adders = document.getElementById("adder")
    let value = adders.value;
    let error = document.getElementById("error-adder")
    if (value==1){
        error.innerHTML = "выберите другой каталог, этот недоступен";
        // if(fcs){
        //     adders.focus()
            
        // }
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}


function placeValid(fcs){
 

    let  form = document.forms.FORMIN;
    let radios = form.elements.field
    let value = radios.value;
    let error = document.getElementById("error-radio")
    if (value==1|| !value){
        error.innerHTML = "выберите другое размещение, этот недоступен";
        // eo.preventDefault()
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}


function messValid(fcs){
  
    let  form = document.forms.FORMIN;
    let radios = form.elements.agreed
    let value = radios.checked;
    let error = document.getElementById("error-agreed")

    if (!value){
        error.innerHTML = "разрешите оставить отзыв!";
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}



function descValid(fcs){

    let names = document.getElementById("desc");
    let value = names.value.trim();
    let error = document.getElementById("error-descrip")
    if (!value || value.lenght<30|| !checkRus(value)){
        error.innerHTML = "Описание сайта должно на русском языке,  не быть пустым и быть менее 30 символов";
        if(fcs){
            names.focus()
            
        }
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}

function check(eo){
    eo = eo||window.target
    let a= devValid(true)
    let b = siteValid(true)
    let c = namesValid(true)
    let d= dateValid(true)
    let i= kolValid(true)
    let k= mailValid(true)
    let m= adderValid()
    let p= placeValid(true)
    let f= messValid(true)
    let g= descValid(true)

    console.log(a+b+c+d+i+k+m+p+f+g)

    if (!(a && b && c && d &&i && k && m && p && f && g)) {
        eo.preventDefault()
        return
    }
   


}