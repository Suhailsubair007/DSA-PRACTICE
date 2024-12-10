// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedLIst {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     addFirst(data) {
//         const node = new Node(data);
//         node.next = this.head;
//         this.head = node
//         this.size++
//     }

//     deleteMiddle() {
//         if (this.head === null || this.size === 1) {
//             this.head = this.head.next
//             this.size--
//             return
//         }
//         let middleIndex = Math.floor(this.size / 2);

//         let current = this.head;
//         for (let i = 0; i < middleIndex - 1; i++) {
//             current = current.next
//         }
//         current.next = current.next.next;
//         this.size--
//     }

//     revereList(){
//         let prev = null;
//         let current = this.head;

//         while(current != null){
//             let node  = current.next;
//             current.next = prev;
//             prev = current
//             current = node
//         }
//         this.head = prev
//         return this.head
//     }

//     print() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data)
//             current = current.next;
//         }
//     }

// }


// const ll = new LinkedLIst()
// ll.addFirst(10)
// ll.addFirst(20)
// ll.addFirst(30)
// ll.addFirst(40)
// ll.revereList()
// ll.print()




function firstUniqueElement(arr) {
    let count = {}

    for (const elem of arr) {
        count[elem] = (count[elem] || 0) + 1
    }
    for (let i = 0; i < arr.length; i++){
        if(count[arr[i]] == 1){
            return arr[i]
        }
    }
}

console.log(firstUniqueElement([1, 1, 2, 3, 4, 5, 4, 6, 7]))