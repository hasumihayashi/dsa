/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    if(S.length === 0) return [0];
    
    let result = [];
    let i = 0;
    let d = S.length;
    for(let j = 0; j < S.length; j++) {
        if(S[j] === "I") {
            result.push(i);
            i++;
        } else {
            result.push(d);
            d--;
        }
    }
    result.push(i--);
    return result;
};