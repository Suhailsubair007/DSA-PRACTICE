//Creating a node in LinkedLIst
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Class for linked list 
class LinkedList {
    constructor() {
        this.head = null
    }

    //Methode for adding a node at the begineing of the linked list 
    addFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode;
    }

    //Methode for adding data at the end of the linked list..
    addLast(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.newNode = newNode;
            return
        }
        let current = this.head;

        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    //Mehtoed fro printing the Linked list..
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }


    size() {
        let count = 0
        let current = this.head;
        while (current.next) {
            count++
            current = current.next;
        }
        return count
    }
}



const ll = new LinkedList()
ll.addFirst(10)
ll.addFirst(20)
ll.addFirst(30)
ll.addFirst(40)
ll.printList()
ll.size()
