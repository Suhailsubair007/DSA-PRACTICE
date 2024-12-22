class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode);
            }
        }

    }
    search(value){
        if(this.isEmpty()){
            return "Tree is empty";
        }else{
            return this.searchNode(this.root, value);
        }
    }
}

const bst = new BST();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(30);
bst.insert(5);
console.log(bst);
console.log("Is the binary search tree empty : ", bst.isEmpty());
bst.printTree();