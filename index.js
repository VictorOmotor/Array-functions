/* 1.
* Mutating array methods are methods that alter the content of the original array. They are used to partly or wholly modify the content of the original array.
* Non mutating array methods are methods that do not modify the content of the original array.
* 5 mutating array methods include:
- pop()
- splice()
- sort()
- unshift()
- shift()
* 5 non mutating array methods include:
- concat()
- filter()
- map()
- reduce()
- slice()
*/

// 2.
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
// 1. Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// 2. Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');

// 3. Remove the first item in the array
languages.shift();

// 4. Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// 5. Replace 'PHP' with 'Go' and 'Rust'
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages)

// 3.

let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
}

let fruit2 = changeFruit(fruit);
//console.log(fruit2) // ['apple', 'mango', 'orange']

// 4. 

function max (numArray) {
  return Math.max(...numArray);
}

console.log(max([23, 4, 5, 6, 7, 34, 76, 45, 5])) // 76

// OR USING THE ARRAY.MAP FUNCTION

function max(numbers) {
    let maxNumber = Math.max(...numbers.map((num) => {
      return num;
    }));
    return maxNumber;
}

// console.log(max([4, 5, 10, 66, 78])); // 78


// 5.

function valTimesIndex (array) {
  let result = [];
  for (i =0; i < array.length; i++){
      let newNum = array[i] * i;
      result.push(newNum);
  }
  return result;
}

console.log(valTimesIndex([2, 4, 7, 27, 10])) // [ 0, 4, 14, 81, 40 ]

//OR USING THE ARRAY.MAP METHOD AS AN INSTRUCTION 

function valTimesIndex(numbers) {
    let result = numbers.map((num, index) => {
      return num * index;
    });
    return result;
}
  
// console.log(valTimesIndex([2, 5, 8, 10, 7])); // [ 0, 5, 16, 30, 28 ]
