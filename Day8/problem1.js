const mergedArray = require("./mergedArray") 
const A = [1,1,1,1,1]
const B = [2,2,2,2,2]
function sumOfMergedArray (arr1,arr2){
    let sumOfMergedArray=0;
    const merge = mergedArray(arr1,arr2)
    for (let index = 0; index < merge.length; index++) {
        sumOfMergedArray += merge[index];
    }
    return sumOfMergedArray;
}

sumOfMergedArray(A,B)
console.log(sumOfMergedArray(A,B))
