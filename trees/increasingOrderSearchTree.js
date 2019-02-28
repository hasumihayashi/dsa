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
    var node1 = new TreeNode(0);
    var ans = node1;
    
    helper(root);
    
    function helper(root) {
    if(root === null)
        return;
        helper(root.left);
        root.left = null;
        ans.right = root;
        ans = root;
        helper(root.right);
    }
    return node1.right;
}