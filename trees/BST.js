class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

class BinarySearchTree {
    constructor(data) {
        this.root = new Node(data);
    }

    insert(data) {
        let newNode = new Node(data);
        let currentNode = this.root;
        if(!currentNode) {
            currentNode = newNode;
            return;
        }

        if(data <= currentNode.data) {
            if(!currentNode.left) {
                currentNode.left = newNode;
            } else {
                currentNode.left.insert(data);
            }
        }
        else {
            if(!currentNode.right) {
                currentNode.right = newNode;
            } else {
                currentNode.right.insert(data);
            }
        }


    }
}