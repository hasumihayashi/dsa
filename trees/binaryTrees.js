class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(data) {
        this.root = new Node(data);
    }

    insert(data) {}

    delete(data) {}

    // Helper functions

    getMinNode() {}

    getMaxNode() {}

    getRootNode() {}

    height() {
        return 0;
    }

    // Traversals
    levelOrderTraversal() {
        if(!this.root) return;

        let queue = [];
        queue.push(this.root);

        while(queue.length !== 0) {
            let curr = queue.shift();

            if(curr.left) {
                queue.push(curr.left);
            }

            if(curr.right) {
                queue.push(curr.right);
            }

            console.log(curr.data)
        }
    }

    preOrderTraverse(root) {

    }

    postOrderTraverse(root) {

    }

    checkIfExists(data) {

    }
   

}

let tree = new BinaryTree(6);
tree.root.left = new Node(3);
tree.root.right = new Node(7);

tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);

tree.root.right.left = new Node(6);
tree.root.right.right = new Node(9);

tree.insert(10);
tree.insert(20);
tree.insert(30);
console.log(tree);