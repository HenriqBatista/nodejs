// const fs = require('fs'); //file system

// fs.readFile("arquivo.txt", "utf8", (err, data) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// function find_max(nums) {
//      let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//      for (let num of nums) {
//      if (num > max_num) {
//         max_num = num;
//      }
//      }
//      console.log (max_num);
//      }

//      let nums = [1, 2, 3, 4, 5, 6, 7, 8]
//      find_max(nums)
//  num = max_num;
//  max_num += 1
//  max_num = num
//  max_num += num

// function hello(name){

// }

// const hello = name =>{

// }

// const hello = (name) =>{}

// function hello(name)=> {}

// const hello = function(name){}

// function isEqual(value1, value2) {

//    console.log(value1 === value2)

//    }

// isEqual(10, 10) // deve retornar true

// isEqual('10', 10) // deve retornar false

// isEqual('true', true) // deve retornar false

// isEqual(1, true) // deve retornar false

// console.log(false == undefined)
// console.log(10 == '10')
// console.log(false == '0')
// console.log(''== false)

// const array = [
//   3, 5, 5, 7, 9, 9, 1, 9, 2, 5, 7, 9, 2, 42, 12, 56, 87, 34, 23, 34,
// ];

//1
// function removeDuplicates(array) {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array.indexOf(array[i]) === i) {
//       newArray.push(array[i]);
//     }
//   }

//   console.log(newArray);
// }
// removeDuplicates(array);

//2
// function removeDuplicates(array) {

//    return array.filter((value, index) => {

//    console.log(array.indexOf(value) === index)

//    })
//    }
//    removeDuplicates(array)

//3
// function removeDuplicates(array) {

//    console.log ([...new Set(array)])

//    }
//    removeDuplicates(array)

//    [
//       3,  5,  7,  9,  1,
//       2, 42, 12, 56, 87,
//      34, 23
//    ]

//    [
//       3,  5,  7,  9,  1,
//       2, 42, 12, 56, 87,
//      34, 23
//    ]

console.log("iniciou");

const count = (max) => {
  for (var i = 0; i < max; i++) {
    console.log(i);
  }
  console.log(i);
};
count(100);
