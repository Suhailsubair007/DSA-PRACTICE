// Function to heapify a subtree
function heapify(arr, n, i) {
    let largest = i;       // Assume root is the largest
    let left = 2 * i + 1;  // Left child index
    let right = 2 * i + 2; // Right child index

    // Check if left child is larger
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Check if right child is larger
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // Swap and continue heapifying if root is not the largest
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap using destructuring
        heapify(arr, n, largest); // Recursively heapify
    }
}

// Main heap sort function
function heapSort(arr) {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Move root to the end
        heapify(arr, i, 0); // Restore heap property
    }
}

// Example usage
let arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log("Sorted array is:", arr);
