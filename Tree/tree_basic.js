//Genaral tree implementation -- some basic operations

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}
class Tree {
    constructor(value) {
        this.root = new TreeNode(value);
    }
    addNode(parentValue, value) {
        const parent = this.search(parentValue, this.root)
        if (parent) {
            {
                parent.children.push(new TreeNode(value));
            }
        }
    }
    search(value, node = this.root) {
        if (node.value === value) {
            return node
        }
        for (let child of node.children) {
            const result = this.search(value, child);
            if (result) {
                return result;
            }
        }
        return null;
    }
    dfs(node = this.root) {
        console.log(node.value);
        for (let child of node.children) {
            this.dfs(child);
        }
    }
    // inorder, preOrder, and postOrder methods are not applicable for general trees
}
const myTree = new Tree(1);
myTree.addNode(1, 2);
myTree.addNode(1, 3);
myTree.addNode(2, 4);
myTree.addNode(2, 5);

console.log(myTree)
myTree.dfs()
