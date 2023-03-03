/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){return a-b});
    let sum = nums[0] + nums[1] + nums[2];
    let temp = 0;
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            for(let k = 2; k < nums.length; k++){
                if(i<j && j<k){
                    temp = nums[i] + nums[j] + nums[k];
                    if(Math.abs(target - temp) < Math.abs(target-sum) ){
                        sum = temp;
                    }
                }
            }
        }
    }
    return sum ;
};

