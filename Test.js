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

    removeLast(){
        if (this.head === null) return
        if(!this.head.next){
            this.head = null;
        }else{
            let current = this.head;
            while (current.next && current.next.next){
                current = current.next;
            }
            current.next = null
        }
        this.size--
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
console.log("Size of the LinkedList:", ll.getSize());