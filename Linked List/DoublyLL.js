class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class Doubly {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(data) {
        const newnode = new Node(data)
        newnode.next = this.head;

        if (this.head) {
            this.head.prev = newnode;
        }
        this.head = newnode
        this.size++;
    }

    addLast(data) {
        const newnode = new Node(data);

        if (this.head === null) {
            this.head = newnode;
            this.size++;
            return
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        newnode.prev = current;
        current.next = newnode;
        this.size++;


    }

    addAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }

        if (index === 0) {
            this.addFirst(data);
            return;
        }

        const newnode = new Node(data);
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newnode.next = current.next;
        newnode.prev = current;

        if (current.next) {
            current.next.prev = newnode;
        }

        current.next = newnode;
        this.size++;
    }



    removeTop() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
        this.size--;
    }


    removeLast() {
        let current = this.head;

        while (current.next.next) {
            current = current.next;
        }
        current.next = null
        this.size--
    }


    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("invalid index")
            return
        }
        if (index === 0) {
            this.removeTop()
            return
        }
        if (index === this.size - 1) {
            this.removeLast()
            return
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        if (current.next) {
            current.next = current.next.next
        }
        if (current.next) {
            current.next.prev = current;
        }
        this.size--

    }

    removefromMiddle() {
        if (this.head === null) {
            console.log("List empty")
            return
        }
        if (this.size === 1) {
            this.head = null;
            this.size--;
            return;
        }
        let current = this.head;
        let middle = Math.floor(this.size / 2);
        for (let i = 0; i < middle - 1; i++){
            current = current.next;
        }

        if(current.next){
            current.next = current.next.next
        }
        if(current.next){
            current.next.prev = current
        }
        this.size--
    }

    getSize() {
        return this.size;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next
        }

    }
}


// Create a new Doubly Linked List
const dll = new Doubly();
console.log("=== Testing Doubly Linked List ===");

// Test addFirst
console.log("\n--- Adding elements at the start (addFirst) ---");
dll.addFirst(10);
dll.addFirst(20);
dll.addFirst(30);
console.log("List after adding 30, 20, 10 at the start:");
dll.printList();

// Test addLast
console.log("\n--- Adding elements at the end (addLast) ---");
dll.addLast(40);
dll.addLast(50);
console.log("List after adding 40, 50 at the end:");
dll.printList();

// Test addAt
console.log("\n--- Adding elements at specific positions (addAt) ---");
dll.addAt(25, 2);
console.log("List after adding 25 at index 2:");
dll.printList();

dll.addAt(5, 0);
console.log("List after adding 5 at index 0:");
dll.printList();

dll.addAt(60, dll.getSize());
console.log("List after adding 60 at the last index:");
dll.printList();

// Test removeTop
console.log("\n--- Removing the first element (removeTop) ---");
dll.removeTop();
console.log("List after removing the first element:");
dll.printList();

// Test removeLast
console.log("\n--- Removing the last element (removeLast) ---");
dll.removeLast();
console.log("List after removing the last element:");
dll.printList();

// Test removeAt
console.log("\n--- Removing elements at specific positions (removeAt) ---");
dll.removeAt(2);
console.log("List after removing the element at index 2:");
dll.printList();

// Test removefromMiddle
console.log("\n--- Removing the middle element (removefromMiddle) ---");
dll.removefromMiddle();
console.log("List after removing the middle element:");
dll.printList();

// Test getSize
console.log("\n--- Checking the size of the list ---");
console.log("Current size of the list:", dll.getSize());

