/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    /*
    traverse A, push square of num into res
    return sorted res
    */
    let res = [];
    for(let i = 0; i < A.length; i++) {
        res.push(A[i] * A[i])
    }
    return res.sort(function(a, b) { return a - b} );
};