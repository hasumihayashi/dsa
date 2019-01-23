/**
 * 
 * Given an array of integers, sort the array into a wave like array and return it, 
In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....
Given [1, 2, 3, 4]
One possible answer : [2, 1, 4, 3]
Another possible answer : [4, 1, 3, 2]
 */

function wave(arr) {
    if(arr.length === 0) {
    return null;
    }
        let curr = arr.sort(function(a, b) {
    return a-b;
    } )
    for(let i = 0; i < curr.length; i += 2) {
        let temp = curr[i];
        curr[i] = curr[i+1];
        curr[i+1] = temp;
    }
    return curr;
    }
    