/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    
    while(end > start) {
        var mid = Math.floor((start+end)/2);
        
        if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]) return nums[mid];
        
        if(mid % 2 == 0) {
            if(mid == nums.length-1) return nums[mid];

            if(nums[mid] == nums[mid+1]) {
                start = mid+1;
                continue;
            }
            
            if(mid == 0) return nums[mid];
            
            if(nums[mid] == nums[mid-1]) {
                end = mid-1;
            }
        } else {
            if(mid == nums.length-1) return nums[mid];

            if(nums[mid] == nums[mid+1]) {
                end = mid-1;
                continue;
            }
            
            if(mid == 0) return nums[mid];
            
            if(nums[mid] == nums[mid-1]) {
               start = mid+1;
            }
        }
    }
    
    return nums[start];
};