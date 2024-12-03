// Creating a node in LinkedList
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Class for LinkedList
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Method for adding a node at the beginning of the linked list
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Method for adding data at the end of the linked list
    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Method for adding a node at a particular position
    addAt(data, index) {
        if (index < 0 || index > this.size) {
            throw new Error('Invalid index');
        }

        const node = new Node(data);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        }
        this.size++;
    }

    // Method to remove the first node
    removeTop() {
        if (!this.head) return;
        this.head = this.head.next;
        this.size--;
    }

    // Method to remove the last node
    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null; // If only one node exists
        } else {
            let current = this.head;
            while (current.next && current.next.next) {
                current = current.next;
            }
            current.next = null; // Remove the last node
        }
        this.size--;
    }

    // Method to remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index');
        }

        if (index === 0) {
            this.removeTop(); // Reuse the `removeTop` method
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = current.next.next; // Skip the node at `index`
            this.size--;
        }
    }

    // Method for printing the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
