/**
 * @param {number[]} A
 * @return {number[]}
 
 TC: O(N)
 SC: O(N)
 */

var sortArrayByParity = function(A) {
    let oddIndex = A.length - 1;
    let evenIndex = 0;
    let a = [];
    A.forEach(v => {
        if(v % 2 === 0) {
            a[evenIndex] = v;
            evenIndex++;
        } else {
            a[oddIndex] = v;
            oddIndex--;
        }
    });
    return a;
};

/*
Another solution:

var sortArrayByParity = function(A) {
    let result = [];
    //push all even numbers to result
    for(let i = 0; i < A.length; i++) {
        if(A[i] %2 === 0) {
            result.push(A[i]);
        }
    }
    
    //push all odd numbers to result
    for(let i = 0; i < A.length; i++) {
        if(A[i] %2 !== 0) {
            result.push(A[i]);
        }
    }
    return result;
}
*/

