/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while(x !== 0) {
        result = (result * 10) + (x % 10);
        if(result > Math.pow(2,31) -1 || result < Math.pow(-2, 31)) {
            return 0;
        }
        x = (x/10) | 0;
    }
    return result;
}

console.log(reverse(123) === 321);