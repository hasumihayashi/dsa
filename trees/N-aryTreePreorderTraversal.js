/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = function(root) {
    const result = [];
    helper(root, result);
    return result;
  };
  
  const helper = (root, result) => {
    if (!root) {
      return;
    }
    result.push(root.val);
    for (const child of root.children) {
      helper(child, result);
    }
  }