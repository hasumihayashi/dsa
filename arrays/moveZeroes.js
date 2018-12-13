var moveZeroes = function(nums) {
    //insert 0 at nums.length using splice
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1); //removing 0
            i = i - 1;
            count++;
        }
    }
    for(let j = 0; j < count; j++) {
        nums.push(0)
    }
};