/***
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParityII = function(A) {
    let res = [];
    let even = [];
    let odd = [];
    for(let i = 0; i < A.length; i++) {
        if(A[i] % 2 === 0) {
            even.push(A[i]);
        } else {
            odd.push(A[i]);
        }
    }
    console.log(even, odd)
    while(res.length < A.length) {
        res.push(parseInt(even.pop()));
        res.push(parseInt(odd.pop()));
    }
    return res;
};
