class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    addToStack(data) {
      this.top = new Node(data, this.top);
      this.size++;
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return;
      }
      const poppedNode = this.top;
      this.top = this.top.next;
      this.size--;
      return poppedNode.data;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return;
      }
      return this.top.data;
    }
  
    printStackElements() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
      } else {
        let current = this.top;
        while (current) {
          console.log(current.data);
          current = current.next;
        }
      }
    }
  
    isEmpty() {
      return this.size == 0;
    }
  
    getSize() {
      return this.size;
    }
  }
  
  // Testing the stack
  const sll = new Stack();
  
  sll.addToStack(10);
  sll.addToStack(20);
  sll.addToStack(30);
  
  console.log("Peek:", sll.peek()); // Expected: 30
  console.log("Popped:", sll.pop()); // Expected: 30
  sll.printStackElements(); // Expected: 20 10
  console.log("Size:", sll.getSize()); // Expected: 2
  