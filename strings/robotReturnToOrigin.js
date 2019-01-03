/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    if(moves === "") return true;
    
    let count = 0;
    for(let i = 0; i < moves.length; i++) {
        let move = moves[i];
        if(move === "U") count++;
        if(move === "D") count--;
        if(move === "L") count += 2;
        if(move === "R") count -= 2;
    }
    return count === 0;    
};

/* Another solution:
var judgeCircle = function(moves) {
    let h = 0;
    let v = 0;
    
    for(let i = 0; i < moves.length ; i+=1){
        switch(moves[i]){
            case 'U':
            v++;
            break;
            case 'D':
            v--;
            break;
            case 'L':
            h--;
            break;
            case 'R':
            h++;
            break;
        }
    }
    
    return h === 0 && v === 0;
};
*/