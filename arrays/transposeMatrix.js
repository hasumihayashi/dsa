/**
 * @param {number[][]} A
 * @return {number[][]}
 
 TC: O(R*C), where R and C are the number of rows and columns in the matrix A
 SC: O(R*C)
 */

var transpose = function(A) {
    let lenA = A[0].length;
    let lenB = A.length;
    let res = [];
    for(let i = 0; i < lenA; i++) {
        let arr = [];
        for(let j = 0; j < lenB; j++) {
            arr.push(A[j][i])
        } 
        res.push(arr)
    }
    return res;
}