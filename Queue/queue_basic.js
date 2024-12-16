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
        let queuestr = "";
        for (let i = 0; i < this.size(); i++) {
            queuestr += this.items[i] + " ";
        }
        console.log("QUEUR =====>" + queuestr);
    }


    isEmpty() {
        return this.items.length === 0
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
