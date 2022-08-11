function deepCopy(obj) {
    let clObj={};
    let clObjAr=[];

    if (obj == null || (typeof obj !== 'object' && typeof obj !== 'array')) {
        return obj
    }

    if (obj instanceof Array){
        for (let m=0; m<obj.length;m++){
            if(obj[m] instanceof Object){
                clObjAr[m] = deepCopy(obj[m]);
                continue;
            }
            clObjAr[m] = obj[m];
        }
        return clObjAr;
    }
    if (obj instanceof Object){
        for(const i in obj) {
            if (obj[i] instanceof Object) {
                clObj[i] = deepCopy(obj[i]);
                continue;
            }
          
            clObj[i] = obj[i];
        }
        return clObj;
    }
}
    

