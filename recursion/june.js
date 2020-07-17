function newYears(num){
    // base case 
    if(num === 0){
        console.log('Happy New Year')
        return;
    }
    //recursive call
    console.log(num);
        newYears(num-1);
}

newYears(5);

/* FACTORIAL 
pick a number  4*3*2*1 = 24
*/

function factorial(num){
    //base case used so it doesn't enter an infinite loop
    if(num === 1){
        return 1
    } else{
    return num * factorial(num-1)
    }
}

console.log(factorial(9))

/**
 * non recusive
 */

 function factorialNon(num){
     let fact = 1;
     for(let x = 0; x<=num; x++){
         fact*=x;
     }
     return fact;
 }
