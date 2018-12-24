/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

 var getAllLeaves = function(node, arr) {
    if(!node) {
        return;
    }
    if(!node.left && !node.right) {
        arr.push(node.val);
    }
    getAllLeaves(node.left, arr);
    getAllLeaves(node.right, arr);
    return arr;
}

var leafSimilar = function(root1, root2) {
  
    const arr1 = getAllLeaves(root1, []);
    const arr2 = getAllLeaves(root2, []);
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i] !== arr2[i]) {
            return false;
        } 
    }
    return true;
    
};