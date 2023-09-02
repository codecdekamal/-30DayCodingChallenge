const A = [1,2,5,4,0]
const B= [11,22,33,44]

const gettingKeys = (arr,num) =>{
    for(let i = 0; i<arr.length; i++){
         if(arr[i]===num) return i;
}
return -1
}
gettingKeys(A,4)
gettingKeys(B,33)
console.log(gettingKeys(B,33))
console.log(gettingKeys(A,4))


