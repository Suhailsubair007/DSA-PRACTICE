// Implement a queue using stacks
class QueueUsingStack {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(data) {
        this.s1.push(data);
    }

    dequeue() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }

    front() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2[this.s2.length - 1];
    }

    empty() {
        return this.s1.length === 0 && this.s2.length === 0;
    }

    printQueue() {
        const s2Reversed = [...this.s2].reverse();
        const fullQueue = s2Reversed.concat(this.s1);
        return fullQueue;
    }
}

// Test the QueueUsingStack implementation
const queue = new QueueUsingStack();

console.log("Is the queue empty?", queue.empty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Queue after enqueuing 10, 20, 30:", queue.printQueue()); // [10, 20, 30]

console.log("Front of the queue:", queue.front()); // 10

console.log("Dequeue operation:", queue.dequeue()); // 10
console.log("Queue after dequeue:", queue.printQueue()); // [20, 30]

queue.enqueue(40);
console.log("Queue after enqueuing 40:", queue.printQueue()); // [20, 30, 40]

console.log("Dequeue operation:", queue.dequeue()); // 20
console.log("Queue after dequeue:", queue.printQueue()); // [30, 40]

console.log("Is the queue empty?", queue.empty()); // false
