/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */


var isLongPressedName = function(name, typed) {
    /* pointer method */
    let j = 0;
    for(let i = 0; i < typed.length; i++) {
        if(typed[i] === name[j]) {
            j++;
        } 
    }
    if(j === name.length) {
        return true;
    } else {
        return false;
    }
    
};

// MORE OPTIMAL SOLUTION
/*
var isLongPressedName = function(name, typed) {
    let index = 0;
    
    for(let i=0; i<name.length;i++)
    {
        if(index>=typed.length){return false;}
        if(typed[index] == name[i])
        {
            index = index + 1;
            continue;
        }
        if(typed[index] != name[i] && typed[index] == typed[index-1])
        {
            index = index + 1;
            i = i - 1;
            continue;
        }
        return false;
    }
    for(let i=index;i<typed.length; i++)
    {
        if(typed[i]!=typed[index])
        {
            return false;
        }
    }
    return true;
};
*/