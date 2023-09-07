/***************************sum of an array */
const A = [0,1,2,3,4,5]
const B = [5,4,3,2,1,0]

const sum = (arr)=>{
    let sum = 0;
    for(let i =0; i<arr.length;i++){
          sum +=arr[i]
    }
    return sum;
}
console.log(sum(A))
console.log(sum(B))