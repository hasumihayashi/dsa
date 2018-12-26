/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var getMinimumDifference = function(root) {
    let pre = null;
    let diff = Number.MAX_SAFE_INTEGER;
    function inOrder(root) {
      if (!root) {
        return;
      }
      inOrder(root.left);
      if (pre !== null && diff > root.val - pre) {
        diff = root.val - pre;
      }
      pre = root.val;
      inOrder(root.right);
    }
    inOrder(root);
    return diff;
  };