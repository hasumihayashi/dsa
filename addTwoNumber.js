/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

I: [2,4,3]
   [5,6,4]
O: [7,0,8]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let pointerA = l1;
    let pointerB = l2;
    let carry = 0;
    let result = new ListNode(null);
    if(l1.val === 0 && l2.val === 0) {
        return new ListNode(null);
    }
    while(pointerA || pointerB) {
        let sum = 0;
        if(!pointerA) {
            sum = pointerB.val;
        } 
        if(!pointerB) {
            sum = pointerA.val;
        }
        sum = pointerA.val + pointerB.val + carry;
        carry = 0;
        if(sum > 9) {
            carry = Math.floor((sum / 10) % 10); //tens place
        }
        if(result.val === null) {
            result.val = Math.floor((sum / 1) % 10); //ones place
        } else {
            result.next = new ListNode(Math.floor((sum / 1) % 10)); //ones
        }
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }
    if(carry > 0) {
        result.next = new ListNode(carry);
    }
    return result;
};




