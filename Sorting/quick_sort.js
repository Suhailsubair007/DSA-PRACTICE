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

// console.log(quick_sort([2,3,4,1,2,7,6,43,56,90,12,34,32,12,55]))








function quick_sort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot's final position
        const pivotIndex = partition(arr, low, high);

        // Recursively sort the left and right subarrays
        quick_sort(arr, low, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, high);
    }
    return arr;
}

// Partition function to rearrange elements (first element as pivot)
function partition(arr, low, high) {
    const pivot = arr[low]; // First element as pivot
    let i = low + 1; // Start one step after pivot
    let j = high;

    while (i <= j) {
        // Increment i until an element > pivot is found
        while (i <= high && arr[i] <= pivot) {
            i++;
        }

        // Decrement j until an element < pivot is found
        while (arr[j] > pivot) {
            j--;
        }

        // Swap arr[i] and arr[j] if i is still <= j
        if (i < j) {
            swap(arr, i, j);
        }
    }

    // Place the pivot in its correct position
    swap(arr, low, j); // Swap pivot with arr[j]
    return j; // Return the pivot's final position
}

// Swap function to exchange two elements in the array
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Example usage
const arr = [2, 3, 4, 1, 2, 7, 6, 43, 56, 90, 12, 34, 32, 12, 55];
console.log(quick_sort(arr));

