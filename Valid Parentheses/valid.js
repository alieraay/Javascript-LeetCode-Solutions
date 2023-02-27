/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  
    let long = s.length;
  
    while(long>=0){
        for(let i = 0; i < s.length+1; i++){
          
            if((s[i] == "(") && (s[i+1] ==")")){
               s = s.substr(0, i) + s.substr(i+2,s.length);      
            }
            else if(s[i] == "[" && s[i+1] =="]"){
               s = s.substr(0, i) + s.substr(i+2, s.length);
            }
            else if(s[i] == "{" && s[i+1] =="}"){
               s = s.substr(0, i) + s.substr(i+2, s.length);
            }  
        }  
        long--;
    }
    if(s.length != 0){
        return false
    }
    return true;
};
