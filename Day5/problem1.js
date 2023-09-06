const sorting = (arr,func)=>{
   for (let i = 0; i < arr.length; i++) {
     for(let j=0; j<arr.length; j++){
          let swap = func(arr[i],arr[j])
          if (swap) {
               let temp = arr[i];
               arr[i] = arr[j]
               arr[j] = temp; 
          }
     }
   }
   return arr;
}
function decreasingOrder(num1,num2){
     if(num1>num2) return true;
     else return false;
 }
 function IncreasingOrder(num1,num2){
     if(num1<num2) return true;
     else return false;
 }
let val =  sorting([5,9,4,6,3,7],IncreasingOrder);
console.log(val)

