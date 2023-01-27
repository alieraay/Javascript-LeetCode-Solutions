/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    let i = 0;
    
    while(i<nums.length){
        for(let j=0;j<nums.length;j++){
            
            if(nums[i]+nums[j] == target){
                if(i!=j){
                    arr.push(i);
                    arr.push(j);
                    return arr;
                }             
            }
        }
        i++;
    }
};
