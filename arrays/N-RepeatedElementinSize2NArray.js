/**
 * @param {number[]} A, array of numbers
 * @return {number}
 */
/*var repeatedNTimes = function(A) {
    let map = {};
    for(let i = 0; i < A.length; i++) {
        if(map[A[i]]) {
            return A[i];
        } else {
            map[A[i]] = 1;
        }
    }
};
*/

// More concise solution
var repeatedNTimes = function(A) {
    for(let i=0; i<A.length/2+1; i++) {
        if(A.lastIndexOf(A[i]) != i) return A[i];
    }
};