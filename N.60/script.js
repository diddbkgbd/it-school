// https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json
// https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json
testLoadData()

function testLoadData() {
    $.ajax("https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json",
        { type:'GET', dataType:'text', success:creatForm, error:errorHandler }
    );
    $.ajax("https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json",
    { type:'GET', dataType:'text', success:creatForm, error:errorHandler }
);
}


// function testLoadData() {
//     $.ajax("https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json",
//         { type:'GET', dataType:'text', success:creatForm, error:errorHandler }
//     );
// }


function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}

function creatForm(formDef){

    formDef=JSON.parse(formDef)
    console.log(formDef);
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
    document.body.appendChild(newform)

}

