// 1
let numbers = 0;

for (let i = 200; i <= 2700; i++) {
  if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
    numbers += i;
  }
}

console.log(numbers);

// 2
function shiftArrayByOne(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return arr;
    }
  
    const shiftedArray = [];
    for (let i = 0; i < arr.length; i++) {
      shiftedArray.unshift(arr[i]);
    }
  
    return shiftedArray;
  }
  
  const originalArray = [2, 1, 6, 4, -7];
  const shiftedArray = shiftArrayByOne(originalArray);
  console.log(shiftedArray);
  //3
  
//4
let numbers = [];
for (let i = 0; i < 135; i++) {
  if (i % 3 ===0 && i %5 ===0) {numbers.push(i+"fizzBuzz");
    
  }else if(i %3===0){
    numbers.push(i+"fizz")

  }else if (i %5===0){
    numbers.push(i+"buzz")
  }else (
    numbers.push(i)
  )
  
}
console.log(numbers);


//5
function removenumbers(arr) {
    return arr.filter((num) => num >= 0);
  }
  
  const ary = [1, -2, 4, 1];
  const output = removenumbers(ary);
  
  console.log(output);


// 6
const inputArray = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
const cencor = 'Program';
const outputArray = censorWordInArray(inputArray, cencor);

  
  function censorWordInArray(arr, cencor) {
    const censoredArray = arr.map((word) => {
      if (word === cencor) {
        return '*'.repeat(word.length);
      } else {
        return word;
      }
    });
  
    return censoredArray;
  }
  

  console.log(outputArray);
  
