// class Stack {
//     constructor() {
//         this.item = []
//     }
//     push(element) {
//         return this.item.push(element)
//     }
//     pop() {
//         if (this.isEmpty()) {
//             throw new Error("Stack underflow");
//         }
//         return this.item.pop()
//     }
//     isEmpty() {
//         return this.item.length === 0
//     }
//     top() {
//         if (this.isEmpty()) {
//             throw new Error("Stack underflow");
//         }
//         return this.item[this.item.length - 1];
//     }
//     display(){
//         return this.item.join(' , ')
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.pop()
// console.log("Is the stack empty : ",stack.isEmpty())
// console.log("Top of the stack",stack.top())
// console.log("Elements in the stack =>",stack.display())



// function reverseSting(str) {
//     let stack = []

//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i])
//     }
//     let reverse = ''
//     while (stack.length > 0) {
//         reverse += stack.pop()
//     }
//     return reverse
// }

// console.log(reverseSting('suhailsubair'))



// function reverseWord(word) {
//     let splited = word.split(' ')
//     let stack = []

//     for(let word of splited){
//         stack.push(word)
//     }
//     let reversed = ''
//     while (stack.length > 0) {
//         let current = stack.pop()
//         if(current){
//             reversed += " " + current
//         }
//     }
//     return reversed
// }

// console.log(reverseWord('suhail is good boy who is my first applicanat'))



function valid(str) {
    let stack = []
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                return false
            }
            const top = stack.pop()
            if ((char === ')' && top !== '(') ||
                (char === '}' && top !== '{') ||
                (char === ']' && top !== '[')) {
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(valid('[[)))((){}{})]]'))