/**
 * @param {number} n
 * @return {number}
 */



var fac = function(fac_number){

    let number =1;

    if(fac_number ==0){
        return 1;
    }
    else {
        for(let i = fac_number; i>0 ; i--){
        number = number*i;
        }
    }
    return number;
}

var climbStairs = function(n) {
    let result =0;
    let double_count = [];
    let two_count; 
    if(n % 2 !=0 ){
        two_count = n/2-0.5;
    }
    else{
        two_count = n/2;
    }
    while(two_count>=0){
        double_count.push(two_count);
        two_count--;
    }
    for(let i = 0; i<double_count.length;i++){
        
        let x = double_count[i]
        let y = n-x*2;

        result += fac(x+y)/(fac(x)*fac(y));
    }
     return result;
};






