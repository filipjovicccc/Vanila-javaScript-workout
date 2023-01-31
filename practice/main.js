//1 zadatak
// function sumArray(arr){
//     return arr.reduce(function(a, b){
//         return a+b;
//     }, 0);

    
// }
// console.log(sumArray([1,2,3,5]))

// //2.zadatak

// function sortStrings(arr){
//  return arr.sort()
// }
// const arr2= ['cat','dog','fish','bird', "animal"]


// console.log(sortStrings(arr2))


//3.zadatak

//funkcija za otklanjanje suglasnika javaScript

// function removeVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let modified = '';
//   for (let char of str.toLowerCase()) {
//     if (!vowels.includes(char)) {
//       modified += char;
//     }
//   }
//   return modified;
// }

// console.log(removeVowels("Hello World"))


//4.zadatak


// function findEvenNumbers(numbers){
//   return numbers.filter(item => item%2 === 0)
// }

// console.log(findEvenNumbers([3, 6, 8, 2, 9, 10]))

//sa for loopom:

// function findEvenNumbers(numbers){
//     let newNumbers = []
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i]%2 === 0){
//             newNumbers.push(numbers[i])
//         }
//     }
//     return newNumbers
//     }
// console.log(findEvenNumbers([3, 6, 8, 2, 9, 10]))

//

// function findOddNumbers(numbers){
//     let oddNumbers = []
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i]%2 !== 0){
//             oddNumbers.push(numbers[i])
//         }
//     }
//     return oddNumbers
// }

// console.log(findOddNumbers([3, 6, 8, 2, 9, 10]))

// function replaceVowels(str){
//     let vowels = ["a", "e", "i", "o", "u"]
//     let replacedVowels = ""
//     for( let char of str){
//          if(!vowels.includes(char)){
//             replacedVowels += char
//          }
//     }
//     return replaceVowels
// }
// console.log(replaceVowels("Hello World"))


// function reverseString(str){

// }

//reverceString zadatak

//moje resenje:
// function reverseString(str){
  
//    return str.split("").reverse().toString()
// }

// console.log(reverseString("Hello"))

//kompjuter, sa for loopom:
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   console.log(reverseString("Hello"))