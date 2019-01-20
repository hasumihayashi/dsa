/***
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    const wordWithLowerCaseAndJustCharacters = s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '');
  
    let start = 0;
    let end = wordWithLowerCaseAndJustCharacters.length - 1;
    while (start <= end) {
      if (
        wordWithLowerCaseAndJustCharacters[start] !==
        wordWithLowerCaseAndJustCharacters[end]
      ) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
  