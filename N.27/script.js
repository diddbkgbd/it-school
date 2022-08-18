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

dev.addEventListener("blur", devValid)
names.addEventListener("blur", namesValid)
site.addEventListener("blur", siteValid)
date.addEventListener("blur", dateValid)
kol.addEventListener("blur", kolValid)
mail.addEventListener("blur", mailValid)
adder.addEventListener("change", adderValid)
place.addEventListener("change", placeValid)
mess.addEventListener("click", messValid)
desc.addEventListener("blur", descValid)
form.addEventListener("submit", check)




function checkRus(str){
    const cyrillicPattern = /^[\u0400-\u04FF]+$/;
    return cyrillicPattern.test(str)
}
function checkEng(str){
    const cyrillicPattern =  /^[A-Za-z0-9]*$/;
    return cyrillicPattern.test(str)
}


function devValid(eo){
    eo = eo||window.target
    let dev = document.getElementById("dev");
    let value = dev.value.trim();
    let error = document.getElementById("error-dev")
    if (!value || value.lenght<30 || !checkRus(value) ){
        error.innerHTML = "Имя разработчиков должно состоять из русских букв, не быть пустым и быть менее 30 символов";
        // eo.preventDefault()
        return false ;
    }
    else {
        error.innerHTML = ""
        return true;
    }
}

function siteValid(eo){
    eo = eo||window.target
    let site = document.getElementById("site");
    let value = site.value.trim();
    let error = document.getElementById("error-site")
    if (!value || value.lenght<30 ||!checkEng(value) ){
        error.innerHTML = "URL сайта должно состоять из АНГЛ букв,  не быть пустым и быть менее 30 символов";
        // eo.preventDefault()
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}

    
function namesValid(eo){
    eo = eo||window.target
    let names = document.getElementById("name");
    let value = names.value.trim();
    let error = document.getElementById("error-name")
    if (!value || value.lenght<30){
        error.innerHTML = "Название сайта должно не быть пустым и быть менее 30 символов";
        // eo.preventDefault()
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}


function dateValid(eo){
    eo = eo||window.target
    let names = document.getElementById("date");
    let value = names.value.trim();
    let error = document.getElementById("error-date")
    if (!value || value.lenght<30){
        error.innerHTML = "Дата должно не быть пустым и быть менее 30 символов";
        // eo.preventDefault()
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}

function kolValid(eo){
    eo = eo||window.target
    let names = document.getElementById("kol");
    let value = names.value.trim();
    let error = document.getElementById("error-kol")
    if (!value || value.lenght<30){
        error.innerHTML = "Количество посетителей должно не быть пустым и быть менее 30 символов";
        // eo.preventDefault()
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}


function mailValid(eo){
    eo = eo||window.target
    let names = document.getElementById("mail");
    let value = names.value.trim();
    let error = document.getElementById("error-mail")
    if (!value || value.lenght<30 || !value.includes("@")){
        error.innerHTML = "E-mail для связи должно не быть пустым, должно состоять из АНГЛ букв и содержать '@' и быть менее 30 символов";
        // eo.preventDefault()
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}


function adderValid(eo){

    eo = eo||window.target
    const adders = document.getElementById("adder")
    let value = adders.value;
    let error = document.getElementById("error-adder")
    if (value==1){
        error.innerHTML = "выберите другой каталог, этот недоступен";
        // eo.preventDefault()
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}


function placeValid(eo){
    eo = eo||window.target

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


function messValid(eo){
    eo = eo||window.target
    let  form = document.forms.FORMIN;
    let radios = form.elements.agreed
    let value = radios.checked;
    let error = document.getElementById("error-agreed")

    if (!value){
        error.innerHTML = "разрешите оставить отзыв!";
        // eo.preventDefault();
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}



function descValid(eo){
    eo = eo||window.target
    let names = document.getElementById("desc");
    let value = names.value.trim();
    let error = document.getElementById("error-descrip")
    if (!value || value.lenght<30|| !checkRus(value)){
        error.innerHTML = "Описание сайта должно на русском языке,  не быть пустым и быть менее 30 символов";
        // eo.preventDefault()
        return false ;
    }
    else {
        error.innerHTML = ""
        return true
    }
}

function check(eo){
    eo = eo||window.target
    let a= devValid()
    let b = siteValid()
    let c = namesValid()
    let d= dateValid()
    let i= kolValid()
    let k= mailValid()
    let m= adderValid()
    let p= placeValid()
    let f= messValid()
    let g= descValid()

    if (!(a && b && c && d &&i && k && m && p && f && g)) {
        eo.preventDefault()
        return
    }

}