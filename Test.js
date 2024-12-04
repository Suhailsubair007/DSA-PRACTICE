// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// const node = new Node(100);
// console.log(node)


// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     addFirst(data) {
//         const node = new Node(data)
//         node.next = this.head;
//         this.head = node;
//         this.size++;
//     }

//     addLast(data) {
//         const node = new Node(data)

//         if (this.head === null) {
//             this.head = node;
//             this.size++
//             return
//         }

//         let current = this.head;

//         while (current.next) {
//             current = current.next;
//         }
//         current.next = node;
//         this.size++
//     }

//     addAt(data,index){
//         if(index < 0 || index > this.size){
//             console.log("invalid index.. try again..")
//         }

//         const node = new Node(data);
//         if(index = 0 ){
//             node.next = this.head;
//             this.head = node;
//         }

//         let current = this.head;
//         for (let i = 0; i < index -1; i++) {
//             current = current.next;
//         }
//         node.next = current.next
//         current.next = node;
//         this.size++;
//     }



//     printLIst() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data)
//             current = current.next;
//         }
//     }
// }


// const ll = new LinkedList()
// ll.addFirst(10)
// ll.addFirst(20)
// ll.addLast(30)
// ll.addLast(40)
// ll.addAt(999,2)
// ll.printLIst()







class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


// const node = new Node(10)
// console.log(node)

class LinkedList {
    constructor(data) {
        this.head = null
        this.size = 0
    }

    addFirst(data) {
        const node = new Node(data)
        node.next = this.head;
        this.head = node;
        this.size++
    }

    addLast(data) {
        const node = new Node(data)
        if (this.head === null) {
            this.head = node;
            return
        }
        let current = this.head;

        while (current.next) {
            current = current.next;
        }
        current.next = node
        this.size++

    }

    addAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log("invalid index");
        }
        const node = new Node(data)

        if (index = 0) {
            node.next = this.head;
            this.head = node;
            this.size++
        }

        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
        this.size++
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}

const ll = new LinkedList()
    
ll.addLast(100)
ll.addLast(200)
ll.addLast(300)
ll.addAt(400,1)
ll.printList()

