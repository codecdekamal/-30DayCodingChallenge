const findingMax = (arr) =>{
    let max = 0;
   for(let i = 0; i<arr.length; i++){
        if(arr[i]>max) max = arr[i] 
        else {}
    }
    return max;
}
const A = [0,1,2,3,4,5]
const B = [5,4,3,2,1,0]
findingMax(A)
findingMax(B)

console.log(findingMax(A))
console.log(findingMax(B))


