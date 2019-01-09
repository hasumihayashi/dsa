/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) =>
    !root ? null :
        (root.val == val ? root :
            searchBST(root.val > val ? root.left : root.right, val))