// BUBBLE SORT ======================================================

function bubble_sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }

    }
    return arr
}

console.log("BUBBLE SORT ====>",bubble_sort([1, 2, 3, 4, 3, 7, 4, 3, 33, 21, 67, 11, 43, 26, 90]))


//Time complexity ==> O(n^2)
//Space complexity ==> O(1)


// SELECTION SORT ====================================================

const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

console.log("SELECTION SORT ====>",selection_sort([1, 2, 3, 4, 1, 7, 6, 44, 23, 9, 12, 54, 23, 67, 12, 11, 33]))

//Time complexity ==> O(n^2)
//Space complexity ==> O(1)


//insertion sort========================================================

function insertion_sort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = key
    }
    return arr
}
console.log("INSERSION SORT ====>",insertion_sort([2, 3, 4, 1, 2, 7, 6, 43, 56, 90, 12, 34, 32, 12, 55]))

//Time complexity ==> O(n^2)
//Space complexity ==> O(1)

//QUICK SORT ===========================================================

function quick_sort(arr) {
    if (arr.length <= 1) return arr
    const pivot = arr[0]
    const left = []
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quick_sort(left), pivot, ...quick_sort(right)]
}

console.log("QUICK SORT ====>",quick_sort([2, 3, 4, 1, 2, 7, 6, 43, 56, 90, 12, 34, 32, 12, 55]))

//Time complexity ==>  O(nlogn)
//Space complexity ==> O(n)

//without wxtra sapace ===>

function quick_sort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);

        quick_sort(arr, low, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[low];
    let i = low + 1;
    let j = high;

    while (i <= j) {
        while (i <= high && arr[i] <= pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i < j) {
            swap(arr, i, j);
        }
    }

    swap(arr, low, j); // Swap pivot with arr[j]
    return j; // Return the pivot's final position
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Example usage
const arr = [2, 3, 4, 1, 2, 7, 6, 43, 56, 90, 12, 34, 32, 12, 55];
console.log("Quick SORT ====>",quick_sort(arr));

//Time complexity ==> wortst -O(n^2)  best -> o(nlogn)
//Space complexity ==> O(n)



// =========================================================================


// MERGE SORT

function merge_sort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)

    let left = merge_sort(arr.slice(0, mid))
    let right = merge_sort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
}


// console.log("MERGE SORT ====>",merge_sort([2, 5, 7, 8, 23, 41, 6, 22, 99, 54, 78, 18, 90]));


//Time complexity --> O(nlogn)
//Space complexity --> O(n)