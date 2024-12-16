// Revese the words in the string usong stack

function revereWord(str) {
    let splitted = str.split(' ')
    let stack = []

    for (let word of splitted) {
        stack.push(word)
    }
    let result = "";

    while (stack.length) {
        const current = stack.pop()

        if (current) {
            result += " " + current
        }
    }
    return result.trim()
}

// console.log(revereWord('suhail subair is a good boy'))


//Valid parantasis-->

function isValid(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (char === ")" || char === "]" || char === "}") {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if ((char === ")" && top !== "(") ||
                (char === "]" && top !== "[") ||
                (char === "}" && top !== "{")) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

let str = "({}])"
// console.log(isValid(str))


//Reverse a string using stack----->

function reverse_string(str) {
    let stack = []

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }
    let reversed = ""
    while(stack.length > 0) {
        reversed += stack.pop()
    }
    return reversed
}

// console.log(reverse_string("suhail"))




//IMPLEMET STACK USING QUEUE DS ===>


    // var stack_using_queue = function () {
    //     this.q1 = [];
    //     this.q2 = [];
    // }
    
    // stack_using_queue.prototype.push = function (x) {
    //     while (this.q1.length !== 0) {
    //         this.q2.push(this.q1.shift());
    //     }
    //     this.q1.push(x);
    //     while (this.q2.length !== 0) {
    //         this.q1.push(this.q2.shift());
    //     }
    // }
    
    // stack_using_queue.prototype.pop = function () {
    //     return this.q1.shift();
    // }
    
    // stack_using_queue.prototype.top = function () {
    //     return this.q1[0];
    // }
    
    // stack_using_queue.prototype.isEmpty = function () {
    //     return this.q1.length === 0;
    // }
    
    // // Prototype to print the stack
    // stack_using_queue.prototype.printStack = function () {
    //     console.log("Current Stack:", this.q1);
    // }
    
    // // Example usage
    // const stack = new stack_using_queue();
    
    // stack.push(20);
    // stack.push(30);
    // stack.push(40);
    // stack.printStack(); // Output: Current Stack: [40, 30, 20]
    
    // stack.pop();
    // stack.printStack(); // Output: Current Stack: [30, 20]
    


    class StackUsingQueue {
        constructor() {
            this.q1 = [];
            this.q2 = [];
        }
    
        // Push element onto the stack
        push(x) {
            while (this.q1.length !== 0) {
                this.q2.push(this.q1.shift());
            }
            this.q1.push(x);
            while (this.q2.length !== 0) {
                this.q1.push(this.q2.shift());
            }
        }
    
        // Remove the top element from the stack
        pop() {
            return this.q1.shift();
        }
    
        // Get the top element of the stack
        top() {
            return this.q1[0];
        }
     
        // Check if the stack is empty
        isEmpty() {
            return this.q1.length === 0;
        }
    
        // Print the stack
        printStack() {
            console.log("Current Stack:", this.q1);
        }
    }
    
    // Example usage
    const stack = new StackUsingQueue();
    
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.printStack(); // Output: Current Stack: [40, 30, 20]
    
    stack.pop();
    stack.printStack(); // Output: Current Stack: [30, 20]
    console.log("Top Element:", stack.top()); // Output: Top Element: 30
    