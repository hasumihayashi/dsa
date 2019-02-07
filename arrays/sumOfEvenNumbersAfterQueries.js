/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */

var sumEven = function(A) {
    let evens = A.filter(a => a % 2 === 0);
    let sum = 0;
    for(let i = 0; i < evens.length; i++) {
        sum += evens[i];
    }
    return sum;
}

var sumEvenAfterQueries = function(A, queries) {    
    let res = [];
    for(let i = 0; i < queries.length; i++) {
        let query = queries[i];
        let val = query[0];
        let index = query[1];
        A[index] += val;
        res.push(sumEven(A));
    }
    return res;
};
