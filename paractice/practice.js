class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }
//ADD - FIRST
    addFirst(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
//ADD- LAST
    addLast(data) {
        const node = new Node(data)
        if (this.head === null) {
            this.head = node
            this.size++
            return 
        }

        let current = this.head;

        while (current.next) {
            current = current.next
        }
        current.next = node;
        this.size++
    }
//ADD - PURTICLAR POSITION
    addAAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index")
            return
        }

        if (index === 0) {
            this.addFirst(data)
            return
        }

        const node = new Node(data);

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        node.next = current.next;
        current.next = node;
        this.size++
    }
//DELETE - FIRST
    deleteFirst() {
        if (this.head === null) {
            console.log("The list is already empty.");
            return;
        }
        this.head = this.head.next;
        this.size--;
    }
    
//DELETE - MIDDLE
    deleteMiddle() {
        if (this.head === null || this.size === 1) {
            this.deleteFirst();
            return;
        }
        let MiddleIndex = Math.floor(this.size / 2);
        let current = this.head;
        for (let i = 0; i < MiddleIndex - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.size--
    }
//DELETE - POOSITION
    deletePurticulrIndex(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index. Please try again.");
            return;
        }
        if (index === 0) {
            this.deleteFirst();
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.size--;
    }
//DELETE - LAST
    deleteLast() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
        this.size--;
    }
// REVERSE - LIST
    reverseList() {
        let prev = null;
        let current = this.head;

        while (current != null) {
            let node = current.next;
            current.next = prev;
            prev = current
            current = node
        }

        this.head = prev;
        return this.head
    }
//PRINT LIST
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
//GET - SIZE
    getSize() {
        return this.size;
    }
//CHECK IS EMPLTY 
    isEmpty() {
        return this.head === null;
    }

}



const list = new Linkedlist();

// Add elements
list.addFirst(10);
list.addFirst(20);
list.addLast(30);
list.addAAt(25, 0);

console.log("Original List:");
list.printList();

// Delete operations
list.deleteFirst();
console.log("After deleting the first element:");
list.printList();

list.deleteMiddle();
console.log("After deleting the middle element:");
list.printList();

list.deletePurticulrIndex(1);
console.log("After deleting element at index 1:");
list.printList();

list.deleteLast();
console.log("After deleting the last element:");
list.printList();

// Reverse list
list.addFirst(40);
list.addLast(50);
console.log("List before reversing:");
list.printList();

list.reverseList();
console.log("Reversed List:");
list.printList();

