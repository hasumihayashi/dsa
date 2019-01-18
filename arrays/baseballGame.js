var calPoints = function(ops) {
    const history = [];
    let prev;
    for(let i=0;i<ops.length;i++){
        switch(ops[i]){
            case "+" : 
                prev = history.length - 1;
                history.push(history[prev]+history[prev-1]);
                break;
            case "D" : 
                prev = history.length - 1;
                history.push(history[prev] * 2);
                break;
            case "C" : 
                history.pop();
                break;
            default : 
                prev = history.length - 1;
                history.push(parseInt(ops[i]));
                break;
        }
    }
    return history.reduce((accumulator,reducer) => accumulator + reducer)
    
};