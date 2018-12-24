/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0,
        high = nums.length - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] == target) {
            return mid;
        } else if(nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return high + 1;
};

// More Optimal Solution
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) {
        return i;
      }
    }
    
    return nums.length;
  };