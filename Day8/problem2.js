const mergedArray = require("./mergedArray")
const A = [1,1,1,1,1]
const B = [2,2,2,9,2]
function productOfArray(arr1,arr2){
    let totalProduct=1;
     const mergedArr = mergedArray(arr1,arr2)
     for (let index = 0; index < mergedArr.length; index++) {
        totalProduct *= mergedArr[index]      
     }
     return totalProduct;
}
console.log(productOfArray(A,B))