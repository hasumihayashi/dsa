/**
 * @param {number} n
 * @return {boolean}
 */
function hasAlternatingBits(n) {
	let base2 = (n).toString(2);
	for(let i = 0; i < base2.length; i++) {
		if(base2[i] === base2[i+1]) {
			return false;
        }
    }
    return true;
}



//More Optimal Solution
var hasAlternatingBits = function(n) {
    let binary = (n >>> 0).toString(2);
    let prev;
    for (let i = 0; i < binary.length; i++) {
        if (prev !== undefined) {
            if (binary[i] === prev) return false;
            prev = binary
        }
        prev = binary[i];
    }
    return true;
};