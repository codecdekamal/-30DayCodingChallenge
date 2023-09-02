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