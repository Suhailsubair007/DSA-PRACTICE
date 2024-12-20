class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Underflow'
        }
        return this.items.shift()
    }

    front() {
        if (this.isEmpty()) {
            return "NO elements in the queue"
        }
        return this.items[0]
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        console.log(this.items.join(' -> '))
    }

    isEmpty() {
        return this.items.length === 0
    }

    // Method to reverse the queue
    reverse() {
        let left = 0;
        let right = this.size() - 1;
        while (left < right) {
            // Swap the elements
            let temp = this.items[left];
            this.items[left] = this.items[right];
            this.items[right] = temp;
            left++;
            right--;
        }
    }

    // Method to delete the middle element
    deleteMiddle() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        const middleIndex = Math.floor(this.size() / 2);
        this.items.splice(middleIndex, 1);
    }
}

const myQueue = new Queue()


myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)
// myQueue.dequeue()
// myQueue.dequeue()
myQueue.enqueue(40)
myQueue.enqueue(50)
myQueue.dequeue()
myQueue.printQueue()
myQueue.reverse()
myQueue.printQueue()
