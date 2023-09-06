const key =1;
const A = [0,1,2,3,4,5]
const B = [5,4,3,2,1]

function findingKeyAndItsOccureence(array,key){
    for (let index = 0; index < array.length; index++) {
    if (array[index]===key){
         return index;
    }
        
    }
}
console.log(findingKeyAndItsOccureence(B,key))
console.log(findingKeyAndItsOccureence(A,key))