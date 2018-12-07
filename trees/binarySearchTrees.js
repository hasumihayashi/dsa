class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(val) {
        this.root = new Node(val);
    }

    insert(val) {
        let newNode = new Node(val);
        let currentNode = this.root;
        if(!currentNode) {
            currentNode = newNode;
        }
        if(val <= currentNode.val) 
            if(!currentNode.left) {
                currentNode.left = newNode;
            } else {
                currentNode.left.insert(val);
            }
        else {
            if(!currentNode.right) {
                currentNode.right = newNode;
            } else {
                currentNode.right.insert(val);
            }
        }
    }

    remove(val) {
        return null;
    }

    height() {
        return 0;
    }

    preOrder_r(T, v) { //T = tree, v = root node
        console.log(v.val);
        if(v.left && v.right) {
            this.preOrder(T, v.left);
            this.preOrder(T, v.right);
        }
    }

    postOrder_r(T, v) {
        if(v.left && v.right) {
            this.postOrder(T, v.left);
            this.postOrder(T, v.right);
        }
        console.log(v.val);
    }

    inOrder_r(T, v) {
        if(v.left && v.right) {
            this.inOrder(T, v.left);
        }
        console.log(v.val);
        if(v.left && v.right) {
            this.inOrder(T, v.right);
        }
    }

}

let tree = new BinarySearchTree(6);
tree.root.left = new Node(3);
tree.root.right = new Node(7);

tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);

tree.root.right.left = new Node(6);
tree.root.right.right = new Node(9);


console.log(tree);
tree.insert(10);
tree.insert(20);
tree.insert(30);
console.log(tree);