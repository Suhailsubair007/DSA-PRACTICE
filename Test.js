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

    addFirst(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

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

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    getSize() {
        return this.size;
    }




    removeFirst() {
        if (this.head === null) return
        this.head = this.head.next;
        this.size--;
    }

    removeLast() {
        if (this.head === null) return
        if (!this.head.next) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next && current.next.next) {
                current = current.next;
            }
            current.next = null
        }
        this.size--
    }
    removeAt(index) {
        if (index < 0 || index > this.size) {
            console.log("invalid index")
        }
        if (index === 0) {
            this.removeFirst();
            return
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        current.next = current.next.next;
        this.size--;
    }

    reverse() {
        let current = this.head;
        let prev = null;
    
        while (current !== null) {
            let next = current.next; // Save the next node
            current.next = prev;     // Reverse the pointer
            prev = current;          // Move prev to the current node
            current = next;          // Move current to the next node
        }
    
        this.head = prev; // Update the head to the new front of the list
    }

    deleteMiddle(){
        if(this.head === null){
            console.log("the list is empty..")
            return 
        }

        if(this.size === 1){
            this.head = null;
            this.size--
            return
        }

        const middle = Math.floor(this.size / 2)
        this.removeAt(middle);
    }
    
}




// Example Usage
const ll = new LinkedList();
ll.addFirst(100);
ll.addFirst(122);
ll.addLast(200);
ll.addLast(300);
ll.addAt(33, 1);
ll.printList();
ll.deleteMiddle()
console.log("=====================")
ll.printList()



