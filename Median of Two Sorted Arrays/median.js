/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [];
    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a-b);
    if(nums1.length==0){
        if(nums2.length % 2 != 0){
            return nums2[(nums2.length-1)/2];
        }
        else{
            return (nums2[nums2.length/2]+nums2[nums2.length/2-1])/2;
        }
    }
    if(nums2.length == 0){

        if(nums1.length % 2 != 0){
            return nums1[(nums1.length-1)/2];
        }
        else{
            return (nums1[nums1.length/2]+nums1[nums1.length/2-1])/2;
        }
    }
    for(let i=0; i<nums1.length;i++){
        nums3.push(nums1[i]);
    }
    for(let i=0; i<nums2.length;i++){

        nums3.push(nums2[i]);
    }
    nums3.sort((a,b) => a-b);   
    console.log(nums3);
    if(nums3.length % 2 != 0){
        return nums3[(nums3.length-1)/2];
    }
    else{
        return (nums3[nums3.length/2]+nums3[nums3.length/2-1])/2;
    }
};
