class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function inorder(node) {
    if(node == null){
        return
    }
    inorder(node.left)
    console.log(node.data)
    inorder(node.right)
}
function preOrder(node) {
    if(node == null){
        return
    }
    console.log(node.data)
    preOrder(node.left)
    preOrder(node.right)
}

function postOrder(node) {
    if(node == null){
        return
    }
    
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.data)
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// inorder(root)
// preOrder(root)

// console.log(root)
Node.prototype.printNode = function() {
    const leftChild = this.left ? this.left.data : 'null';
    const rightChild = this.right ? this.right.data : 'null';
    console.log(`Node: ${this.data}, Left Child: ${leftChild}, Right Child: ${rightChild}`);
};

function printTree(node) {
    if (node == null) {
        return;
    }
    node.printNode();
    printTree(node.left);
    printTree(node.right);
}

printTree(root);