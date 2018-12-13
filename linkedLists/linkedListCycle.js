/**
 * Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

 --- hare/tortoise algorithm ---
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) {
       return false;
       }
    let fast = head.next;
    let slow = head;
   
    while(slow !== fast) {
        if(!fast || !fast.next) {
            return false;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
};