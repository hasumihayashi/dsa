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
 left, right, root
 */
var postorder = function(root) {
    return helper(root, [])  
  };
  
  var helper = function(root, array) {
      if(!root) return array;
      
      if(root.children) {
          root.children.forEach(child => {
              helper(child, array);
          });
      }
      
      array.push(root.val)
      
      return array;
  }