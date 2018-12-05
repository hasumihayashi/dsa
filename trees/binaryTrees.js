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
        // if(theres no root) //
        // else
        //     if(left exists)
    }

    remove(val) {
        return null;
    }

    height() {
        return 0;
    }

    preOrder(T, v) { //T = tree, v = root node
        console.log(v.val);
        if(v.left && v.right) {
            this.preOrder(T, v.left);
            this.preOrder(T, v.right);
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

console.log(tree)
tree.preOrder(tree, tree.root)
