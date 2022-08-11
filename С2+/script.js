function deepCopy(obj) {
    let clObj=[];

    if (obj == null || typeof obj !== 'object'|| Number.isNaN(obj)||typeof(obj)=="string") {
        return obj
    }
    if (obj instanceof Array){
        for (let m=0; m<obj.length;m++){
            if(obj[m] instanceof Array){
                clObj[m] = deepCopy(obj[m]);
                continue;
            }
            clObj[m] = obj[m];
        }
        
    }
    for(const i in obj) {
        if (obj[i] instanceof Object) {
            clObj[i] = deepCopy(obj[i]);
            continue;
        }
      
        clObj[i] = obj[i];
    }
    return clObj;
}

