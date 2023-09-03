/*********two arrays are equal********/

const twoArraysAreEqual = (arr1, arr2) => {
  let val=false;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && i === j) {
        val = true;
      }

    }
  }
  return val;
};
console.log(twoArraysAreEqual([1,2,3,4,5],[1,2,3,4,5]))
