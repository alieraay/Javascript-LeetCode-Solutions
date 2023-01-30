/**
 * @param {string} s
 * @return {string}
 */

var reverseString = function(x) {
    let reverse_str = "";
    for(let i = 0; i < x.length;i++){
        reverse_str += x[x.length-1-i];
    }
    return reverse_str;
}
var longestPalindrome = function(s) {
    
    let substring1 = [];
    let result = "";

    if(s.length == 1){
        return s[0];
    }

    for(let i = 0; i<s.length-1; i++){
        for(let j = 1; j< s.length+1; j++){
                substring1.push(s.substring(i,j))
            }
        
    }
    for(let i = 0; i<substring1.length;i++) {
        if(substring1[i] == reverseString(substring1[i])){
            if(substring1[i].length > result.length){
                result = substring1[i];
// This if saves time
                if(result.length>substring1.length-i){
                    return result;
                }
            }
        }
    }
    return result;
}
