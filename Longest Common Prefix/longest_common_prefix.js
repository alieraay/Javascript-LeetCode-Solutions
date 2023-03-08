/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let common_str = "";
    strs.sort();
    if(strs[0] == ""){
        return "";
    }
    
    for(let i = 0; i < strs[0].length; i++){
        if(strs[0][i] == strs[strs.length-1][i]){
            common_str += strs[0][i];
        }
        else{
            return common_str;
        }
    }
    

    return common_str;
    
};
