/**
 * @param {string} s
 * @return {number}
 
 TC: O(N)
 SC: O(N)
 
 palindrome can have as many pairs or even # chars, but at most 1 odd # chars
 */


var longestPalindrome = function(s) {
    let charMap = {};
  
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      charMap[c] = charMap[c] + 1 || 1;
    }
  
    let hasOdd = false;
  
    return Object.keys(charMap).reduce((p, key) => {
      const count = charMap[key];
  
      const amtOfPairs = Math.floor(count / 2);
  
      if (amtOfPairs) {
        p += amtOfPairs * 2;
      }
  
      if (count % 2 !== 0) {
        if (!hasOdd) {
          p += 1;
          hasOdd = true;
        }
      }
  
      return p;
    }, 0);
  };