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
    
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next
        }

    }

    getSize() {
        return this.size;
    }
}


const dll = new Doubly();
dll.addFirst(10);
dll.addFirst(20); // List: 20 -> 10
dll.addAt(15, 1); // List: 20 -> 15 -> 10
dll.addAt(25, 3); // List: 20 -> 15 -> 10 -> 25
dll.printList();

console.log("THis size of this DLL :", dll.getSize())
dll.printList()
