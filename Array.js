//Second largest number in the array without using any builtin functions

// function SecondLargetFN(array) {
//     let larget = -Infinity;
//     let secondLarget = -Infinity;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > larget) {
//             secondLarget = larget;
//             larget = array[i]
//         } else if (array[i] != larget && array[i] > secondLarget) {
//             secondLarget = array[i]
//         }
//     }

//     return secondLarget

// }

// console.log(SecondLargetFN([12, 34, 54, 23, 6, 5, 4, 21, 12]))






//Rotate the arry by K

// function rotateArry(nums, k) {

//     let n = nums.length;
//     k = k % n;

//     function reverse(array, start, end) {
//         while (start < end) {
//             let temp = array[start];
//             array[start] = array[end]
//             array[end] = temp;

//             start++;
//             end--;
//         }
//     }

//     reverse(nums, 0, k - 1)
//     reverse(nums, k, n - 1)
//     reverse(nums, 0, n - 1)

//     return nums;

// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let k = 4;

// console.log(rotateArry(nums, k)); 


//Time complexity ==> O(n)
//Space Complexity ==> O(1)






//Remove duplicate elements from the sorted array..

function RemoveDuplicate(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1)
            i--;
        }
    }
    return nums.length
}

console.log(RemoveDuplicate([1, 1, 2]))
