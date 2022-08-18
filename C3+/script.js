
function deepComp(obj, obj2){    

        if ((obj instanceof Array && !(obj2 instanceof Array))|| (obj2 instanceof Array && !(obj instanceof Array))){
            return false
        }
        if (obj instanceof Array && obj2 instanceof Array ){
            if(obj.length!=obj2.length){
                return false
            }

            for( let i=0;i<obj.length;i++ ){
                if(obj[i] instanceof Array){
                    let int = deepComp(obj[i],obj2[i])
                    if (int == false){
                        return false
                    }
                    else{
                        continue
                    }
                }
                let ck1 =obj2.indexOf(obj[i])
                let ck2 =obj.indexOf(obj2[i]) 
                if((ck1 == -1 || ck2 == -1) && !(Number.isNaN(obj[i]) && Number.isNaN(obj2[i]))){
                    return false
                }
            } 
            return true
        }
        if (obj instanceof Object && obj2 instanceof Object ){
            let keys1=Object.keys(obj)
            let keys2=Object.keys(obj2)
            if(keys1.length!=keys2.length){
                return false
            }

            for( let i=0;i<keys1.length;i++ ){

                if(obj[keys1[i]] instanceof Object){
                    let int = deepComp(obj[keys1[i]],obj2[keys1[i]])
                    if (int == false){
                        return false
                    }
                    else{
                        continue
                    }
                }
                if(!(keys1[i] in obj) ||!(keys1[i] in obj2) || (obj[keys1[i]] !==obj2[keys1[i]] && !(Number.isNaN(obj[keys1[i]]) && Number.isNaN(obj2[keys1[i]])))){
                    return false
                }
            } 
            return true
        }
        else if( obj===obj2 || (Number.isNaN(obj) && Number.isNaN(obj2))){
            return true
        }

    return false
}




