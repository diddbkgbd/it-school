var H1={ a:5, b: { b1:6, b2:7 } };
var H2={ b: { b1:6, b2:7 }, a:5 };
var H3={ a:5, b: { b1:6 } };
var H4={ a:5, b: { b1:66, b2:7 } };
var H5={ a:5, b: { b1:6, b2:7, b3:8 } };
var H6={ a:null, b:undefined, c:Number.NaN };
var H7={ c:Number.NaN, b:undefined, a:null };
var H8={a:5,b:6};
var H9={c:5,d:6};
var H10={a:5};

function deepComp(obj, obj2){
    if (obj instanceof Object && obj2 instanceof Object ){
        let keys=Object.keys(obj)
        let keys2=Object.keys(obj2)
        if(keys.length!==keys2.length){
            return false
        }
        // console.log(keys)
        for( let i=0;i<keys.length;i++ ){
            if(obj[keys[i]] instanceof Object){
                deepComp(obj[keys[i]],obj2[keys[i]])
                continue
            }
            if(obj[keys[i]]!==obj2[keys[i]]){
                return false
            }
        } 
        return true
    }
}
console.log(deepComp(H1,H2))

console.log( deepComp(H1,H3))
console.log(deepComp(H1,H4))//
console.log( deepComp(H1,H5))//
console.log(deepComp(H6,H7))//
console.log( deepComp(H8,H9))
console.log(deepComp(H8,H10))
console.log(deepComp(null,H10))
console.log(deepComp(H10,null))
console.log(deepComp(null,null))
console.log(deepComp(null,undefined))



// script.js:30 true +
// script.js:31 true -
// script.js:32 true -
// script.js:33 false - 
// script.js:34 false +
// script.js:35 false +
// script.js:36 undefined
// script.js:37 undefined
// script.js:38 undefined
// script.js:39 undefined



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
//  будет false
// ) будет true
//  будет false
// будет false
//  будет false
//  будет false
//  будет false
// deepComp( {a:5,b:undefined}, {a:5,c:undefined} ) будет false
// deepComp([5,7],{0:5,1:7}) будет false
// deepComp( [5,7],{0:5,1:7,length:2} ) будет false
// deepComp("aaa","bbb") будет false
// deepComp(Number.NaN,Number.NaN) будет true