
function deepComp(obj, obj2){    

        if ((obj instanceof Array && !(obj2 instanceof Array))|| (obj2 instanceof Array && !(obj instanceof Array))){
            return false
        }
        if (obj instanceof Object && obj2 instanceof Object ){
            let keys1=Object.keys(obj)
            keys1 = keys1.sort()
            let keys2=Object.keys(obj2)
            keys2 = keys2.sort()

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
                if(keys1[i]!==keys2[i] || (obj[keys1[i]] !==obj2[keys1[i]] && !(Number.isNaN(obj[keys1[i]]) && Number.isNaN(obj2[keys1[i]])))){
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




