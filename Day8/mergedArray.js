function mergedArray(arr1,arr2){
    let mergedArray = arr1.slice();
        for (let index = 0; index < arr2.length; index++) {
        mergedArray.push(arr2[index])   
    }
    return mergedArray;
}

module.exports = mergedArray;


  
  