/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findPairs = function(nums, k) {
    if(k < 0 || nums.length === 0 || nums === null) return 0;
    let store = new Set();
    let result = new Set();
    
    for(let i = 0; i < nums.length; i++) {
        if(store.has(nums[i] + k)) {
            result.add(nums[i] + k);
        }
        
        if(store.has(nums[i] - k)) {
            result.add(nums[i])
        }
        
        store.add(nums[i])
    }
    return result.size;
}