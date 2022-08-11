function deepCopy(obj) {
    let clObj={};
    let strClObj;
    if (Number.isNaN(obj)){
        console.log(obj)
        strClObj=obj
        return obj
    }
    if (obj == null || typeof obj !== 'object'|| Number.isNaN(obj)) {
        return obj
    }
    
    if ( typeof(obj)=="string"){
        strClObj=obj.slice();
        return strClObj
    }
    for(const i in obj) {
        if (Array.isArray(obj[i]) ){
            clObj[i]=obj[i].slice(0);
            continue
            }
        if (obj[i] instanceof Object) {
            clObj[i] = deepCopy(obj[i]);
            continue;
        }
      
        clObj[i] = obj[i];
    }
    return clObj;
}

