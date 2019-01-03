/**
 * @param {number[][]} A
 * @return {number[][]}
 */

var flipBit = function(bit) {
    return bit === 0 ? 1 : 0;
}

var flipAndInvertImage = function(A) {
   let resultArray = [];
    for(let i = 0; i < A.length; i++) {
        let currArr = [];
        let currStart = 0;
        for(let j = A[i].length-1; j > -1; j--) {
            currArr[currStart] = flipBit(A[i][j]);
            currStart++;
        }
        resultArray.push(currArr);
    }
    return resultArray;
};

