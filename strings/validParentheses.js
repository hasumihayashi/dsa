/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    let map = {
            '(':')',
             '{':'}',
            '[': ']',
    };
    let stack = [];
    let vals = '({[';
	if(str.length === 0) return true;
	for(let i = 0; i < str.length; i++) {
		if(vals.includes(str.charAt(i))) {
        stack.push(str.charAt(i));
        } else {
        let popped = stack.pop();
        if(map[popped] !== str.charAt(i)) {
            return false;
            }
        }
    }

    if(stack.length !== 0) {
         return false;
    } else {
        return true;
    }

};
