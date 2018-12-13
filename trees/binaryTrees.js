class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(val) {
        this.root = new Node(val);
    }

    insert(val) {
        let newNode = new Node(val);
        let currentNode = this.root;
        if(!currentNode) {
            currentNode = newNode;
        }
        while(currentNode) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                break;
            } else if(!currentNode.right && currentNode.left) {
                currentNode.right = newNode; 
            } else if(currentNode.left && currentNode.right) {
                currentNode = currentNode.left; 
            }
        }
        // if(left node is empty), left node = val
        // else if(left node is full and right node is empty), right node = val
        // else if(both left and right are full), insert val in left tree
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

let tree = new BinaryTree(6);
tree.root.left = new Node(3);
tree.root.right = new Node(7);

tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);

tree.root.right.left = new Node(6);
tree.root.right.right = new Node(9);

// console.log(tree)
//tree.preOrder(tree, tree.root);
//tree.postOrder(tree, tree.root);
//tree.inOrder(tree, tree.root);
//tree.insert(100);
console.log(tree);
tree.insert(10);
tree.insert(20);
tree.insert(30);
console.log(tree);