/***
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */

var uncommonFromSentences = function(A, B) {
    let a = (A +' ' + B).split(' ');
    let ans = [], map = {};
    for(let i = 0; i < a.length; i++) {
      map[a[i]] = map[a[i]]+1 || 0;
    }
    
    for(let i in map) {
      if(!map[i]) ans.push(i);
    }
    return ans;
  };