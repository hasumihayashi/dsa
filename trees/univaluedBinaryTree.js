/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isUnivalTree = function(root) {
    if(!root) return true;
    let curr = root;
    
    if(curr.left) {
        if(curr.val != curr.left.val) return false;
    }
    
    if(curr.right) {
        if(curr.val != curr.right.val) return false;
    }
       
    return isUnivalTree(curr.left) && isUnivalTree(curr.right);

};
