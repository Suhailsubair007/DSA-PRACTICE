// Find least and most occured odd number fom the array ..

function find_most_occured_odd(arr) {
    let frequency = {}

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            if (!frequency[arr[i]]) {
                frequency[arr[i]] = 1;
            } else {
                frequency[arr[i]]++
            }
        }
    }
    let max = 0;
    let result = null;

    for (const key in frequency) {
        if (frequency[key] > max) {
            max = frequency[key]
            result = parseInt(key)
        }
    }
    return result

}

// console.log(find_most_occured_odd([1,2,3,4,5,6,1,2,3,3,3,5,8,8,9]))



//Find the first non repeating elemet from the array..

function findfrequency(arr) {
    let frequency = {}
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    for(const key of arr){
        if(frequency[key] ===1){
            return key
        }
    }
    return null
}
console.log(findfrequency([1, 0, 3, 3, 4, 5, 1, 1, 8, 9, 9, 9]));
