class Stack {
    constructor(maxSize) {
        this.stack = [];
        this.maxSize = maxSize || Infinity; // If no max size is provided, set it to Infinity (no limit)
    }

    push(data) {
        if (this.isFull()) {
            return "Stack is full..";
        }
        this.stack.push(data);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty..";
        }
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty..";
        }
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    isFull() {
        return this.size() === this.maxSize;
    }

    print() {
        return this.stack.join(' ');
    }

    deleteMiddle() {
        const middleIndex = Math.floor(this.size() / 2);
        const temp = [];

        for (let i = 0; i < middleIndex; i++) {
            temp.push(this.pop());
        }

        this.pop();

        while (temp.length > 0) {
            this.push(temp.pop());
        }
    }

    reverse() {
        const temp = [];

        while (!this.isEmpty()) {
            const popped = this.pop();
            temp.push(popped);
        }

        return temp.join(' ');
    }

    sort() {
        if (this.isEmpty()) return;

        const tempArray = [];

        while (!this.isEmpty()) {
            tempArray.push(this.pop());
        }
        tempArray.sort((a, b) => a - b);

        for (let i = tempArray.length - 1; i >= 0; i--) {
            this.push(tempArray[i]);
        }
    }
}




// Test the Stack class and the reverse method
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.pop()

console.log("Original Stack:", stack.print()); // Expected: 10 20 30 40 50
// console.log("Reversed Stack:",stack.reverse()); // Expected: 50 40 30 20 10
