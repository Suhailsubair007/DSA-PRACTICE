class Heap {
    constructor(type = "min") {
        this.heap = [];
        this.type = type; // "min" for Min-Heap, "max" for Max-Heap
    }

    // Helper function to compare based on type of heap
    compare(parent, child) {
        if (this.type === "min")
            return this.heap[parent] > this.heap[child]; // Min-Heap: Parent > Child
        else return this.heap[parent] < this.heap[child]; // Max-Heap: Parent < Child
    }

    // Get parent/child indices
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    leftChildIndex(index) {
        return 2 * index + 1;
    }
    rightChildIndex(index) {
        return 2 * index + 2;
    }

    // Peek: Get the root element
    peek() {
        if (this.heap.length === 0) throw new Error("Heap is empty!");
        return this.heap[0];
    }

    // Insert: Add a new element and maintain heap property
    insert(value) {
        this.heap.push(value); // Add the new value at the end
        this.bubbleUp(this.heap.length - 1); // Reheapify (move the value up)
    }

    // Bubble up the last element
    bubbleUp(index) {
        while (index > 0) {
            const parent = this.parentIndex(index);
            if (this.compare(parent, index)) {
                this.swap(parent, index); // Swap with the parent
                index = parent; // Move up the index
            } else {
                break;
            }
        }
    }

    // Extract the root element (min/max) and reheapify
    extract() {
        if (this.heap.length === 0) throw new Error("Heap is empty!");
        const root = this.heap[0];
        const last = this.heap.pop(); // Remove the last element

        if (this.heap.length > 0) {
            this.heap[0] = last; // Move the last element to the root
            this.bubbleDown(0); // Reheapify (move the value down)
        }
        return root; // Return the root element
    }

    // Bubble down the root element
    bubbleDown(index) {
        const size = this.heap.length;
        while (this.leftChildIndex(index) < size) {
            let smallerOrLargerChild = this.leftChildIndex(index); // Left child
            const right = this.rightChildIndex(index);

            // Choose the smaller/larger child based on heap type
            if (
                right < size &&
                this.compare(smallerOrLargerChild, right) // Right child is smaller/larger
            ) {
                smallerOrLargerChild = right;
            }

            if (this.compare(index, smallerOrLargerChild)) {
                this.swap(index, smallerOrLargerChild); // Swap with the smaller/larger child
                index = smallerOrLargerChild; // Move down the index
            } else {
                break;
            }
        }
    }

    // Swap two elements in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [
            this.heap[index2],
            this.heap[index1],
        ];
    }

    // Convert an array into a heap (Heapify)
    heapify(array) {
        this.heap = array;
        for (let i = this.parentIndex(this.heap.length - 1); i >= 0; i--) {
            this.bubbleDown(i);
        }
    }

    // Update a value in the heap
    update(index, newValue) {
        this.heap[index] = newValue;

        if (this.compare(this.parentIndex(index), index)) {
            this.bubbleUp(index);
        } else if (this.leftChildIndex(index) < this.heap.length && this.compare(index, this.leftChildIndex(index))) {
            this.bubbleDown(index);
        }
    }
    // Heap Sort
    heapSort() {
        const sortedArray = [];
        const originalHeap = [...this.heap]; // Copy the original heap

        while (this.heap.length > 0) {
            sortedArray.push(this.extract()); // Extract the root and add to sorted array
        }

        this.heap = originalHeap; // Restore the original heap
        return sortedArray;
    }
}


// Create a Min-Heap instance
const minHeap = new Heap("min");

// Test insert method
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(1);
console.log("Min-Heap after inserts:", minHeap.heap); // [1, 5, 20, 10]

// Test peek method
console.log("Peek Min-Heap:", minHeap.peek()); // 1

// Test extract method
console.log("Extract Min-Heap:", minHeap.extract()); // 1
console.log("Min-Heap after extract:", minHeap.heap); // [5, 10, 20]

// Test heapify method
minHeap.heapify([3, 9, 2, 1, 4, 5]);
console.log("Min-Heap after heapify:", minHeap.heap); // [1, 3, 2, 9, 4, 5]

// Test update method
minHeap.update(2, 0);
console.log("Min-Heap after update:", minHeap.heap); // [0, 3, 1, 9, 4, 5]

// Test heapSort method
console.log("Heap Sort:", minHeap.heapSort()); // [0, 1, 3, 4, 5, 9]

// Create a Max-Heap instance
const maxHeap = new Heap("max");

// Test insert method
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(1);
console.log("Max-Heap after inserts:", maxHeap.heap); // [20, 10, 5, 1]

// Test peek method
console.log("Peek Max-Heap:", maxHeap.peek()); // 20

// Test extract method
console.log("Extract Max-Heap:", maxHeap.extract()); // 20
console.log("Max-Heap after extract:", maxHeap.heap); // [10, 1, 5]

// Test heapify method
maxHeap.heapify([3, 9, 2, 1, 4, 5]);
console.log("Max-Heap after heapify:", maxHeap.heap); // [9, 4, 5, 1, 3, 2]

// Test update method
maxHeap.update(2, 10);
console.log("Max-Heap after update:", maxHeap.heap); // [10, 4, 9, 1, 3, 2]

// Test heapSort method
console.log("Heap Sort:", maxHeap.heapSort()); // [10, 9, 4, 3, 2, 1]

