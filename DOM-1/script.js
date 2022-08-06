"use strict"

var formDef1=
[
    { 
        label:'Название сайта:',
        kind:'longtext',   //type
        name:'sitename'
    },
    {
        label:'URL сайта:',
        kind:'longtext',
        name:'siteurl'
    },
    {
        label:'Посетителей в сутки:',
        kind:'number',
        name:'visitors'
    },
    {
        label:'E-mail для связи:',
        kind:'shorttext',
        name:'email'
    },
    {
        label:'Рубрика каталога:',
        kind:'combo',
        name:'division',
        variants:[
            {text:'здоровье',value:1},
            {text:'домашний уют',value:2},
            {text:'бытовая техника',value:3}
        ]
    },
    {
        label:'Размещение:',
        kind:'radio',
        name:'payment',
        variants:[
            {text:'бесплатное',value:1},
            {text:'платное',value:2},
            {text:'VIP',value:3}
        ]
    },
    {
        label:'Разрешить отзывы:',
        kind:'check',
        name:'votes'
    },
    {
        label:'Описание сайта:',
        kind:'memo',
        name:'description'},
    {
        caption:'Опубликовать',
        kind:'submit'
    },
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];



function creatForm(formDef){
    let form=document.forms.form;
    let newform = document.createElement('form')
    for(let i=0;i<formDef.length;i++){

        let label = formDef[i].label
        let kind = formDef[i].kind
        let name = formDef[i].name
        let variants = formDef[i].variants
        let caption= formDef[i].caption

        let p=document.createElement('p')
        let input;
        
        if(label){
            let lbt = document.createElement('label')
            lbt.innerHTML=label
            p.appendChild(lbt)
        }
        if(caption){
            input = document.createElement('input')
            input.type=kind 
            p.appendChild(input)  
           
               
        }
        if ( kind=="longtext"||kind=="number"|| kind=="shorttext"){
            input = document.createElement("input")
            input.type=kind 
            input.name=name;
            p.appendChild(input)
        }
        else if (kind=="combo"){
            let input = document.createElement("select")
            input.name=name;
            for (let key in variants){
                let option = document.createElement("option")
                option.innerHTML = variants[key].text
                option.setAttribute("value",variants[key].value)
                input.appendChild(option)
            }
            p.appendChild(input)
        }
        else if (kind=="radio"){
            for (let key in variants){
                let input = document.createElement("input")
                input.type=kind 
                input.name=name;
                let span  = document.createTextNode(variants[key].text)
                p.appendChild(input)
                p.appendChild(span)
            }
        }
        else if(kind=="check"){
            let input = document.createElement("input")
            input.type="checkbox" 
            input.name=name;
            p.appendChild(input) 
        }
        else if(kind=="memo"){
            let input = document.createElement("textarea") 
            input.name=name; 
            p.appendChild(input) 
        }
         
        newform.appendChild(p)
    }
    document.body.replaceChild(newform,form)

}

creatForm(formDef2)