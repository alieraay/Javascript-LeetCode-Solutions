/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let reverse =0;
    let counter =1;
    let backupx = x;
    let backupx2 = x;
    if(x<0){
        return false
    }

    while(backupx>10){
        backupx = backupx/10;
        counter = counter*10;
    }
    
    while (counter > 0.9){
        reverse += (x % 10) * counter;
        counter = counter / 10;
        x = (x-(x % 10))/10;
    }
 
    if(reverse == backupx2){
        return true;
    }
    else{
        return false;
    }
};
