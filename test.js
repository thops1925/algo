// function reverseString(text) {
//   return text.split('').reverse().join('');
// }

// function reverseString(text) {
//   return [...text].reverse().join('');
// // }
// function reverseString(text) {
//   let result = '';

//   for (let i = text.length - 1; i >= 0; i--) {
//     result += text[i];
//   }

//   return result;
// }

// console.log(reverseString('hello'));

// const reverser = (text) => {
//   let result = '';
//   //   for (let i = text.length - 1; i >= 0; i--) {
//   //     result += text[i];
//   //   }
//   //   return result;

//   for (let char of text) {
//     result = char + result;
//   }
//   return result;
// };

// reverser('hello');

// console.log(reverser('hello'));

let a = [1, 2, 3, 3, 4, 1, 1, 2, 3, 5, 6, 7, 8, 9, 10];
let b = [... new Set(a)]

let obj = {}


// const c = a.filter((item, index) => {
//   if (a.indexOf(item) === index) {
//     b.push(item);
//   }
// });

// const c = a.filter((item,index) =>{
//   if(a.indexOf(item) === index){
//     b.push(item)
//   }
// });

// for (let i = 0 ; i < len; i++ ){
// if (b.indexOf(a[i] === -1)){
// b.push(a[i])
// }
// }


// console.log(b);

//fizzbuzz

// const fizzBuzz = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };
// console.log(fizzBuzz(5));

// //linklist

// const reverse = (list) => {
//   let current = list.head;
//   let prev = null;
//   let next = null;

//   while (current) {
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }

//   list.head = prev;
// };

// console.log(reverse('hello'));

// const reverse = (text) => {
// return [... text].reverse
// };

// console.log(reverse('hello'));

// const vowelsCounter = (text)=>{
//   let v = ['a','e','i','o','i']
// //   let vowel = []
// //  text.split('').filter((item)=> {
// //  if (item === v)
// //  vowel.push(item) 
// // })
// // }

// const vowelsCounter = (text) => {
//   let v = ['a', 'e', 'i', 'o', 'u'];
//   let vowel = [];
//   text.split('').filter((item) => {
//     if (v.includes(item)) {
//       vowel.push(item);
//     }
//   });
//   return vowel.join('');
// };
//   // let v = ['a', 'e', 'i', 'o', 'u'];

//   // const vowelsCounter = (text) => {
//   //   let counter = 0;
//   //   for (let char of text) {
//   //     if (v.includes(char)) {
//   //       counter++;
//   //     }
//   //   }
//   //   return counter;
//   // };


// console.log(vowelsCounter('anehizxasdfadsfadfasqaqaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacv'))
// function maxRecurringChar(text) {
//   let charMap = {}
//   let charArray =[]
//   let vaulesArray = []
//   let maxCharValue = 0

//   for (let char of text) {
//       if (charMap.hasOwnProperty(char)) {
//           charMap[char]++
//       } else {
//           charMap[char] = 1
//       }
//   }

//   charArray = Object.keys(charMap)
//   vaulesArray = Object.values(charMap)
//   maxCharValue = Math.max(...vaulesArray)

//   return charArray[vaulesArray.indexOf(maxCharValue)]
// }

// console.log(maxRecurringChar('aabacada'));

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4