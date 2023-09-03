/*****Duplicate In a array******/
function findingDuplicateItem(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr, arr[i], i) === true) {
      return true;
    }
  }
  return false;
}

function newFunc(arr, input, i) {
  for (let j = 0; j < arr.length; j++) {
    if (input === arr[j] && i !== j) {
      return true;
    }
  }
}
findingDuplicateItem([0,1,2,3,4,5,6,],newFunc)
