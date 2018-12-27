/**
 * @param {string} s
 * @return {number}
 */

const longestPalindrome = s => {
    let map = new Map();
    for (let ch of s) {
        if (map.has(ch)) { map.delete(ch); } 
        else { map.set(ch, 1); } 
    }
    return map.size === 0 ? s.length : s.length - map.size + 1;
};

/*
const reducer = (accumulator, currentValue) => accumulator + currentValue;

var longestPalindrome = function(s) {

    let map = {};
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    //get distinct lengths
    let unique = []
    for(var key in map) {
        if(unique.includes(map[key])) {
            continue;
        } else {
            unique.push(map[key]);
        }
    }
    return unique.reduce(reducer);
};

longestPalindrome("abccccdd")

*/