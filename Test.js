// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     addFirst(data){
//         const newnode = new Node(data);
//         newnode.next = this.head;
//         this.head = newnode;
//     }

//     addLast(data){
//         const node = new Node(data);

//         if(this.head === null){
//             this.head = node;
//             return
//         }

//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = node
//     }

//     printList(){
//         let current = this.head;
//         while (current) {
//             console.log(current.data)
//             current = current.next;
//         }
//     }
// }

// const ll = new LinkedList()

// ll.addFirst(29)
// ll.addLast(100)
// ll.printList()


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedLIst{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    addLast(data){
        const node = new Node(data)
        if(this.head === null){
            this.head = node;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node
    }

    printList(){
        let curret = this.head;
        while (curret) {
            console.log(curret.data)
            curret = curret.next;
        }
    }
}


const ll = new LinkedLIst()
ll.addFirst(10)
ll.addFirst(200)
ll.addLast(1000)
ll.addFirst(12)
ll.printList()








