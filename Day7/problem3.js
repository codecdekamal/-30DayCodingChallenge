let A = [1,2,3,4,5]
let B = [11,22,33,44]
const findingEvenAndOddNumber = (array) =>{
    let evenNum = []
    let oddNum = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element%2===0)evenNum.push(element)
        else oddNum.push(element)
        
    }
    return{ even:evenNum,odd:oddNum}
}
console.log(findingEvenAndOddNumber(A))
console.log(findingEvenAndOddNumber(B))