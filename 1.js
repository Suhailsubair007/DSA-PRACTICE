// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }


// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     addLast(data){
//         const node =  new Node(data)
//         if(this.head === null){
//             this.head = node;
//             this.size++
//             return 
//         }
//         let current = this.head
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = node;
//         this.size++
//     }

//     printList(){
//         let current = this.head
//         while (current) {
//             console.log(current.data)
//             current = current.next
//         }
//     }
//     convertArry(arr){
//         for (let i = 0; i < arr.length; i++) {
//             this.addLast(arr[i]);
//           }
//     }

// }


// const ll = new LinkedList()
// ll.addLast(100)
// ll.convertArry([1,2,34,5,6])
// ll.printList()
// console.log(ll)



class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    addFirst(data) {
        const newnode = new Node(data);
        newnode.next = this.head;
        if (this.head) {
            this.head.prev = newnode
        }
        this.head = newnode
        this.size++
    }
    addLast(data) {
        const newnode = new Node(data);
        if (this.head === null) {
            this.head = newnode
            this.size++
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }
        newnode.prev = current
        current.next = newnode
        this.size++
    }

    addAtIndex(data, index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index")
            return
        }
        const newnode = new Node(data)
        if (index === 0) {
            this.addFirst(data)
            return
        }

       
        let current = this.head;
        for (let i = 0; i < index ; i++) {
            current = current.next;
        }
        newnode.prev = current
        newnode.next = current.next
        
        if(current.next){
            current.next.prev = newnode
        }
        current.next = newnode
    }




    getize() {
        return this.size
    }


    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}

const dll = new LinkedList()
dll.addFirst(10)
dll.addFirst(20)
dll.addFirst(5)
dll.addAtIndex(22,2)
dll.printList()
