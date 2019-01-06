/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var isSelfDividing = num => {
    let x = num;
    while(num > 0) {
        if(x % (num % 10) !== 0) return false;
        num = Math.floor(num / 10);
    }
    return true;
}

var selfDividingNumbers = function(left, right) {
    let res = [];
    for(let num = left; num <= right; num++) {
      if(isSelfDividing(num)) { res.push(num); }  
    }
    
    return res;
};