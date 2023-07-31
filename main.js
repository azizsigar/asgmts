/* 1 */ 
for (let i = 0; i <= 135; i++) {
    console.log(i);
} 
/* 2 */
/for (let i = 0; i < 135; i= i +2) {
    console.log(i);
} 
/* 3 */
/for (let i = 1; i < 135; i= i+2) {
    console.log(i);
} 
/* 4 */

 const arry =[1,4,2,12];
for (let i = 0; i < arry.length; i++) {
    console.log(arry[i]);
} 
// 4
 let total = 0;
for(let i=0; i<135; i++){
    total += i;
    console.log(`Number is: ${i} Sum: ${total}`);
} 
// 5
  let arry =[1,4,2,12,-1,-32,1111111111];
console.log(Math.max(...arry));

} 
// 6
let arry =[1,4,2,12,-1,-32,1111111111];
console.log(Math.min(...arry));
const grades = [2,1,3];

// 7
function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
}

const average = getAvg(grades);
console.log(average);
// 8
function plusnum(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr[i] = 0;
      }
    }
    return arr;
  }

const X = [2, -1, 4, -3];
const result = plusnum(X);
console.log(result);