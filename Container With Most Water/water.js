//  /**
//   * @param {number[]} height
//   * @return {number}
//   */
// var maxArea = function(height) {

//     let max_area =0;
//     for (let i = 0; i < height.length; i++){
//         for(let j = height.length-1; j > i; j--){
//             max_area = Math.max(max_area,(Math.min(height[i],height[j])*(j-i)));
//         }
//     }
//     return max_area;
// };

var maxArea = function(height){

    let max_area = 0;
    let min_index = 0;
    let max_index = height.length-1;

    while(min_index < max_index) {
        max_area = Math.max(max_area,Math.min(height[min_index],height[max_index])*(max_index-min_index));
        if(height[min_index] < height[max_index]){
            min_index++;
        }
        else{
            max_index--;
        }

    }
    return max_area;
}
