const A = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const B = [2, 3, 5, 6, 11, 13, 17, 19, 23, 29]
function forGettingPrimeNumber(array) {
  let primeNum = [...array];
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element === 1) {
      primeNum.splice(index, 1);
    } else {
      for (let j = 2; j < element; j++) {
        const eachNumlessthanNum = j;
        if (element%eachNumlessthanNum===0) {
          primeNum.splice(index, 1);
        }
      }
    }
  }
  return primeNum;
}
console.log(forGettingPrimeNumber(A));
console.log(forGettingPrimeNumber(B));

