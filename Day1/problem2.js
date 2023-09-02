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