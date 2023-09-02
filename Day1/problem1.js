/**************ReversingAnArray**************/
const reversingAnArray = (arr1)=>{
    let newArr=[]
    for (let i = arr1.length-1; i>=0 ; i--) {
       newArr.push(arr1[i])
    }
    return newArr;
}
const ans1 = reversingAnArray([0,1,2,3,4,5,6])
console.log(ans1)