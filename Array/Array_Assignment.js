//FIND FIRST UNIQUE ODD NUMBER -->

function firstUniqueOddNumber(arr) {
    let count = {}
    for (const x of arr) {
        count[x] = (count[x] || 0) + 1
    }
    for (i = 0; i < arr.length; i++) {
        if (count[arr[i]] === 1 && arr[i] % 2 != 0) {
            return arr[i]
        }
    }
    return null
}
console.log(firstUniqueOddNumber([1, 2, 3, 4, 5, 2, 3, 8]))


//FIND COUNT OF DUPLICATE ELEMENTS--->

function coutOfDupli(arr) {
    let dupli = 0;
    let count = {}
    for (const x of arr) {
        count[x] = (count[x] || 0) + 1
    }
    for (i = 0; i < arr.length; i++) {
        if (count[arr[i]] > 1) {
            dupli++
        }
    }
    return dupli
}
console.log(coutOfDupli([1, 2, 3, 4, 5, 2, 3, 8]))


//FIND MOST OCCURING ODD NUMBER ===================

function find_most_occured_odd(arr) {
    let count = {}
    for (const x of arr) {
        if (x % 2 !== 0) {
            count[x] = (count[x] || 0) + 1
        }
    }
    let max = 0
    let result = null

    for (const key in count) {
        if (count[key] > max) {
            max = count[key]
            result = parseInt(key)
        }
    }
    return result
}

console.log(find_most_occured_odd([1,2,3,4,5,6,7,8,2,3,4,3]))


//SECOND - LARGEST===============================

function secondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
            if(arr[i]> largest){
                secondLargest = largest
                largest = arr[i]
            }else if(arr[i] !== largest && arr[i] > secondLargest){
                secondLargest = arr[i]
            }
    }
    return secondLargest
}

console.log(secondLargest([1,2,3,4,5,6]))



//DUPLICATE =================================


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

console.log(RemoveDuplicate([1, 1, 2]))




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
    return i+1

}

console.log(RemoveDuplicatesNew([1,1,2]))


// SUB-ARRAY

// Maximum sum of Sub array -- Brute force approch


function MaxSubArry(nums) {
    let maxSum = nums[0];
    let start = 0;
    let end =0;
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum = currentSum + nums[j];
            if (currentSum > maxSum) {
                maxSum = currentSum
                start = i;
                end = j;
            }
        }
    }
    return nums.splice(start,end +1)

}

console.log(MaxSubArry([5,4,-1,7,8]))

// Time complexity ==> O(n^2)
// Space Complexity ==> O(1)