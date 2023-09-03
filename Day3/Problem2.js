/**********Ocurrence of key in an array************/
let key = 1;
function occurKey(arr, key) {
    for (let j = 0; j < arr.length; j++) {
      if (key === arr[j]) {
        return true;
      }
    }
    return false;
  }
 console.log(occurKey([0,1,2,3,4,5],key)) 
