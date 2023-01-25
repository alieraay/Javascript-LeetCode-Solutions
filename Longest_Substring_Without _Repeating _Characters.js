/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start_index =0;
    let finish_index =1;
    let count =1;
    if(s.length==1){
        return 1;

    }

    for(let j = 0; j<s.length;j++){
        if(s[j]==s[j+1]){
        count++;
        }
    }
    if(count==s.length){
        return 1;
    }
    
    
    for(let i = 0; i < s.length-1;i++){
        if(!s.substring(start_index,finish_index).includes(s[i+1])){
            finish_index++;
            if(finish_index-start_index > max){
                max = finish_index-start_index;
            }
        }
        else{
            if(finish_index-start_index > max){
                max = finish_index-start_index;
            }
            start_index++;
            finish_index = start_index+1;
            i = start_index-1;
        }
    }
    return max;
};
