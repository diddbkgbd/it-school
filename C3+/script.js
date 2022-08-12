
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
                let keys1=Object.keys(obj)
                if(keys1[i]!==keys2[i]){
                    console.log(keys1[i]+"  "+ keys2[i])
                    return false
                }
                if(obj[keys1[i]] instanceof Object){
                let int = deepComp(obj[keys1[i]],obj2[keys1[i]])
                if (int == false){
                    return false
                }
                else{
                    continue
                }
                    
                }
                if(obj[keys1[i]] !==obj2[keys1[i]] && !(Number.isNaN(obj[keys1[i]]) && Number.isNaN(obj2[keys1[i]]))){
                    
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



// console.log(deepComp(5,"5") )
// console.log(deepComp(5,H1))
// console.log(deepComp(A1,H1))
// console.log(deepComp(A2,A3))

// deepComp(H1,H2) будет true
// deepComp(H1,H3) будет false
// deepComp(H1,H4) будет false
// deepComp(H1,H5) будет false
// deepComp(H6,H7) будет true
// deepComp(H8,H9) будет false
// deepComp(H8,H10) будет false
// deepComp(null,H10) будет false
// deepComp(H10,null) будет false

// deepComp(null,null) будет true
// deepComp(null,undefined) будет false

// deepComp(5,"5") будет false

// deepComp(5,H1) будет false
// deepComp(A1,H1) будет false
// deepComp(A2,A3) будет false
// deepComp( {a:5,b:undefined}, {a:5,c:undefined} ) будет false
// deepComp( [5,7],{0:5,1:7,length:2} ) будет false
// deepComp("aaa","bbb") будет false
// deepComp(Number.NaN,Number.NaN) будет true


// deepComp([5,7],{0:5,1:7}) будет false



