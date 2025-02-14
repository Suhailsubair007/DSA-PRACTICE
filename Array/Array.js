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



// ==================================================================================================


//Rotate the arry by K

function rotateArry(nums, k) {

    let n = nums.length;
    k = k % n;

    function reverse(array, start, end) {
        while (start < end) {
            let temp = array[start];
            array[start] = array[end]
            array[end] = temp;

            start++;
            end--;
        }
    }

    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)
    reverse(nums, 0, n - 1)

    return nums;

}

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 4;

console.log(rotateArry(nums, k)); 


//Time complexity ==> O(n)
//Space Complexity ==> O(1)


// ====================================================================================================



// Remove duplicate elements from the sorted array.. (Count of unique elemnts)

function RemoveDuplicate(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1)
            i--;
        }
    }
    return nums
}

// console.log(RemoveDuplicate([1, 1, 2]))


// Without JS Methods... --> Two pointer Approch...

function RemoveDuplicatesNew(nums) {
    if (nums.length == 0) return 0

    let i = 0;

    for (j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
     nums.length = i+1
    return nums
}

// console.log(RemoveDuplicatesNew([1,1,2]))


// Time Complexity ==> O(n)
// Space Complexity ==> O(1)


// ==========================================================================================================


// print unique elements in the arrayy 

function printUniqueElements(nums) {
    if (nums.length === 0) return nums;
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j]
        }
    }
    nums.length = i+1;
    return nums
}


console.log(printUniqueElements([1,1,2]))

//=======================================================================================================



// SUB-ARRAY

//Maximum sum of Sub array -- Brute force approch


// function MaxSubArry(nums) {
//     let maxSum = nums[0];
//     let start = 0;
//     let end =0;
//     for (let i = 0; i < nums.length; i++) {
//         let currentSum = 0;
//         for (let j = i; j < nums.length; j++) {
//             currentSum = currentSum + nums[j];
//             if (currentSum > maxSum) {
//                 maxSum = currentSum
//                 start = i;
//                 end = j;
//             }
//         }
//     }
//     return nums.splice(start,end +1)

// }

// console.log(MaxSubArry([5,4,-1,7,8]))

// Time complexity ==> O(n^2)
// Space Complexity ==> O(1)









