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
// console.log(firstUniqueOddNumber([1, 2, 3, 4, 5, 2, 3, 8]))


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
// console.log(coutOfDupli([1, 2, 3, 4, 5, 2, 3, 8]))


//FIND MOST OCCURING ODD NUMBER 

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

// console.log(find_most_occured_odd([1,2,3,4,5,6,7,8,2,3,4,3]))


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