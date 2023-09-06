const A = [1,2,3,4,5]
const B = [11,22,33,44]

const findingEvenOdd = (arr) =>{
    let even = []
    let odd = []
  for (let index = 0; index < arr.length; index++) {
    if(arr[index]%2 ===0){
        even.push(arr[index])
    }
    else{
       odd.push(arr[index])
    }
    
  }
  return {odd:odd,even:even}
}
console.log(findingEvenOdd(A))
console.log(findingEvenOdd(B))


