class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function inorder(node) {
    if (node == null) {
        return
    }
    inorder(node.left)
    console.log(node.data)
    inorder(node.right)
}
function preOrder(node) {
    if (node == null) {
        return
    }
    console.log(node.data)
    preOrder(node.left)
    preOrder(node.right)
}

function postOrder(node) {
    if (node == null) {
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

function printTraversals(root) {
    console.log("Inorder traversal:");
    inorder(root);
    console.log("Preorder traversal:");
    preOrder(root);
    console.log("Postorder traversal:");
    postOrder(root);
}

printTraversals(root);