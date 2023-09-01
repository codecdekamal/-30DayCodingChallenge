/**************ReversingAnArray**************/
const reversingAnArray = (arr1)=>{
     let newArr=[]
     for (let i = arr1.length-1; i>=0 ; i--) {
        newArr.push(arr1[i])
     }
     return newArr
}
const ans1 = reversingAnArray([0,1,2,3,4,5,6])
console.log(ans1)
 

/*****************Reversing An String***************** */
const reversingAnString = (str) =>{
    let newStr = ""
     for (let j = str.length-1; j>=0; j--) {
        let char = str.charAt(j)
        newStr+=char
     } 
     return newStr;
}
console.log(reversingAnString("kamal"))

     /*************Checking Wether two arrays are equal or not*********** */

 const arrAreEqual = (arr1,arr2) =>{
   const largerArray = Math.max(arr1.length,arr2.length)
   // console.log(largerArray)
      for(let i = 0; i<largerArray; i++){
        if(arr1[i]===arr2[i]){   
        }
        else{
            return false;
        }      
      }
      return true;
 }  
 console.log(arrAreEqual([1,2,3,4,5,5],[1,2,3,4,5,5]))
