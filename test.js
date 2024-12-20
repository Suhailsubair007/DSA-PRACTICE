// class Stack {
//     constructor() {
//         this.stack = []
//     }
//     push(data){
//         this.stack.push(data);
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log('stack is empty')
//         }
//         return this.stack.pop();
//     }
//     display(){
//         return this.stack.join(' - ')
//     }
//     isEmpty(){
//         return this.stack.length === 0
//     }
// }

// const s = new Stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.pop()
// console.log(s.display())

function insertion_sort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

console.log(insertion_sort([64, 34, 25, 12, 22, 11, 90]))