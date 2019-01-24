/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
/*
var numJewelsInStones = function(J, S) {
    if(J.length === 0 || S.length === 0) return 0;
    
    let obj = {};
    for(let j = 0; j < J.length; j++) {
        obj[J.charAt(j)] = J.charAt(j);
    }
    
    let res = 0;
    for(let i = 0; i < S.length; i++) {
        let stone = S.charAt(i);
        if(obj[stone]) {
            res++;
        }
    }
    return res;
};
*/

/*
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
*/

var numJewelsInStones = function(J, S) {
    if(J.length === 0 || S.length === 0) return 0;
    
    let res = 0; 
    for(let i = 0; i < S.length; i++) {
       if(J.indexOf(S.charAt(i)) !== -1) {
           res++;
       }
    }
    return res;
}