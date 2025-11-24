const { lstat } = require("fs");

let rev="maM"
let reversed=""

for(let i=rev.length-1;i>=0;i--){
    reversed=reversed+rev[i]
}
console.log(reversed);


// let a = [1,2,3,5,10,11,12]
// let a= [1, 2, 3, 5, 10, 11, 12];

// let smallest = a[0];
// let largest = a[0];
// let sum = 0;

// for (let num of a) {
//   if (num < smallest) {
//     smallest = num;
//   }
//   if (num > largest) {
//     largest = num;
//   }
//   sum += num;
// }

// console.log("Smallest number:", smallest);
// console.log("Largest number:", largest);
// console.log("Sum of array:", sum);


let arr = [1, 2, 3, 5, 10, 11, 12];

// Find the smallest number
let smallest = Math.min(...arr);

// Find the largest number
let largest = Math.max(...arr);

// Find the sum of all numbers
let sum = arr.reduce((a, b) => a + b);

let merge = smallest+largest

console.log("Merge for smallest & largest:",merge);

// Print results
console.log("Smallest number is:", smallest);
console.log("Largest number:", largest);
console.log("Sum of array:", sum);




let str = "hello world";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let foundVowels = [];

// Convert string to lowercase for easy comparison
let lowerStr = str.toLowerCase();

for (let char of lowerStr) {
  if (vowels.includes(char)) {
    foundVowels.push(char);
  }
}

if (foundVowels.length > 0) {
  console.log("Vowels found in the string:", foundVowels.join(","));
} else {
  console.log("No vowels found in the string.");
}