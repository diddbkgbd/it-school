"use strict"

function check(str){
    str = str.replaceAll('&', '&amp;');
    str = str.replaceAll('<', '&lt;');
    str = str.replaceAll('>', '&gt;');
    str = str.replaceAll('\'', '&apos;');
    str = str.replaceAll('\"', '&quot;');
    return str;
}
  

function buildWrapper(teg){
    let item = document.createElement(teg)
    function wrap(text, attribute){
        text = check(text)
        item.textContent=text;
        for(let key in attribute){
            let att = check(attribute[key])
            item.setAttribute(key,att)
        }
        return item
        
    }
    return wrap;
};   

var wrapP=buildWrapper("P");   
  console.log( wrapP("Однажды в студёную зимнюю пору") );
  // в консоль выводится строка "<P>Однажды в студёную зимнюю пору</P>"
 console.log( wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}) );
  // в консоль выводится строка "<P lang='ru'>Однажды в студёную зимнюю пору</P>"

  console.log( wrapP("Однажды в <студёную> зимнюю пору") );
//   // в консоль выводится строка "<P>Однажды в &lt;студёную&gt; зимнюю пору</P>"
  var wrapH1=buildWrapper("H1"); // строим функцию для оборачивания текста в тег H1
  console.log( wrapH1("СТИХИ",{align:"center",title:"M&M's"}) );
//   // в консоль выводится строка "<H1 align='center' title='M&amp;M&apos;s'>СТИХИ</H1>"