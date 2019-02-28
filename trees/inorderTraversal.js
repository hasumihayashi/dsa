/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var increasingBST = function(root) {
    return helper(root, null);
    
    function helper(root, tail){
        if(!root){ return tail; }
        else {
            let result = helper(root.left, root);
            root.left = null;
            root.right = helper(root.right, tail);
            return result;
        }
    }
};