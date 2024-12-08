// function palindromeNUmber(n) {
//     let str = n.toString()
//     console.log(str)
//     if (str.length === 1) return true
//     if (str[0] !== str[str.length - 1]) {
//         return false
//     }
//     return palindromeNUmber(str.slice(1, str.length - 1))
// }

// // console.log(palindromeNUmber(121))


// function stringReversal(str) {
//     console.log(`Current string: ${str}`);
//     if (str.length === 0) {
//         return "";
//     } else {
//         return stringReversal(str.substr(1)) + str.charAt(0);
//     }
// }

// // let reversed = stringReversal("suhail");
// // console.log("Reversed string:", reversed);



// function factorial(n) {
//     if (n <= 0) return 1
//     return n * factorial(n - 1)
// }

// // console.log(factorial(5))


// function palinderomeTwoPointer(str) {
//     let left = 0;
//     let right = str.length - 1

//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }
// // console.log(palinderomeTwoPointer("malayalam"))



// function testfunction(str) {
//     if (str.length = 1) return true
//     if (str[0] !== str[str.length - 1]) {
//         return false
//     }

//     return testfunction(str.slice(1, str[str.length - 1]))
// }

// console.log(testfunction('malayalam'))