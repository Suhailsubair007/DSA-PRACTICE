function LeniarSearch(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }
    return -1;
}

// console.log(LeniarSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))

//Time complexity ==> O(n)
//Space complexity ==>O(1)


function BinarySerch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] == target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

// console.log(BinarySerch([1, 2, 3, 4, 5, 6, 7, 8, 19, 23], 19))


// BInary search using recursion --->


function binarySearchUsingREcursion(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1
    }
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] == target) {
        return mid
    } else if (target < arr[mid]) {
        return binarySearchUsingREcursion(arr, target, left, right = mid - 1)
    }else{
        return binarySearchUsingREcursion(arr, target, left = mid + 1, right )
    }
}

console.log(binarySearchUsingREcursion([1,2,3,4,5,6,7] , 4))