/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example: 
Input: nums = [3,23]
Output: 3
 * @param {number[]} nums
 * @return {number} the most common element
 */
var majorityElement = function(nums) {
    const tracker = new Map(); 
    for(let i = 0; i < nums.length; i++) {
        if (tracker.get(nums[i])) {
            tracker.set(nums[i], tracker.get(nums[i]) + 1);
        } else {
            tracker.set(nums[i], 1);
        }
    }
 
    let largestElement;
    let largestCount = 0;
    for (const [key, value] of tracker) {
        if(largestCount < value) {
            largestElement = key;
            largestCount = value;
        }
    }
    return largestElement;
 };

 /**
  * Boyer-moore Majority Vote Algorithm Solution
  * Here is a more efficient solution which will track a candidate as we
  * move through the list using a counter and incrementing it if you 
  * find an instance of your candidate and decreasing it if you don't.
  * 
  * This will always result in the most common element being returned.
  * It will however also return a number if there is not a most common
  * element in the list. A second pass is needed to confirm if you are
  * not sure that a most common element exists in the array.
  */

 function majorityElement(nums){
    let candidate;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
};