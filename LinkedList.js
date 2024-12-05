class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add at the beginning
    addFirst(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    // Add at the end
    addLast(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.size++;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.size++;
    }

    // Add at a specific index
    addAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index...");
            return;
        }

        const node = new Node(data);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
            this.size++;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
        this.size++;
    }

    // Print the list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }

    // Remove from the beginning
    removeFirst() {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        }
        this.head = this.head.next;
        this.size--;
    }

    // Remove from the end
    removeLast() {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        }
        if (this.head.next === null) { // Only one element
            this.head = null;
            this.size--;
            return;
        }
        let current = this.head;
        while (current.next.next) { // Stop at second-last node
            current = current.next;
        }
        current.next = null;
        this.size--;
    }

    // Remove from a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index...");
            return;
        }
        if (index === 0) {
            this.removeFirst();
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.size--;
    }
}

// Example Usage
const ll = new LinkedList();
ll.addFirst(100);
ll.addFirst(122);
ll.addLast(200);
ll.addLast(300);
ll.addAt(33, 1);

console.log("Initial List:");
ll.printList();

ll.removeFirst();
console.log("\nAfter removing from top:");
ll.printList();

ll.removeLast();
console.log("\nAfter removing from last:");
ll.printList();

ll.removeAt(1);
console.log("\nAfter removing from position 1:");
ll.printList();

console.log("\nFinal size of the LinkedList:", ll.getSize());
