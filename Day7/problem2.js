const A = [0,1,2,3,4,5]
const B = [5,4,3,2,1,0]
const mergingArray = (arr1,arr2) =>{
        let mergedArray = [...arr2]
        for(let i =0; i<arr1.length; i++){
            mergedArray.push(arr1[i])
        }
        return mergedArray;

}
console.log(mergingArray(A,B))