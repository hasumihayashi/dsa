/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 class Solution {
    public int maxDepth(Node root) {
        if (root == null) return 0;
        int depth = 1;
        for (Node node : root.children) {
            depth = Math.max(depth, maxDepth(node) + 1);
        }
        
        return depth;
    }
}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let max = 1;
    for (let i = 0; i < root.children.length; i++) {
        max =  Math.max(max, maxDepth(root.children[i]) + 1);
    }
    
    return max;
};